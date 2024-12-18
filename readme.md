# 部署文件到远程服务器

该 GitHub Action 允许用户将文件上传到指定的远程服务器，并可选择在上传后执行命令。

## 输入参数

以下是该 Action 所需的输入参数：

- **server-ip**: 远程服务器的 IP 地址（必需）
- **server-user**: 远程服务器的用户名（必需）
- **server-password**: 远程服务器的密码（必需）
- **remote-path**: 文件上传到远程服务器的路径（必需）
- **files**: 要上传的文件和文件夹列表，以逗号分隔（必需）
- **cmd**: 可选的命令，在上传后执行（可选）
- **jump-ip**: 跳板机的 IP 地址（可选）
- **jump-user**: 跳板机的用户名（可选）
- **jump-password**: 跳板机的密码（可选）

## 使用示例

以下是一个使用该 Action 的示例：

```yaml
- name: 部署文件到远程服务器
  uses: ./
  with:
    server-ip: ${{ secrets.SERVER_IP }}
    server-user: ${{ secrets.SERVER_USER }}
    server-password: ${{ secrets.SERVER_PASSWORD }}
    jump-ip: ${{ secrets.JUMP_IP }}
    jump-user: ${{ secrets.JUMP_USER }}
    jump-password: ${{ secrets.JUMP_PASSWORD }}
    remote-path: '/opt/test'
    files: 'src,package.json'
    cmd: 'echo "上传完成"'
```
