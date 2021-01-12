# 关于目录结构

- docker-compose.yml 用于整个项目的启动和关闭
- images 文件夹用于管理需要自定义开发的镜像
  - 因为例如一些 mysql 的镜像，如果我们不是要基于 mysql 的服务做修改，我们只需要在 yml 的配置文件中配置即可

```
.
├── README.md
├── docker-compose.yml
└── images
    ├── nginx
    └── node
```
