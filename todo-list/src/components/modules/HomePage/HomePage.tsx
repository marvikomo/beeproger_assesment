import React, { useState, useEffect } from "react";

import TodoList from "@components/organisms/LandingPage/TodoList/TodoList";
import {ItemsApi, createConfiguration, Items, UpdateShoppingListRequest, CreateShoppingListRequest} from "client"
const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);

  const HomePage = () => {
    const [todoList, setTodoList] = useState<Items[]>([]);
    useEffect(() => {
      retriveTodoList()
    }, [])

  const retriveTodoList = async () => {
    try{
    let todos = await apiInstance.retriveTodoList()
    await setTodoList(todos)
    console.log("list", todoList)
    }catch(err){
      console.log(err)
    }
  }

  const deleteTodoList = async (id: string) => {
    try{
      await apiInstance.deleteTodoShoppingList(id);
      retriveTodoList()

    }catch(err){

    }
  }

  const createShoppingList = async(body: CreateShoppingListRequest) => {
    try{
      await apiInstance.createShoppingList(body)
      retriveTodoList()
    }catch(err){

    }
  }

  const completeTodoList = async (id: string) => {
    try{
      let result = await apiInstance.markTodoListAsCompleted(id);
      retriveTodoList()
    }catch(err){
      console.log(err)
    }
  }

  const updateTodoList = async (id: string, body:UpdateShoppingListRequest) => {
    let result = await apiInstance.updateTodoShoppingList(id, body);
    retriveTodoList()
  }


  return (
    <div className="">
      <div className="max-w-[90rem] mx-auto">
        <TodoList todoList={todoList} deleteTodoList={deleteTodoList} completeTodoList= {completeTodoList} updateTodoList={updateTodoList} createShoppingList={createShoppingList}/>
      </div>
    </div>
  );
};

export default HomePage;
