import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const ContextProvider = (props) => {
    
    const [datas, setDatas] = useState([])
    const [paisesList, setPaisesList] = useState([])
    const [region, setRegion] = useState('')
    const [buscador, setBuscador] = useState('')
    const [pais, setPais] = useState([])
    
    const ids = (id) => {
      const data = datas.filter(dato => {
        return dato.numericCode === id
      })
      console.log(data)
      console.log('IDS', id)
      if(data.length > 0){
        setPais(data)
      }else{
        async function res (){
          console.log('IDS',id)
          const resul = await fetch('https://restcountries.eu/rest/v2/all')
          const resull = await resul.json()
          console.log('resull', resull)
          const filtro = resull.filter(dato => dato.numericCode === id)
          setPais(filtro)
        }
       res()
      }
      
    }


    useEffect(()=>{
        if(region === ''){
          const filtrar = datas.filter(dato => dato.name.toLowerCase().includes(buscador.toLowerCase()))
          setPaisesList(filtrar)
        }else{
          const filtro = datas.filter(regx => regx.region === region)
          const filtrar = filtro.filter(dato => dato.name.toLowerCase().includes(buscador.toLowerCase()))
          setPaisesList(filtrar)
        }
        
    },[buscador])
  
    useEffect(()=>{
      if(region === ''){
        setPaisesList(datas)

      }else{
        const filtrar = datas.filter(regx => regx.region === region)
        console.log('FILTRO', filtrar)
        setPaisesList(filtrar)
      }
    },[region])

    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
          .then((response) => response.json())
          .then((data) => {
            setPaisesList(data)
            setDatas(data)
            console.log('data', data)
          })
          .catch(()=>{
            console.log('hubo un error')
          })
      }, [])

      
      

    const value = {
        paises: [paisesList, setPaisesList],
        region: [region, setRegion],
        buscador: [buscador, setBuscador],
        ids: ids,
        pais: [pais, setPais]
    }

    return(
        <DataContext.Provider value={value}>
           {props.children}
        </DataContext.Provider>
    )
}
