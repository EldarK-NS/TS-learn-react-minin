import React, { useState } from 'react'

interface TodoFormProps{
   onAdd(title:string):void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {

   const [title, setTitle] = useState<string>('')

   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value)
   }

   const keypressHandler = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
         props.onAdd(title)
         setTitle('')
      }
   }

   return (
      <div className="input-field mt2">
         <input
            value={title}
            type='text'
            id='title'
            placeholder=' enter todo'
            onChange={changeHandler}
            onKeyPress={keypressHandler}
         />
         <label htmlFor="title" className="active">
            Enter todo
         </label>
      </div>
   )
}
