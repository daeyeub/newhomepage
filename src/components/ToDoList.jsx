import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 70%;
  height: 70%;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;
const ToDo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  border-bottom: 2px solid black;
  padding: 7px;
`;
const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const { register, handleSubmit, setValue } = useForm();
  const onValid = (data) => {
    const toDo = "toDo";
    setValue("toDo", "");
    setToDos([...toDos, { id: Date.now(), text: data.toDo }]);
  };
  const onClick = (id) => {
    const deleteThings = toDos.filter((toDo) => toDo.id !== id);
    setToDos(deleteThings);
  };
  return (
    <Wrapper>
      <div>
        <form onSubmit={handleSubmit(onValid)}>
          <input placeholder="Write to do" {...register("toDo")} />
          <button>Submit</button>
        </form>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id}>
            <span>{toDo.text}</span>
            <button key={toDo.id} onClick={() => onClick(toDo.id)}>
              X
            </button>
          </ToDo>
        ))}
      </div>
    </Wrapper>
  );
};

export default ToDoList;
