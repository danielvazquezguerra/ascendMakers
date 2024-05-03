import classNames from 'classnames'
import { ProfileInicialesProps } from '../data/contacts/types';
import { obtenerIniciales } from '../util/obtenerIniciales'; // obtenemos las iniciales del nombre para crear un Avatar

const AvatarProfile = ({
    name,
}:ProfileInicialesProps) => {

  return (

    <div className={classNames('flex', 'items-center', 'justify-center', 'rounded-full', 'w-10', 'h-10', 'bg-violet-900', 'shadow-sm', 'p-2')}>
        <p className={classNames('text-white', 'inter-900')}>{obtenerIniciales(name)}</p>
    </div>
   


  )
}

export default AvatarProfile