import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_TIME = 300;

export const Modal = (props: ModalProps) => {
  const { children, className, isOpen, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  const handleClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, ANIMATION_TIME);
    }
  }, [onClose]);

  const keyClose = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyClose);
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', keyClose);
    };
  }, [keyClose]);

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
