import { useEffect, useState } from 'react';

import { fetchUsers } from 'api/api';

import UserCard from 'components/UserCard/UserCard';
import Loader from 'components/Loader/Loader';
import { Button, UsersContainer, StyledLink } from './TweetsStyled';

const Tweets = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const newUsers = await fetchUsers(page);
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default Tweets;
