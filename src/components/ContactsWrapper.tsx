import { useEffect } from 'react';
import { saveContacts, getContacts } from '../data/contacts/storage';
import generateUniqueId from 'generate-unique-id';
import classNames from 'classnames';
import ContactCard from './ContactCard';
import { IContact } from '../data/contacts';

const ContactsWrapper = ({

}) => {
    
    const contacts = getContacts();

    useEffect(() => {

        const configId = {
            length: 6,
            useLetters: true
        }

        console.log(contacts)


        if (contacts.length === 0) {

            saveContacts([
                {
                    id: String(generateUniqueId(configId)),
                    name: 'Nacho Rodriguez',
                    phone: '65223404',
                    age: 24,
                    email: 'nacho.rodriguez@ascendmakers.com'
                },
                {
                    id: String(generateUniqueId(configId)),
                    name: 'Carlos Aldaguer',
                    phone: '652129364',
                    age: 24,
                    email: 'carlos.aldeguer@ascendmakers.com'
                },
                {
                    id: String(generateUniqueId(configId)),
                    name: 'Jonathan Martinez',
                    phone: '652005533',
                    age: 24,
                    email: 'jonathan.martinez@ascendmakers.com'
                }
            ])

        }

    }, [contacts])
    


  return (

    <div className={classNames('grid', 'grid-cols-1', 'w-full', 'gap-4', 'h-24')}>

        { contacts?.map(( _contact:any, key: any ) => {

            return <ContactCard key={key} data={_contact}/>

        })}
        

    </div>

  )

}

export default ContactsWrapper