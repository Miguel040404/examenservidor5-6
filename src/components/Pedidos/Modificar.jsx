// import { modificarPedido } from "@/lib/actions";

// function PedidoModificar({pedido}) {

//     return (
//         <form action={modificarPedido}>
//             <input type="hidden" name="id" defaultValue={pedido.id} />
//             <input name='nombreCliente' defaultValue={pedido.nombreCliente} />
//             <input type="date" name='fechaHora' defaultValue={pedido.fechaHora.toISOString().split('T')[0]} />
//             <input name='direccionCliente' defaultValue={pedido.direccionCliente} />
//             <input name='telefonoCliente' defaultValue={pedido.telefonoCliente} />
//             <input name='repartidorId' defaultValue={pedido.repartidorId} />

//             {/* <select name="repartidorId" defaultValue={pedido.repartidorId}>
//                 <option value="">-- Seleccione un repartidor --</option>
//                 {repartidores.map(repartidor => (
//                     <option key={repartidor.id} value={repartidor.id}>
//                         {repartidor.nombre}
//                     </option>
//                 ))}
//             </select> */}

//             <button className="border-2 border-black">Modificar</button>
//         </form>
//     );
// }

// export default PedidoModificar;

