import PropTypes from 'prop-types';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='nav'>
            <ul>
                <CustomLink to='/' >Home</CustomLink>
                <CustomLink to='/about' >About</CustomLink>
                <CustomLink to='/contact' >Contact</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    console.log(resolvedPath);

    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}> 
                {children} 
            </Link>
        </li>
    )
}

// props validation
CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
