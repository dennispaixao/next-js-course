import React from 'react'
interface LineItemProps {
    key: string
    item: string;
  }
  
  // Definindo o componente funcional
  const LineItem: React.FC<LineItemProps> = ({key, item }) => {
    return <li key={key} >{item}</li>;
  };
  
  export default LineItem;
