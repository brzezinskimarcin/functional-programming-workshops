---
layout: section
---

# Currying

---
layout: section
---

<v-click>

## Curried Function

A function that will return a new function until it receives all it's arguments.

</v-click>
<v-click>
<div class="grid gap-4 grid-cols-2">

```javascript
function add(x, y) {
  return x + y;
}

const a = add(1, 2); // 3
```

```python
def add(x, y):
  return x + y


a = add(1, 2) # 3
```

```javascript
function addCurried(x) {
  return function(y) {
    return x + y;
  }
}

const b = addCurried(1)(2); // 3

```

```python
def addCurried(x):
  def addCurriedInner(y):
    return x + y
  return addCurriedInner


b = addCurried(1)(2) # 3

```
</div>
</v-click>
<v-click>

## Why the hell would we do that?

</v-click>
<v-click>

It allows us to perform partial application, making it possible to save some of the arguments to the function.

</v-click>

---
layout: section
---

<v-click>

## Partial application

Giving a function fewer arguments than it expects.

</v-click>
<v-click>
<div class="grid gap-4 grid-cols-2">

```javascript
function add(x, y) {
  return x + y;
}

function increment(x) {
  return add(1, x);
}

function decrement(x) {
  return add(-1, x);
} // we need to redeclare functions...
```

```python
def add(x, y):
  return x + y


def increment(x):
  return add(1, x)


def decrement(x):
  return add(-1, x)
# we need to redeclare functions...
```


```javascript
function addCurried(x) {
  return function(y) {
    return x + y;
  }
}
const incrementCurried = addCurried(1); // one-liner!
const decrementCurried = addCurried(-1);

```



```python
def addCurried(x):
  def addCurriedInner(y):
    return x + y
  return addCurriedInner

incrementCurried = addCurried(1) # one-liner!
decrementCurried = addCurried(-1)
```
</div>
</v-click>

---
layout: section
---

<v-click>

## curry 

a higher-order function, that transforms normal function to a curried function

</v-click>
<v-click>
<div class="grid gap-4 grid-cols-2">

```javascript
const curriedAdd = curry((x, y, z) => x + y + z);

curriedAdd(1, 2, 3); // 6
curriedAdd(1, 2)(3); // 6
curriedAdd(1)(2, 3); // 6
curriedAdd(1)(2)(3); // 6

```

```python
curriedAdd = curry(lambda x, y, z: x + y + z)

curriedAdd(1, 2, 3) # 6
curriedAdd(1, 2)(3) # 6
curriedAdd(1)(2, 3) # 6
curriedAdd(1)(2)(3) # 6

```
</div>
</v-click>

---
layout: section
---

<v-click>

### Order of function parameters matters!

First provide these, that might be worth saving for later use.

</v-click>
<v-click>
<div class="grid gap-4 grid-cols-2">

```javascript
// (probably) wrong
function filter(arr, predicate) { /* ... */ }

function inRange(val, minimum, maximum) { /* ... */ }


// (probably) better
function filter(predicate, arr) { /* ... */ }

const _filter = curry(filter);

function inRange(min, max, val) { /* ... */ }

const _inRange = curry(inRange);

const betweenZeroAndHundred = _filter(_inRange(0, 100));
betweenZeroAndHundred([1, 200, 3, -5, 40]); // -> [1, 3, 40]
betweenZeroAndHundred([100, 200, 300]); // -> []

```

```python
# (probably) wrong
def filter(arr, predicate):
  pass
def inRange(val, minimum, maximum):
  pass

# (probably) better
def filter(predicate, arr):
  pass
_filter = curry(filter)

def inRange(min, max, val):
  pass
_inRange = curry(inRange)

betweenZeroAndHundred = _filter(_inRange(0, 100))
betweenZeroAndHundred([1, 200, 3, , -5, 40]) # -> [1, 3, 40]
betweenZeroAndHundred([100, 200, 300]) # -> []

```
</div>
</v-click>

<!--

Bonus for Python: You can use "curry" HOF as decorator!
-->
