import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from '../../utils/fonts'

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
    border:solid 2px gray;
    border-radius: 15px;
    width:16%;
`

export const CaixaGraficos = styled.div`
    height:50vh;
    display:flex;
    justify-content: space-between;
    margin-top:5%;
    `
export const Graficos = styled.div`
    border:solid 2px gray;
    border-radius: 15px;
    width:40%;
`

export const Limitador = styled.div`
    width:90%;
    margin-left:4.8%;
    
    `