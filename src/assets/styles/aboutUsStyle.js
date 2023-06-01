import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from '../../utils/fonts'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 100px auto 0 auto;
    overflow-x: hidden;
    justify-content: space-between;
    padding: 0 100px;

    > div {
      width: 70vw;
    }

    > div div {
        margin-bottom: 60px;
    }

  @media screen and (max-width: 900px) {
    max-width: 100vw;
    flex-direction: column-reverse;
    padding: 0px;
    margin: 50px 20px 0 20px;

    > div {
      width: 100%;
    }

    > div div {
        margin-bottom: 60px;
    }
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
  font-size: 20px;
  margin-bottom: 30px;
`

export const P = styled.p`
  font-family: ${fonts.regular};
  color: ${colors.black};
  font-size: 16px;
`