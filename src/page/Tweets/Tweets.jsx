import { useEffect, useState } from 'react';

import { fetchUsers } from 'api/api';

import UserCard from 'components/UserCard/UserCard';
import { Button, UsersContainer, StyledLink } from './TweetsStyled';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newUsers = await fetchUsers(page);
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <>
      <StyledLink to="/">BACK</StyledLink>
      <UsersContainer>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </UsersContainer>
      <Button onClick={() => setPage(prevPage => prevPage + 1)}>
        LOAD MORE
      </Button>
      <StyledLink to="/">BACK</StyledLink>
    </>
  );
};

export default Tweets;
