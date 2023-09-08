import SlideFotos from "../components/SlideFotos"
import Header from "../components/Header"

function MuseuCafe() {

    const slideFotosData = [
        { imageSrc: '/src/assets/img/museuCafe/fotocafe1.png' },
        { imageSrc: '/src/assets/img/museuCafe/fotocafe2.png' },
        { imageSrc: '/src/assets/img/museuCafe/fotocafe3.png' },
    ];

    return (
        <>
            <Header />

            <div className="w-full h-auto flex flex-col items-center gap-6 relative pb-14">

                <div className="text-purple-800 flex justify-center pt-5">
                    <h1 className="text-xl font-bold">MUSEU DO CAFÉ</h1>
                </div>
                <div className="text-purple-800 flex flex-col items-center gap-5">
                    <p className="text-xl font-bold">SOBRE LOCAL</p>
                    <p className=" text-lg text-justify w-10/12">
                        O Museu do Café é referência por contar a trajetória do grão no Brasil e no mundo. Suas exposições abordam detalhes que vão desde o plantio até a xícara, passando pelo mercado e curiosidades do grão.
                    </p>
                </div>
                <div className="w-full flex flex-col h-2/4 border items-center bg-purple-900 pt-4">
                    <p className="text-xl font-bold text-white">FOTOS DO LOCAL</p>
                    <div className="Slider overflow-x-scroll flex pt-4 w-[100%] ">

                        <SlideFotos cardsData={slideFotosData} />

                    </div>

                </div>
                <div className="w-full h-52 border border-black">
                    <iframe className="w-full h-full" id="gmap_canvas" src="https://maps.google.com/maps?q=museu+do+cafe&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>

            </div>
        </>
    )
}

export default MuseuCafe