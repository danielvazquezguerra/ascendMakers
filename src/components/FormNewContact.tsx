import classNames from 'classnames';
import { useState } from 'react';
import { MdOutlinePersonAddAlt1 } from 'react-icons/md';
import { validNombre } from '../util/validations/validName';
import { validEmail } from '../util/validations/email';
import { validPhone } from '../util/validations/phone';
import { validAge } from '../util/validations/edad';
import { apiAddContact } from '../data/contacts';
import { generateUUID } from '../util/guid';
import { FormAddContactProps } from '../data/contacts/types';
import { ImHappy } from "react-icons/im";

const FormNewContact = ({
    updateRequest,
    setUpdateRequest,
    className,
    isOpen,
    setIsOpen,
}:FormAddContactProps) => {

    const [nombre, setNombre] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefono, setTelefono] = useState<string>('');
    const [edad, setEdad] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const nombreValido = validNombre(nombre, true);
    const emailValido = validEmail(email, true);
    const telefonoValido = validPhone(telefono);
    const edadValida = validAge(edad);

    const esValido = nombreValido.ok && emailValido.ok && telefonoValido.ok && edadValida.ok; 

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
                    <input
                        className={classNames(inpForCon)}
                        value={nombre}
                        type="text"
                        onChange={(e) => {
                            let value = e.target.value;
                            setNombre(value.toUpperCase());
                        }}
                    />

                    <div className={classNames('flex', 'justify-start', 'items-center', 'h-6')}>
                        {!nombreValido.ok && <p className={classNames('text-xs')}>{nombreValido.mensaje}</p>}
                    </div>

                </div>

                <div className={classNames(inputBox)}>
                    <label className={classNames(label)} htmlFor="email">Email</label>
                    <input
                        className={classNames(inpForCon)}
                        type="email"
                        name={'email'}
                        onChange={(e) => {
                            let value = e.target.value;
                            setEmail(value);
                        }} />
                    <div className={classNames('flex', 'justify-start', 'items-center', 'h-6')}>
                        {!emailValido.ok && <p className={classNames('text-xs')}>{emailValido.mensaje}</p>}
                    </div>
                </div>

                <div className={classNames(inputBox)}>
                    <label className={classNames(label)} htmlFor="telefono">Teléfono</label>
                    <input
                        className={classNames(inpForCon)}
                        type="tel"
                        name={'telefono'}
                        onChange={(e) => {
                            let value = e.target.value;
                            setTelefono(value);
                        }}
                    />

                    <div className={classNames('flex', 'justify-start', 'items-center', 'h-6')}>
                        {!telefonoValido.ok && <p className={classNames('text-xs')}>{telefonoValido.mensaje}</p>}
                    </div>
                </div>

                <div className={classNames(inputBox)}>
                    <label className={classNames(label)} htmlFor="edad">Edad</label>
                    <input
                        className={classNames(inpForCon)}
                        type="text"
                        name={'edad'}
                        onChange={(e) => {
                            let value = e.target.value;
                            setEdad(value);
                        }}
                    />
                    <div className={classNames('flex', 'justify-start', 'items-center', 'h-6')}>
                        {!edadValida.ok && <p className={classNames('text-xs')}>{edadValida.mensaje}</p>}
                    </div>
                </div>

            </div>

            <button
                className={classNames(butAddCon)}
                onClick={ async () => {

                    setIsLoading(true);

                    if (esValido) {

                        await apiAddContact({
                             name: nombre, 
                             id: generateUUID(),
                             email: email,
                             age: Number(edad),
                             phone: telefono,
                         }).then(() => {
                             setUpdateRequest(updateRequest + 1);
                             setIsOpen(false);
                         })

                         setIsLoading(false);

                    }


                }}
            >

                {
                    !isLoading ?

                    <>
                        <p>Crear nuevo contacto</p>
                        <MdOutlinePersonAddAlt1 className={classNames('text-xl')} />
                    </>
                    :

                    <>
                        <p>Tenemos nuevo contacto</p>
                        <ImHappy />
                    </>
                }


            </button>

        </div>

    )
}

export default FormNewContact