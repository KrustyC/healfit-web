import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const List = styled.ul`
  position: relative;
  padding-left: 45px;
  list-style: none;

  &::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0;
    left: 15px;
    width: 10px;
    height: 100%;
    border-left: 2px solid #ccc;
  }
`;

const Step = styled.li`
  ${({ theme }) => css`
    position: relative;
    counter-increment: list;

    &:not(:last-child) {
      padding-bottom: 20px;
      min-height: 150px;
    }

    &::before {
      display: flex;
      align-items: center;
      justify-content: center;
      content: '';
      position: absolute;
      left: -30px;
      height: 100%;
    }

    &::after {
      content: '';
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: -44px;
      width: 28px;
      height: 28px;
      border: 2px solid ${theme.colors.border};
      border-radius: 50%;
      background-color: ${theme.colors.white};
    }

    ${({ completed }) =>
      completed &&
      css`
        &::before {
          border-left: 2px solid
            ${theme.util.darkenOnHover(theme.colors.primary)};
        }
        &::after {
          content: '✔';
          font-size: ${theme.fontSize.regular};
          color: ${theme.colors.white};
          border: 2px solid ${theme.util.darkenOnHover(theme.colors.primary)};
          background-color: ${theme.colors.primary};
        }
      `}

    ${({ current }) =>
      current &&
      css`
        &::after {
          content: counter(list);
          font-size: ${theme.fontSize.regular};
          font-weight: bold;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.util.darkenOnHover(theme.colors.primary)};
          background-color: ${theme.colors.white};
        }
      `}
  `}
`;

const VerticalProgress = ({ currentStep, children }) => (
  <List>
    {React.Children.map(children, (child, index) =>
      React.cloneElement(child, {
        completed: index < currentStep,
        current: index === currentStep,
      })
    )}
  </List>
);

VerticalProgress.Step = Step;

VerticalProgress.propTypes = {
  currentStep: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired,
};

export default VerticalProgress;
