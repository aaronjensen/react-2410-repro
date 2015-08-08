## Repro for https://github.com/facebook/react/issues/2410

Currently, this depends on redux and react-router. There's something
about the particular mixture that causes the issue. I'm sure I'm doing something "improper" here, but it is still a surprising/buggy seeming thing.

```bash
$ npm install
$ ./node_modules/.bin/webpack-dev-server
```

http://localhost:8080/main

Click "Next"
