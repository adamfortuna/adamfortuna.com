import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { AnimalType } from './animals'
import { useMountain } from './useMountain'

export interface AnimalButtonProps {
  animal: AnimalType
}

const width = 200

export const AnimalButton = ({ animal }: AnimalButtonProps) => {
  const { triggerAnimal, maxCount } = useMountain()

  return (
    <motion.li className="flex items-center space-x-4 justify-end" layoutId={animal.name}>
      <div
        className={`rounded h-4 border-2 border-sky-800 transition-all duration-500 ease-in-out ${
          animal.animating ? 'bg-sky-800' : ''
        }`}
        style={{
          width: `${(animal.count / maxCount) * width}px`,
        }}
      />
      <div className="w-8">
        {animal.animatable && !animal.animating ? (
          <button
            type="button"
            className="group sm:inline-block group-hover:text-white text-2xl text-sky-800"
            onClick={() => triggerAnimal(animal)}
          >
            <FontAwesomeIcon icon={animal.solidIcon} className="hidden group-hover:inline-block -scale-x-100" />
            <FontAwesomeIcon icon={animal.icon} className="group-hover:hidden text-2xl inline-block -scale-x-100" />
          </button>
        ) : (
          <div className="group sm:inline-block text-2xl text-sky-800">
            {animal.animating ? (
              <FontAwesomeIcon icon={animal.solidIcon} className="text-2xl inline-block -scale-x-100" />
            ) : (
              <FontAwesomeIcon icon={animal.icon} className="text-2xl inline-block -scale-x-100" />
            )}
          </div>
        )}
      </div>
    </motion.li>
  )
}
