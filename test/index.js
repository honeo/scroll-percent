// modules
import 'babel-polyfill';
import {scrollTopPercent, scrollLeftPercent} from '../';
import '../register';

const hoge = document.getElementById('hoge');
const piyo = document.getElementById('piyo');

hoge.addEventListener('scroll', listener, false);
hoge.addEventListener('click', listener, false);

function listener(e){
	const Xmax = hoge.scrollWidth - hoge.clientWidth;
	const Xper = scrollLeftPercent(hoge);
	const Ymax = hoge.scrollHeight - hoge.clientHeight;
	const Yper = scrollTopPercent(hoge);
	// 単独メソッドとprototypeの結果が違えばエラー
	if(Xper!==hoge.scrollLeftPercent() || Yper!==hoge.scrollTopPercent()){
		throw new Error('failed');
	}
	piyo.innerHTML =
		`X: ${Xper}%, ${hoge.scrollLeft}/${Xmax}` +
		`<br>` +
		`Y: ${Yper}%, ${hoge.scrollTop}/${Ymax}`;
}
