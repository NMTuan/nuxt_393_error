/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-01-29 13:31:07
 * @LastEditTime: 2024-01-29 13:52:27
 * @LastEditors: NMTuan
 * @Description:
 * @FilePath: \nuxt393\nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // devtools: { enabled: true }
    devServer: {
        host: '0.0.0.0'
    },
    modules: ['@unocss/nuxt']
})
