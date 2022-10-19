import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';

export default function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete this post?`);

    if (confirmed) {
      fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE',
      }).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <>
      {blog && (
        <div className='article-page'>
          <div className='banner'>
            <div className='container'>
              <h1>{blog.title}</h1>
              <div className='article-meta'>
                <Link to={`/@${blog.author}`}>
                  <img
                    src={
                      blog.author.image ??
                      'https://static.productionready.io/images/smiley-cyrus.jpg'
                    }
                    alt={blog.author}
                  />
                </Link>

                <div className='info'>
                  <Link to={`/@${blog.author}`} className='author'>
                    {blog.author}
                  </Link>
                </div>

                <span>
                  <button
                    className='btn btn-outline-danger btn-sm'
                    onClick={handleDelete}
                  >
                    <i className='ion-trash-a'></i> Delete Article
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className='container page'>
            <div className='row article-content'>
              <div className='col-xs-12'>
                <article>{blog.body}</article>
              </div>
            </div>
            <hr />
          </div>
        </div>
      )}
    </>
  );
}
