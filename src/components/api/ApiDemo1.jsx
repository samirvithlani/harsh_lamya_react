import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { Slide, toast, ToastContainer } from "react-toastify";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(false);
  const getAPi = async () => {
    setloading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res);
    console.log(res.data);
    console.log(res.data.message);
    console.log(res.data.data);
    setusers(res.data.data);
    setloading(false);
  };
  useEffect(() => {
    getAPi();
  }, []);

  const deleteUser = async (id) => {
    //delete
    const res = await axios.delete(
      `https://node5.onrender.com/user/user/${id}`
    );
    //res -->axios object...
    console.log(res);
    //status 204 --->
    if (res.status == 204) {
      // alert("record deleted...")
      toast.success("user deleted successfully..");
      getAPi();
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <h1>API DEMO 1</h1>
      {/* {
            loading&&<h1>Loading...</h1>
        } */}
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
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
