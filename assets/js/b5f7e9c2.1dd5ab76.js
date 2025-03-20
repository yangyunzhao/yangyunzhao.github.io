"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5536],{3755:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"\u5f00\u6e90\u63a8\u8350/C++/Range-v3","title":"Range-v3\uff0c\u91cd\u5851\u73b0\u4ee3C++\u7684\u6570\u636e\u5904\u7406\u65b9\u5f0f","description":"- Range-v3\u662f\u4e00\u4e2a\u73b0\u4ee3C++\u5e93\uff0c\u5b83\u57fa\u4e8e\u201c\u8303\u56f4\u201d\u6982\u5ff5\u6765\u63d0\u4f9b\u5f3a\u5927\u7684\u6570\u636e\u5904\u7406\u529f\u80fd\uff0c\u4f7f\u5f97\u64cd\u4f5c\u548c\u8fed\u4ee3\u96c6\u5408\u66f4\u4e3a\u76f4\u89c2\u548c\u7b80\u6d01\u3002","source":"@site/docs/\u5f00\u6e90\u63a8\u8350/C++/Range-v3.md","sourceDirName":"\u5f00\u6e90\u63a8\u8350/C++","slug":"/\u5f00\u6e90\u63a8\u8350/C++/Range-v3","permalink":"/docs/\u5f00\u6e90\u63a8\u8350/C++/Range-v3","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5f00\u6e90\u63a8\u8350/C++/Range-v3.md","tags":[],"version":"current","frontMatter":{},"sidebar":"opensource_recommendation","previous":{"title":"\u591a\u7ebf\u7a0b\u7f16\u7a0b\u65b0\u59ff\u52bf\uff1aOpenMP\u5e93\u7684\u6df1\u5ea6\u5e94\u7528\u6307\u5357","permalink":"/docs/\u5f00\u6e90\u63a8\u8350/C++/OpenMP"},"next":{"title":"TBB\u5e93\u5b66\u4e60\u7b14\u8bb0","permalink":"/docs/\u5f00\u6e90\u63a8\u8350/C++/TBB"}}');var i=s(4848),c=s(8453);const l={},t="Range-v3\uff0c\u91cd\u5851\u73b0\u4ee3C++\u7684\u6570\u636e\u5904\u7406\u65b9\u5f0f",d={},a=[{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u4fbf\u5229\u6027",id:"\u4fbf\u5229\u6027",level:3},{value:"\u53ef\u7ec4\u5408\u6027",id:"\u53ef\u7ec4\u5408\u6027",level:3},{value:"\u6b63\u786e\u6027",id:"\u6b63\u786e\u6027",level:3},{value:"\u89c6\u56fe",id:"\u89c6\u56fe",level:2}];function o(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"range-v3\u91cd\u5851\u73b0\u4ee3c\u7684\u6570\u636e\u5904\u7406\u65b9\u5f0f",children:"Range-v3\uff0c\u91cd\u5851\u73b0\u4ee3C++\u7684\u6570\u636e\u5904\u7406\u65b9\u5f0f"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Range-v3\u662f\u4e00\u4e2a\u73b0\u4ee3C++\u5e93\uff0c\u5b83\u57fa\u4e8e\u201c\u8303\u56f4\u201d\u6982\u5ff5\u6765\u63d0\u4f9b\u5f3a\u5927\u7684\u6570\u636e\u5904\u7406\u529f\u80fd\uff0c\u4f7f\u5f97\u64cd\u4f5c\u548c\u8fed\u4ee3\u96c6\u5408\u66f4\u4e3a\u76f4\u89c2\u548c\u7b80\u6d01\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5728C++11\u53ca\u4ee5\u540e\u7684\u7248\u672c\u4e2d\uff0c\u6807\u51c6\u5e93\u9010\u6b65\u589e\u52a0\u4e86\u5bf9lambda\u8868\u8fbe\u5f0f\u3001\u81ea\u52a8\u7c7b\u578b\u63a8\u5bfc\u7b49\u73b0\u4ee3\u7279\u6027\u7684\u652f\u6301\uff0c\u8fd9\u6781\u5927\u5730\u589e\u5f3a\u4e86\u8bed\u8a00\u7684\u8868\u8fbe\u529b\u548c\u7075\u6d3b\u6027\u3002\u7136\u800c\uff0c\u5bf9\u4e8e\u6570\u636e\u7684\u5904\u7406\u5c24\u5176\u662f\u96c6\u5408\u7684\u64cd\u4f5c\uff0c\u4f20\u7edf\u7684\u8fed\u4ee3\u5668\u548c\u7b97\u6cd5\u867d\u7136\u529f\u80fd\u5f3a\u5927\uff0c\u4f46\u4ee3\u7801\u5f80\u5f80\u8fc7\u4e8e\u7e41\u7410\u4e14\u96be\u4ee5\u9605\u8bfb\u548c\u7ef4\u62a4\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Range-v3\u5c06\u201c\u8303\u56f4\u201d\u6982\u5ff5\u5f15\u5165C++\u4e2d\u3002\u5b83\u7684\u76ee\u6807\u662f\u63d0\u4f9b\u4e00\u79cd\u66f4\u4e3a\u73b0\u4ee3\u548c\u9ad8\u6548\u7684\u65b9\u5f0f\u6765\u64cd\u4f5c\u6570\u636e\uff0c\u4f7f\u5f97\u4ee3\u7801\u4e0d\u4ec5\u66f4\u7b80\u6d01\uff0c\u800c\u4e14\u6027\u80fd\u66f4\u4f18\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.blockquote,{children:"\n"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Ranges\u662f\u6807\u51c6\u6a21\u677f\u5e93\u7684\u6269\u5c55\uff0c\u5b83\u901a\u8fc7\u4f7f\u8fed\u4ee3\u5668\u548c\u7b97\u6cd5\u53ef\u7ec4\u5408\uff0c\u589e\u5f3a\u4e86\u5176\u529f\u80fd\u3002\u4e0e\u5176\u4ed6\u8bd5\u56fe\u6452\u5f03\u8fed\u4ee3\u5668\u7684\u7c7b\u4f3c\u8303\u56f4\u89e3\u51b3\u65b9\u6848\u4e0d\u540c\uff0crange-v3\u4e2d\u7684ranges\u662f\u5728\u8fed\u4ee3\u5668\u4e4b\u4e0a\u7684\u4e00\u4e2a\u62bd\u8c61\u5c42\u3002"}),"\n",(0,i.jsx)(e.li,{children:"Range-v3\u5efa\u7acb\u5728\u4e09\u4e2a\u652f\u67f1\u4e0a\uff1a\u89c6\u56fe\uff08Views\uff09\u3001\u64cd\u4f5c\uff08Actions\uff09\u548c\u7b97\u6cd5\uff08Algorithms\uff09\u3002\u5176\u4e2d\u7684\u7b97\u6cd5\u4e0e\u60a8\u5728STL\u4e2d\u5df2\u7ecf\u719f\u6089\u7684\u7b97\u6cd5\u76f8\u540c\uff0c\u53ea\u662f\u5728range-v3\u4e2d\uff0c\u6240\u6709\u7684\u7b97\u6cd5\u90fd\u589e\u52a0\u4e86\u63a5\u53d7\u8303\u56f4\u7684\u91cd\u8f7d\uff0c\u9664\u4e86\u63a5\u53d7\u8fed\u4ee3\u5668\u7684\u91cd\u8f7d\u3002\u89c6\u56fe\u662f\u5bf9\u8303\u56f4\u7684\u53ef\u7ec4\u5408\u9002\u914d\uff0c\u8fd9\u79cd\u9002\u914d\u5728\u8fed\u4ee3\u89c6\u56fe\u65f6\u60f0\u6027\u5730\u53d1\u751f\u3002\u64cd\u4f5c\u5219\u662f\u7b97\u6cd5\u5bf9\u5bb9\u5668\u7684\u6025\u5207\u5e94\u7528\uff0c\u5b83\u4f1a\u5c31\u5730\u4fee\u6539\u5bb9\u5668\u5e76\u8fd4\u56de\u5b83\u4ee5\u4f9b\u8fdb\u4e00\u6b65\u5904\u7406\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Range-v3\u662f\u4e00\u4e2a\u901a\u7528\u5e93\uff0c\u5b83\u589e\u5f3a\u4e86\u73b0\u6709\u6807\u51c6\u5e93\u7684\u529f\u80fd\uff0c\u63d0\u4f9b\u4e86\u5904\u7406\u8303\u56f4\u7684\u8bbe\u65bd\u3002\u8303\u56f4\u53ef\u4ee5\u5927\u81f4\u88ab\u7406\u89e3\u4e3a\u4e00\u5bf9\u8fed\u4ee3\u5668\u7684\u7ec4\u5408\uff0c\u5c3d\u7ba1\u5b83\u4eec\u4e0d\u4e00\u5b9a\u8981\u8fd9\u6837\u5b9e\u73b0\u3002\u5c06\u5f00\u59cb/\u7ed3\u675f\u8fed\u4ee3\u5668\u6346\u7ed1\u6210\u4e00\u4e2a\u5355\u4e00\u5bf9\u8c61\u5e26\u6765\u4e86\u51e0\u4e2a\u597d\u5904\uff1a\u4fbf\u5229\u6027\u3001\u53ef\u7ec4\u5408\u6027\u548c\u6b63\u786e\u6027\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u4fbf\u5229\u6027",children:"\u4fbf\u5229\u6027"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5c06\u5355\u4e2a\u8303\u56f4\u5bf9\u8c61\u4f20\u9012\u7ed9\u7b97\u6cd5\u6bd4\u5355\u72ec\u4f20\u9012\u5f00\u59cb/\u7ed3\u675f\u8fed\u4ee3\u5668\u66f4\u4e3a\u65b9\u4fbf\u3002\u5bf9\u6bd4\u5982\u4e0b\uff1a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"std::vector<int> v{/*...*/};\r\nstd::sort( v.begin(), v.end() );\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"std::vector<int> v{/*...*/};\r\nranges::sort( v );\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Range-v3\u5305\u542b\u4e86\u6240\u6709\u6807\u51c6\u7b97\u6cd5\u7684\u5b8c\u6574\u5b9e\u73b0\uff0c\u5e76\u4e3a\u4fbf\u5229\u6027\u63d0\u4f9b\u4e86\u57fa\u4e8e\u8303\u56f4\u7684\u91cd\u8f7d\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u53ef\u7ec4\u5408\u6027",children:"\u53ef\u7ec4\u5408\u6027"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u62e5\u6709\u5355\u4e00\u7684\u8303\u56f4\u5bf9\u8c61\u5141\u8bb8\u64cd\u4f5c\u7684\u6d41\u6c34\u7ebf\u3002\u5728\u6d41\u6c34\u7ebf\u4e2d\uff0c\u8303\u56f4\u901a\u8fc7\u89c6\u56fe\u88ab\u60f0\u6027\u9002\u914d\u6216\u901a\u8fc7\u64cd\u4f5c\u88ab\u6025\u5207\u5730\u4ee5\u67d0\u79cd\u65b9\u5f0f\u53d8\u66f4\uff0c\u7ed3\u679c\u7acb\u5373\u53ef\u7528\u4e8e\u8fdb\u4e00\u6b65\u7684\u9002\u914d\u6216\u53d8\u66f4\u3002\u60f0\u6027\u9002\u914d\u7531\u89c6\u56fe\u5904\u7406\uff0c\u6025\u5207\u53d8\u66f4\u7531\u64cd\u4f5c\u5904\u7406\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u4f7f\u7528\u89c6\u56fe\u8fc7\u6ee4\u5bb9\u5668\u4e2d\u7b26\u5408\u6761\u4ef6\u7684\u5143\u7d20\uff0c\u5e76\u4f7f\u7528\u51fd\u6570\u8f6c\u6362\u5f97\u5230\u7684\u8303\u56f4\u3002\u6ce8\u610f\uff0c\u5e95\u5c42\u6570\u636e\u662f\u5e38\u91cf\uff0c\u5e76\u4e14\u4e0d\u4f1a\u88ab\u89c6\u56fe\u6539\u53d8\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'std::vector<int> const vi{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\r\nusing namespace ranges;\r\nauto rng = vi | views::remove_if([](int i){ return i % 2 == 1; })\r\n              | views::transform([](int i){ return std::to_string(i); });\r\n// rng == {"2","4","6","8","10"};\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c",(0,i.jsx)(e.code,{children:"rng"})," \u4ec5\u4ec5\u5b58\u50a8\u4e86\u5bf9\u5e95\u5c42\u6570\u636e\u4ee5\u53ca\u8fc7\u6ee4\u548c\u8f6c\u6362\u51fd\u6570\u7684\u5f15\u7528\u3002\u5728\u8fed\u4ee3 ",(0,i.jsx)(e.code,{children:"rng"})," \u4e4b\u524d\uff0c\u4e0d\u4f1a\u6267\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u64cd\u4f5c\uff08actions\uff09\u6025\u5207\u5730\u6267\u884c\u5b83\u4eec\u7684\u5de5\u4f5c\uff0c\u4f46\u5b83\u4eec\u4e5f\u53ef\u4ee5\u7ec4\u5408\u3002\u8003\u8651\u4e0b\u9762\u7684\u4ee3\u7801\uff0c\u5b83\u5c06\u4e00\u4e9b\u6570\u636e\u8bfb\u5165\u4e00\u4e2a\u5411\u91cf\uff0c\u5bf9\u5176\u8fdb\u884c\u6392\u5e8f\u5e76\u4f7f\u5176\u552f\u4e00\u5316\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"extern std::vector<int> read_data();\r\nusing namespace ranges;\r\nstd::vector<int> vi = read_data() | actions::sort | actions::unique;\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4e0e\u89c6\u56fe\u4e0d\u540c\uff0c\u5728\u7ba1\u9053\u4e2d\u7684\u6bcf\u4e00\u6b65\uff08",(0,i.jsx)(e.code,{children:"actions::sort"})," \u548c ",(0,i.jsx)(e.code,{children:"actions::unique"}),"\uff09\u90fd\u901a\u8fc7\u503c\u63a5\u53d7\u4e00\u4e2a\u5bb9\u5668\uff0c\u5c31\u5730\u4fee\u6539\u5b83\uff0c\u5e76\u8fd4\u56de\u5b83\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u6b63\u786e\u6027",children:"\u6b63\u786e\u6027"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u65e0\u8bba\u60a8\u662f\u4f7f\u7528\u89c6\u56fe\u8fd8\u662f\u64cd\u4f5c\uff0c\u60a8\u90fd\u662f\u4ee5\u7eaf\u51fd\u6570\u5f0f\u3001\u58f0\u660e\u5f0f\u7684\u98ce\u683c\u64cd\u4f5c\u6570\u636e\u3002\u60a8\u5f88\u5c11\u9700\u8981\u81ea\u5df1\u5904\u7406\u8fed\u4ee3\u5668\uff0c\u5c3d\u7ba1\u5728\u9700\u8981\u65f6\u5b83\u4eec\u5b58\u5728\u4e8e\u5e55\u540e\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u901a\u8fc7\u58f0\u660e\u5f0f\u548c\u51fd\u6570\u5f0f\u64cd\u4f5c\uff0c\u800c\u4e0d\u662f\u547d\u4ee4\u5f0f\u64cd\u4f5c\uff0c\u6211\u4eec\u51cf\u5c11\u4e86\u5bf9\u660e\u663e\u72b6\u6001\u64cd\u4f5c\u53ca\u5206\u652f\u548c\u5faa\u73af\u7684\u9700\u8981\u3002\u8fd9\u51cf\u5c11\u4e86\u7a0b\u5e8f\u53ef\u80fd\u5904\u4e8e\u7684\u72b6\u6001\u6570\u91cf\uff0c\u4ece\u800c\u964d\u4f4e\u4e86\u60a8\u7684\u7a0b\u5e8f\u7684\u9519\u8bef\u7387\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7b80\u800c\u8a00\u4e4b\uff0c\u5982\u679c\u60a8\u80fd\u627e\u5230\u4e00\u79cd\u65b9\u5f0f\uff0c\u901a\u8fc7\u5bf9\u6570\u636e\u8fdb\u884c\u51fd\u6570\u5f0f\u8f6c\u6362\u7684\u7ec4\u5408\u6765\u8868\u8fbe\u60a8\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u6784\u9020\u4f7f\u60a8\u7684\u4ee3\u7801\u6b63\u786e\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u89c6\u56fe",children:"\u89c6\u56fe"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6b63\u5982\u4e0a\u6587\u6240\u8ff0\uff0c\u8303\u56f4\u76f8\u6bd4\u8fed\u4ee3\u5668\u7684\u4e00\u4e2a\u5de8\u5927\u4f18\u52bf\u662f\u5b83\u4eec\u7684\u53ef\u7ec4\u5408\u6027\u3002\u5b83\u4eec\u652f\u6301\u4e00\u79cd\u51fd\u6570\u5f0f\u7f16\u7a0b\u98ce\u683c\uff0c\u5176\u4e2d\u6570\u636e\u901a\u8fc7\u4e00\u7cfb\u5217\u7ec4\u5408\u5668\u8fdb\u884c\u64cd\u4f5c\u3002\u6b64\u5916\uff0c\u8fd9\u4e9b\u7ec4\u5408\u5668\u53ef\u4ee5\u662f\u60f0\u6027\u7684\uff0c\u53ea\u5728\u8bf7\u6c42\u7b54\u6848\u65f6\u624d\u5de5\u4f5c\uff0c\u5e76\u4e14\u662f\u7eaf\u51fd\u6570\u5f0f\u7684\uff0c\u4e0d\u4f1a\u6539\u53d8\u539f\u59cb\u6570\u636e\u3002\u8fd9\u4f7f\u5f97\u63a8\u7406\u4f60\u7684\u4ee3\u7801\u53d8\u5f97\u66f4\u5bb9\u6613\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u89c6\u56fe\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u5305\u88c5\u5668\uff0c\u5b83\u4ee5\u67d0\u79cd\u81ea\u5b9a\u4e49\u7684\u65b9\u5f0f\u5448\u73b0\u5e95\u5c42\u5143\u7d20\u5e8f\u5217\u7684\u89c6\u56fe\uff0c\u800c\u4e0d\u6539\u53d8\u6216\u590d\u5236\u5b83\u3002\u89c6\u56fe\u521b\u5efa\u548c\u590d\u5236\u6210\u672c\u4f4e\uff0c\u5e76\u5177\u6709\u975e\u62e5\u6709\u5f15\u7528\u8bed\u4e49\u3002\u4e0b\u9762\u662f\u4e00\u4e9b\u4f7f\u7528\u89c6\u56fe\u7684\u4f8b\u5b50\uff1a"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u8c13\u8bcd\u8fc7\u6ee4\u5bb9\u5668\u5e76\u8f6c\u6362\u5b83\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:'std::vector<int> const vi{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};\r\nusing namespace ranges;\r\nauto rng = vi | views::remove_if([](int i){return i % 2 == 1;})\r\n              | views::transform([](int i){return std::to_string(i);});\r\n// rng == {"2","4","6","8","10"};\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u751f\u6210\u4e00\u4e2a\u4ece1\u5f00\u59cb\u7684\u65e0\u9650\u6574\u6570\u5217\u8868\uff0c\u5bf9\u5b83\u4eec\u8fdb\u884c\u5e73\u65b9\uff0c\u53d6\u524d10\u4e2a\uff0c\u5e76\u5bf9\u5b83\u4eec\u6c42\u548c\uff1a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"using namespace ranges;\r\nint sum = accumulate(views::ints(1)\r\n                   | views::transform([](int i){return i*i;})\r\n                   | views::take(10), 0);\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u8303\u56f4\u7406\u89e3\u5728\u8fd0\u884c\u65f6\u751f\u6210\u4e00\u4e2a\u5e8f\u5217\uff0c\u5e76\u7528\u5b83\u521d\u59cb\u5316\u4e00\u4e2a\u5411\u91cf\uff1a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"using namespace ranges;\r\nauto vi =\r\n    views::for_each(views::ints(1, 10), [](int i) {\r\n        return yield_from(views::repeat_n(i, i));\r\n    })\r\n  | to<std::vector>();\r\n// vi == {1,2,2,3,3,3,4,4,4,4,5,5,5,5,5,...}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>t});var r=s(6540);const i={},c=r.createContext(i);function l(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);