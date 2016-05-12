# scroll-percent
[username/scroll-percent](https://github.com/username/scroll-percent)  
[scroll-percent](https://www.npmjs.com/package/scroll-percent)

## なにこれ
Element#scrollTop,scrollLeftの％版。  
[DEMO](https://jsfiddle.net/3q8r49py/)

## 使い方
```sh
$ npm i -S scroll-percent
```
```js
import {scrollTopPercent, scrollLeftPercent} from 'scroll-percent';

scrollTopPercent(element);
> 0 ~ 100
```

## Prototype拡張
ご利用は計画的に。
```js
import 'scroll-percent/register';

element.scrollTopPercent();
> 0 ~ 100
```
