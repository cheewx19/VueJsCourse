const app = Vue.createApp({
    data() {
        return {
            enteredTask: "",
            tasks: [],
            showTask: true,
        };
    },
    computed: {
      caption() {
        return this.showTask ? 'Hide List' : 'Show List'
      }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        toggle() {
            this.showTask = !this.showTask;
        },
    },
});

app.mount("#assignment");
