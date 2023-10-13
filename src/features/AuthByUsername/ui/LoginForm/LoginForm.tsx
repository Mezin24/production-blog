import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <form className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        // value={username}
        // onChange={changeUsername}
        autoFocus
        type='text'
        className={cls.input}
        placeholder={t('Введите username')}
      />
      <Input
        // value={password}
        // onChange={changePassword}
        type='text'
        className={cls.input}
        placeholder={t('Введите password')}
      />
      <Button className={cls.submitBtn}>{t('Войти')}</Button>
    </form>
  );
};
