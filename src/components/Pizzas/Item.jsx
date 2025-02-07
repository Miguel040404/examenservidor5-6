import { obtenerPizza } from "@/lib/data";

export default async function Pizza({ id }) {

    const pizza = await obtenerPizza(id)

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
            <p className="text-lg font-bold text-center"> {pizza.nombre} </p>
            <p className="text-gray-600 text-center"> Precio: {pizza.precio} </p>
        </div>
    );
}

