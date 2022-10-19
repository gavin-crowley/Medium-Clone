import React from 'react';
import useFetch from './useFetch';
import BlogList from './BlogList';

export default function Home({ searchTerm }) {

  const url = 'http://localhost:8000/blogs';

  const { data: blogs, isPending, error } = useFetch(url);

  return (
    <div className='home-page'>
      <div className='banner'>
        <div className='container'>
          <h1 className='logo-font'>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>


      <div className='container page'>
        <div className='row'>
          <div className='col-md-9'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} searchTerm={searchTerm} />}
          </div>
        </div>
      </div>
    </div>
  );
}
