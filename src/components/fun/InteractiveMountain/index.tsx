import Mountains from '@/images/mountains.svg'
import { AnimalControls } from './AnimalControls'
import { MountainProvider } from './useMountain'

export const InteractiveMountain = () => {
  return (
    <MountainProvider>
      <div className="absolute w-screen h-screen overflow-hidden">
        <Mountains className="h-screen overflow-hidden xl:h-auto xl:bg-cover" />
        <AnimalControls />
      </div>
    </MountainProvider>
  )
}
