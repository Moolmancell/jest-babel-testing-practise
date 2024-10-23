export function capitalize(string) {
    if (typeof string === "string") {
        return string.charAt(0).toUpperCase() + string.slice(1);
      } else {
        return string;
      }
}

export function reverseString(string) {
    if (typeof string === "string") {
        return string.split("").reverse().join("");
      } else {
        return string;
      }
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (a === 0 || b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
}