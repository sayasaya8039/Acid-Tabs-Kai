# Acid Tabs改

タブを自動でグループ化する魔法のChrome拡張機能

## 機能

### 自動タブグループ化
- URLパターンに基づいてタブを自動的にグループ化
- カスタムルールでグループ名と色を設定可能
- ワイルドカード (`*`) を使った柔軟なパターンマッチング

### タブ順序の記憶・復元 (v6.7.0 新機能)
- ブラウザを閉じる際にタブの並び順を自動保存
- グループ内・グループ外のタブ順序を正確に記憶
- ブラウザ再起動時に自動で復元
- グループの折りたたみ状態も復元

### BULK EDIT機能
- 複数のルールを一括で編集
- テキスト形式でルールをインポート/エクスポート

### キーボードショートカット
- `Alt+Shift+C`: 全グループの折りたたみ切り替え

## インストール

### Chrome Web Store
(準備中)

### 手動インストール
1. このリポジトリをダウンロードまたはクローン
2. Chromeで `chrome://extensions/` を開く
3. 「デベロッパーモード」を有効化
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. ダウンロードしたフォルダを選択

### CRXファイルからインストール
1. `Acid-Tabs-Chrome-ウェブストア.crx` ファイルをダウンロード
2. Chromeで `chrome://extensions/` を開く
3. CRXファイルをドラッグ&ドロップ

## 使い方

### ルールの設定
1. 拡張機能アイコンをクリック
2. 「+」ボタンで新しいルールを追加
3. グループ名、URLパターン、色を設定
4. 「SAVE」で保存

### URLパターンの例
```
*github.com*          # GitHubのすべてのページ
*youtube.com/watch*   # YouTube動画ページ
*docs.google.com*     # Google Docs
*.amazon.co.jp*       # Amazon Japan
```

### BULK EDITの使い方
複数のルールを一度に設定できます：
```
開発
*github.com*
*stackoverflow.com*
blue

SNS
*twitter.com*
*facebook.com*
cyan
```

## バージョン履歴

### v6.7.0
- タブ順序の保存・復元機能を大幅改善
- グループ情報（名前、色、折りたたみ状態）の完全保存
- 定期的な自動保存機能追加

### v6.6.0
- タブ順序記憶機能を追加
- 日本語ローカライズ

### v6.5.9
- オリジナル版

## 技術仕様

- Manifest V3
- Chrome Storage API (local/sync)
- Chrome Tabs API
- Chrome Tab Groups API

## ライセンス

MIT License

## クレジット

オリジナル: [Acid Tabs](https://chrome.google.com/webstore/detail/acid-tabs)
改良版: Acid Tabs改
