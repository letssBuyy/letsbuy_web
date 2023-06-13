import React from "react";
import {
    Container,
    CardAdvertise,
    Buttons
} from "../assets/styles/components/proposalMessageStyle";
import ImageDefault from "../assets/images/image-default.png";
import axios from "axios";
import { url } from "../utils/request";
import { successAlert, errorAlert } from "../utils/alerts";

export default function ProposalMessage(props) {
    const messageID = props.id;

    async function acceptProposal() {
        await axios.patch(`${url}/chats/${messageID}`).then((response) => {
            successAlert("Proposta aceita com sucesso!")
            deleteProposal()
        }).catch(() => {
            errorAlert("Ocorreu um erro ao aceitar a proposta.")
        })
    }

    async function deleteProposal() {
        await axios.delete(`${url}/messages/${messageID}`).then((response) => {
            successAlert("Proposta recusada com sucesso!")
        }).catch(() => {
            errorAlert("Ocorreu um erro ao recusar a proposta.")
        })
    }

    return (
        <>
            <Container style={{ alignItems: props.align }}>
                <span>{props.hour}</span>
                <div>
                    <p>Você tem uma nova proposta</p>
                    <span>O comprador sugeriu o valor de:</span>
                    <CardAdvertise>
                        <div>
                            <img
                                src={props.advertiseImage ? props.advertiseImage : ImageDefault}
                                alt="Imagem do anúncio"
                            />
                        </div>
                        <div>
                            <p>{props.advertiseTitle}</p>
                            <span>R$ {props.proposalValue}</span>
                        </div>
                    </CardAdvertise>
                    <Buttons style={props.hiddenButtons ? { display: 'none' } : { display: 'flex' }}>
                        <button onClick={() => { acceptProposal() }}>Aceitar proposta</button>
                        <button onClick={() => { deleteProposal() }}>Recusar</button>
                    </Buttons>
                </div>
            </Container>
        </>
    )
}