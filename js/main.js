// console.log("Vue OK", Vue);

const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
});


app.mount("#root");