import SlideFotos from "../components/SlideFotos"
import Header from "../components/Header"
// import img1 from '../assets/img/museuPesca/foto1.jpeg'
// import img2 from '../assets/img/museuPesca/foto2.jpeg'
// import img3 from '../assets/img/museuPesca/foto3.jpeg'

function MuseuPesca() {

    const slideFotosData = [
        { imageSrc: 'assets/img/museuPesca/foto1.jpeg' },
        { imageSrc: 'assets/img/museuPesca/foto2.jpg' },
        { imageSrc: 'assets/img/museuPesca/foto3.jpg' },
    ];

    return (
        <>
            <Header />
            <div className="w-full h-auto flex flex-col items-center gap-6 relative pb-20">

                <div className="text-purple-800 flex justify-center pt-5">
                    <h1 className="text-xl font-bold">MUSEU DA PESCA</h1>
                </div>
                <div className="text-purple-800 flex flex-col items-center">
                    <p className="text-xl font-bold">SOBRE LOCAL</p>
                    <p className=" text-lg text-justify w-10/12">
                        O Museu de Pesca tem finalidades culturais e objetiva a divulgação de conhecimentos originados do estudo do ambiente aquático e da tecnologia aplicada para a exploração racional de recursos marinhos e de águas continentais.
                    </p>
                </div>
                <div className="w-full flex flex-col h-2/4 border items-center bg-purple-900 pt-4">
                    <p className="text-xl font-bold text-white">FOTOS DO LOCAL</p>
                    <div className="Slider overflow-x-scroll flex pt-4 w-[100%] ">

                        <SlideFotos cardsData={slideFotosData} />

                    </div>
                </div>

                <div className="w-full h-52 border border-black">
                    <iframe className="w-full h-full" id="gmap_canvas" src="https://maps.google.com/maps?q=museu+da+pesca&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>

            </div>
        </>
    )
}

export default MuseuPesca