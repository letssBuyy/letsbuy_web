import React, { useState } from "react";
import ChartComponent from '../components/Chart';
import LineChart from '../components/ChartLine';
import Navbar from "../components/Navbar";
import iconPeopleDash from "../assets/images/iconPeoplesDash.svg"
import iconFinalizados from "../assets/images/iconFinalizados.svg"
import iconTaxa from "../assets/images/iconTaxas.svg"
import { url } from "../utils/request";
import axios from 'axios';
import { findByCategory, findMonthPerNumber } from "../utils/enums"
import iconPubli from "../assets/images/iconsPublicados.svg"
import {
  CaixaGraficos,
  CaixaKpi,
  CaixasFilhas,
  Graficos,
  ImagensCaixinhas,
  Legendas,
  Limitador,
  Quantidades,
  SemiTitulo,
  TituloGrafico,
  Titulos
} from "../assets/styles/dashboardStyle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Exibir() {
  const [chartData, setchartData] = useState({})
  const [chartDataBar, setchartDataBar] = useState({})
  const [qtdUser, setQtdUser] = useState(0)
  const [qtdAdversementFineshed, setQtdAdversementFineshed] = useState(0)
  const [qtdTax, setQtdTax] = useState(0.0)
  const [qtdAdversementPubli, setQtdAdversementPubli] = useState(0)
  let navigate = useNavigate()

  async function load() {
    loadQtdUser();
    loadAdversemeintFinhesed();
    loadCountTaxs();
    loadCountAdversementPubli();
    loadChartLine();
    loadChartBar();
  }

  async function loadQtdUser() {
    try {
      await axios.get(`${url}/users/qtd-users`).then((response) => {
        const data = response.data
        setQtdUser(data)
      }).catch((e) => {
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  async function loadAdversemeintFinhesed() {
    try {
      await axios.get(`${url}/adversiments/qtd-anuncio-finalizados`).then((response) => {
        const data = response.data
        setQtdAdversementFineshed(data)
      }).catch((e) => {
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  async function loadCountTaxs() {
    try {
      await axios.get(`${url}/payment-controll/taxs`).then((response) => {
        const data = response.data
        setQtdTax(data.taxs)
      }).catch((e) => {
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  async function loadCountAdversementPubli() {
    try {
      await axios.get(`${url}/adversiments/qtd-anuncio`).then((response) => {
        const data = response.data
        setQtdAdversementPubli(data)
      }).catch((e) => {
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  async function loadChartLine() {
    try {
      await axios.get(`${url}/adversiments/find-quantity-selled-by-month`).then((response) => {
        const data = response.data

        const months = []
        const valueMonths = []

        data.map((item) => {
          months.push(findMonthPerNumber(item.month))
          valueMonths.push(item.quantity)
          return null
        })

        setchartData({
          labels: months,
          datasets: [
            {
              label: 'Meses',
              data: valueMonths,
              fill: false,
              tension: 0.1,
              borderColor: ['rgba(75, 192, 192, 0.6)',
                'rgba(255,20,147)', 'rgba(255.165,0)',
                'rgba(0,255,255)',
                'rgba(255,127,80)',
                'rgba(138,43,226)', 'rgba(255,20,147)',
                'rgba(105.105.105)',], // Cor da borda das barras
              borderWidth: 1
            },
          ],
        })
      }).catch((e) => {
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    }
  }

  async function loadChartBar() {
    try {
      await axios.get(`${url}/adversiments/find-selled-by-category`).then((response) => {
        const data = response.data

        const category = []
        const valueCategory = []

        data.map((item) => {
          category.push(findByCategory(item.category))
          valueCategory.push(item.quantity)
          return null
        })

        setchartDataBar({
          labels: category,
          datasets: [
            {
              label: "Categorias",
              data: valueCategory,
              backgroundColor: ['rgba(75, 192, 192, 0.6)',
                'rgba(255,20,147)', 'rgba(255.165,0)',
                'rgba(0,255,255)',], // Cor das barras
              borderColor: ['rgba(75, 192, 192, 0.6)',
                'rgba(255,20,147)', 'rgba(255.165,0)',
                'rgba(0,255,255)',],
              borderWidth: 1,
            },
          ],
        })
      }).catch((e) => {
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    let isAuthenticated = localStorage.getItem('userId')
    let accessLevel = localStorage.getItem('accessLevel')
    if (isAuthenticated === undefined || isAuthenticated === null || accessLevel !== "ADMIN") {
      navigate("/")
    }

    load()
  }, [])

  return (
    <>
      <Navbar type='principal'
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
              <Quantidades>{qtdUser}</Quantidades>
              <Legendas>Usuários cadastrados</Legendas>
            </Titulos>
          </CaixasFilhas>
          <CaixasFilhas>
            <ImagensCaixinhas>
              <img src={iconFinalizados} alt="icone" />
            </ImagensCaixinhas>
            <Titulos>
              <Quantidades>{qtdAdversementFineshed}</Quantidades>
              <Legendas>Anúncios finalizados</Legendas>
            </Titulos>
          </CaixasFilhas>
          <CaixasFilhas>
            <ImagensCaixinhas>
              <img src={iconTaxa} alt="icone" />
            </ImagensCaixinhas>
            <Titulos>
              <Quantidades>{qtdTax}</Quantidades>
              <Legendas>Taxas arrecadadas</Legendas>
            </Titulos>
          </CaixasFilhas>
          <CaixasFilhas>
            <ImagensCaixinhas>
              <img src={iconPubli} alt="icone" />
            </ImagensCaixinhas>
            <Titulos>
              <Quantidades>{qtdAdversementPubli}</Quantidades>
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
            <ChartComponent data={chartDataBar} />
          </Graficos>
          <Graficos>
            <TituloGrafico>
              Vendas por Mês
            </TituloGrafico>
            <SemiTitulo>
              Quantidade de vendas em cada Mês
            </SemiTitulo>
            <LineChart data={chartData} />
          </Graficos>
        </CaixaGraficos>
      </Limitador>
    </>
  )
};