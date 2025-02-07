import Repartidor from "@/components/Repartidores/Item";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient();

async function PaginaRepartidor({params, searchParams}) {
    const {id} = await params

  return (
    <div>
        <h1>Repartidor {id}</h1>
        <Suspense fallback={"Cargando..."} >
            {/* <Lista id={id} /> */}
            <Repartidor id={id} />
        </Suspense>
    </div>
  )

}

export default PaginaRepartidor;

