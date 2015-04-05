var btnClicks = Rx.Observable.fromEvent($('#btn'), "click") // ボタンクリックのストリーム

btnClicks
.filter(function(value) { // オペレーター
  return value.altKey;
})
.subscribe(function() { // オペレータの出力を購読
  console.log('Altキーを押してる');
});

