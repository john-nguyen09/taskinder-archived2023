export const ERROR_MESSAGE_FIELD = 'errorMessage';

export default class Errors {
    /**
     * Create a new Errors instance.
     */
    constructor() {
        this.errors = {};
    }


    /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     */
    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    hasErrorMessage() {
        return this.has(ERROR_MESSAGE_FIELD);
    }

    /**
     * Determine if we have any errors.
     */
    any() {
        return Object.keys(this.errors).length > 0;
    }


    /**
     * Retrieve the error message for a field.
     *
     * @param {string} field
     */
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    getErrorMessage() {
        if (this.errors[ERROR_MESSAGE_FIELD]) {
            return this.errors[ERROR_MESSAGE_FIELD];
        }
    }


    /**
     * Record the new errors.
     *
     * @param {object} errors
     */
    record(errors) {
        this.errors = errors;
    }

    handle(payload) {
        this.clear();
        if (payload.response) {
            if (payload.response.data.errors) {
                this.record(payload.response.data.errors);
            }
            if (payload.response.data.message) {
                this.record({
                    [ERROR_MESSAGE_FIELD]: payload.response.data.message,
                });
            }
        } else {
            this.record({
                [ERROR_MESSAGE_FIELD]: 'Unknown error',
            });
        }
    }


    /**
     * Clear one or all error fields.
     *
     * @param {string|null} field
     */
    clear(field) {
        if (field) {
            delete this.errors[field];

            return;
        }

        this.errors = {};
    }
}