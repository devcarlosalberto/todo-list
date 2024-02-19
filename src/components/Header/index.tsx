import { HeaderContainer } from './styles'

import todoLogoSvg from '../../assets/todo-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={todoLogoSvg} alt="" />
    </HeaderContainer>
  )
}
