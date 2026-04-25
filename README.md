# 光声智能成像实验室网站

这是一个基于 Vite + React + Tailwind CSS 的静态课题组网站。

## 本地运行

```bash
npm install
npm run dev
```

运行后浏览器打开终端显示的本地地址，例如：

```text
http://localhost:5173/
```

## 打包生成静态文件

```bash
npm run build
```

打包后的文件在 `dist/` 文件夹中。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，例如 `photoacoustic-lab-website`。
2. 把本项目上传到该仓库。
3. 执行：

```bash
npm install
npm run build
npm run deploy
```

4. 在 GitHub 仓库页面打开：

```text
Settings → Pages → Build and deployment
```

Source 选择：

```text
Deploy from a branch
```

Branch 选择：

```text
gh-pages / root
```

保存后等待 1-3 分钟即可访问。

## 说明

本项目没有使用后端、数据库或服务器，适合课题组展示网站。
