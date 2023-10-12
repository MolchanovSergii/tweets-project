import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchUsers } from 'api/api';

import UserCard from 'components/UserCard/UserCard';
import { Button, UsersContainer } from './TweetsStyled';

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
      <Link to="/">Back</Link>
      <UsersContainer>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </UsersContainer>
      <Button onClick={() => setPage(prevPage => prevPage + 1)}>
        LOAD MORE
      </Button>
      <Link to="/">Back</Link>
    </>
  );
};

export default Tweets;
