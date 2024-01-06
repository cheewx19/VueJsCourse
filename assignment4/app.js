const app = Vue.createApp({
    data: function () {
        return {
            classInput: "",
            visible: true,
            colorInput: "",
        };
    },
    computed: {
        classes() {
            return {
                user1: this.classInput === "user1",
                user2: this.classInput === "user2",
                visible: this.visible,
                hidden: !this.visible,
            };
        },
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
    },
});

app.mount("#assignment");
