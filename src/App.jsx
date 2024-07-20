import { useState } from 'react'
import './App.css'
import { closestCenter, closestCorners, DndContext } from '@dnd-kit/core'
// import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
// import { CSS } from '@dnd-kit/utilities'
// import Task from './Task/task'
import Column from './Column/Column'
import { arrayMove } from '@dnd-kit/sortable';

function App() {
  
  const [tasks, setTask] = useState([
    {title: "Finish MAD Viva",id: 1}, 
    {title: "Create PWD Content",id: 2}, 
    {title: "aew",id: 3}
  ]);
  

  const [newTask, setNewTask] = useState("");

  function addTask(){
    tasks.map((task) =>{
      if (!task.title.includes(newTask)){
        const newT = {
          title: newTask,
          id: tasks.length+1
        }

        setTask([...tasks, newT]);
        console.log("added task")
      }
    })
    
  }

  function deleteTask(index){
    setTask(tasks.filter((task, listItemIndex) => listItemIndex != index));
  }

  function moveUpTask(index){

    if (index != 0){
      console.log("IM IN")
      const tempTasks = [...tasks];
      [tempTasks[index], tempTasks[index-1]] = [tempTasks[index-1], tempTasks[index]];
      setTask([...tempTasks]);
    }
  
  }

  function moveDownTask(index){
    if (index != tasks.length -  1){
    const tempTasks = [...tasks];
    [tempTasks[index], tempTasks[index+1]] = [tempTasks[index+1], tempTasks[index]];
    setTask([...tempTasks]);
    }
    
    
  }

  function handleInputChange(event){
    setNewTask(event.target.value);
  }


  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTask((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };


  return (
    <>
    {/* Heading */}
    <h1>Snap To-Do 2 </h1>

    {/* Entering the task */}
    <div id='enterTask'>
      <input type="text" name="" id="textInput" placeholder='Enter your task here...' value={newTask} onChange={handleInputChange}/>
      <button onClick={addTask} id='addBtn'>Add</button>
    </div>

    {/* Tasks */}
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        
        {/* </div> */}
        <Column tasks={tasks} />
     
    </DndContext>
    
    </>
  )
}

export default App
