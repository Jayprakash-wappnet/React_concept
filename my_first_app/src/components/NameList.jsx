import React from "react";
//import Person from "./Person";

function NameList() {

  const names= ['Bob','John','Martin']

//In below array the value is passed in object form and we access value using key
  // const employee = [
  //   {
  //     id: 11,
  //     name: "Aryan",
  //     skill: "React",
  //   },
  //   {
  //     id: 22,
  //     name: "Jayprakash",
  //     skill: "React",
  //   },
  //   {
  //     id: 33,
  //     name: "Jatin",
  //     skill: "React",
  //   },
  // ];

  const NameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
  // const employeeList = employee.map((emp) => (
    // <Person key={emp.id} emp={emp}></Person>
  // ));
  // return <div>{employeeList}</div>;
  return <div>{NameList}</div>;


}

export default NameList;
