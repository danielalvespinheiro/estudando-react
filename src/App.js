import './App.css';
import { useState, useEffect } from 'react';

function App() {


  const [ cont, setCont ] = useState(0);
  const [ contB, setContB ] = useState(10);
  const [ user, setUser ] = useState();

  useEffect(() => {
    //1 - utilizando e enetendendo o seu conceito
    //ele vai "mostrar" aquilo que você colocou dentro dele sempre que entrar na pagina ou dar refresh.
    console.log("rodando");
  });


  //2 - array de dependências
  useEffect(() => {
    console.log("Só roda quando incrementa valor")
  }, [cont]);

  //3 - array de dependência vazio
  useEffect(() => {
    console.log("Só roda uma vez!!")
  }, []);

  // 4 - clean up function 
  useEffect (() => {
    
    const time = setTimeout(() => {
      //util para resolver problemas de memória e não ficar juntando muitas funções.
      console.log(`o incrementador foi alterado ${cont} vezes`)
    }, 1000); //time
    return () => {
      clearTimeout(time);//vai limpar todas as incrementações feitas depois de dois 2 segundos
    }

  },[cont]);

  useEffect(() => {
    fetch("https://api.github.com/users/matheusbattisti")
  .then((resp) => resp.json())
  .then((json) => setUser(json));
  },[])

  return (
    <div className='App'>
      <h1> {cont} </h1>
      <button onClick={() => setCont(prevCont => prevCont + 1)}>
        Redenrizar
        </button>

    <h1> {contB} </h1>
    <button onClick={() => setContB(prevCont => prevCont + 1)}>
      Redenrizar
    </button>

    {user && (
      <div>
      <p>Dados do usuário: </p>
      <h1>Nome: {user.name}</h1>
      <p>
        Site: <a href='{user.blog}'>{user.blog}</a> 
      </p>
      <p>Avatar: {user.avatar_url}
      </p>
      <img src={user.avatar_url} />
      </div>
    )}

  </div>
  );
}

export default App;
