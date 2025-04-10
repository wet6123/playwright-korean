# Playwright 한글 문서

이 리포지토리는 [playwright](https://github.com/microsoft/playwright)의 공식문서인 [playwright.dev](https://github.com/microsoft/playwright.dev)의 포크입니다.

번역된 문서는 [이곳](https://wet6123.github.io/playwright-korean/)에서 확인하실 수 있습니다.

원본이 되는 영어 버전의 공식문서가 기본으로 제공되며, 우측 상단의 언어 선택을 통해서 한국어 문서를 볼 수 있습니다.

한국어 번역에는 [Gemini](https://gemini.google.com)를 이용했으며 완벽하게 검수되지 않았으니 활용에 주의를 바랍니다.

# playwright.dev

This website is built using [Docusaurus](https://docusaurus.io/). Content is pulled from the microsoft/playwright repo.

## Development

### Setup the repo

```sh
npm install
```

### Roll docs

```sh
SRC_DIR=../playwright npm run roll
```

### Remove old release

```sh
node src/versions.js --delete 1.16
```

### Run dev server

```sh
npm run start-nodejs
```

> [!IMPORTANT]  
> The docs will start up in "current release" mode by default. To see the latest version of the docs (and likely your changes), visit `/next` or press shift 5 times.

See `package.json` for other languages (java, python, .NET).

### Run prod build and serve

```sh
npm run build
npm run serve
```

### Running this on Windows

To roll the docs in PowerShell, make sure you set the env variable correctly, i.e.:

```powershell
$env:SRC_DIR="C:\Users\user\src\playwright"; npm run roll
```

### Run end-to-end tests

#### Run on local machine

Run this on one terminal:

```sh
npm run start-nodejs
```

and this on another, it will automatically use the local docusaurus server:

```sh
npx playwright test nodejs
```

#### Run on different environment

You can set the `BASE_URL=https://playwright.dev` env var, otherwise `http://localhost:3000` gets used by default.

### Publishing Doc Changes After a Release

#### Cherry-picking

1. Go to the [Cherry-picking GitHub Actions workflow](https://github.com/microsoft/playwright/actions/workflows/cherry_pick_into_release_branch.yml)
1. Execute it with the version number e.g. `1.25` and a comma separate list of commit SHA hashes (from the main branch)
1. Wait for a PR [getting created](https://github.com/microsoft/playwright/pulls), review it and merge it

#### Stable docs rolling

1. Go to the [Release GitHub Actions workflow](https://github.com/microsoft/playwright.dev/actions/workflows/roll-stable.yml)
1. Execute it and wait for the PR [getting created](https://github.com/microsoft/playwright.dev/pulls). The PR will copy changes from the release branch in playwright repo.
2. Review the PR and merge it.
