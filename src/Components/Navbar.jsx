import { Link } from "react-router-dom";

export default function Navbar() {
    return <nav>
        <ul>
            <li>
                <Link to='/'>home</Link>
            </li>
            <li>
                <Link to='/products'>catalog</Link>
            </li>
        </ul>
    </nav>;
}