import React, { useState } from 'react'

export default function EditTask({task, handleUpdateTask}) {
    const [name, setName] = useState(task.title);
    const [desc, setDesc] = useState(task.description);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdateTask(task, {"title": name, "description": desc})
        }}>
            <label htmlFor="">Description:</label>
            <input type="text" placeholder={desc} onChange={e => setDesc(e.target.value)}/>

            <label htmlFor="">Title:</label>
            <input type="text" placeholder={name} onChange={e => setName(e.target.value)}/>
            <button type='submit'>Update</button>
        </form>
  )
}
