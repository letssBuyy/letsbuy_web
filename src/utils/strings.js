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

export function formatCurrency(value) {
    // Verifica se o valor é um número
    if (typeof value !== 'number') {
        return '';
    }

    // Formata o valor para duas casas decimais
    const formattedValue = value.toFixed(2);

    // Substitui o ponto pela vírgula como separador decimal
    const formattedString = formattedValue.replace('.', ',');

    // Adiciona separador de milhares e símbolo monetário
    const parts = formattedString.toString().split(',');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Retorna o valor formatado
    return `R$ ${parts.join(',')}`;
}