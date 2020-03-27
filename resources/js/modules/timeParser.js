const TokenType = Object.freeze({
    Unknown: 0,
    End: 1,
    Number: 2,
    Hour: 3,
    Minute: 4,
});

const ModeType = Object.freeze({
    Hour: 0,
    Minute: 1,
});

export function toSeconds(text) {
    const parser = new TimeParser();
    const result = parser.parse(text);
    return result.hours * 60 + result.minutes;
}

export function toText(result) {
    if (result.minutes === 0) {
        return `${result.hours}h`;
    }
    if (result.hours === 0) {
        return `${result.minutes}m`;
    }
    return `${result.hours}h ${result.minutes}m`;
}

class Lexer {
    constructor(input) {
        this.input = input;
        this.offset = 0;
    }

    lex() {
        if (this.input.length == 0 || this.offset >= this.input.length) {
            return { type: TokenType.End, offset: this.input.length, length: 0 };
        }
        // White spaces are inline
        while (this.isWhitespace(this.input[this.offset])) {
            this.offset++;
        }

        if (this.input[this.offset] >= '0' && this.input[this.offset] <= '9') {
            return this.number();
        }
        
        return this.unit();
    }

    number() {
        const start = this.offset;
        const l = this.input.length;
        while (++this.offset < l && this.input[this.offset] >= '0' && this.input[this.offset] <= '9') { }
        if (this.input[this.offset] === '.') {
            this.offset++;
            while (++this.offset < l && this.input[this.offset] >= '0' && this.input[this.offset] <= '9') { }
        }

        return { type: TokenType.Number, offset: start, length: this.offset-start };
    }

    unit() {
        const start = this.offset;
        let tokenType = TokenType.Unknown;
        switch (this.input[this.offset++]) {
            case 'h':
                tokenType = TokenType.Hour;
                break;
            case 'm':
                tokenType = TokenType.Minute;
                break;
        }
        return { type: tokenType, offset: start, length: this.offset-start };
    }

    isWhitespace(c) {
        return c === ' ' || c === '\n' || c === '\r' || c === '\t';
    }
}

export class TimeParser {
    parse(text) {
        this.text = text;
        this.lexer = new Lexer(text);
        this.mode = ModeType.Hour;
        this.state = {
            hours: 0,
            minutes: 0,
        };
        this.tokenBuffer = [];

        this.number();
        return this.state;
    }

    next() {
        const t = this.tokenBuffer.length ? this.tokenBuffer.shift() : this.lexer.lex();
        return t;
    }

    peek() {
        if (this.tokenBuffer.length > 0) {
            return this.tokenBuffer[0];
        }
        const t = this.lexer.lex();
        this.tokenBuffer.push(t);
        return t;
    }

    number() {
        const token = this.next();
        if (token.type === TokenType.Number) {
            this.unit(token);
            return;
        }

        // Error recovery
        this.error(token);
    }

    error(token) {
        // Case: h 30m
        if (this.mode == ModeType.Hour && token.type == TokenType.Hour) {
            if (this.peek().type == TokenType.Number) {
                return;
            }
            this.next();
            while (this.peek().type != TokenType.Number) {
                if (this.peek().type == TokenType.End) {
                    // Reach the end and there is still no number
                    return;
                }
                this.next();
            }
            this.mode = ModeType.Minute;
            this.number();
            return;
        }
        // Cannot recover
    }

    unit(numberToken) {
        const token = this.next();
        switch (token.type) {
            case TokenType.Hour:
                this.transformHours(this.getNumber(numberToken));
                this.number();
                return;
            case TokenType.Minute:
                this.state.minutes += this.getNumber(numberToken);
                return;
            case TokenType.End:
                this.transformHours(this.getNumber(numberToken));
                return;
            case TokenType.Unknown:
                return;
        }
    }

    transformHours(hours) {
        const minutes = Math.round((hours % 1) * 60);
        this.state.hours = Math.floor(hours);
        if (minutes !== 0) {
            this.state.minutes = minutes;
        }
    }

    getNumber(token) {
        return parseFloat(this.text.substr(token.offset, token.offset + token.length));
    }
}