"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1952],{9968:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"\u5f00\u6e90\u63a8\u8350/C++/fmtlog","title":"fmtlog \u4ecb\u7ecd","description":"fmtlog \u662f\u4e00\u4e2a\u57fa\u4e8e fmt \u5e93\u683c\u5f0f\u7684\u9ad8\u6027\u80fd\u5f02\u6b65\u65e5\u5fd7\u5e93\u3002","source":"@site/docs/\u5f00\u6e90\u63a8\u8350/C++/fmtlog.md","sourceDirName":"\u5f00\u6e90\u63a8\u8350/C++","slug":"/\u5f00\u6e90\u63a8\u8350/C++/fmtlog","permalink":"/docs/\u5f00\u6e90\u63a8\u8350/C++/fmtlog","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u5f00\u6e90\u63a8\u8350/C++/fmtlog.md","tags":[],"version":"current","frontMatter":{},"sidebar":"opensource_recommendation","previous":{"title":"Breep\uff0c\u4e00\u4e2a\u5f3a\u5927\u7684c++\u5e93","permalink":"/docs/\u5f00\u6e90\u63a8\u8350/C++/breep"},"next":{"title":"HPX\uff0c\u4e00\u4e2a\u4e13\u6ce8\u4e8e\u63d0\u4f9b\u9ad8\u6027\u80fd\u7684\u5e76\u884c\u8ba1\u7b97C++\u5e93","permalink":"/docs/\u5f00\u6e90\u63a8\u8350/C++/hpx"}}');var s=n(4848),r=n(8453);const d={},i="fmtlog \u4ecb\u7ecd",c={},o=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4ec5\u5934\u6587\u4ef6\u7248\u672c",id:"\u4ec5\u5934\u6587\u4ef6\u7248\u672c",level:4},{value:"\u4f7f\u7528 CMake \u6784\u5efa\u7684\u9759\u6001/\u5171\u4eab\u5e93\u7248\u672c",id:"\u4f7f\u7528-cmake-\u6784\u5efa\u7684\u9759\u6001\u5171\u4eab\u5e93\u7248\u672c",level:4},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u683c\u5f0f\u5316",id:"\u683c\u5f0f\u5316",level:2},{value:"\u8f93\u51fa",id:"\u8f93\u51fa",level:2},{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2}];function h(e){const l={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.header,{children:(0,s.jsx)(l.h1,{id:"fmtlog-\u4ecb\u7ecd",children:"fmtlog \u4ecb\u7ecd"})}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"fmtlog"})," \u662f\u4e00\u4e2a\u57fa\u4e8e ",(0,s.jsx)(l.a,{href:"https://github.com/fmtlib/fmt",children:"fmt"})," \u5e93\u683c\u5f0f\u7684\u9ad8\u6027\u80fd\u5f02\u6b65\u65e5\u5fd7\u5e93\u3002"]}),"\n",(0,s.jsx)(l.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u901f\u5ea6\u66f4\u5feb - \u8fd0\u884c\u65f6\u5ef6\u8fdf\u4f4e\u4e8e ",(0,s.jsx)(l.a,{href:"https://github.com/PlatformLab/NanoLog",children:"NanoLog"}),"\uff0c\u541e\u5410\u91cf\u9ad8\u4e8e ",(0,s.jsx)(l.a,{href:"https://github.com/gabime/spdlog",children:"spdlog"})]}),"\n",(0,s.jsx)(l.li,{children:"\u53ea\u542b\u5934\u6587\u4ef6\u6216\u53ef\u7f16\u8bd1\u7684\u5e93\u6587\u4ef6\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u57fa\u4e8e\u4f18\u79c0\u7684 fmt \u5e93\u7684\u4e30\u5bcc\u7279\u6027\u683c\u5f0f\u5316\u3002"}),"\n",(0,s.jsxs)(l.li,{children:["\u5f02\u6b65\u591a\u7ebf\u7a0b\u65e5\u5fd7\u8bb0\u5f55 ",(0,s.jsx)(l.strong,{children:"\u6309\u65f6\u95f4\u987a\u5e8f"}),"\uff0c\u4e5f\u53ef\u4ee5\u5728\u5355\u7ebf\u7a0b\u4e2d\u540c\u6b65\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(l.li,{children:"\u81ea\u5b9a\u4e49\u683c\u5f0f\u5316\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u81ea\u5b9a\u4e49\u5904\u7406 - \u7528\u6237\u53ef\u4ee5\u8bbe\u7f6e\u56de\u8c03\u51fd\u6570\u6765\u5904\u7406\u65e5\u5fd7\u6d88\u606f\uff0c\u9664\u4e86\u5199\u5165\u6587\u4ef6\u4e4b\u5916\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u65e5\u5fd7\u8fc7\u6ee4 - \u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u548c\u7f16\u8bd1\u65f6\u4fee\u6539\u65e5\u5fd7\u7ea7\u522b\u3002"}),"\n",(0,s.jsx)(l.li,{children:"\u65e5\u5fd7\u9891\u7387\u9650\u5236 - \u53ef\u4ee5\u4e3a\u7279\u5b9a\u65e5\u5fd7\u8bbe\u7f6e\u6700\u5c0f\u65e5\u5fd7\u95f4\u9694\u3002"}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"\u652f\u6301\u7684\u5e73\u53f0",children:"\u652f\u6301\u7684\u5e73\u53f0"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"Linux\uff08\u5df2\u5728 GCC 10.2 \u4e0a\u6d4b\u8bd5\uff09"}),"\n",(0,s.jsx)(l.li,{children:"Windows\uff08\u5df2\u5728 MSVC 2019 \u4e0a\u6d4b\u8bd5\uff09"}),"\n"]}),"\n",(0,s.jsx)(l.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsxs)(l.p,{children:["\u9700\u8981 C++17\uff0c",(0,s.jsx)(l.code,{children:"fmtlog"})," \u4f9d\u8d56\u4e8e ",(0,s.jsx)(l.a,{href:"https://github.com/fmtlib/fmt",children:"fmtlib"}),"\uff0c\u5982\u679c\u60a8\u5c1a\u672a\u5b89\u88c5 fmtlib\uff0c\u5219\u9700\u8981\u5148\u884c\u5b89\u88c5\u3002"]}),"\n",(0,s.jsx)(l.h4,{id:"\u4ec5\u5934\u6587\u4ef6\u7248\u672c",children:"\u4ec5\u5934\u6587\u4ef6\u7248\u672c"}),"\n",(0,s.jsxs)(l.p,{children:["\u53ea\u9700\u5c06 ",(0,s.jsx)(l.code,{children:"fmtlog.h"})," \u548c ",(0,s.jsx)(l.code,{children:"fmtlog-inl.h"})," \u590d\u5236\u5230\u60a8\u7684\u9879\u76ee\u4e2d\uff0c\u5e76\uff1a"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u5728\u5305\u542b fmtlog.h \u4e4b\u524d\u5b9a\u4e49\u5b8f ",(0,s.jsx)(l.code,{children:"FMTLOG_HEADER_ONLY"}),"\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["\u6216\u8005\u5728\u60a8\u7684\u4e00\u4e2a\u6e90\u6587\u4ef6\u4e2d\u5305\u542b ",(0,s.jsx)(l.code,{children:"fmtlog-inl.h"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(l.h4,{id:"\u4f7f\u7528-cmake-\u6784\u5efa\u7684\u9759\u6001\u5171\u4eab\u5e93\u7248\u672c",children:"\u4f7f\u7528 CMake \u6784\u5efa\u7684\u9759\u6001/\u5171\u4eab\u5e93\u7248\u672c"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-console",children:"$ git clone https://github.com/MengRao/fmtlog.git\r\n$ cd fmtlog\r\n$ git submodule init\r\n$ git submodule update\r\n$ ./build.sh\n"})}),"\n",(0,s.jsxs)(l.p,{children:["\u7136\u540e\u5c06\u751f\u6210\u7684 ",(0,s.jsx)(l.code,{children:".build"})," \u76ee\u5f55\u4e2d\u7684 ",(0,s.jsx)(l.code,{children:"fmtlog.h"})," \u548c ",(0,s.jsx)(l.code,{children:"libfmtlog-static.a"}),"/",(0,s.jsx)(l.code,{children:"libfmtlog-shared.so"})," \u590d\u5236\u51fa\u6765\u3002"]}),"\n",(0,s.jsx)(l.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cpp",children:'#include "fmtlog/fmtlog.h"\r\nint main() \r\n{\r\n  FMTLOG(fmtlog::INF, "The answer is {}.", 42);\r\n}\n'})}),"\n",(0,s.jsxs)(l.p,{children:["\u8fd8\u5b9a\u4e49\u4e86\u5feb\u6377\u5b8f ",(0,s.jsx)(l.code,{children:"logd"}),", ",(0,s.jsx)(l.code,{children:"logi"}),", ",(0,s.jsx)(l.code,{children:"logw"})," \u548c ",(0,s.jsx)(l.code,{children:"loge"})," \u5206\u522b\u7528\u4e8e\u8bb0\u5f55 ",(0,s.jsx)(l.code,{children:"DBG"}),", ",(0,s.jsx)(l.code,{children:"INF"}),", ",(0,s.jsx)(l.code,{children:"WRN"})," \u548c ",(0,s.jsx)(l.code,{children:"ERR"})," \u6d88\u606f\uff1a"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cpp",children:'logi("A info msg");\r\nlogd("This msg will not be logged as the default log level is INF");\r\nfmtlog::setLogLevel(fmtlog::DBG);\r\nlogd("Now debug msg is shown");\n'})}),"\n",(0,s.jsxs)(l.p,{children:["\u6ce8\u610f\uff0cfmtlog \u672c\u8d28\u4e0a\u662f\u5f02\u6b65\u7684\uff0c\u65e5\u5fd7\u6d88\u606f\u5e76\u4e0d\u4f1a\u5728\u65e5\u5fd7\u8bed\u53e5\u4e4b\u540e\u7acb\u5373\u5199\u5165\u6587\u4ef6/\u63a7\u5236\u53f0\uff1a\u5b83\u4eec\u4ec5\u4ec5\u88ab\u63a8\u9001\u5230\u961f\u5217\u4e2d\u3002\u60a8\u9700\u8981\u8c03\u7528 ",(0,s.jsx)(l.code,{children:"fmtlog::poll()"})," \u6765\u6536\u96c6\u65e5\u5fd7\u961f\u5217\u4e2d\u7684\u6570\u636e\uff0c\u683c\u5f0f\u5316\u5e76\u8f93\u51fa\u5b83\u4eec\uff1a"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cpp",children:'fmtlog::setThreadName("aaa");\r\nlogi("Thread name is bbb in this msg");\r\nfmtlog::setThreadName("bbb");\r\nfmtlog::poll();\r\nfmtlog::setThreadName("ccc");\r\nlogi("Thread name is ccc in this msg");\r\nfmtlog::poll();\r\nfmtlog::setThreadName("ddd");\n'})}),"\n",(0,s.jsxs)(l.p,{children:["fmtlog \u652f\u6301\u591a\u7ebf\u7a0b\u65e5\u5fd7\u8bb0\u5f55\uff0c\u4f46\u53ea\u80fd\u6709\u4e00\u4e2a\u7ebf\u7a0b\u8c03\u7528 ",(0,s.jsx)(l.code,{children:"fmtlog::poll()"}),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cfmtlog \u4e0d\u4f1a\u5185\u90e8\u521b\u5efa\u4e00\u4e2a\u8f6e\u8be2\u7ebf\u7a0b\uff0c\u5b83\u8981\u6c42\u7528\u6237\u5b9a\u671f\u8f6e\u8be2\u5b83\u3002\u8fd9\u6837\u505a\u7684\u60f3\u6cd5\u662f\uff0c\u8fd9\u5141\u8bb8\u7528\u6237\u4ee5\u81ea\u5df1\u7684\u65b9\u5f0f\u7ba1\u7406\u7ebf\u7a0b\uff0c\u5e76\u5b8c\u5168\u63a7\u5236\u8f6e\u8be2/\u5237\u65b0\u884c\u4e3a\u3002\u7136\u800c\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmtlog::startPollingThread(interval)"})," \u8ba9 fmtlog \u4e3a\u60a8\u521b\u5efa\u4e00\u4e2a\u540e\u53f0\u8f6e\u8be2\u7ebf\u7a0b\uff0c\u5e76\u8bbe\u7f6e\u8f6e\u8be2\u95f4\u9694\uff0c\u4f46\u5f53\u8be5\u7ebf\u7a0b\u8fd0\u884c\u65f6\u60a8\u5c31\u4e0d\u80fd\u81ea\u5df1\u8c03\u7528 ",(0,s.jsx)(l.code,{children:"fmtlog::poll()"}),"\u3002"]}),"\n",(0,s.jsx)(l.h2,{id:"\u683c\u5f0f\u5316",children:"\u683c\u5f0f\u5316"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"fmtlog \u57fa\u4e8e fmtlib\uff0c\u652f\u6301\u51e0\u4e4e\u6240\u6709 fmtlib \u7279\u6027\uff08\u989c\u8272\u9664\u5916\uff09\uff1a"}),"\n"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cpp",children:'#include "fmt/ranges.h"\r\nusing namespace fmt::literals;\r\n\r\nlogi("I\'d rather be {1} than {0}.", "right", "happy");\r\nlogi("Hello, {name}! The answer is {number}. Goodbye, {name}.", "name"_a = "World", "number"_a = 42);\r\n\r\nstd::vector<int> v = {1, 2, 3};\r\nlogi("ranges: {}", v);\r\n\r\nlogi("std::move can be used for objects with non-trivial destructors: {}", std::move(v));\r\nassert(v.size() == 0);\r\n\r\nstd::tuple<int, char> t = {1, \'a\'};\r\nlogi("tuples: {}", fmt::join(t, ", "));\r\n\r\nenum class color {red, green, blue};\r\ntemplate <> struct fmt::formatter<color>: formatter<string_view> {\r\n  // parse is inherited from formatter<string_view>.\r\n  template <typename FormatContext>\r\n  auto format(color c, FormatContext& ctx) {\r\n    string_view name = "unknown";\r\n    switch (c) {\r\n    case color::red:   name = "red"; break;\r\n    case color::green: name = "green"; break;\r\n    case color::blue:  name = "blue"; break;\r\n    }\r\n    return formatter<string_view>::format(name, ctx);\r\n  }\r\n};\r\nlogi("user defined type: {:>10}", color::blue);\r\nlogi("{:*^30}", "centered");\r\nlogi("int: {0:d};  hex: {0:#x};  oct: {0:#o};  bin: {0:#b}", 42);\r\nlogi("dynamic precision: {:.{}f}", 3.14, 1);\r\n\r\n// This gives a compile-time error because d is an invalid format specifier for a string.\r\n// FMT_STRING() is not needed from C++20 onward\r\nlogi(FMT_STRING("{:d}"), "I am not a number");\n'})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u4f5c\u4e3a\u4e00\u4e2a\u5f02\u6b65\u65e5\u5fd7\u5e93\uff0cfmtlog \u63d0\u4f9b\u4e86\u989d\u5916\u7684\u652f\u6301\uff0c\u7528\u4e8e\u901a\u8fc7\u6307\u9488\u4f20\u9012\u53c2\u6570\uff08\u5bf9\u4e8e fmtlib \u6765\u8bf4\u8fd9\u79cd\u9700\u6c42\u5f88\u5c11\uff0c\u5b83\u53ea\u652f\u6301 void \u548c char \u6307\u9488\uff09\u3002\u7528\u6237\u53ef\u4ee5\u4f20\u9012\u4efb\u4f55\u7c7b\u578b\u7684\u6307\u9488\u4f5c\u4e3a\u53c2\u6570\u4ee5\u907f\u514d\u590d\u5236\u5f00\u9500\uff0c\u5982\u679c\u786e\u4fdd\u4e86\u88ab\u5f15\u7528\u5bf9\u8c61\u7684\u751f\u547d\u5468\u671f\uff08\u5426\u5219\u8f6e\u8be2\u7ebf\u7a0b\u4f1a\u5f15\u7528\u5230\u60ac\u5782\u6307\u9488\uff01\uff09\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u5b57\u7b26\u4e32\u53c2\u6570\uff0cfmtlog \u9ed8\u8ba4\u4f1a\u4e3a\u7c7b\u578b ",(0,s.jsx)(l.code,{children:"std::string"})," \u590d\u5236\u5b57\u7b26\u4e32\u5185\u5bb9\uff0c\u4f46\u5bf9\u7c7b\u578b ",(0,s.jsx)(l.code,{children:"std::string*"})," \u53ea\u590d\u5236\u6307\u9488\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cpp",children:'std::string str = "aaa";\r\nlogi("str: {}, pstr: {}", str, &str);\r\nstr = "bbb";\r\nfmtlog::poll();\r\n// output: str: aaa, pstr: bbb\n'})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u9664\u4e86\u539f\u59cb\u6307\u9488\uff0cfmtlog \u4e5f\u652f\u6301 ",(0,s.jsx)(l.code,{children:"std::shared_ptr"})," \u548c ",(0,s.jsx)(l.code,{children:"std::unique_ptr"}),"\uff0c\u8fd9\u4f7f\u5f97\u5bf9\u8c61\u751f\u547d\u5468\u671f\u7ba1\u7406\u66f4\u52a0\u5bb9\u6613\uff1a"]}),"\n"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cpp",children:'int a = 4;\r\nauto sptr = std::make_shared<int>(5);\r\nauto uptr = std::make_unique<int>(6);\r\nlogi("void ptr: {}, ptr: {}, sptr: {}, uptr: {}", (void*)&a, &a, sptr, std::move(uptr));\r\na = 7;\r\n*sptr = 8;\r\nfmtlog::poll();\r\n// output: void ptr: 0x7ffd08ac53ac, ptr: 7, sptr: 8, uptr: 6\n'})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u65e5\u5fd7\u6807\u9898\u6a21\u5f0f\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmtlog::setHeaderPattern()"})," \u6765\u81ea\u5b9a\u4e49\uff0c\u53c2\u6570\u662f\u5e26\u6709\u547d\u540d\u53c2\u6570\u7684 fmtlib \u683c\u5f0f\u5b57\u7b26\u4e32\u3002\u9ed8\u8ba4\u7684\u6807\u9898\u6a21\u5f0f\u662f ",(0,s.jsx)(l.code,{children:"{HMSf} {s:<16} {l}[{t:<6}]"})," \uff08\u793a\u4f8b\uff1a",(0,s.jsx)(l.code,{children:"15:46:19.149844 log_test.cc:43 INF[448050]"}),"\uff09\u3002\u6807\u9898\u4e2d\u6240\u6709\u652f\u6301\u7684\u547d\u540d\u53c2\u6570\u5982\u4e0b\u8868\u6240\u793a\uff1a"]}),"\n"]}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{style:{textAlign:"left"},children:"\u540d\u79f0"}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u542b\u4e49"}),(0,s.jsx)(l.th,{style:{textAlign:"center"},children:"\u793a\u4f8b"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"l"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u65e5\u5fd7\u7ea7\u522b"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"INF"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"s"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u6587\u4ef6\u57fa\u540d\u548c\u884c\u53f7"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"log_test.cc:48"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"g"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u6587\u4ef6\u8def\u5f84\u548c\u884c\u53f7"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"/home/raomeng/fmtlog/log_test.cc:48"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"t"})}),(0,s.jsxs)(l.td,{style:{textAlign:"center"},children:["\u9ed8\u8ba4\u4e3a\u7ebf\u7a0bid\uff0c\u53ef\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmt::setThreadName()"})," \u91cd\u7f6e"]}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"main"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"a"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u661f\u671f\u51e0"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"Mon"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"b"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u6708\u4efd\u540d"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"May"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"Y"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u5e74\u4efd"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"2021"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"C"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u5e74\u4efd\u7b80\u5199"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"21"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"m"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u6708\u4efd"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"05"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"d"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u65e5"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"03"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"H"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u5c0f\u65f6"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"16"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"M"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u5206\u949f"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"08"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"S"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"09"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"e"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u6beb\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"796"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"f"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u5fae\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"796341"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"F"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u7eb3\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"796341126"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"Ymd"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u5e74-\u6708-\u65e5"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"2021-05-03"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"HMS"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u65f6:\u5206:\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"16:08:09"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"HMSe"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u65f6:\u5206:\u79d2.\u6beb\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"16:08:09.796"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"HMSf"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u65f6:\u5206:\u79d2.\u5fae\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"16:08:09.796341"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"HMSF"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u65f6:\u5206:\u79d2.\u7eb3\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"16:08:09.796341126"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"YmdHMS"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u5e74-\u6708-\u65e5 \u65f6:\u5206:\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"2021-05-03 16:08:09"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"YmdHMSe"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u5e74-\u6708-\u65e5 \u65f6:\u5206:\u79d2.\u6beb\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"2021-05-03 16:08:09.796"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"YmdHMSf"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u5e74-\u6708-\u65e5 \u65f6:\u5206:\u79d2.\u5fae\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"2021-05-03 16:08:09.796341"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{style:{textAlign:"left"},children:(0,s.jsx)(l.code,{children:"YmdHMSF"})}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"\u5e74-\u6708-\u65e5 \u65f6:\u5206:\u79d2.\u7eb3\u79d2"}),(0,s.jsx)(l.td,{style:{textAlign:"center"},children:"2021-05-03 16:08:09.796341126"})]})]})]}),"\n",(0,s.jsxs)(l.p,{children:["\u6ce8\u610f\uff0c\u4f7f\u7528\u8fde\u63a5\u7684\u547d\u540d\u53c2\u6570\u6bd4\u5206\u5f00\u7684\u66f4\u6709\u6548\u7387\uff0c\u4f8b\u5982 ",(0,s.jsx)(l.code,{children:"{YmdHMS}"})," \u6bd4 ",(0,s.jsx)(l.code,{children:"{Y}-{m}-{d} {H}:{M}:{S}"})," \u66f4\u5feb\u3002"]}),"\n",(0,s.jsx)(l.h2,{id:"\u8f93\u51fa",children:"\u8f93\u51fa"}),"\n",(0,s.jsxs)(l.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(l.code,{children:"fmtlog"})," \u7684\u8f93\u51fa\u662f\u6807\u51c6\u8f93\u51fa\uff08stdout\uff09\u3002\u901a\u5e38\uff0c\u7528\u6237\u5e0c\u671b\u5c06\u65e5\u5fd7\u5199\u5165\u6587\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmtlog::setLogFile(filename, truncate)"})," \u5b9e\u73b0\u3002\u4e3a\u4e86\u6027\u80fd\u8003\u8651\uff0c",(0,s.jsx)(l.code,{children:"fmtlog"})," \u5728\u5185\u90e8\u4f1a\u7f13\u51b2\u6570\u636e\uff0c\u5728\u6ee1\u8db3\u7279\u5b9a\u6761\u4ef6\u65f6\u5c06\u7f13\u51b2\u533a\u6570\u636e\u5237\u65b0\u5230\u5e95\u5c42\u6587\u4ef6\u3002\u5237\u65b0\u6761\u4ef6\u5305\u62ec\uff1a"]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u5982\u679c\u5e95\u5c42\u7684 ",(0,s.jsx)(l.code,{children:"FILE*"})," \u4e0d\u662f\u7531 ",(0,s.jsx)(l.code,{children:"fmtlog"})," \u7ba1\u7406\u7684\uff0c\u90a3\u4e48 ",(0,s.jsx)(l.code,{children:"fmtlog"})," \u5c06\u4e0d\u4f1a\u8fdb\u884c\u7f13\u51b2\u3002\u4f8b\u5982\uff0c\u9ed8\u8ba4\u7684\u6807\u51c6\u8f93\u51fa ",(0,s.jsx)(l.code,{children:"FILE*"})," \u5c31\u4e0d\u4f1a\u88ab\u7f13\u51b2\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u73b0\u6709\u7684 ",(0,s.jsx)(l.code,{children:"FILE*"})," \u5e76\u6307\u5b9a\u662f\u5426\u7531 ",(0,s.jsx)(l.code,{children:"fmtlog"})," \u7ba1\u7406\uff0c\u4f8b\u5982 ",(0,s.jsx)(l.code,{children:"fmtlog::setLogFile(stderr, false)"}),"\uff0c\u90a3\u4e48 ",(0,s.jsx)(l.code,{children:"fmtlog"})," \u5c06\u4f1a\u76f4\u63a5\u5199\u5165\u6807\u51c6\u9519\u8bef\uff08stderr\uff09\u800c\u4e0d\u7f13\u51b2\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["\u7f13\u51b2\u533a\u5927\u5c0f\u8d85\u8fc7 8 KB\uff0c\u8fd9\u4e2a\u6570\u5b57\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmtlog::setFlushBufSize(bytes)"})," \u91cd\u7f6e\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["\u7f13\u51b2\u533a\u4e2d\u6700\u65e9\u7684\u6570\u636e\u5df2\u8d85\u8fc7\u6307\u5b9a\u7684\u6301\u7eed\u65f6\u95f4\u3002\u9ed8\u8ba4\u65f6\u95f4\u662f 3 \u79d2\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmtlog::setFlushDelay(ns)"})," \u8bbe\u7f6e\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["\u65b0\u65e5\u5fd7\u81f3\u5c11\u8fbe\u5230\u6307\u5b9a\u7684\u5237\u65b0\u65e5\u5fd7\u7ea7\u522b\u3002\u9ed8\u8ba4\u7684\u5237\u65b0\u65e5\u5fd7\u7ea7\u522b\u662f\u4efb\u4f55\u65e5\u5fd7\u90fd\u8fbe\u4e0d\u5230\u7684\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmtlog::flushOn(logLevel)"})," \u8bbe\u7f6e\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["\u7528\u6237\u53ef\u4ee5\u4e3b\u52a8\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmtlog::poll(true)"})," \u8981\u6c42 ",(0,s.jsx)(l.code,{children:"fmtlog"})," \u5237\u65b0\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(l.p,{children:["\u53e6\u5916\uff0c\u7528\u6237\u53ef\u4ee5\u9009\u62e9\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmtlog::closeLogFile()"})," \u8981\u6c42 ",(0,s.jsx)(l.code,{children:"fmtlog"})," \u5173\u95ed\u65e5\u5fd7\u6587\u4ef6\uff0c\u6b64\u540e\u7684\u65e5\u5fd7\u6d88\u606f\u5c06\u4e0d\u4f1a\u88ab\u8f93\u51fa\u3002"]}),"\n",(0,s.jsxs)(l.p,{children:["\u9664\u4e86\u5199\u5165 ",(0,s.jsx)(l.code,{children:"FILE*"}),"\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmtlog::setLogCB(cb, minCBLogLevel)"})," \u6ce8\u518c\u56de\u8c03\u51fd\u6570\u6765\u5904\u7406\u65e5\u5fd7\u6d88\u606f\u3002\u8fd9\u5728\u9700\u8981\u5b9e\u65f6\u53d1\u5e03\u8b66\u544a/\u9519\u8bef\u6d88\u606f\u4ee5\u4fbf\u8b66\u62a5\u7684\u60c5\u51b5\u4e0b\u975e\u5e38\u6709\u7528\u3002\u65e5\u5fd7\u56de\u8c03\u4e0d\u4f1a\u50cf\u65e5\u5fd7\u6587\u4ef6\u90a3\u6837\u88ab\u7f13\u51b2\uff0c\u5e76\u4e14\u5373\u4f7f\u5728\u6587\u4ef6\u88ab\u5173\u95ed\u540e\u4e5f\u53ef\u4ee5\u89e6\u53d1\u3002 \u56de\u8c03\u51fd\u6570\u7684\u7b7e\u540d\u662f\uff1a"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cpp",children:"// callback signature user can register\r\n// ns: nanosecond timestamp\r\n// level: logLevel\r\n// location: full file path with line num, e.g: /home/raomeng/fmtlog/fmtlog.h:45\r\n// basePos: file base index in the location\r\n// threadName: thread id or the name user set with setThreadName\r\n// msg: full log msg with header\r\n// bodyPos: log body index in the msg\r\n// logFilePos: log file position of this msg\r\ntypedef void (*LogCBFn)(int64_t ns, LogLevel level\r\n                        , fmt::string_view location\r\n                        , size_t basePos\r\n                        , fmt::string_view threadName\r\n                        , fmt::string_view msg\r\n                        , size_t bodyPos\r\n                        , size_t logFilePos);\n"})}),"\n",(0,s.jsx)(l.h2,{id:"\u6027\u80fd",children:"\u6027\u80fd"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u57fa\u51c6\u6d4b\u8bd5\u65e2\u8003\u8651\u4e86\u524d\u7aef\u5ef6\u8fdf\u4e5f\u8003\u8651\u4e86\u541e\u5410\u91cf\uff0c\u5e76\u4e0e Nanolog \u548c spdlog basic_logger_st \u8fdb\u884c\u4e86\u6bd4\u8f83\u3002\u6d4b\u8bd5\u65e5\u5fd7\u6d88\u606f\u4f7f\u7528 ",(0,s.jsx)(l.a,{href:"https://github.com/PlatformLab/NanoLog#Log-Messages-Map",children:"NanoLog \u57fa\u51c6\u6d4b\u8bd5\u65e5\u5fd7\u6d88\u606f\u6620\u5c04"}),'\uff0c\u6807\u9898\u6a21\u5f0f\u4f7f\u7528 spdlog \u9ed8\u8ba4\u6a21\u5f0f\uff08\u4f8b\u5982\uff1a"[2021-05-04 10:36:38.098] [spdlog] [info] [bench.cc:111] "\uff09\uff0c\u8be6\u89c1 ',(0,s.jsx)(l.a,{href:"https://github.com/MengRao/fmtlog/blob/main/bench/bench.cc",children:"bench.cc"})," \u83b7\u53d6\u8be6\u60c5\u3002"]}),"\n",(0,s.jsx)(l.li,{children:'\u5728\u4e00\u53f0\u914d\u5907 "Intel(R) Xeon(R) Gold 6144 CPU @ 3.50GHz" \u7684 Linux \u670d\u52a1\u5668\u4e0a\u7684\u7ed3\u679c\u662f\uff1a'}),"\n"]}),"\n",(0,s.jsxs)(l.table,{children:[(0,s.jsx)(l.thead,{children:(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.th,{children:"Message"}),(0,s.jsx)(l.th,{children:"fmtlog"}),(0,s.jsx)(l.th,{children:"Nanolog"}),(0,s.jsx)(l.th,{children:"spdlog"})]})}),(0,s.jsxs)(l.tbody,{children:[(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"staticString"}),(0,s.jsx)(l.td,{children:"6.4 ns, 7.08 M/s"}),(0,s.jsx)(l.td,{children:"6.5 ns, 33.10 M/s"}),(0,s.jsx)(l.td,{children:"156.4 ns, 6.37 M/s"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"stringConcat"}),(0,s.jsx)(l.td,{children:"6.4 ns, 6.05 M/s"}),(0,s.jsx)(l.td,{children:"7.5 ns, 14.20 M/s"}),(0,s.jsx)(l.td,{children:"209.4 ns, 4.77 M/s"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"singleInteger"}),(0,s.jsx)(l.td,{children:"6.3 ns, 6.22 M/s"}),(0,s.jsx)(l.td,{children:"6.5 ns, 50.29 M/s"}),(0,s.jsx)(l.td,{children:"202.3 ns, 4.94 M/s"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"twoIntegers"}),(0,s.jsx)(l.td,{children:"6.4 ns, 4.87 M/s"}),(0,s.jsx)(l.td,{children:"6.6 ns, 39.25 M/s"}),(0,s.jsx)(l.td,{children:"257.2 ns, 3.89 M/s"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"singleDouble"}),(0,s.jsx)(l.td,{children:"6.2 ns, 5.37 M/s"}),(0,s.jsx)(l.td,{children:"6.5 ns, 39.62 M/s"}),(0,s.jsx)(l.td,{children:"225.0 ns, 4.44 M/s"})]}),(0,s.jsxs)(l.tr,{children:[(0,s.jsx)(l.td,{children:"complexFormat"}),(0,s.jsx)(l.td,{children:"6.4 ns, 2.95 M/s"}),(0,s.jsx)(l.td,{children:"6.7 ns, 24.30 M/s"}),(0,s.jsx)(l.td,{children:"390.9 ns, 2.56 M/s"})]})]})]}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u6ce8\u610f\uff0cNanolog \u7684\u541e\u5410\u91cf\u5728\u6b64\u4e0d\u53ef\u6bd4\uff0c\u56e0\u4e3a\u5b83\u8f93\u51fa\u5230\u4e8c\u8fdb\u5236\u65e5\u5fd7\u6587\u4ef6\u800c\u4e0d\u662f\u4eba\u7c7b\u53ef\u8bfb\u7684\u6587\u672c\u683c\u5f0f\uff0c\u4f8b\u5982\uff0c\u5b83\u4fdd\u5b58\u4e00\u4e2a int64 \u65f6\u95f4\u6233\u800c\u4e0d\u662f\u957f\u683c\u5f0f\u5316\u7684\u65e5\u671f\u65f6\u95f4\u5b57\u7b26\u4e32\u3002"}),"\n",(0,s.jsx)(l.li,{children:"fmtlog \u5982\u4f55\u5b9e\u73b0\u5982\u6b64\u4f4e\u4e14\u7a33\u5b9a\u7684\u5ef6\u8fdf\uff1f\u7075\u611f\u6765\u81ea Nanolog\uff0c\u91c7\u7528\u4e86\u4e24\u4e2a\u5173\u952e\u7684\u4f18\u5316\u6280\u672f\uff1a"}),"\n",(0,s.jsxs)(l.li,{children:["\u4e00\u662f\u4e3a\u6bcf\u4e2a\u8bb0\u5f55\u65e5\u5fd7\u7684\u7ebf\u7a0b\u5206\u914d\u4e00\u4e2a\u5355\u751f\u4ea7\u8005\u5355\u6d88\u8d39\u8005\u961f\u5217\uff0c\u8ba9\u540e\u53f0\u7ebf\u7a0b\u8f6e\u8be2\u6240\u6709\u8fd9\u4e9b\u961f\u5217\u3002\u8fd9\u907f\u514d\u4e86\u7ebf\u7a0b\u7ade\u4e89\uff0c\u6027\u80fd\u5728\u7ebf\u7a0b\u6570\u91cf\u589e\u52a0\u65f6\u4e0d\u4f1a\u6076\u5316\u3002\u7ebf\u7a0b\u961f\u5217\u5728\u8be5\u7ebf\u7a0b\u7b2c\u4e00\u6b21\u8bb0\u5f55\u65e5\u5fd7\u65f6\u81ea\u52a8\u521b\u5efa\uff0c\u56e0\u6b64\u4e0d\u4f7f\u7528 fmtlog \u7684\u7ebf\u7a0b\u4e0d\u4f1a\u521b\u5efa\u961f\u5217\u3002\u7ebf\u7a0b\u961f\u5217\u9ed8\u8ba4\u5927\u5c0f\u4e3a 1 MB\uff08\u53ef\u4ee5\u901a\u8fc7\u5b8f ",(0,s.jsx)(l.code,{children:"FMTLOG_QUEUE_SIZE"})," \u6539\u53d8\uff09\uff0c\u4e3a\u961f\u5217\u5206\u914d\u5185\u5b58\u9700\u8981\u4e00\u70b9\u65f6\u95f4\u3002\u63a8\u8350\u7528\u6237\u5728\u521b\u5efa\u7ebf\u7a0b\u540e\u4e3b\u52a8\u8c03\u7528 ",(0,s.jsx)(l.code,{children:"fmt::preallocate()"})," \u4e00\u6b21\uff0c\u8fd9\u6837\u5373\u4f7f\u662f\u7b2c\u4e00\u6761\u65e5\u5fd7\u4e5f\u53ef\u4ee5\u4fdd\u6301\u4f4e\u5ef6\u8fdf\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["\u5f53\u961f\u5217\u6ee1\u4e86\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,s.jsx)(l.code,{children:"fmtlog"})," \u4f1a\u4e22\u5f03\u989d\u5916\u7684\u65e5\u5fd7\u6d88\u606f\u5e76\u8fd4\u56de\u3002\u6216\u8005\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u5b8f ",(0,s.jsx)(l.code,{children:"FMTLOG_BLOCK=1"})," \u6765\u963b\u585e\u524d\u7aef\u65e5\u5fd7\uff0c\u4ee5\u4fbf\u5728\u961f\u5217\u6ee1\u65f6\u505c\u6b62\u8bb0\u5f55\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u4e22\u5931\u4efb\u4f55\u65e5\u5fd7\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(l.code,{children:"fmtlog::setLogQFullCB(cb, userData)"})," \u6ce8\u518c\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u5f53\u65e5\u5fd7\u961f\u5217\u6ee1\u65f6\u89e6\u53d1\uff0c\u4ece\u800c\u5f97\u77e5\u6d88\u8d39\u8005\uff08\u8f6e\u8be2\u7ebf\u7a0b\uff09\u662f\u5426\u8ddf\u4e0d\u4e0a\u3002\u901a\u5e38\uff0c\u961f\u5217\u6ee1\u5e76\u4e0d\u662f\u4e00\u4e2a\u95ee\u9898\uff0c\u4f46\u662f\u4e0d\u5c0f\u5fc3\u7684\u7528\u6237\u53ef\u80fd\u4f1a\u7559\u4e0b\u5728\u610f\u5916\u9ad8\u9891\u7387\u4e0b\u8c03\u7528\u7684\u65e5\u5fd7\u8bed\u53e5\uff0c\u4f8b\u5982\uff0c\u4e00\u4e2a TCP \u5ba2\u6237\u7aef\u5728\u6ca1\u6709\u8fde\u63a5\u91cd\u8bd5\u5ef6\u8fdf\u7684\u60c5\u51b5\u4e0b\u4e0d\u65ad\u62a5\u544a\u201c\u8fde\u63a5\u62d2\u7edd\u201d\u9519\u8bef\u3002\u4e3a\u4e86\u4f18\u96c5\u5730\u5904\u7406\u8fd9\u4e2a\u95ee\u9898\uff0c",(0,s.jsx)(l.code,{children:"fmtlog"})," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u9650\u5236\u65e5\u5fd7\u9891\u7387\u7684\u5b8f ",(0,s.jsx)(l.code,{children:"FMTLOG_LIMIT"})," \u548c\u56db\u4e2a\u5feb\u6377\u65b9\u5f0f ",(0,s.jsx)(l.code,{children:"logdl"}),"\u3001",(0,s.jsx)(l.code,{children:"logil"}),"\u3001",(0,s.jsx)(l.code,{children:"logwl"})," \u548c ",(0,s.jsx)(l.code,{children:"logel"}),"\uff0c\u7528\u6237\u9700\u8981\u4f20\u9012\u6700\u5c0f\u95f4\u9694\u65f6\u95f4\uff08\u4ee5\u7eb3\u79d2\u4e3a\u5355\u4f4d\uff09\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,s.jsx)(l.pre,{children:(0,s.jsx)(l.code,{className:"language-cpp",children:'logil(1e9, "this log will be displayed at most once per second").\n'})}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:["\u53e6\u4e00\u4e2a\u4f18\u5316\u662f\uff0c\u65e5\u5fd7\u7684\u9759\u6001\u4fe1\u606f\uff08\u5982\u683c\u5f0f\u5b57\u7b26\u4e32\u3001\u65e5\u5fd7\u7ea7\u522b\u548c\u4f4d\u7f6e\uff09\u5728\u7b2c\u4e00\u6b21\u8c03\u7528\u65f6\u4fdd\u5b58\u5728\u4e00\u4e2a\u8868\u4e2d\uff0c",(0,s.jsx)(l.code,{children:"fmtlog"})," \u4ec5\u5c06\u5e26\u6709\u52a8\u6001\u53c2\u6570\u7684\u9759\u6001\u4fe1\u606f\u8868\u6761\u76ee\u7684\u7d22\u5f15\u63a8\u9001\u5230\u961f\u5217\u4e2d\uff0c\u4ece\u800c\u6700\u5c0f\u5316\u6d88\u606f\u5927\u5c0f\u3002\u6b64\u5916\uff0c",(0,s.jsx)(l.code,{children:"fmtlog"})," \u4e3a\u6bcf\u6761\u65e5\u5fd7\u8bed\u53e5\u5b9a\u4e49\u4e86\u4e00\u4e2a\u89e3\u7801\u51fd\u6570\uff0c\u5f53\u65e5\u5fd7\u6d88\u606f\u4ece\u961f\u5217\u4e2d\u5f39\u51fa\u65f6\u5728 ",(0,s.jsx)(l.code,{children:"fmtlog::poll()"})," \u4e2d\u8c03\u7528\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["\u7136\u800c\uff0c\u8fd9\u4e9b\u89e3\u7801\u51fd\u6570\u4f1a\u589e\u52a0\u7a0b\u5e8f\u7684\u5927\u5c0f\uff0c\u6bcf\u4e2a\u51fd\u6570\u5927\u7ea6\u6d88\u8017 50 \u5b57\u8282\u3002\u53e6\u5916\uff0c\u6bcf\u6761\u65e5\u5fd7\u8bed\u53e5\u7684\u9759\u6001\u4fe1\u606f\u6761\u76ee\u4e5f\u4f1a\u5728\u8fd0\u884c\u65f6\u5185\u5b58\u4e2d\u6d88\u8017\u5927\u7ea6 50 \u5b57\u8282\u3002\u5bf9\u4e8e\u90a3\u4e9b\u4e0d\u9891\u7e41\u4e14\u5bf9\u5ef6\u8fdf\u4e0d\u654f\u611f\u7684\u65e5\u5fd7\uff08\u4f8b\u5982\uff0c\u7a0b\u5e8f\u521d\u59cb\u5316\u4fe1\u606f\uff09\uff0c\u8fd9\u79cd\u5185\u5b58\u5f00\u9500\u53ef\u80fd\u4e0d\u503c\u5f97\uff0c\u56e0\u6b64 ",(0,s.jsx)(l.code,{children:"fmtlog"})," \u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u53e6\u4e00\u4e2a\u7981\u7528\u6b64\u4f18\u5316\u7684\u65e5\u5fd7\u5b8f\uff1a",(0,s.jsx)(l.code,{children:"FMTLOG_ONCE"}),"\uff0c\u5f53\u7136\u8fd8\u6709\u5feb\u6377\u65b9\u5f0f\uff1a",(0,s.jsx)(l.code,{children:"logdo"}),"\u3001",(0,s.jsx)(l.code,{children:"logio"}),"\u3001",(0,s.jsx)(l.code,{children:"logwo"})," \u548c ",(0,s.jsx)(l.code,{children:"logeo"}),"\u3002",(0,s.jsx)(l.code,{children:"FMTLOG_ONCE"})," \u4e0d\u4f1a\u521b\u5efa\u9759\u6001\u4fe1\u606f\u8868\u6761\u76ee\uff0c\u4e5f\u4e0d\u4f1a\u6dfb\u52a0\u89e3\u7801\u51fd\u6570\uff1a\u5b83\u5c06\u9759\u6001\u4fe1\u606f\u8fde\u540c\u683c\u5f0f\u5316\u7684\u6d88\u606f\u6b63\u6587\u4e00\u8d77\u63a8\u9001\u5230\u961f\u5217\u4e2d\u3002\u6ce8\u610f\uff0c",(0,s.jsx)(l.code,{children:"FMTLOG_ONCE"})," \u4e0d\u652f\u6301\u901a\u8fc7\u6307\u9488\u4f20\u9012\u53c2\u6570\u3002"]}),"\n",(0,s.jsxs)(l.li,{children:["\u5bf9\u4e8e\u90a3\u4e9b\u66f4\u559c\u6b22\u901a\u8fc7\u5728\u7f16\u8bd1\u65f6\u8fc7\u6ee4\u65e5\u5fd7\u6765\u8fdb\u4e00\u6b65\u4f18\u5316\u5185\u5b58\u4f7f\u7528\u7684\u7528\u6237\uff0c\u53ef\u4ee5\u5e94\u7528\u5b8f ",(0,s.jsx)(l.code,{children:"FMTLOG_ACTIVE_LEVEL"}),"\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3a ",(0,s.jsx)(l.code,{children:"FMTLOG_LEVEL_INF"}),"\uff0c\u8fd9\u610f\u5473\u7740\u8c03\u8bd5\u65e5\u5fd7\u4f1a\u5728\u7f16\u8bd1\u65f6\u88ab\u7b80\u5355\u5730\u4e22\u5f03\u3002\u6ce8\u610f\uff0c",(0,s.jsx)(l.code,{children:"FMTLOG_ACTIVE_LEVEL"})," \u4ec5\u9002\u7528\u4e8e\u65e5\u5fd7\u5feb\u6377\u5b8f\uff0c\u4f8b\u5982 ",(0,s.jsx)(l.code,{children:"logi"}),"\uff0c\u4f46\u4e0d\u9002\u7528\u4e8e ",(0,s.jsx)(l.code,{children:"FMTLOG"}),"\u3002\u7c7b\u4f3c\u5730\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b9a\u4e49\u5b8f ",(0,s.jsx)(l.code,{children:"FMTLOG_NO_CHECK_LEVEL"})," \u6765\u7981\u7528\u8fd0\u884c\u65f6\u65e5\u5fd7\u7ea7\u522b\u8fc7\u6ee4\uff0c\u8fd9\u4f1a\u7a0d\u5fae\u63d0\u9ad8\u6027\u80fd\u5e76\u51cf\u5c11\u4e00\u70b9\u751f\u6210\u7684\u4ee3\u7801\u5927\u5c0f\u3002"]}),"\n"]})]})}function x(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,l,n)=>{n.d(l,{R:()=>d,x:()=>i});var t=n(6540);const s={},r=t.createContext(s);function d(e){const l=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(r.Provider,{value:l},e.children)}}}]);