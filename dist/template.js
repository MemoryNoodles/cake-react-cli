#!/usr/bin/env node
!function(I){var n={};function c(e){if(n[e])return n[e].exports;var g=n[e]={i:e,l:!1,exports:{}};return I[e].call(g.exports,g,g.exports,c),g.l=!0,g.exports}c.m=I,c.c=n,c.d=function(I,n,e){c.o(I,n)||Object.defineProperty(I,n,{configurable:!1,enumerable:!0,get:e})},c.r=function(I){Object.defineProperty(I,"__esModule",{value:!0})},c.n=function(I){var n=I&&I.__esModule?function(){return I.default}:function(){return I};return c.d(n,"a",n),n},c.o=function(I,n){return Object.prototype.hasOwnProperty.call(I,n)},c.p="",c(c.s=214)}({11:function(module,exports){eval('module.exports = require("path");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n')},15:function(module,exports){eval('module.exports = require("fs-extra");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy1leHRyYVwiP2ZhYjciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnMtZXh0cmFcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n')},18:function(module,exports){eval('module.exports = require("chalk");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiPzA3Y2EiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhbGtcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n')},207:function(module,exports){eval('module.exports = require("cli-table3");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xpLXRhYmxlM1wiP2QwZDciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xpLXRhYmxlM1wiKTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///207\n')},208:function(module,exports){eval('module.exports = require("gray-matter");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIj9mOGJjIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///208\n')},209:function(module,exports,__webpack_require__){eval("//webpack打包， 依赖的文件里在依赖其他文件 需要绝对路劲\r\nlet tplJson = __webpack_require__(49);\r\n//let tplJson = require(`../gitTemplate`);\r\nconst matter = __webpack_require__(208);\r\nvar Table = __webpack_require__(207); \r\n\r\nmodule.exports = function(){\r\n    console.log(matter(JSON.stringify(tplJson)));\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmluL3RlbXBsYXRlL2NvbW1hbmRzL2xpc3QuanM/Y2I2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3dlYnBhY2vmiZPljIXvvIwg5L6d6LWW55qE5paH5Lu26YeM5Zyo5L6d6LWW5YW25LuW5paH5Lu2IOmcgOimgee7neWvuei3r+WKslxyXG5sZXQgdHBsSnNvbiA9IHJlcXVpcmUoYCR7X19kaXJuYW1lfVxcXFwuLlxcXFxnaXRUZW1wbGF0ZS5qc29uYCk7XHJcbi8vbGV0IHRwbEpzb24gPSByZXF1aXJlKGAuLi9naXRUZW1wbGF0ZWApO1xyXG5jb25zdCBtYXR0ZXIgPSByZXF1aXJlKCdncmF5LW1hdHRlcicpO1xyXG52YXIgVGFibGUgPSByZXF1aXJlKCdjbGktdGFibGUzJyk7IFxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc29sZS5sb2cobWF0dGVyKEpTT04uc3RyaW5naWZ5KHRwbEpzb24pKSk7XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///209\n")},210:function(module,exports,__webpack_require__){eval("/* WEBPACK VAR INJECTION */(function(__dirname) {const { prompt } = __webpack_require__(33)                  //一款命令行的交互框架\r\nconst { writeFile } = __webpack_require__(15)   \r\nconst path = __webpack_require__(11);\r\n\r\n//模板列表 webpack打包需要绝对路劲\r\nlet tplJson = __webpack_require__(49)     \r\n//let tplJson = require(`../gitTemplate.json`)     //模板列表\r\n\r\nconst question = [ \r\n    {\r\n        type: 'input',\r\n        name: 'name',\r\n        message: 'template name',\r\n        validate (val) {\r\n            if (tplJson[val]) {\r\n                return 'template is existed!'\r\n            } else if (val === '') {\r\n                return 'template name is required!'\r\n            } else {\r\n                return true\r\n            }\r\n        }\r\n    },\r\n    {\r\n        type: 'input',\r\n        name: 'userName',\r\n        message: 'git username',\r\n        validate (val) {\r\n            if (val !== '') {\r\n                return true\r\n            }\r\n            return 'git username is required!'\r\n        }\r\n    },\r\n    {\r\n        type: 'input',\r\n        name: 'repository',\r\n        message: 'git repository name',\r\n        validate (val) {\r\n            if (val !== '') {\r\n                return true\r\n            }\r\n            return 'git repository name  is required!'\r\n        }\r\n    }\r\n];\r\n\r\nmodule.exports = ()=>{\r\n    prompt(question).then(({ name, userName, repository }) => {\r\n        tplJson[name] = `${userName}/${repository}`\r\n\r\n        writeFile(`${__dirname}\\\\..\\\\gitTemplate.json`, JSON.stringify(tplJson), 'utf-8', (err) => {\r\n            if (err) {\r\n                console.log(`${err} 模板写入文件出错！`);\r\n            }\r\n            console.log('New template has been added successfully!')\r\n        })\r\n    })\r\n}\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"bin\\\\template\\\\commands\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmluL3RlbXBsYXRlL2NvbW1hbmRzL2FkZC5qcz9jNWMxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgcHJvbXB0IH0gPSByZXF1aXJlKCdpbnF1aXJlcicpICAgICAgICAgICAgICAgICAgLy/kuIDmrL7lkb3ku6TooYznmoTkuqTkupLmoYbmnrZcclxuY29uc3QgeyB3cml0ZUZpbGUgfSA9IHJlcXVpcmUoJ2ZzLWV4dHJhJykgICBcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5cclxuLy/mqKHmnb/liJfooaggd2VicGFja+aJk+WMhemcgOimgee7neWvuei3r+WKslxyXG5sZXQgdHBsSnNvbiA9IHJlcXVpcmUoYCR7X19kaXJuYW1lfVxcXFwuLlxcXFxnaXRUZW1wbGF0ZS5qc29uYCkgICAgIFxyXG4vL2xldCB0cGxKc29uID0gcmVxdWlyZShgLi4vZ2l0VGVtcGxhdGUuanNvbmApICAgICAvL+aooeadv+WIl+ihqFxyXG5cclxuY29uc3QgcXVlc3Rpb24gPSBbIFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXHJcbiAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICd0ZW1wbGF0ZSBuYW1lJyxcclxuICAgICAgICB2YWxpZGF0ZSAodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh0cGxKc29uW3ZhbF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndGVtcGxhdGUgaXMgZXhpc3RlZCEnXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICd0ZW1wbGF0ZSBuYW1lIGlzIHJlcXVpcmVkISdcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXHJcbiAgICAgICAgbmFtZTogJ3VzZXJOYW1lJyxcclxuICAgICAgICBtZXNzYWdlOiAnZ2l0IHVzZXJuYW1lJyxcclxuICAgICAgICB2YWxpZGF0ZSAodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnZ2l0IHVzZXJuYW1lIGlzIHJlcXVpcmVkISdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6ICdpbnB1dCcsXHJcbiAgICAgICAgbmFtZTogJ3JlcG9zaXRvcnknLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdnaXQgcmVwb3NpdG9yeSBuYW1lJyxcclxuICAgICAgICB2YWxpZGF0ZSAodmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAnZ2l0IHJlcG9zaXRvcnkgbmFtZSAgaXMgcmVxdWlyZWQhJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCk9PntcclxuICAgIHByb21wdChxdWVzdGlvbikudGhlbigoeyBuYW1lLCB1c2VyTmFtZSwgcmVwb3NpdG9yeSB9KSA9PiB7XHJcbiAgICAgICAgdHBsSnNvbltuYW1lXSA9IGAke3VzZXJOYW1lfS8ke3JlcG9zaXRvcnl9YFxyXG5cclxuICAgICAgICB3cml0ZUZpbGUoYCR7X19kaXJuYW1lfVxcXFwuLlxcXFxnaXRUZW1wbGF0ZS5qc29uYCwgSlNPTi5zdHJpbmdpZnkodHBsSnNvbiksICd1dGYtOCcsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7ZXJyfSDmqKHmnb/lhpnlhaXmlofku7blh7rplJnvvIFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTmV3IHRlbXBsYXRlIGhhcyBiZWVuIGFkZGVkIHN1Y2Nlc3NmdWxseSEnKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///210\n")},211:function(module,exports){eval('module.exports = require("ora");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjExLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwib3JhXCI/ZWU1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvcmFcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///211\n')},212:function(module,exports){eval('module.exports = require("github-download-parts");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ2l0aHViLWRvd25sb2FkLXBhcnRzXCI/ZDU3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnaXRodWItZG93bmxvYWQtcGFydHNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///212\n')},213:function(module,exports,__webpack_require__){eval("const { prompt } = __webpack_require__(33)\r\nconst { ensureDirSync } = __webpack_require__(15)  \r\n\r\nconst chalk = __webpack_require__(18)\r\nconst repo = __webpack_require__(212);\r\nconst ora = __webpack_require__(211)\r\n\r\n\r\n//let tplJson = require(`../gitTemplate.json`)     //模板列表\r\nlet tplJson = __webpack_require__(49) \r\n\r\nconst question = [\r\n    {\r\n        type: 'input',\r\n        name: 'name',\r\n        message: 'Template name:',\r\n        validate (val) {\r\n            if (tplJson[val]) {\r\n                return true\r\n            } else if (val === '') {\r\n                return 'Name is required!'\r\n            } else if (!tplJson[val]) {\r\n                return 'This template doesn\\'t exists.'\r\n            }\r\n        }\r\n    },\r\n    {\r\n        type: 'input',\r\n        name: 'catalog',\r\n        message: 'catalog name:',\r\n        validate (val) {\r\n            //存在这个文件则返回null, 不存在直接创建文件夹\r\n            if (val === \"\") {\r\n                return true\r\n            } else if  (!ensureDirSync(val)) {\r\n                return 'This catalog  exists.'\r\n            } else {\r\n                return true\r\n            }\r\n        }\r\n    },\r\n    {\r\n        type: 'input',\r\n        name: 'filename',\r\n        message: 'file name:',\r\n    }\r\n]\r\n\r\nmodule.exports = () =>{\r\n    prompt(question).then(({ name, catalog, filename }) => {\r\n        const spinner = ora('Downloading template...');\r\n        spinner.start()\r\n        if (filename) {\r\n            repo(tplJson[name], catalog, filename)\r\n            .then(() => {\r\n                console.log(chalk.green('download success'));\r\n                spinner.stop()\r\n                process.exit(1);\r\n            })\r\n            .catch(() => {\r\n                console.log(chalk.red('download error'));\r\n                spinner.stop()\r\n                 process.exit(1);\r\n            });\r\n        }\r\n        else {\r\n            repo(tplJson[name], catalog)\r\n            .then(() => {\r\n                console.log(chalk.green('download success'));\r\n                spinner.stop()\r\n                process.exit(1);\r\n            })\r\n            .catch(() => {\r\n                console.log(chalk.red('download error'));\r\n                 spinner.stop()\r\n                 process.exit(1);\r\n            });\r\n        }\r\n    \r\n    })\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmluL3RlbXBsYXRlL2NvbW1hbmRzL2Rvd24uanM/NTg5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHByb21wdCB9ID0gcmVxdWlyZSgnaW5xdWlyZXInKVxyXG5jb25zdCB7IGVuc3VyZURpclN5bmMgfSA9IHJlcXVpcmUoJ2ZzLWV4dHJhJykgIFxyXG5cclxuY29uc3QgY2hhbGsgPSByZXF1aXJlKCdjaGFsaycpXHJcbmNvbnN0IHJlcG8gPSByZXF1aXJlKCdnaXRodWItZG93bmxvYWQtcGFydHMnKTtcclxuY29uc3Qgb3JhID0gcmVxdWlyZSgnb3JhJylcclxuXHJcblxyXG4vL2xldCB0cGxKc29uID0gcmVxdWlyZShgLi4vZ2l0VGVtcGxhdGUuanNvbmApICAgICAvL+aooeadv+WIl+ihqFxyXG5sZXQgdHBsSnNvbiA9IHJlcXVpcmUoYCR7X19kaXJuYW1lfVxcXFwuLlxcXFxnaXRUZW1wbGF0ZS5qc29uYCkgXHJcblxyXG5jb25zdCBxdWVzdGlvbiA9IFtcclxuICAgIHtcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIG5hbWU6ICduYW1lJyxcclxuICAgICAgICBtZXNzYWdlOiAnVGVtcGxhdGUgbmFtZTonLFxyXG4gICAgICAgIHZhbGlkYXRlICh2YWwpIHtcclxuICAgICAgICAgICAgaWYgKHRwbEpzb25bdmFsXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWwgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ05hbWUgaXMgcmVxdWlyZWQhJ1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0cGxKc29uW3ZhbF0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnVGhpcyB0ZW1wbGF0ZSBkb2VzblxcJ3QgZXhpc3RzLidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogJ2lucHV0JyxcclxuICAgICAgICBuYW1lOiAnY2F0YWxvZycsXHJcbiAgICAgICAgbWVzc2FnZTogJ2NhdGFsb2cgbmFtZTonLFxyXG4gICAgICAgIHZhbGlkYXRlICh2YWwpIHtcclxuICAgICAgICAgICAgLy/lrZjlnKjov5nkuKrmlofku7bliJnov5Tlm55udWxsLCDkuI3lrZjlnKjnm7TmjqXliJvlu7rmlofku7blpLlcclxuICAgICAgICAgICAgaWYgKHZhbCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICAgICAgfSBlbHNlIGlmICAoIWVuc3VyZURpclN5bmModmFsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdUaGlzIGNhdGFsb2cgIGV4aXN0cy4nXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiAnaW5wdXQnLFxyXG4gICAgICAgIG5hbWU6ICdmaWxlbmFtZScsXHJcbiAgICAgICAgbWVzc2FnZTogJ2ZpbGUgbmFtZTonLFxyXG4gICAgfVxyXG5dXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+e1xyXG4gICAgcHJvbXB0KHF1ZXN0aW9uKS50aGVuKCh7IG5hbWUsIGNhdGFsb2csIGZpbGVuYW1lIH0pID0+IHtcclxuICAgICAgICBjb25zdCBzcGlubmVyID0gb3JhKCdEb3dubG9hZGluZyB0ZW1wbGF0ZS4uLicpO1xyXG4gICAgICAgIHNwaW5uZXIuc3RhcnQoKVxyXG4gICAgICAgIGlmIChmaWxlbmFtZSkge1xyXG4gICAgICAgICAgICByZXBvKHRwbEpzb25bbmFtZV0sIGNhdGFsb2csIGZpbGVuYW1lKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5ncmVlbignZG93bmxvYWQgc3VjY2VzcycpKTtcclxuICAgICAgICAgICAgICAgIHNwaW5uZXIuc3RvcCgpXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWQoJ2Rvd25sb2FkIGVycm9yJykpO1xyXG4gICAgICAgICAgICAgICAgc3Bpbm5lci5zdG9wKClcclxuICAgICAgICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVwbyh0cGxKc29uW25hbWVdLCBjYXRhbG9nKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5ncmVlbignZG93bmxvYWQgc3VjY2VzcycpKTtcclxuICAgICAgICAgICAgICAgIHNwaW5uZXIuc3RvcCgpXHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFsay5yZWQoJ2Rvd25sb2FkIGVycm9yJykpO1xyXG4gICAgICAgICAgICAgICAgIHNwaW5uZXIuc3RvcCgpXHJcbiAgICAgICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgIH0pXHJcbn1cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///213\n")},214:function(module,exports,__webpack_require__){eval("//#!/usr/bin/env node\n //上面一句话不要随便修改 作用：帮助脚本找到node的脚本解释器，没他不行。\nconst program = __webpack_require__(50);\nconst {\n    resolve\n} = __webpack_require__(11);\n\n\n//const ora = require('ora');\n//要先加载，不能后加载\n//const res = command => resolve(__dirname, './commands/', command);\n\nconst down = __webpack_require__(213);\nconst add = __webpack_require__(210);\nconst list = __webpack_require__(209);\n\n\n\nprogram\n    .command('add')\n    .description('Add a new template')\n    .alias('a')\n    .action(() => {\n        add()\n        //require(res('add'))\n    })\n\nprogram\n    .command('list')\n    .description('List all the templates')\n    .alias('l')\n    .action(() => {\n         list()\n        //require(res('list'))\n    })\n\nprogram\n    .command('down')\n    .description('down a new template')\n    .alias('d')\n    .action(() => {\n        down()\n    })\n\n\n\n//解析\nprogram.parse(process.argv)\n\n//帮助命令提示\nif (!program.args.length) {\n    program.help()\n}\n\n\n\n//createApp(root)\n//\n//function createApp(root) {\n//\n//    //存在这个文件则返回null, 不存在直接创建文件夹\n//    if (!fs.ensureDirSync(root)) {\n//        console.log(\n//            'Either try using a new directory name。'\n//        );\n//        console.log();\n//        console.log(`The directory ${chalk.green(root)} contains files that could conflict`)\n//        process.exit(1);\n//    }\n//\n//    console.log(`Creating a new React app in ${chalk.green(root)}.`);\n//\n//\n//    goDownFile(dfJson[gitAddress], root, afile);\n//}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjE0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYmluL3RlbXBsYXRlL2luZGV4LmpzPzU3MjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8jIS91c3IvYmluL2VudiBub2RlXG4gLy/kuIrpnaLkuIDlj6Xor53kuI3opoHpmo/kvr/kv67mlLkg5L2c55So77ya5biu5Yqp6ISa5pys5om+5Yiwbm9kZeeahOiEmuacrOino+mHiuWZqO+8jOayoeS7luS4jeihjOOAglxuY29uc3QgcHJvZ3JhbSA9IHJlcXVpcmUoJ2NvbW1hbmRlcicpO1xuY29uc3Qge1xuICAgIHJlc29sdmVcbn0gPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vL2NvbnN0IG9yYSA9IHJlcXVpcmUoJ29yYScpO1xuLy/opoHlhYjliqDovb3vvIzkuI3og73lkI7liqDovb1cbi8vY29uc3QgcmVzID0gY29tbWFuZCA9PiByZXNvbHZlKF9fZGlybmFtZSwgJy4vY29tbWFuZHMvJywgY29tbWFuZCk7XG5cbmNvbnN0IGRvd24gPSByZXF1aXJlKFwiLi9jb21tYW5kcy9kb3duXCIpO1xuY29uc3QgYWRkID0gcmVxdWlyZShcIi4vY29tbWFuZHMvYWRkXCIpO1xuY29uc3QgbGlzdCA9IHJlcXVpcmUoXCIuL2NvbW1hbmRzL2xpc3RcIik7XG5cblxuXG5wcm9ncmFtXG4gICAgLmNvbW1hbmQoJ2FkZCcpXG4gICAgLmRlc2NyaXB0aW9uKCdBZGQgYSBuZXcgdGVtcGxhdGUnKVxuICAgIC5hbGlhcygnYScpXG4gICAgLmFjdGlvbigoKSA9PiB7XG4gICAgICAgIGFkZCgpXG4gICAgICAgIC8vcmVxdWlyZShyZXMoJ2FkZCcpKVxuICAgIH0pXG5cbnByb2dyYW1cbiAgICAuY29tbWFuZCgnbGlzdCcpXG4gICAgLmRlc2NyaXB0aW9uKCdMaXN0IGFsbCB0aGUgdGVtcGxhdGVzJylcbiAgICAuYWxpYXMoJ2wnKVxuICAgIC5hY3Rpb24oKCkgPT4ge1xuICAgICAgICAgbGlzdCgpXG4gICAgICAgIC8vcmVxdWlyZShyZXMoJ2xpc3QnKSlcbiAgICB9KVxuXG5wcm9ncmFtXG4gICAgLmNvbW1hbmQoJ2Rvd24nKVxuICAgIC5kZXNjcmlwdGlvbignZG93biBhIG5ldyB0ZW1wbGF0ZScpXG4gICAgLmFsaWFzKCdkJylcbiAgICAuYWN0aW9uKCgpID0+IHtcbiAgICAgICAgZG93bigpXG4gICAgfSlcblxuXG5cbi8v6Kej5p6QXG5wcm9ncmFtLnBhcnNlKHByb2Nlc3MuYXJndilcblxuLy/luK7liqnlkb3ku6Tmj5DnpLpcbmlmICghcHJvZ3JhbS5hcmdzLmxlbmd0aCkge1xuICAgIHByb2dyYW0uaGVscCgpXG59XG5cblxuXG4vL2NyZWF0ZUFwcChyb290KVxuLy9cbi8vZnVuY3Rpb24gY3JlYXRlQXBwKHJvb3QpIHtcbi8vXG4vLyAgICAvL+WtmOWcqOi/meS4quaWh+S7tuWImei/lOWbnm51bGwsIOS4jeWtmOWcqOebtOaOpeWIm+W7uuaWh+S7tuWkuVxuLy8gICAgaWYgKCFmcy5lbnN1cmVEaXJTeW5jKHJvb3QpKSB7XG4vLyAgICAgICAgY29uc29sZS5sb2coXG4vLyAgICAgICAgICAgICdFaXRoZXIgdHJ5IHVzaW5nIGEgbmV3IGRpcmVjdG9yeSBuYW1l44CCJ1xuLy8gICAgICAgICk7XG4vLyAgICAgICAgY29uc29sZS5sb2coKTtcbi8vICAgICAgICBjb25zb2xlLmxvZyhgVGhlIGRpcmVjdG9yeSAke2NoYWxrLmdyZWVuKHJvb3QpfSBjb250YWlucyBmaWxlcyB0aGF0IGNvdWxkIGNvbmZsaWN0YClcbi8vICAgICAgICBwcm9jZXNzLmV4aXQoMSk7XG4vLyAgICB9XG4vL1xuLy8gICAgY29uc29sZS5sb2coYENyZWF0aW5nIGEgbmV3IFJlYWN0IGFwcCBpbiAke2NoYWxrLmdyZWVuKHJvb3QpfS5gKTtcbi8vXG4vL1xuLy8gICAgZ29Eb3duRmlsZShkZkpzb25bZ2l0QWRkcmVzc10sIHJvb3QsIGFmaWxlKTtcbi8vfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///214\n")},33:function(module,exports){eval('module.exports = require("inquirer");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnF1aXJlclwiPzc1MjAiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW5xdWlyZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///33\n')},49:function(module){eval('module.exports = {"react-base":"MemoryNoodles/react-base","login-template":"MemoryNoodles/login-template","system-template":"MemoryNoodles/system-template","page-template":"MemoryNoodles/page-template"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///49\n')},50:function(module,exports){eval('module.exports = require("commander");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21tYW5kZXJcIj84MTIwIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbW1hbmRlclwiKTsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///50\n')}});