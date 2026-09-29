# Symphony 个人主页

GitHub Pages 用经典 Jekyll 构建本仓库（没有 Gemfile，也没有 Actions）。线上依赖是 `github-pages` 232，对应 Jekyll 3.10.0、Liquid 4.0.4，本地验证用同一组版本。

本文件和 `README.md` 都要留在 `_config.yml` 的 `exclude` 里，否则会被发布成站点页面。

## 构建

本机没有 Ruby，用 Docker 构建。先在仓库外建一个目录，放两个文件，构建一次镜像。

`Gemfile`：

```ruby
source "https://rubygems.org"

gem "github-pages", "232", group: :jekyll_plugins
```

`Dockerfile`：

```dockerfile
FROM ruby:3.3-bookworm
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8 BUNDLE_GEMFILE=/build/Gemfile
WORKDIR /build
COPY Gemfile ./
RUN bundle install --jobs 4 --retry 3
WORKDIR /site
```

然后运行 `docker build -t symphony-pages:232 <该目录>`。

在仓库根目录运行下面的命令构建。源码以只读方式挂载，产物写到仓库外：

```powershell
docker run --rm -e JEKYLL_ENV=production -e PAGES_REPO_NWO=3516027002att-ui/3516027002att-ui.github.io -v "${PWD}:/site:ro" -v "$env:TEMP\symphony-build\out:/out" symphony-pages:232 bundle exec jekyll build --source /site --destination /out/_site
```

构建输出里不应该有 warning。

## 预览与验收

- 不要用 `python -m http.server` 预览。它不发 `Cache-Control`，重新构建以后浏览器会继续用缓存里的旧 `theme-config.js`。要用会发 `Cache-Control: no-store` 的静态服务器。
- 验收时用 Playwright 打开首页、一个栏目列表页和一篇文章页，分别在 1440×900 和 390×844 下截图检查。console 里不能有 error 或 warning。

## 背景色场

- 全站只显示一帧静止画面，取的是 `theme-config.js` 里 `field.staticTime` 对应的那一帧，没有流动，也没有暂停按钮。这是用户明确定下的，除非用户要求，不要恢复自动流动，也不要加回开关。
- 强度分两处：首页和栏目列表页用 `theme-config.js` 的 `overallColorIntensity`（0.45）；文章页（`<html data-page="article">`）用 `site-theme.js` 顶部的 `ARTICLE_INTENSITY`（0.15）。改强度时，要同步改 `style.css` 里的 `--fallback-alpha`，这是 WebGL 不可用时 CSS 兜底渐变的透明度。
- `spectral-field.js` 和 `liuguang-banlan-ui` 仓库的 `assets/starter/shared/spectral-field.js` 逐字相同，不要只在这里改。它在尺寸变化时会清空画布但不重画，`site-theme.js` 在尺寸变化后强制重画一次来绕过。
