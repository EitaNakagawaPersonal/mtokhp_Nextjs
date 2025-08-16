# Dockerfile
FROM node:18-alpine

# ワークディレクトリを作成
WORKDIR /app

# package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係インストール
RUN npm install

# 残りのファイルをコピー
COPY . .

# ポート解放
EXPOSE 3000

# 開発サーバを起動
CMD ["npm", "run", "dev"]
