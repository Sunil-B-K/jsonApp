import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3036/user/" + id)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      <div className="container p-5">
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>{data.email}</p>
        <Link to="/" className="btn btn-success btn-lg">
          back
        </Link>
      </div>
    </div>
  );
}

export default Read;
