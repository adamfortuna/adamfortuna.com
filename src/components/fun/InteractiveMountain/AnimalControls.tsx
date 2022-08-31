import { faBird, faDeer, faDragon, faSquirrel, faTree } from '@fortawesome/pro-regular-svg-icons'
import {
  faBird as faBirdSolid,
  faDeer as faDeerSolid,
  faDragon as faDragonSolid,
  faSquirrel as faSquirrelSolid,
} from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface AnimalProps {
  icon: any
  hoverIcon?: any
  clickable?: boolean
}
const Animal = ({ icon, hoverIcon, clickable = true }: AnimalProps) => {
  return (
    <li className="flex items-center space-x-2 justify-end">
      {clickable ? (
        <button type="button" className="group sm:inline-block text-sky-800 group-hover:text-white text-2xl">
          <FontAwesomeIcon icon={hoverIcon} className="hidden group-hover:inline-block" />
          <FontAwesomeIcon icon={icon} className="group-hover:hidden text-2xl inline-block" />
        </button>
      ) : (
        <FontAwesomeIcon icon={icon} className="group-hover:hidden text-2xl inline-block" />
      )}
    </li>
  )
}

export const AnimalControls = () => {
  return (
    <div className="z-10 absolute inset-y-0 right-0 w-[400px] pr-8">
      <div className="flex mt-[200px] h-full w-full flex-col">
        <div className="">
          <ul className="text-right space-y-4 my-4">
            <Animal icon={faTree} clickable={false} />
            <Animal icon={faSquirrel} hoverIcon={faSquirrelSolid} />
            <Animal icon={faBird} hoverIcon={faBirdSolid} />
            <Animal icon={faDeer} hoverIcon={faDeerSolid} />
            <Animal icon={faDragon} hoverIcon={faDragonSolid} />
          </ul>
        </div>
      </div>
    </div>
  )
}
