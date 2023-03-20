import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 20px auto;
  min-width: 320px;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
  
  @media screen and (min-width: 768px) {
    min-width: 600px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 900px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;


`;

export const TransactionTableHead = styled.thead`
  background-color: rgb(189, 217, 78);
`;

export const TransactionTableBody = styled.thead`
  text-align: center;
`;

/* export const Table = styled.table`
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`; */
