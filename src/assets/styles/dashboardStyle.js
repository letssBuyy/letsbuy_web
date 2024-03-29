import styled from "styled-components";
import { fonts } from '../../utils/fonts'
import { colors } from "../../utils/colors"

export const Container = styled.div`
    display: column;
    align-items: flex-start;
    margin: 100px auto 0 auto;
    overflow-x: hidden;
    justify-content: space-between;
    padding: 0 100px;


  @media screen and (max-width: 900px) {
    max-width: 100vw;
    flex-direction: column-reverse;
    padding: 0px;
    margin: 50px 20px 0 20px;
}
`

export const CaixaKpi = styled.div`
    height:12vh;
    display:flex;
    justify-content: space-between;
    margin-top:5%;
    `
export const CaixasFilhas = styled.div`
    border: solid 2px #ECE8E5;
    border-radius: 15px;
    width: 20%;
    display:flex;
    align-items: center;
    
`

export const ImagensCaixinhas = styled.div`
   width: 35%;
   align-self: center;
   padding-left:8%;
   padding-top:3%;
`

export const Quantidades = styled.span`
    font-size: 30px;
    margin-top: 10%;
    align-self: center;
    font-family: ${fonts.regular};
    margin-left: 10px;
`
export const Legendas = styled.span`
    font-size:12px;
    font-family: ${fonts.regular};
    color: ${colors.blackGray};
    margin-left: 10px;
`

export const TituloGrafico = styled.span`
    font-size:30px;
    font-family:'${fonts.semiBold}';
    margin: -5px 35px;
`

export const SemiTitulo = styled.span`
    font-size:15px;
    font-family:'${fonts.light}';
    margin: 0px 35px;   
`

export const Titulos = styled.div`
    display:grid;
    height:100%;
`

export const CaixaGraficos = styled.div`
    height:55vh;
    width:100%;
    display:flex;
    justify-content: space-between;
    margin-top:5%;
`

export const Graficos = styled.div`
    border:solid 2px #ECE8E5;
    border-radius: 15px;
    width:44%;
    padding-top:2%;
    display:grid;
`

export const Limitador = styled.div`
    width: 90%;
    margin-left:4.8%;
    margin-top: 140px;
`