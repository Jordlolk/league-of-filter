import {useState} from "react";
import './components.css';
import ChampLore from "./ChampLore";

 function SelectChamp(){
    const [edit , setEdit] = useState(false)
    const [searchTerm , setSearchTerm] = useState(null)
    const format = (str) => str.toLowerCase()
    const handleEdit = () => {
        setEdit(false)
    };
   
    function handleInput(e){
        const searchText = format(e.target.value);
            for(let i = 0 ; i <=12 ; i++){
                !isNaN(searchText[i]) ? setEdit(true) : null;
            }
            setSearchTerm(searchText);
        }
    
    return (
        <>
        <section>
            <label>Escolha o Campeão</label>
            <input type="text" 
            placeholder= "Digite o nome do campeão..."
            readOnly= {edit}
            onChange={handleInput}
            onClick={handleEdit}
            maxLength={12}
            />
            {edit? 
            <>
            <h1>Não existe campeões com números</h1>
            <h3 style={{color : 'red' , textTransform : "uppercase"}}>Clique na barra novamente para digitar</h3>
            </>
            : null}
        </section>
            <ChampLore searchTerm={searchTerm} format={format}/>
        </>
    )
}

export default function Formulario(){
    return (
        <main className="Formulario">
            <form action="" className="SelectChamp">
                <SelectChamp/>
            </form>
        </main>
    )
}