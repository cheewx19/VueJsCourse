const app = Vue.createApp({
    data() {
        return {
            name: "Reanne",
            age: 25,
            imgLink: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg'
        };
    },
    methods: {
        getRandomNum() {
            return Math.random()
        }
    }
});

app.mount('#assignment')