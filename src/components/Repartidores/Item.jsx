import { obtenerRepartidor } from "@/lib/data";

export default async function Repartidor({ id }) {

    const repartidor = await obtenerRepartidor(id)

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
            <p className="text-lg font-bold text-center"> {repartidor.nombre} </p>
            <p className="text-gray-600 text-center"> Teléfono: {repartidor.telefono} </p>
        </div>

    );
}

