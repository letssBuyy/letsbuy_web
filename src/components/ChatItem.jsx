import React from "react";
import {
    Container
} from "../assets/styles/components/chatItemStyle"
import { colors } from "../utils/colors";

export default function ChatItem(props) {
    return (
        <>
            <Container style={props.isSelected ? {backgroundColor: colors.whiteGray} : {backgroundColor: "transparent"} }>
                <div>
                    <img src={props.image} alt={props.advertiseName}/>
                </div>
                <div>
                    <h1>{props.advertiseName}</h1>
                    <p>{props.userName}</p>
                    <span>{props.date}</span>
                </div>
            </Container>
        </>
    )    
}