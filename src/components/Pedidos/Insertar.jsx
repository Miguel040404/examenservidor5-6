import { insertarPedido } from "@/lib/actions";

function PedidoInsertar({pedido, repartidores, pizzas}) {
    return (
        <form action={insertarPedido}>
            <input name="nombreCliente" placeholder="Nombre del cliente" />
            <input type="datetime-local" name="fechaHora" defaultValue={new Date().toISOString().substr(0, 16)} />
            <input name="direccionCliente" placeholder="Dirección del cliente" />

            {/* <input name="repartidorId" placeholder="Id del repartidor" /> */}

            <select name="repartidorId">
                <option value="">-- Seleccione un repartidor --</option>
                {repartidores.map(repartidor => (
                    <option key={repartidor.id} value={repartidor.id}>
                        {repartidor.nombre}
                    </option>
                ))}
            </select>

            {pizzas.map(pizza => (
                <div key={pizza.id} className="flex items-center">
                    <input type="checkbox" name="pizzasIds" value={pizza.id} id={pizza.id} />
                    <label htmlFor={pizza.id}>{pizza.nombre}</label>
                </div>
            ))}

            <button className="border-2 border-black disabled:bg-gray-200">
                insertar
            </button>
        </form>
    );
}

export default PedidoInsertar;

