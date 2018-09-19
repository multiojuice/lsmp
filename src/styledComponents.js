import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin-top: 20px;
`;

export const TitleText = styled.div`
  margin-top: 20px;
  text-align: center;
  color: #448899;
  font-size: 14vh;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
`;

export const SearchContent = styled.div`
  margin: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
`;

export const ButtonBar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonSection = styled.div`

`;

export const Button = styled.button`
  font-weight: bold;
  border: 0;
  height: 40px;
  background-color: #448899;
  border-radius: 5px;
  color: white;
  margin: 0 10px;
  min-width: 60px;
  padding: 0 10px;
`;
