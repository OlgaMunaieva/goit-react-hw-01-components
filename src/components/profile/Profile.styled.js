import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 20px auto;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d9caca;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px -6px,
    rgb(0 0 0 / 14%) 0px 9px 12px 0px, rgb(0 0 0 / 12%) 0px 3px 24px 0px;
  border-radius: 10px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ProfileAvatar = styled.img`
  margin-top: 10px;
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

export const ProfileName = styled.p`
  font-size: 32px;
  color: blue;
`;

export const ProfileStats = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  padding: 20px 0;
  background-color: rgb(189, 217, 78);
`;

export const ProfileStat = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ProfileQuantity = styled.span`
  font-weight: bold;
  color: blue;
`;
