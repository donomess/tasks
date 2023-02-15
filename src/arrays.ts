/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length > 1) {
        return [numbers[0], numbers[numbers.length - 1]];
    } else if (numbers.length > 0) {
        return [numbers[0], numbers[0]];
    } else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((number: number): number => number * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((number) =>
        Number.isNaN(Number(number)) ? 0 : parseInt(number)
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const noDollar = amounts.map((amount) =>
        amount.charAt(0) == "$"
            ? parseInt(amount.replace("$", ""))
            : parseInt(amount)
    );
    return noDollar.map((number) => (Number.isNaN(number) ? 0 : number));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQs = messages.filter(
        (message: string): boolean => !message.includes("?")
    );
    return noQs.map((message) =>
        message.includes("!") ? (message = message.toUpperCase()) : message
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((word: string): boolean => word.length < 4).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const filterRed = colors.filter((color: string): boolean => color != "red");
    const filterBlue = filterRed.filter(
        (color: string): boolean => color != "blue"
    );
    const filterGreen = filterBlue.filter(
        (color: string): boolean => color != "green"
    );
    if (filterGreen.length > 0) {
        return false;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length < 1) {
        return "0=0";
    }
    if (addends.length == 1) {
        return addends[0].toString() + "=" + addends[0].toString();
    }
    const sum = addends.reduce((a, b) => a + b, 0);
    const answer = addends.map((ele) => ele.toString());
    const finalAnswer = answer.map((ele) => ele + "+");
    finalAnswer.unshift(sum.toString() + "=");
    finalAnswer[finalAnswer.length - 1] = finalAnswer[
        finalAnswer.length - 1
    ].replace("+", "");
    return finalAnswer.join("");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let posSum = 0;
    let negSum = 0;
    let foundNeg = false;
    const makeSum = values.map((value: number): number => {
        if (value < 0 && foundNeg == false) {
            foundNeg = true;
            negSum = posSum;
            posSum += value;
            return value;
        } else {
            posSum += value;
            return value;
        }
    });
    if (!foundNeg) {
        makeSum.push(posSum);
    } else {
        const neg = makeSum.findIndex((negative: number) => negative < 0);
        makeSum.splice(neg + 1, 0, negSum);
    }
    return makeSum;
}
