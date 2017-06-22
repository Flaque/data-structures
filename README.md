# Trie Data Structure

This is the code for an interactive guide to the Trie data structure, written in [NextJS](https://github.com/zeit/next.js/), [React](https://facebook.github.io/react/), and [VX](https://vx-demo.now.sh/).

It's currently under construction, but if you would like to check it out, you can run it with `npm run dev` in your terminal.

## Tests

You can currently run tests with `npm test` but you also can run them by downloading [jest](https://facebook.github.io/jest/) and running them via `jest --watch`.

## Code structure

This project is built with NextJS, which uses the file system as it's paths. All paths are in "pages", and the `index.js` file in there is what gets run when you go to `localhost:3000/`. You can read more about this structure on this [NextJS docs](https://github.com/zeit/next.js/).

"Packages" contains the trie and potentially other data structures. It's probably misnamed.

## Inspiration

- [Redblob Game's Introduction to A*](http://www.redblobgames.com/pathfinding/a-star/introduction.html)
- Literally anything [Nicky Case](http://ncase.me/) does.
