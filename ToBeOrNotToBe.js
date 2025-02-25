type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (expected: any) => {
            if (val !== expected) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: (unexpected: any) => {
            if (val === unexpected) {
                throw new Error("Equal");
            }
            return true;
        }
    };
}

/** Example usage **/
console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(10)); // true