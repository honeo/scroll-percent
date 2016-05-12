/*
	単体用
		こっちは引数チェックあり
*/

import {
	_scrollTopPercent,
	_scrollLeftPercent
} from './scroll-percent.js';

function validation(arg){
	if(!(arg instanceof HTMLElement)){
		throw new TypeError('invalid argument');
	}
}

function scrollLeftPercent(arg){
	validation(arg);
	return _scrollLeftPercent.call(arg);
}

function scrollTopPercent(arg){
	validation(arg);
	return _scrollTopPercent.call(arg);
}

export {
	scrollLeftPercent,
	scrollTopPercent
}
