import { useState } from "react"
import {useNavigate} from "react-router-dom";
export default function UserCreate({addUsers}) {
    const navigate = useNavigate();
    const roles = [
        {
            id: "admin",
            label: "admin"
        },
        {
            id: "user",
            label: "user"
        },
        {
            id: "editor",
            label: "editor"
        }

    ]

    const [ userInfo, setUserInfo ] = useState( {
        fullName: "",
        email: "",
        phoneNumber: "",
        role: "admin"
    } )
    // Lưu thông tin đăng nhập của người dùng vào useState
    // khi submit form thì log ra những thông tin đã lưu
    // Hàm xử lý khi người dùng thay đổi dữ liệu trong form
    const handleChangeUserInfo = ( ev ) => {
        console.log(ev.target.name, ev.target.value);


        // Lấy giá trị người dùng vừa nhập
        const value = ev.target.value;

        // Lấy tên của trường đang nhập (name, email, phone, role)
        const key = ev.target.name;

        // Tạo object mới bằng cách sao chép dữ liệu cũ
        // Sau đó cập nhật thuộc tính có tên là key bằng giá trị mới
        // Ví dụ:
        // key = "email"
        // value = "abc@gmail.com"
        // => email sẽ được cập nhật thành abc@gmail.com
        const newInfo = {
            ...userInfo,
            [ key ]: value
        };

        // Cập nhật state
        setUserInfo( newInfo );

    };

    // Hàm xử lý khi người dùng nhấn nút Submit
    const handleSubmit = ( ev ) => {

        // Ngăn trình duyệt thực hiện hành động mặc định của form
        // (reload trang hoặc gửi form theo cách truyền thống)
        ev.preventDefault();

        addUsers(userInfo);
    };
    return (
        <>
            <form className="container" style={{ maxWidth: "560px" }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor = "exampleInputEmail1" className="form-label me-2">Họ Và Tên </label>
                    <span style={{ color: "red" }}>*</span>
                    <input type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        required
                        name="fullName"
                        onChange={handleChangeUserInfo} />
                </div>
                <div className="mb-3">
                    <label htmlFor = "exampleInputPassword1" className="form-label me-2">Email</label>
                    <span style={{ color: "red" }}>*</span>
                    <input type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                        required
                        name="email"
                        onChange={handleChangeUserInfo} />
                </div>
                <div className="mb-3">
                    <label htmlFor = "exampleInputPassword1" className="form-label me-2">Số điện thoại</label>
                    <span style={{ color: "red" }}>*</span>
                    <input type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        required
                        pattern="[0-9]{10}"
                        title="Số điện thoại phải gồm đúng 10 chữ số"
                        name="phoneNumber"
                        onChange={handleChangeUserInfo} />
                </div>

                <label htmlFor = "" className="form-label">Vai trò</label>
                <select className ="form-select mb-3  " name="role" onChange={handleChangeUserInfo} >
                    {
                        roles.map( ( role ) => {
                            return <option value={role.id} key={role.id}>{role.label}</option>
                        } )
                    }
                </select>

                <button type="submit" className="btn btn-primary" onClick = {()=>navigate("/")}>Submit</button>
            </form>
        </>
    )
}