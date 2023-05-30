import moment from "moment/moment";

export function containsNumbers(str) {
    const regex = /\d/;
    return regex.test(str);
}

export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

export function validateAge(birthdate) {
    const today = moment();
    const age = today.diff(birthdate, 'years');
    return age >= 18;
};

export function toUppercasedString(string) {
    let minhaString = string;
    let minhaStringMaiuscula = minhaString.toUpperCase();
    return minhaStringMaiuscula
}