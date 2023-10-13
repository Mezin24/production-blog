import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  lazy?: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose, lazy } = props;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', {}, [className])}
      lazy={lazy}
    >
      <LoginForm />
    </Modal>
  );
};
