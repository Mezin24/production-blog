import { FormEvent, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginForm } from '../../model/selectors/getLoginForm/getLoginForm';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const { username, password, isLoading, error } = useSelector(getLoginForm);
  const dispatch = useDispatch();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      dispatch(loginByUsername({ username, password }));
    },
    [dispatch, password, username]
  );

  return (
    <form
      className={classNames(cls.LoginForm, {}, [className])}
      onSubmit={onSubmit}
    >
      <Text title={t('Форма авторизации')} />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      <Input
        value={username}
        onChange={onChangeUsername}
        autoFocus
        type='text'
        className={cls.input}
        placeholder={t('Введите username')}
      />
      <Input
        value={password}
        onChange={onChangePassword}
        type='text'
        className={cls.input}
        placeholder={t('Введите password')}
      />
      <Button
        disabled={isLoading}
        className={cls.submitBtn}
        theme={ButtonTheme.OUTLINE}
        type='submit'
      >
        {t('Войти')}
      </Button>
    </form>
  );
});
