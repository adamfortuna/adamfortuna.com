# AdamFortuna.com

Blog for adamfortuna.com.

## Setup Instructions

1. Clone or download the project.
2. `cd` in the project directory.
3. If you cloned the project, make sure you remove the remote reference to this project by running `git remote rm origin`.
4. Copy `.env.example` to `.env` as that file is used to load up all your environment variables.
5. Run `yarn install` to install all dependencies.

## Commands

- `yarn dev`: To start a local development server.
- `yarn lint`: To run the ESLint based linter to find out the issues in the project.
- `yarn format`: To autoformat all the issues.
- `yarn upgrade --latest`: To upgrade all packages to their latest versions (could include breaking changes).