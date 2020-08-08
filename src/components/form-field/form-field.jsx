import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 72px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .2s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ hasValues }) => hasValues && css`
    &:not([type="color"]) + span {
      transform: scale(0.6) translateY(-10px);
    }
  `}
`;

function FormField({
  name, label, type, value, onChange, options,
}) {
  const fieldId = `id_${name}`;
  const tag = type === 'textarea' ? 'textarea' : 'input';
  const inputHasValues = Boolean(value.length);
  const hasOptions = options.length;

  return (
    <Wrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={tag}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          hasValues={inputHasValues}
          list={`category_${fieldId}`}
          autoComplete="off"
        />
        <Label.Text>{label}</Label.Text>
        { hasOptions && (
          <datalist id={`category_${fieldId}`}>
            {
              options.map((option) => <option key={option.id} value={option.id}>{option.title}</option>)
            }
          </datalist>
        )}
      </Label>
    </Wrapper>
  );
}

FormField.defaultProps = {
  options: [],
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default FormField;
