# node-twab

node-twab is a nodejs/socket.io version of [twab](https://github.com/raphaelbastide/twab).

## Installation

Install node modules and create your own config and twabs file.

```shell
$ npm i
$ cp config-example.js config.js
$ touch twabs.txt
```

## Usage

```shell
$ node main.js
```

You can now go to [localhost:5050](http://localhost:5050) to see the list of twabs. To add twabs, go to [localhost:5050/write](http://localhost:5050/write) and write what you want. Password is defined in your `config.js` file.

## Licence
None. Do whatever you want with it. (Though a little mention would be appreciated :D )
