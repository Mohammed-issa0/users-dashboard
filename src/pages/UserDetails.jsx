import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';
import { getUserById } from '../api/userApi';
import LoadingSpinner from '../components/LoadingSpinner';

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery(['user', id], () => getUserById(id));

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center">Error: {error.message}</div>;

  const user = data.data;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(-1)}
        className="mb-8 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Back
      </motion.button>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="w-48 h-48 rounded-full mb-6"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {user.first_name} {user.last_name}
          </h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default UserDetails;