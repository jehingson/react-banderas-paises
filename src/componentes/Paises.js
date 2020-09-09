import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const PaisesStyled = styled.div`
  text-align: left;
  border-radius: 5px;
  margin: 1em;
  background: var(--white);
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, .1);
  cursor: pointer;
  &:hover .datos{
    border-radius: 0 0 5px 5px;
    border: 1px solid var(--black);
    border-top: none;
  }
  
  img{
    width: 100%;
    height: 160px;
    object-fit:cover;
    vertical-align: top;
    border-radius: 5px 5px 0 0;
  }
  .datos{
    padding: 1.5em;
    border: 1px solid transparent;
    border-top: none;
    transition: .3s border;
  }
  .a{
    text-decoration: none;
    color: var(--black);
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
  numericCode}`} className="a" >
      <img loading="lazy" src={bandera} alt="bandera" />
      <div className="datos">
      <h2>{name}</h2>
      <p><strong>Poblacion:</strong> {poblacion}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Capital:</strong> {capital}</p>
      </div>
      </Link>
    

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