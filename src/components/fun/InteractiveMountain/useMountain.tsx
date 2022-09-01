/* eslint-disable @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { gsap } from 'gsap'
import findIndex from 'lodash/findIndex'
import sortBy from 'lodash/sortBy'

import { useSelector } from '@/hooks/useSelector'
import { useWindowSize } from '@/hooks/useWindowSize'
import { Animals, AnimalType } from './animals'

export const MountainContext = createContext({
  triggerAnimal: (animal: AnimalType) => {},
  animals: Animals,
  maxCount: 14,
})

export const useMountain = () => {
  return useContext(MountainContext)
}

export const MountainProvider = ({ children }: any) => {
  const { q, ref } = useSelector()
  const [width] = useWindowSize()
  const timeline = gsap.timeline().addLabel('start')
  const [animals, setAnimals] = useState(Animals)
  const [maxCount, setMaxCount] = useState(14)

  const clouds = () => {
    timeline.to(
      q('.mountains_svg__clouds'),
      {
        y: '-=10',
        duration: 3.5,
        yoyo: true,
        repeat: -1,
      },
      'start',
    )
  }

  const cloud1 = () => {
    const id = '.mountains_svg__cloud1'
    timeline.to(
      q(id),
      {
        x: `+=${width / 2}`,
        duration: 250,
        onComplete: () => {
          const cloudline = gsap.timeline({ repeat: -1, repeatDelay: 0 }).addLabel('cloud1')
          cloudline.set(q(id), { x: -50 }).to(
            q(id),
            {
              x: '+=100vw',
              duration: 300,
            },
            '>',
          )

          timeline.add(cloudline, 250)
        },
      },
      'start',
    )
  }
  const cloud2 = () => {
    timeline.to(
      q('.mountains_svg__cloud2'),
      {
        y: '-=4',
        duration: 3,
        repeat: -1,
        yoyo: true,
      },
      'start',
    )
  }

  const cloud3 = () => {
    const id = '.mountains_svg__cloud3'
    timeline.to(
      q(id),
      {
        x: '+=200',
        duration: 100,
        onComplete: () => {
          const cloudline = gsap.timeline({ repeat: -1, repeatDelay: 0 }).addLabel('cloud3')
          cloudline.set(q(id), { x: -1000 }).to(
            q(id),
            {
              x: '+=100vw',
              duration: 400,
            },
            '>',
          )

          timeline.add(cloudline, 100)
        },
      },
      'start',
    )
  }

  const startBackgroundAnimations = () => {
    clouds()
    cloud1()
    cloud2()
    cloud3()

    // timeline.timeScale(50)
  }

  useEffect(() => {
    startBackgroundAnimations()
  })

  const animateAnimal = (animal: AnimalType) => {
    setTimeout(() => {
      setAnimals((currentAnimals) => {
        const newAnimals = [...currentAnimals]

        const index = findIndex(newAnimals, (a) => a.name === animal.name)
        newAnimals[index].animating = false

        return newAnimals
      })
    }, 5000)
  }

  const triggerAnimal = (animal: AnimalType) => {
    setAnimals((currentAnimals) => {
      const newAnimals = [...currentAnimals]

      const index = findIndex(newAnimals, (a) => a.name === animal.name)
      newAnimals[index].count += 1
      newAnimals[index].animating = true

      const sortedAnimals = sortBy(newAnimals, (a) => a.count * -1) as AnimalType[]

      setMaxCount(sortedAnimals[0].count)
      return sortedAnimals
    })

    animateAnimal(animal)
  }

  const state = useMemo(() => {
    return {
      triggerAnimal,
      animals,
      maxCount,
    }
  }, [animals, maxCount])

  return (
    <MountainContext.Provider value={state}>
      <div ref={ref}>{children}</div>
    </MountainContext.Provider>
  )
}
