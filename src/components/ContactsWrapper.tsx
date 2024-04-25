
import classNames from 'classnames';
import ContactCard from './ContactCard';
import { ContactWrapperProps } from '../data/contacts/types';
import ModalAscends from './ModalAscends';
import FormNewContact from './FormNewContact';
import { useState } from 'react';

const ContactsWrapper = ({
    className,
    updateRequest,
    setUpdateRequest,
    contacts,
}: ContactWrapperProps) => {

    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    

    return (

        <div className={classNames('grid', 'grid-cols-1', 'h-fit','gap-5', 'w-full', 'transition-transform', 'mb-2')}>

            <ModalAscends
                    isOpen={modalIsOpen} 
                    setIsOpen={setModalIsOpen}
                    titulo={'Crear un contacto'}
                    children={<FormNewContact
                                setUpdateRequest={setUpdateRequest} 
                                updateRequest={updateRequest}
                                isOpen={modalIsOpen} 
                                setIsOpen={setModalIsOpen}
                            />}
                />

            {
                contacts && contacts.length > 0 ?

                    contacts.map((_contact, key) => {

                        return <ContactCard
                            key={key}
                            data={_contact}
                            updateRequest={updateRequest}
                            setUpdateRequest={setUpdateRequest}
                        />

                    })

                    :

                    <div className={classNames('flex', 'flex-col', 'items-center', 'justify-center', 'w-full', 'border-zinc-700', 'rounded-2xl', 'p-7', 'shadow-xl', 'gap-5', 'flip-invert', 'bg-white')}>
                        <img className={classNames('w-20', 'saturate-0', 'mix-blend-multiply')} src="/img/lluvia.gif" alt="lluvia" />
                        <p className={classNames('inter-900')}>Al parecer no hay nadie aquí</p>
                        <button
                            className={classNames('flex', 'items-center', 'justify-center', 'px-4', 'py-2', 'hover:px-6', 'bg-slate-900', 'rounded-full', 'text-white', 'text-xs', 'gap-2')}
                            onClick={() => {
                                setModalIsOpen(true);
                            }}
                        >
                            <p>¿Añadimos a alguien?</p>
                            <img className={classNames('w-6', 'saturate-0', 'invert', 'mix-blend-screen')} src="/img/contento.gif" alt="contento" />
                        </button>
                    </div>


            }



        </div>

    )

}

export default ContactsWrapper