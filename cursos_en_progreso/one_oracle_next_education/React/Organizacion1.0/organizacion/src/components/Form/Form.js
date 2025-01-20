import './Form.css'
import Input from '../TextInput/TextInput.js'
import DropDownMenu from '../DropDownMenu/DropDownMenu.js'
import Button from '../Button/Button.js'
function Form(){

    const manageSubmit = (event) => {
        console.log("Manejar el envio", event)
        event.preventDefault()
    }


    return(
        <section className='Form'>
            <form onSubmit={manageSubmit}>
                <h2>Fill the form to add a new Colaborator</h2>
                <Input title="Name" placeHolder="Name" required></Input>
                <Input title="Charge" placeHolder="Charge" required></Input>
                <Input title="Image" placeHolder="Image" required={true}></Input>
                <DropDownMenu></DropDownMenu>
                <Button title="Create"/>

            </form>
        </section>
    )
}

export default Form