import {useState} from 'react'

function Form(){        
    function Cadastrar(e){
        e.preventDefault()
        console.log(name)
        console.log(senha)
        console.log('cadastrou comsucesso')        
    }
    const [name, setname] =useState()
    const [senha, setsenha] =useState()
return (
        <div>
            <h1>
                meu cadastro
            </h1>
            <form onSubmit={Cadastrar} >

                <label nome = "nome">NOME: </label>
                <div> <input type="text"  placeholder="seu nome"  name=" nome" onChange={(e) => setname(e.target.value)} />    </div>

                <label senha="senha">SENHA: </label>
                <div> <input type="password"  placeholder="seu senha"  name=" senha" onChange={(e) => setsenha(e.target.value)} />    </div>

                <div> <input type="submit" value='Cadastrar' name="enviar"/> </div>
            </form>
        </div>
    )
}

export default Form