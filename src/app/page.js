import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 h-screen">
      <h1 className="text-6xl font-bold">Bienvenido a la pizzeria BD</h1>
      <div className="flex space-x-4">
        <Link 
          href="/repartidores" 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          REPARTIDORES
        </Link>
        <Link 
          href="/pedidos" 
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          PEDIDOS
        </Link>
        <Link 
          href="/pizzas" 
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          PIZZAS
        </Link>
      </div>

    </div>
  );
}

