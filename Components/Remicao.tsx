import moment from "moment";

export default function Remicao(){

    //Padrão brasileiro

    let data = new Date();

    function formatarData(data:Date){
        let novaData = new Date(data);
        return `${novaData.getDate()}/${novaData.getMonth()+1}/${novaData.getFullYear()}`
    }

    var d1 = "29/08/2020";
    var d2 = "12/02/2020";

    var diff = moment(d2, "DD/MM/YYYY").diff(moment(d1,"DD/MM/YYYY"));
    var anos:any = moment.duration(diff).years;


    return (
       <div>
           <h1>Calcule a remição</h1>
           <p> <input type="date" name="dataAtual" id="dataAtual" /></p>
           {anos}
       </div>
    )
}