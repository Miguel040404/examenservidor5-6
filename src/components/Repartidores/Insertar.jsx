import { insertarRepartidor } from "@/lib/actions";

function RepartidorInsertar() {
    return (
        <form action={insertarRepartidor}>
            <input name="nombre" placeholder="Nombre del repartidor" />
            <input name="telefono" placeholder="Teléfono del repartidor" />


            <button className="border-2 border-black disabled:bg-gray-200">
                insertar
            </button>
        </form>
    );
}

export default RepartidorInsertar;

