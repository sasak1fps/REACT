import Item from "./item"

function Lista(){
    return( 
        <>
        <div>

            <h1>LISTA</h1>
            <ul>
                <li> <Item  marca = 'ferrari'  ano = {2003} /> </li>
                <li><Item  marca = 'foswkvage'  ano = {2003}/></li>
                <li><Item  marca = 'ford'  ano = {2003}/></li>
                <li><Item  marca = 'fiat'  ano = {2003} /></li>
            </ul>
        </div>
        </>
    )
}
export default Lista