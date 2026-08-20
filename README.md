
# GATE Physics 2027 — Easy Question System

The important design choice: **you normally edit only the `questions/` folder and `tests.js`.**
Do NOT edit `exam.js` when adding questions.

## Add questions to an existing test

Open for example:

`questions/quantum-test-1.js`

You will see:

```js
window.MOCK = {
  "title": "...",
  "subject": "Quantum",
  "questions": [
    {
      "q": "Your question",
      "o": ["Option A","Option B","Option C","Option D"],
      "a": 2,
      "m": 1
    }
  ]
};
```

Add another `{ ... }` before the closing `]`.

`a` is the correct option index:
- 0 = A
- 1 = B
- 2 = C
- 3 = D

`m` = marks. Wrong answer gets 0.25 negative marking by default.

## Create a NEW Quantum test

1. Copy `questions/quantum-test-1.js`
2. Rename it to `quantum-test-3.js`
3. Replace/add your questions.
4. Open `tests.js`.
5. Inside Quantum's `"tests"` array add ONLY:

```js
{
  "id": "quantum-test-3",
  "name": "Quantum Mock Test 3",
  "file": "questions/quantum-test-3.js"
}
```

That's all.

## Add a completely new subject

In `tests.js`, add one subject object, e.g.:

```js
{
  "id": "optics",
  "name": "Optics",
  "icon": "🔭",
  "tests": [
    {
      "id": "optics-test-1",
      "name": "Optics Mock Test 1",
      "file": "questions/optics-test-1.js"
    }
  ]
}
```

Then create:

`questions/optics-test-1.js`

with your questions.

The subject automatically appears on the Mock Test page. Its test automatically appears after clicking the subject.

## Important

- `exam.js` = test engine. Leave it alone.
- `exam.css` = test design. Leave it alone.
- `tests.js` = test catalogue. Edit only when adding/removing a test or subject.
- `questions/*.js` = where you spend most of your time.

This avoids copying the test engine for every new mock.
