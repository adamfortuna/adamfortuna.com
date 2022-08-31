import {
  IconDefinition as LightIconDefinition,
  faCrow,
  faDeer,
  faDragon,
  faSquirrel,
  faTree,
} from '@fortawesome/pro-regular-svg-icons'
import {
  IconDefinition as SolidIconDefinition,
  faCrow as faCrowSolid,
  faDeer as faDeerSolid,
  faDragon as faDragonSolid,
  faSquirrel as faSquirrelSolid,
} from '@fortawesome/pro-solid-svg-icons'

export interface AnimalType {
  name: string
  icon: LightIconDefinition
  hoverIcon?: SolidIconDefinition
}

const Animals = [
  {
    name: 'Tree',
    icon: faTree,
  },
  {
    name: 'Squirrel',
    icon: faSquirrel,
    hoverIcon: faSquirrelSolid,
  },
  {
    name: 'Bird',
    icon: faCrow,
    hoverIcon: faCrowSolid,
  },
  {
    name: 'Deer',
    icon: faDeer,
    hoverIcon: faDeerSolid,
  },
  {
    name: 'Dragon',
    icon: faDragon,
    hoverIcon: faDragonSolid,
  },
] as AnimalType[]

export default Animals
