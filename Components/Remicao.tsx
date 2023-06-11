import moment from "moment";
import { useState } from "react";


export default function Remicao(){

    //Padrão brasileiro

    let data = new Date();

    function formatarData(data:Date){
        let novaData = new Date(data);
        return `${novaData.getDate()}/${novaData.getMonth()+1}/${novaData.getFullYear()}`
    }

    const hoje: string = moment().toString();

    const today = hoje
    

    const [typedInicio, setTypedInicio] = useState()
    const [typedTermino, setTypedTermino] = useState()
    const [typedARemir, setTypedARemir] = useState(0)
    const [typedNovoTermino, setTypedNovoTermino] = useState()

    function handleInicio(e){
       setTypedInicio(e.target.value)
    }
    
    function handleARemir(e){
        setTypedARemir(e.target.value)
     }
     
     function handleTermino(e){
        setTypedTermino(e.target.value)
     }

     function handleNovoTermino(e){
        setTypedNovoTermino(e.target.value)
     }

    return (
       <div className={`
       flex flex-col
       `}>
           <h1>Calcule a remição</h1>
           <label htmlFor="inicio">Início do cumprimento da pena em:</label>
           <input type="date" name="inicio"  onChange={handleInicio}/>
           <label htmlFor="termino">Término previsto para a pena:</label>
           <input type="date" name="termino" onChange={handleTermino} />
           <label htmlFor="diasARemir">Quantidade de dias a remir:</label>
           <input type="number" name="diasARemir" onChange={handleARemir}/>
           <label htmlFor="novoTermino">Data de término atualizada:</label>
           <input type="text" name="novoTermino" onChange={handleNovoTermino}/>
           
       </div>
    )
}