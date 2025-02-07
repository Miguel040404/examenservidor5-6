import Pedido from "@/components/Pedidos/Item";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient();

async function PaginaPedido({params, searchParams}) {
    const {id} = await params

  return (
    <div>
        <h1>Pedido {id}</h1>
        <Suspense fallback={"Cargando..."} >
            {/* <Lista id={id} /> */}
            <Pedido id={id} />
        </Suspense>
    </div>
  )

}

export default PaginaPedido;

