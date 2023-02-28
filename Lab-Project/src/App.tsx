import React, { useState } from "react";

type FormValues = {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  gender : string;
};

const initialFormValues: FormValues = {
  id: 0,
  firstname: "",
  lastname: "",
  age: 0,
  gender: "",
};

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [data, setData] = useState<FormValues[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (editIndex !== null) {
      // Update existing data
      const updatedData = [...data];
      updatedData[editIndex] = formValues;
      setData(updatedData);
      setEditIndex(null);
    } else {
      // Add new data
      setData([...data, { ...formValues, id: Date.now() }]);
    }

    setFormValues(initialFormValues);
  };

  const handleEdit = (index: number): void => {
    setFormValues(data[index]);
    setEditIndex(index);
  };

  const handleDelete = (index: number): void => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={formValues.firstname}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="lastname"
          value={formValues.lastname}
          onChange={handleInputChange}
          placeholder="Lastname"
        />
        <input
          type="number"
          name="age"
          value={formValues.age}
          onChange={handleInputChange}
          placeholder="Age"
        />
        <input
          type="text"
          name="gender"
          value={formValues.gender}
          onChange={handleInputChange}
          placeholder="gender"
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

    <br />

      <div style={{textAlign: "center", justifyContent: "center", }}>
      <table style={{ border: "1px solid black", borderCollapse: "collapse", marginLeft: "auto", marginRight: "auto"   }}>
        <tr style={{ border: "1px solid black", borderCollapse: "collapse" }}>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>First name</th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>Last name</th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>Age</th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>gender</th>
          <th style={{ border: "1px solid black", borderCollapse: "collapse" }}>Action</th>
        </tr>

        {data.map((item, index) => (
          <>
            <tr key={item.id} style={{ border: "1px solid black", borderCollapse: "collapse" }}>
              <td style={{ border: "1px solid black", borderCollapse: "collapse" }}>{item.firstname}</td>
              <td style={{ border: "1px solid black", borderCollapse: "collapse" }}>{item.lastname}</td>
              <td style={{ border: "1px solid black", borderCollapse: "collapse" }}>{item.age}</td>
              <td style={{ border: "1px solid black", borderCollapse: "collapse" }}>{item.gender}</td>
              <td style={{ border: "1px solid black", borderCollapse: "collapse" }}>
                <button type="button" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          </>
        ))}
      </table>
      </div>
    </div>
  );
};

export default Form;
