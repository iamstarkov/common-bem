# common-bem

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> BEM class name generator which use [common scheme][mindbemding]. Elements are delimited with two (2) underscores (__), and Modifiers are delimited by two (2) hyphens (--).

## Install

    npm install --save common-bem

## Usage

By common scheme I mean scheme with double underscores and hyphens proposed by Harry Roberts in his article ["MindBEMding – getting your head ’round BEM syntax"][mindbemding].

[mindbemding]: http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
[b_]: https://npmjs.org/package/b_

```js
import commonBem from 'common-bem';

const bem = commonBem.lock('grid');
bem();      // grid
bem('row'); // grid__row
bem('col'); // grid__col
bem({ fixed: true }); // grid grid--fixed
bem('col', { size: 'md' }); // grid__col grid__col--size-md
```

## API

Basically, this package is [b_](b_) with predefined options for this scheme.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/common-bem
[npm-image]: https://img.shields.io/npm/v/common-bem.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/common-bem
[travis-image]: https://img.shields.io/travis/iamstarkov/common-bem.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/common-bem
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/common-bem.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/common-bem
[depstat-image]: https://david-dm.org/iamstarkov/common-bem.svg?style=flat-square
