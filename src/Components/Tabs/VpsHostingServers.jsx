import React from 'react'
const cardData = [
    {
      id: 1,
      domain: '.COM',
      price: '$5.99/yr',
      originalPrice: '$10.99/yr',
    },
    {
      id: 2,
      domain: '.CO.UK',
      price: '$3.99/yr',
      originalPrice: '$10.99/yr',
    },
    {
      id: 3,
      domain: '.ORG',
      price: '$15.99/yr',
      originalPrice: '$10.99/yr',
    },
    {
      id: 4,
      domain: '.HEALTH',
      price: '$7.99/yr',
      originalPrice: '$10.99/yr',
    },
    {
      id: 5,
      domain: '.AI',
      price: '$55.99/yr',
      originalPrice: '$10.99/yr',
    },
    {
      id: 6,
      domain: '.SEA',
      price: '$26.33/yr',
      originalPrice: '$10.99/yr',
    },
    {
      id: 7,
      domain: '.NET',
      price: '$7.99/yr',
      originalPrice: '$10.99/yr',
    },
    {
      id: 8,
      domain: '.CO',
      price: '$26.33/yr',
      originalPrice: '$10.99/yr',
    }
  ];
  
const VpsHostingServers = () => {
    return (
        <div className='cards-container'>
          {cardData.map(card => (
            <div key={card.id} className='wrapper'>
              <h1>{card.domain}</h1>
              <h3>{card.price}</h3>
              <p>Instead of {card.originalPrice}</p>
              <button>'Buy Now'</button>
            </div>
          ))}
        </div>
      );
}

export default VpsHostingServers
