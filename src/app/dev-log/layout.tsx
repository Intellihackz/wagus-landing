import { NavbarDemo } from '@/components/navbar';
import './markdown-styles.css';

export default function DevLogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dev-log-layout">
      <NavbarDemo />
      {children}
    </div>
  );
}
