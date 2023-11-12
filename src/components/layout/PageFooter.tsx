import { FooterDivider } from './FooterDivider'

export const PageFooter = ({ children = <></> }: { children?: React.ReactElement }) => (
  <div className="bg-sky-200">
    <FooterDivider />
    {children}
  </div>
)
