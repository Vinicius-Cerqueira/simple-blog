import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { api } from './services/api';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    api.get('blogs/' + id).then((res) => {
      setBlog(res.data.blog);
    });
  }, [id]);
  const handleClick = () => {
    api
      .delete('blogs/' + blog.id)
      .then((res) => console.log(res))
      .finally(() => navigate('/'));
  };
  console.log(blog.author);
  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author} </p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
