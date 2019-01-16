import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ItemWrapper = styled(Link)`
  float: none;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  background-color: white;
  width: 100%;

  ${({ theme }) => css`
    &:hover {
      background-color: ${theme.colors.primary};
      text-decoration: none;
    }
  `}
`;

const Item = props => <ItemWrapper {...props} />;
Item.displayName = 'NavbarDropdownItem';

export default Item;
