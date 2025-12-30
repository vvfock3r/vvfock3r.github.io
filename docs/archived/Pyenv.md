# Pyenv

用于方便不同Python版本之间的切换

Pyenv（不支持Windows）项目地址：[https://github.com/pyenv/pyenv](https://github.com/pyenv/pyenv)

Pyenv-Win(Windows版本) 项目地址：[https://github.com/pyenv-win/pyenv-win](https://github.com/pyenv-win/pyenv-win)

::: details Windows CMD安装 Pyenv

```shell
# 1.%USERPROFILE%为用户配置文件目录，一般情况下和用户家目录相同
C:\Users\VVFock3r> pip install pyenv-win --target %USERPROFILE%\.pyenv

# 2.修改系统环境变量, CMD下执行如下命令
setx PATH "%PATH%;%USERPROFILE%\.pyenv\pyenv-win\bin"
setx PYENV "%USERPROFILE%\.pyenv"
setx PYENV_ROOT "%USERPROFILE%\.pyenv"
setx PYENV_HOME "%USERPROFILE%\.pyenv"

# 3.重新打开CMD, 检查是否安装成功
C:\Users\VVFock3r> pyenv --version
pyenv 3.1.1

# 备注：我们只为当前用户安装了Pyenv
```

:::

::: details Pyenv命令

```bash
# 查看所有可安装版本
pyenv install --list

# 查看当前版本 
# 注：
# 	linux这里会显示system，方便以后我们切了版本之后想要再切回来
#	windows不知道是不是bug，这里什么也不显示，这样当我们以后想切回系统版本就很不好弄了
#	临时解决办法就是：用完了就卸载指定版本
pyenv version

# 安装指定版本
# 注：
#	(1) 带-win32的为32位版本，不带的为64位版本 
#	(2) 如果下载慢，用迅雷下载，然后放到指定目录，安装时各目录都有说明
#	(3) 安装过程较慢，请耐心等待
C:\Users\VVFock3r>pyenv install 3.9.0a4
:: [Info] ::  Mirror: https://www.python.org/ftp/python
:: [Downloading] ::  3.9.0a4 ...
:: [Downloading] ::  From https://www.python.org/ftp/python/3.9.0/python-3.9.0a4-amd64-webinstall.exe
:: [Downloading] ::  To   C:\Users\VVFock3r\.pyenv\pyenv-win\install_cache\python-3.9.0a4-amd64-webinstall.exe
^CTerminate batch job (Y/N)? y

C:\Users\VVFock3r>pyenv install 3.9.0a4
:: [Info] ::  Mirror: https://www.python.org/ftp/python
:: [Installing] ::  3.9.0a4 ...


# 切换到指定版本
pyenv global 3.9.0a4	# 全局python解释器切换
pyenv local  3.9.0a4	# 当前目录及子目录下的python解释器切换

# 查看所有已安装版本
pyenv versions

# 卸载指定版本 
pyenv uninstall 3.9.0a4
```

:::