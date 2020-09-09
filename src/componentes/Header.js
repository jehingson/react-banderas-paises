import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const HeaderStyled = styled.div`
  background: var(--white);
  box-shadow: 0 2px 4px 0 rgba(0,0,0, .06);
  z-index: 50;
  .content{  
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    max-width: 1093px;
    margin:0 auto 2em auto;
    padding: 0 1rem;
  }
  a{
  text-decoration: none;
  color: var(--black);
}
  h1{
    font-size: 14px;
  }

  .dark-mode{
    color: var(--black);
    cursor: pointer;
    .moon{
      margin-right: 10px;
      font-size: 12px;
      font-weight: 800;
      i{
        display: inline-flex;
        transform: rotate(-15deg);
        padding: .4em;
      }

    }
  }
  @media (min-width: 768px){
    margin-bottom: 3em;
    h1{
      font-size: 22px;
    }
    .dark-mode{
    .moon{
      font-size: 1rem;
    }
  }
  }
`

function Header({setDarkMode, darkMode}) {

  useEffect(() =>{
    const dark = localStorage.getItem('dark')
    if(dark === 'true'){
      setDarkMode(true)
    }else{
      setDarkMode(false)
    }
  },[])


  function handleClick() {
    setDarkMode(!darkMode)
    localStorage.setItem('dark', (!darkMode))
  }

  return (
    <HeaderStyled>
      <div 
        className="content"
        >
          <Link to='/'>
        <h1>
          Donde en el mundo?
        </h1>
        </Link>
        <div 
         onClick={handleClick}
         className="dark-mode"
         >
          <p className="moon">
            {
              darkMode ? 
              <i className="fas fa-moon"  /> :
              <i className="far fa-moon"  />
            }
           Dark Mode
          </p>
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header