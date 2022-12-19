'use strict'

// 選択する要求の一覧と結びつく着目点
let requests = [
    {request:'複雑な形にする', point:'お' },
    {request:'単純な形にする', point:'お' },
    {request:'かっこいいデザインにする', point:'お' },
    {request:'おもしろいデザインにする', point:'お' },
    {request:'オリジナリティのある形にする', point:'さ' },
    {request:'よくある形にする', point:'さ' },
    {request:'角張った形にする', point:'さ' },
    {request:'丸みを帯びた形にする', point:'さ' },
    {request:'大きい製作品にする', point:'さ' },
    {request:'小さい製作品にする', point:'さ' },
    {request:'正確な寸法にする', point:'' },
    {request:'多少の寸法のずれは許容する', point:'さ' },
    {request:'きれいな木目を生かせる材料を主に使う（製材品）', point:'さ' },
    {request:'強度や品質が安定した材料を主に使う（集成材）', point:'さ' },
    {request:'厚い材料にする', point:'さ' },
    {request:'薄い材料にする', point:'さ' },
    {request:'複数の材料を使用する', point:'さ' },
    {request:'１種類の材料を使用する', point:'さ' },
    {request:'加工しやすい材料を使用する', point:'さ' },
    {request:'加工が難しい材料を使用する', point:'さ' },
    {request:'繊維方向を意識して使用する', point:'さ' },
    {request:'繊維方向を気にせずに使用する', point:'さ' },
    {request:'材料が反るなど，変形することを考慮する', point:'さ' },
    {request:'材料が反るなどの変形することは気にしない', point:'さ' },
    {request:'合板などの木質材料を使用する', point:'さ' },
    {request:'学校にある廃材を使用する', point:'さ' },
    {request:'価格が安い材料を使用する', point:'さ' },
    {request:'価格が高い材料を使用する', point:'さ' },
    {request:'切り代と削り代は多くする', point:'さ' },
    {request:'切り代と削り代は少なくする', point:'さ' },
    {request:'けがき線は材料の一面だけに描くようにする', point:'さ' },
    {request:'けがき線は材料の複数の面に描くようにする', point:'さ' },
    {request:'近くのけがき線はまとめて描くようにする', point:'さ' },
    {request:'切断かしょは多くする', point:'さ' },
    {request:'切断かしょは少なくする', point:'さ' },
    {request:'縦引きを行うようにする', point:'さ' },
    {request:'横引きだけ行うようにする', point:'さ' },
    {request:'ジグを使用する', point:'さ' },
    {request:'ひき溝を作るときに指をガイドにする', point:'さ' },
    {request:'工作機械を使用して切断する', point:'さ' },
    {request:'計画通りの寸法になるように加工する', point:'さ' },
    {request:'多少の寸法のずれは許容して加工する', point:'さ' },
    {request:'工作機械を使用して加工する', point:'さ' },
    {request:'まとめて加工できる部品はまとめて加工する', point:'さ' },
    {request:'釘は多く使う', point:'さ' },
    {request:'釘の使用は最低限にする', point:'さ' },
    {request:'釘を打つ際はジグを使用する', point:'さ' },
    {request:'接合する際は接着剤を使用する', point:'さ' },
    {request:'まとめて下穴を開けてから釘を打つ', point:'さ' },
    {request:'ねじを使用する', point:'さ' },
    {request:'面取りを行う', point:'さ' },
    {request:'表面を磨く', point:'さ' },
    {request:'塗料を塗る', point:'さ' },
    {request:'たくさん入るようにする', point:'さ' },
    {request:'少しだけ入るようにする', point:'さ' },
    {request:'形を変えられるようにする', point:'さ' },
    {request:'物や場所のサイズにピッタリにする', point:'さ' },
    {request:'物や場所のサイズから余裕を持たせる', point:'さ' },
    {request:'持ちやすい，動かしやすいようにする', point:'さ' },
    {request:'固定できるようにする', point:'さ' },
    {request:'三角形の構造を取り入れる', point:'さ' },
    {request:'面構造を取り入れる', point:'さ' },
    {request:'接合部を金具などで固定する', point:'さ' },
    {request:'部材の断面形状を工夫する', point:'さ' },
    {request:'部材の断面積を増やす', point:'さ' },
    {request:'強い部材を使用する', point:'さ' },
    {request:'机の上は整理整頓した状態で作業をする', point:'さ' },
    {request:'正しい服装で作業する', point:'さ' },
    {request:'必要に応じで保護メガネや防塵マスクを使用する', point:'さ' },
    {request:'怪我をしないように，落ち着いて作業する', point:'さ' },
    {request:'壊れない丈夫な製品を作る', point:'さ' },
    {request:'使用中に怪我をしない製品になるようにする', point:'さ' },
    {request:'廃棄時に有害なものが出ないようにする', point:'さ' },
    {request:'長期間の使用に向けて，長持ちするようにする', point:'さ' },
    {request:'短期間の使用を想定する', point:'さ' },
    {request:'安全性，耐久性を良くする', point:'さ' },
    {request:'機能性を良くする', point:'さ' },
    {request:'短時間で製作する', point:'さ' },
    {request:'手間をかけずに製作する', point:'さ' },
    {request:'リサイクルできるようにする', point:'さ' },
    {request:'捨てやすくする', point:'さ' },
    {request:'捨てる材料が少なくなるようにする', point:'さ' },
    {request:'お金をかけずに製作する', point:'さ' },
    {request:'終了しました。完了を押してください。', point:'さ' }
];
let now_request = 0;

let yes_requests = [];

// 画面が読み込まれたとき
$(document).ready(function(){
    // 配列の全てを読み取る
    for(let request of requests) {
        // オブジェクトから要求を取り出して追加する
        let text = request['request'];
        $('.requests').append(`<div class="to_do"><p>${text}</p></div>`);
    }

    //一つ目を表示する
    $('#request_show p').text(requests[now_request]['request']);
});


//採用ボタンが押されたとき
$('#yes').on('click', function(){
    //配列に採用された要求を追加する
    let yes_request = requests[now_request];
    yes_requests.push(yes_request);
    //下の枠のボーダーの色を変える
    $('.to_do').eq(now_request).addClass('yes_selected_request');
    //次の要求を表示する
    now_request ++;
    $('#request_show p').text(requests[now_request]['request']);
    console.log(yes_requests);
});





//しないボタンが押されたとき
$('#no').on('click', function(){
        //下の枠のボーダーの色を変える
        $('.to_do').eq(now_request).addClass('no_selected_request');
        //次の要求を表示する
        now_request ++;
        $('#request_show p').text(requests[now_request]['request']);
});


// 完了ボタンが押された時
$('.button_start').on('click', function(){
    // 採用されたものをローカルストレージに保存
    let set_yes_requests = JSON.stringify(yes_requests);
    localStorage.setItem('yes_requests', set_yes_requests);

    
    location.href = '/index.html?name=' + 'ok2';
});
