import React from 'react'
import './../index.css'

const Cards = ({ cardsData }) => {
    return (

        // Area de slide o app, banco de implementação futura 
        <div className="  flex flex-col gap-5 mt-3 ">
            {cardsData.map((card, index) => (
                <a href={card.href} className=" flex relative h-[10rem] " key={index}>
                    <div className="absolute w-[90%] h-full bgMy"></div>
                    <div className="absolute top-2 text-justify pl-1 w-[75%] h-[100%] flex flex-col gap-2 ">
                        <h1 className="text-lg">{card.title}</h1>
                        <p className="text-xs">{card.description}</p>
                    </div>
                    <div className="w-full flex justify-end object-cover">
                        <img className="w-5/12 object-cover bg-" src={card.imageSrc} width={'150rem'} />
                    </div>
                </a>
            ))}
        </div>

    )
}

export default Cards