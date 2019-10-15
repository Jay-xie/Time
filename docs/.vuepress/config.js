module.exports = {
    title: 'DEMO', // 页签标题 
    description: '整理思绪', // meta 中的描述文字，意义不大，SEO用
        // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/1.png' }], 
    ],
    base: '/jie/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    extraWatchFiles: [
        '.vuepress/foo.js', // 使用相对路径
        '/path/to/bar.js'   // 使用绝对路径
      ],
    themeConfig: {
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
         // 顶部导航栏
         nav:[
            // 单项 text：显示文字，link：指向链接
            // 这里的'/' 指的是 docs文件夹路径
            // [以 '/' 结尾的默认指向该路径下README.md文件]
           { text: 'Java', link: '/java/' },  // http://localhost:8080/Wiki1001Pro/FAQ/
        //    { text: '中间件', link: '/middleware/' },  // http://localhost:8080/Wiki1001Pro/FAQ/
        //    { text: '博文', link: '/blog/' },  // http://localhost:8080/Wiki1001Pro/FAQ/
           // { text: '仓库', link: '/Store/' },
           // { text: '随笔', link: '/Thought/' },
           // 多项，下拉形式
        //    {
        //        text: 'Concat',
        //        items: [
        //            // link：指向链接也可以是外网链接
        //            { text: 'Segmentfault', link: 'https://segmentfault.com/u/mulander' },
        //        ]
        //    },
           {
               text: 'GitHub',
               items: [
                   { text: 'GitHub首页', link: 'https://github.com/Jay-xie' },
                //    { text: 'Island', link: 'https://Jay-xie.github.io/island/code/html/index.html' },
                //    { text: 'TimeWaster', link: 'https://Jay-xie.github.io/timeWaster/demo/index.html#/' },
               ]
           },
       ],
       // 侧边栏菜单( 一个模块对应一个菜单形式 )
        sidebar:{
            // 打开FAQ主页链接时生成下面这个菜单
            '/java/':[
                //多级菜单形式
                ['/java/','介绍'], // '/FAQ/DigestionHeap/Digested.md'文件
                {
                    // 菜单名
                    title: 'Java基础',
                    // 子菜单
                    children: [
                        // ['','']=>[路径,标题]
                        // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                        // 不以 '/' 结尾的就是指向.md文件             
                        ['/java/grammar/Base','语法'], // '/FAQ/DigestionHeap/Digested.md'文件
                        ['/java/principle/demo','原理'], // '/FAQ/DigestionHeap/Digested.md'文件
                    ]
                },
                {
                    title: '框架',
                    children: [
                        ['/java/spring/demo','Spring'],
                    ]
                },
            ],
        
        },
    }
    

} 
