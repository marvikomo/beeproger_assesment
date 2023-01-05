import { Form, Formik, FormikHelpers, FormikProps } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

import CustomButton from '@components/atoms/CustomButton/CustomButton'
import CustomLabel from '@components/atoms/CustomLabel/CustomLabel'
import CustomSelect from '@components/atoms/CustomSelect/CustomSelect'
import FormikCustomInput from '@components/atoms/FormikCustomInput/FormikCustomInput'
import {ItemsApi, createConfiguration, Items, CreateShoppingListRequest} from "client"
const configuration = createConfiguration();
const apiInstance = new ItemsApi(configuration);
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ButtonProperties,
  errorMessages,
  formatDate,
  statusOptions,
} from '@shared/libs/helpers'
import { listenerCount } from 'process'

interface AddTaskProps {
    setShowDetails: Function;
    list: any
}

const Details: React.FC<AddTaskProps> = ({ setShowDetails, list }) => {

  return (
    <div className="bg-white p-8 rounded-md">
      <ToastContainer />
      <h4 className="text-20 font-bold text-todoGray-100 my-4 capitalize">
        Todo list Details
      </h4>
      <div>
          <p>Name: {list.name}</p>
          <p>Description: {list.description}</p>
          <p>Amount: {list.amount}</p>
          <p>Status: {list.status}</p>
          <p>Created Date: {formatDate(list.createdAt)}</p>
      </div>

      <div className="flex items-center">
            
              <CustomButton
                customClass="mt-12 !h-[3.75rem] !w-[9.375rem] bg-todoGray-100 border-todoGray-100 hover:!bg-gray-500"
                handleClick={() => setShowDetails(false)}
                size={ButtonProperties.SIZES.big}
                title="CANCEL"
                variant={ButtonProperties.VARIANT.primary.name}
              />
            </div>
    
    </div>
  )
}

export default Details
