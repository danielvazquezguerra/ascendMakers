import classNames from 'classnames';
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { apiDeleteContact } from '../data/contacts';
import { CardProps } from '../data/contacts/types';
import { useState } from 'react';
import { copiarContenido } from '../util/clipboard';
import { BiCopyAlt } from "react-icons/bi";
import ModalAscends from './ModalAscends';
import FormEditContact from './FormEditContact';






const ContactCard = ({
    data,
    className,
    updateRequest,
    setUpdateRequest,

}: CardProps) => {

    const boxContactInfo = ['flex', 'flex-col', 'justify-center', 'items-start', 'w-full'];

    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [isModalDeleteOpen, setisModalDeleteOpen] = useState<boolean>(false);

    const iniciales = (nombre: string) => {

        let arrayNombre = nombre.trim().split(' ');
        if (arrayNombre.length < 2) {
            return `${arrayNombre[0][0]}`
        } else {
            return `${arrayNombre[0][0]}${arrayNombre[1][0]}`
        }
    }

    return (

        <div className={classNames(
            'w-full',
            'flex',
            'sm:flex-rox',
            'flex-col',
            'justify-start',
            'items-center',
            'p-5',
            'h-fit',
            'rounded-3xl',
            'from-white',
            'bg-gradient-to-br',
            'shadow-xl',
            { 'flip-horizontal-bottom': loading },
            'transition-transform',
        )}
        >


            <div className={classNames('flex', 'flex-col', 'justify-start', 'items-start', 'w-full', 'sm:gap-4', 'gap-3')}>

                <ModalAscends // Modal para editar los contactos.
                    isOpen={modalIsOpen}
                    setIsOpen={setModalIsOpen}
                    titulo={'Editar contacto'}
                    children={<FormEditContact
                        setUpdateRequest={setUpdateRequest}
                        updateRequest={updateRequest}
                        isOpen={modalIsOpen}
                        setIsOpen={setModalIsOpen}
                        contact={data}
                    />}
                />

                <ModalAscends // Modal para Borrar el contacto.
                    isOpen={isModalDeleteOpen}
                    setIsOpen={setisModalDeleteOpen}
                    titulo={
                            <div>
                                <p>¿Estás seguro?</p>
                                <p className={classNames('text-xs')}><span className={classNames('inter-900')}>{data.name}</span> será eliminado.</p>
                            </div>
                
                    }
                    children={<div className={classNames('grid', 'grid-cols-2', 'w-full', 'items-center', 'justify-center', 'gap-4')}>

                        <button 
                            className={classNames('border-2', 'border-violet-900', 'w-full', 'py-3', 'rounded-full')}
                            onClick={() => {
                                setisModalDeleteOpen(false);
                            }}
                        >
                            Cancelar
                        </button>

                        <button
                            className={classNames('border-2', 'border-violet-900', 'bg-violet-900', 'w-full', 'py-3', 'rounded-full', 'text-white')}
                            onClick={async () => {

                                setisModalDeleteOpen(false);
                                setLoading(true);
                                await apiDeleteContact(data?.id).then(() => {
                                    setLoading(false);
                                    setUpdateRequest(updateRequest + 1);
                                });
                            }}
                        >
                            Borrar
                        </button>



                    </div>}
                />

                <div className={classNames('flex', 'w-full', 'justify-between', 'items-center')}>
                    <div className={classNames('flex', 'items-center', 'justify-center', 'rounded-full', 'w-10', 'h-10', 'bg-violet-900', 'shadow-sm', 'p-2')}>
                        <p className={classNames('text-white', 'inter-900')}>{iniciales(data.name)}</p>
                    </div>
                    <p className={classNames('text-xl', 'text-violet-500')}>{data.age} <span className={classNames('text-gray-700')}>años</span></p>

                </div>


                <div className={classNames(boxContactInfo)}>

                    <p className={classNames('inter-900')}>{data?.name}</p>
                    <button
                        onClick={() => {
                            copiarContenido(data?.email);

                        }}
                        className={classNames('flex', 'justify-center', 'items-center', 'text-xs', 'hover:text-violet-900', 'gap-2')}
                    >
                        {data?.email} <BiCopyAlt className={classNames('hover:text-md', 'text-xs')} />
                    </button>
                    <p className={classNames('text-xs', 'inter-900', 'text-violet-900')}>{data?.phone}</p>

                </div>

            </div>

            <div className={classNames('flex', 'justify-end', 'items-end', 'self-end')}>

                <div className={classNames('flex', 'items-center', 'justify-end', 'gap-3')}>

                    <div className={classNames('flex', 'items-center', 'justify-center', 'w-5', 'h-5')}>

                        <button
                            className={classNames('text-md', 'hover:text-xl', 'hover:text-violet-700')}
                            onClick={() => {
                                setModalIsOpen(true);
                            }}
                        >
                            <FiEdit3 />
                        </button>

                    </div>

                    <div className={classNames('flex', 'items-center', 'justify-center', 'w-5', 'h-5')}>

                        <button
                            className={classNames('text-md', 'hover:text-xl', 'hover:text-violet-700')}
                            onClick={async () => {

                                setisModalDeleteOpen(true);



                            }}
                        >
                            <RiDeleteBin2Line className={classNames('text-md', 'hover:text-xl')} />

                        </button>

                    </div>



                </div>


            </div>


        </div>
    )
}

export default ContactCard;