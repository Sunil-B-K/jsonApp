import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Create from "./Create";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Link } from "react-router-dom";

function Home() {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3036/user");
  //       setdata(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3036/user")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className=""> JSON_curd Operation</h1>
      <br />
      <Link to="/create" className="btn btn-success btn-lg">
        create+
      </Link>
      <table className="table table-striped table-dark">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>
                <Link to={`update/${d.id}`} className="btn btn-secondary">
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={(e) => handdledelete(d.id)}
                >
                  delete
                </button>
                <Link to={`read/${d.id}`} className="btn btn-info">
                  read
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Create /> */}
    </div>
  );

  function handdledelete(id) {
    const confrim = window.confirm("do you like delete?");
    if (confrim) {
      axios.delete("http://localhost:3036/user/" + id).then((res) => {
        alert("data deleted successfully");
        navigate("/");
      });
    }
  }
}

export default Home;
