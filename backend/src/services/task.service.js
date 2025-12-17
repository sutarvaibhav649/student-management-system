import taskRepository from "../repositories/task.repository.js";

class TaskService{
    //------------ * create task service * -----------------
    async createTask(taskData){
        if(new Date(taskData.dueDate) <= new Date()){
            throw new Error("Due date must be in future")
        }
        return await taskRepository.createTask(taskData);
    }

    //--------------- * get all task service * --------------
    async getAllTask(){
        return await taskRepository.getAllTasks();
    }

    //--------------- * get task by Id * -------------------
    async getTaskById(taskId){
        const task = await task.getTaskById(taskId);
        if(!task){
            throw new Error("Task not found");
        }

        return task;
    }

    //---------------- * update task service * -----------------
    async updateTask(taskId,updatedTask){
        const task = await taskRepository.updateById(taskId,updatedTask);

        if (!task) {
            throw new Error("Task not found");
        }

        return task;
    }

    //---------------- * delete task service * --------------------
    async deleteTask(taskId){
        const taskToDelete = await taskRepository.deleteById(taskId);

         if (!taskToDelete) {
            throw new Error("Task not found");
        }

        return taskToDelete;
    }
}

export default new TaskService;