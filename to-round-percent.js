/*
	数値を0 ~ 100%に丸めるやつ
		値/母数を％に直したあと丸める
		％が0より多く、1より少なければ1を、それ以外なら少数点を切り捨てて返す
*/
export default function toRoundPercent(n1, n2){
	const num = n1 / n2 * 100;
	return 0 < num && num < 1 ?
		1:
		Math.floor(num);
}
