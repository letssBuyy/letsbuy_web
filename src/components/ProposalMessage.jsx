import React from "react";
import {
    Container,
    CardAdvertise,
    Buttons
} from "../assets/styles/components/proposalMessageStyle";
import ImageDefault from "../assets/images/image-default.png";

export default function ProposalMessage(props) {
    return (
        <>
            <Container style={{ alignItems: props.align }}>
                <span>{props.hour}</span>
                <div>
                    <p>Você tem uma nova proposta</p>
                    <span>O comprador sugeriu o valor de:</span>
                    <CardAdvertise>
                        <div>
                            <img src={props.advertiseImage ? props.advertiseImage : ImageDefault} />
                        </div>
                        <div>
                            <p>{props.advertiseTitle}</p>
                            <span>R$ {props.proposalValue}</span>
                        </div>
                    </CardAdvertise>
                    <Buttons>
                        <button>Aceitar proposta</button>
                        <button>Recusar</button>
                    </Buttons>
                </div>
            </Container>
        </>
    )
}