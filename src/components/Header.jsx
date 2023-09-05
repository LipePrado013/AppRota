import { useState } from "react"

function Header() {
    const [clicked, setClicked] = useState(false)
    const onClick = () => setClicked(!clicked)


    return (
        <>
            <div className="fixed bottom-[-1px] w-full flex bg-purple-900 justify-around h-16 items-center rounded-t-xl text-3xl z-10">
                <a href="/"><i class="fa-solid fa-house active:scale-75"></i> </a>
                <a ><i class="fa-solid fa-magnifying-glass active:scale-75"></i> </a>
                <a><i class="fa-solid fa-comment active:scale-75"></i> </a>
            </div>

            <button onClick={onClick} className="rounded-r-xl fixed p-2 text-2xl top-10 bg-purple-700 z-40 shadow-[0_0_10px_black]" id="btnOpen"><i class="fa-solid fa-bars active:scale-75"></i></button>

            {/*    =========================== menu lateral =======================   */}
            <div className={`w-full h-screen fixed z-20 flex flex-col top-0 bg-[#4d4d4d96] backdrop-blur-sm transition-all shadow-[0_0_10px_black] ${clicked == true ? "left-0" : "left-[-10000px]"}`}></div>
            <div className={`w-52 h-screen fixed z-50 flex flex-col top-0 bg-gray-200 left-[-280px] transition-all shadow-[0_0_10px_black] ${clicked == true ? "left-0" : "left-[-288px]"}`} id="menuLateral">
                <button onClick={onClick} className="rounded-r-xl absolute p-2 text-2xl top-10 bg-gray-200   -right-8 " id="btnClose"><i class="fa-solid fa-xmark text-black"></i></button>

                <img className="drop-shadow-[0_0_2px_]" src="src/assets/img/logo-rota-deitado1.png" alt="" />

                <div className="flex flex-col items-center gap-5 mt-10 text-xl font-bold text-black">
                    <a href="/">Inicio</a>
                    <a >Locais</a>
                    <a>Comentários</a>
                </div>
            </div>

        </>
    )

}

export default Header