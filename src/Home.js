import { useState, useEffect } from 'react';
import BlogList from './BlogList';

import { api } from './services/api';
const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    api.get('/blogs').then((res) => {
      console.log(res);
      setData(res.data);
    });
  }, []);

  return (
    <div className="home">
      {data.blogs && <BlogList blogs={data.blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
