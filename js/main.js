// console.log("Vue OK", Vue);

const app = Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            image: "./img/d3de2d626c552b1294f172712937c0e5.jpg"
        }
    }
});


app.mount("#root");