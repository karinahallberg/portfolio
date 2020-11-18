// importing components
import React, { useState, useEffect } from 'react';
import DefaultNavbar from '../src/components/navbar/DefaultNavbar'
import './App.css';
import DefaultCarousel from "./components/defaultCarousel/DefaultCarousel";
import About from "./pages/about/About";
import ErrorBoundary from "./components/ErrorBoundary";

import Container from "react-bootstrap/Container";
import './App.css'
import axios from 'axios';
import Posts from './pages/posts/Posts'
//import Pagination from './components/pagination/Pagination'

const App = () => {

const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
 
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

//     const handleFetch = async () => {
//       setLoading(true);
//       const searchTerm = 'laptop'
//  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
//       const resulten = await axios.get(url);
//       setResults(resulten.data);
//       setLoading(false);
//     };

     fetchPosts();
    // handleFetch()
  }, []);

 // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  //const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
     <div className="App" style={{ position: "relative" }}>
    <DefaultNavbar/>
    
    <DefaultCarousel/>
    {/* About section */}
    <div>        
          <div>
            <Container className="container-box rounded">              
                <About />              
            </Container>
          </div>       
      </div>
      <div>
        <Container className="container-box rounded">
          <ErrorBoundary>
            <Posts posts={currentPosts} loading={loading} />
          </ErrorBoundary>      
        </Container>
      </div>
          
    </div>
    </>
  );
}

export default App;
