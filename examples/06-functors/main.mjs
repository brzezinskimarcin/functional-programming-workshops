// #region Example 0 - (if we have time) Maybe without a Functor

// #endregion




// #region Example 1 - Maybe Functor (also called Optional) --- Maybe.Just, Maybe.Nothing, map

// #endregion




// #region Example 2 - Maybe Monad --- from -> unsafeUnwrapValue -> getOrElse -> chain

// #endregion




// #region Example 3 - getFirstIncompleteTaskAssignee

function getFirstIncompleteTaskAssignee_Imperative1(message) {
  if (message.tasks) {
    const incompleteTasks = message.tasks.filter((task) => task.complete === false);
    const firstIncompleteTask = incompleteTasks[0];
    if (firstIncompleteTask) {
      const username = firstIncompleteTask.username;
      if (username) {
        return username;
      }
    }
  }
  return null;
}
// console.log(getFirstIncompleteTaskAssignee_Imperative1(exampleTask));

function getFirstIncompleteTaskAssignee_Imperative2(message) {
  if (!message.tasks) {
    return null;
  }
  const incompleteTasks = message.tasks.filter((task) => task.complete === false);
  const firstIncompleteTask = incompleteTasks[0];
  if (!firstIncompleteTask) {
    return null;
  }
  const username = firstIncompleteTask.username;
  if (!username) {
    return null;
  }
  return username;
}
// console.log(getFirstIncompleteTaskAssignee_Imperative2(exampleTask));

// #endregion
