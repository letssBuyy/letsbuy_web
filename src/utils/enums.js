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
    { value: 'red', label: 'Vermelho' },
    { value: 'green', label: 'Verde' },
    { value: 'blue', label: 'Azul' },
];

export const categoryOptions = [
    { value: '', label: 'Selecione uma categoria' },
    { value: 'VEHICLES', label: 'Veículos' },
    { value: 'ELECTRONICS', label: 'Eletrônicos' },
    { value: 'FASHION_ACESSORIES', label: 'Acessorios' },
    { value: 'HOUSE_DECORATION', label: 'Casa e decoração' },
    { value: 'BOOKS', label: 'Livros' },
    { value: 'FILMS', label: 'Filmes' },
    { value: 'HOBBIES', label: 'Hobbies' },
    { value: 'AUTO_PARTS', label: 'Auto peças' },
    { value: 'SPORTS_LEISURE', label: 'Esporte e lazer' },
    { value: 'PETS', label: 'Pets' },
    { value: 'CHILDREN', label: 'Bebês e crianças' },
];

export const categorys = [
    {
        title: "Veículos",
        image: Car
    },
    {
        title: "Eletrônicos",
        image: Eletronics
    },
    {
        title: "Acessorios",
        image: Fashion
    },
    {
        title: "Casa e decoração",
        image: Home
    },
    {
        title: "Livros",
        image: Book
    },
    {
        title: "Filmes",
        image: Films
    },
    {
        title: "Hobbies",
        image: Hobbie
    },
    {
        title: "Auto peças",
        image: Auto
    },
    {
        title: "Esporte e lazer",
        image: Sport
    },
    {
        title: "Pets",
        image: Pets
    },
    {
        title: "Bebês e crianças",
        image: Baby
    }
];

export const qualityOptions = [
    { value: '', label: 'Selecione a qualidade' },
    { value: 'NEW', label: 'Novo' },
    { value: 'SEMI_NEW', label: 'Semi Novo' },
    { value: 'USED', label: 'Usado' },
    { value: 'DEFECTIVE', label: 'Defeituoso' },
];