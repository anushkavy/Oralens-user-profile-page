export default function Form({ formData, setFormData, handleSubmitForm }) {
  // Function to handle all the changes in the form inputs
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  //   Function to handle file uploads by converting them to Base64 code to save into local storage
  function handleFileChange(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.addEventListener("load", () => {
      const res = reader.result;
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          fileUpload: res,
        };
      });
    });
  }

  //   For creating age Dropdown
  let ageArray = Array.from({ length: 100 });

  return (
    <form onSubmit={handleSubmitForm}>
      <div>
        <label htmlFor="userName">Name</label>
        <input
          type="text"
          id="userName"
          onChange={handleChange}
          name="userName"
          value={formData.userName}
          placeholder="Enter your name"
        />
      </div>

      <div className="create-event-form-labelInput">
        <label htmlFor="userAge">Age</label>

        <select
          id="userAge"
          name="userAge"
          value={formData.userAge}
          onChange={handleChange}
        >
          {ageArray.map((value, index) => {
            return (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            );
          })}
        </select>
      </div>

      <div className="create-event-form-labelInput">
        <label htmlFor="fileUpload">Upload Profile Picture</label>
        <input
          type="file"
          id="fileUpload"
          onChange={handleFileChange}
          name="fileUpload"
        />
      </div>

      <button type="submit" className="create-event-saveBtn fs16 fw400 white">
        Save
      </button>
    </form>
  );
}
