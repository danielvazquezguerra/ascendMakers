import classNames from 'classnames';
import { useEffect, useState } from 'react';
import ContactsWrapper from './components/ContactsWrapper';
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import ModalAscend from './components/ModalAscends';
import FormNewContact from './components/FormNewContact';
import { generateUUID } from './util/guid';
import { getContacts, saveContacts } from './data/contacts/storage';
import { apiFetchAllContacts } from './data/contacts';

function App() {

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [updateRequest, setUpdateRequest] = useState<number>(0);

  const butAddCon = [                
    'flex', 
    'items-center', 
    'justify-center', 
    'bg-violet-900', 
    'px-5', 
    'py-3', 
    'text-white', 
    'text-xs', 
    'rounded-full', 
    'gap-3',
    'w-full',
    'sm:w-auto',
    'hover:border-violet-900', 
    'hover:from-violet-500', 
    'bg-gradient-to-br', 
    'hover:to-rose-400'
]

const contacts = getContacts().sort((a, b) => {
  return a.name.localeCompare(b.name)
});

useEffect(() => {

  apiFetchAllContacts().then((_contacts)=> {

    if (updateRequest < 1) {

      setUpdateRequest(1);

      saveContacts([
        {
            id: generateUUID(),
            name: 'Nacho Rodriguez',
            phone: '652234043',
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
        },
    ])

  }


})

  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [updateRequest])

const mainBox = ['flex', 'flex-col', 'items-center', 'justify-center', 'h-screen', 'overflow-y-hidden', 'mx-4'];
const contentBox = ['flex', 'flex-col', 'sm:justify-center', 'sm:w-1/2', 'w-full', 'flex-grow', 'overflow-x-hidden', 'sm:m-0', 'overflow-hidden'];
const headerBox = ['flex', 'sm:flex-row', 'flex-col', 'justify-between', 'sm:items-center', 'items-start', 'w-full', 'justify-center', 'sm:h-20', 'h-auto', 'sm:p-8', 'p-6', 'sm:p-0', 'gap-10'];

  return (

    <main className={classNames(mainBox)}>

      <ModalAscend
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

      <div className={classNames(contentBox)}>

        <section className={classNames(headerBox)}>

          <div className={classNames('flex', 'w-4', 'items-center', 'w-7', 'gap-2')}>
            <img className={classNames('h-full', 'w-full')} src="/img/ascendMakers_logo.svg" alt="ascendMakers_logo" />
            <h1 className={classNames('inter-900', 'text-2xl')}>AscendMakers</h1>
          </div>
          
          <button 
            className={classNames(butAddCon)}
            onClick={() => {
              setModalIsOpen(!modalIsOpen)
            }}
          >
            <p>Crear nuevo contacto</p>
            <MdOutlinePersonAddAlt1 className={classNames('text-xl')} />
          </button>

        </section>

        <section className={classNames('flex', 'w-full', 'overflow-y-scroll', 'flex-grow', 'sm:flex-grow-0', 'sm:h-1/2', 'overflow-x-hidden', 'scroll-mr-6', 'sm:pr-5', 'sm:py-5', 'p-0')}>

          <ContactsWrapper
            updateRequest={updateRequest}
            setUpdateRequest={setUpdateRequest}
            contacts={contacts}
          />

        </section>

        <footer className={classNames('flex', 'flex-col', 'justify-center', 'items-end', 'w-full', 'mt-5', 'mb-10', 'pr-4')}>

          <p className={classNames('text-sm', 'text-violet-900')}>Por <a className={classNames('inter-900')} href="https://danielvazquezguerra.com/" rel="noreferrer" target='_blank'>Daniel Vazquez</a></p>
          <small>Prueba técnica para <span className={classNames('inter-900')}>AscendsMakers</span> / 2024</small>

        </footer>

      </div>
      


    </main>

  );
}

export default App;
