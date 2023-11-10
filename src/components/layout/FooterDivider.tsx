import Cloud from '@/images/cloud.svg'

export const FooterDivider = () => (
  <div className="bg-sky-100 mt-12 md:pt-4 pb-8">
    <div className="h-16 md:h-24 lg:h-32 xl:h-48 overflow-hidden md:-mt-[40px] relative  rotate-180">
      <Cloud className="w-full xl:bg-cover relative" />
      <div className="sm:hidden bg-white absolute bottom-0 h-8 md:h-2 w-full" />
    </div>
  </div>
)
