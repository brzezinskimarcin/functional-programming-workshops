---
layout: section
---

# Higher-order functions

---
layout: section
---

<v-click>

## First Class Functions 

feature of programming language, thanks to which functions in that language are treated like any other variable.

</v-click>

<div class="my-25"></div>

<v-click>

## Higher order function

function that does at least one of the following: accepts another function as parameter, or returns a function as its result

</v-click>


---
layout: section
---

<div class="text-left">
<v-clicks>
<div>
Reduce function:
<div class="grid gap-4 grid-cols-2">

```js
[3, 7, 31, 127].reduce((acc, item) => acc + item, 0);
```

```python
reduce(lambda acc, item: acc + item, [3, 7, 31, 127], 0)
```

</div>
</div>
<div>

How it works:
<img  class="pt-2" src="/assets/reduce.gif"/>

</div>
</v-clicks>
</div>

---
layout: section
---

<v-click>

## Point free style 

coding style, where caller does not pass arguments explicitly to a function

</v-click>
<v-click>
<div class="grid gap-4 grid-cols-2">

```javascript
function isReleasedIn90s(song) {
  return 1990 <= song.released && song.released <= 1999;
}

const songs = [
  { name: 'Space Oddity', released: 1972 },
  { name: 'Karma Police', released: 1997 },
  { name: 'Pictures Of You', released: 1993 },
  { name: 'Wonderwall', released: 1995 },
  { name: 'Let It Happen', released: 2015 },
  { name: 'Where Is My Mind', released: 1988 },
];

// Normal
filter((song) => isReleasedIn90s(song), songs);

// Point free style
filter(isReleasedIn90s, songs);

```

```python
def isReleasedIn90s(song):
  return 1990 <= song['released'] and song['released'] <= 1999


songs = [
  { 'name': 'Space Oddity', 'released': 1972 },
  { 'name': 'Karma Police', 'released': 1997 },
  { 'name': 'Pictures Of You', 'released': 1993 },
  { 'name': 'Wonderwall', 'released': 1995 },
  { 'name': 'Let It Happen', 'released': 2015 },
  { 'name': 'Where Is My Mind', 'released': 1988 },
]

# Normal
filter(lambda song: isReleasedIn90s(song), songs)

# Point free style
filter(isReleasedIn90s, songs)
```
</div>
</v-click>
