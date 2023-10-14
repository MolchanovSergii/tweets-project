export const filtredUsersByStatus = (users, status) => {
  return users.filter(user => {
    if (status === 'all') return true;
    if (status === 'follow' && !user.isFollowing) return true;
    if (status === 'following' && user.isFollowing) return true;
    return false;
  });
};
