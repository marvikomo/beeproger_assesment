import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { MdEdit } from "react-icons/md";

import CustomCheckBox from "@components/atoms/CustomCheckBox/CustomCheckBox";
import CustomModal from "@components/atoms/CustomModal/CustomModal";
import EditTask from "@components/organisms/modals/EditTask/EditTask";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { TaskProps } from "../TodoList/TodoList";
import {ItemsApi, createConfiguration, Items, CreateShoppingListRequest} from "client"
import Details from "@components/organisms/modals/Details/Details";
import { formatDate } from "@shared/libs/helpers";
const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);

interface SingleTodoItemProps {
  list: Items;
  deleteTodoList: any;
  completeTodoList: any;
  updateTodoList: any
}
const SingleTodoItem: React.FC<SingleTodoItemProps> = ({ list, deleteTodoList, completeTodoList, updateTodoList }) => {
  const [showTask, setShowTask] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const _deleteTodoList = async (id:any) => {
      await deleteTodoList(id);
      toast("Task has been deleted", {
        type:"success"
      })
  }

  const _completeTodoList = async (id: any) => {
    await completeTodoList(id);
    toast("Task has been completed", {
      type:"success"
    })
  }
  

  return (
    <>
    <ToastContainer />
      <div className="bg-white flex items-center justify-between p-4 mb-4 cursor-pointer">
        <div className="flex items-center">
          <CustomCheckBox
            className="mt-[1.813rem] "
            labelClassName="text-14 ml-[0.313rem] font-medium whitespace-nowrap"
            shape="square"
            onClick={() => _completeTodoList(list.id)}
            defaultChecked={list.status == "COMPLETED" ? true : false }
            isDisabled={list.status == "COMPLETED" ? true : false }
          />
          <div>
            <img className="w-[50px] h-[60px]" src={list.photo} />
          </div>
          <div className="ml-4">
            <h5 className="font-bold mb-1" onClick={() => setShowDetails(true)}>{list.name}</h5>
            <p>{formatDate(list.createdAt)}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center p-4 cursor-pointer">
            <BsTrash className="h-6 w-12"  onClick={() => _deleteTodoList(list.id)}/>
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <MdEdit className="w-12 h-6" onClick={() => setShowTask(true)} />
          </div>
        </div>
      </div>
      <CustomModal toggleVisibility={setShowTask} visibility={showTask}>
        <EditTask setShowTask={setShowTask} list={list} updateTodoList={updateTodoList}/>
      </CustomModal>
      <CustomModal toggleVisibility={setShowDetails} visibility={showDetails}>
        <Details setShowDetails={setShowDetails} list={list} />
      </CustomModal>
    </>
  );
};

export default SingleTodoItem;
