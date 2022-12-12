import React, {useState} from 'react';
import './App.css';
import AddForm from "./components/AddForm.js";
import RenderNotes from "./components/RenderNotes.js";

function App() {

  //const [text, setText] = useState("")
  const [text, setText] = useState({})
  const [textArr, setTextArr] = useState([])

  const handleChange = e => {
    setText(prevText => prevText = {id: textArr.length, text: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    setTextArr(prevArr => [...prevArr, text])
    /*console.log(text)
    console.log(textArr)*/
    e.target.reset();
  }

  const handleDelete = e => {
    const itemToDelete = e.target.closest("div")
        textArr.filter(note => note.className !== itemToDelete.className)
  }
  
  return (
    <div className="crud-app">
      <AddForm
        newText={e => handleChange(e)}
        addText={e => handleSubmit(e)}/>

      <RenderNotes data={textArr} onDelete={e => handleDelete(e)} />
    </div>
  );
}

export default App;
