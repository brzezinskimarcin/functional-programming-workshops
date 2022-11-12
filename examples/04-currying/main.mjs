// #region Example 1 - curry

// #endregion





// #region Example 2 - add,    prop, equals, propsEq,   filter, map, reduce

// #endregion





// #region Example 3 - Task Queue

class TaskQueue {
  subscribers = [];

  constructor() {

  }

  publish(task) {
    this.subscribers.forEach((subscriber) => {
      subscriber.handlers.reduce(((task, handler) => handler(task)), task);
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
      }
    };
  }
}
const taskQueue = new TaskQueue();


export const exampleTask = {
  result: 'SUCCESS',
  interfaceVersion: '1.0.3',
  requested: '10/17/2013 15:31:20',
  lastUpdated: '10/16/2013 10:52:39',
  tasks: [
    { id: 104, complete: false, priority: 'high', username: 'Scott', title: 'Do something', estimate: 5 },
    { id: 105, complete: false, priority: 'medium', username: 'Lena', title: 'Do something else', estimate: 2 },
    { id: 107, complete: true, priority: 'high', username: 'Mike', title: 'Fix the foo', estimate: 1 },
    { id: 108, complete: false, priority: 'low', username: 'Mike', title: 'Adjust the bar', estimate: 3 },
    { id: 110, complete: false, priority: 'medium', username: 'Scott', title: 'Rename everything', estimate: 8 },
    { id: 110, complete: true, priority: 'medium', username: 'Scott', title: 'Deploy', estimate: 1 },
    { id: 112, complete: true, priority: 'high', username: 'Lena', title: 'Approve', estimate: 13 },
  ],
};

setTimeout(() => {
  taskQueue.publish(exampleTask);
}, 1000);

function getIncompleteTasksEstimation_Imperative(username) {
  return taskQueue.subscribe()
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
    }).then((result) => {
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
    cat: 'kot',
    dog: 'pies',
    guinea_pig: 'swinka morska',
  };
  const translations = { pl };

  return translations[language];
}

// #endregion
