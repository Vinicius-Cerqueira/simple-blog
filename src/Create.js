import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title,body,author};
        
        setIsPending(true);

        fetch('https://my-json-server.typicode.com/Vinicius-Cerqueira/simple-blog/db.json', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=> {
            console.log('Blog succefully posted!')
            setIsPending(false);
            navigate('/simple-blog');
        })
    }
    return (
        <div className="create"> 
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>

                <input type="text"
                   required 
                   value={title} 
                   onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog Body</label>

                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}>
                </textarea>

                <label>Blog Author</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option>Mario</option>
                    <option>Wario</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;