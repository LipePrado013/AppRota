function Login() {

    return (
        <>
            <div className="text-black flex justify-center items-center h-screen bg-purple-600 ">
                <div className="flex flex-col gap-10">
                    <img src="src/assets/img/logo-Rota.png" alt="" />

                    <form action="/" method="get" className="flex flex-col gap-5 items-center">

                        <input type="email" name="loginEmail" id="loginEmail" required className="rounded-md p-1" placeholder="E-mail" />
                        <input type="password" name="loginSenha" id="loginSenha" required className="rounded-md p-1" placeholder="Senha" />

                        <button className="bg-yellow-600 text-xl w-32 rounded-lg active:bg-yellow-500">Logar</button>
                        <a href="/cadastrar" className="text-white">
                            Cadastrar-se
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login