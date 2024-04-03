import styled from 'styled-components';

interface ButtonProps {
    isSelected: boolean;
  }

export const Button = styled.button<ButtonProps>`
 border: ${props => (props.isSelected ? '2px solid #1fa4bd' : 'none')};
  font-weight: ${props => (props.isSelected ? 500 : 'normal')};
`