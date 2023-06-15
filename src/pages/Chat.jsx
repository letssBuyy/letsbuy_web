import React, {
    useState,
    useRef,
    useEffect,
} from "react";
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
import { useNavigate, useLocation } from 'react-router-dom';
import NoContent from "../components/NoContent";
import ProposalModal from "../components/ProposalModal";
import axios from "axios";
import { url } from "../utils/request";
import { errorAlert } from "../utils/alerts";
import Loading from "../components/Loading";

export default function Chat() {
    moment.locale("pt-br");
    const [message, setMessage] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const containerRef = useRef(null);
    const subContainerRef = useRef(null);
    const sideBarRef = useRef(null);
    const [selected, setSelected] = useState(2);
    const [advertiseId, setAdvertiseId] = useState(0);
    const [advertiseTitle, setAdvertiseTitle] = useState('');
    const [advertiseImage, setAdvertiseImage] = useState('');
    const [advertisePrice, setAdvertisePrice] = useState('')
    const [userImageProfile, setUserImageProfile] = useState('');
    const [userName, setUserName] = useState('');
    let userId = localStorage.getItem('userId');
    let navigate = useNavigate();
    const location = useLocation();
    const [currentChatID, setCurrentChatID] = useState('');
    const [currentChat, setCurrentChat] = useState([]);
    const [chats, setChats] = useState([]);

    const [sellerChatId, setSellerChatId] = useState('');

    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

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

    function handleSelectedItem(sellerId, idAdvertise, idBuyer) {
        createChat(sellerId, idAdvertise, idBuyer)

        if (window.innerWidth < 900) {
            sideBarRef.current.style.display = "none";
            subContainerRef.current.style.display = "flex";
        }
    }

    function BackToChats() {
        sideBarRef.current.style.display = "flex";
        subContainerRef.current.style.display = "none";
    }

    async function createChat(sellerId, idAdvertise, idBuyer) {
        setLoading(true)
        await axios.post(`${url}/chats`, {
            idSeller: sellerId,
            idBuyer: idBuyer,
            idAdversiment: idAdvertise
        }).then((response) => {
            const data = response.data
            console.log(response.data)

            setAdvertiseId(data.adversiment && data.adversiment.id ? data.adversiment.id : "");
            setAdvertiseTitle(data.adversiment && data.adversiment.title ? data.adversiment.title : "");
            setAdvertiseImage(data.adversiment && data.adversiment.images && data.adversiment.images.length > 0 ? data.adversiment.images[0].url : "");
            setAdvertisePrice(data.adversiment && data.adversiment.price ? data.adversiment.price : "");
            setUserImageProfile(data.seller && data.seller.profileImage ? data.seller.profileImage : "");
            setUserName(data.seller && data.seller.name ? data.seller.name : "");
            setSellerChatId(data.seller && data.seller.id ? data.seller.id : '');

            if (data.id) {
                setCurrentChatID(data.id)
                loadMessages(data.id)
                setSelected(data.id)
            }
        }).catch((error) => {
            console.error(error); // Exibir o erro completo no console
            errorAlert("Ocorreu um erro ao criar o chat.");
        })

        setLoading(false)
    }

    async function loadChats() {
        setLoading(true)
        await axios.get(`${url}/chats/${userId}`).then((response) => {
            const data = response.data
            console.log(data)
            setChats(data)
        })
        setLoading(false)
    }

    async function loadMessages(idChat) {
        if (idChat) {
            await axios.get(`${url}/messages/${idChat}`).then((response) => {
                const data = response.data
                setCurrentChat(data)
                console.log(data)
            })
        }
    }

    async function sendMessage() {
        await axios.post(`${url}/messages`, {
            idChat: currentChatID,
            message: message,
            idUser: userId
        }).then((response) => {
            const data = response.data
            setCurrentChat(data)
            setMessage('');
        }).catch(() => {
            errorAlert("Ocorreu um erro ao enviar a mensagem.")
        })
    }

    function sendDetailAd() {
        navigate(`/anuncio/${advertiseId}`)
    }

    function createProposal() {
        openModal()
    }

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const container = containerRef.current;
        container.scrollTop = container.scrollHeight - container.clientHeight;

        const chatParams = new URLSearchParams(location.search);
        const openChatWithSeller = chatParams.get('openChatWithSeller');
        const idAdvertise = chatParams.get('idAdvertise')
        const openModalPropose = chatParams.get('openModalPropose');

        if (openModalPropose && idAdvertise && openChatWithSeller) {
            createChat(openChatWithSeller, idAdvertise)
            openModal()
        }

        if (openChatWithSeller && idAdvertise) {
            createChat(openChatWithSeller, idAdvertise)
        }

        let isAuthenticated = localStorage.getItem('userId')
        if (isAuthenticated === undefined || isAuthenticated === null) {
            navigate("/")
        }

        loadChats()
    }, []);

    useEffect(() => {
        loadMessages(currentChatID)
    }, [message])

    setInterval(() => {
        if (currentChatID !== '' && currentChatID !== null && currentChatID !== undefined) {
            loadMessages(currentChatID)
        }
    }, 2000);

    return (
        <>
            <Loading isEnabled={loading} />
            <ProposalModal
                isOpen={modalOpen}
                onClose={closeModal}
                userId={userId}
                advertise={{
                    id: advertiseId,
                    title: advertiseTitle,
                    price: advertisePrice,
                    image: advertiseImage
                }}
                idChat={currentChatID}
            />
            <Navbar type='principal' />
            <Container>
                <SideBar ref={sideBarRef}>
                    {chats && chats.length > 0 ? (
                        chats.map((item) => (
                            <div key={item.id} onClick={() => handleSelectedItem(item.seller.id, item.adversiment.id, item.buyer.id)}>
                                <ChatItem
                                    image={item.adversiment && item.adversiment.images && item.adversiment.images.length > 0 ? item.adversiment.images[0].url : ImageDefault}
                                    advertiseName={item.adversiment ? item.adversiment.title : ''}
                                    userName={item.seller.id === userId ? item.buyer.name : item.seller.name}
                                    date={item.lastMessageAt ? formatDate(item.lastMessageAt) : ''}
                                    isSelected={selected === item.id}
                                />
                            </div>
                        ))
                    ) : (
                        <NoContentContainer>
                            <NoContent
                                message="Você ainda não possui conversas"
                                accessibilityMessage="Você ainda não possui conversas"
                            />
                        </NoContentContainer>
                    )}
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
                            {
                                userId !== sellerChatId ?
                                    <button onClick={() => createProposal()}>Enviar proposta</button>
                                    :
                                    <></>
                            }
                        </ModalMoreOptions>
                    </TopBar>
                    <ChatContainer ref={containerRef}>
                        {
                            currentChat && currentChat.length > 0 ?
                                currentChat.map((item, index) => (
                                    <>
                                        <p key={index}>{formatDate(item.date)}</p>
                                        {item.messages.map((message, index) => (
                                            !message.isProposal ?
                                                <ChatMessage
                                                    key={index}
                                                    align={message.idUser == userId ? "flex-end" : "flex-start"}
                                                    hour={obterHorario(message.postedAt)}
                                                    message={message.message}
                                                />
                                                :
                                                <>
                                                    <ProposalMessage
                                                        key={index}
                                                        id={message.id}
                                                        align={message.idUser == userId ? "flex-end" : "flex-start"}
                                                        hour={obterHorario(message.postedAt)}
                                                        proposalValue={message.amount}
                                                        advertiseImage={advertiseImage}
                                                        advertiseTitle={advertiseTitle}
                                                        hiddenButtons={message.idUser == userId ? true : false}
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
                            value={message}
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