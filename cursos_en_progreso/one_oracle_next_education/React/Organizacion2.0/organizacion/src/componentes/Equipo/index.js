import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {
    //Destructuracion 
    // Creamos variables individuales en ves de estar accediendo a props.datos
    const { colorPrimario, colorSecundario, titulo, id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props

    // Estilos CSS 
    // Importante al aplicar un estilo, por ejemplo Backgroud-color, se susituye 
    // el - por camel case BackgroudColor 
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.2)
    }
    // console.log(colaboradores.length > 0)

    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input 
                    type="color" 
                    className='input-color'
                    value={colorPrimario}
                    onChange={(event)=> {actualizarColor(event.target.value, id)}}
                />
                <h3 style={estiloTitulo} >{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo