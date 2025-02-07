'use client'

import { useRef } from "react";


function Modal({texto,children,className}) {
    // function Modal({icono}) {
    const refModal = useRef()

    const openModal = () => refModal.current?.showModal()
    const closeModal = () => refModal.current?.close()

    return (
        <>
            <div onClick={openModal} 
            className={className}>
                {texto}
            </div>
            
            <dialog ref={refModal} className="rounded-lg shadow-lg p-6 bg-white max-w-md mx-auto">
                <div className="flex flex-col items-center space-y-4">
                    {children}
                    <div onClick={closeModal} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-md cursor-pointer transition-colors duration-300 ease-in-out">Cerrar</div>
                </div>
            </dialog>
        </>
    );
}

export default Modal;