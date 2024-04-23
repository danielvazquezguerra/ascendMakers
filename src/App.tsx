import classNames from 'classnames';
import React from 'react';
import ContactsWrapper from './components/ContactsWrapper';

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
            <p className={classNames('inter-200', 'text-xs')}>Por Daniel</p>
          </div>

          <div className={classNames('flex', 'w-full', 'h-auto')}>

              <ContactsWrapper />
            
          </div>

        </section>


    </main>

  );
}

export default App;
