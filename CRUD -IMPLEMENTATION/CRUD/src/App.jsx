import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(response.data);
  };

  useEffect(()=>{
   getPosts();
  }, []);
  return (
    <div className="App">
      <h1>Posts</h1>
      {posts.map(post =>(
        <div key={post.id}>
          <h2>Title :{post.title}</h2>
          <h2>Body: {post.body}</h2>
          </div>

      ))}
      
      </div>
      
    
  )
}

export default App
