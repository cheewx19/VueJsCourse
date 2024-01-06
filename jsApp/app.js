Vue.createApp({
    data: function() {
        return {
            goals: [],
            val: ''
        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.val)
        }
    }
}).mount('#app') // select id app div to be controlled by vue

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//     const val = inputEl.value;
//     const listItem = document.createElement("li");
//     listItem.textContent = val;
//     listEl.appendChild(listItem);
//     inputEl.value = ''
// }

// buttonEl.addEventListener("click", addGoal);
