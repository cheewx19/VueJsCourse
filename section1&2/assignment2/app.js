const app = Vue.createApp({
    data() {
        return {
            keyDownInput: "",
            enterInput: "",
        };
    },
    methods: {
        showAlert() {
            return alert("Hi");
        },
        fillKeyDown(event) {
            this.keyDownInput = event.target.value;
        },
        fillEnter(event) {
            this.enterInput = event.target.value;
        },
    },
});

app.mount("#assignment");
