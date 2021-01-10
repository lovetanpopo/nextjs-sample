# nextjsのpageProps管理について

## 内容
SSR時に生成したpagePropsとCSR時に渡ってくるpagePropsの違いについて検証

## サンプルアプリの動作方法
```shell script
yarn install
yarn dev
```

## 結果
pagePropsのオブジェクトでvalueがundefinedの要素は削除される

SSR時のconsole.logではhogeが存在するが、CSR時のconsole.logではhogeが存在しない  
ページのソースを表示すると__NEXT_DATA__にhogeが存在しないことからもわかる

## 理由
JSONの表現としてundefinedが存在しないから

例）[typescriptlang.org](https://www.typescriptlang.org/play?ssl=5&ssc=34&pln=1&pc=1#code/MYewdgzgLgBAllApgWxgXhgbwFAxmAQ2UQC58BXAG0oBpcYAHAJzmFJnLABNEAzOMIi7YAvtlCQQlRADpKIAOYAKAFIBlAPIA5GdBZgFcXgE8lCFAEoLQA)
```typescript
const item = {
  name: null,
  price: undefined
}
console.log(JSON.stringify(item))
```
```text
[LOG]: "{"name":null}"
```
