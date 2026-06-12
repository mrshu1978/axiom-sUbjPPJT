import { Button } from '../atoms/Button';

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
};

export function FormField({ label, value, onChange, onSubmit }: FormFieldProps) {
  return (
    <label>
      <span>{label}</span>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
      {onSubmit && <Button onClick={onSubmit}>OK</Button>}
    </label>
  );
}