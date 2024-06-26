import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;

  @media (max-width: 480px) {
    padding: 20px;
  }

  img {
    max-width: 350px;

    @media (max-width: 480px) {
      max-width: 280px;
    }
  }

  h2 {
    color: #fff;
    margin: 14px 0;
    font-weight: 500;
  }
`;

const CategoryArea = styled.section`
  display: flex;
  gap: 14px;
  margin-bottom: 34px;

  button {
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const PhraseButton = styled.button`
  background-color: #1fa4db;
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const TextSentence = styled.p`
  width: 420px;
  background-color: #fafafa;
  border-radius: 4px;
  text-align: center;
  padding: 14px 22px;
  margin: 24px 0 16px 0;
  line-height: 150%;
  color: #f57f17;
  font-style: italic;
  font-size: 18px;
  font-weight: bold;

  @media (max-width: 480px) {
    width: 330px;
  }
`;

export { Container, CategoryArea, PhraseButton, TextSentence };
