import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <article>
            <div>
                <h1>Home page</h1>
            </div>
            <div>
                <Link to="/employees">
                    <button className='button'> Employees </button>
                </Link>
            </div>
        </article>
    );
};
export default Home;