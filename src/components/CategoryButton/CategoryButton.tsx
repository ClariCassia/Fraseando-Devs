import React from 'react';
import { Button } from './style';

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isSelected, onClick }) => {
  return (
    <Button onClick={onClick} isSelected={isSelected}>
      {category}
    </Button>
  );
}





