import Task from "../models/task.model.js";

class TaskRepository{
    // create task
    async createTask(taskData){
        return await Task.create(taskData)
    }

    // update task
    async updateById(id,newTaskData){
       return await Task.findByIdAndUpdate(id,newTaskData,{
        new:true,
        runValidators: true,
       })
    }

    // find all task
    async getAllTasks(){
        return await Task.findAll();
    }

    //find task by id
    async findTaskById(id){
        return await Task.findById(id);
    }

    // delete the task by id
    async deleteById(id){
        return await Task.findByIdAndDelete(id);
    }
}

export default new TaskRepository();