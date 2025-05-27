import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export const FormDemo5 = () => {
  const { register, handleSubmit, control,reset } = useForm({
    defaultValues: {
        medicin:[{name:"",dosage:0,frequency:0}]
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "medicin",
  });
  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>MEDICIN FORM</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        
        {fields.map((filed, index) => {
          return (
            <div>
            
              <div>
                <label>NAME</label>
                <input
                  type="text"
                  {...register(`medicin.${index}.name`)}
                ></input>
              </div>
              <div>
                <label>dosage</label>
                <input type="text" {...register(`medicin.${index}.dosage`)}></input>
              </div>
              <div>
                <label>Frequency</label>
                <input type="text" {...register(`medicin.${index}.frequency`)}></input>
              </div>
            </div>
          );
        })}
        
        <input type="submit"></input>
        <button onClick={reset}>reset</button>
      </form>
      <button onClick={()=>{append()}}>ADD</button>
    </div>
  );
};
