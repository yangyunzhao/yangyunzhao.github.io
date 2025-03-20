"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5384],{4269:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"\u5f00\u6e90\u63a8\u8350/C++/breep","title":"Breep\uff0c\u4e00\u4e2a\u5f3a\u5927\u7684c++\u5e93","description":"\u8f6c\u8f7d\u81ea \u6715\u7231\u7f16\u7a0b","source":"@site/docs/\u5f00\u6e90\u63a8\u8350/C++/breep.md","sourceDirName":"\u5f00\u6e90\u63a8\u8350/C++","slug":"/\u5f00\u6e90\u63a8\u8350/C++/breep","permalink":"/docs/\u5f00\u6e90\u63a8\u8350/C++/breep","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5f00\u6e90\u63a8\u8350/C++/breep.md","tags":[],"version":"current","frontMatter":{},"sidebar":"opensource_recommendation","previous":{"title":"TBB\u5e93\u5b66\u4e60\u7b14\u8bb0","permalink":"/docs/\u5f00\u6e90\u63a8\u8350/C++/TBB"},"next":{"title":"fmtlog \u4ecb\u7ecd","permalink":"/docs/\u5f00\u6e90\u63a8\u8350/C++/fmtlog"}}');var l=r(4848),i=r(8453);const d={},c="Breep\uff0c\u4e00\u4e2a\u5f3a\u5927\u7684c++\u5e93",t={},o=[{value:"Breep\u7684\u4e3b\u8981\u7279\u70b9",id:"breep\u7684\u4e3b\u8981\u7279\u70b9",level:2},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"\u8865\u5145\u8d44\u6599",id:"\u8865\u5145\u8d44\u6599",level:2},{value:"1. \u5bf9\u7b49\u7f51\u7edc\u57fa\u7840\uff1a\u53bb\u4e2d\u5fc3\u5316\u7684\u9b45\u529b",id:"1-\u5bf9\u7b49\u7f51\u7edc\u57fa\u7840\u53bb\u4e2d\u5fc3\u5316\u7684\u9b45\u529b",level:3},{value:"2. Breep \u7684\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\uff1a\u54cd\u5e94\u5f0f\u7f16\u7a0b",id:"2-breep-\u7684\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\u54cd\u5e94\u5f0f\u7f16\u7a0b",level:3},{value:"3. Breep \u7684\u9ad8\u7ea7 API\uff1a\u5316\u7e41\u4e3a\u7b80",id:"3-breep-\u7684\u9ad8\u7ea7-api\u5316\u7e41\u4e3a\u7b80",level:3},{value:"4. Breep \u5e94\u7528\u5b9e\u8df5\uff1a\u4ece\u5165\u95e8\u5230\u8fdb\u9636",id:"4-breep-\u5e94\u7528\u5b9e\u8df5\u4ece\u5165\u95e8\u5230\u8fdb\u9636",level:3},{value:"5. Breep \u9ad8\u7ea7\u7528\u6cd5\uff1a\u5b9a\u5236\u4e0e\u4f18\u5316",id:"5-breep-\u9ad8\u7ea7\u7528\u6cd5\u5b9a\u5236\u4e0e\u4f18\u5316",level:3},{value:"6. \u5176\u4ed6",id:"6-\u5176\u4ed6",level:3},{value:"\u5206\u5e03\u5f0f\u7cfb\u7edf",id:"\u5206\u5e03\u5f0f\u7cfb\u7edf",level:4},{value:"\u591a\u4eba\u6e38\u620f",id:"\u591a\u4eba\u6e38\u620f",level:4},{value:"\u5b9e\u65f6\u901a\u4fe1\u5e94\u7528",id:"\u5b9e\u65f6\u901a\u4fe1\u5e94\u7528",level:4},{value:"7. \u603b\u7ed3\uff1aBreep \u52a9\u529b P2P \u5f00\u53d1",id:"7-\u603b\u7ed3breep-\u52a9\u529b-p2p-\u5f00\u53d1",level:3}];function p(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"breep\u4e00\u4e2a\u5f3a\u5927\u7684c\u5e93",children:"Breep\uff0c\u4e00\u4e2a\u5f3a\u5927\u7684c++\u5e93"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u8f6c\u8f7d\u81ea \u6715\u7231\u7f16\u7a0b"}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Breep\u662f\u4e00\u4e2a\u57fa\u4e8e\u4e8b\u4ef6\u7684\u3001\u9ad8\u7ea7\u522b\u7684C++14\u5bf9\u7b49\u7f51\u7edc\u5e93\uff0c\u65e8\u5728\u7b80\u5316\u5bf9\u7b49\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u65b9\u5f0f\u6765\u5efa\u7acb\u5bf9\u7b49\u7f51\u7edc\u8fde\u63a5\uff0c\u5e76\u652f\u6301\u5404\u79cd\u5bf9\u7b49\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u7684\u6784\u5efa\uff0c\u5305\u62ec\u5206\u5e03\u5f0f\u7cfb\u7edf\u3001\u591a\u4eba\u6e38\u620f\u3001\u5b9e\u65f6\u901a\u4fe1\u7b49\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"breep\u7684\u4e3b\u8981\u7279\u70b9",children:"Breep\u7684\u4e3b\u8981\u7279\u70b9"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u4e8b\u4ef6\u9a71\u52a8\u7684\u67b6\u6784"}),"\uff1aBreep\u91c7\u7528\u4e86\u4e8b\u4ef6\u9a71\u52a8\u7684\u67b6\u6784\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u6ce8\u518c\u548c\u5904\u7406\u4e8b\u4ef6\u6765\u5b9e\u73b0\u5bf9\u7b49\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u7684\u903b\u8f91\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u9ad8\u7ea7\u522b\u7684API"}),"\uff1aBreep\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ad8\u7ea7\u522b\u7684API\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u80fd\u591f\u8f7b\u677e\u5730\u5efa\u7acb\u5bf9\u7b49\u8fde\u63a5\u3001\u53d1\u9001\u548c\u63a5\u6536\u6570\u636e\u7b49\u64cd\u4f5c\uff0c\u800c\u65e0\u9700\u6df1\u5165\u7814\u7a76\u5e95\u5c42\u7f51\u7edc\u7ec6\u8282\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u8de8\u5e73\u53f0\u652f\u6301"}),"\uff1aBreep\u88ab\u8bbe\u8ba1\u4e3a\u8de8\u5e73\u53f0\u7684\u5e93\uff0c\u5728\u652f\u6301C++14\u7684\u5404\u79cd\u64cd\u4f5c\u7cfb\u7edf\u548c\u5e73\u53f0\u4e0a\u90fd\u53ef\u4ee5\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u53ef\u6269\u5c55\u6027"}),"\uff1aBreep\u63d0\u4f9b\u4e86\u7075\u6d3b\u7684\u6269\u5c55\u673a\u5236\uff0c\u4f7f\u5f97\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6269\u5c55\u548c\u5b9a\u5236\u5e93\u7684\u529f\u80fd\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u8f7b\u91cf\u7ea7\u548c\u9ad8\u6548\u6027"}),"\uff1aBreep\u88ab\u8bbe\u8ba1\u4e3a\u8f7b\u91cf\u7ea7\u548c\u9ad8\u6548\u7684\u5e93\uff0c\u5c3d\u53ef\u80fd\u51cf\u5c11\u5185\u5b58\u5360\u7528\u548cCPU\u5f00\u9500\uff0c\u540c\u65f6\u63d0\u4f9b\u826f\u597d\u7684\u6027\u80fd\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u603b\u7684\u6765\u8bf4\uff0cBreep\u662f\u4e00\u4e2a\u9762\u5411C++\u5f00\u53d1\u8005\u7684\u9ad8\u7ea7\u5bf9\u7b49\u7f51\u7edc\u5e93\uff0c\u65e8\u5728\u7b80\u5316\u5bf9\u7b49\u7f51\u7edc\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u8fc7\u7a0b\uff0c\u5e76\u63d0\u4f9b\u9ad8\u6027\u80fd\u548c\u53ef\u6269\u5c55\u6027\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9e\u4f8b",children:"\u5b9e\u4f8b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u4f7f\u7528Breep\u5bf9\u7b49\u7f51\u7edc\u5e93\u7684C++\u4ee3\u7801\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u5efa\u7acb\u5bf9\u7b49\u8fde\u63a5\u5e76\u8fdb\u884c\u57fa\u672c\u7684\u6570\u636e\u4f20\u8f93\uff1a"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'#include <breep/breep.hpp>\r\n\r\nint main() {\r\n    // \u521d\u59cb\u5316Breep\u5e93\r\n    breep::initialize();\r\n\r\n    // \u521b\u5efa\u5bf9\u7b49\u8282\u70b9\r\n    auto node1 = breep::create_node();\r\n    auto node2 = breep::create_node();\r\n\r\n    // \u5efa\u7acb\u5bf9\u7b49\u8fde\u63a5\r\n    node1->connect(node2);\r\n    node2->connect(node1);\r\n\r\n    // \u5728\u8282\u70b9\u4e4b\u95f4\u53d1\u9001\u6d88\u606f\r\n    node1->send_message("Hello from node 1!");\r\n    node2->send_message("Hello from node 2!");\r\n\r\n    // \u63a5\u6536\u6d88\u606f\r\n    node1->set_message_handler([&](const std::string& message) {\r\n        std::cout << "Node 1 received: " << message << std::endl;\r\n    });\r\n    node2->set_message_handler([&](const std::string& message) {\r\n        std::cout << "Node 2 received: " << message << std::endl;\r\n    });\r\n\r\n    // \u6e05\u7406\u8d44\u6e90\r\n    breep::shutdown();\r\n\r\n    return 0;\r\n}\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u5305\u542b\u4e86Breep\u5e93\u7684\u5934\u6587\u4ef6\uff0c\u7136\u540e\u521b\u5efa\u4e86\u4e24\u4e2a\u5bf9\u7b49\u8282\u70b9node1\u548cnode2\u3002\u63a5\u7740\u6211\u4eec\u5efa\u7acb\u4e86\u5bf9\u7b49\u8fde\u63a5\uff0c\u7136\u540e\u901a\u8fc7\u8282\u70b9\u4e4b\u95f4\u7684send_message\u51fd\u6570\u53d1\u9001\u6d88\u606f\u3002\u6700\u540e\uff0c\u6211\u4eec\u5206\u522b\u4e3a\u6bcf\u4e2a\u8282\u70b9\u8bbe\u7f6e\u4e86\u6d88\u606f\u5904\u7406\u5668\uff0c\u4ee5\u4fbf\u63a5\u6536\u6765\u81ea\u53e6\u4e00\u8282\u70b9\u7684\u6d88\u606f\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u53ea\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u793a\u4f8b\uff0c\u7528\u4e8e\u6f14\u793aBreep\u5e93\u7684\u57fa\u672c\u7528\u6cd5\u3002\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5904\u7406\u66f4\u590d\u6742\u7684\u573a\u666f\uff0c\u5982\u9519\u8bef\u5904\u7406\u3001\u8fde\u63a5\u7ba1\u7406\u7b49\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u8865\u5145\u8d44\u6599",children:"\u8865\u5145\u8d44\u6599"}),"\n",(0,l.jsx)(n.h3,{id:"1-\u5bf9\u7b49\u7f51\u7edc\u57fa\u7840\u53bb\u4e2d\u5fc3\u5316\u7684\u9b45\u529b",children:"1. \u5bf9\u7b49\u7f51\u7edc\u57fa\u7840\uff1a\u53bb\u4e2d\u5fc3\u5316\u7684\u9b45\u529b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5bf9\u7b49\u7f51\u7edc\uff08P2P\uff09\u662f\u4e00\u79cd\u5206\u5e03\u5f0f\u67b6\u6784\uff0c\u5176\u4e2d\u8282\u70b9\u65e2\u662f\u5ba2\u6237\u7aef\u53c8\u662f\u670d\u52a1\u5668\u3002\u4e0e\u4f20\u7edf\u7684\u5ba2\u6237\u7aef-\u670d\u52a1\u5668\u6a21\u578b\u4e0d\u540c\uff0cP2P \u7f51\u7edc\u6ca1\u6709\u4e2d\u592e\u670d\u52a1\u5668\uff0c\u6240\u6709\u8282\u70b9\u90fd\u5e73\u7b49\u5730\u53c2\u4e0e\u6570\u636e\u5171\u4eab\u548c\u901a\u4fe1\u3002\u8fd9\u79cd\u53bb\u4e2d\u5fc3\u5316\u7279\u6027\u5e26\u6765\u4e86\u4ee5\u4e0b\u4f18\u52bf\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u9c81\u68d2\u6027"}),": \u6ca1\u6709\u5355\u70b9\u6545\u969c\uff0c\u7f51\u7edc\u66f4\u5177\u5f39\u6027\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u53ef\u6269\u5c55\u6027"}),": \u8282\u70b9\u53ef\u4ee5\u52a8\u6001\u52a0\u5165\u548c\u79bb\u5f00\uff0c\u7f51\u7edc\u5bb9\u91cf\u968f\u8282\u70b9\u6570\u91cf\u589e\u957f\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u9ad8\u6548\u6027"}),": \u6570\u636e\u53ef\u4ee5\u5728\u8282\u70b9\u4e4b\u95f4\u76f4\u63a5\u4f20\u8f93\uff0c\u51cf\u8f7b\u670d\u52a1\u5668\u8d1f\u62c5\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"2-breep-\u7684\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\u54cd\u5e94\u5f0f\u7f16\u7a0b",children:"2. Breep \u7684\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\uff1a\u54cd\u5e94\u5f0f\u7f16\u7a0b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Breep \u91c7\u7528\u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u903b\u8f91\u56f4\u7ed5\u7740\u5bf9\u4e8b\u4ef6\u7684\u54cd\u5e94\u800c\u6784\u5efa\u3002Breep \u63d0\u4f9b\u4e86\u4e30\u5bcc\u7684\u4e8b\u4ef6\u7c7b\u578b\uff0c\u6db5\u76d6\u8fde\u63a5\u5efa\u7acb\u3001\u6570\u636e\u63a5\u6536\u3001\u9519\u8bef\u5904\u7406\u7b49\u3002\u901a\u8fc7\u6ce8\u518c\u56de\u8c03\u51fd\u6570\uff0c\u53ef\u4ee5\u5bf9\u7279\u5b9a\u4e8b\u4ef6\u505a\u51fa\u53cd\u5e94\u3002\u8fd9\u79cd\u6a21\u578b\u4f7f\u5f97\u4ee3\u7801\u66f4\u6e05\u6670\u3001\u6a21\u5757\u5316\uff0c\u6613\u4e8e\u7ef4\u62a4\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'node->on_connect([](breep::Peer* peer) {\r\n    std::cout << "Connected to peer: " << peer->id() << std::endl;\r\n});\n'})}),"\n",(0,l.jsx)(n.h3,{id:"3-breep-\u7684\u9ad8\u7ea7-api\u5316\u7e41\u4e3a\u7b80",children:"3. Breep \u7684\u9ad8\u7ea7 API\uff1a\u5316\u7e41\u4e3a\u7b80"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Breep \u63d0\u4f9b\u4e86\u76f4\u89c2\u6613\u7528\u7684\u9ad8\u7ea7 API\uff0c\u62bd\u8c61\u4e86\u5e95\u5c42\u7f51\u7edc\u7ec6\u8282\uff0c\u8ba9\u4f60\u4e13\u6ce8\u4e8e\u5e94\u7528\u903b\u8f91\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u8282\u70b9\uff08Node\uff09"}),": \u4ee3\u8868\u7f51\u7edc\u4e2d\u7684\u4e00\u4e2a\u53c2\u4e0e\u8005\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u8fde\u63a5\uff08Connection\uff09"}),": \u4ee3\u8868\u4e24\u4e2a\u8282\u70b9\u4e4b\u95f4\u7684\u901a\u4fe1\u901a\u9053\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u6d88\u606f\uff08Message\uff09"}),": \u5728\u8fde\u63a5\u4e0a\u53d1\u9001\u7684\u6570\u636e\u5355\u5143\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'node->connect("192.168.1.100", 8080); // \u8fde\u63a5\u5230\u6307\u5b9a\u5730\u5740\u548c\u7aef\u53e3\r\nnode->send(connection, "Hello, peer!"); // \u901a\u8fc7\u8fde\u63a5\u53d1\u9001\u6d88\u606f\n'})}),"\n",(0,l.jsx)(n.h3,{id:"4-breep-\u5e94\u7528\u5b9e\u8df5\u4ece\u5165\u95e8\u5230\u8fdb\u9636",children:"4. Breep \u5e94\u7528\u5b9e\u8df5\uff1a\u4ece\u5165\u95e8\u5230\u8fdb\u9636"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u521d\u7ea7\u5b9e\u8df5\uff1a\u6587\u4ef6\u5171\u4eab\u5e94\u7528"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'// ... (\u521b\u5efa\u8282\u70b9\u3001\u8fde\u63a5\u7b49)\r\n\r\nnode->on_message([](breep::Connection* connection, const std::vector<uint8_t>& data) {\r\n    // \u5904\u7406\u63a5\u6536\u5230\u7684\u6587\u4ef6\u6570\u636e\r\n});\r\n\r\nstd::ifstream file("my_file.txt", std::ios::binary);\r\nstd::vector<uint8_t> fileData((std::istreambuf_iterator<char>(file)), std::istreambuf_iterator<char>());\r\nnode->send(connection, fileData); \n'})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fdb\u9636\u5b9e\u8df5\uff1a\u591a\u4eba\u6e38\u620f\u540c\u6b65"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:"// ... (\u521b\u5efa\u8282\u70b9\u3001\u8fde\u63a5\u7b49)\r\n\r\nnode->on_message([](breep::Connection* connection, const std::string& message) {\r\n    // \u89e3\u6790\u73a9\u5bb6\u8f93\u5165\u5e76\u66f4\u65b0\u6e38\u620f\u72b6\u6001\r\n});\r\n\r\nwhile (true) {\r\n    // \u83b7\u53d6\u73a9\u5bb6\u8f93\u5165\r\n    std::string input = getPlayerInput();\r\n    node->broadcast(input); // \u5411\u6240\u6709\u8fde\u63a5\u7684\u8282\u70b9\u5e7f\u64ad\u8f93\u5165\r\n    // \u66f4\u65b0\u6e38\u620f\u72b6\u6001\r\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"5-breep-\u9ad8\u7ea7\u7528\u6cd5\u5b9a\u5236\u4e0e\u4f18\u5316",children:"5. Breep \u9ad8\u7ea7\u7528\u6cd5\uff1a\u5b9a\u5236\u4e0e\u4f18\u5316"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u81ea\u5b9a\u4e49\u534f\u8bae"}),": Breep \u5141\u8bb8\u5b9a\u4e49\u81ea\u5df1\u7684\u6d88\u606f\u683c\u5f0f\u548c\u534f\u8bae\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"NAT \u7a7f\u900f"}),": Breep \u652f\u6301 NAT \u7a7f\u900f\u6280\u672f\uff0c\u5e2e\u52a9\u8282\u70b9\u7a7f\u8d8a NAT \u8bbe\u5907\u5efa\u7acb\u8fde\u63a5\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u52a0\u5bc6\u4e0e\u5b89\u5168"}),": \u53ef\u4ee5\u96c6\u6210\u52a0\u5bc6\u7b97\u6cd5\uff0c\u786e\u4fdd\u901a\u4fe1\u5b89\u5168\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"6-\u5176\u4ed6",children:"6. \u5176\u4ed6"}),"\n",(0,l.jsx)(n.h4,{id:"\u5206\u5e03\u5f0f\u7cfb\u7edf",children:"\u5206\u5e03\u5f0f\u7cfb\u7edf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\uff0c\u5404\u8282\u70b9\u9700\u8981\u534f\u540c\u5de5\u4f5c\uff0c\u4ee5\u5b8c\u6210\u590d\u6742\u7684\u4efb\u52a1\u3002Breep \u63d0\u4f9b\u4e86\u7b80\u6d01\u7684 API\uff0c\u4f7f\u5f97\u8282\u70b9\u4e4b\u95f4\u7684\u901a\u4fe1\u53d8\u5f97\u7b80\u5355\u3002\u4f8b\u5982\uff0c\u5728\u5206\u5e03\u5f0f\u8ba1\u7b97\u5e94\u7528\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 Breep \u5728\u8282\u70b9\u4e4b\u95f4\u5206\u53d1\u4efb\u52a1\u5e76\u6536\u96c6\u7ed3\u679c\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u591a\u4eba\u6e38\u620f",children:"\u591a\u4eba\u6e38\u620f"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u591a\u4eba\u6e38\u620f\u9700\u8981\u9ad8\u6548\u7684\u5b9e\u65f6\u901a\u4fe1\uff0c\u4ee5\u786e\u4fdd\u73a9\u5bb6\u4e4b\u95f4\u7684\u4ea4\u4e92\u987a\u7545\u3002Breep \u7684\u4e8b\u4ef6\u9a71\u52a8\u67b6\u6784\u548c\u9ad8\u6548\u7684\u6d88\u606f\u4f20\u9012\u673a\u5236\uff0c\u975e\u5e38\u9002\u5408\u7528\u4e8e\u5b9e\u73b0\u591a\u4eba\u6e38\u620f\u7684\u7f51\u7edc\u90e8\u5206\u3002\u53ef\u4ee5\u4f7f\u7528 Breep \u5728\u6e38\u620f\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u4f20\u9012\u73a9\u5bb6\u72b6\u6001\u3001\u6e38\u620f\u4e8b\u4ef6\u7b49\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u5b9e\u65f6\u901a\u4fe1\u5e94\u7528",children:"\u5b9e\u65f6\u901a\u4fe1\u5e94\u7528"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5b9e\u65f6\u901a\u4fe1\u5e94\u7528\uff08\u5982\u89c6\u9891\u4f1a\u8bae\u3001\u5b9e\u65f6\u804a\u5929\u7b49\uff09\u9700\u8981\u4f4e\u5ef6\u8fdf\u548c\u9ad8\u53ef\u9760\u6027\u7684\u901a\u4fe1\u673a\u5236\u3002Breep \u63d0\u4f9b\u4e86\u8f7b\u91cf\u7ea7\u548c\u9ad8\u6548\u7684\u5bf9\u7b49\u7f51\u7edc\u89e3\u51b3\u65b9\u6848\uff0c\u80fd\u591f\u6ee1\u8db3\u5b9e\u65f6\u901a\u4fe1\u5e94\u7528\u7684\u9700\u6c42\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528 Breep \u5b9e\u73b0\u4e00\u4e2a\u5b9e\u65f6\u804a\u5929\u5e94\u7528\uff0c\u5728\u7528\u6237\u4e4b\u95f4\u4f20\u9012\u6d88\u606f\u548c\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"7-\u603b\u7ed3breep-\u52a9\u529b-p2p-\u5f00\u53d1",children:"7. \u603b\u7ed3\uff1aBreep \u52a9\u529b P2P \u5f00\u53d1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Breep \u662f\u4e00\u6b3e\u529f\u80fd\u5f3a\u5927\u3001\u6613\u4e8e\u4f7f\u7528\u7684 C++ \u5bf9\u7b49\u7f51\u7edc\u5e93\u3002\u901a\u8fc7\u638c\u63e1\u5176\u539f\u7406\u3001API \u548c\u5b9e\u8df5\u6280\u5de7\uff0c\u53ef\u4ee5\u8f7b\u677e\u6784\u5efa\u5404\u79cd\u7c7b\u578b\u7684 P2P \u5e94\u7528\u3002\u4ece\u6587\u4ef6\u5171\u4eab\u5230\u5b9e\u65f6\u901a\u4fe1\uff0cBreep \u63d0\u4f9b\u4e86\u65e0\u9650\u53ef\u80fd\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>c});var s=r(6540);const l={},i=s.createContext(l);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);