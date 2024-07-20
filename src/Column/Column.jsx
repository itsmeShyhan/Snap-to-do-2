import Task from "../Task/task"
import { SortableContext } from "@dnd-kit/sortable"
import { verticalListSortingStrategy } from "@dnd-kit/sortable"

function Column({tasks}){

    return(
    <div className='scrollArea'>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}> 
            
            {tasks.map((task) => <Task key={task.id} title={task.title} id={task.id}/>
            
            )}
           
          
        </SortableContext>
    </div>
    )
}

export default Column