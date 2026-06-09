# 人生を変えたゲーム紹介サイト

モダンフロントエンド開発の中間課題として作成した、好きなゲームを紹介する React アプリです。

## 概要

人生に影響を与えたゲームをカード形式で一覧表示します。プラットフォームでの絞り込みと、プレイ年順・発売日順の並び替えができます。

## 機能

- ゲーム一覧の表示（タイトル・プラットフォーム・説明・発売日・プレイ年）
- プラットフォームフィルタ（すべて / DS / 3DS / Smartphone / Switch / PS4 / PC）
- 並び替え（プレイ年順 / 発売日順）
- 各ゲームカードから公式サイトへのリンク

## 技術スタック

| カテゴリ             | 使用技術      |
| -------------------- | ------------- |
| フレームワーク       | React 19      |
| 言語                 | TypeScript    |
| ビルドツール         | Vite 8        |
| パッケージマネージャ | npm / Bun     |
| Linter / Formatter   | ESLint, Biome |

## プロジェクト構成

```sh
src/
├── App.tsx              # ページ全体のレイアウト
├── App.css              # スタイル
├── main.tsx             # エントリーポイント
└── components/
    ├── Header.tsx       # ページヘッダー
    ├── Footer.tsx       # フッター
    ├── GameSection.tsx  # ゲーム一覧・フィルタ・ソート
    └── GameCard.tsx     # ゲームカード（props でデータを受け取る）
```

## セットアップ

依存関係のインストール:

```bash
bun install
```

開発サーバーの起動:

```bash
bun run dev
```

ターミナルに表示される URL（デフォルトは `http://localhost:5173`）をブラウザで開いてください。

## その他のコマンド

```bash
bun run build    # 本番ビルド
bun run preview  # ビルド結果のプレビュー
bun run lint     # ESLint によるチェック
bun run format   # Biome によるフォーマット
```
