// modules
import toRoundPercent from './to-round-percent.js';

/*
	本体
		this = element
*/
function _scrollLeftPercent(){
	if( this.scrollLeft ){
		const maxLeft = this.scrollWidth - this.clientWidth;
		return toRoundPercent(this.scrollLeft, maxLeft);
	}else{
		return 0;
	}
}
function _scrollTopPercent(){
	if( this.scrollTop ){
		const maxTop = this.scrollHeight - this.clientHeight;
		return toRoundPercent(this.scrollTop, maxTop);
	}else{
		return 0;
	}
}

export {
	_scrollTopPercent,
	_scrollLeftPercent
}
