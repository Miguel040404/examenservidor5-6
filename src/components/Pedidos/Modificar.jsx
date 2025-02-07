import { modificarPedido } from "@/lib/actions";

function PedidoModificar({ pedido, repartidores, pizzas }) {

    return (
        <form action={modificarPedido}>
            <input type="hidden" name="id" defaultValue={pedido.id} />

            <input name='nombreCliente' defaultValue={pedido.nombreCliente} />
            {/* <input type="datetime-local" name="fechaHora" defaultValue={new Date().toISOString().substr(0, 16)} /> */}
            <input
                type="datetime-local"
                name="fechaHora"
                defaultValue={pedido.fechaHora ? new Date(pedido.fechaHora).toISOString().substr(0, 16) : ''}
            />

            <input name='direccionCliente' defaultValue={pedido.direccionCliente} />

            {/* <input name='repartidorId' defaultValue={pedido.repartidorId} /> */}

            <select name="repartidorId" defaultValue={pedido.repartidorId}>
                <option value="">-- Seleccione un repartidor --</option>
                {repartidores.map(repartidor => (
                    <option key={repartidor.id} value={repartidor.id}>
                        {repartidor.nombre}
                    </option>
                ))}
            </select>

            {pizzas.map(pizza => (
                <div key={pizza.id} className="flex items-center">
                    <input
                        type="checkbox"
                        name="pizzasIds"
                        value={pizza.id}
                        id={`pizza-${pizza.id}`}
                        defaultChecked={pedido.pizzas?.some(p => p.id === pizza.id)}
                    />
                    <label htmlFor={`pizza-${pizza.id}`}>{pizza.nombre}</label>
                </div>
            ))}

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PedidoModificar;

