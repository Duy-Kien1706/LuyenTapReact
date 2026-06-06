export default function Header() {
    return (
        <nav  style = {{
            backgroundColor: "#4f46e5",
        }} className ="navbar navbar-expand-lg " >
            <div className ="container-fluid d-flex">
                <a style = {{
                        color: "white"
                    }} className ="navbar-brand" href="#"><b>User Easy</b></a>
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse" id="navbarNav">
                    <ul className ="navbar-nav">
                        <li  className ="nav-item">
                            <a style = {{
                        color: "white"
                    }} className ="nav-link active" aria-current="page" href="#">Người Dùng</a>
                        </li>
                        <li  className ="nav-item">
                            <a style = {{
                        color: "white"
                    }} className ="nav-link" href="#">Sơ đồ</a>
                        </li>
                        <li  className ="nav-item">
                            <a style = {{
                        color: "white"
                    }} className ="nav-link" href="#">Cấu trúc file</a>
                        </li>
                    </ul>
                </div>
                <div className = "d-flex align-items-center">
                    <p className = "text-white mb-0 me-3">Xin chào admin</p>
                    <button type="button" className="btn btn-outline-primary text-white">Đăng xuất</button>
                </div>
            </div>
        </nav>
    )
}