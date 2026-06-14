//import { converterTextoParaObjeto } from "@/app/utils";
import rawTexto, { titulos } from "./constant";

export default function Page() {
    // console.log(converterTextoParaObjeto(rawTexto));
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="w-full max-w-4xl p-4">
                {titulos.map((titulo, index) => {
                    return (
                        <div key={index} className="mb-4">
                    TÍTULO {titulo}
                </div>
                    )
                }  )}
            </div>
        </div>
    )
}