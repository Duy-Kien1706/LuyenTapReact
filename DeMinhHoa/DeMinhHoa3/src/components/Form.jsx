import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Form({products,setProduct}) {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        id: "",
        ten_san_pham: "",
        loai: "",
        gia: "",
        trang_thai: ""
    });

    const handleChange = (e)=>{
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )

    }

    const handleAdd = (e)=>{
        e.preventDefault();
        setProduct(
            [
                ...products,
                {
                    ...formData
                }
            ]
        );

    }


    return (
        <>
            <div className="px-4 py-2" style={{ borderBottom: "1px solid #f0f0f0" }}>
                <h3>Thêm mới sản phẩm</h3>
                <p className="text-muted m-0">Nhập thông tin đầy đủ để thêm vào danh sách</p>
            </div>

            <form className="mt-4" style={{ padding: "20px" }} onSubmit = {handleAdd}>
                <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Nhập tên sản phẩm" 
                    name = "ten_san_pham"
                    onChange = {handleChange}
                    required />
                </div>
                <div className="mb-3">
                    <label htmlFor="disabledSelect" className="form-label">Danh mục</label>
                    <select id="disabledSelect" className="form-select" name = "loai" onChange = {handleChange} required>
                        <option selected disabled value = "">--Chọn danh mục--</option>
                        <option>Điện thoại</option>
                        <option>Máy tính bảng</option>
                        <option>Phụ kiện</option>
                        <option>Laptop</option>
                        <option>Tai Nghe</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Giá</label>
                    <input type="text" className="form-control" placeholder="Nhập giá" name = "gia" onChange = {handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label" >Trạng thái hàng</label>
                    <select className="form-select" name = "trang_thai" onChange = {handleChange} required>
                        <option value="" selected disabled>--Chọn mục--</option>
                        <option>Còn hàng</option>
                        <option>Hết hàng</option>
                    </select>
                </div>


                <div className="d-flex align-items-center gap-4 justify-content-end">
                    <button className="btn btn-primary" type = "submit">Thêm sản phẩm</button>
                    <button className="btn" style={{ border: "solid #f0f0f0 1px", borderRadius: "12px" }}>Làm mới form</button>
                </div>
            </form>
        </>
    )
}