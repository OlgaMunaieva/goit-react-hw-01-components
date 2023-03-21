import PropTypes from 'prop-types';
import { FriendIsOnline, FriendName } from './Friends.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <>
      <FriendIsOnline isOnline={isOnline}></FriendIsOnline>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
