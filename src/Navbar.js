import {Outlet, Link} from 'react-router-dom';

const  Navbar = () => {
    return (
        <div>
            <nav>
                <h1>Simple Blog</h1>
                <div className='navbar'>
                    <Link to="/">Home</Link>
                    <Link to="/create">New Blog</Link>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
}
 
export default  Navbar;