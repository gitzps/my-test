module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    /**
     * module eslint rules
     * author: 曾品斯
     * date： 2021-04-17
     * desc: eslint rules 说明
     * params: "off" or 0 - 关闭规则
     *        "warn" or 1 - 将规则视为一个警告（不会影响退出码）
     *        "error" or 2 - 将规则视为一个错误 (退出码为1)
     * example: .....
     */
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: ['off', 3],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['off', 'always'],
    'comma-dangle': ['error', 'always'],
    'no-cond-assign': ['error', 'always'],
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'prefer-const': 'off',
    'no-construct': 'off',
    'padding-line-between-statements': 0,
    'linebreak-style': 0,
    'no-unused-vars': 0,
    'lines-between-class-members': 0,
    'ban-types': 'off'

    // eslint规则说明
    // eqeqeq: 0, // 不要求使用 === 和 !==
    // camelcase: 1, // 不强制使用骆驼拼写法命名约定
    // indent: 1, // 不强制使用一致的缩进
    // 'no-control-regex': 0, // 禁止在正则表达式中使用控制字符
    // 'no-useless-escape': 0, // 不禁用不必要的转义字符
    // 'sort-keys': 0, // 不要求对象属性按序排列
    // 'eol-last': 0, // 不要求或不禁止文件末尾存在空行
    // 'line-comment-position': 0, // 强制行注释的位置
    // 'no-inline-comments': 0, // 禁止在代码后使用内联注释
    // 'no-multiple-empty-lines': 0, // 不禁止出现多行空行
    // 'no-tabs': 0, // 不禁用 tab
    // 'object-curly-spacing': 0, // 不强制在大括号中使用一致的空格
    // 'max-lines': 0, // 不强制最大行数
    // 'max-len': 0, // 不强制一行的最大长度
    // 'linebreak-style': 0, // 不强制使用一致的换行风格
    // 'comma-dangle': 0, // 要求或禁止末尾逗号
    // 'no-mixed-spaces-and-tabs': 0, // 禁止空格和 tab 的混合缩进
    // 'capitalized-comments': 0, // 不强制或禁止对注释的第一个字母大写
    // 'no-trailing-spaces': 0, // 不禁用行尾空格
    // // love
    // 'space-before-function-paren': 2, // 强制在 function 的左括号之前使用一致的空格
    // 'spaced-comment': 2, // 强制在注释中 // 或 /* 使用一致的空格
    // // vue相关
    // 'vue/html-self-closing': 0,
    // 'vue/attribute-hyphenation': 0,
    // 'vue/order-in-components': 0,
    // 'vue/max-attributes-per-line': 0,
    // 'vue/mustache-interpolation-spacing': 0, // 大括号两边加空格
    // 'vue/attributes-order': 0, // Class方法等顺序问题
    // 'vue/singleline-html-element-content-newline': 0,
    // 'vue/multiline-html-element-content-newline': 0,
    // 'vue/html-indent': 0,
    // 'vue/no-v-html': 0,
    // 'vue/html-closing-bracket-newline': 0,
    // // 与 JavaScript 代码中可能的错误或逻辑错误有关
    // 'for-direction': 2, // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    // 'getter-return': 2, // 强制 getter 函数中出现 return 语句
    // 'no-async-promise-executor': 2, // 禁止使用异步函数作为 Promise executor
    // 'no-await-in-loop': 2, // 禁止在循环中出现 await
    // 'no-compare-neg-zero': 2, // 禁止与 -0 进行比较
    // 'no-cond-assign': 2, // 禁止条件表达式中出现赋值操作符
    // 'no-constant-condition': 2, // 禁止在条件中使用常量表达式
    // 'no-debugger': 2, // 是否禁用 debugger
    // 'no-dupe-args': 2, // 禁止 function 定义中出现重名参数
    // 'no-dupe-keys': 2, // 禁止对象字面量中出现重复的 key
    // 'no-duplicate-case': 2, // 禁止出现重复的 case 标签
    // 'no-empty': 2, // 禁止出现空语句块
    // 'no-empty-character-class': 2, // 禁止在正则表达式中使用空字符集
    // 'no-ex-assign': 2, // 禁止对 catch 子句的参数重新赋值
    // 'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
    // 'no-extra-parens': 2, // 禁止不必要的括号
    // 'no-extra-semi': 'off', // 禁止不必要的分号
    // 'no-func-assign': 2, // 禁止对 function 声明重新赋值
    // 'no-inner-declarations': 2, // 禁止在嵌套的块中出现变量声明或 function 声明
    // 'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    // 'no-irregular-whitespace': 2, // 禁止不规则的空白
    // 'no-misleading-character-class': 2, // 不允许在字符类语法中出现由多个代码点组成的字符
    // 'no-obj-calls': 2, // 禁止把全局对象作为函数调用
    // 'no-prototype-builtins': 2, // 禁止直接调用 Object.prototypes 的内置属性
    // 'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
    // 'no-sparse-arrays': 2, // 禁用稀疏数组
    // 'no-template-curly-in-string': 2, // 禁止在常规字符串中出现模板字面量占位符语法
    // 'no-unexpected-multiline': 2, // 禁止出现令人困惑的多行表达式
    // 'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    // 'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
    // 'no-unsafe-negation': 2, // 禁止对关系运算符的左操作数使用否定操作符
    // 'require-atomic-updates': 2, // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    // 'use-isnan': 2, // 要求使用 isNaN() 检查 NaN
    // 'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
    // // 这些规则是关于最佳实践的，帮助你避免一些问题
    // 'accessor-pairs': 2, // 强制 getter 和 setter 在对象中成对出现
    // 'array-callback-return': 2, // 强制数组方法的回调函数中有 return 语句
    // 'block-scoped-var': 2, // 强制把变量的使用限制在其定义的作用域范围内
    // 'class-methods-use-this': 2, // 强制类方法使用 this
    // complexity: 2, // 指定程序中允许的最大环路复杂度
    // 'consistent-return': 2, // 要求 return 语句要么总是指定返回的值，要么不指定
    // curly: 2, // 强制所有控制语句使用一致的括号风格
    // 'default-case': 2, // 要求 switch 语句中有 default 分支
    // 'dot-location': 2, // 强制在点号之前和之后一致的换行
    // 'dot-notation': 2, // 强制尽可能地使用点号
    // 'guard-for-in': 2, // 要求 for-in 循环中有一个 if 语句
    // 'max-classes-per-file': 2, // 强制每个文件中包含的的类的最大数量
    // 'no-alert': 2, // 禁用 alert、confirm 和 prompt
    // 'no-caller': 2, // 禁用 arguments.caller 或 arguments.callee
    // 'no-case-declarations': 2, // 不允许在 case 子句中使用词法声明
    // 'no-div-regex': 2, // 禁止除法操作符显式的出现在正则表达式开始的位置
    // 'no-else-return': 2, // 禁止 if 语句中 return 语句之后有 else 块
    // 'no-empty-function': 2, // 禁止出现空函数
    // 'no-empty-pattern': 2, // 禁止使用空解构模式
    // 'no-eq-null': 2, // 禁止在没有类型检查操作符的情况下与 null 进行比较
    // 'no-eval': 2, // 禁用 eval()
    // 'no-extend-native': 2, // 禁止扩展原生类型
    // 'no-extra-bind': 2, // 禁止不必要的 .bind() 调用
    // 'no-extra-label': 2, // 禁用不必要的标签
    // 'no-fallthrough': 2, // 禁止 case 语句落空
    // 'no-floating-decimal': 2, // 禁止数字字面量中使用前导和末尾小数点
    // 'no-global-assign': 2, // 禁止对原生对象或只读的全局对象进行赋值
    // 'no-implicit-coercion': 2, // 禁止使用短符号进行类型转换
    // 'no-implicit-globals': 2, // 禁止在全局范围内使用变量声明和 function 声明
    // 'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
    // 'no-invalid-this': 2, // 禁止 this 关键字出现在类和类对象之外
    // 'no-iterator': 2, // 禁用 __iterator__ 属性
    // 'no-labels': 2, // 禁用标签语句
    // 'no-lone-blocks': 2, // 禁用不必要的嵌套块
    // 'no-loop-func': 2, // 禁止在循环语句中出现包含不安全引用的函数声明
    // 'no-magic-numbers': 2, // 禁用魔术数字
    // 'no-multi-spaces': 2, // 禁止使用多个空格
    // 'no-multi-str': 2, // 禁止使用多行字符串
    // 'no-new': 2, // 禁止使用 new 以避免产生副作用
    // 'no-new-func': 2, // 禁止对 Function 对象使用 new 操作符
    // 'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    // 'no-octal': 2, // 禁用八进制字面量
    // 'no-octal-escape': 2, // 禁止在字符串中使用八进制转义序列
    // 'no-param-reassign': 2, // 禁止对 function 的参数进行重新赋值
    // 'no-proto': 2, // 禁用 __proto__ 属性
    // 'no-redeclare': 2, // 禁止多次声明同一变量
    // 'no-restricted-properties': 2, // 禁止使用对象的某些属性
    // 'no-return-assign': 2, // 禁止在 return 语句中使用赋值语句
    // 'no-return-await': 2, // 禁用不必要的 return await
    // 'no-script-url': 2, // 禁止使用 javascript: url
    // 'no-self-assign': 2, // 禁止自我赋值
    // 'no-self-compare': 2, // 禁止自身比较
    // 'no-sequences': 2, // 禁用逗号操作符
    // 'no-throw-literal': 2, // 禁止抛出异常字面量
    // 'no-unmodified-loop-condition': 2, // 禁用一成不变的循环条件
    // 'no-unused-expressions': 2, // 禁止出现未使用过的表达式
    // 'no-unused-labels': 2, // 禁用出现未使用过的标
    // 'no-useless-call': 2, // 禁止不必要的 .call() 和 .apply()
    // 'no-useless-catch': 2, // 禁止不必要的 catch 子句
    // 'no-useless-concat': 2, // 禁止不必要的字符串字面量或模板字面量的连接
    // 'no-useless-return': 2, // 禁止多余的 return 语句
    // 'no-void': 2, // 禁用 void 操作符
    // 'no-warning-comments': 2, // 禁止在注释中使用特定的警告术语
    // 'no-with': 2, // 禁用 with 语句
    // 'prefer-named-capture-group': 2, // 建议在正则表达式中使用命名捕获组
    // 'prefer-promise-reject-errors': 2, // 要求使用 Error 对象作为 Promise 拒绝的原因
    // radix: 2, // 强制在 parseInt() 使用基数参数
    // 'require-await': 2, // 禁止使用不带 await 表达式的 async 函数
    // 'require-unicode-regexp': 2, // 强制在 RegExp 上使用 u 标志
    // 'vars-on-top': 2, // 要求所有的 var 声明出现在它们所在的作用域顶部
    // 'wrap-iife': 2, // 要求 IIFE 使用括号括起来
    // yoda: 2, // 要求或禁止 “Yoda” // 条件
    // // 这些规则与变量声明有关
    // 'init-declarations': 2, // 要求或禁止?var?声明中的初始化
    // 'no-delete-var': 2, // 禁止删除变量
    // 'no-label-var': 2, // 不允许标签与变量同名
    // 'no-restricted-globals': 2, // 禁用特定的全局变量
    // 'no-shadow': 2, // 禁止变量声明与外层作用域的变量同名
    // 'no-shadow-restricted-names': 2, // 禁止将标识符定义为受限的名字
    // 'no-undef': 2, // 禁用未声明的变量，除非它们在?/*global*/?注释中被提到
    // 'no-undef-init': 2, // 禁止将变量初始化为?undefined
    // 'no-undefined': 2, // 禁止将?undefined?作为标识符
    // 'no-unused-vars': 2, // 禁止出现未使用过的变量
    // 'no-use-before-define': 2, // 禁止在变量定义之前使用它们
    // // 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：
    // 'callback-return': 2, // 强制数组方法的回调函数中有?return?语句
    // 'global-require': 2, // 要求?require()?出现在顶层模块作用域中
    // 'handle-callback-err': 2, // 要求回调函数中有容错处理
    // 'no-buffer-constructor': 2, // 禁用?Buffer()?构造函数
    // 'no-mixed-requires': 2, // 禁止混合常规变量声明和?require?调用
    // 'no-new-require': 2, // 禁止调用?require?时使用?new?操作符
    // 'no-path-concat': 2, // 禁止对?__dirname?和?__filename?进行字符串连接
    // 'no-process-env': 2, // 禁用?process.env
    // 'no-process-exit': 2, // 禁用?process.exit()
    // 'no-restricted-modules': 2, // 禁用通过?require?加载的指定模块
    // 'no-sync': 2, // 禁用同步方法': 2, //
    // // 这些规则是关于风格指南的，而且是非常主观的：
    // 'array-bracket-newline': 2, // 在数组开括号后和闭括号前强制换行
    // 'array-bracket-spacing': 2, // 强制数组方括号中使用一致的空格
    // 'array-element-newline': 2, // 强制数组元素间出现换行
    // 'block-spacing': 2, // 禁止或强制在代码块中开括号前和闭括号后有空格
    // 'brace-style': 2, // 强制在代码块中使用一致的大括号风格
    // 'comma-spacing': 2, // 强制在逗号前后使用一致的空格
    // 'comma-style': 2, // 强制使用一致的逗号风格
    // 'computed-property-spacing': 2, // 强制在计算的属性的方括号中使用一致的空格
    // 'consistent-this': 2, // 当获取当前执行环境的上下文时，强制使用一致的命名
    // 'func-call-spacing': 2, // 要求或禁止在函数标识符和其调用之间有空格
    // 'func-name-matching': 2, // 要求函数名与赋值给它们的变量名或属性名相匹配
    // 'func-names': 2, // 要求或禁止使用命名的?function?表达式
    // 'func-style': 2, // 强制一致地使用?function?声明或表达式
    // 'function-paren-newline': 2, // 强制在函数括号内使用一致的换行
    // 'id-blacklist': 2, // 禁用指定的标识符
    // 'id-length': 2, // 强制标识符的最小和最大长度
    // 'id-match': 2, // 要求标识符匹配一个指定的正则表达式
    // 'implicit-arrow-linebreak': 2, // 强制隐式返回的箭头函数体的位置
    // 'jsx-quotes': 'off', // 强制在 JSX 属性中一致地使用双引号或单引号
    // 'key-spacing': 2, // 强制在对象字面量的属性中键和值之间使用一致的间距
    // 'keyword-spacing': 2, // 强制在关键字前后使用一致的空格
    // 'lines-around-comment': 2, // 要求在注释周围有空行
    // 'lines-between-class-members': 2, // 要求或禁止类成员之间出现空行
    // 'max-depth': 2, // 强制可嵌套的块的最大深度
    // 'max-lines-per-function': 2, // 强制函数最大代码行数
    // 'max-nested-callbacks': 2, // 强制回调函数最大嵌套深度
    // 'max-params': 2, // 强制函数定义中最多允许的参数数量
    // 'max-statements': 2, // 强制函数块最多允许的的语句数量
    // 'max-statements-per-line': 2, // 强制每一行中所允许的最大语句数量
    // 'multiline-comment-style': 2, // 强制对多行注释使用特定风格
    // 'multiline-ternary': 2, // 要求或禁止在三元操作数中间换行
    // 'new-cap': 2, // 要求构造函数首字母大写
    // 'new-parens': 2, // 强制或禁止调用无参构造函数时有圆括号
    // 'newline-per-chained-call': 2, // 要求方法链中每个调用都有一个换行符
    // 'no-array-constructor': 2, // 禁用 Array 构造函数
    // 'no-bitwise': 2, // 禁用按位运算符
    // 'no-continue': 2, // 禁用 continue 语句
    // 'no-lonely-if': 2, // 禁止 if 作为唯一的语句出现在 else 语句中
    // 'no-mixed-operators': 2, // 禁止混合使用不同的操作符
    // 'no-multi-assign': 2, // 禁止连续赋值
    // 'no-negated-condition': 2, // 禁用否定的表达式
    // 'no-nested-ternary': 2, // 禁用嵌套的三元表达式
    // 'no-new-object': 2, // 禁用 Object 的构造函数
    // 'no-plusplus': 2, // 禁用一元操作符 ++ 和 --
    // 'no-restricted-syntax': 2, // 禁用特定的语法
    // 'no-ternary': 2, // 禁用三元操作符
    // 'no-underscore-dangle': 2, // 禁止标识符中有悬空下划线
    // 'no-unneeded-ternary': 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    // 'no-whitespace-before-property': 2, // 禁止属性前有空白
    // 'nonblock-statement-body-position': 2, // 强制单个语句的位置
    // 'object-curly-newline': 2, // 强制大括号内换行符的一致性
    // 'object-property-newline': 2, // 强制将对象的属性放在不同的行上
    // 'one-var': 2, // 强制函数中的变量要么一起声明要么分开声明
    // 'one-var-declaration-per-line': 2, // 要求或禁止在变量声明周围换行
    // 'operator-assignment': 2, // 要求或禁止在可能的情况下使用简化的赋值操作符
    // 'operator-linebreak': 2, // 强制操作符使用一致的换行符
    // 'padded-blocks': 2, // 要求或禁止块内填充
    // 'padding-line-between-statements': 2, // 要求或禁止在语句间填充空行
    // 'prefer-object-spread': 2, // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    // 'quote-props': 2, // 要求对象字面量属性名称用引号括起来
    // quotes: 2, // 强制使用一致的反勾号、双引号或单引号
    // semi: 2, // 要求或禁止使用分号代替': 2, // ASI
    // 'semi-spacing': 2, // 强制分号之前和之后使用一致的空格
    // 'semi-style': 2, // 强制分号的位置
    // 'sort-vars': 2, // 要求同一个声明块中的变量按顺序排列
    // 'space-before-blocks': 2, // 强制在块之前使用一致的空格
    // 'space-in-parens': 2, // 强制在圆括号内使用一致的空格
    // 'space-infix-ops': 2, // 要求操作符周围有空格
    // 'space-unary-ops': 2, // 强制在一元操作符前后使用一致的空格
    // 'switch-colon-spacing': 2, // 强制在 switch 的冒号左右有空格
    // 'template-tag-spacing': 2, // 要求或禁止在模板标记和它们的字面量之间有空格
    // 'unicode-bom': 2, // 要求或禁止 Unicode 字节顺序标记 (BOM)
    // 'wrap-regex': 2, // 要求正则表达式被括号括起来
    // // ES6
    // 'arrow-body-style': 2, // 要求箭头函数体使用大括号
    // 'arrow-parens': 2, // 要求箭头函数的参数使用圆括号
    // 'arrow-spacing': 2, // 强制箭头函数的箭头前后使用一致的空格
    // 'constructor-super': 2, // 要求在构造函数中有?super()?的调用
    // 'generator-star-spacing': 2, // 强制': 2, // generator': 2, // 函数中?*?号周围使用一致的空格
    // 'no-class-assign': 2, // 禁止修改类声明的变量
    // 'no-confusing-arrow': 2, // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    // 'no-const-assign': 2, // 禁止修改?const?声明的变量
    // 'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    // 'no-duplicate-imports': 2, // 禁止重复模块导入
    // 'no-new-symbol': 2, // 禁止 Symbolnew 操作符和 new 一起使用
    // 'no-restricted-imports': 2, // 禁止使用指定的?import?加载的模块
    // 'no-this-before-super': 2, // 禁止在构造函数中，在调用?super()?之前使用?this?或?super
    // 'no-useless-computed-key': 2, // 禁止在对象中使用不必要的计算属性
    // 'no-useless-constructor': 2, // 禁用不必要的构造函数
    // 'no-useless-rename': 2, // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    // 'no-var': 2, // 要求使用?let?或?const?而不是?var
    // 'object-shorthand': 2, // 要求或禁止对象字面量中方法和属性使用简写语法
    // 'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
    // 'prefer-const': 2, // 要求使用?const?声明那些声明后不再被修改的变量
    // 'prefer-destructuring': 2, // 优先使用数组和对象解构
    // 'prefer-numeric-literals': 2, // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    // 'prefer-rest-params': 2, // 要求使用剩余参数而不是?arguments
    // 'prefer-spread': 2, // 要求使用扩展运算符而非? .apply()
    // 'prefer-template': 2, // 要求使用模板字面量而非字符串连接
    // 'require-yield': 2, // 要求 generator 函数内有 yield
    // 'rest-spread-spacing': 2, // 强制剩余和扩展运算符及其表达式之间有空格
    // 'sort-imports': 2, // 强制模块内的 import 排序
    // 'symbol-description': 2, // 要求 symbol 描述
    // 'template-curly-spacing': 2, // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    // 'yield-star-spacing': 2 // 强制在 yield* 表达式中 * 周围使用空格
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
