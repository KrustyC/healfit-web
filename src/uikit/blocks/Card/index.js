import styled, { css } from 'styled-components';

const Card = styled.div`
  ${({ theme, width }) => css`
    background: ${theme.colors.light};
    text-decoration: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    transition: all 0.1s ease-in;
    border-radius: 4px;
    width: ${width || 'auto'};
  `}
`;

const Main = styled.div`
  ${({ theme }) => css`
    padding: calc(${theme.padding.sm} * 1.5) ${theme.padding.md};
  `}
`;

const Thumb = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`;

const Title = styled.h3`
  white-space: wrap;
  margin: 0;
`;

const Description = styled.div`
  ${({ theme }) => css`
    line-height: 1.4;
    margin-top: ${theme.margin.xs};
    max-height: 100px;
    font-size: ${theme.fontSize.small};
    overflow: hidden;
    color: ${theme.colors.grey};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `}
`;

const Footer = styled.div`
  ${({ theme, bordered }) => css`
    padding: ${theme.padding.sm} ${theme.padding.md};
    font-weight: bold;
    display: flex;
    align-items: center;

    ${bordered &&
      css`
        border-top: 1px solid ${theme.colors.border};
      `}
  `}
`;

Card.Thumb = Thumb;
Card.Main = Main;
Card.Title = Title;
Card.Description = Description;
Card.Footer = Footer;

export default Card;
