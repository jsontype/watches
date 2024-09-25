import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPages() {
  return (
    <div className="error-section error-page-bg-img ak-bg ak-center">
      <div className="error-content">
        <h1 className="error-title ak-stroke-number color-white">404</h1>
        <h2 className="erro-sub-title">申し訳ありません！ページが見つかりません</h2>
        <p className="erro-desp">
        幸いなことに、これは主にクライアント側の問題であり、ウェブサイトの所有者が404エラーを修正するのは比較的簡単です。この記事では、404エラーの原因とそれを解決するための4つの効果的な方法を説明します。幸いなことに、これは主にクライアント側の問題です。
        </p>
        <div className="go-to-home">
          <Link to="/" className="common-btn">
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
