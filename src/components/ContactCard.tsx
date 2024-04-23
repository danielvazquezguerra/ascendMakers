import classNames from 'classnames';
import { apiFetchAllContacts } from '../data/contacts';
import { CgProfile } from "react-icons/cg";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { apiDeleteContact } from '../data/contacts';
import { CardProps } from '../data/contacts/types';
import { useRef, useState } from 'react';
import { copiarContenido } from '../util/clipboard';
import { BiCopyAlt } from "react-icons/bi";

const ContactCard = ({
    data,
    className,
    updateRequest,
    setUpdateRequest,

}:CardProps) => {

    const boxContactInfo = ['flex', 'flex-col', 'justify-center', 'items-start', 'w-full'];

    const [loading, setLoading] = useState(false);

    const iniciales = (nombre:string) => {
        let arrayNombre = nombre.split(' ');
        return `${arrayNombre[0][0]}${arrayNombre[1][0]}`
    }

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
            'shadow-xl',
            {'flip-horizontal-bottom': loading },
            'transition-transform'
             )}
        >


            <div className={classNames('flex', 'flex-col', 'justify-start', 'items-start', 'w-full', 'gap-4')}>

                {/* <CgProfile style={{ fontSize: 30 }} /> */}

                <div className={classNames('flex', 'items-center', 'justify-center', 'rounded-full', 'w-10', 'h-10', 'bg-violet-900', 'shadow-sm', 'p-2')}>
                    <p className={classNames('text-white', 'inter-900')}>{iniciales(data.name)}</p>
                </div>

                <div className={classNames(boxContactInfo)}>

                    <p className={classNames('inter-900')}>{data?.name}</p>
                    <button 
                        onClick={()=> copiarContenido(data?.email)} 
                        className={classNames('flex', 'justify-center', 'items-center','text-xs', 'hover:text-violet-900', 'gap-2')}
                    >
                            {data?.email} <BiCopyAlt className={classNames('hover:text-md', 'text-xs')}/>
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
                                console.log('editar')
                            }}
                        >
                            <FiEdit3 />
                        </button>

                    </div>

                    <div className={classNames('flex', 'items-center', 'justify-center', 'w-5', 'h-5')}>

                        <button
                         className={classNames('text-md', 'hover:text-xl', 'hover:text-violet-700')}
                            onClick={async() => {

                                setLoading(true);
                                await apiDeleteContact(data?.id).then(() => { 
                                    setLoading(false);
                                    setUpdateRequest(updateRequest + 1);
                                    
                                    
                                });
                                
                            }}
                        >
                            <RiDeleteBin2Line className={classNames('text-md', 'hover:text-xl')}/>
                        </button>

                    </div>



                </div>


            </div>


        </div>
    )
}

export default ContactCard;