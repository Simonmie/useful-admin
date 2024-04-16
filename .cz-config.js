module.exports = {
  // 可选类型
  types:[
      {value:'feat',name:'feat:      新功能'},
      {value:'fix',name:'fix:       修复bug'},
      {value:'docs',name:'docs:      文档变更'},
      {value:'style',name:'style:     代码格式(不影响代码运行的变动)'},
      {value:'refactor',name:'refactor:  重构(既不是新增功能，也不是修改bug)'},
      {value:'perf',name:'perf:      性能优化'},
      {value:'test',name:'test:      增加测试'},
      {value:'chore',name:'chore:     构建过程或辅助工具变动'},
      {value:'revert',name:'revert:    回滚'},
      {value:'build',name:'build:     打包'},
  ],
  //步骤
  messages: {
    type: '选择一种你的提交类型:',
    customScope: '请输入修改的范围（可选）',
    subject: '请简要描述提交内容（必填）:\n',
    body: '请输入详细描述（可选）:\n',
    footer: '请输入要关闭的issue (可选):\n',
    confirmCommit: '确认要使用以上信息提交?(y/n)',
  },
  allowCustomScopes: true,
  // 默认长度为72
  subjectLimit: 72,
}