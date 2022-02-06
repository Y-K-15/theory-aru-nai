'use strict'

function judge(){
  let input = document.getElementById('input');
  let inputText = input.value;
  let showInput = document.getElementById('showInput');
  showInput.innerHTML = inputText;
  

  var count = 0;  // カウント
  var idx = 0;    // 検索開始位置
  
  idx = inputText.indexOf('ない');
  
  while(idx != -1){
    count++;
    // 次のインデックスから検索
    idx = inputText.indexOf('ない', idx + 1);
  }
  
  console.log('「ない」の出現回数: ' + count);
  
  let result = 0;
  if(count % 2 === 0  ){
    result = '実行される'
  }else{
    result = '実行されない'
  };

  let doOr = document.getElementById('doOr');
  doOr.insertAdjacentHTML('beforeend',result);

};

