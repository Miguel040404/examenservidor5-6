//------------------------------------------- componente servidor

import { obtenerPedidos, obtenerRepartidores } from "@/lib/data";
// import Link from "next/link";

import PedidoModificar from "./Modificar";
import PedidoEliminar from "./Eliminar";
import PedidoInsertar from "./Insertar";
import Modal from "@/components/Modal";

export default async function ListaPedidos() {

    const pedidos = await obtenerPedidos();
    const repartidores = await obtenerRepartidores();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Modal texto="Insertar" className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                <PedidoInsertar repartidores={repartidores} />
            </Modal>

            {
                pedidos.map(pedido =>
                    <li key={pedido.id} className="bg-white shadow-md rounded p-4">
                        <div className="flex flex-col items-start space-y-2">
                            <p className="text-2xl font-semibold">Id: <span className="font-normal">{pedido.id}</span></p>
                            <p className="text-lg font-semibold">Nombre del cliente: <span className="font-normal">{pedido.nombreCliente}</span></p>
                            <p className="text-lg font-semibold">Dirección del cliente: <span className="font-normal">{pedido.direccionCliente}</span></p>
                            <p className="text-lg font-semibold">Fecha de creación: <span className="font-normal">{pedido.fechaHora.toISOString().split('T')[0]}</span></p>
                            
                            
                            {/* <p className="text-lg font-semibold">Repartidor: <span className="font-normal">{pedido.repartidor.nombre}</span></p> */}
                        </div>
                        <div>
                            {/* <Link href={`/pedidos/${pedido.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ver</Link> */}

                            <Modal texto="Modificar" className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                               <PedidoModificar pedido={pedido} repartidores={repartidores}/>
                            </Modal>
                            
                            <Modal texto="Eliminar" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                               <PedidoEliminar  pedido={pedido}/>
                            </Modal>
                        </div>
                    </li>
                )
            }
        </div>
    );
}

