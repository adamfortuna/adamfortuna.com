/* eslint-disable react/jsx-no-useless-fragment */
import { useEffect } from 'react'
import { gsap } from 'gsap'

import { useWindowSize } from '@/hooks/useWindowSize'

export const MountainController = ({ q }: any) => {
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

  return <></>
}
