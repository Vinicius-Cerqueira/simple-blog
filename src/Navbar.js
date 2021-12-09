import {Outlet, Link} from 'react-router-dom';

const  Navbar = () => {
    return (
        <div>
            <nav>
                <h1>Simple Blog</h1>
                <div className='navbar'>
                    <Link to="/simple-blog">Home</Link>
                    <Link to="/simple-blog/create">New Blog</Link>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}
 
export default  Navbar;