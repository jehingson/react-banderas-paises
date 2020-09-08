import React, {createContext, useState, useEffect} from 'react'
import Buscador from '../componentes/Buscador';

export const DataContext = createContext();

export const ContextProvider = (props) => {
    
    const [datas, setDatas] = useState([])
    const [paisesList, setPaisesList] = useState([])
    const [region, setRegion] = useState('')
    const [buscador, setBuscador] = useState('')

    useEffect(()=>{
        const filtrar = datas.filter(dato => dato.name.toLowerCase().includes(buscador.toLowerCase()))
        setPaisesList(filtrar)
    },[buscador])
  
    useEffect(()=>{
        const filtrar = datas.filter(regx => regx.region === region)
        console.log('FILTRO', filtrar)
        setPaisesList(filtrar)
    },[region])

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
          .then((response) => response.json())
          .then((data) => {
            setDatas(data)
            setPaisesList(data)
            console.log(data)
          })
          .catch(()=>{
            console.log('hubo un error')
          })
      }, [])

    const value = {
        paises: [paisesList, setPaisesList],
        region: [region, setRegion],
        buscador: [buscador, setBuscador]
    }

    return(
        <DataContext.Provider value={value}>
           {props.children}
        </DataContext.Provider>
    )
}
