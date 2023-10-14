import { useEffect, useState } from 'react';
import Select from 'react-select';

import { fetchUsers } from 'api/api';

import { filtredUsersByStatus } from 'utils/filtredUsersByStatus';

import UserCard from 'components/UserCard/UserCard';
import Loader from 'components/Loader/Loader';

import { Button, UsersContainer, StyledLink } from './TweetsStyled';
import { selectStyles } from './SelectStyled';

const Tweets = () => {
  const filterOptions = [
    { value: 'all', label: 'SHOW ALL' },
    { value: 'follow', label: 'FOLLOW' },
    { value: 'following', label: 'FOLLOWING' },
  ];

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');
  const [userStatus, setUserStatus] = useState([]);
  const [selectedOption, setSelectedOption] = useState(filterOptions[0]);

  const handleFilterChange = option => {
    setSelectedOption(option);
    setFilter(option.value);
  };

  const loadMoreUsers = () => {
    const cardHeight = 460;
    const cardsToAdd = 6;

    setPage(prevPage => prevPage + 1);

    setTimeout(() => {
      window.scrollBy(0, cardHeight * cardsToAdd);
    }, 500);
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
          <Select
            value={selectedOption}
            onChange={handleFilterChange}
            options={filterOptions}
            styles={selectStyles}
          ></Select>
          <UsersContainer>
            {filteredUsers.map(user => (
              <UserCard
                key={user.id}
                user={user}
                userStatus={userStatus}
                setUsers={setUsers}
              />
            ))}
          </UsersContainer>
          <Button onClick={loadMoreUsers}>LOAD MORE</Button>
          <StyledLink to="/">BACK</StyledLink>
        </>
      )}
    </>
  );
};

export default Tweets;
