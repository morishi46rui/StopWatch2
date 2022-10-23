const timeElement = document.getElementById(`timer`); //各要素の取得
const start = document.getElementById(`start`);
const stop = document.getElementById(`stop`);
const reset = document.getElementById(`reset`);

// 経過時間のミリ秒
let elapsed = 0; //elapsed・・・経過

let intervalId = null;

//時間表示の機能
function updateTime() { //ミリ秒から秒、分、時間を算出
 const ms = elapsed % 1000;
 const s = Math.floor(elapsed / 1000) % 60;
 const m = Math.floor(elapsed / (1000*60)) % 60;
 const h = Math.floor(elapsed / (1000*60*60)) % 60;

 const msStr = ms.toString().padStart(3, `0`); //ストリングに変換し0埋めをする処理
 const sStr = s.toString().padStart(2, `0`);
 const mStr = m.toString().padStart(2, `0`);
 const hStr = h.toString().padStart(2, `0`);
 
 timeElement.innerHTML = `${hStr}:${mStr}:${sStr}.${msStr}`;
}



// スタート
start.addEventListener(`click`, function(e) {
 start.disabled = true; //各ボタンを押せなくするor押せるようにする
 stop.disabled = false;
 reset.disabled = true;
 if (intervalId !== null);
 let pre = new Date();
 intervalId = setInterval(function() { //setInterval・・・連続して実行するコマンド
  const now = new Date();
  elapsed += now - pre;
  pre = now;
  updateTime();
 }, 10);

});

// ストップ
stop.addEventListener(`click`, function(e){
 start.disabled = false;
 stop.disabled = true;
 reset.disabled = false;
 clearInterval(intervalId);
 intervalId = null;
});

// リセット
reset.addEventListener(`click`, function(e) {
 start.disabled = false;
 stop.disabled = true;
 reset.disabled = true;
 elapsed = 0;
 updateTime(); //リセットボタン押下時に0に戻す
});