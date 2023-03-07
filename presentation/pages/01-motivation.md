---
layout: section
---

# Motivation

---
layout: quote
---

## A language that doesn't affect the way you think about programming, is not worth knowing

Alan Perlis

---

## Functional programming is **NOT**

<v-clicks>

1. something new or recent
2. a different language
3. very complex or difficult
4. accessible only for people with good understanding of math or only applicable for math-related problems
5. incompatible with other paradigms, like imperative or object oriented programming

</v-clicks>

<!--
1. FP has been around for the entire history of programming. In fact, the first functional language (LISP) is older than C and the same age as Fortran.
2. FP is not a different language, it's a paradigm. You can apply it on almost all commonly used programming languages.
3. It's just very different to what we are used to and might be esoteric at the beginning. You'll feel like you're learning to program all over again.
4. You don't have to understand the math behind it in order to successfully use it. Sure, functional languages are designed on a mathematical foundation. But close relationship to math gives you the confidence that your programs work correctly and allow you to use laws in your practical applications, that had already been proven in math world. Also it is as strong as any other paradigm in terms of "expressiveness", it can be used for anything, for example there is "Elm", language for programming GUIs in web applications.
5. You can easily introduce functional programming concepts to not-purely-functional languages. In fact, all mainstream languages, have some functional patterns built-in into the language. I don't expect you to start writing purely functional programs, but I would love to encourage you to use some of the concepts in your day to day work.
-->

---

## Why should we learn that?

<v-clicks>

1. completely different way of thinking about problems
2. very generic and portable (you don't need to understand language specifics, like `this`, `self` keywords, prototypal inheritance, etc.)
3. easier to parallelize, test and verify
4. it's becoming more mainstream (i.e. pattern matching in Python 3.10, promises in ES6)
5. expressive, declarative (and hence more readable)

</v-clicks>

---

## Quick Sort Example - Imperative (JavaScript)

<v-clicks>

```javascript
function partition(items, left, right) {
    let p = items[0];
    let i = left
    let j = right;
    while (i <= j) {
        while (items[i] < pivot) { i++; }
        while (items[j] > pivot) { j--; }
        if (i <= j) {
            [ items[i], items[j] ] = [ items[j], items[i] ];
            i++;
            j--;
        }
    }
    return i;
}
function quicksort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) { quicksort(items, left, index - 1); }
        if (index < right) { quicksort(items, index, right); }
    }
    return items;
}
```

</v-clicks>

---

## Quick Sort Example - Functional (JavaScript & Haskell)

<v-clicks>

JavaScript:

```javascript
function quicksort(array) {
  if (!array.length) {
    return [];
  };
  const [pivot, ...rest] = array;
  const lesser = rest.filter(i => i < pivot);
  const greater = rest.filter(i => i >= pivot);
  return [...quicksort(lesser), pivot, ...quicksort(greater)];
}
```

Haskell:

```haskell
quicksort []     = [] 
quicksort (pivot:rest) = (quicksort lesser) ++ [p] ++ (quicksort greater) 
    where 
        lesser  = filter (< pivot) rest 
        greater = filter (>= pivot) rest
```

</v-clicks>

