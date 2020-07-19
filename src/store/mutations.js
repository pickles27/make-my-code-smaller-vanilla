export default {
  addEntry(state, payload) {
    state.entries.push(payload);
    return state;
  },
  challengeEntry(state, payload) {
    alert("challenged!!!");
    return state;
  }
};
