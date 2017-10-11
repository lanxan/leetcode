/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let prev = '', now = '';
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        now = s.charAt(i);
        prev = stack[stack.length - 1];

        if ((prev === '(' && now ===')') || (prev === '[' && now ===']') || (prev === '{' && now ==='}')) {
            stack.pop();
        } else {
            stack.push(now);
        }
    }
    
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};
