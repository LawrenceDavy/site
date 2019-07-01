import React from 'react';
import { directive } from '@babel/types';

const Card = (props) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src='https://d2cwpp38twqe55.cloudfront.net/req/201902151/images/players/hardeja01.jpg' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.team}</p>
                <p>{props.fg}</p>
            </div>
        </div>
    )
}

export default Card;