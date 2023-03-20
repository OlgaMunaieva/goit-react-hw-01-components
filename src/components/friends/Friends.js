import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListUl, FriendListItemLi } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItemLi key={id}>
          <FriendListItem friend={{ isOnline, avatar, name }} />
        </FriendListItemLi>
      ))}
    </FriendListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
