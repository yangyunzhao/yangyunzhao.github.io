"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8783],{3268:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\uff08Thread Local Storage, TLS\uff09\u8be6\u89e3","title":"\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\uff08Thread Local Storage, TLS\uff09\u8be6\u89e3","description":"1. \u80cc\u666f\u4e0e\u52a8\u673a","source":"@site/docs/C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\uff08Thread Local Storage, TLS\uff09\u8be6\u89e3.md","sourceDirName":"C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790","slug":"/C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\uff08Thread Local Storage, TLS\uff09\u8be6\u89e3","permalink":"/docs/C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\uff08Thread Local Storage, TLS\uff09\u8be6\u89e3","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\uff08Thread Local Storage, TLS\uff09\u8be6\u89e3.md","tags":[],"version":"current","frontMatter":{},"sidebar":"cpp_tittle_tattle","previous":{"title":"new\u548cmalloc\u51fa\u6765\u7684\u5806\u5185\u5b58\u662f\u8fde\u7eed\u7684\u5417\uff1f","permalink":"/docs/C++\u6742\u8c08/\u5173\u952e\u5b57\u89e3\u6790/new\u548cmalloc\u51fa\u6765\u7684\u5806\u5185\u5b58\u662f\u8fde\u7eed\u7684\u5417"},"next":{"title":"\u4f7f\u7528 nm \u548c dlsym \u52a0\u8f7d\u5171\u4eab\u5bf9\u8c61\u7b26\u53f7","permalink":"/docs/C++\u6742\u8c08/\u5178\u578b\u5e94\u7528/\u4f7f\u7528nm\u548cdlsym\u52a0\u8f7d\u5171\u4eab\u5bf9\u8c61\u7b26\u53f7"}}');var t=r(4848),d=r(8453);const i={},s="\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\uff08Thread Local Storage, TLS\uff09\u8be6\u89e3",c={},h=[{value:"1. \u80cc\u666f\u4e0e\u52a8\u673a",id:"1-\u80cc\u666f\u4e0e\u52a8\u673a",level:2},{value:"2. TLS \u5b9e\u73b0\u65b9\u6848\u5bf9\u6bd4",id:"2-tls-\u5b9e\u73b0\u65b9\u6848\u5bf9\u6bd4",level:2},{value:"3. thread_local\uff08C++11 \u6807\u51c6\u65b9\u6848\uff09",id:"3-thread_localc11-\u6807\u51c6\u65b9\u6848",level:2},{value:"3.1 \u57fa\u7840\u7528\u6cd5",id:"31-\u57fa\u7840\u7528\u6cd5",level:3},{value:"3.2 \u590d\u6742\u7c7b\u578b\u5b9e\u8df5",id:"32-\u590d\u6742\u7c7b\u578b\u5b9e\u8df5",level:3},{value:"4. __thread\uff08GCC/Clang \u6269\u5c55\uff09",id:"4-__threadgccclang-\u6269\u5c55",level:2},{value:"4.1 \u5178\u578b\u7528\u6cd5",id:"41-\u5178\u578b\u7528\u6cd5",level:3},{value:"4.2 \u9650\u5236\u89c4\u907f\u6280\u5de7",id:"42-\u9650\u5236\u89c4\u907f\u6280\u5de7",level:3},{value:"5. pthread_key_t\uff08POSIX \u6807\u51c6\u65b9\u6848\uff09",id:"5-pthread_key_tposix-\u6807\u51c6\u65b9\u6848",level:2},{value:"5.1 \u57fa\u7840\u5b9e\u73b0",id:"51-\u57fa\u7840\u5b9e\u73b0",level:3},{value:"5.2 \u590d\u6742\u6570\u636e\u7c7b\u578b\u7ba1\u7406",id:"52-\u590d\u6742\u6570\u636e\u7c7b\u578b\u7ba1\u7406",level:3},{value:"6. \u6027\u80fd\u4f18\u5316\u7b56\u7565",id:"6-\u6027\u80fd\u4f18\u5316\u7b56\u7565",level:2},{value:"6.1 \u5185\u5b58\u5bf9\u9f50\u4f18\u5316",id:"61-\u5185\u5b58\u5bf9\u9f50\u4f18\u5316",level:3},{value:"6.2 TLS \u6c60\u5316\u6280\u672f",id:"62-tls-\u6c60\u5316\u6280\u672f",level:3},{value:"7. \u7591\u96be\u89e3\u7b54",id:"7-\u7591\u96be\u89e3\u7b54",level:2},{value:"7.1 \u5e38\u89c1\u9677\u9631",id:"71-\u5e38\u89c1\u9677\u9631",level:3},{value:"7.2 \u8c03\u8bd5\u6280\u5de7",id:"72-\u8c03\u8bd5\u6280\u5de7",level:3},{value:"8. \u6f14\u8fdb\u8d8b\u52bf",id:"8-\u6f14\u8fdb\u8d8b\u52bf",level:2},{value:"9. \u603b\u7ed3\u5efa\u8bae",id:"9-\u603b\u7ed3\u5efa\u8bae",level:2}];function a(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cfthread-local-storage-tls\u8be6\u89e3",children:"\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\uff08Thread Local Storage, TLS\uff09\u8be6\u89e3"})}),"\n",(0,t.jsx)(e.h2,{id:"1-\u80cc\u666f\u4e0e\u52a8\u673a",children:"1. \u80cc\u666f\u4e0e\u52a8\u673a"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u591a\u7ebf\u7a0b\u7f16\u7a0b\u4e2d\uff0c\u5171\u4eab\u53d8\u91cf\u7684",(0,t.jsx)(e.strong,{children:"\u7ade\u4e89\u6761\u4ef6\uff08Race Condition\uff09"})," \u662f\u5e38\u89c1\u7684\u95ee\u9898\u3002\u5f53\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u8bbf\u95ee\u540c\u4e00\u5168\u5c40\u53d8\u91cf\u65f6\uff0c\u7f3a\u4e4f\u540c\u6b65\u673a\u5236\u4f1a\u5bfc\u81f4\u6570\u636e\u4e0d\u4e00\u81f4\u548c\u4e0d\u53ef\u9884\u6d4b\u7684\u7ed3\u679c\u3002\u4f20\u7edf\u89e3\u51b3\u65b9\u6848\uff08\u5982\u4e92\u65a5\u9501\uff09\u867d\u7136\u6709\u6548\uff0c\u4f46\u4f1a\u5f15\u5165\u6027\u80fd\u635f\u8017\u548c\u590d\u6742\u5ea6\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"\u7ebf\u7a0b\u5c40\u90e8\u53d8\u91cf\uff08TLS\uff09"})," \u901a\u8fc7\u4e3a\u6bcf\u4e2a\u7ebf\u7a0b\u521b\u5efa\u72ec\u7acb\u7684\u53d8\u91cf\u526f\u672c\u6765\u6d88\u9664\u7ade\u4e89\uff0c\u65e0\u9700\u9501\u673a\u5236\u5373\u53ef\u5b9e\u73b0\u7ebf\u7a0b\u5b89\u5168\u3002\u8fd9\u5728\u4ee5\u4e0b\u573a\u666f\u4e2d\u5c24\u4e3a\u91cd\u8981\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9700\u8981\u7ef4\u62a4\u7ebf\u7a0b\u79c1\u6709\u4e0a\u4e0b\u6587\uff08\u5982\u8bf7\u6c42\u5904\u7406\u7ebf\u7a0b\uff09"}),"\n",(0,t.jsx)(e.li,{children:"\u907f\u514d\u9891\u7e41\u52a0\u9501\u7684\u6027\u80fd\u654f\u611f\u573a\u666f"}),"\n",(0,t.jsx)(e.li,{children:"\u517c\u5bb9\u4e0d\u652f\u6301\u539f\u5b50\u64cd\u4f5c\u7684\u65e7\u4ee3\u7801"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"2-tls-\u5b9e\u73b0\u65b9\u6848\u5bf9\u6bd4",children:"2. TLS \u5b9e\u73b0\u65b9\u6848\u5bf9\u6bd4"}),"\n",(0,t.jsx)(e.p,{children:"\u5728 C/C++ \u751f\u6001\u4e2d\uff0c\u4e3b\u6d41 TLS \u5b9e\u73b0\u65b9\u6848\u6709\u4e09\uff1a"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"\u65b9\u5f0f"}),(0,t.jsx)(e.th,{children:"\u9002\u7528\u8bed\u8a00"}),(0,t.jsx)(e.th,{children:"\u6807\u51c6\u6027"}),(0,t.jsx)(e.th,{children:"\u52a8\u6001\u53d8\u91cf\u652f\u6301"}),(0,t.jsx)(e.th,{children:"\u81ea\u52a8\u9500\u6bc1"}),(0,t.jsx)(e.th,{children:"\u5178\u578b\u6027\u80fd"}),(0,t.jsx)(e.th,{children:"\u5b58\u50a8\u7c7b\u578b\u9650\u5236"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"thread_local"}),(0,t.jsx)(e.td,{children:"C++11+"}),(0,t.jsx)(e.td,{children:"ISO \u6807\u51c6"}),(0,t.jsx)(e.td,{children:"\u2705"}),(0,t.jsx)(e.td,{children:"\u2705"}),(0,t.jsx)(e.td,{children:"\u6700\u4f18"}),(0,t.jsx)(e.td,{children:"\u9759\u6001/\u5168\u5c40/\u5c40\u90e8\u9759\u6001"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"__thread"}),(0,t.jsx)(e.td,{children:"C"}),(0,t.jsx)(e.td,{children:"\u7f16\u8bd1\u5668\u6269\u5c55"}),(0,t.jsx)(e.td,{children:"\u2705"}),(0,t.jsx)(e.td,{children:"\u2705"}),(0,t.jsx)(e.td,{children:"\u4f18"}),(0,t.jsx)(e.td,{children:"\u9759\u6001/\u5168\u5c40"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"pthread_key_t"}),(0,t.jsx)(e.td,{children:"C"}),(0,t.jsx)(e.td,{children:"POSIX \u6807\u51c6"}),(0,t.jsx)(e.td,{children:"\u2705"}),(0,t.jsx)(e.td,{children:"\u274c"}),(0,t.jsx)(e.td,{children:"\u4e2d\u7b49"}),(0,t.jsx)(e.td,{children:"\u4efb\u610f\u7c7b\u578b"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\uff08\u6027\u80fd\u6570\u636e\u57fa\u4e8e Linux x86_64 \u5b9e\u6d4b\uff0c\u4e0d\u540c\u5e73\u53f0\u53ef\u80fd\u6709\u6240\u5dee\u5f02\uff09"}),"\n",(0,t.jsx)(e.h2,{id:"3-thread_localc11-\u6807\u51c6\u65b9\u6848",children:"3. thread_local\uff08C++11 \u6807\u51c6\u65b9\u6848\uff09"}),"\n",(0,t.jsx)(e.h3,{id:"31-\u57fa\u7840\u7528\u6cd5",children:"3.1 \u57fa\u7840\u7528\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:'#include <iostream>\r\n#include <thread>\r\n\r\nthread_local int counter = 0;  // \u6bcf\u4e2a\u7ebf\u7a0b\u72ec\u7acb\u526f\u672c\r\n\r\nvoid thread_func(int id) {\r\n    counter += id;\r\n    std::cout << "Thread " << id << ": counter = " << counter << "\\n";\r\n}\r\n\r\nint main() {\r\n    std::thread t1(thread_func, 1);\r\n    std::thread t2(thread_func, 2);\r\n    t1.join();\r\n    t2.join();\r\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u8f93\u51fa\uff1a"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"Thread 1: counter = 1\r\nThread 2: counter = 2\n"})}),"\n",(0,t.jsx)(e.h3,{id:"32-\u590d\u6742\u7c7b\u578b\u5b9e\u8df5",children:"3.2 \u590d\u6742\u7c7b\u578b\u5b9e\u8df5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"#include <vector>\r\n#include <thread>\r\n\r\nthread_local std::vector<int> local_data;  // \u7ebf\u7a0b\u672c\u5730\u5bb9\u5668\r\n\r\nvoid task(int id) {\r\n    local_data.push_back(id);\r\n    // \u5b89\u5168\u64cd\u4f5c\u672c\u5730\u6570\u636e...\r\n}\r\n\r\nint main() {\r\n    std::thread t1(task, 1), t2(task, 2);\r\n    t1.join(); t2.join();\r\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u4f18\u52bf\uff1a"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u81ea\u52a8\u751f\u547d\u5468\u671f\u7ba1\u7406"}),"\n",(0,t.jsx)(e.li,{children:"\u5b8c\u7f8e\u652f\u6301 RAII \u7c7b\u578b"}),"\n",(0,t.jsx)(e.li,{children:"\u96f6\u989d\u5916\u6027\u80fd\u5f00\u9500"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u9002\u7528\u573a\u666f\uff1a"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7ebf\u7a0b\u4e0a\u4e0b\u6587\u7ba1\u7406\u5668"}),"\n",(0,t.jsx)(e.li,{children:"\u53ef\u91cd\u5165\u51fd\u6570\u7684\u72b6\u6001\u4fdd\u6301"}),"\n",(0,t.jsx)(e.li,{children:"\u9ad8\u6027\u80fd\u8ba1\u6570\u5668/\u7d2f\u52a0\u5668"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"4-__threadgccclang-\u6269\u5c55",children:"4. __thread\uff08GCC/Clang \u6269\u5c55\uff09"}),"\n",(0,t.jsx)(e.h3,{id:"41-\u5178\u578b\u7528\u6cd5",children:"4.1 \u5178\u578b\u7528\u6cd5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:'#include <pthread.h>\r\n#include <stdio.h>\r\n\r\n__thread int local_counter;  // TLS \u53d8\u91cf\u58f0\u660e\r\n\r\nvoid* thread_func(void* arg) {\r\n    local_counter = *(int*)arg;\r\n    printf("Counter: %d\\n", local_counter);\r\n    return NULL;\r\n}\r\n\r\nint main() {\r\n    pthread_t t1, t2;\r\n    int a = 5, b = 10;\r\n    \r\n    pthread_create(&t1, NULL, thread_func, &a);\r\n    pthread_create(&t2, NULL, thread_func, &b);\r\n    \r\n    pthread_join(t1, NULL);\r\n    pthread_join(t2, NULL);\r\n}\n'})}),"\n",(0,t.jsx)(e.h3,{id:"42-\u9650\u5236\u89c4\u907f\u6280\u5de7",children:"4.2 \u9650\u5236\u89c4\u907f\u6280\u5de7"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"void* thread_func(void* arg) {\r\n    static __thread struct {\r\n        int id;\r\n        char name[32];\r\n    } context;  // \u7ed3\u6784\u4f53\u9700\u58f0\u660e\u4e3a\u9759\u6001\r\n    \r\n    context.id = (long)arg;\r\n    // \u4f7f\u7528\u4e0a\u4e0b\u6587...\r\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u6ce8\u610f\u4e8b\u9879\uff1a"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4e0d\u652f\u6301\u975e\u9759\u6001\u5c40\u90e8\u53d8\u91cf"}),"\n",(0,t.jsx)(e.li,{children:"\u7981\u6b62\u7528\u4e8e\u7c7b\u6210\u5458\u53d8\u91cf"}),"\n",(0,t.jsx)(e.li,{children:"\u7ed3\u6784\u4f53\u9700\u5168\u5c40/\u9759\u6001\u58f0\u660e"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u9002\u7528\u573a\u666f\uff1a"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7b80\u5355\u7c7b\u578b\u7684\u72b6\u6001\u4fdd\u6301"}),"\n",(0,t.jsx)(e.li,{children:"\u5355\u7f16\u8bd1\u5668\u73af\u5883\u7684\u9057\u7559\u7cfb\u7edf"}),"\n",(0,t.jsx)(e.li,{children:"\u5bf9\u6027\u80fd\u6709\u6781\u81f4\u8981\u6c42\u7684\u573a\u666f"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"5-pthread_key_tposix-\u6807\u51c6\u65b9\u6848",children:"5. pthread_key_t\uff08POSIX \u6807\u51c6\u65b9\u6848\uff09"}),"\n",(0,t.jsx)(e.h3,{id:"51-\u57fa\u7840\u5b9e\u73b0",children:"5.1 \u57fa\u7840\u5b9e\u73b0"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"#include <pthread.h>\r\n#include <stdlib.h>\r\n\r\npthread_key_t buffer_key;\r\n\r\nvoid buffer_destructor(void* buf) {\r\n    free(buf);  // \u81ea\u52a8\u8d44\u6e90\u56de\u6536\r\n}\r\n\r\nvoid* thread_func(void* arg) {\r\n    char* buf = pthread_getspecific(buffer_key);\r\n    if (!buf) {\r\n        buf = malloc(1024);\r\n        pthread_setspecific(buffer_key, buf);\r\n    }\r\n    // \u4f7f\u7528\u7f13\u51b2\u533a...\r\n}\r\n\r\nint main() {\r\n    pthread_key_create(&buffer_key, buffer_destructor);\r\n    // \u521b\u5efa\u7ebf\u7a0b...\r\n    pthread_key_delete(buffer_key);\r\n}\n"})}),"\n",(0,t.jsx)(e.h3,{id:"52-\u590d\u6742\u6570\u636e\u7c7b\u578b\u7ba1\u7406",children:"5.2 \u590d\u6742\u6570\u636e\u7c7b\u578b\u7ba1\u7406"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-c",children:"typedef struct {\r\n    int request_count;\r\n    double processing_time;\r\n} ThreadStats;\r\n\r\nvoid* thread_func(void* arg) {\r\n    ThreadStats* stats = pthread_getspecific(stats_key);\r\n    if (!stats) {\r\n        stats = calloc(1, sizeof(ThreadStats));\r\n        pthread_setspecific(stats_key, stats);\r\n    }\r\n    \r\n    stats->request_count++;\r\n    // \u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f...\r\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u6700\u4f73\u5b9e\u8df5\uff1a"})}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"calloc"})," \u521d\u59cb\u5316\u590d\u6742\u7ed3\u6784\u4f53"]}),"\n",(0,t.jsx)(e.li,{children:"\u5728\u6790\u6784\u51fd\u6570\u4e2d\u91ca\u653e\u5d4c\u5957\u8d44\u6e90"}),"\n",(0,t.jsx)(e.li,{children:"\u4e3a\u6bcf\u4e2a\u952e\u6ce8\u518c\u72ec\u7acb\u7684\u6790\u6784\u51fd\u6570"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u9002\u7528\u573a\u666f\uff1a"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9700\u8981\u8de8\u5e73\u53f0\u517c\u5bb9\u7684 C \u9879\u76ee"}),"\n",(0,t.jsx)(e.li,{children:"\u52a8\u6001\u5206\u914d\u7684\u5927\u578b\u5bf9\u8c61"}),"\n",(0,t.jsx)(e.li,{children:"\u9700\u8981\u7cbe\u7ec6\u751f\u547d\u5468\u671f\u63a7\u5236\u7684\u8d44\u6e90"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"6-\u6027\u80fd\u4f18\u5316\u7b56\u7565",children:"6. \u6027\u80fd\u4f18\u5316\u7b56\u7565"}),"\n",(0,t.jsx)(e.h3,{id:"61-\u5185\u5b58\u5bf9\u9f50\u4f18\u5316",children:"6.1 \u5185\u5b58\u5bf9\u9f50\u4f18\u5316"}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u4e8e\u9ad8\u9891\u8bbf\u95ee\u7684 TLS \u53d8\u91cf\uff0c\u91c7\u7528\u7f13\u5b58\u884c\u5bf9\u9f50\u907f\u514d\u4f2a\u5171\u4eab\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"alignas(64) thread_local uint64_t counter;  // 64 \u5b57\u8282\u5bf9\u9f50\n"})}),"\n",(0,t.jsx)(e.h3,{id:"62-tls-\u6c60\u5316\u6280\u672f",children:"6.2 TLS \u6c60\u5316\u6280\u672f"}),"\n",(0,t.jsx)(e.p,{children:"\u5bf9\u9891\u7e41\u5206\u914d\u7684 TLS \u5bf9\u8c61\u5b9e\u65bd\u5bf9\u8c61\u6c60\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"thread_local std::vector<Connection*> conn_pool;\r\n\r\nConnection* get_connection() {\r\n    if (conn_pool.empty()) {\r\n        return create_connection();\r\n    }\r\n    auto conn = conn_pool.back();\r\n    conn_pool.pop_back();\r\n    return conn;\r\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"7-\u7591\u96be\u89e3\u7b54",children:"7. \u7591\u96be\u89e3\u7b54"}),"\n",(0,t.jsx)(e.h3,{id:"71-\u5e38\u89c1\u9677\u9631",children:"7.1 \u5e38\u89c1\u9677\u9631"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u865a\u5047\u5171\u4eab"}),"\uff1a\u76f8\u90bb TLS \u53d8\u91cf\u53ef\u80fd\u4f4d\u4e8e\u540c\u4e00\u7f13\u5b58\u884c","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u89e3\u51b3\u65b9\u6848\uff1a",(0,t.jsx)(e.code,{children:"alignas(CACHE_LINE_SIZE)"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u6784\u9020\u987a\u5e8f\u4f9d\u8d56"}),"\uff1a\u4e0d\u540c\u7f16\u8bd1\u5355\u5143\u7684 thread_local \u53d8\u91cf\u521d\u59cb\u5316\u987a\u5e8f\u4e0d\u786e\u5b9a","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u89e3\u51b3\u65b9\u6848\uff1a\u4f7f\u7528\u8bbf\u95ee\u5668\u51fd\u6570\u5ef6\u8fdf\u521d\u59cb\u5316"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"\u52a8\u6001\u5e93\u95ee\u9898"}),"\uff1a\u67d0\u4e9b\u5e73\u53f0 TLS \u5728\u52a8\u6001\u5e93\u4e2d\u884c\u4e3a\u5f02\u5e38","\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u89e3\u51b3\u65b9\u6848\uff1a\u4f7f\u7528 ",(0,t.jsx)(e.code,{children:"-ftls-model"})," \u6307\u5b9a\u6a21\u578b"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"72-\u8c03\u8bd5\u6280\u5de7",children:"7.2 \u8c03\u8bd5\u6280\u5de7"}),"\n",(0,t.jsx)(e.p,{children:"GDB \u4e2d\u67e5\u770b TLS \u53d8\u91cf\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"(gdb) info thread\r\n(gdb) thread 1\r\n(gdb) p counter\n"})}),"\n",(0,t.jsx)(e.h2,{id:"8-\u6f14\u8fdb\u8d8b\u52bf",children:"8. \u6f14\u8fdb\u8d8b\u52bf"}),"\n",(0,t.jsxs)(e.p,{children:["C++20 \u5f15\u5165 ",(0,t.jsx)(e.code,{children:"counting_thread_local"})," \u63d0\u6848\uff08P2070\uff09\uff0c\u652f\u6301\u7ebf\u7a0b\u9000\u51fa\u65f6\u81ea\u52a8\u805a\u5408 TLS \u6570\u636e\u3002\u672a\u6765\u6807\u51c6\u53ef\u80fd\u652f\u6301\uff1a"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"TLS \u7684\u539f\u5b50\u6279\u91cf\u64cd\u4f5c"}),"\n",(0,t.jsx)(e.li,{children:"\u7ebf\u7a0b\u8fc1\u79fb\u65f6\u7684 TLS \u7ee7\u627f"}),"\n",(0,t.jsx)(e.li,{children:"\u786c\u4ef6\u52a0\u901f\u7684 TLS \u8bbf\u95ee"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"9-\u603b\u7ed3\u5efa\u8bae",children:"9. \u603b\u7ed3\u5efa\u8bae"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u51b3\u7b56\u77e9\u9635\uff1a"})}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u573a\u666f\u7279\u5f81"}),(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u63a8\u8350\u65b9\u6848"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"C++ \u9879\u76ee"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"thread_local"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"GCC/Clang C \u9879\u76ee"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"__thread"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u8de8\u5e73\u53f0 C \u9879\u76ee"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"pthread_key_t"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u9ad8\u9891\u8bbf\u95ee\u7b80\u5355\u7c7b\u578b"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"__thread"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u590d\u6742\u5bf9\u8c61\u751f\u547d\u5468\u671f\u7ba1\u7406"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"pthread_key_t"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u9700\u8981\u6807\u51c6\u5408\u89c4"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"thread_local/pthread_key_t"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7\u5408\u7406\u9009\u62e9 TLS \u5b9e\u73b0\u65b9\u6848\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\u540c\u65f6\uff0c\u517c\u987e\u6027\u80fd\u4e0e\u4ee3\u7801\u53ef\u7ef4\u62a4\u6027\u3002\u5efa\u8bae\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\u7ed3\u5408\u6027\u80fd\u5256\u6790\u5de5\u5177\u8fdb\u884c\u9a8c\u8bc1\uff0c\u7279\u522b\u662f\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u9700\u8981\u5173\u6ce8 TLS \u7684\u5185\u5b58\u5f00\u9500\u548c\u8bbf\u95ee\u5ef6\u8fdf\u3002"})]})}function o(n={}){const{wrapper:e}={...(0,d.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>s});var l=r(6540);const t={},d=l.createContext(t);function i(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);