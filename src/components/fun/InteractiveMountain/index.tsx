import { useEffect } from 'react'
import { gsap } from 'gsap'

import { useSelector } from '@/hooks/useSelector'
import { useWindowSize } from '@/hooks/useWindowSize'
import Mountains from '@/images/mountains.svg'
import { AnimalControls } from './AnimalControls'

export const InteractiveMountain = () => {
  const { q, ref } = useSelector()
  const timeline = gsap.timeline().addLabel('start')
  const [width] = useWindowSize()

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
    gsap.to(q(id), {
      x: `+=${width / 2}`,
      duration: 250,
      onComplete: () => {
        const cloudline = gsap.timeline({ repeat: -1, repeatDelay: 0 }).addLabel('cloud1')
        cloudline.set(q(id), { x: -50 }).to(
          q(id),
          {
            x: `+=${width}`,
            duration: 300,
          },
          '>',
        )

        timeline.add(cloudline, 'start')
      },
    })
  }
  const cloud2 = () => {
    timeline.to(q('.mountains_svg__cloud2'), {
      y: '-=4',
      duration: 3,
      repeat: -1,
      yoyo: true,
    })
  }

  const cloud3 = () => {
    const id = '.mountains_svg__cloud3'
    gsap.to(q(id), {
      x: '+=200',
      duration: 100,
      onComplete: () => {
        const cloudline = gsap.timeline({ repeat: -1, repeatDelay: 0 }).addLabel('cloud3')
        cloudline.set(q(id), { x: -50 }).to(
          q(id),
          {
            x: `+=${width}`,
            duration: 400,
          },
          '>',
        )

        timeline.add(cloudline, 'start')
      },
    })
  }

  const startBackgroundAnimations = () => {
    clouds()
    cloud1()
    cloud2()
    cloud3()
  }

  useEffect(() => {
    startBackgroundAnimations()
  })

  return (
    <div className="absolute w-screen h-screen -mt-[150px]" ref={ref}>
      <Mountains className="h-screen overflow-hidden xl:h-auto xl:bg-cover" />
      <AnimalControls />
    </div>
  )
}
