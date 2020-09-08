import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const PaisesStyled = styled.div`
  width: 264px;
  text-align: left;
  border-radius: 5px;
  margin:1em;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, .1);
  img{
    width: 100%;
    heigth:160px;
    object-fit:cover;
    cursor: pointer;
  }
  .datos{
    padding: 1.5em;
  }
  h2{
    margin: 0;
    margin-bottom: 1rem;
    font-size: 20px;
    font-weight:800;
  }
  p{
    font-size: .9em;
    margin-bottom: .5rem;
    font-weight: 600;
  }
`

function Paises({
  bandera,
  name,
  poblacion,
  region,
  capital,
  numericCode
}) {
  return (
    <PaisesStyled>
      <Link to={`/pais/${
  numericCode}`} >
      <img loading="lazy" src={bandera} alt="bandera" />
      </Link>
      <div className="datos">
      <a>
      <h2>{name}</h2>
      </a>
      <p><strong>Poblacion:</strong> {poblacion}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Capital:</strong> {capital}</p>
      </div>
      

    </PaisesStyled>
  )
}

export default Paises

/*
import React from 'react'
import styled from 'styled-components'


const PaisesStyled = styled.div`

`

function Paises(){
    return(
        <PaisesStyled>
            Paises
        </PaisesStyled>
    )
}

export default Paises */