import React from 'react';

const App = () => {
  const Array_value = [25, 62, 36, 84, 94, 78, 32, 14, 24, 56, 74, 14];
  const Student_data =[
    {
    rollno:1,
    name:"Munendra",
    class:"Eight",
    mob:123758
  },

  {
    rollno:2,
    name:"Muna",
    class:"Highschool",
    mob:123758
  },

  {
    rollno:3,
    name:"Abhi",
    class:"Eight",
    mob:123758
  }

]

  return (
    <center>
      <table border="1 solid black" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Roll-no</th>
            <th>Name_of_Student</th>
            <th>Class</th>
            <th>Contact</th>
          </tr>
        </thead>

        {/* <tbody>
          {Array_value.map((data, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{data}</td>
            </tr>
          ))}
        </tbody> */}

        <tbody>
            {Student_data.map((user) => (
            <tr key={user.rollno}>
              <td>{user.rollno}</td>
              <td>{user.name}</td>
              <td>{user.class}</td>
              <td>{user.mob}</td>
            </tr>
          ))}
            
        </tbody>
      </table>
    </center>
  );
};

export default App;