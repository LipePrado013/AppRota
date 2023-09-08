function Cadastrar() {
    return (
        <>
            <a href="/login" className="absolute text-3xl left-5 top-5"><i class="fa-solid fa-arrow-left"></i></a>
            <div className="text-black flex justify-center items-center h-screen bg-purple-600 ">
                <div className="flex flex-col gap-10 items-center">
                    <i class="fa-solid fa-user-plus text-[7rem] text-white"></i>

                    <form action="/login" method="get" className="flex flex-col gap-5 items-center">

                        <input type="text" required className="rounded-md p-1" placeholder="Nome" />
                        <input type="email" required className="rounded-md p-1" placeholder="E-mail" />
                        <input type="password" required className="rounded-md p-1" placeholder="Senha" />
                        <input type="password" required className="rounded-md p-1" placeholder="Confirma senha" />

                        <button className="bg-yellow-600 text-xl w-32 rounded-lg active:bg-yellow-500">Logar</button>

                    </form>
                </div>
            </div>
        </>
    )
} export default Cadastrar