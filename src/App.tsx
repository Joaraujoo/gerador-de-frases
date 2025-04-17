import { useState } from 'react'
import './App.css'

import logoImg from "./assets/logo.png"


export default function App() {



  return(
    <div className='container'>

      <img 
        src={logoImg} 
        alt="Logo dev frases" 
        className='logo'
      />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>Bem estar</button>
      </section>

      <button className='button-frase'>Gerar Frase</button>

      <p className='texto-frase'>Alguma frase vai vir aqui</p>

    </div>
  )
}