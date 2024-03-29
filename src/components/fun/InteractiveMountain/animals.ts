import {
  IconDefinition as LightIconDefinition,
  faCrow,
  faDeer,
  faDragon,
  faSquirrel,
  faMountain,
} from '@fortawesome/pro-regular-svg-icons'
import {
  IconDefinition as SolidIconDefinition,
  faCrow as faCrowSolid,
  faDeer as faDeerSolid,
  faDragon as faDragonSolid,
  faSquirrel as faSquirrelSolid,
  faMountain as faMountainSolid,
} from '@fortawesome/pro-solid-svg-icons'

export interface AnimalType {
  name: string
  icon: LightIconDefinition
  solidIcon: SolidIconDefinition
  count: number
  animating: boolean
  animatable: boolean
  weight: number
}

export const Animals = [
  {
    name: 'Mountain',
    icon: faMountain,
    solidIcon: faMountainSolid,
    count: 3,
    animating: false,
    animatable: false,
  },
  {
    name: 'Squirrel',
    icon: faSquirrel,
    solidIcon: faSquirrelSolid,
    count: 0,
    animating: false,
    animatable: true,
  },
  {
    name: 'Bird',
    icon: faCrow,
    solidIcon: faCrowSolid,
    count: 0,
    animating: false,
    animatable: true,
  },
  {
    name: 'Deer',
    icon: faDeer,
    solidIcon: faDeerSolid,
    count: 0,
    animating: false,
    animatable: true,
  },
  {
    name: 'Dragon',
    icon: faDragon,
    solidIcon: faDragonSolid,
    count: 0,
    animating: false,
    animatable: true,
  },
] as AnimalType[]
