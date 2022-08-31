import Animals from './animals'
import { AnimalButton } from './AnimalButton'

export const AnimalControls = () => {
  return (
    <div className="z-10 absolute top-0 right-0 w-[400px] pr-8">
      <div className="flex mt-[200px] h-full w-full flex-col">
        <div className="">
          <ul className="text-right space-y-4 my-4">
            {Animals.map((animal) => (
              <AnimalButton animal={animal} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
