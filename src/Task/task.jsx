import { useSortable} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Task({title, id}){
    const {attributes, listeners, setNodeRef, transform, transition} = 
    useSortable({id});

    const style = {
      transition,
      transform: CSS.Transform.toString(transform)
    };
    

    return(
    <div 
        
        ref={setNodeRef} 
        style={style}
        {...attributes} 
        {...listeners} 
        className='list'
        key={1}
        >

          {/* Task */}
          {title}

    
        
        </div>
    )
      
  
  }

  export default Task