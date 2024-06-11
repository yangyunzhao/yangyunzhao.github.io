"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3544],{5927:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});var r=l(4848),c=l(8453);const i={},d="new\u548cmalloc\u51fa\u6765\u7684\u5806\u5185\u5b58\u662f\u8fde\u7eed\u7684\u5417\uff1f",s={id:"C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/new_malloc",title:"new\u548cmalloc\u51fa\u6765\u7684\u5806\u5185\u5b58\u662f\u8fde\u7eed\u7684\u5417\uff1f",description:"\u8f6c\u8f7d\u81ea \u9ca8\u9c7c\u7f16\u7a0b",source:"@site/docs/C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/new_malloc.md",sourceDirName:"C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790",slug:"/C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/new_malloc",permalink:"/docs/C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/new_malloc",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/new_malloc.md",tags:[],version:"current",frontMatter:{},sidebar:"cpp_tittle_tattle",next:{title:"C++\u503c\u7c7b\u522b\u6982\u8ff0",permalink:"/docs/C++\u6742\u8c08/\u8bed\u6cd5\u7279\u6027/C++\u503c\u7c7b\u522b\u6982\u8ff0"}},o={},a=[{value:"<code>new</code>\u548c<code>malloc</code>\u7684\u57fa\u672c\u539f\u7406",id:"new\u548cmalloc\u7684\u57fa\u672c\u539f\u7406",level:2},{value:"\u5806\u5185\u5b58\u7684\u8fde\u7eed\u6027",id:"\u5806\u5185\u5b58\u7684\u8fde\u7eed\u6027",level:2},{value:"\u5806\u5185\u5b58\u5206\u914d\u7684\u884c\u4e3a",id:"\u5806\u5185\u5b58\u5206\u914d\u7684\u884c\u4e3a",level:2},{value:"\u5185\u5b58\u788e\u7247\u4e0e\u8fde\u7eed\u6027",id:"\u5185\u5b58\u788e\u7247\u4e0e\u8fde\u7eed\u6027",level:2},{value:"\u5806\u5185\u5b58\u7684\u5206\u914d\u7b56\u7565",id:"\u5806\u5185\u5b58\u7684\u5206\u914d\u7b56\u7565",level:2},{value:"\u4ee3\u7801\u793a\u4f8b\u4e0e\u89e3\u6790",id:"\u4ee3\u7801\u793a\u4f8b\u4e0e\u89e3\u6790",level:2},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2},{value:"\u8865\u5145",id:"\u8865\u5145",level:2},{value:"\u865a\u62df\u5185\u5b58\u4e0e\u7269\u7406\u5185\u5b58",id:"\u865a\u62df\u5185\u5b58\u4e0e\u7269\u7406\u5185\u5b58",level:3},{value:"\u5185\u5b58\u5bf9\u9f50",id:"\u5185\u5b58\u5bf9\u9f50",level:3},{value:"\u6027\u80fd\u8003\u8651",id:"\u6027\u80fd\u8003\u8651",level:3},{value:"\u5185\u5b58\u6cc4\u6f0f",id:"\u5185\u5b58\u6cc4\u6f0f",level:3},{value:"C++\u6807\u51c6\u5e93\u7684\u5206\u914d\u5668",id:"c\u6807\u51c6\u5e93\u7684\u5206\u914d\u5668",level:3}];function t(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"new\u548cmalloc\u51fa\u6765\u7684\u5806\u5185\u5b58\u662f\u8fde\u7eed\u7684\u5417",children:"new\u548cmalloc\u51fa\u6765\u7684\u5806\u5185\u5b58\u662f\u8fde\u7eed\u7684\u5417\uff1f"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u8f6c\u8f7d\u81ea \u9ca8\u9c7c\u7f16\u7a0b"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5728C++\u548cC\u8bed\u8a00\u7f16\u7a0b\u4e2d\uff0c\u52a8\u6001\u5185\u5b58\u5206\u914d\u662f\u4e00\u4e2a\u6838\u5fc3\u6982\u5ff5\uff0c\u5b83\u5141\u8bb8\u7a0b\u5e8f\u5728\u8fd0\u884c\u65f6\u6839\u636e\u9700\u8981\u5206\u914d\u6216\u91ca\u653e\u5185\u5b58\u3002",(0,r.jsx)(n.code,{children:"new"}),"\uff08\u5728C++\u4e2d\uff09\u548c",(0,r.jsx)(n.code,{children:"malloc"}),"\uff08\u5728C\u4e2d\uff09\u662f\u4e24\u79cd\u5e38\u7528\u7684\u52a8\u6001\u5185\u5b58\u5206\u914d\u65b9\u6cd5\u3002\u7136\u800c\uff0c\u4e00\u4e2a\u7ecf\u5e38\u88ab\u63d0\u53ca\u7684\u95ee\u9898\u662f\uff0c\u901a\u8fc7\u8fd9\u4e9b\u65b9\u6cd5\u5206\u914d\u7684\u5806\u5185\u5b58\u662f\u5426\u662f\u8fde\u7eed\u7684\uff1f\u672c\u6587\u5c06\u5bf9\u8fd9\u4e00\u95ee\u9898\u8fdb\u884c\u6df1\u5165\u63a2\u8ba8\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://nas.znmlr.cn:15900/markdown/2024/06/11/1.webp",alt:"1"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"new\u548cmalloc\u7684\u57fa\u672c\u539f\u7406",children:[(0,r.jsx)(n.code,{children:"new"}),"\u548c",(0,r.jsx)(n.code,{children:"malloc"}),"\u7684\u57fa\u672c\u539f\u7406"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5728C++\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"new"}),"\u64cd\u4f5c\u7b26\u7528\u4e8e\u52a8\u6001\u5730\u5206\u914d\u5185\u5b58\u3002\u5b83\u4e0d\u4ec5\u5206\u914d\u6240\u9700\u7684\u5185\u5b58\u91cf\uff0c\u8fd8\u8c03\u7528\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\uff08\u5bf9\u4e8e\u975e\u5185\u7f6e\u7c7b\u578b\uff09\u3002\u7c7b\u4f3c\u5730\uff0c\u5728C\u8bed\u8a00\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"malloc"}),"\u51fd\u6570\u7528\u4e8e\u5728\u5806\u4e0a\u5206\u914d\u6307\u5b9a\u5b57\u8282\u6570\u7684\u5185\u5b58\u3002\u8fd9\u4e24\u8005\u90fd\u4e0d\u4f1a\u521d\u59cb\u5316\u6240\u5206\u914d\u7684\u5185\u5b58\uff08\u9664\u4e86",(0,r.jsx)(n.code,{children:"new"}),"\u53ef\u80fd\u4f1a\u8c03\u7528\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u8fdb\u884c\u521d\u59cb\u5316\uff09\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// C++\u4e2d\u4f7f\u7528new\u5206\u914d\u5185\u5b58\r\nint* ptr1 = new int;\r\nMyClass* objPtr = new MyClass(); // \u8c03\u7528MyClass\u7684\u6784\u9020\u51fd\u6570\r\n\r\n// C\u8bed\u8a00\u4e2d\u4f7f\u7528malloc\u5206\u914d\u5185\u5b58\r\nint* ptr2 = (int*) malloc(sizeof(int));\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5806\u5185\u5b58\u7684\u8fde\u7eed\u6027",children:"\u5806\u5185\u5b58\u7684\u8fde\u7eed\u6027"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5f53\u6211\u4eec\u8c08\u8bba\u5806\u5185\u5b58\u7684\u8fde\u7eed\u6027\u65f6\uff0c\u6211\u4eec\u901a\u5e38\u662f\u6307\u903b\u8f91\u4e0a\u7684\u8fde\u7eed\u6027\uff0c\u800c\u4e0d\u662f\u7269\u7406\u5185\u5b58\u5730\u5740\u7684\u7edd\u5bf9\u8fde\u7eed\u6027\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(n.code,{children:"new"}),"\u548c",(0,r.jsx)(n.code,{children:"malloc"}),"\u5206\u914d\u7684\u5185\u5b58\u5757\u5728\u903b\u8f91\u4e0a\u662f\u8fde\u7eed\u7684\uff0c\u5373\u5b83\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u4ee5\u987a\u5e8f\u8bbf\u95ee\u7684\u5730\u5740\u7a7a\u95f4\u3002\u7136\u800c\uff0c\u8fd9\u5e76\u4e0d\u610f\u5473\u7740\u8fd9\u4e9b\u5185\u5b58\u5728\u7269\u7406\u5185\u5b58\u4e2d\u662f\u7d27\u90bb\u7684\uff1b\u73b0\u4ee3\u64cd\u4f5c\u7cfb\u7edf\u548c\u5185\u5b58\u7ba1\u7406\u7cfb\u7edf\u4f7f\u7528\u865a\u62df\u5185\u5b58\u6280\u672f\uff0c\u4f7f\u5f97\u903b\u8f91\u4e0a\u8fde\u7eed\u7684\u5185\u5b58\u5730\u5740\u5728\u7269\u7406\u5185\u5b58\u4e2d\u53ef\u80fd\u5e76\u4e0d\u8fde\u7eed\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5806\u5185\u5b58\u5206\u914d\u7684\u884c\u4e3a",children:"\u5806\u5185\u5b58\u5206\u914d\u7684\u884c\u4e3a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"new"}),"\u548c",(0,r.jsx)(n.code,{children:"malloc"}),"\u90fd\u5411\u5806\u7ba1\u7406\u5668\u8bf7\u6c42\u5185\u5b58\u3002\u5806\u7ba1\u7406\u5668\u8d1f\u8d23\u627e\u5230\u8db3\u591f\u5927\u7684\u8fde\u7eed\u5185\u5b58\u5757\u6765\u6ee1\u8db3\u8bf7\u6c42\u3002\u8fd9\u4e2a\u8fde\u7eed\u7684\u5185\u5b58\u5757\u5728\u903b\u8f91\u4e0a\u662f\u8fde\u7eed\u7684\uff0c\u5141\u8bb8\u6211\u4eec\u6309\u7167\u987a\u5e8f\u5b58\u50a8\u548c\u8bbf\u95ee\u6570\u636e\u3002\u4f46\u662f\uff0c\u6bcf\u6b21\u8c03\u7528",(0,r.jsx)(n.code,{children:"new"}),"\u6216",(0,r.jsx)(n.code,{children:"malloc"}),"\u65f6\uff0c\u8fd4\u56de\u7684\u5185\u5b58\u5730\u5740\u53ef\u80fd\u4f1a\u4e0e\u4e4b\u524d\u7684\u8c03\u7528\u5b8c\u5168\u4e0d\u540c\uff0c\u56e0\u4e3a\u5b83\u4eec\u662f\u4ece\u5806\u4e2d\u7684\u4e0d\u540c\u90e8\u5206\u5206\u914d\u7684\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"int* ptr3 = new int; // \u8fd9\u5757\u5185\u5b58\u4e0eptr1\u6307\u5411\u7684\u5185\u5b58\u4e0d\u4e00\u5b9a\u662f\u7269\u7406\u4e0a\u8fde\u7eed\u7684\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5185\u5b58\u788e\u7247\u4e0e\u8fde\u7eed\u6027",children:"\u5185\u5b58\u788e\u7247\u4e0e\u8fde\u7eed\u6027"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u9891\u7e41\u5730\u5206\u914d\u548c\u91ca\u653e\u4e0d\u540c\u5927\u5c0f\u7684\u5185\u5b58\u5757\u53ef\u80fd\u5bfc\u81f4\u5185\u5b58\u788e\u7247\u3002\u5185\u5b58\u788e\u7247\u662f\u6307\u5806\u4e2d\u65e0\u6cd5\u88ab\u6709\u6548\u5229\u7528\u7684\u5c0f\u5757\u5185\u5b58\u3002\u8fd9\u53ef\u80fd\u4f1a\u5f71\u54cd",(0,r.jsx)(n.code,{children:"new"}),"\u6216",(0,r.jsx)(n.code,{children:"malloc"}),"\u5206\u914d\u8fde\u7eed\u5185\u5b58\u5757\u7684\u80fd\u529b\uff0c\u56e0\u4e3a\u5927\u5757\u8fde\u7eed\u7684\u5185\u5b58\u53ef\u80fd\u7531\u4e8e\u788e\u7247\u800c\u4e0d\u53ef\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5806\u5185\u5b58\u7684\u5206\u914d\u7b56\u7565",children:"\u5806\u5185\u5b58\u7684\u5206\u914d\u7b56\u7565"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0d\u540c\u7684\u7cfb\u7edf\u548c\u7f16\u8bd1\u5668\u5b9e\u73b0\u53ef\u80fd\u4f1a\u4f7f\u7528\u4e0d\u540c\u7684\u5806\u5185\u5b58\u5206\u914d\u7b56\u7565\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u4f8b\u5982\uff0c\u4e00\u4e9b\u7cfb\u7edf\u53ef\u80fd\u4f1a\u4f7f\u7528\u5206\u79bb\u9002\u914d\uff08Segregated Fit\uff09\u7b56\u7565\uff0c\u5c06\u5185\u5b58\u5206\u6210\u4e0d\u540c\u5927\u5c0f\u7c7b\u522b\u7684\u7a7a\u95f2\u94fe\u8868\uff0c\u4ee5\u4fbf\u66f4\u5feb\u5730\u6ee1\u8db3\u5185\u5b58\u8bf7\u6c42\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5176\u4ed6\u7cfb\u7edf\u53ef\u80fd\u4f1a\u4f7f\u7528\u4f19\u4f34\u7cfb\u7edf\uff08Buddy System\uff09\u6216\u65af\u5229\u5bbe\u65af\u57fa-\u5f17\u5170\u79d1\u897f\u65af\uff08Sliabne-Frasier\uff09\u7b97\u6cd5\u7b49\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u8fd9\u4e9b\u7b56\u7565\u90fd\u65e8\u5728\u9ad8\u6548\u5730\u7ba1\u7406\u5806\u5185\u5b58\uff0c\u4f46\u53ef\u80fd\u4f1a\u5f71\u54cd\u5185\u5b58\u7684\u8fde\u7eed\u6027\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4ee3\u7801\u793a\u4f8b\u4e0e\u89e3\u6790",children:"\u4ee3\u7801\u793a\u4f8b\u4e0e\u89e3\u6790"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e0b\u9762\u7684\u4ee3\u7801\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5728C++\u4e2d\u4f7f\u7528",(0,r.jsx)(n.code,{children:"new"}),"\u548c\u5728C\u4e2d\u4f7f\u7528",(0,r.jsx)(n.code,{children:"malloc"}),"\u6765\u5206\u914d\u5185\u5b58\uff0c\u5e76\u5c55\u793a\u4e86\u8fd9\u4e9b\u5185\u5b58\u5757\u5728\u903b\u8f91\u4e0a\u662f\u5982\u4f55\u8fde\u7eed\u7684\uff0c\u4f46\u5728\u7269\u7406\u5185\u5b58\u4e2d\u53ef\u80fd\u4e0d\u662f\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'#include <iostream>\r\n#include <cstdlib> // for malloc and free in C++\r\n\r\nint main() {\r\n    // C++\u4e2d\u4f7f\u7528new\u5206\u914d\u5185\u5b58\r\n    int* array1 = new int[10]; // \u5206\u914d\u4e00\u4e2a\u5305\u542b10\u4e2a\u6574\u6570\u7684\u6570\u7ec4\r\n    for (int i = 0; i < 10; ++i) {\r\n        array1[i] = i; // \u53ef\u4ee5\u987a\u5e8f\u8bbf\u95ee\uff0c\u903b\u8f91\u4e0a\u662f\u8fde\u7eed\u7684\r\n    }\r\n\r\n    // C\u8bed\u8a00\u4e2d\u4f7f\u7528malloc\u5206\u914d\u5185\u5b58\uff08\u5728C++\u4e2d\u9700\u8981\u5305\u542bcstdlib\u5934\u6587\u4ef6\uff09\r\n    int* array2 = (int*) malloc(10 * sizeof(int)); // \u5206\u914d10\u4e2a\u6574\u6570\u7684\u7a7a\u95f4\r\n    for (int i = 0; i < 10; ++i) {\r\n        array2[i] = i * 2; // \u540c\u6837\u53ef\u4ee5\u987a\u5e8f\u8bbf\u95ee\uff0c\u903b\u8f91\u8fde\u7eed\r\n    }\r\n\r\n    // \u6253\u5370\u5e76\u9a8c\u8bc1\u5185\u5b58\u7684\u903b\u8f91\u8fde\u7eed\u6027\r\n    for (int i = 0; i < 10; ++i) {\r\n        std::cout << "array1[" << i << "] = " << array1[i] << std::endl;\r\n        std::cout << "array2[" << i << "] = " << array2[i] << std::endl;\r\n    }\r\n\r\n    // \u91ca\u653e\u5185\u5b58\r\n    delete[] array1; // C++\u4e2d\u4f7f\u7528delete[]\u91ca\u653e\u52a8\u6001\u6570\u7ec4\r\n    free(array2); // C\u8bed\u8a00\u4e2d\u4f7f\u7528free\u91ca\u653e\u5185\u5b58\r\n\r\n    return 0;\r\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,r.jsx)(n.code,{children:"array1"}),"\u548c",(0,r.jsx)(n.code,{children:"array2"}),"\u90fd\u662f\u901a\u8fc7\u52a8\u6001\u5185\u5b58\u5206\u914d\u5f97\u5230\u7684\uff0c\u5e76\u4e14\u5b83\u4eec\u5728\u903b\u8f91\u4e0a\u662f\u8fde\u7eed\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u7d22\u5f15\u987a\u5e8f\u8bbf\u95ee\u3002\u7136\u800c\uff0c\u8fd9\u5e76\u4e0d\u610f\u5473\u7740",(0,r.jsx)(n.code,{children:"array1"}),"\u548c",(0,r.jsx)(n.code,{children:"array2"}),"\u5728\u7269\u7406\u5185\u5b58\u4e2d\u662f\u7d27\u90bb\u7684\uff1b\u5b83\u4eec\u53ef\u80fd\u4f4d\u4e8e\u5b8c\u5168\u4e0d\u540c\u7684\u5185\u5b58\u9875\u4e0a\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"new"}),"\u548c",(0,r.jsx)(n.code,{children:"malloc"}),"\u5206\u914d\u7684\u5806\u5185\u5b58\u5728\u903b\u8f91\u4e0a\u662f\u8fde\u7eed\u7684\uff0c\u5141\u8bb8\u7a0b\u5e8f\u6309\u7167\u987a\u5e8f\u8fdb\u884c\u8bbf\u95ee\u3002\u7136\u800c\uff0c\u7531\u4e8e\u73b0\u4ee3\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u5b58\u7ba1\u7406\u673a\u5236\uff0c\u8fd9\u4e9b\u5185\u5b58\u5728\u7269\u7406\u4e0a\u53ef\u80fd\u4e0d\u662f\u8fde\u7eed\u7684\u3002\u7a0b\u5e8f\u5458\u901a\u5e38\u4e0d\u9700\u8981\u5173\u5fc3\u7269\u7406\u5185\u5b58\u7684\u8fde\u7eed\u6027\uff0c\u56e0\u4e3a\u865a\u62df\u5185\u5b58\u7cfb\u7edf\u63d0\u4f9b\u4e86\u903b\u8f91\u4e0a\u8fde\u7eed\u7684\u5185\u5b58\u89c6\u56fe\uff0c\u8db3\u4ee5\u6ee1\u8db3\u5927\u591a\u6570\u7f16\u7a0b\u9700\u6c42\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8865\u5145",children:"\u8865\u5145"}),"\n",(0,r.jsx)(n.h3,{id:"\u865a\u62df\u5185\u5b58\u4e0e\u7269\u7406\u5185\u5b58",children:"\u865a\u62df\u5185\u5b58\u4e0e\u7269\u7406\u5185\u5b58"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u73b0\u4ee3\u64cd\u4f5c\u7cfb\u7edf\u901a\u8fc7\u865a\u62df\u5185\u5b58\u673a\u5236\u63d0\u4f9b\u7ed9\u7a0b\u5e8f\u4e00\u4e2a\u8fde\u7eed\u7684\u5185\u5b58\u5730\u5740\u7a7a\u95f4\u3002\u865a\u62df\u5185\u5b58\u7cfb\u7edf\u5c06\u7a0b\u5e8f\u7684\u865a\u62df\u5730\u5740\u6620\u5c04\u5230\u7269\u7406\u5185\u5b58\u5730\u5740\uff0c\u4f7f\u7528\u9875\u8868\u6765\u7ba1\u7406\u8fd9\u4e2a\u6620\u5c04\u5173\u7cfb\u3002\u8fd9\u6837\uff0c\u5373\u4f7f\u7269\u7406\u5185\u5b58\u5e76\u4e0d\u8fde\u7eed\uff0c\u7a0b\u5e8f\u4e5f\u53ef\u4ee5\u8ba4\u4e3a\u5185\u5b58\u662f\u8fde\u7eed\u7684\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5185\u5b58\u5bf9\u9f50",children:"\u5185\u5b58\u5bf9\u9f50"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5185\u5b58\u5bf9\u9f50\u662f\u73b0\u4ee3\u8ba1\u7b97\u673a\u4f53\u7cfb\u7ed3\u6784\u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u6982\u5ff5\u3002\u4e3a\u4e86\u63d0\u9ad8\u5185\u5b58\u8bbf\u95ee\u7684\u6548\u7387\uff0c\u5904\u7406\u5668\u901a\u5e38\u8981\u6c42\u67d0\u4e9b\u7c7b\u578b\u7684\u6570\u636e\u6309\u7279\u5b9a\u7684\u5b57\u8282\u8fb9\u754c\u5bf9\u9f50\u3002",(0,r.jsx)(n.code,{children:"malloc"}),"\u548c",(0,r.jsx)(n.code,{children:"new"}),"\u90fd\u4f1a\u8fd4\u56de\u6309\u6b63\u786e\u5b57\u8282\u8fb9\u754c\u5bf9\u9f50\u7684\u5185\u5b58\u5730\u5740\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u6027\u80fd\u8003\u8651",children:"\u6027\u80fd\u8003\u8651"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4f7f\u7528",(0,r.jsx)(n.code,{children:"new"}),"\u548c",(0,r.jsx)(n.code,{children:"malloc"}),"\u8fdb\u884c\u5185\u5b58\u5206\u914d\u548c\u91ca\u653e\u4f1a\u6709\u4e00\u5b9a\u7684\u6027\u80fd\u5f00\u9500\u3002\u9891\u7e41\u7684\u5185\u5b58\u5206\u914d\u548c\u91ca\u653e\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6027\u80fd\u95ee\u9898\uff0c\u7279\u522b\u662f\u5728\u9700\u8981\u5b9e\u65f6\u54cd\u5e94\u7684\u7cfb\u7edf\u4e2d\u3002\u56e0\u6b64\uff0c\u4e86\u89e3\u548c\u4f18\u5316\u5185\u5b58\u5206\u914d\u7b56\u7565\u662f\u63d0\u9ad8\u7a0b\u5e8f\u6027\u80fd\u7684\u91cd\u8981\u65b9\u9762\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5185\u5b58\u6cc4\u6f0f",children:"\u5185\u5b58\u6cc4\u6f0f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5185\u5b58\u6cc4\u6f0f\u662f\u6307\u7a0b\u5e8f\u5728\u52a8\u6001\u5206\u914d\u5185\u5b58\u540e\u6ca1\u6709\u6b63\u786e\u91ca\u653e\uff0c\u5bfc\u81f4\u5185\u5b58\u8d44\u6e90\u65e0\u6cd5\u88ab\u91cd\u7528\u3002\u5185\u5b58\u6cc4\u6f0f\u4f1a\u5bfc\u81f4\u7a0b\u5e8f\u7684\u5185\u5b58\u4f7f\u7528\u91cf\u4e0d\u65ad\u589e\u52a0\uff0c\u6700\u7ec8\u53ef\u80fd\u8017\u5c3d\u7cfb\u7edf\u7684\u53ef\u7528\u5185\u5b58\u3002\u4f7f\u7528",(0,r.jsx)(n.code,{children:"new"}),"\u548c",(0,r.jsx)(n.code,{children:"malloc"}),"\u65f6\u8981\u7279\u522b\u5c0f\u5fc3\uff0c\u786e\u4fdd\u6240\u6709\u52a8\u6001\u5206\u914d\u7684\u5185\u5b58\u90fd\u80fd\u88ab\u6b63\u786e\u91ca\u653e\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"c\u6807\u51c6\u5e93\u7684\u5206\u914d\u5668",children:"C++\u6807\u51c6\u5e93\u7684\u5206\u914d\u5668"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["C++\u6807\u51c6\u5e93\u5f15\u5165\u4e86\u5206\u914d\u5668\uff08Allocator\uff09\u6982\u5ff5\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u5185\u5b58\u5206\u914d\u548c\u91ca\u653e\u7b56\u7565\u3002STL\u5bb9\u5668\uff08\u5982",(0,r.jsx)(n.code,{children:"std::vector"}),"\u3001",(0,r.jsx)(n.code,{children:"std::list"}),"\u7b49\uff09\u9ed8\u8ba4\u4f7f\u7528\u6807\u51c6\u5206\u914d\u5668\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u5206\u914d\u5668\u6765\u4f18\u5316\u7279\u5b9a\u573a\u666f\u4e0b\u7684\u5185\u5b58\u7ba1\u7406\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>d,x:()=>s});var r=l(6540);const c={},i=r.createContext(c);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);