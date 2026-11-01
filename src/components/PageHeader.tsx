import type { ReactNode } from 'react';
import Ornament from './Ornament';

interface Props {
  kicker: string;
  title: string;
  children?: ReactNode;
}

export default function PageHeader({ kicker, title, children }: Props) {
  return (
    <header className="page-header">
      <p className="kicker">{kicker}</p>
      <h1 className="page-title">{title}</h1>
      <Ornament />
      {children && <div className="page-intro">{children}</div>}
    </header>
  );
}
