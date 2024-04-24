import classNames from 'classnames'

const FormNewContact = () => {

  return (

    <div className={classNames('flex', 'flex-col', 'items-center', 'justify-center')}>

        <div className={classNames('flex', 'flex-col', 'w-full', 'gap-4')}>

            <input className={classNames('w-full', 'border', 'rounded-full', 'p-4')} type="text" />
            <input className={classNames('w-full', 'border', 'rounded-full', 'p-4')} type="text" />
            <input className={classNames('w-full', 'border', 'rounded-full', 'p-4')} type="text" />

        </div>

    </div>

  )
}

export default FormNewContact