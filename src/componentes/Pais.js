import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import { DataContext } from '../context/ContextProvider'
import PaisDetalle from "./PaisDetalle";

const PaisesStyled = styled.div`
max-width: 1093px;
margin: auto auto;
display: grid;
justify-content: center;
padding: .5rem 1rem;
.back{
  display: block;
  background: var(--white);
  color: var(--black);
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  padding: .7em 2.2em;
  border-radius: 5px;
  border: none;
  lelf: 0;
  cursor: pointer;
  margin: 1.5em 1em 2em 0;
  justify-content: start;
  i{
    margin-right: 5px;
  }
}
`

function Pais() {
  let history = useHistory()
  const value = useContext(DataContext)
  const [pais, setPais] = value.pais
  const ids = value.ids
  const {id} =  useParams()
  
  useEffect(()=>{
    function paisId(){
      ids(id)
    }
    paisId()
  }, [id])

  function handleClick(){
    history.push("/")
  }
  
  return (
    <PaisesStyled>
      <div>
      <button className="back" onClick={handleClick}><i className="fas fa-long-arrow-alt-left"/>Back</button>
      </div>
      <PaisDetalle pais={pais} />
    </PaisesStyled>
  )
}

export default Pais