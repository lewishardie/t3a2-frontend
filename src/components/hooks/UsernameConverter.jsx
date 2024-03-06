import { useEffect, useState } from 'react';
import { useQuery } from '../../context/QueryContext';

const UsernameConverter = ({ id, children }) => {
  const { getUserById } = useQuery();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      const user = await getUserById(id);
      if (user) {
        setUsername(user.username);
      }
    };

    if (id) {
      fetchUsername();
    }
  }, [id, getUserById]);

  return <>{children(username)}</>;
};

export default UsernameConverter;