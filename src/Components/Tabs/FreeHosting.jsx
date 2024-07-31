import React from 'react'
const cardData = [
    {
      id: 1,
      domain: '.FREE',
      price: 'Free',
      originalPrice: 'Free',
    },
    {
      id: 2,
      domain: '.TK',
      price: 'Free',
      originalPrice: 'Free',
    },
    {
      id: 3,
      domain: '.ML',
      price: 'Free',
      originalPrice: 'Free',
    },
    {
      id: 4,
      domain: '.GA',
      price: 'Free',
      originalPrice: 'Free',
    },
    {
      id: 5,
      domain: '.CF',
      price: 'Free',
      originalPrice: 'Free',
    },
    {
      id: 6,
      domain: '.GQ',
      price: 'Free',
      originalPrice: 'Free',
    },
    {
      id: 7,
      domain: '.XYZ',
      price: 'Free',
      originalPrice: 'Free',
    },
    {
      id: 8,
      domain: '.ORG',
      price: '$15.99/yr',
      originalPrice: '$10.99/yr',
    }
  ];
  
const FreeHosting = () => {
  return (
    <div className='cards-container'>
    {cardData.map(card => (
      <div key={card.id} className='wrapper'>
        <h1>{card.domain}</h1>
        <h3>{card.price}</h3>
        <p>{card.originalPrice !== 'Free' ?`Instead of ${card.originalPrice}` : "Free"}</p>
        <button>{card.originalPrice !== 'Free' ?'Buy Now' : "Order Now"}</button>
      </div>
    ))}
  </div>
  )
}

export default FreeHosting
