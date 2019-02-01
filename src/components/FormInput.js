import React from 'react';

export default function FormInput({
  type,
  name,
  placeholder,
  value,
  onChange,
  additional
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...additional}
    />
  );
}
