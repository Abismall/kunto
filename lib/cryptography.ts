
export const hash = (input: string, secret = 420): string => {
    return input.split('').reduce((hashed, char) => {
        return hashed + String.fromCharCode(char.charCodeAt(0) ^ secret);
    }, '');
};

export const unhash = (input: string, secret = 420): string => {
    return input.split('').reduce((unhashed, char) => {
        return unhashed + String.fromCharCode(char.charCodeAt(0) ^ secret);
    }, '');
};