import moment from "moment";





export default function Remicao(){

    //Padrão brasileiro

    let data = new Date();

    function formatarData(data:Date){
        let novaData = new Date(data);
        return `${novaData.getDate()}/${novaData.getMonth()+1}/${novaData.getFullYear()}`
    }

    const hoje: string = moment().toString();

    const today = hoje
    

    


    return (
       <div>
           <h1>Calcule a remição</h1>
           <p> <input type="date" name="dataAtual" id="dataAtual" /></p>
           {today}
       </div>
    )
}