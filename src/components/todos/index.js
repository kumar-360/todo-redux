import React,{useState} from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import ClearIcon from '@material-ui/icons/Clear';


const Todos = ({item,index}) => {
    const [done, setDone] = useState(false);
    const handleCheck = () => {
        setDone(!done);
      };
    return (
        <div>
           <Checkbox checked={done} color="primary" onChange={handleCheck} />
              <p
                className={done === true ? "todoItem-done" : ""}
                style={{ display: "inline-block" }}
              >
                {item}
              </p>
              
        </div>
    );
};

export default Todos;