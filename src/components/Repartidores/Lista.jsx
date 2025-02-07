//------------------------------------------- componente servidor

import { obtenerRepartidores } from "@/lib/data";
// import Link from "next/link";

import RepartidorModificar from "./Modificar";
import RepartidorEliminar from "./Eliminar";
import RepartidorInsertar from "./Insertar";
import Modal from "@/components/Modal";

export default async function ListaRepartidores() {

    const repartidores = await obtenerRepartidores();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Modal texto="Insertar" className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                <RepartidorInsertar />
            </Modal>

            {
                repartidores.map(repartidor =>
                    <li key={repartidor.id} className="bg-white shadow-md rounded p-4">
                        <div className="flex flex-col items-start space-y-2">
                            <p className="text-2xl font-semibold">Nombre: <span className="font-normal">{repartidor.nombre}</span></p>
                            <p className="text-lg font-semibold">Teléfono: <span className="font-normal">{repartidor.telefono}</span></p>
                        </div>
                        <div>
                            {/* <Link href={`/repartidores/${repartidor.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ver</Link> */}

                            <Modal texto="Modificar" className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                               <RepartidorModificar repartidor={repartidor} />
                            </Modal>
                            
                            <Modal texto="Eliminar" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                               <RepartidorEliminar repartidor={repartidor} />
                            </Modal>
                        </div>
                    </li>
                )
            }
        </div>
    );
}

