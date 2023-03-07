---
layout: section
---

# Composition

---
layout: section
---

<v-click>

## Function composition 

operation, that takes two functions: `f` and `g`, and produces a function, that when called with argument `x` is equivalent to calling `f(g(x))`

</v-click>

<v-click>
<div class="grid gap-4 grid-cols-1">

```python
toUpperCase = lambda x: x.upper()
exclaim = lambda x: f'{x}!'
shout = compose(exclaim, toUpperCase)

shout('send in the clowns') # -> "SEND IN THE CLOWNS!"

```
</div>
</v-click>
<v-click>

Unfortunately, by definition `compose` works only on two functions...

</v-click>
<v-click>

## BUT!

</v-click>

---
layout: section
---

<v-click>

## Composition is associative!

`compose(compose(f, g), h)` is the same as `compose(f, compose(g, h))`

it doesn't matter how we group the compositions
</v-click>
<v-click>

## So we can define:

`compose(f, g, h)` as `compose(f, compose(g, h))`

and generalize it to any number of functions!
</v-click>
<v-click>

## Great!
Now we have a very powerful tool, that gives us a very convenient way to "combine" functions!
</v-click>
