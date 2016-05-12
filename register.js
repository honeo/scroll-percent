/*
	prototype拡張
*/

import {
	_scrollLeftPercent,
	_scrollTopPercent
} from './scroll-percent.js';

Object.defineProperty(HTMLElement.prototype, 'scrollLeftPercent', {
    value: _scrollLeftPercent,
    writable: true,
    configurable: true,
    enumerable: false
});

Object.defineProperty(HTMLElement.prototype, 'scrollTopPercent', {
    value: _scrollTopPercent,
    writable: true,
    configurable: true,
    enumerable: false
});

export default true;
