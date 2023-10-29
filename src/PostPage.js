import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import DataContext from './context/DataContext';

const PostPage = () => {
  const {posts,handleDelete} = useContext(DataContext)
  const {id}= useParams();
  const post= posts.find(post => (post.id).toString()===id);

  return (
    <main className='PostPage'>
      <article className='post'>
        { post &&
        <>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.dateTime}</p>
        <p className='postBody'>{post.body}</p>
       <Link to= {`/edit/${id}`}> <button className="editButton">Edit Post</button> </Link>
        <button className="deleteButton" onClick={()=>handleDelete(post.id)}>Delete Post</button>
        
        </>

        }
        {
          !post&&
          <>
          <h2>Page not found</h2>
          <p>Well, That's disappointing</p>
          <Link to = '/' >Visit our Homepage</Link>
          </>
        }

      </article>
    </main>
  )
}

export default PostPage