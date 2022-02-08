import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';

import { Container, Label, InputField } from './styles';

export default function Input({ name, type, label, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Label htmlFor={fieldName}>{label}</Label>
      {type === 'password' ? (
        <>
          <InputField
            ref={inputRef}
            type="password"
            defaultValue={defaultValue}
            {...rest}
          />
        </>
      ) : (
        <>
          <InputField ref={inputRef} defaultValue={defaultValue} {...rest} />
        </>
      )}
    </Container>
  );
}
