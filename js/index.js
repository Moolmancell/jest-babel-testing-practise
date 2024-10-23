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

export function caesarCipher(str, shift) {
    if (typeof str !== "string") {
        return str;
    }

    let result = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char.match(/[a-zA-Z]/)) {
            let code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                code = (((code - 65) + shift + 26) % 26) + 65; // Handle negative shifts
            } else if (code >= 97 && code <= 122) {
                code = (((code - 97) + shift + 26) % 26) + 97; // Handle negative shifts
            }
            result += String.fromCharCode(code);
        } else {
            result += char;
        }
    }
    return result;
}

export function analyzeArray(arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }

    arr.sort(function(a, b){return a-b});

    return {
        average: arr.length !== 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0,
        min: arr[0],
        max: arr[arr.length - 1],
        length: arr.length
    }
}
