import './App.css';
import React, { useState, useEffect } from 'react';



function App() {
    //aqui utilizamos apenas um valor para interpolar
  //const  [ pessoa ] = useState("Daniel Alves"); //neste exemplo so vamos ver o nome setado no useState()
  const  [ pessoa, setPessoa] = useState("(seu nome)");


  //aqui vamos mudar o estado do numero, ou seja, alterar o seu valor
  const [ number, setNumber ] = useState(0);

  //Previos Value, serve para realizar mais de uma mudança ao mesmo tempo
    //sintax: setNumber((prevNumber) => prevNumber + 1)
    const changeNumber = () => {
      setNumber ((prevNumber) => prevNumber + 1);
      setNumber ((prevNumber) => prevNumber + 1);
    }

      //aplicando valor de dentro do input  //manipulando evento 
  return(
   <div className="App">
        <div>
         <h2>opa eai {pessoa}</h2> 
          
         <input type='text' value={pessoa} onChange={e => setPessoa(e.target)}></input>
        </div>
         

        <div>
         <p>Número: {number}</p>
         <button onClick={changeNumber}>alterando valor</button>
        </div>
      </div>
  )  
}

export default App;