const app = new Vue({
    el: '#app',
    data: {
        title: 'Please enter a task',
        tasks: [],
        newTask: '',
    },
    methods: {
        addTask() {
            if (this.newTask !== '') {
                document.getElementById('warning').innerHTML = "";
                this.tasks.push({
                    name: this.newTask,
                    status: false
                });
                this.saveInLocalStorage('tasks-local', this.tasks);
                this.newTask = "";
            }else{
                document.getElementById('warning').innerHTML = `
                <div class="alert alert-warning">
                    Please enter a <strong>task</strong>
                </div>
                `
            }

        },
        taskDone(index) {
            this.tasks[index].status = true;
            this.saveInLocalStorage('tasks-local', this.tasks);
        },
        deleteTask(index) {
            this.tasks.splice(index, 1);
            this.saveInLocalStorage('tasks-local', this.tasks);
        },
        editTask(index) {

        },
        saveInLocalStorage(storageName, varToSave) {
            localStorage.setItem(storageName, JSON.stringify(varToSave));
        }
    },
    created() {
        let db = JSON.parse(localStorage.getItem('tasks-local'));
        console.log(db);
        if (db === null) {
            this.tasks = []
        } else {
            this.tasks = db;
        }
    }
});