import { Modal, ModalProps } from '@mui/material';
import React from 'react';
import clsx from 'clsx';
import { Cross1Icon } from '@radix-ui/react-icons';

interface ModalWrapperProps extends Omit<ModalProps, 'children'> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxWidth?: number | string;
  fullWidth?: boolean;
  handleClose?: () => void;
  title?: string;
  width?: number | string;
}

const ModalWrapper = ({
  open,
  handleClose,
  children,
  className,
  containerClassName,
  maxWidth = 400,
  fullWidth = false,
  title,
  width = 'min-w-[38%]',
  ...rest
}: ModalWrapperProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
      {...rest}
    >
      <div
        className={clsx(
          '!font-averta absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform',
          'bg-surface-primary rounded-lg shadow-xl',
          'outline-none focus:outline-none',
          fullWidth ? 'w-[90%] max-w-[90%]' : '',
          width,
          containerClassName,
        )}
        style={{ maxWidth: fullWidth ? '90%' : maxWidth }}
      >
        {/* Header with Title and Close Button */}
        {title && (
          <div className='border-button-outline-stroke-active flex items-center justify-between border-b p-4'>
            <h2 className='text-text-primary text-lg font-semibold'>{title}</h2>
            {handleClose && (
              <button
                type='button'
                onClick={handleClose}
                className='text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              >
                <span className='sr-only'>Close</span>
                <Cross1Icon className='text-text-primary h-5 w-5 cursor-pointer' />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className={clsx('w-full', className)}>{children}</div>
      </div>
    </Modal>
  );
};

export default ModalWrapper;
