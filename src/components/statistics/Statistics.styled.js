import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: 20px auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d9caca;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
  border-radius: 20px;
`;

export const StatisticsTitle = styled.h2`
  display: flex;
  justify-content: center;
  background-color: rgb(189, 217, 78);
`;

export const StatisticsStartList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
`;

export const StatisticsStartItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100%);
  align-items: center;
  color: white;
`;
