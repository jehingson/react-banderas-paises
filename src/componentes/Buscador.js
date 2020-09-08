import React, {useContext} from 'react'
import styled from 'styled-components'
import { DataContext } from "../context/ContextProvider";
const BuscadorStyled = styled.div`

`

function Buscador(){
    const value = useContext(DataContext)
    const setBuscador = value.buscador[1]

    function handlerBuscar (event){
        setBuscador(event.target.value)
    }

    return(
        <BuscadorStyled>
            <input type="text" 
            onChange={handlerBuscar}
            />
        </BuscadorStyled>
    )
}

export default Buscador