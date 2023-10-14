import React, { useEffect, useState } from 'react';
import {
  CardContainer,
  Logo,
  BackgroundImage,
  Divider,
  AvatarContainer,
  AvatarImage,
  UserInfo,
  UserCounts,
  Button,
} from './UserCarStyled';

import logo from '../../images/Logo.png';
import backgroundImage from '../../images/background_image.png';

import {
  getFromLocalStorage,
  setToLocalStorage,
} from 'components/helpers/helpers';

const UserCard = ({ user, userStatus, setUsers }) => {
  const [isFollowing, setIsFollowing] = useState(
    getFromLocalStorage(`isFollowing_${user.id}`, false)
  );
  const [followersCount, setFollowersCount] = useState(
    getFromLocalStorage(`followersCount_${user.id}`, user.followers)
  );

  useEffect(() => {
    setToLocalStorage(`isFollowing_${user.id}`, isFollowing);
    setToLocalStorage(`followersCount_${user.id}`, followersCount);
  }, [isFollowing, followersCount, user.id]);

  const handleFollowClick = () => {
    setIsFollowing(prev => !prev);
    setFollowersCount(prev => (isFollowing ? prev - 1 : prev + 1));

    const updatedUsers = userStatus.map(u => {
      if (u.id === user.id) {
        return { ...u, isFollowing: !isFollowing };
      }
      return u;
    });
    setUsers(updatedUsers);
  };

  const buttonColor = isFollowing
    ? 'rgba(92, 211, 168, 1)'
    : 'rgba(235, 216, 255, 1)';

  return (
    <CardContainer>
      <Logo src={logo} alt="Logo" />
      <BackgroundImage src={backgroundImage} alt="Background" />
      <Divider />
      <AvatarContainer>
        <AvatarImage src={user.avatar} alt="User Avatar" />
      </AvatarContainer>
      <UserInfo>
        <UserCounts>{user.tweets} TWEETS</UserCounts>
        <UserCounts>
          {new Intl.NumberFormat('en-US').format(followersCount)} FOLLOWERS
        </UserCounts>
        <Button
          onClick={handleFollowClick}
          style={{ backgroundColor: buttonColor }}
        >
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </Button>
      </UserInfo>
    </CardContainer>
  );
};

export default UserCard;
