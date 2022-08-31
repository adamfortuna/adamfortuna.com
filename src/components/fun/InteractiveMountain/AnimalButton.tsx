import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimalType } from './animals'
import { useMountain } from './useMountain'

export interface AnimalButtonProps {
  animal: AnimalType
}
export const AnimalButton = ({ animal }: AnimalButtonProps) => {
  const { triggerAnimal } = useMountain()

  return (
    <li className="flex items-center space-x-2 justify-end">
      {animal.hoverIcon ? (
        <button
          type="button"
          className="group sm:inline-block text-sky-800 group-hover:text-white text-2xl"
          onClick={() => triggerAnimal(animal)}
        >
          <FontAwesomeIcon icon={animal.hoverIcon} className="hidden group-hover:inline-block -scale-x-100" />
          <FontAwesomeIcon icon={animal.icon} className="group-hover:hidden text-2xl inline-block -scale-x-100" />
        </button>
      ) : (
        <FontAwesomeIcon icon={animal.icon} className="group-hover:hidden text-2xl inline-block -scale-x-100" />
      )}
    </li>
  )
}
