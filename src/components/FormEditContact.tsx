import classNames from 'classnames';
import { useState } from 'react';
import { validNombre } from '../util/validations/validName';
import { validEmail } from '../util/validations/email';
import { validPhone } from '../util/validations/phone';
import { validAge } from '../util/validations/edad';
import { apiUpdateContact } from '../data/contacts';
import { FormEditContactProps, ValidInput } from '../data/contacts/types';
import { ImHappy } from "react-icons/im";
import { FiEdit3 } from 'react-icons/fi';
import { GrStatusGood } from "react-icons/gr";
import { IoWarningOutline } from "react-icons/io5";

const FormEditContact = ({
    updateRequest,
    setUpdateRequest,
    className,
    isOpen,
    setIsOpen,
    contact
}:FormEditContactProps) => {

    const [nombre, setNombre] = useState<string>(contact.name);
    const [email, setEmail] = useState<string | undefined>(contact.email);
    const [telefono, setTelefono] = useState<string | undefined>(contact.phone);
    const [edad, setEdad] = useState<string | undefined>(String(contact.age));
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const nombreValido = validNombre(nombre, true);
    const emailValido = validEmail(email, true);
    const telefonoValido = validPhone(telefono);
    const edadValida = validAge(edad);

    const esValido = nombreValido.ok && emailValido.ok && telefonoValido.ok && edadValida.ok;

    const textoError  = [ 'text-xs', 'text-red-500' ];
    const textoValido = [ 'text-xs', 'text-green-600'];

        // le pasamos el valor de los campos y retorna los iconos que corresponden con el mensaje.
        const validadorInput = (validador:ValidInput, valor:string |number) => {

            if ( validador.ok  && valor !== '') { // No puede aparecer hasta que el usuario no escriba algo
                return {
                    icon: <GrStatusGood className={classNames('text-green-600')} fontSize={20}/>,
                    mensaje: <p className={classNames(textoValido)}>{validador.mensaje}</p>
                }
            } else if  (!validador.ok && valor !== '') { 
                return { 
                    icon: <IoWarningOutline fontSize={20} className={classNames('text-orange-600')}/>,
                    mensaje: <p className={classNames(textoError)}>{validador.mensaje}</p>
                }
            }
    
        }

    // clases para los inputs
    const inputBox = ['w-full', 'flex', 'flex-col', 'gap-1'];
    const label = ['inter-300', 'text-sm'];
    const inpForCon = ['w-full', 'border', 'rounded-xl', 'px-4', 'py-2', 'text-xs']
    const butAddCon = [
        'flex',
        'items-center',
        'justify-center',
        'bg-violet-900',
        'px-3',
        {'text-white': esValido},
        {'text-gray-600': !esValido},
        'text-xs',
        'py-3',
        'rounded-full',
        'gap-3',
        'w-full',
        {'hover:border-violet-900': esValido},
        {'hover:from-violet-500': esValido},
        {'border-2': !esValido},
        {'bg-white': !esValido},
        'bg-gradient-to-br',
        'hover:to-rose-400'
    ]



    return (

        <div className={classNames('flex', 'flex-col', 'items-center', 'justify-center', 'gap-10')}>

<div className={classNames('flex', 'flex-col', 'w-full', 'gap-4')}>

<div className={classNames(inputBox)}>

    <label className={classNames(label)} htmlFor="nombre">Nombre</label>

    <div className={classNames(
        'flex', 
        'items-center', 
        'justify-center', 
        'gap-4',


        )}>

    <input
        className={classNames(
            inpForCon,                         
            {'border-emerald-600': nombreValido.ok  && nombre !== ''},
            {'border-orange-600': !nombreValido.ok && nombre !== '' },
        )}
        value={nombre}
        type="text"
        onChange={(e) => {
            let value = e.target.value;
            setNombre(value.toUpperCase());
        }}
    />

    {validadorInput(nombreValido, nombre)?.icon} 

    </div>

    <div className={classNames('flex', 'justify-start', 'items-center', 'h-6')}>
       { validadorInput(nombreValido, nombre)?.mensaje }
    </div>

</div>

<div className={classNames(inputBox)}>
    <label className={classNames(label)} htmlFor="email">Email</label>

    <div className={classNames(
            'flex', 
            'items-center', 
            'justify-center', 
            'gap-4',
        )}
    >

        <input
            className={classNames(inpForCon)}
            type="email"
            name={'email'}
            value={email}
            onChange={(e) => {
                let value = e.target.value;
                setEmail(value);
            }} 
        />

         {email && validadorInput(emailValido, email)?.icon}


    </div>

    <div className={classNames('flex', 'justify-start', 'items-center', 'h-6')}>
        {email && validadorInput(emailValido, email)?.mensaje}    
    </div>
</div>

<div className={classNames(inputBox)}>
    <label className={classNames(label)} htmlFor="telefono">Teléfono</label>
    <div className={classNames(
            'flex', 
            'items-center', 
            'justify-center', 
            'gap-4',
        )}
    >

        <input
            className={classNames(inpForCon)}
            type="tel"
            value={telefono}
            name={'telefono'}
            onChange={(e) => {
                let value = e.target.value;
                setTelefono(value);
            }}
        />

        {telefono && validadorInput(telefonoValido, telefono)?.icon}


    </div>

    <div className={classNames('flex', 'justify-start', 'items-center', 'h-6')}>
        { telefono && validadorInput(telefonoValido, telefono)?.mensaje}
    </div>
</div>

<div className={classNames(inputBox)}>
    <label className={classNames(label)} htmlFor="edad">Edad</label>

    <div className={classNames(
            'flex', 
            'items-center', 
            'justify-center', 
            'gap-4',
        )}
    >

        <input
            className={classNames(inpForCon)}
            type="text"
            name={'edad'}
            value={edad}
            onChange={(e) => {
                let value = e.target.value;
                setEdad(value);
            }}
        />

        {edad && validadorInput(edadValida, edad)?.icon}


    </div>


    <div className={classNames('flex', 'justify-start', 'items-center', 'h-6')}>
        {edad &&  validadorInput(edadValida, edad)?.mensaje}
    </div>
</div>

</div>

            <button
                className={classNames(butAddCon)}
                onClick={ async () => {

                    if (esValido) {

                        setIsLoading(true);
                        await apiUpdateContact({
                            id: contact.id,
                            name: nombre,
                            phone: telefono,
                            email: email,
                            age: Number(edad),

                        }).then(() => {

                            setIsLoading(false);
                            setIsOpen(false);
                            setUpdateRequest(updateRequest + 1)
                            
                        })
                    


                    }


                }}
            >

                {
                    !isLoading ?

                    <>
                        <p>Editar contacto</p>
                        <FiEdit3 className={classNames('text-xl')} />
                    </>
                    :

                    <>
                        <p>Guardando los cambios</p>
                        <ImHappy />
                    </>
                }


            </button>

        </div>

    )
}

export default FormEditContact