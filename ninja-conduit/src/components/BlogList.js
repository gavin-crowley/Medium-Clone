import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogList({ blogs, title }) {
  return (
    <div className='blog-list'>
      {/* {blogs.map((blog) => (
        <div key={blog.id} className='blog-preview'>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))} */}
      {blogs.map((blog) => (
        // <ArticlePreview article={article} key={article.slug} />
        <div key={blog.id} className='article-preview'>
          {/* <div className='article-meta'> */}
            {/* <Link to={`/@${blog.author.username}`}>
              <img
                src={
                  blog.author.image ||
                  'https://static.productionready.io/images/smiley-cyrus.jpg'
                }
                alt={blog.author.username}
              />
            </Link> */}

            {/* <div className='info'>
              <Link className='author' to={`/@${blog.author.username}`}>
                {blog.author.username}
              </Link>
              <time className='date' dateTime={blog.createdAt}>
                {new Date(blog.createdAt).toDateString()}
              </time>
            </div> */}

            {/* <div className='pull-xs-right'>
              <button>
                <i className='ion-heart' /> {blog.favoritesCount}
              </button>
            </div> */}
          {/* </div> */}
          
          {/* <Link to={`/blogs/${blog.id}`} className='preview-link'>
            <h1>{blogs.title}</h1>
            <p>{blog.description}</p>
            <span>Read more...</span>
          </Link> */}

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
