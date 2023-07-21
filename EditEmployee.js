import {Link, useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const EditEmployee=()=>{
const {id }=useParams();
const navigate=useNavigate();

const [employeeId, setID] = useState("");
const [firstname, firstName] = useState("");
const [lastname, lastName] = useState("");
const [age, Age] = useState("");
const [salary, Salary] = useState("");
const [department, Department] = useState("");

useEffect(()=>{
    fetch("https://localhost:44369/api/employee/GetEmployeeByID/"+ id)
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
        setID(resp.employeeId);
        firstName(resp.firstName);
        lastName(resp.lastName);
        Age(resp.age);
        Salary(resp.salary);
        Department(resp.department);

    })
    .catch((err) => {
      console.log(err.message);
    })

},[]
);

const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { employeeId, firstname, lastname, age, salary, department };

    fetch("https://localhost:44369/api/employee/updateEmployee", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("updated successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


    return(
        <div className="Container">
           <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handlesubmit}>           
              <div className="card-title">
                <h2>Employee Edit</h2>
              </div>
              <div className="card-body">
                <div className="row" style={{"textAlign":"left"}}>
                <div className="row">
                <div className="col-sm-12 col-lg-4 ">
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        required
                        value={firstname}
                        onChange={(e) => firstName(e.target.value)}
                        className="form-control form-control-sm"
                      ></input>
                    </div>
                  </div>
                </div>
                  
                  <div className="row">
                  <div className="col-sm-12 col-lg-4">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        value={lastname}
                        onChange={(e) => lastName(e.target.value)}
                        className="form-control form-control-sm"
                      ></input>
                    </div>
                  </div>
                  </div>
                 
                  <div className="row">
                  <div className="col-sm-12 col-lg-4">
                    <div className="form-group">
                      <label>Age</label>
                      <input
                        value={age}
                        onChange={(e) => Age(e.target.value)}
                        className="form-control form-control-sm"
                      ></input>
                    </div>
                  </div>
                  </div>
                  

                  <div className="row">
                  <div className="col-sm-12 col-lg-4">
                    <div className="form-group">
                      <label>Salary</label>
                      <input
                        value={salary}
                        onChange={(e) => Salary(e.target.value)}
                        className="form-control form-control-sm"
                      ></input>
                    </div>
                  </div>

                  </div>
                 
                  <div className="row">
                  <div className="col-sm-12 col-lg-4 mb-2">
                    <div className="form-group">
                      <label>Department</label>
                      <input
                        value={department}
                        onChange={(e) => Department(e.target.value)}
                        className="form-control form-control-sm"
                      ></input>
                    </div>
                  </div>
                  </div>
                 
                  <div className="row">
                  <div className="col-sm-12 col-lg-12">
                    <div className="form-group">
                      <button
                        className="btn btn-sm btn-primary float-left"
                        type="submit"
                      >
                        Update
                      </button>
                      <Link to="/" className="btn btn-sm btn-primary float-end">
                        
                        <FontAwesomeIcon icon={faArrowLeft} /> Back
                      </Link>
                    </div>
                  </div>
                  </div>
                
                </div>
              </div>           
          </form>
        </div>
      </div>

            

    </div>
    );
}
export default EditEmployee;