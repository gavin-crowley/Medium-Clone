import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import BlogList from './BlogList';

export default function Home() {
  const url = 'http://localhost:8000/blogs';

  const { data: blogs, isPending, error } = useFetch(url);

  return (
    // // <div className='home'>
    //   {error && <div>{error}</div>}
    //   {isPending && <div>Loading...</div>}
    //   {blogs && <BlogList blogs={blogs} />}
    // </div>

    <div className='home-page'>
      {/* <Banner /> */}
      <div className='banner'>
        <div className='container'>
          <h1 className='logo-font'>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className='container page'>
        <div className='row'>
          {/* <MainView /> */}
          <div className='col-md-9'>
            {/* <div className='feed-toggle'> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} />} {/* </div> */}
          </div>

          <div className='col-md-3'>{/* <TagsSidebar /> */}</div>
        </div>
      </div>
    </div>
  );
}
