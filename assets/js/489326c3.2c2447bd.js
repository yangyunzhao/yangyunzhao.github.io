"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3601],{6356:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>t});var d=c(4848),r=c(8453);const s={},l="\u5c5e\u6027\u5173\u952e\u5b5713",i={id:"achieve/C++\u6742\u8c08/\u8bed\u6cd5\u7279\u6027/\u5c5e\u6027\u5173\u952e\u5b57",title:"\u5c5e\u6027\u5173\u952e\u5b57",description:"\u672c\u6587\u662f\u8f6c\u8f7d\uff0c\u51fa\u5904\u4e0d\u53ef\u8003",source:"@site/docs/achieve/C++\u6742\u8c08/\u8bed\u6cd5\u7279\u6027/\u5c5e\u6027\u5173\u952e\u5b57.md",sourceDirName:"achieve/C++\u6742\u8c08/\u8bed\u6cd5\u7279\u6027",slug:"/achieve/C++\u6742\u8c08/\u8bed\u6cd5\u7279\u6027/\u5c5e\u6027\u5173\u952e\u5b57",permalink:"/docs/achieve/C++\u6742\u8c08/\u8bed\u6cd5\u7279\u6027/\u5c5e\u6027\u5173\u952e\u5b57",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/achieve/C++\u6742\u8c08/\u8bed\u6cd5\u7279\u6027/\u5c5e\u6027\u5173\u952e\u5b57.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5185\u8054\u53d8\u91cf\u2014\u2014\u4fdd\u8bc1\u53d8\u91cf\u552f\u4e00\u6027\u7684\u5229\u5668",permalink:"/docs/achieve/C++\u6742\u8c08/\u8bed\u6cd5\u7279\u6027/\u5185\u8054\u53d8\u91cf\u2014\u2014\u4fdd\u8bc1\u53d8\u91cf\u552f\u4e00\u6027\u7684\u5229\u5668"},next:{title:"\u7ed3\u6784\u5316\u7ed1\u5b9a",permalink:"/docs/achieve/C++\u6742\u8c08/\u8bed\u6cd5\u7279\u6027/\u7ed3\u6784\u5316\u7ed1\u5b9a"}},o={},t=[{value:"1. <code>[[nodiscard]]</code>",id:"1-nodiscard",level:3},{value:"2. <code>[[maybe_unused]]</code>",id:"2-maybe_unused",level:3},{value:"3. <code>[[deprecated]]</code> \u548c <code>[[deprecated(&quot;reason&quot;)]]</code>",id:"3-deprecated-\u548c-deprecatedreason",level:3},{value:"4. <code>[[fallthrough]]</code>",id:"4-fallthrough",level:3},{value:"5. <code>[[likely]]</code> \u548c <code>[[unlikely]]</code> (C++20)",id:"5-likely-\u548c-unlikely-c20",level:3}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u672c\u6587\u662f\u8f6c\u8f7d\uff0c\u51fa\u5904\u4e0d\u53ef\u8003"}),"\n"]}),"\n",(0,d.jsx)(n.h1,{id:"\u5c5e\u6027\u5173\u952e\u5b5713",children:"\u5c5e\u6027\u5173\u952e\u5b5713"}),"\n",(0,d.jsx)(n.p,{children:"\u73b0\u4ee3C++\u5f15\u5165\u4e86\u5c5e\u6027\u5173\u952e\u5b57\uff0c\u65e8\u5728\u4e3a\u7f16\u8bd1\u5668\u63d0\u4f9b\u66f4\u591a\u7684\u4fe1\u606f\uff0c\u4ee5\u4fbf\u8fdb\u884c\u4f18\u5316\u6216\u53d1\u51fa\u8b66\u544a\u548c\u9519\u8bef\u3002\u8fd9\u4e9b\u5c5e\u6027\u5173\u952e\u5b57\u4e0d\u6539\u53d8\u7a0b\u5e8f\u7684\u903b\u8f91\uff0c\u4f46\u5b83\u4eec\u5bf9\u4e8e\u63d0\u9ad8\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u3001\u7ef4\u62a4\u6027\u548c\u6027\u80fd\u975e\u5e38\u6709\u7528\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u7528\u7684C++\u5c5e\u6027\u5173\u952e\u5b57\u53ca\u5176\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,d.jsxs)(n.h3,{id:"1-nodiscard",children:["1. ",(0,d.jsx)(n.code,{children:"[[nodiscard]]"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"[[nodiscard]]"}),"\u5c5e\u6027\u7528\u4e8e\u5f3a\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4e0d\u5e94\u88ab\u5ffd\u7565\uff0c\u5982\u679c\u8c03\u7528\u8005\u672a\u4f7f\u7528\u8be5\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff0c\u7f16\u8bd1\u5668\u5c06\u53d1\u51fa\u8b66\u544a\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-cpp",children:"[[nodiscard]] int compute() {\r\n    return 42;\r\n}\r\n\r\nvoid nodiscardExample() {\r\n    compute();  \t\t\t// \u8fd9\u91cc\u4f1a\u4ea7\u751f\u8b66\u544a\uff0c\u56e0\u4e3a\u5ffd\u7565\u4e86\u8fd4\u56de\u503c\r\n    int value = compute();  // \u6ca1\u6709\u8b66\u544a\uff0c\u56e0\u4e3a\u4f7f\u7528\u4e86\u8fd4\u56de\u503c\r\n}\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"2-maybe_unused",children:["2. ",(0,d.jsx)(n.code,{children:"[[maybe_unused]]"})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"[[maybe_unused]]"}),"\u5c5e\u6027\u7528\u4e8e\u6307\u793a\u53d8\u91cf\u6216\u51fd\u6570\u53ef\u80fd\u672a\u88ab\u4f7f\u7528\uff0c\u4ece\u800c\u907f\u514d\u5728\u672a\u4f7f\u7528\u53d8\u91cf\u6216\u51fd\u6570\u65f6\u7f16\u8bd1\u5668\u53d1\u51fa\u7684\u8b66\u544a\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-cpp",children:"[[maybe_unused]] void helperFunction() {\r\n    // \u53ef\u80fd\u4e0d\u4f1a\u88ab\u8c03\u7528\u7684\u51fd\u6570\r\n}\r\n\r\nvoid maybeUnusedExample() {\r\n    [[maybe_unused]] int unusedVariable = 42;  // \u53ef\u80fd\u4e0d\u4f1a\u88ab\u4f7f\u7528\u7684\u53d8\u91cf\r\n}\n"})}),"\n",(0,d.jsxs)(n.h3,{id:"3-deprecated-\u548c-deprecatedreason",children:["3. ",(0,d.jsx)(n.code,{children:"[[deprecated]]"})," \u548c ",(0,d.jsx)(n.code,{children:'[[deprecated("reason")]]'})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"[[deprecated]]"}),"\u5c5e\u6027\u7528\u4e8e\u6807\u8bb0\u5df2\u5f03\u7528\u7684\u5b9e\u4f53\u3002\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u5b57\u7b26\u4e32\u5b57\u9762\u91cf\u4f5c\u4e3a\u53c2\u6570\uff0c\u8bf4\u660e\u5f03\u7528\u7684\u539f\u56e0\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-cpp",children:'[[deprecated("Use newFunction instead")]] void oldFunction() {\r\n    // \u5df2\u5f03\u7528\u7684\u51fd\u6570\r\n}\r\n\r\nvoid deprecatedExample() {\r\n    oldFunction();  // \u8c03\u7528\u6b64\u51fd\u6570\u65f6\uff0c\u7f16\u8bd1\u5668\u5c06\u53d1\u51fa\u5f03\u7528\u8b66\u544a\r\n}\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"4-fallthrough",children:["4. ",(0,d.jsx)(n.code,{children:"[[fallthrough]]"})]}),"\n",(0,d.jsxs)(n.p,{children:["\u5728",(0,d.jsx)(n.code,{children:"switch"}),"\u8bed\u53e5\u4e2d\uff0c",(0,d.jsx)(n.code,{children:"[[fallthrough]]"}),"\u5c5e\u6027\u7528\u4e8e\u660e\u786e\u6307\u793a\u5141\u8bb8\u4ece\u4e00\u4e2a",(0,d.jsx)(n.code,{children:"case"}),"\u6807\u7b7e\u5411\u4e0b\u201c\u7a7f\u900f\u201d\u5230\u4e0b\u4e00\u4e2a",(0,d.jsx)(n.code,{children:"case"}),"\u6807\u7b7e\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u7f16\u8bd1\u5668\u5173\u4e8e\u975e\u6545\u610f\u7684",(0,d.jsx)(n.code,{children:"case"}),"\u7a7f\u900f\u7684\u8b66\u544a\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-cpp",children:'void fallthroughExample(int num) {\r\n    switch (num) {\r\n        case 1:\r\n            std::cout << "1";\r\n            [[fallthrough]];\r\n        case 2:\r\n            std::cout << "2";\r\n            break;\r\n        default:\r\n            std::cout << "Other";\r\n    }\r\n}\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"5-likely-\u548c-unlikely-c20",children:["5. ",(0,d.jsx)(n.code,{children:"[[likely]]"})," \u548c ",(0,d.jsx)(n.code,{children:"[[unlikely]]"})," (C++20)"]}),"\n",(0,d.jsxs)(n.p,{children:["C++20\u5f15\u5165\u4e86",(0,d.jsx)(n.code,{children:"[[likely]]"}),"\u548c",(0,d.jsx)(n.code,{children:"[[unlikely]]"}),"\u5c5e\u6027\uff0c\u7528\u4e8e\u544a\u77e5\u7f16\u8bd1\u5668\u67d0\u4e2a\u6761\u4ef6\u5206\u652f\u7684\u53ef\u80fd\u6027\uff0c\u4ee5\u5e2e\u52a9\u4f18\u5316\u751f\u6210\u7684\u4ee3\u7801\u3002"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-cpp",children:'void likelyExample(int num) {\r\n    if (num == 42) [[likely]] {\r\n        std::cout << "It\'s 42";\r\n    } else [[unlikely]] {\r\n        std::cout << "Not 42";\r\n    }\r\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u901a\u8fc7\u4e0a\u8ff0\u793a\u4f8b\uff0c\u53ef\u4ee5\u770b\u5230C++\u5c5e\u6027\u5173\u952e\u5b57\u5982\u4f55\u5e2e\u52a9\u5f00\u53d1\u8005\u5411\u7f16\u8bd1\u5668\u63d0\u4f9b\u989d\u5916\u7684\u4fe1\u606f\uff0c\u4ece\u800c\u4f18\u5316\u4ee3\u7801\u3001\u751f\u6210\u8b66\u544a\u6216\u6539\u8fdb\u4ee3\u7801\u53ef\u8bfb\u6027\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>l,x:()=>i});var d=c(6540);const r={},s=d.createContext(r);function l(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);