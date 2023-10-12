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

const UserCard = ({ user }) => {
  const initialIsFollowing = () => {
    const savedStatus = localStorage.getItem(`isFollowing_${user.id}`);
    return savedStatus ? JSON.parse(savedStatus) : false;
  };

  const initialFollowersCount = () => {
    const savedCount = localStorage.getItem(`followersCount_${user.id}`);
    return savedCount ? parseInt(savedCount, 10) : user.followers;
  };

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [followersCount, setFollowersCount] = useState(initialFollowersCount);

  useEffect(() => {
    const savedFollowingStatus = localStorage.getItem(`isFollowing_${user.id}`);
    const savedFollowersCount = localStorage.getItem(
      `followersCount_${user.id}`
    );

    if (savedFollowingStatus) {
      setIsFollowing(JSON.parse(savedFollowingStatus));
    }

    if (savedFollowersCount) {
      setFollowersCount(parseInt(savedFollowersCount, 10));
    }
  }, [user.id]);

  useEffect(() => {
    localStorage.setItem(`isFollowing_${user.id}`, JSON.stringify(isFollowing));
    localStorage.setItem(
      `followersCount_${user.id}`,
      followersCount.toString()
    );
  }, [isFollowing, followersCount, user.id]);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
  };

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
          style={{
            backgroundColor: !isFollowing
              ? ' rgba(235, 216, 255, 1)'
              : ' rgba(92, 211, 168, 1)',
          }}
        >
          {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
        </Button>
      </UserInfo>
    </CardContainer>
  );
};

export default UserCard;
