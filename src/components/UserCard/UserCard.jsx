// import React, { useState } from 'react';
import {
  CardContainer,
  Logo,
  BackgroundImage,
  Divider,
  AvatarContainer,
  AvatarImage,
  UserInfo,
  UserCounts,
} from './UserCarStyled';

import logo from '../../images/Logo.png';
import backgroundImage from '../../images/background_image.png';
import avatar from '../../images/Boy.png';

const UserCard = () => {
  const user = {
    avatar: 'path-to-sample-avatar.jpg',
    tweets: 777,
    followers: 100500,
  };
  return (
    <CardContainer>
      <Logo src={logo} alt="Logo" />
      <BackgroundImage src={backgroundImage} alt="Background" />
      <Divider />
      <AvatarContainer>
        <AvatarImage src={avatar} alt="User Avatar" />
      </AvatarContainer>
      <UserInfo>
        <UserCounts>{user.tweets} TWEETS</UserCounts>
        <UserCounts>
          {new Intl.NumberFormat('en-US').format(user.followers)} FOLLOWERS
        </UserCounts>
        <button>Follow</button>
      </UserInfo>
    </CardContainer>
  );
};

export default UserCard;
