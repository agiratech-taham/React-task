import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <div className="nav-bar">
      <Sidebar />
    </div>
  );
}
