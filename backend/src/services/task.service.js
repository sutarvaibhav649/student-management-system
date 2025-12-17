import taskRepository from "../repositories/task.repository.js";

class TaskService{
    //------------ * create task service * -----------------
    async createTask(taskData, userId) {
        if (new Date(taskData.dueDate) < new Date()) {
            throw new Error("Due date cannot be in the past");
        }

        return await taskRepository.create({
            ...taskData,
            user: userId,
        });
    }

    //--------------- * get all task service * --------------
    async getAllTasks(userId) {
        return await taskRepository.getAllByUserId(userId); // CHANGED: from findTaskById to getAllByUserId
    }

    //--------------- * get task by Id * -------------------
    async getTaskById(taskId, userId) {
        const task = await taskRepository.findById(taskId);

        if (!task || task.user.toString() !== userId.toString()) {
            const error = new Error("Task not found");
            error.statusCode = 404;
            throw error;
        }

        return task;
    }

    //---------------- * update task service * -----------------
    async updateTask(taskId, updateData, userId) {
        const task = await taskRepository.findById(taskId);

        if (!task || task.user.toString() !== userId.toString()) {
            const error = new Error("Task not found");
            error.statusCode = 404;
            throw error;
        }

        return await taskRepository.updateById(taskId, updateData);
    }

    //---------------- * delete task service * --------------------
    async deleteTask(taskId, userId) {
        const task = await taskRepository.findById(taskId);

        if (!task || task.user.toString() !== userId.toString()) {
            const error = new Error("Task not found");
            error.statusCode = 404;
            throw error;
        }

        return await taskRepository.deleteById(taskId);
    }
}

export default new TaskService();