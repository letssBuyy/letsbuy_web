import React, { useState } from "react";
import ChartComponent from '../components/Chart';
import LineChart from '../components/ChartLine';
import Navbar from "../components/Navbar";
import iconPeopleDash from "../assets/images/iconPeoplesDash.svg"
import iconFinalizados from "../assets/images/iconFinalizados.svg"
import iconTaxa from "../assets/images/iconTaxas.svg"
import { url } from "../utils/request";
import axios from 'axios';
import { findByCategory } from "../utils/enums"
import iconPubli from "../assets/images/iconsPublicados.svg"
import Loading from "../components/Loading"
import { CaixaGraficos, CaixaKpi, CaixasFilhas, Graficos, ImagensCaixinhas, Legendas, Limitador, Quantidades, SemiTitulo, TituloGrafico, Titulos } from "../assets/styles/dashboardStyle";
import { useEffect } from "react";

export default function Exibir() {
  const [chartData, setchartData] = useState({})
  const [chartDataBar, setchartDataBar] = useState({})
  const [loading, setLoading] = useState(false)
  const [qtdUser, setQtdUser] = useState(0)
  const [qtdAdversementFineshed, setQtdAdversementFineshed] = useState(0)
  const [qtdTax, setQtdTax] = useState(0.0)
  const [qtdAdversementPubli, setQtdAdversementPubli] = useState(0)
  const [qtdAmountOfSalesPerMonth, setqtdAmountOfSalesPerMonth] = useState(0)
  const [nameCategory, setNameCategory] = useState('')
  const [mes, setMes] = useState('')
  const [qtdSalledAmount, setQtdSalledAmount] = useState(0)

  function findMonthPerNumber(number) {
    switch (number) {
      case 1:
        return 'Janeiro';
      case 2:
        return 'Fevereiro';
      case 3:
        return 'Março';
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
      case 6:
        return 'Junho';
      case 7:
        return 'Julho';
      case 8:
        return 'Agosto';
      case 9:
        return 'Setembro';
      case 10:
        return 'Outubro';
      case 11:
        return 'Novembro';
      case 12:
        return 'Dezembro';
      default:
        return '';
    }
  }

  async function load() {
    setLoading(true);
    loadQtdUser();
    loadAdversemeintFinhesed();
    loadCountTaxs();
    loadCountAdversementPubli();
    loadChartLine();
    loadChartBar();
    setLoading(false);
  }

  async function loadQtdUser() {
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

  async function loadAdversemeintFinhesed() {
    try {
      await axios.get(`${url}/adversiments/qtd-anuncio-finalizados`).then((response) => {
        const data = response.data
        console.log(data)
        setQtdAdversementFineshed(data)
        // const messageDate = moment(data.registrationDate ? data.registrationDate : '');
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
        console.log(data)
        setQtdTax(data.taxs)
        // const messageDate = moment(data.registrationDate ? data.registrationDate : '');
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
        console.log(data)
        setQtdAdversementPubli(data)
        // const messageDate = moment(data.registrationDate ? data.registrationDate : '');
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
        console.log(data)
        const months = []
        const valueMonths = []

        data.map((item) => {
          months.push(findMonthPerNumber(item.month))
          valueMonths.push(item.quantity)
        })
        console.log(months, valueMonths)
        setchartData({
          labels: months,
          datasets: [
            {


              label: 'Meses',
              data: valueMonths,
              fill: false,
              tension: 0.1,
              borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
              borderWidth: 1, // Largura da borda das barras
            },
          ],
        })
        // const messageDate = moment(data.registrationDate ? data.registrationDate : '');
      }).catch((e) => {
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  async function loadChartBar() {
    try {
      await axios.get(`${url}/adversiments/find-selled-by-category`).then((response) => {
        const data = response.data
        console.log(data)
        const category = []
        const valueCategory = []
        data.map((item) => {
          category.push(findByCategory(item.category))
          valueCategory.push(item.quantity)
        })
        setchartDataBar( {
                    labels:category,
          datasets: [
            {
              label: "Categorias",
              data: valueCategory,
              backgroundColor: 'rgba(75, 192, 192, 0.6)', // Cor das barras
              borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
              borderWidth: 1, // Largura da borda das barras
            },
          ],
        })
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
    <Loading isEnabled={loading}/>
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