import { useEffect, useState } from 'react';

import { fetchUsers } from 'api/api';

import UserCard from 'components/UserCard/UserCard';
import Loader from 'components/Loader/Loader';
import { Button, UsersContainer, StyledLink, Select } from './TweetsStyled';
import { filtredUsersByStatus } from 'utils/filtredUsersByStatus';

const Tweets = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [userStatus, setUserStatus] = useState([]);

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

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

  useEffect(() => {
    const updateUsers = users.map(user => {
      const isFollowing =
        localStorage.getItem(`isFollowing_${user.id}`) === 'true';
      return { ...user, isFollowing };
    });

    setUserStatus(updateUsers);
  }, [users]);

  const filteredUsers = filtredUsersByStatus(userStatus, filter);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <StyledLink to="/">BACK</StyledLink>
          <Select onChange={handleFilterChange}>
            <option value="all">SHOW ALL</option>
            <option value="follow">FOLLOW</option>
            <option value="following">FOLLOWING</option>
          </Select>
          <UsersContainer>
            {filteredUsers.map(user => (
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
