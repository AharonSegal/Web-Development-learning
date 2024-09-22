/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    let a = val;
    
    return {
        toBe: function(expected) {
            if (a === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        
        notToBe: function(expected) {
            if (a !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

/**
 * Example usage:
 */
try {
    console.log(expect(5).toBe(5)); // true
} catch (e) {
    console.log({ error: e.message });
}

try {
    console.log(expect(5).notToBe(5)); // Error: Equal
} catch (e) {
    console.log({ error: e.message });
}

try {
    console.log(expect(5).toBe(null)); // Error: Not Equal
} catch (e) {
    console.log({ error: e.message });
}

try {
    console.log(expect(5).notToBe(null)); // true
} catch (e) {
    console.log({ error: e.message });
}
