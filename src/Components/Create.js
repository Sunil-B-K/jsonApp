import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// let count = 0;
function Create() {
  const inputRef = useRef();
  const inputRef1 = useRef();

  // const [inputdata, setinputdata] = useState({
  //   name: "",
  //   email: "",
  // });
  const navigate = useNavigate();
  const handlefrom = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3036/user", {
        // id: count++,
        name: inputRef.current.value,
        email: inputRef1.current.value,
      })
      .then((res) => {
        alert("data posted successfully");
        navigate("/");
      });
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <form onSubmit={handlefrom}>
          <div>
            <label htmlFor="name">name:</label>
            <input
              type="text"
              name="name"
              ref={inputRef}
              className="form-control"
              // onChange={(e) =>
              //   setinputdata({ ...inputdata, name: e.target.value })
              // }
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              ref={inputRef1}
              className="form-control"
              // onChange={(e) =>
              //   setinputdata({ ...inputdata, email: e.target.value })
              // }
            />
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
