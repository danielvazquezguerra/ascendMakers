import classNames from 'classnames';
import { IContact, apiFetchAllContacts } from '../data/contacts';
import { CgProfile } from "react-icons/cg";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { apiDeleteContact } from '../data/contacts';

const ContactCard = (
    data: any,
) => {

    const infoData = data.data;

    const boxContactInfo = ['flex', 'flex-col', 'justify-center', 'items-start', 'w-full']


    return (

        <div className={classNames(
            'w-full', 
            'flex', 
            'justify-between', 
            'items-center', 
            'p-5', 
            'rounded-3xl',
            'from-white',
            'bg-gradient-to-br',
            'shadow-xl'
             )}>

            <div className={classNames('flex', 'flex-col', 'justify-start', 'items-start', 'w-full', 'gap-4')}>

                <CgProfile style={{ fontSize: 30 }} />

                <div className={classNames(boxContactInfo)}>

                    <p className={classNames('inter-900')}>{infoData?.name}</p>
                    <p className={classNames('text-xs')}>{infoData?.email}</p>
                    <p className={classNames('text-xs')}>{infoData?.phone}</p>

                </div>

            </div>


            <div className={classNames('flex', 'justify-end', 'items-end', 'self-end')}>

                <div className={classNames('flex', 'items-center', 'justify-end', 'gap-3')}>

                    <button 
                        onClick={() => {
                            console.log('editar')
                        }}
                    >
                        <FiEdit3 />
                    </button>

                    <button 
                        onClick={async() => {
                            await apiDeleteContact(infoData?.id);
                            apiFetchAllContacts()
                        }}
                    >
                        <RiDeleteBin2Line />
                    </button>

                </div>


            </div>


        </div>
    )
}

export default ContactCard;