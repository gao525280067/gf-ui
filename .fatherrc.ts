export default {
  // cssModules: true, // 默认是 .module.css 走 css modules，.css 不走 css modules。配置 cssModules 为 true 后，全部 css 文件都走 css modules。（less 文件同理）
  extractCSS: true,
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: 'babel',
  umd: {
    name: 'gf-ui',
    sourcemap: true,
    globals: {
      react: 'React',
    },
  },
  extraBabelPlugins: [
    //['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  entry: 'src/index.ts',
  lessInBabelMode: true,
};
