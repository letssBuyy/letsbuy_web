import Baby from "../assets/images/categorys/baby.png";
import Book from "../assets/images/categorys/book.png";
import Car from "../assets/images/categorys/car.png";
import Eletronics from "../assets/images/categorys/eletronics.png";
import Fashion from "../assets/images/categorys/fashion.png";
import Home from "../assets/images/categorys/homeAndDecor.png";
import Pets from "../assets/images/categorys/pets.png";
import Sport from "../assets/images/categorys/sport.png";
import Auto from "../assets/images/categorys/auto-parts.png";
import Films from "../assets/images/categorys/films.png";
import Hobbie from "../assets/images/categorys/hobbie.png";

export const colorOptions = [
    { value: '', label: 'Selecione uma cor' },
    { value: 'RED', label: 'Vermelho' },
    { value: 'GREEN', label: 'Verde' },
    { value: 'BLUE', label: 'Azul' },
    { value: 'YELLOW', label: 'Amarelo' },
    { value: 'ORANGE', label: 'Laranja' },
    { value: 'PURPLE', label: 'Roxo' },
    { value: 'PINK', label: 'Rosa' },
    { value: 'BLACK', label: 'Preto' },
    { value: 'WHITE', label: 'Branco' },
    { value: 'GRAY', label: 'Cinza' },
    { value: 'BROWN', label: 'Marrom' },
    { value: 'SILVER', label: 'Prata' },
    { value: 'GOLD', label: 'Dourado' },
    { value: 'NAVY', label: 'Azul marinho' },
    { value: 'TEAL', label: 'Verde azulado' },
];

export const categoryOptions = [
    { value: '', label: 'Selecione uma categoria' },
    { value: 'VEHICLES', label: 'Veículos' },
    { value: 'ELECTRONICS', label: 'Eletrônicos' },
    { value: 'FASHION_ACESSORIES', label: 'Acessórios' },
    { value: 'HOUSE_DECORATION', label: 'Casa e decoração' },
    { value: 'BOOKS', label: 'Livros' },
    { value: 'FILMS', label: 'Filmes' },
    { value: 'HOBBIES', label: 'Hobbies' },
    { value: 'AUTO_PARTS', label: 'Auto peças' },
    { value: 'SPORTS_LEISURE', label: 'Esporte e lazer' },
    { value: 'PETS', label: 'Pets' },
    { value: 'CHILDREN', label: 'Bebês e crianças' },
];

export const qualityOptions = [
    { value: '', label: 'Selecione a qualidade' },
    { value: 'NEW', label: 'Novo' },
    { value: 'SEMI_NEW', label: 'Semi Novo' },
    { value: 'USED', label: 'Usado' },
    { value: 'DEFECTIVE', label: 'Defeituoso' },
];

export const categorys = [
    {
        title: "Veículos",
        image: Car,
        value: "VEHICLES"
    },
    {
        title: "Eletrônicos",
        image: Eletronics,
        value: "ELECTRONICS"
    },
    {
        title: "Acessórios",
        image: Fashion,
        value: "FASHION_ACESSORIES"
    },
    {
        title: "Casa e decoração",
        image: Home,
        value: "HOUSE_DECORATION"
    },
    {
        title: "Livros",
        image: Book,
        value: "BOOKS"
    },
    {
        title: "Filmes",
        image: Films,
        value: "FILMS"
    },
    {
        title: "Hobbies",
        image: Hobbie,
        value: "HOBBIES"
    },
    {
        title: "Auto peças",
        image: Auto,
        value: "AUTO_PARTS"
    },
    {
        title: "Esporte e lazer",
        image: Sport,
        value: "SPORTS_LEISURE"
    },
    {
        title: "Pets",
        image: Pets,
        value: "PETS"
    },
    {
        title: "Bebês e crianças",
        image: Baby,
        value: "CHILDREN"
    }
];

export function findByCategory(category) {
    switch (category) {
        case "VEHICLES":
            return "Veículos"
        case "ELECTRONICS":
            return "Eletrônicos"
        case "FASHION_ACESSORIES":
            return "Acessórios"
        case "HOUSE_DECORATION":
            return "Casa e decoração"
        case "BOOKS":
            return "Livros"
        case "FILMS":
            return "Filmes"
        case "HOBBIES":
            return "Hobbies"
        case "AUTO_PARTS":
            return "Auto peças"
        case "SPORTS_LEISURE":
            return "Esporte e lazer"
        case "PETS":
            return "Pets"
        case "CHILDREN":
            return "Bebês e crianças"
        default:
            break;
    }
}

export function findByQuality(quality) {
    switch (quality) {
        case "NEW":
            return "Novo"
        case "SEMI_NEW":
            return "Semi Novo"
        case "USED":
            return "Usado"
        case "DEFECTIVE":
            return "Defeituoso"
        default:
            break;
    }
}

export function findByColor(color) {
    switch (color) {
        case 'RED':
            return 'Vermelho';
        case 'GREEN':
            return 'Verde';
        case 'BLUE':
            return 'Azul';
        case 'YELLOW':
            return 'Amarelo';
        case 'ORANGE':
            return 'Laranja';
        case 'PURPLE':
            return 'Roxo';
        case 'PINK':
            return 'Rosa';
        case 'BLACK':
            return 'Preto';
        case 'WHITE':
            return 'Branco';
        case 'GRAY':
            return 'Cinza';
        case 'BROWN':
            return 'Marrom';
        case 'SILVER':
            return 'Prata';
        case 'GOLD':
            return 'Dourado';
        case 'NAVY':
            return 'Azul marinho';
        case 'TEAL':
            return 'Verde azulado';
        default:
            break;
    }
}