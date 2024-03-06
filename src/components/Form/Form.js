import React from 'react'
import './Form.css'

const Form = (props) => {
  return (
    <form action="" onChange={props.onFormChange} onSubmit={props.onSubmit}>
      <div className='form-control'>
        <div className='form-control_1'>
          <label>Title</label>
          <input type="text" name='text-input' value={props.formState.title} maxLength={8}/>
        </div>
        <div className='form-control_2'>
          <label>Number</label>
          <input type="number" min="0.01" step="0.01" name='number-input' value={props.formState.number}/>
        </div>
        <div className='form-control_3'>
          <label>Date</label>
          <input type="date" min="2000-01-01" max="2050-12-31" name='date-input' value={props.formState.date}/>
        </div>
      </div>
      <div className='form-actions'>
        <button type='submit' className="add-button">Add Input</button>
      </div>
    </form>
  )
}

export default Form
