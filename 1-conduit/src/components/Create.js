import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('gavin');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      navigate('/');
    });
  };

  return (
    <div className='editor-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>

            <form>
              <fieldset>
                <fieldset className='form-group'>
                  <input
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Article Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>
            

                <fieldset className='form-group'>
                  <textarea
                    className='form-control'
                    rows='8'
                    placeholder='Write your article (in markdown)'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </fieldset>
          

                <label htmlFor=''>Blog author:</label>
                <select
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                >
                  <option value='gavin '>Gavin</option>
                  <option value='admin'>Admin</option>
                </select>

                <button
                  className='btn btn-lg pull-xs-right btn-primary'
                  type='button'
                  onClick={handleSubmit}
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
