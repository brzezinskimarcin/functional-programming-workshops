---
layout: section
---

# Functors and Monads

---
layout: section
---

<v-clicks>

What we learned so far is really powerful...


really, really, really powerful...

but we forgot about one small little thing... can you guess what?

<img class="mx-auto pb-2 w-75 align-center" src="/assets/side_effects_return.jpg"/>

## Applications are all about side effects...

</v-clicks>

<!--
But what about, "he who must not be named" in functional programming: _side effects_

We've seen how to write programs which pipe data through a series of pure functions. They are declarative specifications of behaviour.

But what about control flow, error handling, asynchronous actions, state... Applications are all about that!
-->

---

<v-click>

We all know arrays. We can map them:

<div class="grid gap-4 grid-cols-1">

```python
map((name) => len(name), ['Harry', 'Hermiona', 'Ron'])
```

</div>
</v-click>
<v-click>

Array is some kind of _container_ (that holds multiple values).

`map` is a higher-order function, that allows us to perform some other function on that _container_

_Container_ decides how this function is applied.

</v-click>
<v-click>

Maybe we can generalize...?
</v-click>

---
layout: section
---

## Functor is a box

type that implements `map` method (sometimes called `fmap` or `<$>`) and obeys two laws. For functor `F`:

<div class="text-left">
<v-click>

1. Mapping with identity function does not modify the value

<div class="grid gap-4 grid-cols-1">

```python
identity = lambda x: x
ArrayF.of(1, 2, 3).map(identity)
# should contain the same value as:
ArrayF.of(1, 2, 3)
# -> [1, 2, 3]
```

</div>
</v-click>
<v-click>

2. Mapping with `f` and then `g` is the same as mapping with composition `compose(f, g)`

<div class="grid gap-4 grid-cols-1">

```python
double = lambda x: x * 2
inc = lambda x: x + 1
double_and_inc = compose(inc, double)
ArrayF.of(1, 2, 3).map(double).map(inc)
# should contain the same value as F
ArrayF.of(1, 2, 3).map(double_and_inc)
# -> [3, 5, 7]
```

</div>
</v-click>

</div>

---

## Monad is an upgraded box

it is a functor that also implements `chain` method (sometimes called `flatMap` or `>>=`)

<v-click>

- we use `map`, when we want to apply a function, which does not use the fact, that we are working with monad and returns unwrapped value: `(a -> b)`

<div class="grid gap-4 grid-cols-1">

```python
safeHead = lambda x: Maybe.of(x[0])
increment = lambda x: x + 1
safeHead([1, 2, 3]).map(increment) # -> Just(2)
safeHead([]).map(increment) # -> Nothing
```
</div>
</v-click>

<v-click>

- we use `chain`, when we want to apply a function, which uses the fact, that we are working with monad and returns already wrapped value: `(a -> Monad b)`

<div class="grid gap-4 grid-cols-1">

```python
safeHead = lambda x: Maybe.of(x[0])
safeDivide = lambda x:
  x == 0
  ? Maybe.Nothing()
  : Maybe.Just(10 / x)
safeHead([1, 2, 3]).map(safeDivide) # -> Just(Just(1))
safeHead([1, 2, 3]).chain(safeDivide) # -> Just(1)
```
</div>
</v-click>

---

## Monads solve a lot of our problems:

| Monad | Use case |
| :----------- | :----------- |
| Array (List) | working with multiple values |
| Maybe (Optional) | absence of the value (goodbye `null`, `undefined`, etc.) |
| Either | error handling (goodbye exceptions) |
| IO | I/O operations |
| Task / Lazy Promise | asynchronous operations. |
| State | shared state inside chain of functions |
