import { useState } from "react";
import Form from "./components/Form/Form";
import Display from "./components/Display/Display";
import './App.css'

function App() {
  const [formState, setFormState] = useState({
    title: '',
    number: 0,
    date: new Date('2020-10-12')
  })

  const onFormChangeHandler = (event) => {
    console.log(event.target.name)

    if (event.target.name === 'text-input') {
      setFormState((prevState) => ({
        ...prevState,
        title: event.target.value
      }))
    }
    else if (event.target.name === 'number-input') {
      setFormState((prevState) => ({
        ...prevState,
        number: event.target.value
      }))
    }

    else if (event.target.name === 'date-input') {
      setFormState((prevState) => ({
        ...prevState,
        date: new Date(event.target.value)
      }))
    }
  }

  const onFormSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formState.title)
  }

  return <div className="app">
    <Display title={formState.title} number={formState.number} date={formState.date} />
    <Form onFormChange={onFormChangeHandler} onSubmit={onFormSubmitHandler} formState={formState}/>
  </div>
}

export default App;
