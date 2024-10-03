# links

[![Open graph](public/og-image.png)](https://hendraaagil.dev/links)

## Developing

Node.js `>= 18.x` setup with [yarn](https://yarnpkg.com/) is recommended.

```bash
# duplicate & fill environment file
cp .env.example .env.local

# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn dev

# build for production
yarn build
```

## Make your own links

You can make your own links by clone this project and change some configuration and styling.

Change your:

- Title and description in [here](vite.config.ts#L16-L21).

- Font in [here](tailwind.config.cjs#L7-L9) and change the import in [main.tsx](src/main.tsx#L5-L6) file.

  This project is using [fontsource](https://fontsource.org/), follow the docs if you get stuck.

- List of links in [here](src/data/links.ts).

  The icon is using [react-icons/fa6](https://react-icons.github.io/react-icons/icons/fa6/), find your favorite icons in there.

- Image assets:

  - Favicon: [ico](public/favicon.ico) and [svg](public/icon.svg) file.
  - [Open graph image](public/og-image.png), recommended resolution is 1200 x 630.
  - [Logo image](src/assets/ha-logo.svg), for logo displayed in the page.

## License

This source code is under [MIT License](LICENSE)
