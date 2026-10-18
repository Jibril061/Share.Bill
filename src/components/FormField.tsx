import React, { forwardRef, useId } from 'react'

export interface FormFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string
  label: string
  helperText?: string
  error?: string
  containerClassName?: string
  labelSuffix?: React.ReactNode
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      id: customId,
      label,
      helperText,
      error,
      required,
      disabled,
      className = '',
      containerClassName = '',
      labelSuffix,
      ...inputProps
    },
    ref,
  ) => {
    const generatedId = useId()
    const id = customId || generatedId
    const helperId = helperText ? `${id}-helper` : undefined
    const errorId = error ? `${id}-error` : undefined

    const describedBy =
      [helperId, errorId].filter(Boolean).join(' ') || undefined

    return (
      <div
        className={`form-field ${error ? 'has-error' : ''} ${disabled ? 'is-disabled' : ''} ${containerClassName}`.trim()}
      >
        <label htmlFor={id} className="form-label">
          <span>{label}</span>
          {required && (
            <span className="form-required" aria-hidden="true">
              *
            </span>
          )}
          {labelSuffix && (
            <span className="form-label-suffix">{labelSuffix}</span>
          )}
        </label>

        <input
          ref={ref}
          id={id}
          className={`form-input ${className}`.trim()}
          disabled={disabled}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...inputProps}
        />

        {error && (
          <p id={errorId} className="form-error" role="alert">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={helperId} className="form-helper">
            {helperText}
          </p>
        )}
      </div>
    )
  },
)

FormField.displayName = 'FormField'

export default FormField
