#region 02. Basic Concepts

from math import floor
import json

user = {
  'name': 'MarcinB',
  'games': [
    { 'name': 'Counter-Strike', 'playtime': 20280 },
    { 'name': 'Fall Guys', 'playtime': 12660 },
    { 'name': 'Overcooked! 2', 'playtime': 8580 },
  ]
}

#region Example 1 - showHoursPlayedTotal

#endregion

#region Example 2 - showHoursPlayed
def toHours(totalMinutes):
  hours = floor(totalMinutes / 60)
  minutes = totalMinutes % 60
  return f'{hours} hour(s) and {minutes} minute(s)'

#endregion

#region Example 3 - Fixed

#endregion

#endregion

#region 03. Higher Order Functions

songs = [
  { 'name': 'Space Oddity', 'duration': 304, 'released': 1972 },
  { 'name': 'Karma Police', 'duration': 263, 'released': 1997 },
  { 'name': 'Pictures Of You', 'duration': 503, 'released': 1993 },
  { 'name': 'Wonderwall', 'duration': 280, 'released': 1995 },
  { 'name': 'Let It Happen', 'duration': 256, 'released': 2015 },
  { 'name': 'Where Is My Mind', 'duration': 216, 'released': 1988 },
]

#region Example 1 - getLongest, getShortest, getOldest, getNewest

#endregion

#region Example 2 - Fixed

#endregion

#region Example 3 - Power of reduce: filter, find, map (if we have time reverse, reduceRight)

#endregion

#region Example 4 - (if we have time) memoize (fib_37, fib_77)

#endregion

#endregion

#region 04. Currying

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

#endregion

#region 05. Composition

#region Example 1 - simpleCompose, associativity (head, toUpperCase, exclaim)

#endregion

#region Example 2 - general compose, pipe

#endregion

#region Example 3 - scottIncompleteTasksEstimation_Compose, scottIncompleteTasksEstimation_Pipe

#endregion

#region Example 4 - (if we have time) composition and pipe using reduce and reduceRight

#endregion

#endregion

#region 06. Functors

#region Example 0 - (if we have time) Maybe without a Functor

#endregion

#region Example 1 - Maybe Functor (also called Optional) --- Maybe.Just, Maybe.Nothing, map

#endregion

#region Example 2 - Maybe Monad --- from -> unsafeUnwrapValue -> getOrElse -> chain

#endregion

#region Example 3 - getFirstIncompleteTaskAssignee

def getFirstIncompleteTaskAssignee_Imperative1(message):
  if message.get('tasks') is not None:
    incompleteTasks = filter(lambda task: task['complete'] == False, message.get('tasks'))
    firstIncompleteTask = at(0, incompleteTasks)
    if firstIncompleteTask is not None:
      username = firstIncompleteTask.get('username')
      if username is not None:
        return username
  return None
# print(getFirstIncompleteTaskAssignee_Imperative1(exampleTask))

def getFirstIncompleteTaskAssignee_Imperative2(message):
  if message.get('tasks') is None:
    return None
  incompleteTasks = filter(lambda task: task['complete'] == False, message.get('tasks'))
  firstIncompleteTask = at(0, incompleteTasks)
  if firstIncompleteTask is None:
    return None
  username = firstIncompleteTask.get('username')
  if username is None:
    return None
  return username
# print(getFirstIncompleteTaskAssignee_Imperative2(exampleTask))

#endregion

#endregion