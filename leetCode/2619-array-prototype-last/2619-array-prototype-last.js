Array.prototype.last = function() {
    const result = this[this.length - 1]
    return result === undefined ? -1 : result 
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */