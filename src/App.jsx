import { useEffect, useState } from 'react';
import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import ReposList from './components/Repos';

function App() {
  // const [visivel, setVisivel] = useState (true);
  const [nomeUsuario, setNomeUsuaro] = useState('');
  return (
    <div className="container">

      <input placeholder="Insira gituser ex:maiconveiga" type="text" onBlur={(e) => { setNomeUsuaro(e.target.value) }} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nome={nomeUsuario} />
          <ReposList nome={nomeUsuario} />
        </>

      )}
      {/* {visivel && (
        <Formulario />
      )}
      <button onClick={() => setVisivel(!visivel)} type='button'>Toggle form</button> */}
    </div>
  )
}

export default App
