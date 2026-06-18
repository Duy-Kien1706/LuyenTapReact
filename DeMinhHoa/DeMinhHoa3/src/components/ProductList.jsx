export default function ProductList( { products } ) {
    return (
        <>
            <div className="px-4">
                <h3>Danh sách sản phẩm</h3>
                <p className="text-muted">Danh sách sản phẩm mẫu được hiển thị dữ liệu từ hệ thống</p>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Danh mục</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map( ( product,index ) => {
                        return (
                            <tr>
                                <td>{product.id ? product.id: index +1  }</td>
                                <td>{product.ten_san_pham}</td>
                                <td>{product.loai}</td>
                                <td>{product.gia}</td>
                                <td>{product.trang_thai}</td>
                            </tr>
                        )
                    } )
                }
                </tbody>
            </table>
        </>
    )
}