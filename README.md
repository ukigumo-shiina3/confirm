## 最先端のフォームのバリデーション実装
- ConformとuseActionsStateを組み合わせ、Zodを使用したクライアントとサーバーサイドのバリデーションができるようにしたい
- NextとReactの最新バージョンで実装を行いたい

## Conform採用理由
- RemixやNext.jsのようなサーバーフレームワークをサポートすできる型安全なフォームバリデーションライブラリであるため
- React Fook Formはサーバーアクションとうまく連携させることができないが、Conformなら可能であるため

## useActionsState採用理由
- フォームアクションの結果に基づいて状態を更新できるフックであるため

## Zod採用理由
- 強力な型システムによるデータ整合性の保証ができるため
- 豊富なバリデーション機能を持っているため
- TypeScriptとの高い互換性があるため

## バージョン
- Reactはv19のbeta版を使用
- Nextはv14のcanary版を使用

## 参考資料
[Conform公式](https://conform.guide/) 

[useActionsState公式](https://react.dev/reference/react/useActionState#noun-labs-1201738-(2))

[Zod公式](https://zod.dev/)
