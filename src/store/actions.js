export default {
  addEntry(context, payload) {
    context.commit("addEntry", payload);
  },
  challengeEntry(context, payload) {
    context.commit("challengeEntry", payload);
  }
};
