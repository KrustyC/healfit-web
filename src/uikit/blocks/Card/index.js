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
    border-radius: 5px;
    width: ${width || 'auto'};

    &:hover {
      top: -2px;
      box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
    }
  `}
`;

const Main = styled.div`
  ${({ theme }) => css`
    padding: ${theme.padding.sm};
  `}
`;

const Thumb = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.regular};
    white-space: nowrap;
    width: ${`calc(100% - (2 * ${theme.padding.sm}))`};
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
  `}
`;

const Description = styled.div`
  ${({ theme }) => css`
    line-height: 1.4;
    margin-top: ${theme.margin.xs};
    max-height: 100px;
    font-size: ${theme.fontSize.small};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  `}
`;

const Footer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.padding.sm};
    font-size: ${theme.fontSize.small};
    font-weight: bold;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
  `}
`;

Card.Thumb = Thumb;
Card.Main = Main;
Card.Title = Title;
Card.Description = Description;
Card.Footer = Footer;

export default Card;
