import Buttom from "./butto"

function Evento({numero}){
    function Clicar(){
        console.log(`ativado com sucesso 1 ${numero}`)
    }
    function Clicar2(){
        console.log(`ativado com sucesso 2 ${numero}`)
    }
    
    return ( 
        <div>
            <p> clique aqui para caontecer alog</p>
                <button onClick={Clicar}>ativar</button>
                <Buttom text='EVENTO' event={Clicar}     />
                <Buttom text='EVENTO' event={Clicar2}     />
        </div>

    )
}
export default Evento