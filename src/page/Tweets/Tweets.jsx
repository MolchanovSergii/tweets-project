import { useEffect, useState } from 'react';

import { fetchUsers } from 'api/api';

import UserCard from 'components/UserCard/UserCard';

const Tweets = () => {
  const initialPage = Number(localStorage.getItem('currentPage')) || 1;
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newUsers = await fetchUsers(page);
        setUsers(prevUsers => [...prevUsers, ...newUsers]);
        localStorage.setItem('currentPage', String(page));
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
      <button onClick={() => setPage(prevPage => prevPage + 1)}>
        Load More
      </button>
    </div>
  );
};
export default Tweets;
