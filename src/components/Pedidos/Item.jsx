import { obtenerPedido } from "@/lib/data";

export default async function Pedido({ id }) {

    const pedido = await obtenerPedido(id)

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
            <p className="text-lg font-bold text-center"> {pedido.nombreCliente} </p>
            <p className="text-gray-600 text-center"> Fecha de creación: {pedido.fechaHora.to} </p>
            <p className="text-gray-600 text-center">{new Date(pedido.fechaHora).toISOString().split('T')[0]}</p>
            <p className="text-gray-600 text-center"> Id del repartidor: {pedido.repartidorId} </p>
        </div>

    );
}

