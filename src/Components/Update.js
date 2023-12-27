import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [inputdata, setinputdata] = useState({
    id: id,
    name: "",
    email: "",
  });
  useEffect(() => {
    axios
      .get("http://localhost:3036/user/" + id)
      .then((res) => setinputdata(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handlefrom = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3036/user/" + id, inputdata).then((res) => {
      alert("data update successfully");
      navigate("/");
    });
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handlefrom}>
          <div>
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              name="id"
              disabled
              className="form-control"
              value={inputdata.id}
              //   onChange={(e) =>
              //     setinputdata({ ...inputdata, name: e.target.value })
              //   }
            />
          </div>
          <div>
            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={inputdata.name}
              onChange={(e) =>
                setinputdata({ ...inputdata, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={inputdata.email}
              onChange={(e) =>
                setinputdata({ ...inputdata, email: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
