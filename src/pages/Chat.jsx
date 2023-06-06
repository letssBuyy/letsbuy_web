import React, { useState, useRef, useEffect, useContext } from "react";
import ImageDefault from "../assets/images/image-default.png";
import Send from "../assets/images/icon-send.svg";
import Navbar from "../components/Navbar";
import ChatItem from "../components/ChatItem";
import ChatMessage from "../components/ChatMessage";
import ProposalMessage from "../components/ProposalMessage";
import moment from "moment";
import "moment/locale/pt-br";
import More from "../assets/images/icon-more-pink.svg";
import ArrowLeft from "../assets/images/icon-arrow-left.svg";
import {
    Container,
    SideBar,
    TopBar,
    ProfileImage,
    ChatContainer,
    BottomBar,
    SubContainer,
    ModalMoreOptions,
    NoContentContainer
} from "../assets/styles/chatStyle";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from 'react-router-dom';
import NoContent from "../components/NoContent";

export default function Chat() {
    moment.locale("pt-br");
    const [message, setMessage] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const containerRef = useRef(null);
    const subContainerRef = useRef(null);
    const sideBarRef = useRef(null)
    const [selected, setSelected] = useState(2);
    const [advertiseId, setAdvertiseId] = useState(0);
    const [advertiseTitle, setAdvertiseTitle] = useState('Bolsa marrom');
    const [advertiseImage, setAdvertiseImage] = useState('https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    const [userImageProfile, setUserImageProfile] = useState('');
    const [userName, setUserName] = useState('Regina Lima');
    const { user, isAuthenticated } = useContext(AuthContext);
    let userId = user.id;
    let navigate = useNavigate();

    function formatDate(date) {
        const messageDate = moment(date);
        let formattedDate;

        if (moment().diff(messageDate, "days") === 0) {
            formattedDate = "Hoje";
        } else if (moment().diff(messageDate, "days") === 1) {
            formattedDate = "Ontem";
        } else if (moment().day() === messageDate.day()) {
            formattedDate = messageDate.format("dddd");
        } else {
            formattedDate = messageDate.format("dddd, D [de] MMMM");
        }

        return formattedDate;
    }

    function obterHorario(data) {
        const objMoment = moment(data);
        const horario = objMoment.format("HH:mm");

        return horario;
    }

    function togleOptions() {
        setShowOptions(!showOptions)
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            sendMessage()
        }
    }

    function handleSelectedItem(id) {
        loadMessages(id)
        setSelected(id)

        if (window.innerWidth < 900) {
            sideBarRef.current.style.display = "none";
            subContainerRef.current.style.display = "flex";
        }
    }

    function BackToChats() {
        sideBarRef.current.style.display = "flex";
        subContainerRef.current.style.display = "none";
    }

    const chats = [
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Kawan Gonçalves",
            date: "2023-05-06T09:23:45.000Z",
            id: 1,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Gustavo Rezende",
            date: "2023-04-10T09:23:45.000Z",
            id: 2,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Leonardo Nakagawa",
            date: "2023-05-05T09:23:45.000Z",
            id: 3,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Yohan Hudson",
            date: "2023-05-05T09:23:45.000Z",
            id: 4,
        },
    ]

    const chat = {
        id: 123,
        members: [
            {
                id: 1,
                name: "Alice"
            },
            {
                id: 2,
                name: "Bob"
            }
        ],
        content: [
            {
                date: "2023-05-05",
                messages: [
                    {
                        sender: {
                            id: 1,
                            name: "Alice"
                        },
                        value: "Olá, tudo bem?",
                        timestamp: "2023-05-05T09:23:45.000Z",
                        isProposal: false
                    },
                    {
                        sender: {
                            id: 2,
                            name: "Bob"
                        },
                        value: "Sim, e você?",
                        timestamp: "2023-05-05T09:30:12.000Z",
                        isProposal: false
                    }
                ]
            },
            {
                date: "2023-05-06",
                messages: [
                    {
                        sender: {
                            id: 2,
                            name: "Bob"
                        },
                        value: "Bom dia!",
                        timestamp: "2023-05-06T08:45:21.000Z",
                        isProposal: false
                    },
                    {
                        sender: {
                            id: 2,
                            name: "Bob"
                        },
                        value: "Bom dia, Charlie!",
                        timestamp: "2023-05-06T08:47:36.000Z",
                        isProposal: false
                    },
                    {
                        sender: {
                            id: 1,
                            name: "Alice"
                        },
                        value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        timestamp: "2023-05-06T09:02:17.000Z",
                        isProposal: false
                    },
                    {
                        sender: {
                            id: 2,
                            name: "Bob"
                        },
                        value: "",
                        timestamp: "2023-05-06T09:02:17.000Z",
                        isProposal: true,
                        proposal: {
                            value: "200"
                        }
                    },
                ]
            }
        ]
    };

    function loadChats() {
        //Carregar as conversas do usuario
    }

    function loadMessages(idChat) {
        console.log(idChat)
        //Carregar as conversas de um chat especifico do usuario
    }

    function sendMessage() {
        //ENVIA MENSAGEM DO USUARIO
    }

    function sendDetailAd() {
        navigate(`/anuncio/${advertiseId}`)
    }

    function createProposal() {
        //CRIAR PROPOSTA
        //CRIAR MODAL
    }

    useEffect(() => {
        const container = containerRef.current;
        container.scrollTop = container.scrollHeight - container.clientHeight;

        if (!isAuthenticated) {
            navigate("/")
        } else {
            loadChats()
        }
    }, []);

    return (
        <>
            <Navbar type='basic' isAuthenticated={false} showBackButton={true} />
            <Container>
                <SideBar ref={sideBarRef}>
                    {
                        chats.length ?
                            chats.map((item, index) => (
                                <>
                                    <div onClick={() => handleSelectedItem(item.id)}>
                                        <ChatItem
                                            key={index}
                                            image={item.image}
                                            advertiseName={item.advertiseName}
                                            userName={item.userName}
                                            date={formatDate(item.date)}
                                            isSelected={selected === item.id}
                                        />
                                    </div>
                                </>
                            ))

                            :

                            <>
                                <NoContentContainer>
                                    <NoContent
                                        message="Você ainda não possui conversas"
                                        accessibilityMessage="Você ainda não possui conversas"
                                    />
                                </NoContentContainer>
                            </>}
                </SideBar>
                <SubContainer ref={subContainerRef}>
                    <TopBar>
                        <div onClick={BackToChats}>
                            <img src={ArrowLeft} alt="Voltar" />
                        </div>
                        <ProfileImage>
                            <img src={userImageProfile ? userImageProfile : ImageDefault} alt="Foto de perfil" />
                            <p>{userName}</p>
                        </ProfileImage>
                        <div onClick={togleOptions}>
                            <img src={More} alt="Clique para ver mais" />
                        </div>

                        <ModalMoreOptions style={showOptions ? { display: "flex" } : { display: "none" }}>
                            <button onClick={() => sendDetailAd()}>Ver anúncio</button>
                            <button onClick={() => createProposal()}>Enviar proposta</button>
                        </ModalMoreOptions>
                    </TopBar>
                    <ChatContainer ref={containerRef}>

                        {

                            chat.content.length ?
                                chat.content.map((item, index) => (
                                    <>
                                        <p key={index}>{formatDate(item.date)}</p>
                                        {item.messages.map((message, index) => (
                                            !message.isProposal ?
                                                <ChatMessage
                                                    key={index}
                                                    align={message.sender.id === userId ? "flex-end" : "flex-start"}
                                                    hour={obterHorario(message.timestamp)}
                                                    message={message.value}
                                                />
                                                :
                                                <>
                                                    <ProposalMessage
                                                        key={index}
                                                        align={message.sender.id === userId ? "flex-end" : "flex-start"}
                                                        hour={obterHorario(message.timestamp)}
                                                        proposalValue={message.proposal.value}
                                                        advertiseImage={advertiseImage}
                                                        advertiseTitle={advertiseTitle}
                                                    />
                                                </>
                                        ))}
                                    </>
                                ))
                                :
                                <>
                                    <NoContentContainer>
                                        <NoContent
                                            message="Você ainda não possui mensagens"
                                            accessibilityMessage="Você ainda não possui mensagens"
                                        />
                                    </NoContentContainer>
                                </>
                        }
                    </ChatContainer>
                    <BottomBar>
                        <input
                            placeholder="Digite uma mensagem..."
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button onClick={sendMessage}>
                            <img src={Send} alt="Enviar mensagem" />
                        </button>
                    </BottomBar>
                </SubContainer>
            </Container >
        </>
    )
}