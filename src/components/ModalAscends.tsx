import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ModalAscendsProps } from '../data/contacts/types'
import classNames from 'classnames'

export default function ModalAscends({
  isOpen,
  children,
  className,
  setIsOpen,
  titulo,
}:ModalAscendsProps) {


  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 opacity-40 bg-indigo-300" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md flex flex-col transform overflow-hidden rounded-3xl bg-white p-8 text-left align-middle shadow-xl transition-all gap-4">
                  <Dialog.Title
                    as="h3"
                    className={classNames('text-xl')}
                  >
                    {titulo}
                  </Dialog.Title>

                  {children}
    
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
