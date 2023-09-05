import React from 'react'
import './../index.css'

const Slide = ({ cardsData }) => {
    return (

        // Area de slide o app, banco de implementação futura 

        <div className="Slider h-[29rem] overflow-x-scroll flex items-center w-[100%] pl-7 pr-7 snap-x">
            {cardsData.map((card, index) => (
            <div className="Slider-track flex ml-5 mr-5 snap-center">

                <a key={index} href={card.href} className=" hover:shadow-[0_5px_25px_-2px_black]  p-2 hover:scale-105 transition-all bg-purple-800 rounded-xl w-[20rem] h-[25rem] flex flex-col gap-2">
                    <img src={card.imageSrc} className='rounded-md h-56 object-cover' width={'100%'} />
                    <h1 className='text-xl'>{card.title}</h1>
                    <p className="text-sm"> {card.description}</p>
                </a>
            
            </div>
            ))}
        </div>
    )
}

export default Slide