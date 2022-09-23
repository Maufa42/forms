import React from "react";
import {useEffect} from "react";
// import Form from "./Form";
import "./Table.css";



const Table = (props) => {
  console.log("PROPS HERE",props);
  console.log("GETDATA HERE",props.getData);
  console.log("EVENTHERE",props?.getData?.fname);

  // if (typeof(props) != "undefined"){
  //   console.log("THIS IS INSIDE IF",props)
  // const  {fname,lname,email,cname,address,message,phone} = props.getData();}
  // else{
  //   console.log("cvghajhcscvbj");}
  
// console.log("IN TABLE.JS",props);
  return (  
    <section className="intro">
      <div className="bg-image h-100" style={{backgroundColor: "#6095F0"}}>
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div
                  className="card shadow-2-strong"
                  style={{backgroundColor: "#f5f7fa"}}
                >
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-borderless mb-0">
                        <thead>
                          <tr>
                            <th scope="col">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </div>
                            </th>
                            <th scope="col">FNAME</th>
                            <th scope="col">LNAME</th>
                            <th scope="col">COMPANY</th>
                            <th scope="col">PHONE NUMBER</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">DELETE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                
                              </div>
                            </th>
                            <td>{props?.getData?.fname}</td>
                            <td>{props?.getData?.lname}</td>
                            <td>{props?.getData?.cname}</td>
                            <td>{props?.getData?.phone}</td>
                            <td>{props?.getData?.email}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm px-3"
                              >
                                <i className="fas fa-times"></i>
                              </button> 
                            </td>
                          </tr>
                          </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
