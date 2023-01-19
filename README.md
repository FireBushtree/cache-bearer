<p align="center"><img width="100" src="https://raw.githubusercontent.com/FireBushtree/cache-bearer/main/src/assets/icons/icon128.png" alt="cache-bearer logo"></p>


# cache-bearer

Sometimes we save information at cache [Local Storage, Session Storage, Cookie], when develop locally and need the cache info from other environment , we must copy information's key-value **one by one**, use `cache-bearer`, we can easily copy cache at target environment, and paste them at local.

## definition

In this project, **cache** means [Local Storage, Session Storage, Cookie]

## install

1. download [zip file](https://github.com/FireBushtree/cache-bearer/releases/tag/v0.0.2)

2. install by source (follow the next steps)
* use node version >= 17
* clone this repo `git clone git@github.com:FireBushtree/cache-bearer.git`
* install dependence `yarn`
* use `yarn run build` & get **dist** folder

3. open **Chrome** and type url `chrome://extensions`, click button **Load the unzipped extension**,


## feature

* copy current website's cache
* paste cache
* clear current website's cache

## todos

- [x] add action tip, such as `copy cookie success!`, `paste cookie success` ...
- [x] update popup UI
- [x] implement `Cookie` ~~copy~~ & ~~paste~~ & ~~clear~~
- [x] implement `Local Storage` ~~copy~~ & ~~paste~~ & ~~clear~~
- [x] implement `Session Storage` ~~copy~~ & ~~paste~~ & ~~clear~~
- [x] refine util/chrome code

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2023-present, Qian (Owen) Huang
