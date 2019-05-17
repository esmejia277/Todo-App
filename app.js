const app = new Vue({
    el: '#app',
    data:{
        title: 'Todo application',
        tasks: [],
        newTask : '',
    },
    methods:{
        addTask(){
            this.tasks.push({
                name: this.newTask,
                status: false
            });
            this.newTask = "";
        },
        taskDone(index){
            this.tasks[index].status = true;
        },
        deleteTask(index){
            this.tasks.splice(index, 1);
        }

    }

});