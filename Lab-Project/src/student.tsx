import React, { useState } from "react";

type FormValues = {
  id: number;
  studentid: string;
  firstname: string;
  lastname: string;
  point: number;
};

const initialFormValues: FormValues = {
  id: 0,
  studentid: "",
  firstname: "",
  lastname: "",
  point: 0,
};

const student = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [data, setData] = useState<FormValues[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log(data);
    

    setData([...data, { ...formValues, id: Date.now() }]);
    
    setFormValues(initialFormValues);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          onChange={handleInputChange}
          value={formValues.firstname}
          placeholder="Name"
        />
        <input
          type="text"
          name="lastname"
          onChange={handleInputChange}
          value={formValues.lastname}
          placeholder="Lastname"
        />
        <input
          type="text"
          name="studentid"
          onChange={handleInputChange}
          value={formValues.studentid}
          placeholder="Student ID"
        />
        <input
          type="text"
          name="point"
          onChange={handleInputChange}
          value={formValues.point}
          placeholder="Point"
        />
        <button type="submit">Submit</button>
      </form>

      {data.map((item, index) => (
        <>
          <div key={index}>
            <p>Firstname: {item.firstname}</p>
            <p>Lastname: {item.lastname}</p>
            <p>Student ID: {item.studentid}</p>
            <p>{"Point: "+item.point}</p>
            <p>
              Grade:{" "}
              {item.point >= 80
                ? "A"
                : item.point >= 70
                ? "B"
                : item.point >= 60
                ? "C"
                : item.point >= 50
                ? "D"
                : "F"}
            </p>
            
          </div>
        </>
      ))}
    </>
  );
};

export default student;
