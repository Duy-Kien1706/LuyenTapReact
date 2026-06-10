import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Form( { users, setUser } ) {

    const navigate = useNavigate();

    const [ formData, setFormData ] = useState( {
        name: "",
        email: "",
        address: "",
        phone: "",
    } );

    const handleChange = ( e ) => {
        setFormData( {
            ...formData,
            [ e.target.name ]: e.target.value
        } );
    };

    const handleAdd = ( e ) => {
        e.preventDefault();

        setUser( [
            ...users,
            {
                ...formData
            }
        ] );
        navigate( "/" );
    }


    return (
        <>
            <div className="container">
                <form style={{ width: "500px", border: "black 1px solid" }} className="mt-5" onSubmit = {handleAdd}>
                    <div style={{ padding: "20px" }}>
                        <div className="d-flex align-items-center justify-content-between">
                            <h3>Add Employee</h3>
                            <button style={{ backgroundColor: "white", border: "none", fontSize: "32px" }} type = "button">
                                &times;
                            </button>
                        </div>

                        <div>
                            <div className="mb-4">
                                <label className="mb-2">Name</label><br />
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required />
                            </div>

                            <div className="mb-4">
                                <label className="mb-2">Email</label><br />
                                <input type="email"
                                    className="form-control"
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="mb-2">Address</label><br />
                                <input 
                                type="text" 
                                className="form-control" 
                                required 
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="mb-2">Phone</label><br />
                                <input 
                                type="text" 
                                className="form-control" 
                                required
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                pattern = "[0-9]{10}"
                                title = "Please fill number and enough 10 number"
                                 />
                            </div>
                        </div>
                    </div>


                    <div className="d-flex align-items-center justify-content-end" style={{ backgroundColor: "gray", padding: "10px" }}>
                        <button className="btn">Cancel</button>
                        <button style={{ border: "none", padding: "10px" }} className="btn btn-primary" type = "submit">Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}