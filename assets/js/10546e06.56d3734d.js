"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8266],{1569:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>t,frontMatter:()=>i,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"\u5e38\u89c1\u95ee\u9898/Windows/\u547d\u4ee4\u884c\u6302\u8f7dwebdav\u670d\u52a1","title":"\u4f7f\u7528 rclone \u6302\u8f7d WebDAV","description":"\u672c\u6307\u5357\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 rclone \u6302\u8f7d WebDAV \u5230\u672c\u5730\uff0c\u5e76\u901a\u8fc7 VBS \u811a\u672c \u5b9e\u73b0\u540e\u53f0\u65e0\u7a97\u53e3\u542f\u52a8\u3002","source":"@site/docs/\u5e38\u89c1\u95ee\u9898/Windows/\u547d\u4ee4\u884c\u6302\u8f7dwebdav\u670d\u52a1.md","sourceDirName":"\u5e38\u89c1\u95ee\u9898/Windows","slug":"/\u5e38\u89c1\u95ee\u9898/Windows/\u547d\u4ee4\u884c\u6302\u8f7dwebdav\u670d\u52a1","permalink":"/docs/\u5e38\u89c1\u95ee\u9898/Windows/\u547d\u4ee4\u884c\u6302\u8f7dwebdav\u670d\u52a1","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5e38\u89c1\u95ee\u9898/Windows/\u547d\u4ee4\u884c\u6302\u8f7dwebdav\u670d\u52a1.md","tags":[],"version":"current","frontMatter":{},"sidebar":"frequently_question","previous":{"title":"mklink\u521b\u5efa\u7684\u94fe\u63a5\u5982\u4f55\u5220\u9664\u7bad\u5934","permalink":"/docs/\u5e38\u89c1\u95ee\u9898/Windows/mklink\u521b\u5efa\u7684\u94fe\u63a5\u5982\u4f55\u5220\u9664\u7bad\u5934"},"next":{"title":"\u6dfb\u52a0\u6587\u4ef6\u5939\u5230\u6211\u7684\u7535\u8111","permalink":"/docs/\u5e38\u89c1\u95ee\u9898/Windows/\u6dfb\u52a0\u6587\u4ef6\u5939\u5230\u6211\u7684\u7535\u8111"}}');var c=s(4848),d=s(8453);const i={},r="\u4f7f\u7528 rclone \u6302\u8f7d WebDAV",h={},o=[{value:"1. \u5b89\u88c5 rclone",id:"1-\u5b89\u88c5-rclone",level:2},{value:"2. \u914d\u7f6e WebDAV \u8fdc\u7a0b\u5b58\u50a8",id:"2-\u914d\u7f6e-webdav-\u8fdc\u7a0b\u5b58\u50a8",level:2},{value:"3. \u6302\u8f7d WebDAV \u5230\u672c\u5730",id:"3-\u6302\u8f7d-webdav-\u5230\u672c\u5730",level:2},{value:"\u53c2\u6570\u8bf4\u660e\uff1a",id:"\u53c2\u6570\u8bf4\u660e",level:3},{value:"4. \u901a\u8fc7 VBS \u5b9e\u73b0\u65e0\u7a97\u53e3\u542f\u52a8",id:"4-\u901a\u8fc7-vbs-\u5b9e\u73b0\u65e0\u7a97\u53e3\u542f\u52a8",level:2},{value:"\u5355\u4e2a\u6302\u8f7d\u811a\u672c",id:"\u5355\u4e2a\u6302\u8f7d\u811a\u672c",level:3},{value:"\u591a\u4e2a\u6302\u8f7d\u811a\u672c",id:"\u591a\u4e2a\u6302\u8f7d\u811a\u672c",level:3},{value:"\u914d\u7f6e\u5f00\u673a\u81ea\u52a8\u542f\u52a8",id:"\u914d\u7f6e\u5f00\u673a\u81ea\u52a8\u542f\u52a8",level:3},{value:"5. \u53c2\u6570\u8be6\u89e3",id:"5-\u53c2\u6570\u8be6\u89e3",level:2},{value:"<code>--vfs-cache-mode</code> \u7f13\u5b58\u6a21\u5f0f",id:"--vfs-cache-mode-\u7f13\u5b58\u6a21\u5f0f",level:3},{value:"\u5e38\u7528\u53c2\u6570",id:"\u5e38\u7528\u53c2\u6570",level:3},{value:"6. \u5e38\u89c1\u95ee\u9898\u89e3\u51b3",id:"6-\u5e38\u89c1\u95ee\u9898\u89e3\u51b3",level:2},{value:"\u6302\u8f7d\u5931\u8d25\uff1a<code>mount stopped before calling Init</code>",id:"\u6302\u8f7d\u5931\u8d25mount-stopped-before-calling-init",level:3},{value:"\u8def\u5f84\u51b2\u7a81\uff1a<code>mountpoint path already exists</code>",id:"\u8def\u5f84\u51b2\u7a81mountpoint-path-already-exists",level:3},{value:"\u5f3a\u5236\u5173\u95ed\u6302\u8f7d",id:"\u5f3a\u5236\u5173\u95ed\u6302\u8f7d",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u4f7f\u7528-rclone-\u6302\u8f7d-webdav",children:"\u4f7f\u7528 rclone \u6302\u8f7d WebDAV"})}),"\n",(0,c.jsxs)(n.p,{children:["\u672c\u6307\u5357\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,c.jsx)(n.strong,{children:"rclone"})," \u6302\u8f7d WebDAV \u5230\u672c\u5730\uff0c\u5e76\u901a\u8fc7 ",(0,c.jsx)(n.strong,{children:"VBS \u811a\u672c"})," \u5b9e\u73b0\u540e\u53f0\u65e0\u7a97\u53e3\u542f\u52a8\u3002"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"1-\u5b89\u88c5-rclone",children:"1. \u5b89\u88c5 rclone"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u8bbf\u95ee ",(0,c.jsx)(n.a,{href:"https://rclone.org/downloads/",children:"rclone \u5b98\u7f51"}),"\u4e0b\u8f7d\u9002\u7528\u4e8e Windows \u7684\u5b89\u88c5\u5305\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u89e3\u538b\u540e\u5c06'",(0,c.jsx)(n.code,{children:"rclone.exe"})," \u6587\u4ef6\u653e\u5165\u7cfb\u7edf\u8def\u5f84\uff08\u5982 ",(0,c.jsx)(n.code,{children:"C:\\Windows\\System32\\"}),"\uff09\uff0c\u8fd9\u6837\u53ef\u4ee5\u65b9\u4fbf\u60a8\u5728\u4efb\u4f55\u4f4d\u7f6e\u76f4\u63a5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"rclone"})," \u547d\u4ee4\uff0c\u800c\u65e0\u9700\u6307\u5b9a\u5b8c\u6574\u8def\u5f84\uff1b\u6216\u8005\u8bb0\u4f4f",(0,c.jsx)(n.code,{children:"rclone.exe"})," \u7684\u5177\u4f53\u8def\u5f84\u4ee5\u624b\u52a8\u8c03\u7528\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"2-\u914d\u7f6e-webdav-\u8fdc\u7a0b\u5b58\u50a8",children:"2. \u914d\u7f6e WebDAV \u8fdc\u7a0b\u5b58\u50a8"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6253\u5f00\u547d\u4ee4\u63d0\u793a\u7b26\uff08PowerShell \u6216 CMD\uff09\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"rclone config\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6309\u7167\u63d0\u793a\u5b8c\u6210\u914d\u7f6e\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u8f93\u5165 ",(0,c.jsx)(n.code,{children:"n"})," \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8fdc\u7a0b\u5b58\u50a8\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8f93\u5165\u4e00\u4e2a\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"webdav_public"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5728\u5b58\u50a8\u7c7b\u578b\u5217\u8868\u4e2d\u9009\u62e9 ",(0,c.jsx)(n.code,{children:"30"}),"\uff0c\u5bf9\u5e94 WebDAV\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8f93\u5165 WebDAV \u670d\u52a1\u7684 URL\uff0c\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"https://your-webdav-server/path"}),"\u3002WebDAV \u670d\u52a1\u7684 URL \u901a\u5e38\u7c7b\u4f3c\u4e8e ",(0,c.jsx)(n.code,{children:"https://your-domain.com/webdav"})," \u6216 ",(0,c.jsx)(n.code,{children:"https://your-ip-address:port/webdav"}),"\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u9009\u62e9\u8ba4\u8bc1\u7c7b\u578b\uff08\u4e00\u822c\u4e3a ",(0,c.jsx)(n.code,{children:"basic"})," \u6216 ",(0,c.jsx)(n.code,{children:"digest"}),"\uff09\u3002",(0,c.jsx)(n.code,{children:"basic"})," \u662f\u6700\u5e38\u89c1\u7684\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u4f46\u67d0\u4e9b\u670d\u52a1\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u66f4\u5b89\u5168\u7684 ",(0,c.jsx)(n.code,{children:"digest"})," \u8ba4\u8bc1\u7c7b\u578b\uff0c\u5177\u4f53\u8bf7\u53c2\u8003\u60a8\u7684 WebDAV \u670d\u52a1\u63d0\u4f9b\u5546\u7684\u8bf4\u660e\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u8f93\u5165 WebDAV \u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u914d\u7f6e\u5b8c\u6210\u540e\u8f93\u5165 ",(0,c.jsx)(n.code,{children:"q"})," \u9000\u51fa\u914d\u7f6e\u754c\u9762\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u6210\u529f\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"rclone ls webdav_public:\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u80fd\u5217\u51fa\u8fdc\u7a0b WebDAV \u7684\u6587\u4ef6\uff0c\u8bf4\u660e\u914d\u7f6e\u6210\u529f\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"3-\u6302\u8f7d-webdav-\u5230\u672c\u5730",children:"3. \u6302\u8f7d WebDAV \u5230\u672c\u5730"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a\u672c\u5730\u6587\u4ef6\u5939\u4f5c\u4e3a\u6302\u8f7d\u70b9\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"mkdir d:/webdav/public\n"})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6302\u8f7d WebDAV\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"rclone mount webdav_public: d:/webdav/public --vfs-cache-mode writes\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u53c2\u6570\u8bf4\u660e",children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"webdav_public:"})," \u662f\u914d\u7f6e\u7684 WebDAV \u540d\u79f0\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"d:/webdav/public"})," \u662f\u672c\u5730\u6302\u8f7d\u8def\u5f84\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--vfs-cache-mode writes"})," \u542f\u7528\u5199\u5165\u7f13\u5b58\uff0c\u4ee5\u786e\u4fdd\u8fdc\u7a0b\u5b58\u50a8\u517c\u5bb9\u6027\u548c\u7a33\u5b9a\u6027\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6302\u8f7d\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u50cf\u8bbf\u95ee\u672c\u5730\u6587\u4ef6\u5939\u4e00\u6837\u64cd\u4f5c WebDAV\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"4-\u901a\u8fc7-vbs-\u5b9e\u73b0\u65e0\u7a97\u53e3\u542f\u52a8",children:"4. \u901a\u8fc7 VBS \u5b9e\u73b0\u65e0\u7a97\u53e3\u542f\u52a8"}),"\n",(0,c.jsxs)(n.p,{children:["\u4e3a\u4e86\u9690\u85cf\u547d\u4ee4\u7a97\u53e3\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.strong,{children:"VBS \u811a\u672c"}),"\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5355\u4e2a\u6302\u8f7d\u811a\u672c",children:"\u5355\u4e2a\u6302\u8f7d\u811a\u672c"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u6253\u5f00\u8bb0\u4e8b\u672c\uff0c\u65b0\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u7c98\u8d34\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-vbscript",children:'Set WshShell = CreateObject("WScript.Shell")\r\nWshShell.Run "cmd /c rclone mount webdav_public: d:/webdav/public --vfs-cache-mode writes", 0\n'})}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5c06\u6587\u4ef6\u53e6\u5b58\u4e3a ",(0,c.jsx)(n.code,{children:"start_rclone.vbs"}),"\u3002"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6587\u4ef6\u7c7b\u578b\u9009\u62e9 ",(0,c.jsx)(n.strong,{children:"\u6240\u6709\u6587\u4ef6"}),"\uff0c\u6269\u5c55\u540d\u4e3a ",(0,c.jsx)(n.code,{children:".vbs"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"\u53cc\u51fb\u8fd0\u884c\u811a\u672c\uff0c\u5373\u53ef\u6302\u8f7d WebDAV \u4e14\u6ca1\u6709\u7a97\u53e3\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u591a\u4e2a\u6302\u8f7d\u811a\u672c",children:"\u591a\u4e2a\u6302\u8f7d\u811a\u672c"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u6302\u8f7d\u591a\u4e2a WebDAV\uff0c\u53ef\u4ee5\u4fee\u6539\u811a\u672c\u5982\u4e0b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-vbscript",children:'Set WshShell = CreateObject("WScript.Shell")\r\n\r\nWshShell.Run "cmd /c rclone mount webdav_public1: d:/webdav/public1 --vfs-cache-mode writes", 0\r\nWshShell.Run "cmd /c rclone mount webdav_public2: d:/webdav/public2 --vfs-cache-mode writes", 0\r\nWshShell.Run "cmd /c rclone mount webdav_public3: d:/webdav/public3 --vfs-cache-mode writes", 0\r\nWshShell.Run "cmd /c rclone mount webdav_public4: d:/webdav/public4 --vfs-cache-mode writes", 0\n'})}),"\n",(0,c.jsx)(n.h3,{id:"\u914d\u7f6e\u5f00\u673a\u81ea\u52a8\u542f\u52a8",children:"\u914d\u7f6e\u5f00\u673a\u81ea\u52a8\u542f\u52a8"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6309\u4e0b ",(0,c.jsx)(n.code,{children:"Win + R"}),"\uff0c\u8f93\u5165 ",(0,c.jsx)(n.code,{children:"shell:startup"}),"\uff0c\u56de\u8f66\u8fdb\u5165\u542f\u52a8\u6587\u4ef6\u5939\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5c06 ",(0,c.jsx)(n.code,{children:"start_rclone.vbs"})," \u6587\u4ef6\u590d\u5236\u5230\u8be5\u6587\u4ef6\u5939\u4e2d\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u91cd\u542f\u7535\u8111\uff0c\u9a8c\u8bc1\u6302\u8f7d\u662f\u5426\u6210\u529f\u3002"}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"5-\u53c2\u6570\u8be6\u89e3",children:"5. \u53c2\u6570\u8be6\u89e3"}),"\n",(0,c.jsxs)(n.h3,{id:"--vfs-cache-mode-\u7f13\u5b58\u6a21\u5f0f",children:[(0,c.jsx)(n.code,{children:"--vfs-cache-mode"})," \u7f13\u5b58\u6a21\u5f0f"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"--vfs-cache-mode"})," \u63a7\u5236 rclone \u7684\u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff08VFS\uff09\u7f13\u5b58\u884c\u4e3a\u3002\u5e38\u7528\u9009\u9879\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"off"}),"\uff1a\u9ed8\u8ba4\u6a21\u5f0f\uff0c\u4e0d\u7f13\u5b58\u6587\u4ef6\u5185\u5bb9\uff0c\u9002\u5408\u53ea\u8bfb\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"minimal"}),"\uff1a\u4ec5\u7f13\u5b58\u5fc5\u8981\u7684\u5143\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"writes"}),"\uff1a\u7f13\u5b58\u5199\u5165\u6587\u4ef6\uff0c\u9002\u5408\u9891\u7e41\u5199\u64cd\u4f5c\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"full"}),"\uff1a\u7f13\u5b58\u6240\u6709\u8bfb\u5199\u64cd\u4f5c\uff0c\u6027\u80fd\u6700\u4f73\uff0c\u4f46\u5360\u7528\u66f4\u591a\u78c1\u76d8\u7a7a\u95f4\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5e38\u7528\u53c2\u6570",children:"\u5e38\u7528\u53c2\u6570"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--bwlimit 10M"}),"\uff1a\u9650\u5236\u5e26\u5bbd\uff0c\u4f8b\u5982 10MB/s\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--cache-dir <path>"}),"\uff1a\u6307\u5b9a\u7f13\u5b58\u76ee\u5f55\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"--vfs-read-chunk-size 32M"}),"\uff1a\u8bbe\u7f6e\u5206\u5757\u8bfb\u53d6\u5927\u5c0f\u3002\u6b64\u53c2\u6570\u63a7\u5236\u6587\u4ef6\u5206\u5757\u7684\u8bfb\u53d6\u5927\u5c0f\uff0c\u53ef\u4ee5\u663e\u8457\u63d0\u9ad8\u5927\u6587\u4ef6\u7684\u8bfb\u53d6\u901f\u5ea6\uff0c\u51cf\u5c11\u56e0\u591a\u6b21\u5c0f\u5757\u8bfb\u53d6\u800c\u5e26\u6765\u7684\u6027\u80fd\u5f00\u9500\uff0c\u7279\u522b\u662f\u5728\u7f51\u7edc\u5ef6\u8fdf\u8f83\u9ad8\u7684\u73af\u5883\u4e2d\u6548\u679c\u66f4\u4e3a\u660e\u663e\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"6-\u5e38\u89c1\u95ee\u9898\u89e3\u51b3",children:"6. \u5e38\u89c1\u95ee\u9898\u89e3\u51b3"}),"\n",(0,c.jsxs)(n.h3,{id:"\u6302\u8f7d\u5931\u8d25mount-stopped-before-calling-init",children:["\u6302\u8f7d\u5931\u8d25\uff1a",(0,c.jsx)(n.code,{children:"mount stopped before calling Init"})]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u662f\u56e0\u4e3a rclone \u6302\u8f7d\u9700\u8981 ",(0,c.jsx)(n.strong,{children:"WinFsp"})," \u652f\u6301\u3002\u89e3\u51b3\u65b9\u6cd5\uff1a"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u4e0b\u8f7d\u5e76\u5b89\u88c5 ",(0,c.jsx)(n.a,{href:"https://github.com/billziss-gh/winfsp/releases",children:"WinFsp"}),"\u3002"]}),"\n",(0,c.jsx)(n.li,{children:"\u91cd\u542f\u7535\u8111\u540e\u91cd\u65b0\u6302\u8f7d\u3002"}),"\n"]}),"\n",(0,c.jsxs)(n.h3,{id:"\u8def\u5f84\u51b2\u7a81mountpoint-path-already-exists",children:["\u8def\u5f84\u51b2\u7a81\uff1a",(0,c.jsx)(n.code,{children:"mountpoint path already exists"})]}),"\n",(0,c.jsx)(n.p,{children:"\u6302\u8f7d\u8def\u5f84\u5df2\u88ab\u5360\u7528\uff0c\u53ef\u4ee5\uff1a"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsx)(n.li,{children:"\u786e\u4fdd\u6ca1\u6709\u5176\u4ed6\u8fdb\u7a0b\u5360\u7528\u8def\u5f84\u3002"}),"\n",(0,c.jsxs)(n.li,{children:["\u4f7f\u7528\u65b0\u7684\u6302\u8f7d\u8def\u5f84\uff0c\u4f8b\u5982\uff1a","\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"rclone mount webdav_public: d:/webdav/new_path --vfs-cache-mode writes\n"})}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u5f3a\u5236\u5173\u95ed\u6302\u8f7d",children:"\u5f3a\u5236\u5173\u95ed\u6302\u8f7d"}),"\n",(0,c.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u7ec8\u6b62\u6302\u8f7d\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"taskkill /IM rclone.exe /F\n"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.p,{children:"\u5b8c\u6210\u4e0a\u8ff0\u914d\u7f6e\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 rclone \u5728 Windows \u4e0a\u6302\u8f7d WebDAV\uff0c\u5e76\u901a\u8fc7 VBS \u5b9e\u73b0\u65e0\u7a97\u53e3\u542f\u52a8\u548c\u5f00\u673a\u81ea\u52a8\u6302\u8f7d\uff01"})]})}function t(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>r});var l=s(6540);const c={},d=l.createContext(c);function i(e){const n=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),l.createElement(d.Provider,{value:n},e.children)}}}]);