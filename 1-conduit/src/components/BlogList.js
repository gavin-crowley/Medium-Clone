import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogList({ blogs, title, searchTerm }) {
  return (
    <div className='blog-list'>
      {blogs
        // eslint-disable-next-line array-callback-return
        .filter((item) => {
          if (searchTerm === '') {
            return item;
          } else if (
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return item;
          }
        })
        .map((blog) => (
          <div key={blog.id} className='article-preview'>
            <Link to={`/blogs/${blog.id}`} className='preview-link'>
              <h1>{blog.title}</h1>
              <p>Written by {blog.author}</p>
              <span>Read more...</span>
            </Link>
          </div>
        ))}
    </div>
  );
}
