### 外卖app服务端

### 环境要求
```
    1、 Linux & Mac & Window 
    
    2、Mysql 版本5.7

    3、Nodejs 环境不低于 v8.0.0及以上版本

```

### 概述

- 此项目基于 `koajs & mysql` 搭建，用于app商城商品管理

### 数据库

 1、创建数据库
```
create database gourmet;
```
2、数据表

- orders 表
```
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| id          | int(11)      | NO   | PRI | NULL    | auto_increment |
| order_title | varchar(100) | NO   |     | NULL    |                |
| order_desc  | varchar(100) | NO   |     | NULL    |                |
| price       | varchar(255) | NO   |     | NULL    |                |
| type        | varchar(50)  | NO   |     | NULL    |                |
| order_url   | varchar(100) | NO   |     | NULL    |                |
| create_at   | varchar(100) | NO   |     | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+
```

- address 表
```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(100) | NO   |     | NULL    |                |
| tel       | varchar(100) | NO   |     | NULL    |                |
| address   | varchar(255) | NO   |     | NULL    |                |
| create_at | varchar(100) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```

- recommen 表
```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| shop_url  | varchar(255) | NO   |     | NULL    |                |
| shop_name | varchar(100) | NO   |     | NULL    |                |
| create_at | varchar(100) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```
- shops 表
```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| shop_name | varchar(100) | NO   |     | NULL    |                |
| type      | varchar(100) | NO   |     | NULL    |                |
| shop_url  | varchar(255) | NO   |     | NULL    |                |
| create_at | varchar(100) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```
- users 表
```
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int(11)      | NO   | PRI | NULL    | auto_increment |
| username  | varchar(100) | NO   |     | NULL    |                |
| password  | varchar(100) | NO   |     | NULL    |                |
| create_at | varchar(100) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
```
