import { AppHeader } from '../organisms/AppHeader';

type AppShellProps = {
  title: string;
  children: React.ReactNode;
};

export function AppShell({ title, children }: AppShellProps) {
  return (
    <div className="app-shell">
      <AppHeader title={title} />
      <main>{children}</main>
    </div>
  );
}