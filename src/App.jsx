import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import {db} from './firebase';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data() 
      })))
    })
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage" 
          src="/header_logo.png"
          alt="instagram logo"
        />
      </div>

      {
        posts.map(({id, post}) => (
          <Post
            key={post.id} 
            username={post.username}
            imageUrl={post.imageUrl}
            caption={post.caption}
          />
        ))
      }
    </div>
  );
}

export default App;
