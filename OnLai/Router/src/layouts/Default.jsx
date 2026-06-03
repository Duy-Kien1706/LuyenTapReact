import { Outlet,Link } from "react-router-dom";
export default function Default() {
    return (
        <>
            <header>
                <h1>Header</h1>
                <ul>
                    <li><Link  to="/">Home</Link></li>
                    <li><Link  to="/about">About</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link  to="/products/detail">Product Detail</Link></li>
                    
                </ul>
            </header>
            <Outlet></Outlet>
        </>
    )
}
