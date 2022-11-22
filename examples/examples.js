// #region 02. Basic Concepts

const user = {
  name: "MarcinB",
  games: [
    { name: "Counter-Strike", playtime: 20280 },
    { name: "Fall Guys", playtime: 12660 },
    { name: "Overcooked! 2", playtime: 8580 },
  ],
};

// #region Example 1 - calculateTotalHoursPlayed

// #endregion

// #region Example 2 - showHoursPlayed
function toHours(totalMinutes) {
  const hours = totalMinutes / 60;
  const minutes = totalMinutes % 60;
  return `${hours} hour(s) and ${minutes} minute(s)`;
}

// #endregion

// #region Example 3 - Fixed

// #endregion

// #endregion

// #region 03. Higher Order Functions

const songs = [
  { name: "Space Oddity", duration: 304, released: 1972 },
  { name: "Karma Police", duration: 263, released: 1997 },
  { name: "Pictures Of You", duration: 503, released: 1993 },
  { name: "Wonderwall", duration: 280, released: 1995 },
  { name: "Let It Happen", duration: 256, released: 2015 },
  { name: "Where Is My Mind", duration: 216, released: 1988 },
];

// #region Example 1 - getLongest, getShortest, getOldest, getNewest

// #endregion

// #region Example 2 - Fixed

// #endregion

// #region Example 3 - Power of reduce: filter, find, map, (if we have time reverse, reduceRight)

// #endregion

// #region Example 4 - (if we have time) memoize (fib_43, fib_77)

// #endregion

// #endregion

// #region 04. Currying

// #region Example 1 - curry

// #endregion

// #region Example 2 - add,    prop, equals, propsEq,   filter, map, reduce

// #endregion

// #region Example 3 - Task Queue

class TaskQueue {
  subscribers = [];

  constructor() {}

  publish(task) {
    this.subscribers.forEach((subscriber) => {
      subscriber.handlers.reduce((task, handler) => handler(task), task);
    });
  }

  subscribe() {
    const newSubscriber = {
      handlers: [],
    };
    this.subscribers.push(newSubscriber);

    return {
      then(callback) {
        newSubscriber.handlers.push(callback);
        return this;
      },
    };
  }
}
const taskQueue = new TaskQueue();

export const exampleTask = {
  result: "SUCCESS",
  interfaceVersion: "1.0.3",
  requested: "10/17/2013 15:31:20",
  lastUpdated: "10/16/2013 10:52:39",
  tasks: [
    {
      id: 104,
      complete: false,
      priority: "high",
      username: "Scott",
      title: "Do something",
      estimate: 5,
    },
    {
      id: 105,
      complete: false,
      priority: "medium",
      username: "Lena",
      title: "Do something else",
      estimate: 2,
    },
    {
      id: 107,
      complete: true,
      priority: "high",
      username: "Mike",
      title: "Fix the foo",
      estimate: 1,
    },
    {
      id: 108,
      complete: false,
      priority: "low",
      username: "Mike",
      title: "Adjust the bar",
      estimate: 3,
    },
    {
      id: 110,
      complete: false,
      priority: "medium",
      username: "Scott",
      title: "Rename everything",
      estimate: 8,
    },
    {
      id: 110,
      complete: true,
      priority: "medium",
      username: "Scott",
      title: "Deploy",
      estimate: 1,
    },
    {
      id: 112,
      complete: true,
      priority: "high",
      username: "Lena",
      title: "Approve",
      estimate: 13,
    },
  ],
};

setTimeout(() => {
  taskQueue.publish(exampleTask);
}, 1000);

function getIncompleteTasksEstimation_Imperative(username) {
  return taskQueue
    .subscribe()
    .then((data) => {
      return data.tasks;
    })
    .then((tasks) => {
      const filtered = [];
      for (const task of tasks) {
        if (task.username === username) {
          filtered.push(task);
        }
      }
      return filtered;
    })
    .then((userTasks) => {
      const filtered = [];
      for (const task of userTasks) {
        if (task.complete === false) {
          filtered.push(task);
        }
      }
      return filtered;
    })
    .then((userIncompleteTasks) => {
      const mapped = [];
      for (const task of userIncompleteTasks) {
        mapped.push(task.estimate);
      }
      return mapped;
    })
    .then((estimates) => {
      let acc = 0;
      for (const estimate of estimates) {
        acc += estimate;
      }
      return acc;
    })
    .then((result) => {
      console.log(result);
    });
}

// getIncompleteTasksEstimation_HigherOrder

// getIncompleteTasksEstimation_Currying
// #endregion

// #region Example 4 - (if we have time) translate, uncurry can be useful too
function retrieveTranslations(language) {
  function expensiveOperation() {
    let _i = 0;
    for (let i = 0; i < 5000000000; i++) _i++;
  }

  expensiveOperation();
  const pl = {
    cat: "kot",
    dog: "pies",
    guinea_pig: "swinka morska",
  };
  const translations = { pl };

  return translations[language];
}

// #endregion

// #endregion

// #region 05. Composition

// #region Example 1 - simpleCompose, associativity (head, toUpperCase, exclaim)

// #endregion

// #region Example 2 - general compose, pipe

// #endregion

// #region Example 3 - scottIncompleteTasksEstimation_Compose, scottIncompleteTasksEstimation_Pipe

// #endregion

// #region Example 4 - (if we have time) composition and pipe using reduce and reduceRight

// #endregion

// #endregion

// #region 06. Functors

// #region Example 0 - (if we have time) Maybe without a Functor

// #endregion

// #region Example 1 - Maybe Functor (also called Optional) --- Maybe.Just, Maybe.Nothing, map

// #endregion

// #region Example 2 - Maybe Monad --- from -> unsafeUnwrapValue -> getOrElse -> chain

// #endregion

// #region Example 3 - getFirstIncompleteTaskAssignee

function getFirstIncompleteTaskAssignee_Imperative1(message) {
  if (message.tasks) {
    const incompleteTasks = message.tasks.filter(
      (task) => task.complete === false
    );
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
  const incompleteTasks = message.tasks.filter(
    (task) => task.complete === false
  );
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

// #endregion
