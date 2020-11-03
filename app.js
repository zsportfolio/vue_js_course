// 2.const app = Vue.createApp({
//   data() {
//     return {
//       courseGoal: 'Finish the course and learn Vue!',
//       vueLink: 'https://vuejs.org/',
//     }
//   },
//   methods: {
//     outputGoal() {
//       return (string = 'My string created by method')
//     },
//   },
// })
// app.mount('#user-goal')

// 1.Vue.createApp({
//   data() {
//     return {
//       goals: [],
//       enteredValue: "",
//     };
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredValue);
//       this.enteredValue = "";
//     },
//   },
// }).mount("#app");

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal)
