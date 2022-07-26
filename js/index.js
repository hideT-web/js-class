import { test1 } from './test1.js';
import { test2 } from './test2.js';

//----リンクがクリックされた時の処理
document.addEventListener('click', (e) => {

  let a001 = new test1('test1', 'tes1');
  let ret1 = a001.tes1('tes1からtes2へ引数');
  let a002 = new test2('test2', 'tes2');
  let ret2 = a002.tes2(ret1);

  alert(ret2);
});