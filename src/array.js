
function Array( { itens } ){ 
return (
    <div>
            <h3>LISTA </h3>

    {itens.length > 0 ? (   
      itens.map((itens, index) => 
        <p key={index}> {itens}</p>
        )) : ( <p>nao a itens na lista </p>
        )}
    
    </div>
    )
}
export default Array