import { CustomFieldProps } from '@/types/components';
import React from 'react';
import CustomInput from './custom-input';
import FieldError from './field-error';
import { InputLabel } from './input-label';

const TextField = ({
  label,
  error,
  messageType,
  preAppend,
  extraBottom,
  postAppend,
  extra,
  labelStyles,
  isRequired,
  isLoading,
  ...inputProps
}: CustomFieldProps) => {
    
  const getMessageColor = (type: string) => {
    switch (type) {
      case 'error':
        return 'text-red-debit';
      case 'success':
        return 'text-green-credit';
      default:
        return 'text-gray-35';
    }
  };

  const getMessageIcon = (type: string) => {
    switch (type) {
      case 'error':
        return <div></div>; // <Warn className='h-4 w-4' />
      case 'success':
        return <div></div>; // <Check className='h-4 w-4' />
      case 'info':
        return <div></div>; // <Info className='h-4 w-4' />
      default:
        return null;
    }
  };
  return (
    <div className='text-sm' data-testid='custom-textfield'>
      <div className='mb-2 flex w-full items-center justify-between'>
        <InputLabel
          htmlFor={inputProps.id}
          className={labelStyles}
          label={label}
          shouldBold={true}
          error={error}
          hasRequiredStar={isRequired}
        />
        <div className=''>{extra}</div>
      </div>
      <CustomInput
        {...inputProps}
        
        error={messageType?.type === 'error' || error}
        preAppend={preAppend}
        postAppend={postAppend}
        isLoading={isLoading}
      />

      {!isLoading && (messageType || error) && (
        <div className={`flex items-center mt-[0.5rem] ${getMessageColor(messageType?.type ?? 'default')}`}>
          {(error ?? messageType?.type === 'error')
            ? getMessageIcon('error')
            : getMessageIcon(messageType?.type ?? 'default')}
          <span className='ml-1 text-xs'>
            {messageType?.type === 'error' || error ? (
              <FieldError error={error} message={messageType?.message} extra={extra} />
            ) : (
              messageType?.message
            )}
          </span>
        </div>
      )}

      {!error && <div className='text-gray-35 text-xs'>{extraBottom}</div>}
    </div>
  );
};

export default TextField;
