import React, { useState } from "react";
import ChartComponent from '../components/Chart';
import LineChart from '../components/ChartLine';
import Navbar from "../components/Navbar";
import iconPeopleDash from "../assets/images/iconPeoplesDash.svg"
import iconFinalizados from "../assets/images/iconFinalizados.svg"
import iconTaxa from "../assets/images/iconTaxas.svg"
import { url } from "../utils/request";
import axios from 'axios';
import moment from 'moment';
import iconPubli from "../assets/images/iconsPublicados.svg"
import { CaixaGraficos, CaixaKpi, CaixasFilhas, Graficos, ImagensCaixinhas, Legendas, Limitador, Quantidades, SemiTitulo, TituloGrafico, Titulos } from "../assets/styles/dashboardStyle";
import { useEffect } from "react";



export default function Exibir() {
  let navigate = useNavigate()

  const chartData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Meses',
        data: [20, 220, 180, 150, 200, 300],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Cor das barras
        borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
        borderWidth: 1, // Largura da borda das barras
      },
    ],
  }

  const chartDataLine = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Pet',
        data: [120, 220, 180, 150, 200, 300],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
      {
        label: 'Eletronicos',
        data: [232, 211, 280, 50, 100, 250],
        fill: false,
        borderColor: 'rgba(65,105,225)',
        tension: 0.1,
      },
      {
        label: 'Sapatos',
        data: [20, 320, 380, 250, 300, 200],
        fill: false,
        borderColor: 'rgba(255, 105, 180)',
        tension: 0.1,
      }, {
        label: 'Moveis',
        data: [320, 70, 80, 150, 100, 30],
        fill: false,
        borderColor: 'rgba(153, 51, 153)',
        tension: 0.1,
      },
    ],
  }

  const [qtdUser, setQtdUser] = useState(0)

  async function load() {
    try {
      await axios.get(`${url}/users/qtd-users`).then((response) => {
        const data = response.data
        console.log(data)
        setQtdUser(data)
        // const messageDate = moment(data.registrationDate ? data.registrationDate : '');
      }).catch((e) => {
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  useEffect(() => {
    load()
  }, [])

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
              <Quantidades></Quantidades>
              <Legendas>Anúncios publicados</Legendas>
            </Titulos>
          </CaixasFilhas>
        </CaixaKpi>

        <CaixaGraficos>
          <Graficos>
            <TituloGrafico>
              Vendas por categoria
            </TituloGrafico>
            <SemiTitulo>
              Quantidade de vendas em cada categoria
            </SemiTitulo>
            <LineChart data={chartDataLine} />
          </Graficos>
          <Graficos>
            <TituloGrafico>
              Vendas por Mês
            </TituloGrafico>
            <SemiTitulo>
              Quantidade de vendas em cada Mês
            </SemiTitulo>
            <ChartComponent data={chartData} />
          </Graficos>
        </CaixaGraficos>
      </Limitador>
    </>
  )
};