import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faCircleInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import img1 from './Images/IMG.png';
import {button} from "bootstrap";


const Employeelist = () => {
  const navigate = useNavigate();
  const [employee, setemployee] = useState(null);
  const[empdata,getEmployeeInfo]= useState(null);

  async function fetchData(){
    try{
      const response= await fetch('https://localhost:44369/api/employee/viewEmployees')
      const data=await response.json();
      setemployee(data);
    }
    catch(error){
      console.error(error)
    }
  }
  
  useEffect(()=>{
    fetchData();
  }, []);

  {/*useEffect( ()=> {
    fetch("https://localhost:44369/api/employee/viewEmployees")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setemployee(resp);
      })
      .catch((err) => {
        console.log(err.message);
      })
    },[]);*/}

    
    const Removefunction=(id)=>{
      if(window.confirm('Are you sure you want to delete'))
      {
        fetch("https://localhost:44369/api/employee/deleteEmployee/"+id,
      {
        method:"DELETE"
      })
      .then((res) => {
        alert("Deleted Successfully")
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      })

      }
      
    };

    const editEmployee=(id)=>{
      navigate("/editEmployee/"+id);
    };
  
    const EmployeeDetails=(emp) => {
      console.log("Test Emp: ",emp);
      getEmployeeInfo(emp)
    }
  

  // const employee = [
  //   { employeeId: 1, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 2, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 3, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 4, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  //   { employeeId: 5, employeeName: "ABC", employeeAge: 10, employeeDept: "IT" },
  // ];

  return (
    <div className="container">
      <div className="row">
        <h1>Employee List</h1>
      </div>
      <div className="row">
        <div className="col-12 mb-2 ">
          <Link to="/addEmployee" className="btn btn-sm btn-primary float-end">
            New Employee
          </Link>
        </div>
      </div>
      <div className="row">
        {employee &&
        employee.map((i) => (
          <div className="col-sm-12 col-md-4 col-lg-3" key={i.employeeId}>
            <div className="card">
              <div className="card-body">
              <img src={img1} width="30%" alt=""></img><br></br>
                <label>ID : {i.employeeId}</label> <br></br>
                <label>First Name : {i.firstName}</label>
                <br></br>
                <label>Last Name : {i.lastName}</label>
                <br></br>
                <label>Age : {i.age}</label> <br></br>
                <label> Salary : {i.salary}</label>
                <br></br>
                <label> Department : {i.department}</label>
                <br></br>
               {/* <Link
                  to="/editEmployee"
                  className="btn btn-sm btn-primary"
                >
                  <i className="fa-duotone fa-trash"></i> Edit
                </Link>
        <br></br>*/}
               <button className="btn btn-sm btn-outline-primary float-left"
                onClick={()=>editEmployee(i.employeeId)}>
                Edit<FontAwesomeIcon icon={faPenToSquare} />
                </button>
                      
                <Link
                  to="/employeeDetails"
                  className="btn btn-sm btn-outline-success float-right"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                  onClick={()=>EmployeeDetails(i)}>
                  View
                 <FontAwesomeIcon icon={faCircleInfo} /> 
                </Link>&nbsp;


                <button onClick={()=>{Removefunction(i.employeeId)}}
                className="btn btn-sm btn-outline-danger float-right">
                Remove <FontAwesomeIcon icon={faTrash} /></button>
                    
                  
    

                
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" 
      data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" 
      aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" 
        aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="card">
                    {
                      empdata &&
                      <div className="card-body">
                         <img src={img1}/><br></br>
                        <label>ID : {empdata.employeeId}</label> <br></br>
                        <label>First Name : {empdata.firstName}</label>
                        <br></br>
                        <label>Last Name : {empdata.lastName}</label>
                        <br></br>
                        <label>Age : {empdata.age}</label> <br></br>
                        <label> Salary : {empdata.salary}</label>
                        <br></br>
                        <label> Department : {empdata.department}</label><br></br>
                      </div>
                    }
                      </div>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-primary">Save</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Employeelist;
{/*import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';
import img4 from './Images/4.jpg';*/}

{/*const Employeelist=()=>
{
    const employee=[
        {employeeID:1, employeeName:"xyz", employeeAge:20, employeeDept:"IT"},
        {employeeID:2, employeeName:"xyz", employeeAge:20, employeeDept:"IT"},
        {employeeID:3, employeeName:"xyz", employeeAge:20, employeeDept:"IT"},
        {employeeID:4, employeeName:"xyz", employeeAge:20, employeeDept:"IT"},
        {employeeID:5, employeeName:"xyz", employeeAge:20, employeeDept:"IT"},
    ];
    return(
     <div className="container">
        <div className="row">
        <h1>Employee List</h1>
        </div>
        <div className="row">
    <div className="row-12 mb-2">*/}
{/* <button type="button" class="btn btn-sm btn-primary float-end">
                New Employee
    </button>*/}
            {/*<Link to="/addEmployee" className="btn btn-sm btn-primary float-end">New Employee</Link>
            </div>
        </div>
<div className="row">*/}
           {/* <thead className="bg-secondary">
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>CITY</th>
            <th>DEPT</th>
            <th></th>
</thead>*/}
               {/* {employee.map((i)=>(
                    <div class="col-sm-12 col-md-3 col-lg-2" key={i.employeeID}>
                            <div className="card">
                                <div className="class-body">

                                    <label>Employee ID:{i.employeeID}</label><br></br>
                                    <label>Employee Name:{i.employeeName}</label><br></br>
                                    <label>Employee Age:{i.employeeAge}</label><br></br>
                                    <label>Employee Dept:{i.employeeDept}</label><br></br>
                                    <Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                                    <Link to="/detailEmployee" className="btn btn-sm btn-success">Details</Link>


                                </div>
                            </div>
                        </div>
                    


                ))}
        
  
   </div>
</div>
        
        

    );
}
export default Employeelist;*/}
                
                   {/* <td>1</td>
                    <td>abc</td>
                    <td>20</td>
                    <td>Bangalore</td>
                    <td>IT</td>
                    <td><Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/detailEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>xyz</td>
                    <td>22</td>
                    <td>Chennai</td>
                    <td>Mech</td>
                     <td><Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>mno</td>
                    <td>19</td>
                    <td>Tumkur</td>
                    <td>IT</td>
                     <td><Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>efg</td>
                    <td>25</td>
                    <td>Mysore</td>
                    <td>Admin</td>
                    <td><Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
<button type="button" class="btn btn-sm btn-danger"> Remove</button></td>*/}
            
      
       {/* <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
            <div className="card">
                <img src={img1} alt="" ></img>
                <div className="card-body">
                    <label><b>EmpID:01</b></label><br></br>
                    <label>EmpName:Marry</label><br></br>
                    <label>EmpAge:20</label><br></br>
                    <label>City:Bangalore</label><br></br>
                    <label>Dept:IT</label><br></br>
                    <Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button>
                </div>
            </div>
         </div>
            
         <div className="col">
            <div className="card">
                <img src={img2} alt=""></img>
                <div className="card-body">
                    <label><b>EmpID:02</b></label><br></br>
                    <label>EmpName:Sam</label><br></br>
                    <label>EmpAge:25</label><br></br>
                    <label>City:Chennai</label><br></br>
                    <label>Dept:Mech</label><br></br>
                    <Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button>
                </div>
            </div>
         </div>

         <div className="col">
            <div className="card">
                <img src={img3} alt=""></img>
                <div className="card-body">
                    <label><b>EmpID:03</b></label><br></br>
                    <label>EmpName:Dan</label><br></br>
                    <label>EmpAge:22</label><br></br>
                    <label>City:Mysore</label><br></br>
                    <label>Dept:Admin</label><br></br>
                    <Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button>
                </div>
            </div>
         </div>

         <div className="col">
            <div className="card">
                <img src={img4} alt=""></img>
                <div className="card-body">
                    <label><b>EmpID:04</b></label><br></br>
                    <label>EmpName:Sara</label><br></br>
                    <label>EmpAge:19</label><br></br>
                    <label>City:Bangalore</label><br></br>
                    <label>Dept:IT</label><br></br>
                     <Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button>
                </div>
            </div>
         </div>

         <div className="col">
            <div className="card">
                <img src={img4} alt=""></img>
                <div className="card-body">
                    <label><b>EmpID:05</b></label><br></br>
                    <label>EmpName:Sandy</label><br></br>
                    <label>EmpAge:22</label><br></br>
                    <label>City:Tumkur</label><br></br>
                    <label>Dept:Purchase</label><br></br>
                    <Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button>
                </div>
            </div>
         </div>

         <div className="col">
            <div className="card">
                <img src={img3} alt=""></img>
                <div className="card-body">
                    <label><b>EmpID:06</b></label><br></br>
                    <label>EmpName:Peter</label><br></br>
                    <label>EmpAge:22</label><br></br>
                    <label>City:Udupi</label><br></br>
                    <label>Dept:Account</label><br></br>
                     <Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button>
                </div>
            </div>
         </div>

         <div className="col">
            <div className="card">
                <img src={img2} alt=""></img>
                <div className="card-body">
                    <label><b>EmpID:07</b></label><br></br>
                    <label>EmpName:Mady</label><br></br>
                    <label>EmpAge:20</label><br></br>
                    <label>City:Hasan</label><br></br>
                    <label>Dept:IT</label><br></br>
                    <Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button>
                </div>
            </div>
         </div>

         <div className="col">
            <div className="card">
                <img src={img1} alt=""></img>
                <div className="card-body">
                    <label><b>EmpID:08</b></label><br></br>
                    <label>EmpName:Rash</label><br></br>
                    <label>EmpAge:20</label><br></br>
                    <label>City:Bangalore</label><br></br>
                    <label>Dept:IT</label><br></br>
                    <Link to="/editEmployee" className="btn btn-sm btn-primary">Edit</Link>
                    <Link to="/editEmployee" className="btn btn-sm btn-success">Details</Link>
                    <button type="button" class="btn btn-sm btn-danger"> Remove</button>
                </div>
            </div>
         </div>




</div>*/}
        