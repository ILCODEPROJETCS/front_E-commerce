export const Header = () => {

    return (
        <header className="py-5 px-5 w-full">
            <div className="flex gap-5">
                <div className="p-5 bg-[#D4AF37] rounded-full animate-pulse"></div>
                <div className="p-5 bg-[#D4AF37] w-1/3 rounded-md animate-pulse"></div>
            {/* <img src="" alt="LOGOTIPO" />
            <input 
            type="search" 
            placeholder="Pesquise Produtos"
            className="text-gray-200 p-1 rounded-md outline-none focus-within:border focus-visible:border-purple-500"
             /> */}
             <div className="flex gap-5 text-end m-auto items-center justify-end">
                <div className="text-[#D4AF37] rounded-full animate-pulse">E-commerce</div>
                <div className="text-[#D4AF37] rounded-full animate-pulse">Vendas</div>
                <div className="text-[#D4AF37] rounded-full animate-pulse">Marketing</div>
                <div className="text-[#D4AF37] rounded-full animate-pulse">
                    <button title="Carrinho">🛒</button>
                </div>
             </div>
            </div>
        </header>
    )
}

export default Header;