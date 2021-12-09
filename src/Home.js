import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const {data: blogs, isNotPending, error} = useFetch('https://my-json-server.typicode.com/Vinicius-Cerqueira/simple-blog/blogs');    

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isNotPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/>}
        </div>

    );
}
 
export default Home;