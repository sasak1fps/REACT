/*
function pessoa(props){
    return (
    <>      
    <img src={props.foto}  />
    <h2>NOME:{props.nome}</h2>
    <h2>IDADE:{props.idade}</h2>
    <h2>profissao:{props.profissao}</h2>
  </>

    )
}
export default pessoa      */

function Pessoa({nome , foto , profissao , idade}){
    return (
    <>      
    <img src={foto}  />
    <h2>NOME:{nome}</h2>
    <h2>IDADE:{idade}</h2>
    <h2>profissao:{profissao}</h2>
  </>

    )
}
export default Pessoa