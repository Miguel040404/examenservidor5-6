'use server'
import { revalidatePath } from 'next/cache'

import prisma from '@/lib/prisma'

//___________________________pizzas____________________________

export async function insertarPizza(formData) {
    const nombre = formData.get('nombre')
    const precio = Number(formData.get('precio'))

    await prisma.pizza.create({
        data: {
            nombre: nombre,
            precio: precio,
        }
    })

    revalidatePath('/pizzas')
}

export async function modificarPizza(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const precio = Number(formData.get('precio'))

    await prisma.pizza.update({
        where: {
            id
        },
        data: {
            nombre: nombre,
            precio: precio,
        }
    })
    revalidatePath('/pizzas')
}

export async function eliminarPizza(formData) {
    const id = Number(formData.get('id'))

    await prisma.pizza.delete({
        where: { id }
    })
    revalidatePath('/pizzas')
}

//___________________________pedidos____________________________

export async function insertarPedido(formData) {
    const nombreCliente = formData.get('nombreCliente')
    const direccionCliente = formData.get('direccionCliente')
    const fechaHora = new Date(formData.get('fechaHora'))
    const repartidorId = Number(formData.get('repartidorId'))

    await prisma.pedido.create({
        data: {
            nombreCliente: nombreCliente,
            direccionCliente: direccionCliente,
            fechaHora: fechaHora,
            repartidorId: repartidorId,
        },
    });

    revalidatePath('/pedidos')
}

export async function modificarPedido(formData) {
    const id = Number(formData.get('id'))
    const nombreCliente = formData.get('nombreCliente')
    const direccionCliente = formData.get('direccionCliente')
    const fechaHora = new Date(formData.get('fechaHora'))
    const repartidorId = Number(formData.get('repartidorId'))

    await prisma.pedido.update({
        where: {
            id
        },
        data: {
            nombreCliente: nombreCliente,
            direccionCliente: direccionCliente,
            fechaHora: fechaHora,
            repartidorId: repartidorId,
        }           
    })
    revalidatePath('/pedidos')
}

export async function eliminarPedido(formData) {
    const id = Number(formData.get('id'))

    await prisma.pedido.delete({
        where: { id }
    })
    revalidatePath('/pedidos')
}

//___________________________repartidores____________________________

export async function insertarRepartidor(formData) {
    const nombre = formData.get('nombre')

    await prisma.repartidor.create({
        data: {
            nombre: nombre,
            telefono: formData.get('telefono'),
        }
    })

    revalidatePath('/repartidores')
}

export async function modificarRepartidor(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')

    await prisma.repartidor.update({
        where: {
            id
        },
        data: {
            nombre: nombre,
            telefono: formData.get('telefono'),
        }
    })
    revalidatePath('/repartidores')
}

export async function eliminarRepartidor(formData) {
    const id = Number(formData.get('id'))

    await prisma.repartidor.delete({
        where: { id }
    })
    revalidatePath('/repartidores')
}

