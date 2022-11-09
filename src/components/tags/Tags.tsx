/* eslint-disable react/jsx-no-useless-fragment */
export interface TagsProps {
  tags?: string[]
}

export const Tags = ({ tags }: TagsProps) => {
  if (!tags) {
    return <></>
  }

  const sortedTags = tags.sort()

  return (
    <ul className="flex flex-wrap font-semibold gap-2 text-xs">
      {sortedTags.map((tag) => (
        <li key={tag}>
          <span className="bg-sky-100 rounded-sm px-1 py-0.5">{tag}</span>
        </li>
      ))}
    </ul>
  )
}
