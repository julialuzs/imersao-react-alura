import React from 'react';

export function FormField({ name, label, type, value, onChange }) {
  
  return (
    <div>
      <label>{label}
      {
        type === 'textarea' ?
        (
          <textarea name={name} value={value} onChange={onChange}/>
        ) :
        (
          <input type={type} name={name} value={value} onChange={onChange}/>
        )
      }
      </label>
    </div>
  );
}
