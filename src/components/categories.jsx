// src/components/Categories.jsx
import React from 'react';
import '../assets/css/categories.css';

const categories = [
  {
    title: 'SUMMER',
    subtitle: 'COLLECTION',
    image: '/images/Polo Floor.jpg',
  },
  {
    title: 'RAYA',
    subtitle: 'COLLECTION',
    image: '/images/Polo Floor 2.jpg',
  },
  {
    title: 'SHIRT &',
    subtitle: 'PANTS',
    image: '/images/Polo Mirror.jpg',
  },
  {
    title: 'SUMMER',
    subtitle: 'COLLECTION',
    image: '/images/Polo Floor.jpg',
  },
  {
    title: 'RAYA',
    subtitle: 'COLLECTION',
    image: '/images/Polo Floor 2.jpg',
  },
  {
    title: 'SHIRT &',
    subtitle: 'PANTS',
    image: '/images/Polo Mirror.jpg',
  },
];

const Categories = () => {
  return (
    <div className="category-container">
      {categories.map((cat, index) => (
        <div className="category-card" key={index}>
          <img src={cat.image} alt={cat.title} className="category-image" />
          <div className="category-text">
            <h2>{cat.title}</h2>
            <p>{cat.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
