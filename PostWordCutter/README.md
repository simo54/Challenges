# Post Word Cutter

A blog post must have _x_ number of characters as a preview.

We can adjust the length of the post declaring how many characters we want to preview.

**Example**

Full version Post:

`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`

---

The length of the preview is set to 50 characters.

Post Preview:

`Lorem ipsum dolor sit amet, consetetur sadipscing...`

---

With 45 characters:

Post Preview:

`Lorem ipsum dolor sit amet, consetetur...`

## The mission

**Create a function that takes a certain post, and create a preview with an input number.**

If the count ends on a character:

- Remove that word, go back until you find the last character of the previous word and add 3 dots (...)

If the count ends on white space:

- Go back until you find the last character of the previous word and add 3 dots (...)
