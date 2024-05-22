import { Link } from 'react-router-dom';
import error from '../assets/404-error-with-landscape.avif'
const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 min-h-screen -mt-16'>
            <img src={error} alt="" />
            <h1 className='text-3xl font-bold'>Page Not Found</h1>
            <p className='text-lg'>Oops! The page you’re looking for doesn’t exist.</p>
            <Link to='/'><button className='btn btn-success'>Back to The Home</button></Link>
        </div>
    );
};

export default ErrorPage;