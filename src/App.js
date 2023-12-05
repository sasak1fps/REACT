import logo from './logo.svg';
import './App.css';
import Hello from './HelloWorld'; 
import Saymyname from './Saymyname';
import Pessoa from './pessoa';
import Frase from './Frase';
import Lista from './lista';
import Evento from './eventoclick';
import Form from './form';
import Buttom from './butto';
import Condicao  from './condicao';
import Array from './array';
import SeuNome from './seunome';
import Saudacao from './saudacao';
import React, { useState } from 'react';
import {BrowserRouter as Router , Switch , Route , Link, Routes} from "react-router-dom";
import Home from './pages/home';
import Contato from './pages/contato';
import Empresa from './pages/empresa';
import Footer from './footer';


function App() {
  return ( 
  <header className="App-header">
    <div className='App'>
    
    <Router>  
      <ul>
        <li><Link to='/'> home</Link></li>
        <li><Link to='/empresa'> empresa</Link></li>
        <li><Link to='/contato'> contato</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>

        <Route path='/empresa' element={<Empresa/>}>
          
        </Route>

        <Route path='/Contato' element={<Contato/>}>
         
        </Route>
      </Routes>
    </Router>
   
   
   
   <Footer />
    </div>
    </header>
    
    );
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  const [nome,setnome]=useState()
  
  return (
      
    <div>
      <h1>seu nome</h1>
      <SeuNome setnome = {setnome}/>
      <Saudacao nome={nome}/>
   
    </div>
  function soma(a,b){
    return  Number(a) + Number(b)
  }
  const meusItens = ['angula' , 'viw' , 'react']
  <h1>lista</h1>
  <Array  itens={meusItens}/>
  <Array  itens={[]}/>
 
  const nome = 'alessandro'.toUpperCase()
  const url ='https://via.placeholder.com/150'
  const name = 'maria'
  <div className="App">
  <img src={logo} className="App-logo" alt="logo"  width='50px' height='50px'/>
  <h1> REACT 2.0 </h1>   
  <p><Frase/></p> 
  
       <p>ola,{nome} </p>
       <p>soma: {soma(2,2)}</p>
        <img src= {url}   alt='logo'  />
        <p> <Saymyname name='alessandro'/> </p>
        <p> <Saymyname name='joao'/> </p>
        <p> <Saymyname name={name}/> </p>
       <p> <Hello/> </p>
        <Pessoa nome='alessandro' idade = '20' profissao = 'programador' foto ='https://via.placeholder.com/150'/>
     
      </header>
      <> 
      <div className='App'>
          <header className='App-header'>
            <p> <Lista/> </p>
            <p> <Evento  numero = "1" /> </p>
            <p> <Evento numero = "2" /> </p>
          </header>
         <p><Form /></p>
        <Buttom text='EVENTO '/>
      </div>

      <div><Condicao/> </div>
      <div> </div>
      </>
    </div>
     



    */
 
 
export default App;
