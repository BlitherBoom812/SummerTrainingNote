~~~dockerfile
# Builder stage

FROM node:16-alpine AS builder
# 设置基础镜像为Alpine

RUN apk add python3 make gcc g++
# 运行命令 apk add python3 make gcc g++
# 应该是安装 python3, make, gcc, g++ 相关的工具包？

# Create app directory
WORKDIR /home/node/app
# 设置终端启动的默认目录

# Install app devDependencies
COPY package.json yarn.lock ./
# 从宿主机把 package.json 和 yarn.lock 复制到镜像

RUN yarn install --frozen-lockfile --no-cache
# yarn 安装依赖包。 --frozen-lockfile 不生成   lock 文件，

# Bundle app source
COPY . .
# 将目录下的所有文件复制到镜像中

# Build
RUN yarn build
# 运行 yarn build 命令

# Runner stage

FROM node:16-alpine
# 设置基础镜像为alpine

ENV NODE_ENV=production
# 配置环境变量，使得 yarn 命令用于生产环境。

WORKDIR /home/node/app
# 设置终端默认目录

# Copy dependencies
COPY package.json yarn.lock ./
# 从主机复制到镜像中

COPY --from=builder /home/node/app/node_modules ./node_modules
# 从 builder 中复制安装好的 node_modules 到当前目录

# Copy build files
COPY --from=builder /home/node/app/build ./build
# 复制 builder 中的文件

EXPOSE 28888
# 暴露端口28888

CMD yarn serve
# 启动时自动暴露端口


~~~

