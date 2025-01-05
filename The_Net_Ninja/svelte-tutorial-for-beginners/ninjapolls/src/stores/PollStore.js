import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: 'Python or JavaScript?',
    answerA: 'Python',
    answerB: 'JavaScript',
    votesA: 9,
    votesB: 15,
  },
  {
    id: 2,
    question: 'Left or right?',
    answerA: 'Left',
    answerB: 'Right',
    votesA: 4,
    votesB: 1,
  },
]);

export default PollStore;