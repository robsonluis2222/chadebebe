import React, { useEffect, useState } from 'react';
import './ListProducts.css';

const ListProducts = () => {
  const [produtos, setProdutos] = useState({});

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('/produtos.json');
        const data = await response.json();
        setProdutos(data.temas);
      } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="list-products">
      {Object.entries(produtos).map(([tema, { produtos, imagem }]) => (
        <div key={tema} className="tema">
          <img src={imagem} alt={tema} className="tema-imagem" />
          <span className='title-tema'>{tema.charAt(0).toUpperCase() + tema.slice(1)}</span>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
