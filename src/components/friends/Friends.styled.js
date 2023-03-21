import styled from 'styled-components';

export const FriendListUl = styled.ul`
  margin: 30px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
  /* width: 20%; */
`;

export const FriendListItemLi = styled.li`
  display: flex;
  gap: 16px;
  min-width: 20%;
  border-radius: 20px;
  background-color: #d9caca;
  padding: 10px;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
  /* border-radius: 10px; */
  color: blue;
`;

export const FriendIsOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const FriendAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

export const FriendName = styled.p`
  font-size: 32px;
`;
