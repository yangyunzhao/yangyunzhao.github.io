"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7457],{9505:(l,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=e(4848),i=e(8453);const r={},c=void 0,d={id:"\u8ba1\u7b97\u673a\u57fa\u7840/\u64cd\u4f5c\u7cfb\u7edf/\u4e00\u7bc7\u6587\u7ae0\u8ba9\u4f60\u771f\u6b63\u641e\u61c2epoll\u673a\u5236",title:"\u4e00\u7bc7\u6587\u7ae0\u8ba9\u4f60\u771f\u6b63\u641e\u61c2epoll\u673a\u5236",description:"\u8f6c\u8f7d\u81ea \u7269\u8054\u7f51\u5fc3\u7403",source:"@site/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u64cd\u4f5c\u7cfb\u7edf/\u4e00\u7bc7\u6587\u7ae0\u8ba9\u4f60\u771f\u6b63\u641e\u61c2epoll\u673a\u5236.md",sourceDirName:"\u8ba1\u7b97\u673a\u57fa\u7840/\u64cd\u4f5c\u7cfb\u7edf",slug:"/\u8ba1\u7b97\u673a\u57fa\u7840/\u64cd\u4f5c\u7cfb\u7edf/\u4e00\u7bc7\u6587\u7ae0\u8ba9\u4f60\u771f\u6b63\u641e\u61c2epoll\u673a\u5236",permalink:"/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u64cd\u4f5c\u7cfb\u7edf/\u4e00\u7bc7\u6587\u7ae0\u8ba9\u4f60\u771f\u6b63\u641e\u61c2epoll\u673a\u5236",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u64cd\u4f5c\u7cfb\u7edf/\u4e00\u7bc7\u6587\u7ae0\u8ba9\u4f60\u771f\u6b63\u641e\u61c2epoll\u673a\u5236.md",tags:[],version:"current",frontMatter:{},sidebar:"computer_fundamentals",previous:{title:"Real Time\u3001User Time\u4e0eSystem Time",permalink:"/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u64cd\u4f5c\u7cfb\u7edf/Real Time\u3001User Time\u4e0eSystem Time"},next:{title:"\u6df1\u5165\u7406\u89e3\u9875\u4ea4\u6362\u7b97\u6cd5\uff1a\u4f18\u5316\u5185\u5b58\u7ba1\u7406\u7684\u5173\u952e",permalink:"/docs/\u8ba1\u7b97\u673a\u57fa\u7840/\u64cd\u4f5c\u7cfb\u7edf/\u6df1\u5165\u7406\u89e3\u9875\u4ea4\u6362\u7b97\u6cd5\uff1a\u4f18\u5316\u5185\u5b58\u7ba1\u7406\u7684\u5173\u952e"}},p={},o=[{value:"epoll\u7b80\u4ecb",id:"epoll\u7b80\u4ecb",level:2},{value:"epoll\u5b9e\u73b0\u539f\u7406",id:"epoll\u5b9e\u73b0\u539f\u7406",level:2},{value:"<strong>socket\u7b49\u5f85\u961f\u5217</strong>",id:"socket\u7b49\u5f85\u961f\u5217",level:3},{value:"<strong>eventpoll\u7b49\u5f85\u961f\u5217</strong>",id:"eventpoll\u7b49\u5f85\u961f\u5217",level:3},{value:"<strong>\u5c31\u7eea\u961f\u5217</strong>",id:"\u5c31\u7eea\u961f\u5217",level:3},{value:"<strong>\u7ea2\u9ed1\u6811</strong>",id:"\u7ea2\u9ed1\u6811",level:3},{value:"\u521b\u5efaepoll\u6587\u4ef6",id:"\u521b\u5efaepoll\u6587\u4ef6",level:2},{value:"epoll_create",id:"epoll_create",level:3},{value:"\u589e\u52a0\uff0c\u5220\u9664\uff0c\u4fee\u6539epoll\u4e8b\u4ef6",id:"\u589e\u52a0\u5220\u9664\u4fee\u6539epoll\u4e8b\u4ef6",level:2},{value:"epoll_ctl",id:"epoll_ctl",level:3},{value:"struct epoll_event\u7ed3\u6784\u4f53",id:"struct-epoll_event\u7ed3\u6784\u4f53",level:3},{value:"epoll\u4e8b\u4ef6\u5217\u8868",id:"epoll\u4e8b\u4ef6\u5217\u8868",level:3},{value:"epoll\u4e8b\u4ef6\u5982\u4f55\u5904\u7406\uff1f",id:"epoll\u4e8b\u4ef6\u5982\u4f55\u5904\u7406",level:3},{value:"epoll\u4e8b\u4ef6\u5904\u7406\u793a\u4f8b",id:"epoll\u4e8b\u4ef6\u5904\u7406\u793a\u4f8b",level:3},{value:"epoll\u4e8b\u4ef6\u5c31\u7eea",id:"epoll\u4e8b\u4ef6\u5c31\u7eea",level:2},{value:"epoll_wait",id:"epoll_wait",level:3},{value:"epoll\u7f16\u7a0b\u6d41\u7a0b",id:"epoll\u7f16\u7a0b\u6d41\u7a0b",level:2},{value:"epoll\u5e38\u89c1\u95ee\u9898\uff1f",id:"epoll\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u95ee\u98981\uff1aLT\u6a21\u5f0f\u548cET\u6a21\u5f0f\u533a\u522b\uff1f",id:"\u95ee\u98981lt\u6a21\u5f0f\u548cet\u6a21\u5f0f\u533a\u522b",level:3},{value:"\u95ee\u98982\uff1aepoll\u4e3a\u4ec0\u4e48\u9ad8\u6548\uff1f",id:"\u95ee\u98982epoll\u4e3a\u4ec0\u4e48\u9ad8\u6548",level:3},{value:"\u95ee\u98983\uff1aepoll\u91c7\u7528\u963b\u585e\u65b9\u5f0f\u662f\u5426\u5f71\u54cd\u6027\u80fd\uff1f",id:"\u95ee\u98983epoll\u91c7\u7528\u963b\u585e\u65b9\u5f0f\u662f\u5426\u5f71\u54cd\u6027\u80fd",level:3},{value:"\u95ee\u98984\uff1asocket\u91c7\u7528\u963b\u585e\u8fd8\u662f\u975e\u963b\u585e\uff1f",id:"\u95ee\u98984socket\u91c7\u7528\u963b\u585e\u8fd8\u662f\u975e\u963b\u585e",level:3}];function t(l){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...l.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8f6c\u8f7d\u81ea \u7269\u8054\u7f51\u5fc3\u7403"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"epoll\u7b80\u4ecb",children:"epoll\u7b80\u4ecb"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"epoll\u662fLinux\u5185\u6838\u4e3a\u5904\u7406\u5927\u6279\u91cf\u6587\u4ef6\u63cf\u8ff0\u7b26\u800c\u4f5c\u4e86\u6539\u8fdb\u7684poll\uff0c\u5b83\u80fd\u663e\u8457\u63d0\u9ad8\u7a0b\u5e8f\u5728\u5927\u91cf\u5e76\u53d1\u8fde\u63a5\u4e2d\u53ea\u6709\u5c11\u91cf\u6d3b\u8dc3\u7684\u60c5\u51b5\u4e0b\u7684\u7cfb\u7edfCPU\u5229\u7528\u7387\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"epoll\u53ef\u4ee5\u7406\u89e3\u4e3aevent poll\uff0c\u5b83\u662f\u4e00\u79cd\u4e8b\u4ef6\u9a71\u52a8\u7684I/O\u6a21\u578b\uff0c\u53ef\u4ee5\u7528\u6765\u66ff\u4ee3\u4f20\u7edf\u7684select\u548cpoll\u6a21\u578b\u3002epoll\u7684\u4f18\u52bf\u5728\u4e8e\u5b83\u53ef\u4ee5\u540c\u65f6\u5904\u7406\u5927\u91cf\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u800c\u4e14\u4e0d\u4f1a\u968f\u7740\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf\u7684\u589e\u52a0\u800c\u964d\u4f4e\u6548\u7387\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"epoll\u7684\u5b9e\u73b0\u673a\u5236\u662f\u901a\u8fc7\u5185\u6838\u4e0e\u7528\u6237\u7a7a\u95f4\u5171\u4eab\u4e00\u4e2a\u4e8b\u4ef6\u8868\uff0c\u8fd9\u4e2a\u4e8b\u4ef6\u8868\u4e2d\u5b58\u653e\u7740\u6240\u6709\u9700\u8981\u76d1\u63a7\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u4ee5\u53ca\u5b83\u4eec\u7684\u72b6\u6001\uff0c\u5f53\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5185\u6838\u4f1a\u5c06\u8fd9\u4e2a\u4e8b\u4ef6\u901a\u77e5\u7ed9\u7528\u6237\u7a7a\u95f4\uff0c\u7528\u6237\u7a7a\u95f4\u518d\u6839\u636e\u4e8b\u4ef6\u7c7b\u578b\u8fdb\u884c\u76f8\u5e94\u7684\u5904\u7406\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"epoll\u7684\u63a5\u53e3\u548c\u5de5\u4f5c\u6a21\u5f0f\u76f8\u5bf9\u4e8eselect\u548cpoll\u66f4\u52a0\u7b80\u5355\u6613\u7528\uff0c\u56e0\u6b64\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"epoll\u5b9e\u73b0\u539f\u7406",children:"epoll\u5b9e\u73b0\u539f\u7406"}),"\n",(0,s.jsxs)(n.p,{children:["\u200b    ",(0,s.jsx)(n.img,{src:"https://nas.znmlr.cn:15900/markdown/2024/06/04/1.jpg",alt:"1"})]}),"\n",(0,s.jsx)(n.h3,{id:"socket\u7b49\u5f85\u961f\u5217",children:(0,s.jsx)(n.strong,{children:"socket\u7b49\u5f85\u961f\u5217"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"socket\u7b49\u5f85\u961f\u5217\u7528\u4e8e\u5728socket\u63a5\u6536\u5230\u6570\u636e\u540e\u6dfb\u52a0\u5c31\u7eeaepoll\u4e8b\u4ef6\u8282\u70b9\u548c\u5524\u9192eventpoll\u7b49\u5f85\u961f\u5217\u9879\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"socket\u6536\u5230\u6570\u636e\u540e\uff0c\u5524\u9192socket\u7b49\u5f85\u961f\u5217\u9879\uff0c\u5e76\u6267\u884c\u7b49\u5f85\u961f\u5217\u9879\u6ce8\u518c\u7684\u56de\u8c03\u51fd\u6570ep_poll_callback\uff0cep_poll_callback\u51fd\u6570\u5c06\u5c31\u7eeaepoll\u4e8b\u4ef6\u8282\u70b9\u6dfb\u52a0\u81f3\u5c31\u7eea\u961f\u5217\uff0c\u5e76\u5524\u9192eventpoll\u7b49\u5f85\u961f\u5217\u9879\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"eventpoll\u7b49\u5f85\u961f\u5217",children:(0,s.jsx)(n.strong,{children:"eventpoll\u7b49\u5f85\u961f\u5217"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"eventpoll\u7b49\u5f85\u961f\u5217\u7528\u4e8e\u963b\u585e\u5f53\u524d\u8fdb\u7a0b\uff0c\u7528\u4e8eepoll_wait\u672a\u68c0\u6d4b\u5230\u5c31\u7eeaepoll\u4e8b\u4ef6\u8282\u70b9\u7684\u60c5\u51b5\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"epoll_wait\u68c0\u6d4b\u5c31\u7eea\u961f\u5217\u662f\u5426\u6709epoll\u4e8b\u4ef6\u8282\u70b9\uff0c\u6ca1\u6709epoll\u4e8b\u4ef6\u8282\u70b9\uff0c\u5219\u4f7f\u7528\u7b49\u5f85\u961f\u5217\u5c06\u5f53\u524d\u8fdb\u7a0b\u6302\u8d77\uff0c\u540e\u7eedep_poll_callback\u51fd\u6570\u4f1a\u5524\u9192\u5f53\u524d\u8fdb\u7a0b\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5c31\u7eea\u961f\u5217",children:(0,s.jsx)(n.strong,{children:"\u5c31\u7eea\u961f\u5217"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5c31\u7eea\u961f\u5217\u7528\u4e8e\u5b58\u50a8\u5c31\u7eeaepoll\u4e8b\u4ef6\u8282\u70b9\uff0c\u7528\u6237\u901a\u8fc7epoll_wait\u51fd\u6570\u83b7\u53d6\u5c31\u7eeaepoll\u4e8b\u4ef6\u8282\u70b9\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u7ea2\u9ed1\u6811",children:(0,s.jsx)(n.strong,{children:"\u7ea2\u9ed1\u6811"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7ea2\u9ed1\u6811\u7528\u4e8e\u5b58\u50a8\u901a\u8fc7epoll_ctl\u51fd\u6570\u6ce8\u518c\u7684epoll\u4e8b\u4ef6\u8282\u70b9\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efaepoll\u6587\u4ef6",children:"\u521b\u5efaepoll\u6587\u4ef6"}),"\n",(0,s.jsx)(n.h3,{id:"epoll_create",children:"epoll_create"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int epoll_create(int size);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u529f\u80fd\uff1aepoll_create\u51fd\u6570\u7528\u4e8e\u521b\u5efaepoll\u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"size\uff1a\u76ee\u524d\u5185\u6838\u8fd8\u6ca1\u6709\u5b9e\u9645\u4f7f\u7528\uff0c\u53ea\u8981\u5927\u4e8e0\u5c31\u884c\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6210\u529f\uff1a\u8fd4\u56deepoll\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5931\u8d25\uff1a\u8fd4\u56de-1\uff0c\u5e76\u8bbe\u7f6eerrno\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u200b    ",(0,s.jsx)(n.img,{src:"https://nas.znmlr.cn:15900/markdown/2024/06/04/2.jpg",alt:"2"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u589e\u52a0\u5220\u9664\u4fee\u6539epoll\u4e8b\u4ef6",children:"\u589e\u52a0\uff0c\u5220\u9664\uff0c\u4fee\u6539epoll\u4e8b\u4ef6"}),"\n",(0,s.jsx)(n.h3,{id:"epoll_ctl",children:"epoll_ctl"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int epoll_ctl(int epfd, int op, int fd, struct epoll_event *event);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u529f\u80fd\uff1aepoll_ctl\u51fd\u6570\u7528\u4e8e\u589e\u52a0\uff0c\u5220\u9664\uff0c\u4fee\u6539epoll\u4e8b\u4ef6\uff0cepoll\u4e8b\u4ef6\u4f1a\u5b58\u50a8\u4e8e\u5185\u6838epoll\u7ed3\u6784\u4f53\u7ea2\u9ed1\u6811\u4e2d\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"epfd\uff1aepoll\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"op\uff1a\u64cd\u4f5c\u7801"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"EPOLL_CTL_ADD\uff1a\u63d2\u5165\u4e8b\u4ef6"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"EPOLL_CTL_DEL\uff1a\u5220\u9664\u4e8b\u4ef6"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"EPOLL_CTL_MOD\uff1a\u4fee\u6539\u4e8b\u4ef6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"fd\uff1aepoll\u4e8b\u4ef6\u7ed1\u5b9a\u7684\u5957\u63a5\u5b57\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"events\uff1aepoll\u4e8b\u4ef6\u7ed3\u6784\u4f53\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6210\u529f\uff1a\u8fd4\u56de0\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5931\u8d25\uff1a\u8fd4\u56de-1\uff0c\u5e76\u8bbe\u7f6eerrno\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nas.znmlr.cn:15900/markdown/2024/06/04/3.jpg",alt:"3"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"struct-epoll_event\u7ed3\u6784\u4f53",children:"struct epoll_event\u7ed3\u6784\u4f53"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"struct epoll_event{\r\n    uint32_t events; //epoll\u4e8b\u4ef6\uff0c\u53c2\u8003\u4e8b\u4ef6\u5217\u8868 \r\n    epoll_data_t data;\r\n} ;\r\n\r\ntypedef union epoll_data { \r\n    void *ptr; \r\n    int fd; //\u5957\u63a5\u5b57\u6587\u4ef6\u63cf\u8ff0\u7b26\r\n    uint32_t u32; \r\n    uint64_t u64;\r\n} epoll_data_t;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"epoll\u4e8b\u4ef6\u5217\u8868",children:"epoll\u4e8b\u4ef6\u5217\u8868"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"enum EPOLL_EVENTS {\r\n  EPOLLIN = 0x001, \t//socket\u53ef\u8bfb\u3002\r\n  EPOLLPRI = 0x002, \t//socket\u6709\u7d27\u6025\u6570\u636e\u3002\r\n  EPOLLOUT = 0x004, \t//socket\u53ef\u5199\u3002\r\n  EPOLLRDNORM = 0x040,\r\n  EPOLLRDBAND = 0x080,\r\n  EPOLLWRNORM = 0x100,\r\n  EPOLLWRBAND = 0x200,\r\n  EPOLLMSG = 0x400,\r\n  EPOLLERR = 0x008, \t\t//socket\u6587\u4ef6\u51fa\u9519\u3002\r\n  EPOLLHUP = 0x010, \t\t//socket\u6587\u4ef6\u88ab\u6302\u8d77\u3002\r\n  EPOLLRDHUP = 0x2000, \t\t//socket\u6587\u4ef6\u88ab\u5173\u95ed\u6216\u8005\u5173\u95ed\u8bfb\u7aef\u3002\r\n  EPOLLEXCLUSIVE = 1u << 28,\r\n  EPOLLWAKEUP = 1u << 29,\r\n  EPOLLONESHOT = 1u << 30, \t//\u5355\u6b21\u6a21\u5f0f\uff0c\u6267\u884c\u5b8cepoll_wait\u540e\u9700\u91cd\u65b0\u8c03\u7528epoll_ctl\u6ce8\u518c\u4e8b\u4ef6\u3002\r\n  EPOLLET = 1u << 31 \t\t//\u8fb9\u7f18\u89e6\u53d1\uff0c\u9ed8\u8ba4\u4e3a\u6c34\u5e73\u89e6\u53d1\u3002\r\n };\n"})}),"\n",(0,s.jsx)(n.h3,{id:"epoll\u4e8b\u4ef6\u5982\u4f55\u5904\u7406",children:"epoll\u4e8b\u4ef6\u5982\u4f55\u5904\u7406\uff1f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["epoll\u4e8b\u4ef6\u5904\u7406\u539f\u5219\uff1a",(0,s.jsx)(n.strong,{children:"epoll_wait\u83b7\u53d6epoll\u4e8b\u4ef6 = \u6ce8\u518cepoll\u4e8b\u4ef6 & \u5c31\u7eeaepoll\u4e8b\u4ef6"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nas.znmlr.cn:15900/markdown/2024/06/04/4.jpg",alt:"4"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["epoll_ctl\u51fd\u6570\u589e\u52a0epoll\u4e8b\u4ef6\u65f6\uff0c",(0,s.jsx)(n.strong,{children:"\u7cfb\u7edf\u9ed8\u8ba4\u6ce8\u518cEPOLLERR\u548cEPOLLHUP\u4e8b\u4ef6\u3002"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nas.znmlr.cn:15900/markdown/2024/06/04/5.jpg",alt:"5"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"epoll\u4e8b\u4ef6\u5904\u7406\u793a\u4f8b",children:"epoll\u4e8b\u4ef6\u5904\u7406\u793a\u4f8b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u6ce8\u518cepoll\u4e8b\u4ef6"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"struct epoll_event ev;\r\nev.data.fd = sock_fd;\r\nev.events = EPOLLIN; //\u6ce8\u518cEPOLLIN\u4e8b\u4ef6\r\nepoll_ctl(efd, EPOLL_CTL_ADD, sock_fd, &ev);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u5c31\u7eeaepoll\u4e8b\u4ef6"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"res = EPOLLIN | EPOLLRDNORM;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"epoll_wait\u83b7\u53d6\u4e8b\u4ef6"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"events = (EPOLLIN|EPOLLERR|EPOLLHUP)&(EPOLLIN|EPOLLRDNORM) = EPOLLIN;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"==\u6ce8\u610f\uff1a\u53ea\u6709\u6ce8\u518c\u7684\u4e8b\u4ef6\u624d\u80fd\u901a\u8fc7epoll_wait\u83b7\u53d6\u3002=="}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"epoll\u4e8b\u4ef6\u5c31\u7eea",children:"epoll\u4e8b\u4ef6\u5c31\u7eea"}),"\n",(0,s.jsx)(n.h3,{id:"epoll_wait",children:"epoll_wait"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int epoll_wait(int epfd, struct epoll_event *events, int maxevents, int timeout);\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u529f\u80fd\uff1aepoll_wait\u7528\u4e8e\u76d1\u542cepoll\u4e8b\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"epfd\uff1aepoll\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"events\uff1aepoll\u4e8b\u4ef6\u6570\u7ec4\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"maxevents\uff1aepoll\u4e8b\u4ef6\u6570\u7ec4\u957f\u5ea6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"timeout\uff1a\u8d85\u65f6\u65f6\u95f4\uff0c"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5c0f\u4e8e0\uff1a\u4e00\u76f4\u7b49\u5f85\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7b49\u4e8e0\uff1a\u7acb\u5373\u8fd4\u56de\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5927\u4e8e0\uff1a\u7b49\u5f85\u8d85\u65f6\u65f6\u95f4\u8fd4\u56de\uff0c\u5355\u4f4d\u6beb\u79d2\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u503c\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5c0f\u4e8e0\uff1a\u51fa\u9519\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7b49\u4e8e0\uff1a\u8d85\u65f6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5927\u4e8e0\uff1a\u8fd4\u56de\u5c31\u7eea\u4e8b\u4ef6\u4e2a\u6570\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nas.znmlr.cn:15900/markdown/2024/06/04/6.jpg",alt:"6"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"epoll\u7f16\u7a0b\u6d41\u7a0b",children:"epoll\u7f16\u7a0b\u6d41\u7a0b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nas.znmlr.cn:15900/markdown/2024/06/04/7.jpg",alt:"7"})}),"\n",(0,s.jsx)(n.h2,{id:"epoll\u5e38\u89c1\u95ee\u9898",children:"epoll\u5e38\u89c1\u95ee\u9898\uff1f"}),"\n",(0,s.jsx)(n.h3,{id:"\u95ee\u98981lt\u6a21\u5f0f\u548cet\u6a21\u5f0f\u533a\u522b",children:"\u95ee\u98981\uff1aLT\u6a21\u5f0f\u548cET\u6a21\u5f0f\u533a\u522b\uff1f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"LT\u6a21\u5f0f\u53c8\u79f0\u6c34\u5e73\u89e6\u53d1\uff0cET\u6a21\u5f0f\u53c8\u79f0\u8fb9\u7f18\u89e6\u53d1\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"LT\u6a21\u5f0f\u53ea\u4e0d\u8fc7\u6bd4ET\u6a21\u5f0f\u591a\u6267\u884c\u4e86\u4e00\u4e2a\u6b65\u9aa4\uff0c\u5c31\u662f\u5f53epoll_wait\u83b7\u53d6\u5b8c\u5c31\u7eea\u961f\u5217epoll\u4e8b\u4ef6\u540e\uff0cLT\u6a21\u5f0f\u4f1a\u518d\u6b21\u5c06epoll\u4e8b\u4ef6\u6dfb\u52a0\u5230\u5c31\u7eea\u961f\u5217\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"LT\u6a21\u5f0f\u591a\u4e86\u8fd9\u6837\u4e00\u4e2a\u6b65\u9aa4\u4f1a\u8ba9LT\u6a21\u5f0f\u8c03\u7528epoll_wait\u65f6\u4f1a\u4e00\u76f4\u68c0\u6d4b\u5230epoll\u4e8b\u4ef6\uff0c\u76f4\u5230socket\u7f13\u51b2\u533a\u6570\u636e\u6e05\u7a7a\u4e3a\u6b62\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ET\u6a21\u5f0f\u5219\u53ea\u4f1a\u5728\u7f13\u51b2\u533a\u6ee1\u8db3\u7279\u5b9a\u60c5\u51b5\u4e0b\u624d\u4f1a\u89e6\u53d1epoll_wait\u83b7\u53d6epoll\u4e8b\u4ef6\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nas.znmlr.cn:15900/markdown/2024/06/04/8.jpg",alt:"8"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"LT\u6a21\u5f0f\u548cET\u6a21\u5f0f\u4f18\u7f3a\u70b9"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://nas.znmlr.cn:15900/markdown/2024/06/04/9.jpg",alt:"9"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u95ee\u98982epoll\u4e3a\u4ec0\u4e48\u9ad8\u6548",children:"\u95ee\u98982\uff1aepoll\u4e3a\u4ec0\u4e48\u9ad8\u6548\uff1f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"eventpoll\u7b49\u5f85\u961f\u5217\u673a\u5236\uff0c\u5f53\u5c31\u7eea\u961f\u5217\u6ca1\u6709epoll\u4e8b\u4ef6\u65f6\u4e3b\u52a8\u8ba9\u51faCPU\uff0c\u963b\u585e\u8fdb\u7a0b\uff0c\u63d0\u9ad8CPU\u5229\u7528\u7387\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"socket\u7b49\u5f85\u961f\u5217\u673a\u5236\uff0c\u53ea\u6709\u63a5\u6536\u5230\u6570\u636e\u65f6\u624d\u4f1a\u5c06epoll\u4e8b\u4ef6\u63d2\u5165\u5c31\u7eea\u961f\u5217\uff0c\u5524\u9192\u8fdb\u7a0b\u83b7\u53d6epoll\u4e8b\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7ea2\u9ed1\u6811\u63d0\u9ad8epoll\u4e8b\u4ef6\u589e\u52a0\uff0c\u5220\u9664\uff0c\u4fee\u6539\u6548\u7387\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4efb\u52a1\u8d8a\u591a\uff0c\u8fdb\u7a0b\u51fa\u8ba9CPU\u6982\u7387\u8d8a\u5c0f\uff0c\u8fdb\u7a0b\u5de5\u4f5c\u6548\u7387\u8d8a\u9ad8\uff0c\u6240\u4ee5epoll\u975e\u5e38\u9002\u5408\u9ad8\u5e76\u53d1\u573a\u666f\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u95ee\u98983epoll\u91c7\u7528\u963b\u585e\u65b9\u5f0f\u662f\u5426\u5f71\u54cd\u6027\u80fd",children:"\u95ee\u98983\uff1aepoll\u91c7\u7528\u963b\u585e\u65b9\u5f0f\u662f\u5426\u5f71\u54cd\u6027\u80fd\uff1f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"epoll\u673a\u5236\u672c\u8eab\u4e5f\u662f\u963b\u585e\u7684\uff0c\u5f53epoll_wait\u672a\u68c0\u6d4b\u5230epoll\u4e8b\u4ef6\u65f6\uff0c\u4f1a\u51fa\u8ba9CPU\uff0c\u963b\u585e\u8fdb\u7a0b\uff0c\u8fd9\u79cd\u963b\u585e\u662f\u975e\u5e38\u6709\u5fc5\u8981\u7684\uff0c\u5982\u679c\u4e0d\u53ca\u65f6\u51fa\u8ba9CPU\u4f1a\u6d6a\u8d39CPU\u8d44\u6e90\uff0c\u5bfc\u81f4\u5176\u4ed6\u4efb\u52a1\u65e0\u6cd5\u62a2\u5360CPU\uff0c\u53ea\u8981epoll\u673a\u5236\u80fd\u591f\u5728\u68c0\u6d4b\u5230epoll\u4e8b\u4ef6\u540e\uff0c\u53ca\u65f6\u5524\u9192\u8fdb\u7a0b\u5904\u7406\uff0c\u5e76\u4e0d\u4f1a\u5f71\u54cdepoll\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u95ee\u98984socket\u91c7\u7528\u963b\u585e\u8fd8\u662f\u975e\u963b\u585e",children:"\u95ee\u98984\uff1asocket\u91c7\u7528\u963b\u585e\u8fd8\u662f\u975e\u963b\u585e\uff1f"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["socket\u91c7\u7528",(0,s.jsx)(n.strong,{children:"\u975e\u963b\u585e\u65b9\u5f0f"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"epoll\u673a\u5236\u5c5e\u4e8eIO\u591a\u8def\u590d\u7528\u673a\u5236\uff0c\u8fd9\u79cd\u673a\u5236\u7684\u7279\u70b9\u662f\u4e00\u4e2a\u8fdb\u7a0b\u5904\u7406\u591a\u8defIO\u8bf7\u6c42\uff0c\u5982\u679csocket\u8bbe\u7f6e\u6210\u963b\u585e\u6a21\u5f0f\u4f1a\u5b58\u5728\u4ee5\u4e0b\u51e0\u4e2a\u95ee\u9898\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u8fdb\u7a0b\u540c\u4e00\u65f6\u95f4\u53ea\u80fd\u5904\u7406\u4e00\u4e2asocket\u6570\u636e\uff0c\u5982\u679csocket\u88ab\u963b\u585e\uff0c\u90a3\u4e48\u8be5\u8fdb\u7a0b\u65e0\u6cd5\u5904\u7406\u5176\u4ed6\u7684socket\u6570\u636e\uff0c\u4e25\u91cd\u5f71\u54cd\u4e86\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u963b\u585e\u7684\u672c\u8d28\u662f\u8fdb\u7a0b\u72b6\u6001\u548c\u4e0a\u4e0b\u6587\u7684\u5207\u6362\uff0c\u9891\u7e41\u7684\u963b\u585e\u4f1a\u628a\u8ba9CPU\u4e00\u76f4\u5904\u4e8e\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u72b6\u6001\uff0c\u5bfc\u81f4CPU\u778e\u5fd9\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(l={}){const{wrapper:n}={...(0,i.R)(),...l.components};return n?(0,s.jsx)(n,{...l,children:(0,s.jsx)(t,{...l})}):t(l)}},8453:(l,n,e)=>{e.d(n,{R:()=>c,x:()=>d});var s=e(6540);const i={},r=s.createContext(i);function c(l){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof l?l(n):{...n,...l}}),[n,l])}function d(l){let n;return n=l.disableParentContext?"function"==typeof l.components?l.components(i):l.components||i:c(l.components),s.createElement(r.Provider,{value:n},l.children)}}}]);