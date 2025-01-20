import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
        justify-content: space-between;
    #logo{
        width: 212px;
    };
`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img id='logo' src="img/logo.png" alt="Logo Space App"/>
        <CampoTexto/>
    </HeaderEstilizado>
}

export default Cabecera