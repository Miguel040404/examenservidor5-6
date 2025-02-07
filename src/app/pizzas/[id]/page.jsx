import Pizza from "@/components/Pizzas/Item";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient();

async function PaginaPizza({params, searchParams}) {
    const {id} = await params

  return (
    <div>
        <h1>Pizza {id}</h1>
        <Suspense fallback={"Cargando..."} >
            {/* <Lista id={id} /> */}
            <Pizza id={id} />
        </Suspense>
    </div>
  )

}

export default PaginaPizza;

