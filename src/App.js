import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Input from "./Input";
import Person from "./models/Person";

export default function App(props) {
  const [isTrue, setIsTrue] = useState(true);
  const [crowd, setCrowd] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState("");
  // refs
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const dobRef = useRef(null);

  function toggleTrue() {
    setIsTrue(!isTrue);
  }

  useEffect(() => {
    console.log("useEffect fired!");

    let people = [
      new Person(1, "Alice", 30, "1993-05-15"),
      new Person(2, "Bob", 25, "1998-08-20"),
      new Person(3, "Charlie", 35, "1988-12-10"),
    ];
    setCrowd(people);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    addPerson(name, age, dob);
  }

  function addPerson(name, age, dob) {
    let newPerson = new Person(crowd.length + 1, name, age, dob);
    let newList = [...crowd, newPerson];
    const sortedList = newList.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    setCrowd(sortedList);

    setName("");
    setAge(0);
    setDob("");

    nameRef.current.value = "";
    ageRef.current.value = 0;
    dobRef.current.value = "";
  }

  return (
    <>
      <hr />
      <h1 className="h1-red">{props.msg}</h1>
      <hr />
      {isTrue && (
        <>
          <p>The current value of isTrue is true</p>
          <hr />
        </>
      )}
      <hr />
      {isTrue ? <p>Is true</p> : <p>Is false</p>}
      <hr />
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
        Toggle is true
      </a>
      <hr />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Input
          title="Name"
          type="text"
          className="form-control"
          name="name"
          autoComplete="name-new"
          onChange={(event) => setName(event.target.value)}
          ref={nameRef}
        />
        <Input
          title="Age"
          type="number"
          className="form-control"
          name="age"
          autoComplete="age-new"
          onChange={(event) => setAge(event.target.value)}
          ref={ageRef}
        />
        <Input
          title="Date of Birth"
          type="date"
          className="form-control"
          name="dob"
          autoComplete="dob-new"
          onChange={(event) => setDob(event.target.value)}
          ref={dobRef}
        />
        <input type="submit" className="btn btn-primary my-3" value="Submit" />
      </form>
      <div>
        <h3>Current Values</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Date of Birth: {dob}</p>
      </div>
      <hr />
      <h3>People</h3>
      <ul className="list-group">
        {crowd.map((m) => (
          <li className="list-group-item" key={m.id}>
            {m.name} is {m.age} years old and was born on {m.dob}
          </li>
        ))}
      </ul>
    </>
  );
}
