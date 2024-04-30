"use client";

import { useActionState } from "react";

import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";

import { login } from "~/app/actions";
import { loginSchema } from "~/app/schema";

export function LoginForm() {
  const [lastResult, action, pending] = useActionState(login, null);
  const [form, fields] = useForm({
    constraint: getZodConstraint(loginSchema),
    // constraintでinputのバリデーション属性を使う
    // inputのバリデーション属性を使うのは、Javascriptをオフにしているユーザーにも minlengthやmaxlengthなどの最低限のバリデーションを有効にするため
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },
    // onValidateでクライアント側のバリデーションを行い、バリデーションに引っかかっている間は、サーバーのlogin関数が何回も呼ばれ、サーバーを圧迫してしまうことを回避している。サーバー料金が膨らんでしまうことを防ぐことにも繋がる。
  });

  return (
    <form {...getFormProps(form)} action={action} className="space-y-4">
      {/* form属性はonsubmitを使うことが一般的には多いが、これからはaction属性を使ってフォームの送信を行なっていくのが一般的になる */}
      {/* action属性だとformDataを扱うことができ、formData.getなどでformDataのデータが取れる */}
      <div>
        <label htmlFor={fields.email.id}>Email</label>
        <input {...getInputProps(fields.email, { type: "email" })} />
        <div id={fields.email.errorId}>{fields.email.errors}</div>
      </div>

      <div>
        <label htmlFor={fields.password.id}>Password</label>
        <input {...getInputProps(fields.password, { type: "password" })} />
        <div id={fields.password.errorId}>{fields.password.errors}</div>
      </div>

      <div>
        <label htmlFor={fields.remember.id}>Remember me</label>
        <input {...getInputProps(fields.remember, { type: "checkbox" })} />
        <div id={fields.remember.errorId}>{fields.remember.errors}</div>
      </div>

      <button className="border" disabled={pending}>
        Login
      </button>
    </form>
  );
}
