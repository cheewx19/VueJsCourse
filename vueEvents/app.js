const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            lastName: "",
            confirmedName: "",
        };
    },
    watch: {
      counter(value) {
        if (value > 50) this.counter = 0
      }
    },
    computed: {
        fullName() {
            if (this.name === "" || this.lastName === "") return "";
            return this.name + " " + this.lastName;
        },
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        submitForm(event) {
            event.preventDefault();
            alert("Submitted!");
        },
        setName(event, lastName) {
            this.name = event.target.value;
        },
        add(num) {
            this.counter = this.counter + num;
        },
        minus(num) {
            this.counter = this.counter - num;
        },
        resetInput() {
            this.name = "";
        },
    },
});

app.mount("#events");
