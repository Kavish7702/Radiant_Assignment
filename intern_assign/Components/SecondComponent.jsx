import React from 'react';
import "./SecondComponent.css";
import Card from './Card';

const SecondComponent = () => {
  return (
    <div className="CardSection">
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default SecondComponent
