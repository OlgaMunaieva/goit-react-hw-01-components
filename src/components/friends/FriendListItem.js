import PropTypes from 'prop-types';
import {
  FriendListItemLi,
  FriendIsOnline,
  FriendIsNotOnline,
  FriendName,
} from './Friends.styled';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItemLi key={id}>
          {isOnline ? (
            <FriendIsOnline></FriendIsOnline>
          ) : (
            <FriendIsNotOnline></FriendIsNotOnline>
          )}
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <FriendName>{name}</FriendName>
        </FriendListItemLi>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
