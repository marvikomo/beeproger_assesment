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
  statusOptions,
} from '@shared/libs/helpers'

interface AddTaskProps {
  setShowTask: Function;
  createShoppingList: any
}

const AddTask: React.FC<AddTaskProps> = ({ setShowTask, createShoppingList }) => {
  const [file, setFile] = useState<any>('')

  const initialState = {
    name: '',
    description: '',
    amount: '',
  }

  interface Values {
    name: string
    description: string
    amount: string
  }

  const addTaskSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required(errorMessages.required),
    description: Yup.string()
      .required('Required')
      .required(errorMessages.required),
    amount: Yup.string().required(errorMessages.required),
  })

  const handleSubmit = async (
    values: Values,
    actions: FormikHelpers<Values>,
  ) => {
    try{
    // todo
    const formData = new FormData();
    formData.append("upload_preset", "piqm4m2l")
    formData.append("file", file);
    const data = await fetch('https://api.cloudinary.com/v1_1/dcucinpio/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());
  

    let body: CreateShoppingListRequest = {
      name: values.name,
      description: values.description,
      amount: +values.amount,
      photo: data.secure_url

    }
     await createShoppingList(body)
     setShowTask(false)
     toast("List added successfully", {
       type: "success"
     })
    }catch(err){
      setShowTask(false)
      toast("Something went wrong", {
        type: "error"
      })
    }
  }

  const handleFile = async (e: any) => {
    e.preventDefault()
    const fileInput: any = document.getElementById('photo')
    const file = fileInput.files[0]
    setFile(file);
   
  }

  return (
    <div className="bg-white p-8 rounded-md">
      <ToastContainer />
      <h4 className="text-20 font-bold text-todoGray-100 my-4 capitalize">
        add todo
      </h4>
      <Formik
        enableReinitialize
        initialValues={initialState}
        onSubmit={handleSubmit}
        validationSchema={addTaskSchema}
      >
        {(props: FormikProps<Values>) => (
          <Form>
            <div className="relative">
              <div>
                <CustomLabel
                  className="mb-[0.438rem] text-todoGray-100 text-14 font-bold"
                  title="Name"
                />

                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                  container="tablet:px-6"
                  inputClassName="placeholder:text-xs border-black"
                  name="name"
                  placeholder="Enter Name"
                  type="text"
                />
              </div>
              <div>
                <CustomLabel
                  className="mb-[0.438rem] text-todoGray-100 text-14 font-bold"
                  title="Description"
                />

                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                  container="tablet:px-6"
                  inputClassName="placeholder:text-xs border-black"
                  name="description"
                  placeholder="Enter description"
                  type="text"
                />
              </div>
              <div>
                <CustomLabel
                  className="mb-[0.438rem] text-todoGray-100 text-14 font-bold"
                  title="Photo"
                />

                <input
                  type="file"
                  name="photo"
                  onChange={handleFile}
                  id="photo"
                />
              </div>
              <div>
                <CustomLabel
                  className="mb-[0.438rem] text-todoGray-100 text-14 font-bold"
                  title="Amount"
                />

                <FormikCustomInput
                  className="border border-glass-450 rounded-[0.313rem] h-[3.75rem] mr-4 mt-2 "
                  container="tablet:px-6"
                  inputClassName="placeholder:text-xs border-black"
                  name="amount"
                  placeholder="Enter amount"
                  type="text"
                />
              </div>
            </div>
            <div className="flex items-center">
              <CustomButton
                customClass="mt-12 !h-[3.75rem] !w-[9.375rem] mr-8"
                handleClick={() => {}}
                // isDisabled={loading}
                // isSubmitting={loading}
                size={ButtonProperties.SIZES.big}
                title="ADD TASK"
                type="submit"
                variant={ButtonProperties.VARIANT.primary.name}
              />
              <CustomButton
                customClass="mt-12 !h-[3.75rem] !w-[9.375rem] bg-todoGray-100 border-todoGray-100 hover:!bg-gray-500"
                handleClick={() => setShowTask(false)}
                size={ButtonProperties.SIZES.big}
                title="CANCEL"
                variant={ButtonProperties.VARIANT.primary.name}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddTask
