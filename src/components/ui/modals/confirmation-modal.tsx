import Button from '@/components/forms/custom-button';
import React from 'react';
import ModalWrapper from './modal-wrapper';

interface ConfirmationModalProps {
  open: boolean;
  handleClose: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  confirmButtonClassName?: string;
  cancelButtonClassName?: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  handleClose,
  title = 'Are you sure?',
  message = 'This action cannot be undone. Do you wish to proceed?',
  confirmText = 'Yes, Confirm',
  cancelText = 'Cancel',
  loading = false,
  confirmButtonClassName = 'text-button-primary-label-all',
  cancelButtonClassName = 'text-text-primary bg-white dark:bg-transparent',
  onConfirm,
  onCancel,
}) => {
  const baseButtonClasses = '!h-fit max-w-[10rem] min-w-fit px-8 !py-2 font-[600]';

  const renderCancelFunc = () => {
    if (onCancel) {
      return onCancel();
    } else {
      return handleClose();
    }
  } 
  return (
    <ModalWrapper open={open} handleClose={handleClose} title={title}>
      <div className='flex flex-col gap-6'>
        <p className='text-text-secondary px-4 py-6 text-[0.9rem] font-[400]'>{message}</p>

        <div className='dark:bg-surface-primary flex justify-end gap-3 border-t border-neutral-300 bg-neutral-200 p-4 dark:border-[#33353A]'>
          <Button
            text={cancelText}
            onClick={renderCancelFunc}
            className={`${baseButtonClasses} ${cancelButtonClassName}`}
            disabled={loading}
          />
          <Button
            text={confirmText}
            onClick={onConfirm}
            isLoading={loading}
            className={`${baseButtonClasses} ${confirmButtonClassName}`}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ConfirmationModal;
