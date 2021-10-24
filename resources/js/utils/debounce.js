export function debounce(fn, wait) {
    let timeout = null;
    const debounced = function(...args) {
        const later = () => {
            timeout = null;
            fn.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
    return debounced;
}
