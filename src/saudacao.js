function Saudacao({nome}){
    function Gerarsaudacao({alguem}){
        return( `ola ${alguem} tudo bem ? `)
    }
return(
    <> {nome && <p>{Gerarsaudacao(nome)}</p>}   </>
)
}
export default Saudacao