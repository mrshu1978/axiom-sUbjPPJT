import { Button } from '../atoms/Button';

type AppHeaderProps = {
  title: string;
  onSignOut?: () => void;
};

export function AppHeader({ title, onSignOut }: AppHeaderProps) {
  return (
    <header>
      <h1>{title}</h1>
      {onSignOut && <Button onClick={onSignOut}>Sign out</Button>}
    </header>
  );
}