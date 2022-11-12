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
