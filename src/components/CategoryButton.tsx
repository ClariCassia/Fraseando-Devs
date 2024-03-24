import React from 'react';

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

export  const CategoryButton: React.FC<CategoryButtonProps> = ({ category, isSelected, onClick }) => {
  return (
    <button
      style={{
        borderWidth: isSelected ? 2 : 0,
        borderColor: "#1fa4bd",
        borderStyle: "solid"
      }}
      onClick={onClick}
    >
      {category}
    </button>
  );
}

 
