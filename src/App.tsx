import classNames from 'classnames';
import React from 'react';
import ContactsWrapper from './components/ContactsWrapper';
import { MdOutlinePersonAddAlt1 } from "react-icons/md";

function App() {

  return (
    <main className={classNames('flex', 'flex-col', 'items-center', 'justify-start', 'h-screen', 'bg-red-100')}>
        <section
          className={classNames('flex', 'flex-col', 'w-1/2', 'gap-5', 'h-auto', 'mt-40')}
        >
          <div className={classNames('flex', 'justify-between', 'items-center', 'w-full', 'justify-center')}>

            <div className={classNames('flex', 'w-4', 'items-center', 'w-7', 'gap-2')}>
              <img style={{width: '100%'}} className={classNames('h-full')} src="/img/ascendMakers_logo.svg" alt="ascendMakers_logo" />
              <h1 className={classNames('inter-900', 'text-2xl')}>AscendMakers</h1>
            </div>
            <button className={classNames('flex', 'items-center', 'justify-center','bg-violet-900', 'px-3', 'text-white', 'text-xs', 'py-2', 'rounded-full', 'gap-3')}>
              <p>Crear nuevo contacto</p>
              <MdOutlinePersonAddAlt1 className={classNames('text-xl')}/>
            </button>
          </div>

          <div className={classNames('flex', 'w-full', 'h-auto')}>

              <ContactsWrapper />
            
          </div>

        </section>


    </main>

  );
}

export default App;
