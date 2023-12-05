function SeuNome({setnome}){
    return(
            <div    >
                <p>DIGITE SEU NOME : </p>
            <input type="text"  placeholder=" qual seu nome " onChange={(e) => setnome(e.target.value)}/>
        
            </div>
    )
}
export default SeuNome