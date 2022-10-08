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
    fetch('http://localhost:8000/blogs/' + blog.id, { method: 'DELETE' }).then(
      () => {
        navigate('/');
      }
    );
  };

  return (
    // <div className='blog-details'>
    //   {isPending && <div>Loading...</div>}
    //   {error && <div>{error}</div>}
    //   {blog && (
    //     <article>
    //       <h2>{blog.title}</h2>
    //       <p>Written by {blog.author}</p>
    //       <div>{blog.body}</div>
    //       <button onClick={handleDelete}>delete</button>
    //     </article>
    //   )}
    // </div>
    <>
      {blog && (
        <div className='article-page'>
          <div className='banner'>
            <div className='container'>
              <h1>{blog.title}</h1>
              {/* <ArticleMeta /> */}
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

                  {/* <time className='date' dateTime={article.createdAt}>
                    {new Date(article.createdAt).toDateString()}
                  </time> */}
                </div>

                {/* {isAuthor ? <ArticleActions /> : null} */}
                <span>
                  {/* <Link
                    to={`/editor/${slug}`}
                    className='btn btn-outline-secondary btn-sm'
                  >
                    <i className='ion-edit'></i> Edit Article
                  </Link> */}

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
                {/* <article dangerouslySetInnerHTML={renderMarkdown()} /> */}
                <article>{blog.body}</article>

                {/* <TagsList tags={article.tagList} /> */}
              </div>
            </div>

            <hr />

            {/* <Suspense fallback={<p>Loading comments</p>}>
            <CommentSection />
          </Suspense> */}
          </div>
        </div>
      )}
    </>
  );
}
