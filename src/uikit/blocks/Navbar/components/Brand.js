import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ theme }) => css`
    @media (min-width: ${theme.sizes.md}) {
      margin-left: 20px;
    }

    svg {
      margin-right: 40px;
      width: 50px;
      height: 50px;
    }
  `}
`;

Brand.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

Brand.displayName = 'NavbarBrand';

export default Brand;
