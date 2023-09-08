import Header from "../components/Header"
import Slide from "../components/Slide"
import Cards from "../components/Cards"
import './Home.css'

function Home() {

    const cardsData = [
        {
            imageSrc: '/src/assets/img/museuCafe.jpg',
            title: 'Museu do Café',
            description: 'O Museu do Café é referência por contar a trajetória do grão no Brasil e no mundo. Suas exposições abordam detalhes que vão desde o plantio até a xícara, passando pelo mercado e curiosidades do grão.',
            href: '/MuseuCafe'
        },
        {
            imageSrc: '/src/assets/img/museuPesca.jpg',
            title: 'Museu da Pesca',
            description: 'O Museu de Pesca tem finalidades culturais e objetiva a divulgação de conhecimentos originados do estudo do ambiente aquático e da tecnologia aplicada para a exploração racional de recursos marinhos e de águas continentais.',
            href: '/MuseuPesca',
        },

    ];

    const slideData = [
        {
            imageSrc: '/src/assets/img/museuCafe.jpg',
            title: 'Museu do Café',
            description: 'O Museu do Café é referência por contar a trajetória do grão no Brasil e no mundo. Suas exposições abordam detalhes que vão desde o plantio até a xícara, passando pelo mercado e curiosidades do grão.',
             href: '/MuseuCafe'
        },
        {
            imageSrc: '/src/assets/img/museuPesca.jpg',
            title: 'Museu da Pesca',
            description: 'O Museu de Pesca tem finalidades culturais e objetiva a divulgação de conhecimentos originados do estudo do ambiente aquático e da tecnologia aplicada para a exploração racional de recursos marinhos e de águas continentais.',
            href: '/MuseuPesca',
        },


    ];

    return (
        <div className="w- h-auto pb-14 ">
            <Header />

            <div className="flex justify-center mt-5">
                <img src="src/assets/img/logo-rota-deitado1.png" width={'150rem'} />
            </div>


            <Cards cardsData={cardsData} />


            <Slide cardsData={slideData} />
        </div>
    )
}

export default Home 