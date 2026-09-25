# My Todo List

A simple, focused todo list app built while learning React and Next.js. Add tasks with a short description and delete what you no longer need — all backed by React state, no backend required.

## Features

- Add tasks with a title and description
- Delete tasks
- Empty-state message when the list is empty
- Dark UI

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- React (`useState` for state management)
- Tailwind CSS for styling

## Getting Started

Clone the repo and install dependencies:

\`\`\`bash
git clone https://github.com/atharva-0511/Todo-List.git
cd Todo-List
npm install
\`\`\`

Run the development server:

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What I Learned

This project was built to practice core React concepts:

- Controlled components (`value` + `onChange`)
- Managing state with `useState`, including arrays of objects
- Updating state immutably (`map`, `filter`, spread operator) instead of mutating directly
- Rendering lists correctly with stable `key` props
- Conditional rendering for empty states


## Future Improvements

- Persist tasks with `localStorage` so they survive a page refresh
- Edit existing tasks
- Filter by completed / pending
