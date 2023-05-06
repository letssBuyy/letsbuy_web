import React from "react";
import {
    Container
} from "../assets/styles/components/chatMessageStyle"

export default function ChatMessage(props) {
    return (
        <>
            <Container style={{ alignItems: props.align }}>
                <span>{props.hour}</span>
                <div>
                    <p>{props.message}</p>
                </div>
            </Container>
        </>
    )
}