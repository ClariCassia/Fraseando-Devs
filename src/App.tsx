import logoImg from './assets/images/logo.png'
import { AllSentences } from './services/sentences'
import { CategoryArea, Container, PhraseButton, TextSentence } from './style'
import { useState } from 'react'
import { CategoryButton } from './components/CategoryButton/CategoryButton'

function App() {
  const [textSentence, setTextSentence] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleSwitchCategory = (index: number) => {
    setSelectedCategory(index);
  };

  const generateFrase = () => {
    const category = AllSentences[selectedCategory];
    const randomNumber = Math.floor(Math.random() * category.frases.length);
    setTextSentence(`"${category.frases[randomNumber]}"`);
  };

  return (
    <Container>
      <img src={logoImg} alt="" />
      <h2>Categorias</h2>

      <CategoryArea>
        {AllSentences.map((item, index) => (
          <CategoryButton
            key={index}
            category={item.categoria}
            isSelected={selectedCategory === index}
            onClick={() => handleSwitchCategory(index)}
          />
        ))}
      </CategoryArea>

      <PhraseButton onClick={generateFrase}>Gerar Frase</PhraseButton>

      {textSentence !== '' && <TextSentence>{textSentence}</TextSentence>}
    </Container>
  );
}

export default App;
