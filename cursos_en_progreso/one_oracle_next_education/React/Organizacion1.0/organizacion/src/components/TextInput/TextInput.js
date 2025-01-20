import './TextInput.css'

function Input(props){
    return(
        <div className="textInput">
            <label>{props.title}</label>
            <input placeholder={props.placeHolder} required={props.required}/>
        </div>
    )
};


export default Input;