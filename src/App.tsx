import { useState } from 'react'
import './App.css'

import logoImg from "./assets/logo.png"


export default function App() {

const [textoFrase, setTextoFrase] = useState("")
const [categoriaSelecionada, setCaregoriaSelecionada] = useState(0)

const allFrases = [
  {
    id: 1,
    nome: "Motivação",
    frases: [
      "Acredite em si mesmo e você será imparável.",
      "Cada dia é uma nova oportunidade para brilhar.",
      "Se você pode sonhar, pode realizar.",
      "A persistência leva ao sucesso.",
      "A jornada mais longa começa com um único passo.",
      "Sua determinação é sua maior força.",
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "Encare cada desafio como uma chance de crescimento.",
      "Grandes coisas nunca vêm da zona de conforto.",
      "Mude seus pensamentos e você mudará seu mundo.",
      "A adversidade revela o verdadeiro campeão que há em você.",
      "Você é mais forte do que imagina.",
      "O que você faz hoje pode melhorar todos os amanhãs.",
      "Acredite no poder dos seus sonhos e siga em frente.",
      "Não desista!",
          ]
  },

  {
    id: 2,
    nome: "Bom dia",
    frases: [
      "Bom dia! Que hoje seja um dia repleto de sorrisos, alegria e boas surpresas!",
      "Que seu coração se encha de alegria e que o dia de hoje seja iluminado por sorrisos! Bom dia!",
      "Que a alegria de hoje seja a luz que guia o seu caminho até o fim do dia. Bom dia!",
      "Bom dia! Que sua alma se inunde de felicidade e que sua energia contagie a todos ao redor!",
      "Que o sorriso de hoje seja o reflexo da alegria que você carrega dentro de si. Bom dia!",
      "Bom dia! Que o dia de hoje te traga tantas razões para sorrir quanto as estrelas no céu!",
      "Comece o dia com um sorriso e espalhe alegria por onde passar. Bom dia!",
      "Bom dia! Que hoje seja mais um capítulo alegre da sua história!",
      "Que o brilho da manhã traga alegria para seu coração e felicidade para o seu dia. Bom dia!",
      "Bom dia! Que a felicidade seja sua companheira durante toda essa jornada que está começando!",
      "Que hoje você se sinta inspirado, leve e cheio de alegria. Bom dia!",
      "Que a alegria seja a sua companheira inseparável hoje. Bom dia!",
      "Bom dia! Que você tenha um dia radiante, cheio de boas energias e grandes realizações!",
      "Que seu dia comece com alegria e termine com mais motivos para celebrar a vida. Bom dia!",
      "Bom dia! Que a felicidade te envolva e que você a espalhe por onde passar!",
      "Que a luz deste dia te traga uma alegria imensa e contagiante! Bom dia!",
    ]
  }

]

function handleSwitchCategory(index: number) {
  setCaregoriaSelecionada(index)
}

  return(
    <div className='container'>

      <img 
        src={logoImg} 
        alt="Logo dev frases" 
        className='logo'
      />

      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button 
          className='category-button' 
          key={item.id}
          style={{
            borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#1fa4db"
          }}
          onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ) )}
        
      </section>

      <button className='button-frase'>Gerar Frase</button>

      
      {textoFrase !== "" && <p className='texto-frase'>{textoFrase}</p>}

    </div>
  )
}