import logoImg from './assets/logo.png'
import { AllSentences } from './services/sentences'
import { CategotyArea, Container, PhraseButton, TextSentence } from './style'
import { useState } from 'react'

function App() {
  const [textSentence, setTextSentence] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(0)

  const handleSwitchCategory = (index: number) => {
    setSelectedCategory(index)
  }

  return (
    <>
      <Container>

        <img src={logoImg} alt="" />
        <h2>Categorias</h2>

        <CategotyArea>
          {AllSentences.map((item, index) => (
            <button key={index} style={{ borderWidth: item.categoria === AllSentences[selectedCategory].categoria ? 2 : 0, borderColor: "#1fa4bd", borderStyle: "solid" }} onClick={() => handleSwitchCategory(index)}>{item.categoria}</button>

          ))}

        </CategotyArea>

        <PhraseButton>Gerar Frase</PhraseButton>

        {textSentence !== '' && <TextSentence>{textSentence}</TextSentence>}

      </Container>

    </>
  )
}

export default App
