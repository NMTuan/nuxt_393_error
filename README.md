这是一个出现异常的最小复制品。

https://github.com/unocss/unocss/issues/3472

## 系统及环境信息

OS 名称:          Microsoft Windows 11 专业版
OS 版本:          10.0.22621 暂缺 Build 22621


node: v18.16.0 (使用 nvm 安装)
npm: 9.5.1
yarn: 1.2.19


Microsft Edge 120.0.2210.144(正式版本)(64 位)


## 复现步骤

1. 终端内初始化依赖 `ni`
2. 终端内启动开发环境 `nr dev`
3. 浏览器访问 `http://localhost:3000/` ，页面正常，终端正常。
4. 刷新浏览器，页面报错，终端报错。

浏览器：
```
Internal server error: Soft-invalidated module "/node_modules/nuxt/dist/app/entry.js" should not have existing transform result
    at handleModuleSoftInvalidation (file:///E:/nuxt393/node_modules/vite/dist/node/chunks/dep-V3BH7oO1.js:49828:15)
    at doTransform (file:///E:/nuxt393/node_modules/vite/dist/node/chunks/dep-V3BH7oO1.js:49635:16)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async viteTransformMiddleware (file:///E:/nuxt393/node_modules/vite/dist/node/chunks/dep-V3BH7oO1.js:59342:32
Click outside, press Esc key, or fix the code to dismiss.
You can also disable this overlay by setting server.hmr.overlay to false in vite.config.js.
```

终端：
```
 ERROR  Internal server error: Internal server error: Soft-invalidated module "/node_modules/nuxt/dist/app/entry.js" should not have existing transform result                                   14:01:49  
      at handleModuleSoftInvalidation (file:///E:/nuxt393/node_modules/vite/dist/node/chunks/dep-V3BH7oO1.js:49828:15)
      at doTransform (file:///E:/nuxt393/node_modules/vite/dist/node/chunks/dep-V3BH7oO1.js:49635:16)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async viteTransformMiddleware (file:///E:/nuxt393/node_modules/vite/dist/node/chunks/dep-V3BH7oO1.js:59342:32)


```

## 文件

整个项目由 nuxi 创建。
其中.zip文件为报错环境下打包的所有文件，包括 `node_modules` 目录。
