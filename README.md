# openapi-generate-config

根据 swagger api-doc 自动生成 typescript 类型文件、请求函数

# 特性

1. 根据 controller 自动生成请求文件目录
2. 根据请求路径生成请求函数
3. 自动生成工具泛型用于推导类型
4. 可自定义配置类型、文件生成目录
5. request 请求使用 umi-request 如果包中有 tarojs 请求库更换为项目内封装的请求工具

再也不必自己定义请求类型 请求方法

# Step 1

安装插件

```bash
# Yarn
yarn add openapi-generate-config --dev

# Npm
npm install openapi-generate-config --save-dev
```

# Step 2

生成、读取文件

```bash
npx openapi-make

```

如果项目根目录没有配置文件,执行命令后会会生成一个`generateTypeBySwagger.json`的文件，内容如下：

```json
{
  "swaggerUrl": "https://petstore.swagger.io/v2/swagger.json",

  "outDir": "./src/types/request.d.ts",
  "serviceFileDir": "src/services"
}
```

### 配置参数说明：

### swaggerUrl

swagger 链接

### outDir

输出的目录

如果项目根目录有配置文件,直接读取配置文件内容并根据配置生成文件

### swaggerUrl

service 文件目录

### 建议搭配 tampermonkey 插件

https://greasyfork.org/zh-CN/scripts/426942-swagger-umi-request-generate

可直接复制请求函数名

#### 感谢使用