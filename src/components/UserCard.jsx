import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
      onClick={() => navigate(`/user/${user.id}`)}
    >
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center text-gray-800">
        {user.first_name} {user.last_name}
      </h2>
      <p className="text-gray-600 text-center mt-2">ID: {user.id}</p>
      
    </motion.div>
  );
}

export default UserCard;