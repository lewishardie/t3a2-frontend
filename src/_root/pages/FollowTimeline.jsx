import { useAuth } from '../../context/AuthContext';
import { Loader } from '../../components/shared';
import { useFriendPosts } from '../../components/hooks/useFriendPosts';
import { PostCard } from '../../components/shared';
import { useQuery } from '../../context/QueryContext';

export default function Home() {
  const { isAuthenticated } = useAuth();
  const { userPosts, isLoading, error, } = useFriendPosts();
  const { userData } = useQuery()

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="home-container">

    <div className="flex lg:w-2/3 min-w-[500px] w-full flex-col">
      <div className="bg-white">
        <nav className="flex flex-col sm:flex-row">
          <button className="py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
            Timeline
          </button>
          <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Community
          </button>
        </nav>
      </div>


        <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed, Hello {userData?.username}</h2>
        <div className="home-posts">
          <ul className="flex flex-col flex-1 gap-9 w-full">
            {userPosts.map((post, index) => (
              <li key={index} className="justify-center w-full">
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </div>

    </div>
  </div>
  );
}