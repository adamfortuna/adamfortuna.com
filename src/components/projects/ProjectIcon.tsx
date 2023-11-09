/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-useless-fragment, no-nested-ternary */
export interface ProjectIconProps {
  icon_url: string | null
  size?: number
}

export const ProjectIcon = ({ icon_url, size = 64 }: ProjectIconProps) => {
  if (!icon_url) {
    return <></>
  }

  if (icon_url && icon_url.endsWith('.svg')) {
    return (
      <span
        className={`rounded-full overflow-hidden flex items-center ${
          size >= 64 ? 'p-3' : size >= 48 ? 'p-2' : 'p-1.5'
        }`}
      >
        <img
          src={`https://storage.googleapis.com/adamfortuna/projects/${icon_url}`}
          height={size}
          width={size}
          alt="Project icon"
          loading="lazy"
        />
      </span>
    )
  }
  return (
    <img
      src={`https://storage.googleapis.com/adamfortuna/projects/${icon_url}`}
      className="rounded-full bg-white-400"
      height={size}
      width={size}
      alt="Project icon"
      loading="lazy"
    />
  )
}
