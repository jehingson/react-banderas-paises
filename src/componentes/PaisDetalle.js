import React from 'react'
import styled from 'styled-components'


const PaisDetalleStyled = styled.div`
margin: 3em  0; 
text-align: start;
color: var(--black);
img{
    width: 100%;
    max-width: 510px;
    
    height: 305px;
    margin-bottom: 1em;
    padding-bottom: 2em;
  }
  .grid{
    display: grid;
    grid-row-gap: 1em;
    justity-content: start;
 
  }
  .border-item{
    background: var(--white);
    padding: .5em 2em;
    border-radius: 5px;
    margin-right: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    display: inline-flex;
    margin-bottom: 15px;
  }
    .languages{
        span{
          margin-right: 15px;
            &:after{
                content: ',';
            }
            &:last-child{
              &:after{
                display: none;
            }
              
            }
        }
    }
    @media (min-width: 1024px){
      display:grid;
      grid-template-columns: 1fr 1fr ;
      grid-column-gap: 120px;
      margin-top: 4em;
      .grid{
        grid-template-columns: 1fr 1fr;  
      }
      .borders{
        display: inline-flex;
        margin-right: 1em;
        margin-top: 3em;
      }
      img{
      height: 390px;
      }
      
    }
`

function PaisDetalle({ pais }) {
  return (
    <>
      {
        pais.map((dato, index) => (
          <PaisDetalleStyled key={index}>
            <img
              src={dato.flag}
              alt={dato.name}
            />
            <div>
            <h2>{dato.name}</h2>
            <div className="grid">

              <div>
                <p><strong>Nombre Nativo:</strong> {dato.nativeName}</p>
                <p><strong>Poblacion:</strong> {dato.population}</p>
                <p><strong>Region:</strong> {dato.region}</p>
                <p><strong>Sub Region:</strong> {dato.subregion}</p>
                <p><strong>Capital:</strong>{dato.capital}</p>
              </div>
              <div>
                <p><strong>Top Level Domain:</strong>{dato.topLevelDomain}</p>
                <p><strong>Currencies:</strong>{dato.currencies.map((item, index) => <span key={index}> {item.name}</span>)}</p>
                <p className="languages"><strong>Lenguajes:</strong>{dato.languages.map((item, index) => <span key={index}> {item.name}  </span>)}</p>
              </div>
            </div>
            <p className="borders"><strong>Fronteras: </strong> </p>
           
            {dato.borders.map((item, index) => <span className="border-item" key={index}> {item} </span>)}
            
            </div>
          </PaisDetalleStyled>
        ))
      }
    </>
  )
}

export default PaisDetalle