import { useState } from "react"

function Header() {
    const [clicked, setClicked] = useState(false)
    const onClick = () => setClicked(!clicked)

    const [pesquisa, setClikou] = useState(false)
    const menuP = () => setClikou(!pesquisa)


    return (
        <>
            <div className="fixed bottom-[-1px] w-full flex bg-purple-900 justify-around h-16 items-center rounded-t-xl text-3xl z-[51]">
                <a href="/"><i class="fa-solid fa-house active:scale-75"></i> </a>
                <a onClick={menuP}><i class="fa-solid fa-magnifying-glass active:scale-75"></i> </a>
                <a><i class="fa-solid fa-comment active:scale-75"></i> </a>
            </div>

            <button onClick={onClick} className="rounded-r-xl fixed p-2 text-2xl top-10 bg-purple-700 z-20 shadow-[0_0_10px_black]" id="btnOpen"><i class="fa-solid fa-bars active:scale-75"></i></button>

            {/*    =========================== menu lateral =======================   */}
            <div className={`w-full h-screen fixed z-20 flex flex-col top-0 bg-[#4d4d4d96] backdrop-blur-sm transition-all shadow-[0_0_10px_black] ${clicked == true ? "left-0" : "left-[-10000px]"}`}></div>

            <div className={`w-52 h-screen fixed z-50 pb-16 flex flex-col top-0 bg-gray-200 left-[-280px] transition-all shadow-[0_0_10px_black] ${clicked == true ? "left-0" : "left-[-288px]"}`} id="menuLateral">
                <button onClick={onClick} className="rounded-r-xl absolute p-2 text-2xl top-10 bg-gray-200   -right-8 " id="btnClose"><i class="fa-solid fa-xmark text-black"></i></button>

                <img className="drop-shadow-[0_0_2px_]" src="src/assets/img/logo-rota-deitado1.png" alt="" />

                <div className="flex flex-col items-center gap-5 mt-10 text-xl font-bold text-black border  h-full justify-between">
                    <div className="flex flex-col items-center gap-5">
                        <a href="/">Inicio</a>
                        <a href="">Locais</a>
                        <a>Comentários</a>
                    </div>
                    <div className="pb-5">
                        <a href="/login" className="pl-7 pr-7 text-white bg-[#f00] rounded-lg ">sair</a>
                    </div>
                </div>

            </div>
            {/* ==================================================== menu de pesquisa ================================================= */}
            <div className={` fixed top-0 h-full w-full flex justify-center bg-[#4d4d4d96] backdrop-blur-sm z-50 ${pesquisa == true ? "top-0" : "top-[-10000px]"} transition-all`} >
                <div className={`border border-black w-96 h-40 text-black flex flex-col items-center justify-center rounded-b-xl bg-white`}>
                    <form action="/museucafe" className="flex justify-center items-center gap-10 ">
                        <input type="text" name="busca" id="busca" className="border-b-2 border-black p-1" placeholder="Pesquisar" />
                        <button className="p-2"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Header