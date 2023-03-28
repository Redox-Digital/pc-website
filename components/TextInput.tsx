import css from '@/styles/components/ContactForm.module.scss';

type Props = {
  type: string;
  id: string;
  regex?: string;
  required?: boolean;
  children: string;
};

export default function TextInput({ type, id, regex, required, children }: Props) {
  if (type === 'textarea') {
    return (
      <label htmlFor={id} className={css.input}>
        <textarea id={id} name={id} required={required} placeholder={children} />
        <span>{children}</span>
      </label>
    );
  } else {
    return (
      <label htmlFor={id} className={css.input}>
        <input type={type} id={id} name={id} required={required} placeholder={children} />
        <span>{children}</span>
      </label>
    );
  }
}
