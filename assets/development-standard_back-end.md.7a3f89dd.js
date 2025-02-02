import{_ as a,c as s,o as n,O as e}from"./chunks/framework.07cac50c.js";const D=JSON.parse('{"title":"JAVA开发规范","description":"","frontmatter":{},"headers":[],"relativePath":"development-standard/back-end.md"}'),l={name:"development-standard/back-end.md"},p=e(`<h1 id="java开发规范" tabindex="-1">JAVA开发规范 <a class="header-anchor" href="#java开发规范" aria-label="Permalink to &quot;JAVA开发规范&quot;">​</a></h1><table><thead><tr><th>版本 <div style="width:100px;"></div></th><th>日期 <div style="width:130px;"></div></th><th>修订人 <div style="width:105px;"></div></th><th>描述（注明修改的条款或页） <div style="width:220px;"></div></th></tr></thead><tbody><tr><td>V1.0</td><td>2023/04/27</td><td>lzp</td><td>init</td></tr></tbody></table><h2 id="一、编程规范" tabindex="-1">一、编程规范 <a class="header-anchor" href="#一、编程规范" aria-label="Permalink to &quot;一、编程规范&quot;">​</a></h2><h3 id="_1、好代码的原则" tabindex="-1">1、好代码的原则 <a class="header-anchor" href="#_1、好代码的原则" aria-label="Permalink to &quot;1、好代码的原则&quot;">​</a></h3><ul><li><p>（Passes its tests）：通过所有测试,强调的是外部需求，这是代码实现最重要的尽可能消除重复</p></li><li><p>(Minimizes duplication)：最大限度减少重复,代码的模块架构设计，保证代码的正交性，保证代码更容易修改尽可能清晰表达</p></li><li><p>(Maximizes clarity)：最大化清晰，代码的可阅读性，保证代码是容易阅读的更少代码元素</p></li><li><p>(Has fewer elements)：保证代码是简洁的</p></li></ul><p>以上四个原则的重要程度依次降低， 这组定义被称做简单设计原则。</p><h3 id="_2、项目命名规范" tabindex="-1">2、项目命名规范 <a class="header-anchor" href="#_2、项目命名规范" aria-label="Permalink to &quot;2、项目命名规范&quot;">​</a></h3><p>全部采用小写方式， 以中划线分隔。</p><p>正例：mall-management-system / order-service-client / user-api</p><p>反例：mall_management-system / mallManagementSystem / orderServiceClient</p><h3 id="_3、todo-fixme-规范" tabindex="-1">3、TODO/FIXME 规范 <a class="header-anchor" href="#_3、todo-fixme-规范" aria-label="Permalink to &quot;3、TODO/FIXME 规范&quot;">​</a></h3><p>TODO/TBD(to be determined) 注释一般用来描述已知待改进、待补充的修改点,并且加上作者名称。</p><p>FIXME 注释一般用来描述已知缺陷，它们都应该有统一风格，方便文本搜索统一处理。如：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">// TODO &lt;author-name&gt;: 补充XX处理</span></span>
<span class="line"><span style="color:#A6ACCD;">// FIXME &lt;author-name&gt;: XX缺陷</span></span></code></pre></div><h3 id="_4、方法参数规范" tabindex="-1">4、方法参数规范 <a class="header-anchor" href="#_4、方法参数规范" aria-label="Permalink to &quot;4、方法参数规范&quot;">​</a></h3><p>无论是 controller，service，manager，dao 亦或是其他的代码，每个方法最多 3 个参数，如果超出 3 个参数的话，要封装成 javabean 对象。</p><p>反例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;">* 使用证书加密数据工具方法</span></span>
<span class="line"><span style="color:#A6ACCD;">*</span></span>
<span class="line"><span style="color:#A6ACCD;">* @param param</span></span>
<span class="line"><span style="color:#A6ACCD;">* @param password 加密密码</span></span>
<span class="line"><span style="color:#A6ACCD;">* @param priCert 私钥</span></span>
<span class="line"><span style="color:#A6ACCD;">* @param pubCert 公钥</span></span>
<span class="line"><span style="color:#A6ACCD;">* @return 返回加密后的字符串</span></span>
<span class="line"><span style="color:#A6ACCD;">*/</span></span>
<span class="line"><span style="color:#A6ACCD;">public String signEnvelop(JdRequestParam param, String password, String priCert, String pubCert){}</span></span></code></pre></div><h3 id="_5、注释规范" tabindex="-1">5、注释规范 <a class="header-anchor" href="#_5、注释规范" aria-label="Permalink to &quot;5、注释规范&quot;">​</a></h3><h4 id="_5-1、方法注释" tabindex="-1">5-1、方法注释 <a class="header-anchor" href="#_5-1、方法注释" aria-label="Permalink to &quot;5-1、方法注释&quot;">​</a></h4><p>方法要尽量通过方法名自解释，不要写无用、信息冗余的方法头，不要写空有格式的方法头注释。</p><p>方法头注释内容可选，但不限于：功能说明、返回值，用法、算法实现等等。尤其是对外的方法接口声明，其注释，应当将重要、有用的信息表达清楚。</p><p>正例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * 解析转换时间字符串为 LocalDate 时间类</span></span>
<span class="line"><span style="color:#A6ACCD;"> * 调用前必须校验字符串格式 否则可能造成解析失败的错误异常</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param dateStr 必须是 yyyy-MM-dd 格式的字符串</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return LocalDate</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">public static LocalDate parseYMD(String dateStr){}</span></span></code></pre></div><p>反例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * 校验对象</span></span>
<span class="line"><span style="color:#A6ACCD;"> *</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param t</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return String</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">public static &lt;T&gt; String checkObj(T t);</span></span></code></pre></div><p>反例中出现的问题： 方法注释没有说明具体的作用、使用事项。参数、返回值，空有格式没内容。这是非常重要一点，任何人调用任何方法之前都需要知道方法对参数的要求，以及返回值是什么。</p><h2 id="二、项目规范" tabindex="-1">二、项目规范 <a class="header-anchor" href="#二、项目规范" aria-label="Permalink to &quot;二、项目规范&quot;">​</a></h2><h3 id="_1、代码目录结构" tabindex="-1">1、代码目录结构 <a class="header-anchor" href="#_1、代码目录结构" aria-label="Permalink to &quot;1、代码目录结构&quot;">​</a></h3><p>统一的目录结构是所有项目的基础。</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">src                               源码目录</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- common                            各个项目的通用类库</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- config                            项目的配置信息</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- constant                          全局公共常量</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- handler                           全局处理器</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- interceptor                       全局连接器</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- listener                          全局监听器</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- module                            各个业务</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- employee                         员工模块</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- role                             角色模块</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- login                            登录模块</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- third                             三方服务，比如redis, oss，微信sdk等等</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- util                              全局工具类</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- Application.java                  启动类</span></span></code></pre></div><h3 id="_2、common-目录规范" tabindex="-1">2、common 目录规范 <a class="header-anchor" href="#_2、common-目录规范" aria-label="Permalink to &quot;2、common 目录规范&quot;">​</a></h3><p>common 目录用于存放各个项目通用的项目，但是又可以依照项目进行特定的修改。</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">src 源码目录</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- common 各个项目的通用类库</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- anno          通用注解，比如权限，登录等等</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- constant      通用常量，比如 ResponseCodeConst</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- domain        全局的 javabean，比如 BaseEntity,PageParamDTO 等</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- exception     全局异常，如 BusinessException</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- json          json 类库，如 LongJsonDeserializer，LongJsonSerializer</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- swagger       swagger 文档</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- validator     适合各个项目的通用 validator，如 CheckEnum，CheckBigDecimal 等</span></span></code></pre></div><h3 id="_3、config-目录规范" tabindex="-1">3、config 目录规范 <a class="header-anchor" href="#_3、config-目录规范" aria-label="Permalink to &quot;3、config 目录规范&quot;">​</a></h3><p>config 目录用于存放各个项目通用的项目，但是又可以依照项目进行特定的修改。</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">src                               源码目录</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- config                            项目的所有配置信息</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- MvcConfig                    mvc的相关配置，如interceptor,filter等</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- DataSourceConfig             数据库连接池的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- MybatisConfig                mybatis的配置</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |--- ....                         其他</span></span></code></pre></div><h3 id="_4、module-目录规范" tabindex="-1">4、module 目录规范 <a class="header-anchor" href="#_4、module-目录规范" aria-label="Permalink to &quot;4、module 目录规范&quot;">​</a></h3><p>module 目录里写项目的各个业务，每个业务一个独立的顶级文件夹，在文件里进行 mvc 的相关划分。</p><p>其中，domain 包里存放 entity, dto, vo，bo 等 javabean 对象</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">src</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- module                         所有业务模块</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- role                          角色模块</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- |--RoleController.java              controller</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- |--RoleConst.java                   role相关的常量</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- |--RoleService.java                 service</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- |--RoleDao.java                     dao</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- |--domain                           domain</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- |-- |-- RoleEntity.java                  表对应实体</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- |-- |-- RoleDTO.java                     dto对象</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- |-- |-- RoleVO.java                      返回对象</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- employee                      员工模块</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- login                         登录模块</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- email                         邮件模块</span></span>
<span class="line"><span style="color:#A6ACCD;">|-- |-- ....                          其他</span></span></code></pre></div><h3 id="_5、-domain-包中的-javabean-命名规范" tabindex="-1">5、 domain 包中的 javabean 命名规范 <a class="header-anchor" href="#_5、-domain-包中的-javabean-命名规范" aria-label="Permalink to &quot;5、 domain 包中的 javabean 命名规范&quot;">​</a></h3><p>1） javabean 的整体要求：</p><p>不得有任何的业务逻辑或者计算基本数据类型必须使用包装类型（Integer, Double、Boolean 等）不允许有任何的默认值每个属性必须添加注释，并且必须使用多行注释。必须使用 lombok 简化 getter/setter 方法建议对象使用 lombok 的 @Builder ，@NoArgsConstructor，同时使用这两个注解，简化对象构造方法以及set方法。</p><p>正例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@Builder</span></span>
<span class="line"><span style="color:#A6ACCD;">@NoArgsConstructor</span></span>
<span class="line"><span style="color:#A6ACCD;">@Data</span></span>
<span class="line"><span style="color:#A6ACCD;">public class DemoDTO {</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    private String name;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    private Integer age;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 使用示例：</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">DemoDTO demo = DemoDTO.builder()</span></span>
<span class="line"><span style="color:#A6ACCD;">                .name(&quot;yeqiu&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">                .age(66)</span></span>
<span class="line"><span style="color:#A6ACCD;">                .build();</span></span></code></pre></div><p>2）数据对象；XxxxEntity，要求： 以 Entity 为结尾（阿里是为 DO 为结尾）Xxxx 与数据库表名保持一致类中字段要与数据库字段保持一致，不能缺失或者多余类中的每个字段添加注释，并与数据库注释保持一致不允许有组合项目内的日期类型必须统一，建议使用 java.util.Date，java.sql.Timestamp，java.time.LocalDateTime 其中只一。</p><p>3）传输对象；XxxxDTO，要求：</p><p>不可以继承自 EntityDTO 可以继承、组合其他 DTO，VO，BO 等对象DTO 只能用于前端、RPC 的请求参数</p><p>3）视图对象；XxxxVO，要求：</p><p>不可继承自 EntityVO 可以继承、组合其他 DTO，VO，BO 等对象VO 只能用于返回前端、rpc 的业务数据封装对象</p><p>4）业务对象 BO，要求：</p><p>不可以继承自 EntityBO 对象只能用于 service，manager，dao 层，不得用于 controller 层</p><h2 id="三、mvc-规范" tabindex="-1">三、MVC 规范 <a class="header-anchor" href="#三、mvc-规范" aria-label="Permalink to &quot;三、MVC 规范&quot;">​</a></h2><h3 id="_1、整体分层" tabindex="-1">1、整体分层 <a class="header-anchor" href="#_1、整体分层" aria-label="Permalink to &quot;1、整体分层&quot;">​</a></h3><p>controller 层 service 层 manager 层 dao 层</p><h3 id="_2、-controller-层规范" tabindex="-1">2、 controller 层规范 <a class="header-anchor" href="#_2、-controller-层规范" aria-label="Permalink to &quot;2、 controller 层规范&quot;">​</a></h3><p>1）使用 rest 命名 url，。url 命名上规范如下：</p><p>/业务模块/子模块/动作</p><p>正例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">GET  /department/get/{id}      查询某个部门详细信息</span></span>
<span class="line"><span style="color:#A6ACCD;">POST /department/query         复杂查询</span></span>
<span class="line"><span style="color:#A6ACCD;">POST /department               添加部门</span></span>
<span class="line"><span style="color:#A6ACCD;">PUT /department/update         更新部门</span></span>
<span class="line"><span style="color:#A6ACCD;">DELETE  /department/delete/{id}删除部门</span></span></code></pre></div><p>2）每个方法必须添加 swagger 文档注解 @ApiOperation ，并填写接口描述信息 正例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@ApiOperation(&quot;更新部门信息&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    @PutMapping(&quot;/department/update&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    public R&lt;String&gt; updateDepartment(@Valid @RequestBody DeptUpdateDTO deptUpdateDTO) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return departmentService.updateDepartment(deptUpdateDTO);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><p>3）controller 负责协同和委派业务，充当路由的角色，每个方法要保持简洁： 不做任何的业务逻辑操作不做任何的参数、业务校验，参数校验只允许使用@Valid 注解做简单的校验不做任何的数据组合、拼装、赋值等操作</p><p>正例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@ApiOperation(&quot;添加部门&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    @PostMapping(&quot;/department/add&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    public R&lt;String&gt; addDepartment(@Valid @RequestBody DepartmentCreateDTO departmentCreateDTO) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return departmentService.addDepartment(departmentCreateDTO);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><p>4）只能在 controller 层获取当前请求用户，并传递给 service 层。</p><blockquote><p>因为获取当前请求用户是从 ThreadLocal 里获取取的，在 service、manager、dao 层极有可能是其他非 request 线程调用，会出现 null 的情况，尽量避免</p></blockquote><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@ApiOperation(&quot;添加员工 &quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    @PostMapping(&quot;/employee/add&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">    public R&lt;String&gt; addEmployee(@Valid @RequestBody EmployeeAddDTO employeeAddDTO) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        LoginTokenBO requestToken = SmartRequestTokenUtil.getRequestUser();</span></span>
<span class="line"><span style="color:#A6ACCD;">        return employeeService.addEmployee(employeeAddDTO, requestToken);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><h3 id="_3、-service-层规范" tabindex="-1">3、 service 层规范 <a class="header-anchor" href="#_3、-service-层规范" aria-label="Permalink to &quot;3、 service 层规范&quot;">​</a></h3><p>1）合理拆分 service 文件，如果业务较大，请拆分为多个 service。</p><p>如订单业务,所有业务都写到 OrderService 中会导致文件过大，故需要进行拆分如下：</p><p>OrderQueryService 订单查询业务OrderCreateService 订单新建业务OrderDeliverService 订单发货业务OrderValidatorService 订单验证业务</p><p>2）谨慎处理 @Transactional 事务注解的使用，不要简单对 service 的方法添加个 @Transactional 注解就觉得万事大吉了。应当合并对数据库的操作，尽量减少添加了@Transactional方法内的业务逻辑。</p><p>@Transactional 注解内的 rollbackFor 值必须使用异常的基类 Throwable.class</p><blockquote><p>对于@Transactional 注解，当 spring 遇到该注解时，会自动从数据库连接池中获取 connection，并开启事务然后绑定到 ThreadLocal 上，如果业务并没有进入到最终的 操作数据库环节，那么就没有必要获取连接并开启事务，应该直接将 connection 返回给数据库连接池，供其他使用（比较难以讲解清楚，如果不懂的话就主动去问）。 反例：</p></blockquote><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@Transactional(rollbackFor = Throwable.class)</span></span>
<span class="line"><span style="color:#A6ACCD;">    public R&lt;String&gt; upOrDown(Long departmentId, Long swapId) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 验证 1</span></span>
<span class="line"><span style="color:#A6ACCD;">        DepartmentEntity departmentEntity = departmentDao.selectById(departmentId);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (departmentEntity == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return R.fail(DepartmentResponseCodeConst.NOT_EXISTS);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 验证 2</span></span>
<span class="line"><span style="color:#A6ACCD;">        DepartmentEntity swapEntity = departmentDao.selectById(swapId);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (swapEntity == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return R.fail(DepartmentResponseCodeConst.NOT_EXISTS);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 验证 3</span></span>
<span class="line"><span style="color:#A6ACCD;">        Long count = employeeDao.countByDepartmentId(departmentId)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (count != null &amp;&amp; count &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return R.fail(DepartmentResponseCodeConst.EXIST_EMPLOYEE);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 操作数据库 4</span></span>
<span class="line"><span style="color:#A6ACCD;">        Long departmentSort = departmentEntity.getSort();</span></span>
<span class="line"><span style="color:#A6ACCD;">        departmentEntity.setSort(swapEntity.getSort());</span></span>
<span class="line"><span style="color:#A6ACCD;">        departmentDao.updateById(departmentEntity);</span></span>
<span class="line"><span style="color:#A6ACCD;">        swapEntity.setSort(departmentSort);</span></span>
<span class="line"><span style="color:#A6ACCD;">        departmentDao.updateById(swapEntity);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return R.ok();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><p>以上代码前三步都是使用 connection 进行验证操作，由于方法上有@Transactional 注解，所以这三个验证都是使用的同一个 connection。 若对于复杂业务、复杂的验证逻辑，会导致整个验证过程始终占用该 connection 连接，占用时间可能会很长，直至方法结束，connection 才会交还给数据库连接池。</p><p>对于复杂业务的不可预计的情况，长时间占用同一个 connection 连接不是好的事情，应该尽量缩短占用时间。</p><p>正例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">DepartmentService.java</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public R&lt;String&gt; upOrDown(Long departmentId, Long swapId) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        DepartmentEntity departmentEntity = departmentDao.selectById(departmentId);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (departmentEntity == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return R.fail(DepartmentResponseCodeConst.NOT_EXISTS);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        DepartmentEntity swapEntity = departmentDao.selectById(swapId);</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (swapEntity == null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return R.fail(DepartmentResponseCodeConst.NOT_EXISTS);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        Long count = employeeDao.countByDepartmentId(departmentId)</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (count != null &amp;&amp; count &gt; 0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return R.fail(DepartmentResponseCodeConst.EXIST_EMPLOYEE);</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        departmentManager.upOrDown(departmentSort,swapEntity);</span></span>
<span class="line"><span style="color:#A6ACCD;">        return R.ok();</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    DepartmentManager.java</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @Transactional(rollbackFor = Throwable.class)</span></span>
<span class="line"><span style="color:#A6ACCD;">    public void upOrDown(DepartmentEntity departmentEntity ,DepartmentEntity swapEntity){</span></span>
<span class="line"><span style="color:#A6ACCD;">        Long departmentSort = departmentEntity.getSort();</span></span>
<span class="line"><span style="color:#A6ACCD;">        departmentEntity.setSort(swapEntity.getSort());</span></span>
<span class="line"><span style="color:#A6ACCD;">        departmentDao.updateById(departmentEntity);</span></span>
<span class="line"><span style="color:#A6ACCD;">        swapEntity.setSort(departmentSort);</span></span>
<span class="line"><span style="color:#A6ACCD;">        departmentDao.updateById(swapEntity);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre></div><p>将数据在 service 层准备好，然后传递给 manager 层，由 manager 层添加@Transactional 进行数据库操作。 3）需要注意的是：注解 @Transactional 事务在类的内部方法调用是不会生效的</p><p>反例：如果发生异常，saveData方法上的事务注解并不会起作用</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">@Service</span></span>
<span class="line"><span style="color:#A6ACCD;">public class OrderService{</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    public void createOrder(OrderCreateDTO createDTO){</span></span>
<span class="line"><span style="color:#A6ACCD;">        this.saveData(createDTO);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    @Transactional(rollbackFor = Throwable.class)</span></span>
<span class="line"><span style="color:#A6ACCD;">    public void saveData(OrderCreateDTO createDTO){</span></span>
<span class="line"><span style="color:#A6ACCD;">        orderDao.insert(createDTO);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><blockquote><p>Spring采用动态代理(AOP)实现对bean的管理和切片，它为我们的每个class生成一个代理对象。只有在代理对象之间进行调用时，可以触发切面逻辑。而在同一个class中，方法A调用方法B，调用的是原对象的方法，而不通过代理对象。所以Spring无法拦截到这次调用，也就无法通过注解保证事务了。简单来说，在同一个类中的方法调用，不会被方法拦截器拦截到，因此事务不会起作用。 解决方案：</p></blockquote><p>可以将方法放入另一个类，如新增 manager层，通过spring注入，这样符合了在对象之间调用的条件。启动类添加 @EnableAspectJAutoProxy(exposeProxy = true)，方法内使用AopContext.currentProxy()获得代理类，使用事务。</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">SpringBootApplication.java</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">@EnableAspectJAutoProxy(exposeProxy = true)</span></span>
<span class="line"><span style="color:#A6ACCD;">@SpringBootApplication</span></span>
<span class="line"><span style="color:#A6ACCD;">public class SpringBootApplication {}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">OrderService.java</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">public void createOrder(OrderCreateDTO createDTO){</span></span>
<span class="line"><span style="color:#A6ACCD;">    OrderService orderService = (OrderService)AopContext.currentProxy();</span></span>
<span class="line"><span style="color:#A6ACCD;">    orderService.saveData(createDTO);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>4）service是具体的业务处理逻辑服务层，尽量避免将web层某些参数传递到service中。 反例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">public R&lt;String&gt; handlePinganRequest(HttpServletRequest request){</span></span>
<span class="line"><span style="color:#A6ACCD;">    InputStreamReader inputStreamReader = new InputStreamReader(request.getInputStream(), &quot;GBK&quot;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    BufferedReader reader = new BufferedReader(inputStreamReader);</span></span>
<span class="line"><span style="color:#A6ACCD;">    StringBuilder sb = new StringBuilder();</span></span>
<span class="line"><span style="color:#A6ACCD;">    String str;</span></span>
<span class="line"><span style="color:#A6ACCD;">    while ((str = reader.readLine()) != null) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        sb.append(str);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(!JSON.isValid(msg)){</span></span>
<span class="line"><span style="color:#A6ACCD;">      return R.fail(ResponseCodeConst.ERROR_PARAM);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    PinganMsgDTO PinganMsgDTO = JSON.parseObject(msg,PinganMsgDTO.class);</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 示例结束</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>反例中出现的问题： 反例中把 HttpServletRequest 传递到service中，是为了获取Request流中的字符信息，然后才是真正的业务处理。按照分层的初衷：将代码、业务逻辑解耦，正确的做法应该是handlePinganRequest方法将String字符作为参数直接处理业务，将从Request中获取字符的操作放入controller中。另一个坏处是不方便做单元测试，还得一个new一个HttpServletRequest并制造一个InputStream，然而这样做并不能模拟到真实的业务情景及数据。</p><h3 id="_4、-manager-层规范" tabindex="-1">4、 manager 层规范 <a class="header-anchor" href="#_4、-manager-层规范" aria-label="Permalink to &quot;4、 manager 层规范&quot;">​</a></h3><p>manager 层的作用(引自《阿里 java 手册》)：</p><p>对第三方平台封装的层，预处理返回结果及转化异常信息；对 Service 层通用能力的下沉，如缓存方案、中间件通用处理；与 DAO 层交互，对多个 DAO 的组合复用。</p><h3 id="_5、-dao-层规范" tabindex="-1">5、 dao 层规范 <a class="header-anchor" href="#_5、-dao-层规范" aria-label="Permalink to &quot;5、 dao 层规范&quot;">​</a></h3><p>优先使用 mybatis-plus 框架。如果需要多个数据源操作的，可以选择使用 SmartDb 框架。</p><p>1）所有 Dao 继承自 BaseMapper</p><p>3）禁止直接在 mybatis xml 中写死常量，应从 dao 中传入到 xml 中</p><p>3）建议不要使用星号 * 代替所有字段</p><p>正例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">NoticeDao.java</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    Integer noticeCount(@Param(&quot;sendStatus&quot;) Integer sendStatus);</span></span>
<span class="line"><span style="color:#A6ACCD;">---------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">    NoticeMapper.xml</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;select id=&quot;noticeCount&quot; resultType=&quot;integer&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        select</span></span>
<span class="line"><span style="color:#A6ACCD;">        count(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        from t_notice</span></span>
<span class="line"><span style="color:#A6ACCD;">        where</span></span>
<span class="line"><span style="color:#A6ACCD;">        send_status = #{sendStatus}</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/select&gt;</span></span></code></pre></div><p>反例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">NoticeDao.java</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    Integer noticeCount();</span></span>
<span class="line"><span style="color:#A6ACCD;">---------------------------------------------</span></span>
<span class="line"><span style="color:#A6ACCD;">    NoticeMapper.xml</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;select id=&quot;noticeCount&quot; resultType=&quot;integer&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        select</span></span>
<span class="line"><span style="color:#A6ACCD;">        count(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">        from t_notice</span></span>
<span class="line"><span style="color:#A6ACCD;">        where</span></span>
<span class="line"><span style="color:#A6ACCD;">        send_status = 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/select&gt;</span></span></code></pre></div><p>3）dao层方法命名规范 获取单个对象的方法用 get 做前缀。获取多个对象的方法用 list 做前缀。获取统计值的方法用 count 做前缀。插入的方法用 save/insert 做前缀。删除的方法用 remove/delete 做前缀。修改的方法用 update 做前缀。</p><p>建议：dao层方法命名尽量以sql语义命名，避免与业务关联。</p><p>正例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">List&lt;PerformanceDTO&gt; listByMonthAndItemId(@Param(&quot;month&quot;) String month, @Param(&quot;itemId&quot;) Integer itemId);</span></span></code></pre></div><p>反例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">List&lt;PerformanceDTO&gt; getInternalData(@Param(&quot;month&quot;) String month, @Param(&quot;itemId&quot;) Integer itemId);</span></span></code></pre></div><p>反例中出现的不规范操作： get代表单个查询，批量查询的应该 list 开头。命名与业务关联，局限了dao方法的使用场景和范围，降低了方法的复用性，造成他人困惑以及重复造轮子。</p><h3 id="_6、boolean类型的属性命名规范" tabindex="-1">6、boolean类型的属性命名规范 <a class="header-anchor" href="#_6、boolean类型的属性命名规范" aria-label="Permalink to &quot;6、boolean类型的属性命名规范&quot;">​</a></h3><blockquote><p>类中布尔类型的变量，都不要加is，否则部分框架解析会引起序列化错误。反例：定义为基本数据类型 Boolean isDeleted；的属性，它的方法也是 isDeleted()，RPC在反向解析的时候，“以为”对应的属性名称是 deleted，导致属性获取不到，进而抛出异常。 这是阿里巴巴开发手册中的原文，我们团队的规定是：boolean 类型的类属性和数据表字段都统一使用 flag 结尾。虽然使用 isDeleted，is_deleted 从字面语义上更直观，但是比起可能出现的潜在错误，这点牺牲还是值得的。</p></blockquote><p>正例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">deletedFlag，deleted_flag，onlineFlag，online_flag</span></span></code></pre></div><h2 id="四、数据库-规范" tabindex="-1">四、数据库 规范 <a class="header-anchor" href="#四、数据库-规范" aria-label="Permalink to &quot;四、数据库 规范&quot;">​</a></h2><h3 id="_1-建表规范" tabindex="-1">1 建表规范 <a class="header-anchor" href="#_1-建表规范" aria-label="Permalink to &quot;1 建表规范&quot;">​</a></h3><p>表必备三字段：id, created_at, updated_at</p><ul><li>id 字段 Long 类型，单表自增，自增长度为 1</li><li>created_at 字段 datetime 类型，默认值 CURRENT_TIMESTAMP</li><li>updated_at 字段 datetime 类型，默认值 CURRENT_TIMESTAMP, On update CURRENT_TIMESTAMP</li></ul><h3 id="_2-枚举类表字段注释需要将所有枚举含义进行注释" tabindex="-1">2 枚举类表字段注释需要将所有枚举含义进行注释 <a class="header-anchor" href="#_2-枚举类表字段注释需要将所有枚举含义进行注释" aria-label="Permalink to &quot;2 枚举类表字段注释需要将所有枚举含义进行注释&quot;">​</a></h3><p>修改或增加字段的状态描述，必须要及时同步更新注释。</p><p>如下表的 sync_status 字段 同步状态 0 未开始 1同步中 2同步成功 3失败。</p><p>正例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CREATE TABLE \`t_change_data\` (</span></span>
<span class="line"><span style="color:#A6ACCD;">	\`id\` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#A6ACCD;">	\`sync_status\` TINYINT(3) UNSIGNED NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;同步状态 0 未开始 1同步中 2同步成功 3失败&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	\`sync_time\` DATETIME NULL DEFAULT NULL COMMENT &#39;同步时间&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	\`created_at\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="color:#A6ACCD;">	\`updated_at\` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="color:#A6ACCD;">	PRIMARY KEY (\`change_data_id\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><p>反例：</p><div class="language-plain"><button title="Copy Code" class="copy"></button><span class="lang">plain</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CREATE TABLE \`t_change_data\` (</span></span>
<span class="line"><span style="color:#A6ACCD;">	\`id\` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,</span></span>
<span class="line"><span style="color:#A6ACCD;">	\`sync_status\` TINYINT(3) UNSIGNED NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;同步状态 &#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	\`sync_time\` DATETIME NULL DEFAULT NULL COMMENT &#39;同步时间&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">	\`created_at\` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="color:#A6ACCD;">	\`updated_at\` DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,</span></span>
<span class="line"><span style="color:#A6ACCD;">	PRIMARY KEY (\`change_data_id\`)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="_3-合理结合业务给表字段添加索引和唯一索引" tabindex="-1">3 合理结合业务给表字段添加索引和唯一索引 <a class="header-anchor" href="#_3-合理结合业务给表字段添加索引和唯一索引" aria-label="Permalink to &quot;3 合理结合业务给表字段添加索引和唯一索引&quot;">​</a></h3><p>具体索引规范请参照《阿里巴巴 Java 开发手册》索引规约</p><h2 id="五、其他" tabindex="-1">五、其他 <a class="header-anchor" href="#五、其他" aria-label="Permalink to &quot;五、其他&quot;">​</a></h2><h3 id="_1、代码提交规范" tabindex="-1">1、代码提交规范 <a class="header-anchor" href="#_1、代码提交规范" aria-label="Permalink to &quot;1、代码提交规范&quot;">​</a></h3><ul><li>提交前应该先编译一次（idea里ctrl+F9），防止出现编译都报错的情况。</li><li>提交前先更新pull一次代码，提交前发生冲突要比提交后发生冲突容易解决的多。</li><li>提交前检查代码是否格式化，是否符合代码规范，无用的包引入、变量是否清除等等。</li><li>提交时检查注释是否准确简洁的表达出了本次提交的内容。</li></ul><h3 id="_2、maven项目" tabindex="-1">2、maven项目 <a class="header-anchor" href="#_2、maven项目" aria-label="Permalink to &quot;2、maven项目&quot;">​</a></h3><ul><li>pom禁止出现相同 groupId，artifactId 的依赖配置。</li><li>项目名称应该与 artifactId 保持一致。</li><li>定期检查jar包依赖关系，及时排除解决冲突的jar包。</li></ul><h3 id="_3、保持项目整洁" tabindex="-1">3、保持项目整洁 <a class="header-anchor" href="#_3、保持项目整洁" aria-label="Permalink to &quot;3、保持项目整洁&quot;">​</a></h3><ul><li><p>使用git，必须添加 .gitignore 忽略配置文件。</p></li><li><p>不要提交与项目无关的内容文件：idea配置、target包等。</p></li></ul>`,133),t=[p];function o(c,i,r,C,A,d){return n(),s("div",null,t)}const u=a(l,[["render",o]]);export{D as __pageData,u as default};
