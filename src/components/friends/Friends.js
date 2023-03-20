import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendListUl } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      <FriendListItem friends={friends} />
    </FriendListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
