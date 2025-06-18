import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { useFetchApi } from "../../hooks/FetchApi";
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ApiDemo2 = () => {
const [show, setshow] = useState(false)
const [singleUser, setsingleUser] = useState({})

  const { data, error, loading, callApi } = useFetchApi(
    "https://node5.onrender.com/user/user"
  );
  const deleteUser = async (id) => {
    //delete
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    console.log(res);

    if (res.status == 204) {
      toast.success("user deleted successfully..");
      callApi();
    }
  };

  const handleClose = ()=>setshow(false)
  const detailUser = async (id) => {
    setshow(true)
    //loader..
    //click  event hook
    const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
//    console.log(res.data.data)
     setsingleUser(res.data.data)
    

  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>API DEMO 2</h1>

      {loading && <Loader />}
      {/* <button onClick={()=>{getAPi()}}>GET</button> */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>STATUS</th>
            <th>password</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.password ? user.password :"NA"}</td>
                <td>{user.isActive ? "ACTIVE" : "NOt active"}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                  >
                    DELETE
                  </button>
                  <button
                    style={{ margin: 2 }}
                    className="btn btn-warning"
                    onClick={() => {
                      detailUser(user._id);
                    }}
                  >
                    DETAIL
                  </button>
                  <Link to={`/updateuser/${user._id}`} className="btn btn-info">UPDATE</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h1>TITLE - User Detail</h1>
        </Modal.Header>
        <Modal.Body>
            <h1>USER NAME ={singleUser.name} </h1>
            <h4>USER AGE = {singleUser.age}</h4>
        </Modal.Body>
      </Modal>
    </div>
  );
};
