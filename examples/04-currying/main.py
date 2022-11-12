#region Example 1 - curry

#endregion





#region Example 2 - add,    prop, equals, propsEq,   filter, map, reduce

#endregion





#region Example 3 - getIncompleteTasksEstimation

class TaskQueue:
  def __init__(self):
    self.subscribers = []
  
  def publish(self, task):
    for subscriber in self.subscribers:
      reduce(lambda task, handler: handler(task), task, subscriber['handlers'])
  
  def subscribe(self):
    newSubscriber = {
      'handlers': []
    }
    self.subscribers.append(newSubscriber)

    class Subscriber:
      def then(self, callback):
        newSubscriber['handlers'].append(callback)
        return self

    return Subscriber()

taskQueue = TaskQueue()


exampleTask = {
  'result': 'SUCCESS',
  'interfaceVersion': '1.0.3',
  'requested': '10/17/2013 15:31:20',
  'lastUpdated': '10/16/2013 10:52:39',
  'tasks': [
    { 'id': 104, 'complete': False, 'priority': 'high', 'username': 'Scott', 'title': 'Do something', 'estimate': 5 },
    { 'id': 105, 'complete': False, 'priority': 'medium', 'username': 'Lena', 'title': 'Do something else', 'estimate': 2 },
    { 'id': 107, 'complete': True, 'priority': 'high', 'username': 'Mike', 'title': 'Fix the foo', 'estimate': 1 },
    { 'id': 108, 'complete': False, 'priority': 'low', 'username': 'Mike', 'title': 'Adjust the bar', 'estimate': 3 },
    { 'id': 110, 'complete': False, 'priority': 'medium', 'username': 'Scott', 'title': 'Rename everything', 'estimate': 8 },
    { 'id': 110, 'complete': True, 'priority': 'medium', 'username': 'Scott', 'title': 'Deploy', 'estimate': 1 },
    { 'id': 112, 'complete': True, 'priority': 'high', 'username': 'Lena', 'title': 'Approve', 'estimate': 13 },
  ],
}

from threading import Timer

after1Second = Timer(1.0, taskQueue.publish, [exampleTask])
after1Second.start()

def getIncompleteTasksEstimation_Imperative(username):
  def getUserTasks(tasks):
    filtered = []
    for task in tasks:
      if task['username'] == username:
        filtered.append(task)
    return filtered

  def getUserIncompleteTasks(userTasks):
    filtered = []
    for task in userTasks:
      if task['complete'] == False:
        filtered.append(task)
    return filtered

  def getEstimates(userIncompleteTasks):
    mapped = []
    for task in userIncompleteTasks:
      mapped.append(task['estimate'])
    return mapped

  def getResult(estimates):
    acc = 0
    for estimate in estimates:
      acc += estimate
    return acc

  return taskQueue.subscribe() \
    .then(lambda data: data['tasks']) \
    .then(getUserTasks) \
    .then(getUserIncompleteTasks) \
    .then(getEstimates) \
    .then(getResult) \
    .then(print)

#endregion


#region Example 4 - (if we have time) translate, uncurry can be useful too

def retrieveTranslations(language):
  def expensiveOperation():
    _i = 0;
    for i in range(100000000):
      _i += 1

  expensiveOperation()
  pl = {
    'cat': 'kot',
    'dog': 'pies',
    'guinea_pig': 'swinka morska',
  }
  translations = { 'pl': pl }

  return translations[language]

#endregion
