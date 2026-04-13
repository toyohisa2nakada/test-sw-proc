iU ソフトウェアプロセスと品質
## サンプルプロジェクト

+ ビルドツール: Vite
+ フレームワーク: React
+ プログラミング言語: TypeScript
+ CSSフレームワーク: Tailwind CSS

# このテンプレートリポジトリから環境構築する場合

### 1. テンプレートから自分用のリポジトリを作成
まずは、このテンプレートをコピーして自分の作業スペースを作成します。

- [ ] 画面右上にある緑色の **[Use this template]** ボタンをクリック
- [ ] **[Create a new repository]** を選択
- [ ] **Repository name** に好きなプロジェクト名（例：`my-app`）を入力
- [ ] **[Create repository]** をクリック
    - ※ 数秒で自分専用のリポジトリができあがります。

### 2. 開発をスタートする (GitHub Codespaces)
ブラウザ上でコードを書き、動かせる環境を立ち上げます。

- [ ] 作成したリポジトリの **[<> Code]** ボタンをクリック
- [ ] **[Codespaces]** タブを開き、**[Create codespace on main]** をクリック
- [ ] エディタ（VS Code）が開くまで少し待つ（初回は1〜2分かかります）
- [ ] 下のターミナルに `npm run dev` と入力して実行し、プレビュー画面が開けば成功

### 3. Webサイトをネットに公開する (GitHub Pages)
作ったものをインターネット上で誰でも見られるように設定します。

- [ ] リポジトリ上部の **[Settings]** タブを開く
- [ ] 左メニューの **[Pages]** を選択
- [ ] **Build and deployment** > **Source** を **[GitHub Actions]** に変更
- [ ] 上の方にある **[Actions]** タブで、公開作業（デプロイ）が終わるのを待つ
- [ ] 完了後、**[Pages]** 設定画面に戻るとURLが表示されるので、アクセスして確認


# 新規にリポジトリを作成して環境構築する場合

## 1. リポジトリと Codespace の準備
- [ ] GitHubで新規リポジトリを作成（名前は自由）
- [ ] **[<> Code]** ＞ **[Create codespace on main]** で起動

## 2. Viteプロジェクト作成
ターミナルで `npm create vite@latest .` を実行し、以下を選択：
1. **Remove existing files and continue**
2. **React**
3. **TypeScript**
- 完了後、実行中の場合は **Ctrl + C** で停止します。

## 3. Tailwind CSS の導入
ターミナルで `npm install tailwindcss @tailwindcss/vite` を実行します。

- [ ] **vite.config.ts** の編集（詳細はAIに聞いてみてください）
  - `tailwindcss` をインポートし、`plugins` 配下に追加してください。
  - `base` を適切に設定してください。
- [ ] **index.css** の編集（詳細はAIに聞いてみてください）
  - 中身をすべて消し、`@import "tailwindcss";` を一行目に記述してください。

## 4. 動作確認
- [ ] ターミナルで `npm run dev` を実行
- [ ] **App.tsx** を書き換える
```typescript
import './App.css'
function App() {
  return (
    <div className="bg-blue-700 text-white h-screen">
      こんにちは
    </div>
  )
}
export default App
```
  - 青背景に白文字で「こんにちは」と表示されることを確認

## 5. ViteプロジェクトをGithub ActionsでGithub Pagesによって公開する準備
- [ ] .github/workflows/deploy.ymlファイルを作成する
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist' # Viteのビルド出力フォルダを指定

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 6. 保存と公開 (GitHub Pages)
- [ ] 左の「ソース管理」アイコンから **[コミット]** ＞ **[変更の同期]** を実行
- [ ] GitHubの **[Settings]** ＞ **[Pages]** ＞ **Source** を **[GitHub Actions]** に変更
- [ ] **[Actions]** タブでデプロイが完了（緑のチェック ✅）したことを確認
- [ ] 表示されたURLにアクセスして、公開を確認する

以上



