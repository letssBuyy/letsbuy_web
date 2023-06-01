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
export const DivAccordin = styled.div`
    margin-top:3%;

    @media screen and (max-width: 900px) {
        max-width: 100vw;
        flex-direction: column-reverse;
        padding: 0px;
        margin: 50px 20px 0 20px;
    
    
      }
`

export const H1Accordin = styled.h1`
  padding: 30px;
  font-size:18px;
  font-family:{fonts.regular};

  @media screen and (max-width: 900px) {
    font-size:15px;
  }

  @media screen and (max-width: 400px) {
    font-size:17px;
  }
`

export const Image = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    @media screen and (max-width: 900px) {
      align-items: center;
      justify-content: center;

      img {
        max-width: 200px;
      }
  }
`

export const Title = styled.p`
  color: ${colors.blackGray};
  font-family: '${fonts.regular}';
  font-size: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 900px) {
    font-size:30px;
  }

  @media screen and (max-width: 400px) {
    font-size:20px;
    text-align: center;
  }
`

export const P = styled.p`
  font-family: ${fonts.regular};
  color: ${colors.black};
  font-size: 20px;

  @media screen and (max-width: 900px) {
    font-size:15px;
  }

  @media screen and (max-width: 400px) {
    font-size:14px;
    text-align: center;
  }
`