import Task from "../models/task.model.js";

class TaskRepository{
    // create task
    async create(taskData){
        return await Task.create(taskData)
    }

    // update task
    async updateById(id, newTaskData){
       return await Task.findByIdAndUpdate(id, newTaskData, {
        new: true,
        runValidators: true,
       })
    }

    // find all tasks
    async getAll(){
        return await Task.find();
    }

    // find all tasks for a specific user
    async getAllByUserId(userId){
        return await Task.find({ user: userId });
    }

    // find task by id
    async findById(id){
        return await Task.findById(id);
    }

    // delete the task by id
    async deleteById(id){
        return await Task.findByIdAndDelete(id);
    }
}

export default new TaskRepository();