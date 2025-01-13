import React from 'react'
import "../styles/Card.css";

interface SectionProps {
    title: string;
    imageUrl: string;
}

const Card: React.FC<SectionProps> = ({title, imageUrl}) => (
    <div className='section-container'>
        <div 
        className='section-left'
        style={{ backgroundImage: `url(${imageUrl})` }}

    ></div>
    <div className="line"></div>
    <div className="section-highlight"></div>
    <div className='section-right'>
        <h2>{title}</h2>
    </div>
</div>

)

export default Card
