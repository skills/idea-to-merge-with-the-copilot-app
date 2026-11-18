# Idea to Merge with the Copilot App

_Take an idea from a session to a merged pull request — entirely in the GitHub Copilot App — while building a small bookmarks app._

## Welcome

- **Who is this for**: Developers who want to run a complete GitHub workflow without leaving the GitHub Copilot App.
- **What you'll learn**: Custom instructions, agent sessions, agent merge, and canvases for both previewing and planning — the core moves of the Copilot App.
- **What you'll build**: **Mona's Bookmark Manager App** — a tiny **Astro** app that saves each URL with a generated short slug (like `mona-7fk2`), persisted in the browser with `localStorage`.
- **Prerequisites**:
  - A GitHub Copilot subscription (Free, Pro, Pro+, Business, or Enterprise) — you'll install and sign in to the **GitHub Copilot App** in Step 1
  - **Node.js 22.23.4+ and npm** installed locally (required by Astro 7; used to run the app in Step 4)
  - Basic familiarity with GitHub issues and pull requests
- **How long**: Roughly **55 minutes**; allow a little extra on your first run.

In this exercise, you will:

1. Create a work item **issue from a session**.
2. Set project rules in **`.github/copilot-instructions.md`** on `main`.
3. Build the bookmarks app in a **dedicated session**, then open, **review, and merge** the pull request — auto-closing the linked issue.
4. Preview the running app in a **browser canvas** and submit your proof.
5. Plan the next release in an **editor canvas** and turn it into tracked issues.

## For further reading

- Explore [GitHub Copilot Fusion](https://docs.github.com/en/copilot/concepts/models/copilot-fusion) for model selection and orchestration.

### How to start this exercise

Simply copy the exercise to your account, then give your favorite Octocat (Mona) **about 20 seconds** to prepare the first lesson, then **refresh the page**.

[![](https://img.shields.io/badge/Copy%20Exercise-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/new?template_owner=skills&template_name=idea-to-merge-with-the-copilot-app&owner=%40me&name=skills-idea-to-merge-with-the-copilot-app&description=Exercise:+Idea+to+Merge+with+the+Copilot+App&visibility=public)

<details>
<summary>Having trouble? 🤷</summary><br/>

When copying the exercise, we recommend the following settings:

- For owner, choose your personal account or an organization to host the repository.

- We recommend creating a public repository, since private repositories will use Actions minutes.

If the exercise isn't ready in 20 seconds, please check the [Actions](../../actions) tab.

- Check to see if a job is running. Sometimes it simply takes a bit longer.

- If the page shows a failed job, please submit an issue. Nice, you found a bug! 🐛

</details>

---

&copy; 2026 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit) &bull; Fonts: [Monaspace](https://github.com/githubnext/monaspace) ([OFL 1.1](./public/fonts/LICENSE.txt))
