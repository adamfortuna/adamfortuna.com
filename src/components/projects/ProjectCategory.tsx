export interface ProjectCategoryProps {
  category: 'app' | 'job' | 'course' | 'library' | 'experience' | 'template'
}

const CateogryMap = {
  app: {
    name: 'App',
    icon: 'A',
  },
  job: {
    name: 'Job',
    icon: 'A',
  },
  course: {
    name: 'Course',
    icon: 'A',
  },
  library: {
    name: 'Library',
    icon: 'A',
  },
  experience: {
    name: 'Experience',
    icon: 'A',
  },
  template: {
    name: 'Template',
    icon: 'A',
  },
}

export const ProjectCategory = ({ category }: ProjectCategoryProps) => {
  return (
    <span>
      <b>Category:</b> {CateogryMap[category].name}
    </span>
  )
}
