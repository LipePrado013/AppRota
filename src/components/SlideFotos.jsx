import React from 'react'
import './../index.css'

const SlideFotos = ({ cardsData }) => {
    return (
        // Area de slide o app, banco de implementação futura 
    <div className="Slider-track flex gap-5 ml-10 mr-10 snap-x h-full">

        {cardsData.map((card, index) => (
        <div className="snap-center transition-all w-[20rem] h-44">

            <img key={index} className='h-36 object-cover' src={card.imageSrc} width={'100%'} />
        </div>
    ))}
    </div>
    )
}

export default SlideFotos