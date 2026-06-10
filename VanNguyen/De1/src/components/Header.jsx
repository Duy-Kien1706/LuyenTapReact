import {Outlet} from "react-router-dom"
export default function Header(){
    return(
        <>
            <header className = "d-flex justify-content-between px-2 py-2" style = {{backgroundColor: "gray"}}>
                <div className = "d-flex align-items-center gap-3">
                    <h3>TLU</h3>
                    <p className = "m-0">Home</p>
                    <p className = "m-0">Employees</p>
                </div>
                <div className = "d-flex gap-2">
                    <input type="text" placeholder = "Search" className = "form-control" />
                    <button className = "btn btn-secondary">Search</button>
                </div>
            </header>

            <Outlet></Outlet>
        </>
    )
}