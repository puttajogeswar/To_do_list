import React, { useState } from "react";

function Home(){
    const [fname,setFname]=useState("")
    const [display,setDisplay]=useState([])

    function store(e){
        setFname(e.target.value)

    }

    function dis(e){
        e.preventDefault();
        if (fname.trim()!==""){
            setDisplay([...display,fname]);
            setFname("");
        }
    }
   function del(index) {
    const newList = display.filter((_, i) => i !== index);
    setDisplay(newList);
  }
        
    return(
        <div>
            <div className="forms">
                Enter Task<input type="text" value={fname} className="name" onChange={store}/><br />
                <button type="submit" onClick={dis}>Submit</button>
            </div>
        
            <div className="data">
                <ol className="task-list">
                    <li className="task-header">
                    <span className="sno">S.No</span>
                    <span className="name">Task</span>
                    </li>
                    {display.map((item, index) => (
                    <li key={index} className="task-item">
                        <span className="sno">{index + 1}</span>
                        <span className="name" >{item}</span>
                        <span ><button onClick={() => del(index)} className="delete">Delete</button></span>
                    </li>
                    ))}
                </ol>
            </div>

        </div>
    )
}

export default Home;