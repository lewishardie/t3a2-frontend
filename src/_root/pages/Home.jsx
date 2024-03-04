import { useAuth } from '../../context/AuthContext'
import { useQuery } from '../../context/QueryContext';
import { Loader } from '../../components/shared';


export default function Home() {
  
  const { isAuthenticated } = useAuth()
  const { userData, isLoading, error } = useQuery();

  if (!isAuthenticated) {
      return null;
  }

  if (isLoading) {
      return <Loader />; // Render loader while data is loading
  }

  if (error) {
      return <div>Error: {error.message}</div>; // Render error message if there's an error
  }

  return (
      <div className="flex flex-1">
        <div className="home-container">
          <div className="home-posts">
            <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed, Hello {userData?.username}</h2>
          </div>

        </div>

      </div>
  )
}

