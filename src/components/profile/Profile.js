import PropTypes from 'prop-types';
// import clsx from 'clsx';
import {
  ProfileCard,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileStats,
  ProfileStat,
  ProfileQuantity,
} from './Profile.styled.js';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => (
  <ProfileCard>
    <ProfileDescription>
      <ProfileAvatar src={avatar} alt="User avatar" />
      <ProfileName>{username}</ProfileName>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </ProfileDescription>

    <ProfileStats>
      <ProfileStat>
        <span className="label">Followers</span>
        <ProfileQuantity>{followers}</ProfileQuantity>
      </ProfileStat>
      <ProfileStat>
        <span className="label">Views</span>
        <ProfileQuantity>{views}</ProfileQuantity>
      </ProfileStat>
      <ProfileStat>
        <span className="label">Likes</span>
        <ProfileQuantity>{likes}</ProfileQuantity>
      </ProfileStat>
    </ProfileStats>
  </ProfileCard>
);

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
