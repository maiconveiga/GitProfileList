import { useState, useEffect } from "react";

const Formulario = () =>{
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome]= useState('');

    useEffect(()=>{
        console.log('Mudou o  nome');
    }, [nome])
    const alteraNome = (evento) =>{
        setNome(estadoAnterior => {
            return evento.target.value})
    
    }
    const renderResult = () =>{
        const soma = parseFloat(materiaA) + parseFloat(materiaB) + parseFloat(materiaC);
        const media = (soma / 3).toFixed(2);

        if(media >= 7){
            return (
                <p>Olá, {nome}, você foi aprovado - {media}</p>
            )
        }else{
            return(
                <p>Olá, {nome}, você foi reprovado -  {media}</p>
            )
        } 
    }
    return(
        <form>
            {[1,2,3,4,5].map(item =>(<ul><li key={item}>{item}</li></ul>))}
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(evento.target.value)}/>
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(evento.target.value)}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(evento.target.value)}/>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            {renderResult()}
        </form>
    )
}

export default Formulario;