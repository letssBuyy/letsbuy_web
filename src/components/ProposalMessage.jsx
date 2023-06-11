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
            if (response.status === 200) {
                successAlert("Proposta aceita com sucesso!")
            } else {
                errorAlert("Ocorreu um erro ao aceitar a proposta.")
            }
        }).catch(() => {
            errorAlert("Ocorreu um erro ao aceitar a proposta.")
        })
    }

    async function refuseProposal() {
        await axios.delete(`${url}/messages/${messageID}`).then((response) => {
            if (response.status === 200) {
                successAlert("Proposta recusada com sucesso!")
            } else {
                errorAlert("Ocorreu um erro ao recusar a proposta.")
            }
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
                    <Buttons style={props.hiddenButtons ? {display: 'none'} : {display: 'flex'}}>
                        <button onClick={() => { acceptProposal() }}>Aceitar proposta</button>
                        <button onClick={() => { refuseProposal() }}>Recusar</button>
                    </Buttons>
                </div>
            </Container>
        </>
    )
}