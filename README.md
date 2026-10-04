# JavaScript Learning Path

This repository is organized as a progression from JavaScript language basics
to DSA, object-oriented programming, browser basics, and Node.js.

## Tracks

| Folder | Focus |
| --- | --- |
| [`javascript-fundamentals`](./javascript-fundamentals/) | Core JavaScript syntax and language features |
| [`data-structures-and-algorithms`](./data-structures-and-algorithms/) | DSA patterns implemented in JavaScript, with C++ comparisons |
| [`object-oriented-javascript`](./object-oriented-javascript/) | Classes and object-oriented concepts |
| [`html-basics`](./html-basics/) | Small HTML practice pages |
| [`css-basics`](./css-basics/) | CSS practice |
| [`nodejs`](./nodejs/) | Node.js APIs and CommonJS modules |

## Suggested order

1. Learn the language in `javascript-fundamentals`.
2. Apply that syntax to arrays, maps, stacks, queues, and built-in methods in
   `data-structures-and-algorithms`.
3. Continue with `object-oriented-javascript`.
4. Explore browser and Node.js examples when you are ready to work with a
   runtime.

The fundamentals and DSA tracks intentionally overlap on topics such as
arrays, functions, and variables. They are not duplicate lessons: the first
explains JavaScript itself, while the second emphasizes algorithmic operations,
complexity, and C++-to-JavaScript translation.

## Python tooling

The repository uses [`uv`](https://docs.astral.sh/uv/) for its small Python
tooling setup. The project requires Python 3.13 or newer and uses the local
`.venv` environment.

```powershell
uv sync
uv run python --version
uv run python your_script.py
```

Activate the environment directly in PowerShell when needed:

```powershell
.\.venv\Scripts\Activate.ps1
```
