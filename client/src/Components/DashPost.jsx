import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {Table, TableCell, TableHead, TableHeadCell} from 'flowbite-react';
import {Link} from 'react-router-dom';
export default function DashPost() {
  const {currentUser} = useSelector((state)=> state.user);
  const[userPosts, setUserPosts] = useState([]);
  console.log(userPosts);
  useEffect( ()=>{
      const fetchPosts = async () =>{
        try {
          const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`)
          const data = await res.json();
          if(res.ok){
            setUserPosts(data.posts)
          }
        } catch (error) {
          
        }
      };
      if(currentUser.isAdmin){
        fetchPosts();
      }
  }, [currentUser._id]);

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>

      {
        currentUser.isAdmin && userPosts.length > 0 ? (
          <>
          <Table hoverable className='shadow-md'>
            <TableHead>
              <TableHeadCell>Date updated</TableHeadCell>
              <TableHeadCell>Post image</TableHeadCell>
              <TableHeadCell>Post title</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Delete</TableHeadCell>
              <TableHeadCell><span>Edit</span></TableHeadCell>
            </TableHead>
            {
              userPosts.map((post)=>(
                <Table.Body className='divide-y'>
                  <Table.Row className='bg-white dark: border-gray-700 dark:bg-gray-800'>
                    <Table.Cell>
                      {new Date(post.updatedAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell>
                      <Link  to={`/post/${post.slug}`} >
                        <img src={post.Image} alt={post.title} className='w-20 h-10 object-cover bg-gray-500' />
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Link className='font-medium text-red-900 dark:text-white' to={`/post/${post.slug}`} >
                       {post.title}
                      </Link>
                    </Table.Cell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>
                      <span className='font-medium text-red-500 hover:underline cursor-pointer'>Delete</span>
                    </TableCell>
                    <TableCell>
                      <Link className='text-teal-500 hover:underline ' to={`update-post/${post._id}`}>
                      <span>Edit</span>
                      </Link>
                      
                    </TableCell>
                  </Table.Row>
                </Table.Body>
              ))
            }
          </Table>
          </>
        ): (
          <p>You have no post yet!</p>
        )
      }
    </div>
  )
}
