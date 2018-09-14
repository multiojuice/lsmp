import styled from 'styled-components';

export const LogoImg = styled.img`
  height: 70px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const GithubMetrics = styled.div`
  padding-left: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

export const ItemDiv = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background-color: #88BBBB;
  border-radius: 5px;
  border: 4px white solid;
  :hover {
    background-color: white;
    border: 4px #88BBBB dashed;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    -ms-transition: all .5s ease;
    transition: all .5s ease;
  }
`;
