import './DropDownMenu.css'

const teams = [
    "Developer",
    "Front-End",
    "Data-Science",
    "Devops",
    "Ux-Desing",
    "Mobile",
    "Innovation"
]


function DropDownMenu(){
    return (
        <div className="DropDownMenu">
            <label>Teams</label>
            <select>
                {teams.map((team, index) =>  <option key={index}>{team}</option>)}
            </select>
        </div>
    )
}

export default DropDownMenu