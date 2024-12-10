import { BottonNav } from '@/components/BottonNav';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <BottonNav />
      {children}
    </div>
  );
}
