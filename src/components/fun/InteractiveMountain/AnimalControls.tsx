import { AnimatePresence } from 'framer-motion'
import { useMountain } from './useMountain'
import { AnimalButton } from './AnimalButton'

export const AnimalControls = () => {
  const { animals } = useMountain()

  return (
    <div className="hidden lg:block z-10 absolute top-0 right-0 w-[400px] pr-8">
      <div className="flex mt-[200px] h-full w-full flex-col">
        <div className="-mt-[100px]">
          <AnimatePresence>
            <ul className="text-right space-y-4 my-4">
              {animals.map((animal) => (
                <AnimalButton key={animal.name} animal={animal} />
              ))}
            </ul>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
