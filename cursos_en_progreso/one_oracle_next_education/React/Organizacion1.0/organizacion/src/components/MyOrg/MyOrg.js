import {useState} from 'react'
import './MyOrg.css'



const MyOrg = (prop) =>{
    

    // Estado - Manejo de Hooks 
    // useState
    // useState()
    // Como definir un estado 
    // [nombreVariable, funcionQueActualiza] = userState(valorInicial)
    // const [name, updateName] = useState("Harland");
    // const [show, updateShow] = useState(true);

    // const manageClick = () => {
    //     // updateShow(!show)
    //     // console.log('Mostrar / Ocultar elemento')
    //     prop.changeShow()
    // }

    return(
        <section className="orgSection">
            <h3 className='orgSection__title'>My Organization</h3>
            <img className='orgSection__img' src="/img/addButton.png" onClick={prop.changeShow} />
        </section>
    )
}

export default MyOrg;