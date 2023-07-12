const Tasks = require("../models/tasks");

const create=async(data)=>{
    try{
        const newTask = await Tasks.create(data);
        if(newTask){
            return({message: "Succesfully Added", success: true, response:newTask});
        }else{
            return({message: "Something went wrong!", success: false});
        }
    }catch(err){
        return({message: "Something went wrong!", success: false});
    }
}

const retrieve=async(options)=>{
    try{
        const tasks=await Tasks.findAll(options);
        if(tasks){
            return({message: "Retrieved", success: true, response:tasks});
        }else{
            return({message: "Something went wrong!", success: false});
        }
    }catch(err){
        return({message: "Something went wrong!", success: false});
    }
}

const update=async(obj,where)=>{
    try{        
        console.log(obj, where)
        const utasks= await Tasks.update(obj,{where});
        console.log(utasks);
        if(utasks){
            return({message: "Updated", success: true, response:utasks});
        }else{
            return({message: "Something went wrong!", success: false});
        }
    }catch(err){
        return({message: "Something went wrong!", success: false});
    }
}

const deletes= async(where)=>{
    try{
        const dtasks=await Tasks.destroy(where);
        if(dtasks){
            return({message: "Updated", success: true, response:dtasks});
        }else{
            return({message: "Something went wrong!", success: false});
        }
    }catch(err){
        return({message: "Something went wrong!", success: false});
    }
}

module.exports={create, retrieve, update, deletes}