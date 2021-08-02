import React, { useState } from 'react';
import people from './Data';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const number = (index) => {
        if (index > people.length - 1) {
            return 0;
        }
        if (index < 0) {
            return people.length - 1
        }
        else {
            return index;
        }

    }

    const backward = () => {
        setIndex((index) => {
            const newIndex = index - 1;
            return number(newIndex);
        })
    }

    const forward = () => {
        setIndex((index) => {
            const newIndex = index + 1;
            return number(newIndex);
        })
    }

    const randomPerson = () => {
            let result = Math.floor(Math.random()*people.length);

            if(result === index){
                result = index + 1;
            }

            setIndex(number(result))
            
    }

    return (
        <>
            <article className='review'>
                <div className="img-container">
                    <img src={image} alt="person_image" className='person-img' />
                    <span className="quote-icon">
                        <FormatQuoteIcon />
                    </span>
                </div>
                <h4 className='author'>{name}</h4>
                <p className='job'>{job}</p>
                <p className='info'>{text}</p>
                <div className="button-container">
                    <button onClick={backward} className='prev-btn'><ArrowBackIosIcon /></button>
                    <button onClick={forward} className='next-btn'><ArrowForwardIosIcon /></button>
                </div>
                <button className='random-btn' onClick={randomPerson}>Random</button>
            </article>
        </>
    )
}

export default Review
