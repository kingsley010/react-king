import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1> CONTINENTS </h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='/images/img-9.jpg' text='AFRICA - 54 COUNTRIES (2021)' label='Africa' path='/services' />
                        <CardItem src='/images/img-2.jpg' text='ASIA - 48 COUNTRIES (2021)' label='Asia' path='/services' />
                        <CardItem src='/images/img-7.jpg' text='ANTARTICA - NO COUNTRY (2021)' label='Antartica' path='/services' />
                    </ul>

                    <ul className='cards__items'>
                        <CardItem src='/images/img-2.jpg' text='EUROPE - 51 COUNTRIES (2021)' label='Europe' path='/services' />
                        <CardItem src='/images/img-7.jpg' text='NORTH AMERICA - 23 COUNTRIES (2021)' label='North America' path='/services' />
                        <CardItem src='/images/img-9.jpg' text='OCEANIA - 14 COUNTRIES & 12 OVERSEAS DEPENDENT COUNTRIES (2021)' label='Oceania' path='/services' />
                        <CardItem src='/images/img-7.jpg' text='SOUTH AMERICA - 12 INDEPENDENT COUNTRIES AND 3 DEPENDENT TERRITORIES (2021)' label='South America' path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
