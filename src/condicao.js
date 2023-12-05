import { useState } from 'react'

function Condicao(){
    const [email, setemail]= useState()
    const [useremail,setuseremail] = useState()


    function Enviaremail(e){

        e.preventDefault()
        setemail(useremail)
        console.log(email)

    }
    function Limpar(){
        setuseremail('')

    }
        return(
            <div> <h2>cadastre seu email</h2>
            <form> <input type='email' placeholder='digite seu email' onChange={(e) => setemail(e.target.value)}/>  
            <button type='submit' onClick={Enviaremail}> enviar</button>
            {useremail  && (
                <div> seu é email é : {useremail} 
              
                 <button onClick={Limpar}> Limpar</button>
                </div>
            )}
            </form>
            </div>


        )
}
export default Condicao