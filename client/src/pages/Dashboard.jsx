import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import DashSidebar from '../Components/DashSidebar';
import DashProfile from '../Components/DashProfile';
import  DashPosts from '../Components/DashPost';
import DashUsers from '../Components/DashUsers';
import DashComments from '../Components/DashComments';
import DashboardComp from '../Components/DashboardComp';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }

  },[location.search]);
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="md:w-56">
        {/* sidebar */}
        <DashSidebar/>
      </div>
      {/* right side */}
      {tab === 'profile' && <DashProfile/>}
      {/* posts... */}
      {tab === 'posts' && <DashPosts/>}
      {/* users  */}
      {tab === 'users' && <DashUsers/>}
      {/* Comments */}
      {tab === 'comments' && <DashComments/>}
      {/* completedashboard */}
      {tab === 'dash' && <DashboardComp/>}
    </div>
  )
}
