import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from '../../utils/fonts'

export const Container = styled.div`
    max-width: 376px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 55px auto 0 auto;
    width: '90vw',
    height: '100vh',
    border: 'pink 1px solid',
    padding: '20px',
    justifyContent: 'space-between'


> div {
  width: 100%;
  margin-bottom: 30px;
}

@media screen and (max-width: 500px) {
  padding: 20px;
}

    `
    
    export const Title = styled.p`
  color: ${colors.blackGray};
  font-family: '${fonts.semiBold}';
  font-size: 25px;
  margin-bottom: 40px;
`

export const P = styled.p`
  color: ${colors.black};
  font-size: 17px;
  margin: 3px 0px 3px 0px;
`

export const Image = styled.img`
    max-width: 90%;
    height: auto;
    margin-bottom:10px;
`;

    ;
