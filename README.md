make my code smaller

- leetcode api? whenever i submit a problem and it's accepted, it can push the code onto the site, OR if this isn't possible then i can just input it on the site
- there should be a news feed or something where the submission can be seen, or a list, with status of read or unread maybe
- if the user clicks on the submission, they go to an editor page that displays the submission, and then has a big code editor window embedded (text area at first maybe? but this is very important to have good formatting, find a library or something, probably this one: https://www.npmjs.com/package/codemirror)
- then maybe have an animation that compares the two line counts
- can save a history of all the code submissions and maybe have an animation that displays all of them, maybe stacked on each other
- to do this will need to persist the data
  - sql or nosql?? idk but probs nosql, maybe mongodb
- languages
  - authentication/authorization

data structure:

user (a person who has an account)

submission (a submitted block of code, the root level)
{
id,
language,
timestampOfSubmission,
submitter, (user)
}

draft (a code block that is currently being edited, not sure how i'm gonna store this yet til i know the code editor library i'm using)
{
id,
language,
timeStampOfCreation,
submitter,

}

- add Jest tests
- add actual tests that the user can add and run
- so that the submitted code needs to pass the same tests
