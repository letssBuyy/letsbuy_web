import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { fonts } from "../../../utils/fonts";

export const AccordionWrapper = styled.div`
  border: 1px solid ${colors.gray};
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 15px;
  font-weight: bold;
  cursor: pointer;
 
    h1 {
      font-family: ${fonts.regular};
      font-size: 16px;
      color: ${colors.blackGray};
    }
`;

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: height 0.2s ease-out;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${colors.gray};
`;