import { ChangeEvent } from 'react';
import { CustomInputProps, CustomTextAreaProps } from '../../types/components';
import FieldError from './field-error';
import { InputLabel } from './input-label';

const CustomTextArea = ({
    isLoading,
    value,
    error,
    labelStyles,
    label,
    isRequired,
    maxLength,
    messageType,
    className,
    borderStyling = '',
    fieldHasBorder = false,
    ...inputProps
  }: CustomTextAreaProps) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      return inputProps?.onChange ? inputProps?.onChange(event) : undefined;
    };

    const charCount = typeof value === 'string' ? value.length : 0;

  
    return (
    <div className='text-sm' data-testid=''>
        <div className='mb-2 flex w-full items-center justify-between'>
            <InputLabel
                htmlFor={inputProps.id}
                className={labelStyles}
                label={label as string}
                shouldBold={true}
                error={error as string}
                hasRequiredStar={isRequired}
            />
        
            {/* <div className="mt-1 text-right text-sm text-neutral-500">
                {charCount}/{maxLength}
            </div> */}
                
        </div> {/*${fieldHasBorder ? borderStyling :  'border-none outline-none'*/}
      <div
        data-testid='custom-textarea'
        className={`bg-input-fill-enabled relative flex w-full items-center rounded border px-3 py-3 placeholder:text-neutral-600 disabled:bg-black ${error ? 'border-primary-red-400 text-primary-red-400 outline-primary-red-400' : `text-text-primary ${fieldHasBorder ? borderStyling :  'border-none outline-none'}` } ${inputProps.disabled && 'cursor-not-allowed text-neutral-600'} pl-3 ${inputProps.className} border-gray-300 dark:border-gray-700`}
      >
        <textarea
          {...inputProps}
          id={inputProps.id}
          data-testid={inputProps.id}
          name={inputProps.name}
          onChange={handleOnChange}
          value={value}
          rows={inputProps.rows ?? 4}
          className={`w-full bg-transparent outline-none hover:bg-transparent focus:ring-0 active:bg-transparent ${className}`}
        />
      </div>

      {!isLoading && (messageType || error) && (
        <div className={`flex items-center mt-[0.5rem]`}>
          <span className='ml-1 text-xs'>
            {messageType?.type === 'error' || error ? (
              <FieldError error={error} message={messageType?.message} extra={'extra'} />
            ) : (
              messageType?.message
            )}
          </span>
        </div>
      )}
    </div>
    );
  };
  
  export default CustomTextArea;
  