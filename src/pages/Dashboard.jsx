import React from "react";
import Navbar from "../components/Navbar";
import iconPeopleDash from "../assets/images/iconPeoplesDash.svg"
import iconFinalizados from "../assets/images/iconFinalizados.svg"
import iconTaxa from "../assets/images/iconTaxas.svg"
import iconPubli from "../assets/images/iconsPublicados.svg"
import { CaixaGraficos, CaixaKpi, CaixasFilhas, Graficos, ImagensCaixinhas, Legendas, Limitador, Quantidades, Titulos } from "../assets/styles/dashboardStyle";


export default function Exibir() {

    return (
        <>
            <Navbar type='basic'
                isAuthenticated={false}
                showBackButton={true}
            />
            <Limitador>
                <CaixaKpi>
                    <CaixasFilhas>
                        <ImagensCaixinhas>
                        <img src={iconPeopleDash} alt="icone" />
                        </ImagensCaixinhas>
                        <Titulos>
                            <Quantidades>30</Quantidades>
                            <Legendas>Usuários cadastrados</Legendas>
                        </Titulos>
                    </CaixasFilhas>
                    <CaixasFilhas>
                    <ImagensCaixinhas>
                    <img src={iconFinalizados} alt="icone" />
                        </ImagensCaixinhas>
                        <Titulos>
                            <Quantidades>30</Quantidades>
                            <Legendas>Anúncios finalizados</Legendas>
                        </Titulos>
                    </CaixasFilhas>
                    <CaixasFilhas>
                    <ImagensCaixinhas>
                            <img src={iconTaxa} alt="icone" />
                        </ImagensCaixinhas>
                        <Titulos>
                            <Quantidades>30</Quantidades>
                            <Legendas>Taxas arrecadadas</Legendas>
                        </Titulos>
                    </CaixasFilhas>
                    <CaixasFilhas>
                    <ImagensCaixinhas>
                    <img src={iconPubli} alt="icone" />
                        </ImagensCaixinhas>
                        <Titulos>
                            <Quantidades>30</Quantidades>
                            <Legendas>Anúncios publicados</Legendas>
                        </Titulos>
                    </CaixasFilhas>
                </CaixaKpi>

                <CaixaGraficos>
                    <Graficos></Graficos>
                    <Graficos></Graficos>
                </CaixaGraficos>
            </Limitador>
        </>
    )
}
