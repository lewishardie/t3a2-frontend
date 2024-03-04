import { useAuth } from '../../context/AuthContext'
import { useQuery } from '../../context/QueryContext';
import { Loader, Timeline, CommunityTimeline } from '../../components/shared';
// import Timeline from '../../components/shared'
// import CommunityTimeline from '../../components/shared';
import { useState } from 'react';



export default function Home() {
  
  const { isAuthenticated } = useAuth()
  const { userData, isLoading, error } = useQuery();

  const [selectedTab, setSelectedTab ] = useState('timeline');

  const handleChange = (tab) =>{
    setSelectedTab(tab)
  }

  if (!isAuthenticated) {
      return null;
  }

  if (isLoading) {
      return <Loader />; // Render loader while data is loading
  }

  if (error) {
      return <div>Error: {error.message}</div>; // Render error message if there's an error
  }

  let tabContent;
  if (selectedTab === 'timeline') {
    tabContent = <Timeline />;
  } else if (selectedTab === 'community') {
    tabContent = <CommunityTimeline />;
  }

  return (
    <div className="flex lg:w-2/3 min-w-[500px] w-full flex-col">

      {/* nav items */}
      <div> 
        <ul className="flex border-b">
          <li className="mb-px mr-1">
            <button 
            className={`big-white inline-block py-2 px-4 text-slate-500 hover:bg-pink-200 rounded-full font-semibold ${
              selectedTab === 'timeline' ? 'bg-pink-200' : ''
            }`}
            onClick={() => handleChange('timeline')}
            >
              Timeline
            </button>
            
          </li>
          <li className="mb-px mr-1">
          <button 
            className={`big-white inline-block py-2 px-4 text-slate-500 hover:bg-pink-200 rounded-full font-semibold ${
              selectedTab === 'community' ? 'bg-pink-200' : ''
            }`}
            onClick={() => handleChange('community')}
          >
            Community</button>
          </li>
        </ul>
      </div>
      <div>
      </div>
      {/* timeline content */}
        <div className="home-container">
          <div className="home-posts">
              <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed, Hello {userData?.username}</h2>
                  {tabContent}
              <ul className="flex flex-col flex-1 gap-9 w-full">
                <li className="flex justify-center w-full">

                </li>

              </ul>
          </div>
        </div>
    


    </div>
  )
}

