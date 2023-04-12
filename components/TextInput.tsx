import css from '@/styles/components/ContactForm.module.scss';

type Props = {
  type: string;
  id: string;
  regex?: string;
  errorMsg?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  children: string;
};

export default function TextInput({
  type,
  id,
  regex,
  required,
  errorMsg,
  placeholder,
  min,
  max,
  children,
}: Props) {
  if (type === 'textarea') {
    return (
      <label htmlFor={id} className={css.input}>
        <textarea id={id} name={id} required={required} placeholder={placeholder || children} />
        <span>{children}</span>
      </label>
    );
  } else {
    return (
      <label htmlFor={id} className={css.input}>
        <input
          type={type}
          id={id}
          name={id}
          required={required}
          placeholder={placeholder || children}
          pattern={regex}
          title={errorMsg}
          minLength={min}
          maxLength={max}
        />
        <span>{children}</span>
      </label>
    );
  }
}
