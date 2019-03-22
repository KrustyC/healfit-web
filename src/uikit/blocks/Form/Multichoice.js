import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ChoiceInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const ChoiceLabel = styled.label``;

const Multichoice = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;

    ${ChoiceInput} + ${ChoiceLabel} {
      margin: 0;
      height: 45px;
      min-width: 100px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      border: solid 2px ${theme.colors.border};
      border-right: none;
      border-left: none;
      background-color: ${theme.colors.white};
      color: ${theme.colors.font};
      font-size: ${theme.fontSize.small};
      font-weight: 600;
      transition: border-color .15s ease-out,
                  color .25s ease-out,
                  background-color .15s ease-out,
                  box-shadow .15s ease-out;


      &:first-of-type {
        border-radius: 2px 0 0 2px;
        border-left: solid 2px ${theme.colors.border};
      }

      &:last-of-type {
        border-radius: 0 2px 2px 0;
        border-right: solid 2px ${theme.colors.border};
      }
    }

    ${ChoiceInput}:checked + ${ChoiceLabel} {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      box-shadow: ${theme.util.darkenOnHover(theme.colors.primary)};
      border-color: ${theme.util.darkenOnHover(theme.colors.primary)};
      z-index: 1;
    }

    ${ChoiceInput}:hover + ${ChoiceLabel} {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-color: ${theme.util.darkenOnHover(theme.colors.primary)};
    }
  `}
`;

const Choice = ({ id, label, ...rest }) => (
  <>
    <ChoiceInput id={id} type="radio" {...rest} />
    <ChoiceLabel htmlFor={id}>{label}</ChoiceLabel>
  </>
);

Choice.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
};

Multichoice.Choice = Choice;

export default Multichoice;
