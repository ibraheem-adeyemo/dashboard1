import { CustomInputProps } from '@/types/components';
import { ChangeEvent } from 'react';
import Spinner from './custom-spinner';

const CustomInput = ({
  postAppend,
  preAppend,
  inputType = 'string',
  isLoading,
  value,
  error = false,
  className = '',
  borderStyling = '',
  fieldHasBorder = false,
  ...inputProps
}: CustomInputProps) => {
    
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isValidNumber = !Number.isNaN(Number(event?.target.value));

    const isValidCurrencyValue = !Number.isNaN(Number(event.target.value.replaceAll(',', '')));

    if (inputType == 'number' && !isValidNumber) {
      return;
    } else if (inputType == 'currency' && isValidCurrencyValue && inputProps?.onChange) {
      const newValue = Number(event.target.value.replaceAll(',', ''));
      const syntheticEvent = {
        ...event,
        target: {
          ...event.target,
          value: newValue.toString(),
        },
      };
      return inputProps.onChange(syntheticEvent);
    } else if (inputType == 'currency' && !isValidCurrencyValue) {
      return;
    }

    return inputProps?.onChange ? inputProps?.onChange(event) : undefined;
  };

  const getValue = (): typeof value => {
    if (inputType == 'currency') {
      return value ? Number(value).toLocaleString() : '';
    }

    return value;
  };

  const getType = (): typeof inputProps.type => {
    if (inputProps.type == 'number' || inputType == 'number' || inputType == 'currency') {
      return 'tel';
    }

    return inputProps.type;
  };

  return (
    <div
      data-testid='custom-input'
      className={`bg-input-fill-enabled relative flex w-full items-center rounded border px-3 py-3 placeholder:text-neutral-600 disabled:bg-black ${error ? 'border-primary-red-400 text-primary-red-400 outline-primary-red-400' : `text-text-primary ${fieldHasBorder ? borderStyling :  'border-none outline-none' }`} ${inputProps.disabled && 'cursor-not-allowed text-neutral-600'} ${preAppend ? 'pl-2' : 'pl-3'} ${className} border-[var(--neutral-border)]`}
    >
      {preAppend && (
        <div className='text-12 lg:text-16 flex min-w-max shrink-0 items-center px-2'>
          {preAppend}
        </div>
      )}
      <input
        {...inputProps}
        id={inputProps.id}
        data-testid={`${inputProps.id}`}
        name={inputProps.name}
        onChange={handleOnChange}
        type={getType() ?? 'text'}
        value={getValue()}
        className={
          'h-full w-full bg-transparent outline-none hover:bg-transparent focus:ring-0 active:bg-transparent'
        }
      />
      <div className={`text-12 lg:text-14 absolute right-0 mr-4`}>
        {isLoading ? <Spinner size='small' /> : postAppend}
      </div>

      {postAppend && <div className='text-12 lg:text-14 absolute right-0 mr-4'>{postAppend}</div>}
    </div>
  );
};
export default CustomInput;
