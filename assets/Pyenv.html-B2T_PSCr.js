import{_ as s,c as a,a as p,o as e}from"./app-M-JKmFCI.js";const t={};function l(c,n){return e(),a("div",null,[...n[0]||(n[0]=[p(`<h1 id="pyenv" tabindex="-1"><a class="header-anchor" href="#pyenv"><span>Pyenv</span></a></h1><p>用于方便不同Python版本之间的切换</p><p>Pyenv（不支持Windows）项目地址：<a href="https://github.com/pyenv/pyenv" target="_blank" rel="noopener noreferrer">https://github.com/pyenv/pyenv</a></p><p>Pyenv-Win(Windows版本) 项目地址：<a href="https://github.com/pyenv-win/pyenv-win" target="_blank" rel="noopener noreferrer">https://github.com/pyenv-win/pyenv-win</a></p><details class="hint-container details"><summary>Windows CMD安装 Pyenv</summary><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 1.%USERPROFILE%为用户配置文件目录，一般情况下和用户家目录相同</span></span>
<span class="line">C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>VVFock3r<span class="token operator">&gt;</span> pip <span class="token function">install</span> pyenv-win <span class="token parameter variable">--target</span> %USERPROFILE%<span class="token punctuation">\\</span>.pyenv</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 2.修改系统环境变量, CMD下执行如下命令</span></span>
<span class="line">setx <span class="token environment constant">PATH</span> <span class="token string">&quot;%PATH%;%USERPROFILE%\\.pyenv\\pyenv-win<span class="token entity" title="\\b">\\b</span>in&quot;</span></span>
<span class="line">setx PYENV <span class="token string">&quot;%USERPROFILE%\\.pyenv&quot;</span></span>
<span class="line">setx PYENV_ROOT <span class="token string">&quot;%USERPROFILE%\\.pyenv&quot;</span></span>
<span class="line">setx PYENV_HOME <span class="token string">&quot;%USERPROFILE%\\.pyenv&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 3.重新打开CMD, 检查是否安装成功</span></span>
<span class="line">C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>VVFock3r<span class="token operator">&gt;</span> pyenv <span class="token parameter variable">--version</span></span>
<span class="line">pyenv <span class="token number">3.1</span>.1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 备注：我们只为当前用户安装了Pyenv</span></span>
<span class="line"></span></code></pre></div></details><details class="hint-container details"><summary>Pyenv命令</summary><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token comment"># 查看所有可安装版本</span></span>
<span class="line">pyenv <span class="token function">install</span> <span class="token parameter variable">--list</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看当前版本 </span></span>
<span class="line"><span class="token comment"># 注：</span></span>
<span class="line"><span class="token comment"># 	linux这里会显示system，方便以后我们切了版本之后想要再切回来</span></span>
<span class="line"><span class="token comment">#	windows不知道是不是bug，这里什么也不显示，这样当我们以后想切回系统版本就很不好弄了</span></span>
<span class="line"><span class="token comment">#	临时解决办法就是：用完了就卸载指定版本</span></span>
<span class="line">pyenv version</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装指定版本</span></span>
<span class="line"><span class="token comment"># 注：</span></span>
<span class="line"><span class="token comment">#	(1) 带-win32的为32位版本，不带的为64位版本 </span></span>
<span class="line"><span class="token comment">#	(2) 如果下载慢，用迅雷下载，然后放到指定目录，安装时各目录都有说明</span></span>
<span class="line"><span class="token comment">#	(3) 安装过程较慢，请耐心等待</span></span>
<span class="line">C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>VVFock3r<span class="token operator">&gt;</span>pyenv <span class="token function">install</span> <span class="token number">3.9</span>.0a4</span>
<span class="line">:: <span class="token punctuation">[</span>Info<span class="token punctuation">]</span> ::  Mirror: https://www.python.org/ftp/python</span>
<span class="line">:: <span class="token punctuation">[</span>Downloading<span class="token punctuation">]</span> ::  <span class="token number">3.9</span>.0a4 <span class="token punctuation">..</span>.</span>
<span class="line">:: <span class="token punctuation">[</span>Downloading<span class="token punctuation">]</span> ::  From https://www.python.org/ftp/python/3.9.0/python-3.9.0a4-amd64-webinstall.exe</span>
<span class="line">:: <span class="token punctuation">[</span>Downloading<span class="token punctuation">]</span> ::  To   C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>VVFock3r<span class="token punctuation">\\</span>.pyenv<span class="token punctuation">\\</span>pyenv-win<span class="token punctuation">\\</span>install_cache<span class="token punctuation">\\</span>python-3.9.0a4-amd64-webinstall.exe</span>
<span class="line">^CTerminate batch job <span class="token punctuation">(</span>Y/N<span class="token punctuation">)</span>? y</span>
<span class="line"></span>
<span class="line">C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>VVFock3r<span class="token operator">&gt;</span>pyenv <span class="token function">install</span> <span class="token number">3.9</span>.0a4</span>
<span class="line">:: <span class="token punctuation">[</span>Info<span class="token punctuation">]</span> ::  Mirror: https://www.python.org/ftp/python</span>
<span class="line">:: <span class="token punctuation">[</span>Installing<span class="token punctuation">]</span> ::  <span class="token number">3.9</span>.0a4 <span class="token punctuation">..</span>.</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换到指定版本</span></span>
<span class="line">pyenv global <span class="token number">3.9</span>.0a4	<span class="token comment"># 全局python解释器切换</span></span>
<span class="line">pyenv <span class="token builtin class-name">local</span>  <span class="token number">3.9</span>.0a4	<span class="token comment"># 当前目录及子目录下的python解释器切换</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看所有已安装版本</span></span>
<span class="line">pyenv versions</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 卸载指定版本 </span></span>
<span class="line">pyenv uninstall <span class="token number">3.9</span>.0a4</span>
<span class="line"></span></code></pre></div></details>`,6)])])}const i=s(t,[["render",l]]),r=JSON.parse('{"path":"/archived/Pyenv.html","title":"Pyenv","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1767707855000,"contributors":[{"name":"VVFock3r","username":"VVFock3r","email":"vvfock3r@gmail.com","commits":1,"url":"https://github.com/VVFock3r"}],"changelog":[{"hash":"2229a9017603344b200044235fcff3f4c17017ef","time":1767707855000,"email":"vvfock3r@gmail.com","author":"VVFock3r","message":"auto commit"}]},"filePathRelative":"archived/Pyenv.md"}');export{i as comp,r as data};
