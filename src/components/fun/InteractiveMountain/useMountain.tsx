/* eslint-disable @typescript-eslint/no-unused-vars, react-hooks/exhaustive-deps, sonarjs/no-duplicate-string, @typescript-eslint/no-unnecessary-condition */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { gsap } from 'gsap'
import filter from 'lodash/filter'
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

const CLASS_PREFIX = 'mountains_svg__'

export const MountainProvider = ({ children }: any) => {
  const { q, ref } = useSelector()
  const [width] = useWindowSize()
  const timeline = gsap.timeline().addLabel('start')
  const [animals, setAnimals] = useState(Animals)
  const [maxCount, setMaxCount] = useState(14)

  function mountainClouds() {
    const mountainCloudsTimeline = gsap.timeline()
    mountainCloudsTimeline.to(
      `.${CLASS_PREFIX}mountain__clouds`,
      {
        y: '-=10',
        duration: 3.5,
        yoyo: true,
        repeat: -1,
      },
      'start',
    )
    return mountainCloudsTimeline
  }

  function cloud1() {
    const cloud1Timeline = gsap.timeline({ defaults: { ease: 'linear' } })
    cloud1Timeline
      .to(`.${CLASS_PREFIX}mountain__cloud1`, {
        x: 760,
        duration: 50,
      })
      .fromTo(
        `.${CLASS_PREFIX}mountain__cloud1`,
        {
          x: -200,
        },
        {
          x: 760,
          duration: 70,
          repeat: -1,
          immediateRender: false,
        },
      )

    return cloud1Timeline
  }

  function cloud2() {
    const cloud2Timeline = gsap.timeline()
    cloud2Timeline.to(`.${CLASS_PREFIX}mountain__cloud2`, {
      y: '-=10',
      duration: 4.5,
      yoyo: true,
      repeat: -1,
    })
    return cloud2Timeline
  }

  function cloud3() {
    const cloud3Timeline = gsap.timeline({ defaults: { ease: 'linear' } })
    cloud3Timeline.to(`.${CLASS_PREFIX}mountain__cloud3`, {
      x: 760,
      duration: 30,
    })
    cloud3Timeline.fromTo(
      `.${CLASS_PREFIX}mountain__cloud3`,
      {
        x: -200,
      },
      {
        x: 760,
        duration: 90,
        repeat: -1,
        immediateRender: false,
      },
    )
    return cloud3Timeline
  }

  function breeze() {
    const breezeTimeline = gsap.timeline()
    // Todo: Figure out how to order these
    breezeTimeline.to(`.${CLASS_PREFIX}mountain__tree`, {
      duration: 1,
      repeat: -1,
      yoyo: true,
      repeatDelay: 4,
      stagger: 0.1,
      transformOrigin: '100% 50%',
      skewType: 'simple',
      skewX: -5,
    })

    breezeTimeline.to(
      `.${CLASS_PREFIX}mountain__bottom-left`,
      {
        duration: 1,
        repeat: -1,
        yoyo: true,
        repeatDelay: 4,
        transformOrigin: '100% 50%',
        skewType: 'simple',
        skewX: -15,
      },
      '>',
    )

    return breezeTimeline
  }

  const sunsetDuration = 3
  function sunset() {
    gsap.to(`.${CLASS_PREFIX}mountain__sun`, {
      motionPath: {
        path: `.${CLASS_PREFIX}mountain__animation-paths__sun-path`,
        align: `.${CLASS_PREFIX}mountain__animation-paths__sun-path`,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: sunsetDuration,
      ease: 'power1.inOut',
    })

    gsap.to('.mountain__moon', {
      motionPath: {
        path: `.${CLASS_PREFIX}mountain__animation-paths__moon-path`,
        align: `.${CLASS_PREFIX}mountain__animation-paths__moon-path`,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 1,
        end: 0,
      },
      duration: sunsetDuration,
      ease: 'power1.inOut',
    })

    gsap.to(`.${CLASS_PREFIX}mountain__sky`, {
      fill: '#527379',
      duration: sunsetDuration,
    })

    gsap.to(
      [
        `.${CLASS_PREFIX}mountain__cloud1`,
        `.${CLASS_PREFIX}mountain__cloud2`,
        `.${CLASS_PREFIX}mountain__cloud3`,
        `.${CLASS_PREFIX}mountain__clouds`,
      ],
      {
        fill: '#ccc',
        duration: sunsetDuration,
      },
    )

    gsap.fromTo(
      [
        `.${CLASS_PREFIX}mountain__mountain`,
        `.${CLASS_PREFIX}mountain__mountains`,
        `.${CLASS_PREFIX}mountain__mountainss__mountains`,
        `.${CLASS_PREFIX}mountain__hill`,
        `.${CLASS_PREFIX}mountain__tree`,
        `.${CLASS_PREFIX}mountain__road`,
        `.${CLASS_PREFIX}mountain__white-stones`,
        `.${CLASS_PREFIX}mountain__bottom-right`,
        `.${CLASS_PREFIX}mountain__bottom-left`,
      ],
      {
        webkitFilter: 'brightness(1)',
        filter: 'brightness(1)',
      },
      {
        duration: sunsetDuration,
        webkitFilter: 'brightness(0.7)',
        filter: 'brightness(0.7)',
        ease: 'power1.inOut',
        immediateRender: false,
      },
    )
  }

  function sunrise() {
    gsap.to(`.${CLASS_PREFIX}mountain__sun`, {
      motionPath: {
        path: `.${CLASS_PREFIX}mountain__animation-paths__sun-path`,
        align: `.${CLASS_PREFIX}mountain__animation-paths__sun-path`,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
        start: 1,
        end: 0,
      },
      duration: sunsetDuration,
      ease: 'power1.inOut',
    })

    gsap.to(`.${CLASS_PREFIX}mountain__moon`, {
      motionPath: {
        path: `.${CLASS_PREFIX}mountain__animation-paths__moon-path`,
        align: `.${CLASS_PREFIX}mountain__animation-paths__moon-path`,
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: sunsetDuration,
      ease: 'power1.inOut',
    })

    gsap.to(`.${CLASS_PREFIX}mountain__sky`, {
      fill: '#A6D7DF',
      duration: sunsetDuration,
    })

    gsap.to(
      [
        `.${CLASS_PREFIX}mountain__cloud1`,
        `.${CLASS_PREFIX}mountain__cloud2`,
        `.${CLASS_PREFIX}mountain__cloud3`,
        `.${CLASS_PREFIX}mountain__clouds`,
      ],
      {
        fill: '#fff',
        duration: sunsetDuration,
      },
    )

    gsap.fromTo(
      [
        `.${CLASS_PREFIX}mountain__mountain`,
        `.${CLASS_PREFIX}mountain__mountains`,
        `.${CLASS_PREFIX}mountain__mountainss__mountains`,
        `.${CLASS_PREFIX}mountain__hill`,
        `.${CLASS_PREFIX}mountain__tree`,
        `.${CLASS_PREFIX}mountain__road`,
        `.${CLASS_PREFIX}mountain__white-stones`,
        `.${CLASS_PREFIX}mountain__bottom-right`,
        `.${CLASS_PREFIX}mountain__bottom-left`,
      ],
      {
        webkitFilter: 'brightness(0.7)',
        filter: 'brightness(0.7)',
      },
      {
        duration: sunsetDuration,
        webkitFilter: 'brightness(1)',
        filter: 'brightness(1)',
        ease: 'power1.inOut',
        immediateRender: false,
      },
    )
  }

  function dragonAttack() {
    const dragonAttackTimeline = gsap.timeline()
    gsap.set(`.${CLASS_PREFIX}mountain__dragon`, {
      opacity: 1,
      scale: 0,
    })
    gsap.set(`.${CLASS_PREFIX}mountain__dragon__fires`, {
      opacity: 0,
    })
    dragonAttackTimeline.to(`.${CLASS_PREFIX}mountain__dragon`, {
      motionPath: {
        path: `.${CLASS_PREFIX}mountain__animation-paths__dragon-path`,
        align: `.${CLASS_PREFIX}mountain__animation-paths__dragon-path`,
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
      },
      scale: 1,
      duration: 7,
      ease: 'power1.inOut',
    })
    dragonAttackTimeline.to(`.${CLASS_PREFIX}mountain__dragon__fires`, {
      opacity: 1,
      duration: 2,
    })
  }

  const animateAnimal = (animal: AnimalType) => {
    if (animal.name === 'Dragon') {
      dragonAttack()
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        setAnimals((currentAnimals) => {
          const newAnimals = [...currentAnimals]

          const index = findIndex(newAnimals, (a) => a.name === animal.name)
          newAnimals[index].animating = false

          resolve(newAnimals[index])
          return newAnimals
        })
      }, 5000 + Math.random() * 5000)
    })
  }

  const animatingRandomAnimal = () => {
    const randomAnimalName = ['Squirrel', 'Bird', 'Deer'][Math.floor(Math.random() * 3)]

    setAnimals((currentAnimals) => {
      const currentlyAnimating = filter(currentAnimals, (a) => a.animating)
      if (currentlyAnimating.length >= 1) {
        return currentAnimals
      }

      const newAnimals = [...currentAnimals]
      const index = findIndex(currentAnimals, (a) => a.name === randomAnimalName)
      if (!newAnimals[index].animating) {
        newAnimals[index].count += 1
        newAnimals[index].animating = true

        animateAnimal(newAnimals[index])
          .then(() => {
            animatingRandomAnimal()
          })
          .catch(() => {
            animatingRandomAnimal()
          })

        const sortedAnimals = sortBy(newAnimals, (a) => a.count * -1) as AnimalType[]

        setMaxCount(sortedAnimals[0].count)
        return sortedAnimals
      }
      return newAnimals
    })
  }

  function startBackgroundAnimations() {
    const main = gsap.timeline()
    main.add(mountainClouds(), 0).add(cloud1(), 0).add(cloud2(), 0).add(cloud3(), 0).add(breeze(), 0)

    const sun = document.getElementsByClassName(`${CLASS_PREFIX}mountain__sun`)
    if (sun && sun[0]) {
      sun[0].addEventListener('click', sunset)
    }
    const moon = document.getElementsByClassName(`.${CLASS_PREFIX}mountain__moon`)
    if (moon && moon[0]) {
      moon[0].addEventListener('click', sunrise)
    }
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

    return animateAnimal(animal)
  }

  useEffect(() => {
    setTimeout(() => {
      startBackgroundAnimations()
    }, 1000)
    animatingRandomAnimal()

    return () => {
      const sun = document.getElementsByClassName(`.${CLASS_PREFIX}mountain__sun`)
      if (sun && sun[0]) {
        sun[0].removeEventListener('click', sunset)
      }
      const moon = document.getElementsByClassName(`.${CLASS_PREFIX}mountain__moon`)
      if (moon && moon[0]) {
        moon[0].removeEventListener('click', sunrise)
      }
    }
  }, [])

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
