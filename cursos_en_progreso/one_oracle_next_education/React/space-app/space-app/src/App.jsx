import styled from 'styled-components'
import GlobalStyle from './components/GlobalStyle';
import Cabecera from './components/Header/index';
import BarraLateral from './components/BarraLateral';
import Banner from './components/Banner';
import banner from './assets/banner.png';

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  `

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;

`

const MainContainer = styled.main`
display: flex;
gap: 24px;
`



function App() {
  return (
    <>
      <FondoGradiente>
        <GlobalStyle />
        <AppContainer>
        <Cabecera />
          <MainContainer>
            <BarraLateral />
            <Banner backgroundImage={banner} texto={"La galería más completa de fotos del espacio"} />
          </MainContainer>
        </AppContainer>
      </FondoGradiente>
    </>
  )
}

export default App
