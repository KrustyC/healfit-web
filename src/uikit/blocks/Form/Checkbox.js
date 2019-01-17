import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Row = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: ${({ theme }) => theme.margin.sm};
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
  margin-top: -10px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  ${({ theme: { colors, util }, checked }) => css`
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    transition: all 150ms;

    background: ${checked ? colors.primary : colors.white};
    border: 2px solid ${colors.primary};

    ${HiddenCheckbox}:hover + & {
      box-shadow: 0 0 0 3px ${util.lighten(colors.primary)};
    }

    ${Icon} {
      visibility: ${checked ? 'visible' : 'hidden'};
    }
  `}
`;

const Checkbox = ({ checked, children, ...rest }) => (
  <Row>
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} {...rest} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 2 23 26">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
    <span>{children}</span>
  </Row>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};

export default Checkbox;
