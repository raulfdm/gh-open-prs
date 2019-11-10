# Github Open PRs

> Simple Page to keep tracking all open PRs from your repos

## Before start

This project uses Github GraphQL API. Differently from rest api, it _requires_ you being Authenticated.

So, first step is create a simple token to which can read your repo data ([check it here](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)).

This token must be used as environment variable (secret).

## Getting Started

1. First step, fork (or not) and clone this repo.
1. Install all dependencies

   ```bash
   yarn
   ```

1. Create a `.env` file with your token:

   ```env
   GITHUB_TOKEN=<token-here>
   ```

1. Edit `open-pr-config.js` for what fits for you. You have to provide:

   - organizationName: organization user name, for instance on `https://github.com/nasa`, `nasa` should be the name
   - repositoriesToList: a list of repositories you want to get PRs. For instance, on `https://github.com/nasa/XPlaneConnect`, `XPlaneConnect` will be the name
   - logoUrl: a org logo url

   In the end your config will look like:

   ```js
   module.exports = {
     organizationName: "nasa",
     repositoriesToList: ["XPlaneConnect", "fprime", "cumulus"],
     logoUrl:
       "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"
   };
   ```

1. Then run `yarn dev` and open `http://localhost:3000`. It'll be something like this:
   ![Nasa Example](./media/example.png)

## Limitations

Github stablish some limits to the amount of PRs and labels you can get at once (100). So if it's more then that, it won't show.

## Stack

- NextJS
- TypeScript
- ApolloClient
- Styled Components

## Known Issues

> List of problems I'm aware or things which can be better

- If the query fails for some reason, entire app will break. That's because currently I'm not rendling the `error` from API;
- No Loader indicating query is Running;
- If `logoUrl` is empty, it'll show a "broken img" instead does not render anything;
- stickness of repo name is hard coded and it depends from the logo size;

## Issues

PR's to make this thing better is always welcome! :)

## License

[MIT](./LICENSE.md)
