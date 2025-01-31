import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout buddy</h1>    
                </Link>
                <nav>
                    <div>
                        <link to="/Login">Login</link>
                        <link to="/Signup">Signup</link>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Navbar