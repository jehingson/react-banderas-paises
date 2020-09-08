import React, { useContext } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import {DataContext} from '../context/ContextProvider'

const PaisesStyled = styled.div`

`

function Pais(){

    const value = useContext(DataContext)
    const {id} = useParams()
    console.log(id)

    return(
        <PaisesStyled>
            Pais
        </PaisesStyled>
    )
}

export default Pais