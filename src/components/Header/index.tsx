import { Logo } from './Logo';
import { Menu } from './Menu';

import '../../styles/Header/header.scss';

export function Header() {
  return (
    <header>
      <div>
        <Logo />
        <Menu />
      </div>
    </header>
  );
}