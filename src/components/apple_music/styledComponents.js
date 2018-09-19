import styled from 'styled-components';

export const LogoImg = styled.img`
  height: 70px;
`;

export const ItemDiv = styled.div`
  height: 300px;
  margin: 20px;
  :hover {
    -webkit-filter: brightness(30%);
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
  }
`;

export const ArtworkImage = styled.img`
    max-height: 300px;
`;
