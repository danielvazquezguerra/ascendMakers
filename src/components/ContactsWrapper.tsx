import { useEffect, useState } from 'react';
import { saveContacts, getContacts } from '../data/contacts/storage';
import classNames from 'classnames';
import ContactCard from './ContactCard';
import { IContact } from '../data/contacts';
import { generateUUID } from '../util/guid';

const ContactsWrapper = ({

}) => {
    
    const [updateRequest, setUpdateRequest] = useState<number>(0);

    const contacts = getContacts().sort((a, b) => {
        return a.name.localeCompare(b.name)
    });


    useEffect(() => {


        if (contacts.length < 1) { // SI no esta el valor de los datos los creamos.

            saveContacts([
                {
                    id: generateUUID(),
                    name: 'Nacho Rodriguez',
                    phone: '65223404',
                    age: 34,
                    email: 'nacho.rodriguez@ascendmakers.com'
                },
                {
                    id: generateUUID(),
                    name: 'Carlos Aldaguer',
                    phone: '652129364',
                    age: 27,
                    email: 'carlos.aldeguer@ascendmakers.com'
                },
                {
                    id: generateUUID(),
                    name: 'Jonathan Martinez',
                    phone: '652005533',
                    age: 30,
                    email: 'jonathan.martinez@ascendmakers.com'
                }
            ])



        }


    }, [contacts])
    


  return (

    <div className={classNames('grid', 'grid-cols-1', 'w-full', 'gap-4', 'h-24', 'transition-transform',)}>

        {
            contacts && contacts.length > 0 ?

            contacts?.map(( _contact , key ) => {
    
                return <ContactCard 
                        key={key} 
                        data={_contact} 
                        updateRequest={updateRequest}
                        setUpdateRequest={setUpdateRequest}
                    />
    
            })

            :

            <div className={classNames('flex', 'flex-col', 'items-center', 'justify-center','w-full', 'border-zinc-700', 'rounded-2xl', 'p-7', 'shadow-xl', 'gap-5', 'flip-invert', 'bg-white')}>
                <img className={classNames('w-20', 'saturate-0','mix-blend-multiply')} src="/img/lluvia.gif" alt="lluvia" />
                <p className={classNames('inter-900')}>Al parecer no hay nadie aquí</p>
                <button className={classNames('flex', 'items-center', 'justify-center','px-4', 'py-2', 'hover:px-6', 'bg-slate-900', 'rounded-full', 'text-white', 'text-xs', 'gap-2')}>
                    <p>¿Añadimos a alguien?</p>
                    <img className={classNames('w-6', 'saturate-0', 'invert', 'mix-blend-screen')} src="/img/contento.gif" alt="contento" />
                </button>
            </div>


        }

        

    </div>

  )

}

export default ContactsWrapper