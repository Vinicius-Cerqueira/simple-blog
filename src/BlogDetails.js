import { useNavigate, useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams();
    const { data: blog, error, isPending } = useFetch('https://my-json-server.typicode.com/Vinicius-Cerqueira/simple-blog/blogs/' + id);
    const navigate = useNavigate();
    const handleClick = () => {

        fetch('https://my-json-server.typicode.com/Vinicius-Cerqueira/simple-blog/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(()=>{
            navigate('/');
        })
    }
    return(
        <div className='blog-details'>
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author} </p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
export default BlogDetails