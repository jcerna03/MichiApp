Vue.createApp({
  data() {
    return {
      michis: [],
      michi: "",
      styleStatus: "",
      link: "https://www.vuejs.org/",
      idVisible: false,
    };
  },
  watch: {
    status(value) {
      if (value === "Complete") {
        this.link = "https://www.facebook.com/";
        this.styleStatus = "complete";
      } else {
        this.link = "https://www.vuejs.org/";
        this.styleStatus = "";
      }
    },
  },
  computed: {
    status() {
      return this.michis.length === 5 ? "Complete" : "Add More";
    },
  },
  methods: {
    toggle() {
      this.idVisible = !this.idVisible;
    },
    randomRange(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
    addMichi() {
      if (this.status === "Complete") return;
      this.michis.push({ id: Date.now(), name: this.michi });
      this.michi = "";
    },
    selectMichi(idx) {
      this.$refs.element[idx].className =
        this.$refs.element[idx].className === "" ? "complete" : "";
    },
    removeMichi(idx) {
      this.michis.splice(idx, 1);
    },
  },
}).mount("html");

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
