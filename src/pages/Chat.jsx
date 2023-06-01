import React, { useState, useRef, useEffect } from "react";
import Send from "../assets/images/icon-send.svg";
import Navbar from "../components/Navbar";
import ChatItem from "../components/ChatItem";
import ChatMessage from "../components/ChatMessage";
import moment from "moment";
import "moment/locale/pt-br";
import More from "../assets/images/icon-more-pink.svg";
import ArrowLeft from "../assets/images/icon-arrow-left.svg"
import {
    Container,
    SideBar,
    TopBar,
    ProfileImage,
    ChatContainer,
    BottomBar,
    SubContainer,
    ModalMoreOptions
} from "../assets/styles/chatStyle";

export default function Chat() {
    const [message, setMessage] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const containerRef = useRef(null);
    const subContainerRef = useRef(null);
    const sideBarRef = useRef(null)
    const [selected, setSelected] = useState(2);
    moment.locale("pt-br");
    let userId = 1

    function handleMessage(event) {
        setMessage(event.target.value)
    }

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

    function sendMessage() {
        console.log(message)
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            sendMessage()
        }
    }

    function handleSelectedItem(id) {
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
            userName: "Kawan Gonçalves",
            date: "2023-04-10T09:23:45.000Z",
            id: 2,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Kawan Gonçalves",
            date: "2023-05-05T09:23:45.000Z",
            id: 3,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Kawan Gonçalves",
            date: "2023-05-05T09:23:45.000Z",
            id: 4,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Kawan Gonçalves",
            date: "2023-05-05T09:23:45.000Z",
            id: 5,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Kawan Gonçalves",
            date: "2023-05-05T09:23:45.000Z",
            id: 6,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Kawan Gonçalves",
            date: "2023-05-05T09:23:45.000Z",
            id: 7,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Kawan Gonçalves",
            date: "2023-05-05T09:23:45.000Z",
            id: 8,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Kawan Gonçalves",
            date: "2023-05-05T09:23:45.000Z",
            id: 9,
        },
        {
            image: "https://i.imgur.com/fwOCAJz.png",
            advertiseName: "Bolsa marrom",
            userName: "Kawan Gonçalves",
            date: "2023-05-05T09:23:45.000Z",
            id: 10,
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
                        id: 1,
                        sender: {
                            id: 1,
                            name: "Alice"
                        },
                        value: "Olá, tudo bem?",
                        timestamp: "2023-05-05T09:23:45.000Z"
                    },
                    {
                        id: 2,
                        sender: {
                            id: 2,
                            name: "Bob"
                        },
                        value: "Sim, e você?",
                        timestamp: "2023-05-05T09:30:12.000Z"
                    }
                ]
            },
            {
                date: "2023-05-06",
                messages: [
                    {
                        id: 2,
                        sender: {
                            id: 2,
                            name: "Bob"
                        },
                        value: "Bom dia!",
                        timestamp: "2023-05-06T08:45:21.000Z"
                    },
                    {
                        id: 4,
                        sender: {
                            id: 2,
                            name: "Bob"
                        },
                        value: "Bom dia, Charlie!",
                        timestamp: "2023-05-06T08:47:36.000Z"
                    },
                    {
                        id: 5,
                        sender: {
                            id: 1,
                            name: "Alice"
                        },
                        value: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                        timestamp: "2023-05-06T09:02:17.000Z"
                    },
                ]
            }
        ]
    };

    useEffect(() => {
        const container = containerRef.current;
        container.scrollTop = container.scrollHeight - container.clientHeight;
    }, []);

    return (
        <>
            <Navbar type='basic' isAuthenticated={false} showBackButton={true} />
            <Container>
                <SideBar ref={sideBarRef}>
                    {chats.map((item, index) => (
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
                    ))}
                </SideBar>
                <SubContainer ref={subContainerRef}>
                    <TopBar>
                        <div onClick={BackToChats}>
                            <img src={ArrowLeft} alt="Voltar" />
                        </div>
                        <ProfileImage>
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Foto de perfil" />
                            <p>Regina Lima</p>
                        </ProfileImage>
                        <div onClick={togleOptions}>
                            <img src={More} alt="Clique para ver mais" />
                        </div>

                        <ModalMoreOptions style={showOptions ? { display: "flex" } : { display: "none" }}>
                            <button>Ver anúncio</button>
                            <button>Enviar proposta</button>
                        </ModalMoreOptions>
                    </TopBar>

                    <ChatContainer ref={containerRef}>
                        {chat.content.map((item, index) => (
                            <>
                                <p key={index}>{formatDate(item.date)}</p>
                                {item.messages.map((message, index) => (
                                    <ChatMessage
                                        key={index}
                                        align={message.sender.id === userId ? "flex-end" : "flex-start"}
                                        hour={obterHorario(message.timestamp)}
                                        message={message.value}
                                    />
                                ))}
                            </>
                        ))}
                    </ChatContainer>
                    <BottomBar>
                        <input
                            placeholder="Digite uma mensagem..."
                            onChange={handleMessage}
                            onKeyDown={handleKeyPress}
                        />
                        <button onClick={sendMessage}>
                            <img src={Send} alt="Enviar mensagem" />
                        </button>
                    </BottomBar>
                </SubContainer>
            </Container>
        </>
    )
}