import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const AddEmployee = () => {
  const [firstname, firstName] = useState("");
  const [lastname, lastName] = useState("");
  const [age, Age] = useState("");
  const [salary, Salary] = useState("");
  const [department, Department] = useState("");

  const [active, activechange] = useState(true);
  const [validation, valchange] = useState(false);
  const navigate = useNavigate();
  const focusref=useRef();

  useEffect(()=>{focusref.current.focus()},[])

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { firstname, lastname, age, salary, department };

    fetch("https://localhost:44369/api/employee/createEmployee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handlesubmit}>           
              <div className="card-title">
                <h2>Employee Create</h2>
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
                        ref={focusref}
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
                      <select
                        value={department}
                        onChange={(e) => Department(e.target.value)}
                        className="form-control form-control-sm"
                      > <option>CSE</option>
                      <option>IT</option>
                      <option>ISE</option>
                      <option>Msc</option>
                      </select>
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
                        Save
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
};

export default AddEmployee;