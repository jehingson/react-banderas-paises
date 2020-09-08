import React from 'react'
import styled from 'styled-components'


const HeaderStyled = styled.div`
  background: var(--white);
  box-shadow: 0 2px 4px 0 rgba(0,0,0, .06);
  max-width: 1280px;
  margin:0 auto 2em 0;
  padding: 0 1rem;
  .content{  
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
  }
  h1{
    font-size: 14px;
  }
  .dark-mode{
    cursor: pointer;
    .moon{
      margin-right: 10px;
      font-size: 12px;
        font-weight: 600;
      i{
        display: inline-flex;
        transform: rotate(-15deg);
        padding: .4em;
      }

    }
  }
`

function Header() {

  function handleClick() {

  }

  return (
    <HeaderStyled>
      <div 
        className="content"
        onClick={handleClick}
        >
        <h1>
          Donde en el mundo?
        </h1>
        <div className="dark-mode">
          <p className="moon">
            <i className="far fa-moon"  />
           {/* <i className="fas fa-moon"  /> */}
           Dark Mode
          </p>
         
       
          
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header