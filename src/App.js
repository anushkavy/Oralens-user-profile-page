import { useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: 18,
    fileUpload: "",
  });

  let formDataArr = JSON.parse(localStorage.getItem("formDataArr")) || [];
  function handleSubmitForm(event) {
    event.preventDefault();
    localStorage.setItem(
      "formDataArr",
      JSON.stringify([...formDataArr, formData])
    );

    setFormData({ userName: "", userAge: 18, fileUpload: "" });
  }
  return (
    <div className="App">
      <h1>User Form</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleSubmitForm={handleSubmitForm}
      />
      <h2>User List</h2>
      <div className="users-grid">
        {formDataArr.map((user, index) => (
          <div className="user" key={index}>
            {user.fileUpload && (
              <img src={user.fileUpload} alt={user.userName} />
            )}
            <p>
              <strong>Name:</strong> {user.userName}
            </p>
            <p>
              <strong>Age:</strong> {user.userAge}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
