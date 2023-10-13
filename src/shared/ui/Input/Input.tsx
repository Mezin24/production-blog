import {
  ChangeEvent,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type selectedInputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends selectedInputAttributes {
  className?: string;
  value?: string;
  onChange?: (val: string) => void;
  lazy?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    autoFocus,
    placeholder,
    type = 'text',
    ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className={cls.InputWrapper}>
      {placeholder && <span>{placeholder}</span>}
      <input
        ref={inputRef}
        onChange={onChangeHandler}
        value={value}
        type={type}
        {...otherProps}
        className={classNames(cls.Input, {}, [className])}
      />
    </div>
  );
});
