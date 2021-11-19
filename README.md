### 勉強用リポジトリ

https://react-firebase-hosting-f6f1a.web.app/


### 学んだこと
- localstateからglobalstateへ
    - ContextAPIを使用
        - Context Provider でデータや関数を受け取りたいcomponentを囲む
        - Component内では，hooksのuseContextを使用する
   
- propsを使ってそれぞれ渡していたものをcontext内にstateや関数を直接実装，使いたいコンポーネントで直接呼び出す
- propsによるデータのバケツリレー不要
- コードのシンプル化

- contextがstoreの役割→アプリケーションの状態管理が楽になる

- 作成したcontextオブジェクトにはプロバイダが付属する．子コンポーネントをプロバイダで囲むと値を渡せる．
