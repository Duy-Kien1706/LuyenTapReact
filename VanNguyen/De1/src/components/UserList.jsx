import {useNavigate} from "react-router-dom";
export default function UsersList({users}) {
    const navigate = useNavigate();
    return (
        <>
            <div className="  mt-5">

                <div className = "d-flex align-items-center justify-content-between px-3 py-3" style = {{backgroundColor : "lightblue"}}>
                    <h2>Manage Employees</h2>

                    <div className = "d-flex gap-2">
                        <button className = "btn btn-danger">Delete</button>
                        <button className = "btn btn-primary" onClick = {()=>{navigate("/form")}} >Add New Employee</button>
                    </div>
                </div>


                <table className = "table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>

                        {users.map((user)=>{
                            return(
                            <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.phone}</td>
                            <td className = "d-flex gap-2">
                                <button className = "btn btn-secondary">Sửa</button>
                                <button className = "btn btn-danger">Xóa</button>
                            </td>
                        </tr>
                            )
                            
                        })}


 
                    </tbody>
                </table>



                <div className="d-flex align-items-center justify-content-between">
                    <span className = "ms-4">Showing 5 out of 25 entries</span>
                    <div className = "d-flex align-items-center">
                        <span>Previous</span>
                        <span className = "px-3 py-2">1</span>
                        <span className = "px-3 py-2">2</span>
                        <span className = "px-3 py-1 " style = {{backgroundColor : "gray"}}>3</span>
                        <span className = "px-3 py-2">4</span>
                        <span className = "px-3 py-2">5</span>
                        <span className = "me-4">Next</span>
                    </div>
                </div>

            </div>
        </>
    )
}