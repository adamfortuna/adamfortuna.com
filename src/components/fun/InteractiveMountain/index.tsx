import { useEffect, useState } from 'react'

import { useSelector } from '@/hooks/useSelector'
import Mountains from '@/images/mountains.svg'
import { AnimalControls } from './AnimalControls'
import { MountainController } from './MountainController'

export const InteractiveMountain = () => {
  const { q, ref } = useSelector()

  // Only load the controller on the client since that's what animates everything
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="absolute w-screen h-screen overflow-hidden" ref={ref}>
      {loaded && <MountainController q={q} />}
      <Mountains className="h-screen overflow-hidden xl:h-auto xl:bg-cover" />
      <AnimalControls />
    </div>
  )
}
