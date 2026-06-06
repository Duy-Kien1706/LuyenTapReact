import {useNavigate} from "react-router-dom";
export default function UserList( { users,onDelete } ) {

    const navigate = useNavigate();
    return (
        <>
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h2>Quản lí người dùng</h2>
                    <span>Tổng cộng: {users.length} người dùng</span>
                </div>
                <button style=
                    {{ backgroundColor: "#4f46e5", padding: "8px 12px", borderRadius: "6px", border: "none", color: "white" }}
                    onClick = {()=>{navigate("/users/add")}}>+ Thêm người dùng</button>
            </div>


  
            <table className="table border">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Họ và tên</th>
                        <th scope="col">email</th>
                        <th scope="col">số điện thoại</th>
                        <th scope="col">vai trò</th>
                        <th scope="col">thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( ( user ) => {
                            return <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.fullName}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneNumber}</td>
                                <td>{user.role}</td>
                                <td>
                                    <div className="d-flex gap-2">
                                        <button
                                            className="btn btn-primary">Xem</button>
                                        <button
                                            className="btn btn-primary">Sửa</button>
                                        <button
                                            className="btn btn-danger"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#deleteModal-${user.id}`}>Xóa</button>
                                        <div
                                            className="modal fade"
                                            id={`deleteModal-${user.id}`}
                                            tabIndex="-1"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">

                                                    <div className="modal-header">
                                                        <h5 className="modal-title">
                                                            comfirm prisoner deletion
                                                        </h5>

                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                        ></button>
                                                    </div>

                                                    <div className="modal-body">
                                                        Bạn có chắc chắn muốn xóa người dùng này không?
                                                    </div>

                                                    <div className="modal-footer">
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            cancel
                                                        </button>

                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            data-bs-dismiss="modal"
                                                            onClick = {()=>onDelete(user.id)}
                                                        >
                                                            confirm
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        } )
                    }

                </tbody>
            </table>

        </>
    )
}