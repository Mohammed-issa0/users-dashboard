import { useState } from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { getUsers } from '../api/userApi';
import UserCard from '../components/UserCard';
import LoadingSpinner from '../components/LoadingSpinner';

function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery(['users', page], () => getUsers(page), {
    keepPreviousData: true,
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center">Error: {error.message}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="flex justify-center mt-8 gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        >
          Previous
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPage(p => p + 1)}
          disabled={!data.total_pages || page === data.total_pages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        >
          Next
        </motion.button>
      </div>
    </div>
  );
}

export default UserList;