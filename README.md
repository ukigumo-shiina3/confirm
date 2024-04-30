## 最先端のフォームのバリデーション実装
- ConformとuseActionsStateを組み合わせる
- Zodを使用したクライアントとサーバーサイドのバリデーションができるようにしたい

## Conform採用理由
- RemixやNext.jsのようなサーバーフレームワークをサポートすできる型安全なフォームバリデーションライブラリであるため
- React Fook Formはサーバーアクションとうまく連携させることができないが、Conformなら可能であるため

## useActionsState
- フォームアクションの結果に基づいて状態を更新できるフックであるため

## バージョン
- Reactはv19のbeta版を使用
- Nextはv14のcanary版を使用

## 参考資料
[Conformの公式](https://conform.guide/)
[useActionsStateの公式](https://react.dev/reference/react/useActionState#noun-labs-1201738-(2))
