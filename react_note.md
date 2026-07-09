2026
# 学んだこと
reactはcomponent単位で扱う

```
## JSX的記法
import ここに使用するcomponent名 from "./Card_reaction"

function aa(data) {
    return (
        <>
            <h1>{data.id}</h1>
            <p>card name {data.namme}</p>
            <p>{data.name}</p>
            <Cardreaction></Cardreaction>
        </>
    )
}

export default aa
```
functionの後に関数名　(最初につけるのが大文字だとお作法的にいい！)
export defulutでexportすることができる
returnでhtmlを返すことができる
同一の親要素で囲っておく必要がある
htmlのなかでjs的記述をしたいときは{}の中にいることでグッド！
returnは再描画されないので
最初の変数やjsの状態で値を返すなのでdom要素を再描画する必要がある
からのフラグメントらしい
<>
</>

## useState
import { useState } from "react"
しないと使えない
useStateはそのまま
const [変数,変数にぶち込む関数]= useState(初期値)
でぶち込むことができる
変数にぶち込む関数(引数)
で変数をこうしんすることができる
更新されるとjsxのreturn側でも再描画が行われる

```
import { useState } from "react"

function Cardreaction() {
    const [good, setGood] = useState(0)
    const [sugoi, setSugoi] = useState(0)
    const [fun, setFun] = useState(0)

    function goodPlus() {
        setGood(good+1)
    }
    function sugoiPlus() {
        setSugoi(sugoi + 1)
    }
    function funPlus() {
        setFun(fun + 1)
    }
    return (
        <>
            <button type="button" onClick={goodPlus}>{good}</button>
            <button type="button" onClick={sugoiPlus}>{sugoi}</button>
            <button type="button" onClick={funPlus}>{fun}</button>
        </>
    )

}
export default Cardreaction
```
onClickでsugoiPlusが呼び出されて再描画される

## Propsとかいうゲイ的なもの
親コンポーネントから
gay="gay"
みたいに与えれるよん
### 親コンポーネント
```
    // 親コンポーネント
export default function Parent() {
  return (
    <Child gay="gay" age={25} />
  );
}

```
親コンポーネントでは gay={getTodayDate()}
みたいにかけるっぽい？そうらしいね


###　子コンポーネント

```
function Child(props) {
  return (
    <p>こんにちは、{props.gay}さん（{props.age}歳）な人です！！！</p>
  );
}
```

### useEffect
useStateは値が変わったらDOMDOMして再描画したいよーん人向けコンテンツでしたが
useEffectでは一定の期間くるくるしたり独立して回すことで値を変えれます
usestateとの合わせ技で独立しているものを変わったのを検知してDOMDOMできます
独立したインスタンス的なものを打ち立ててるっぽい
基本的な記法
useEffect(() => {
  // ここに実行したいロジックを書く
}, [依存する変数]); // どのタイミングで実行するかをコントロールする配列
空の配列 [] を渡せば一回表示されたタイミングでuseeffectが叩かれるよ
依存する変数に変数を入れると変数が変わったタイミングでできるぞ
useState使えばいいんじゃとか思ったけど知らね


```

    useEffect(() => {
        // ① タイマーを起動（依存配列は空にする）
        const intervalId = setInterval(() => {
            // useeffectのあれですね
            setSecound(prev => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); 

    return (
        <>
            <h1>タイマーコンポーネント</h1>
            <p>秒！！！{secound}</p>
        </>
    );

```
useEffect(() => {
    setInterval(() => {
        setCount(prev => prev + 1)
    }, 1000)
}, [])
下にはこれが隠れてるらしくて

setCount(prev => {
    return prev + 1; // 💡このreturnは、Reactの管理システム（setState）に直撃している！
})

ちなみにreturnは
次の処理に行くときに変数とか理想的な形にしたり止めなきゃ無限に動き続ける処理あるから止めたいよね？そんなあなたに大セール、useEffect の中で関数を return しておいてくれたら、消える瞬間にReactがその関数を代わりに実行してあげる的なお兄さん
アンマウントがどのタイミングで行われるのか走らないタイプです

### mapとか言うガチエロ物体について


## 基礎的なJSの部
jsではDOMDOMしないと要素にアクセスできませんねなので
起点としてdocumentからスタートするらしい

### classList
classList.で
クラス名に対して操作することができます
ちなみに引数の部分に(.)は不要らしいねclass名画はいるって決まっているかららしい

```
.add
.remove
.toggle
```




### jsで要素を制作する

myButtonを代入しつつメモリの中にbuttonタグを入れ込みます
まだブラウザのメモリにしかはいっていません

```
const myButton = document.createElement("button");
```

これで要素の中に文字をぶち込むことができます

```
myButton.textContent = "クリックしてね";
```
そうすることで<button>クリックしてね</button>
になります

クラス名を追加することができます
```
.classList.add("クラス名")
```
appendchildで今回生成したところを任意のところに入れ込むことができます
document.boddyで　bodyの直下に移動してを新しくぶち込めます



```

document.body.appendChild(メモリの中にはいいてるはずのcladd名);
const todo = document.createElement('div');
// そうするとdivをつくりtodoにいれます
todo.appendChild(text);
todo.appendChild(compBtn);

```

これで出現させてますねtodoclassが割り当ててられてるものすべてにありますね
document.body.appendChild(todo);


### クエリセレクタ
JSでCSS的な記法してクエリセレクタします
そうすると
```

document.querySelector()

```
documentにある要素をselectorでselectし一番上にある要素を取得します
.querySelectorAll()
すべて取得するらしいですねクエリセレクタオールという愛人でね
css的記法出かけるからハッピー
タグごと取得したりクラス名で取得することができるね

### inputの中にある文字を取得するには
const input = document.querySelector("input")）
input.value
.valueときまってるっぽいね

## 分割代入とかあるらしい
```

const user = { name: '大岳', age: 21, role: 'gay' };

const name = user.name;
const age = user.age;

console.log(name); 
// これで取り出すらしいけど
const user = { name: '大岳', age: 21, role: 'gay' };

const { name, age } = user;
// ここでuserに入っているnameを代入することができますcd

console.log(name); // 大岳
console.log(age);  // 21
```

