import{_ as o,c as s,a3 as t,L as l,R as e,d as h,b as m,a0 as d,a as g}from"./chunks/framework.DOiCuyYX.js";const w=JSON.parse('{"title":"sinergym学习","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/Sinergym项目/sinergym学习.md","filePath":"笔记/Sinergym项目/sinergym学习.md","lastUpdated":1716471346000}'),c={name:"笔记/Sinergym项目/sinergym学习.md"},p=e("h1",{id:"sinergym学习",tabindex:"-1"},[h("sinergym学习 "),e("a",{class:"header-anchor",href:"#sinergym学习","aria-label":'Permalink to "sinergym学习"'},"​")],-1),u=m('<ul><li><a href="https://ugr-sail.github.io/sinergym/compilation/main/pages/installation.html" target="_blank" rel="noreferrer">https://ugr-sail.github.io/sinergym/compilation/main/pages/installation.html</a></li></ul><h2 id="_1-版本依赖" tabindex="-1">1.版本依赖 <a class="header-anchor" href="#_1-版本依赖" aria-label="Permalink to &quot;1.版本依赖&quot;">​</a></h2><table><thead><tr><th>Sinergym version</th><th>Ubuntu version</th><th>Python version</th><th>nergyPlus version</th><th>---</th></tr></thead><tbody><tr><td>1.9.5</td><td>22.04 LTS</td><td>3.10.6</td><td>9.5.0</td><td>IDF</td></tr><tr><td>2.4.0</td><td>22.04 LTS</td><td>3.10.6</td><td>9.5.0</td><td>epJSON</td></tr><tr><td>2.5.0</td><td>22.04 LTS</td><td>3.10.6</td><td>23.1.0</td><td>epJSON</td></tr></tbody></table><img src="https://ugr-sail.github.io/sinergym/compilation/main/_images/general_blueprint.png" style="zoom:50%;"><h2 id="_2-sinergym的主要功能" tabindex="-1">2.Sinergym的主要功能 <a class="header-anchor" href="#_2-sinergym的主要功能" aria-label="Permalink to &quot;2.Sinergym的主要功能&quot;">​</a></h2><ul><li>Compatibility with simulation engines 与模拟引擎的兼容性,Python 和 EnergyPlus 之间的通信是使用 EnergyPlus Python API 作为中间件建立的。然而，更多的（例如OpenModelica）可以包含在后端，同时将来维护Gymnasium API。</li><li>Benchmark environments 基准环境.与RL社区的Atari 或 Mujoco 环境类似，我们正在设计一套用于基准测试和测试深度 RL 算法的环境。这些环境可能包括不同的建筑物、天气、行动/观察空间、功能奖励等。</li><li>Customizable environments 可定制的环境。我们的目标是提供一个允许以简单的方式修改实验设置的包。用户可以创建自己的环境，结合自己的建筑模型、天气、奖励、观察/动作空间、变量、执行器、环境名称等。用户还可以使用Sinergym中提供的这些预配置环境 并更改某些方面他不必对环境做出完整的定义，而可以从我们预先设计的环境开始。一些与模拟器直接相关的参数也可以设置为extra configuration 额外配置，例如人员占用、每个模拟小时的时间步长、运行周期等。</li><li>Customizable components 可定制的组件，Sinergym 可由第三方轻松扩展。按照已实现类的结构，可以为新环境创建新的自定义组件，例如函数奖励、包装器、控制器等。</li><li>Automatic Building Model adaptation to user changes 自动建筑模型适应用户的变化，许多环境定义的更新都需要在模拟开始之前更改建筑模型（epJSON文件）以使其适应这些新功能，Sinergym 将自动执行模拟。例如，使用另一个天气文件需要更新建筑位置和设计天数，使用新的观测变量需要更新Output:Variable 和 Output:Meter 字段，同样的情况发生在直接与模拟相关的额外配置上下文中，如果设置了天气变化，则带有噪声的天气将出现使用。这些新的建筑和天气文件版本保存在Sinergym输出文件夹中，保持原始版本不变。简而言之，Sinergym自动化模型适应的整个过程，以便用户只需定义他想要的环境。</li><li>...</li></ul><h2 id="_3-数据中心" tabindex="-1">3.数据中心 <a class="header-anchor" href="#_3-数据中心" aria-label="Permalink to &quot;3.数据中心&quot;">​</a></h2><h2 id="_4-weathers-天气" tabindex="-1">4.Weathers 天气 <a class="header-anchor" href="#_4-weathers-天气" aria-label="Permalink to &quot;4.Weathers 天气&quot;">​</a></h2><p>下载.epw文件</p><h2 id="_5-environments-环境" tabindex="-1">5.environments 环境 <a class="header-anchor" href="#_5-environments-环境" aria-label="Permalink to &quot;5.environments 环境&quot;">​</a></h2><p>Sinergym由三个主要组件组成：代理、通信接口和模拟。代理通过 Gymnasium 界面发送操作并接收来自环境的观察结果。同时，gym界面通过EnergyPlus Python API与模拟器引擎进行通信，提供管理执行器、仪表和变量等处理程序的功能，因此它们的当前值对模拟过程有直接影响。</p><p>下图更详细地显示了此过程：</p><p>建模模块与 API 处于同一级别，并允许在每集开始之前调整建筑模型。这使得 API 可以在环境中与用户的定义一起正确工作。</p><p>该方案非常抽象，因为这些组件执行一些额外的任务，例如处理输出的文件夹结构、在使用处理程序之前准备处理程序、在模拟期间启动数据收集的回调等等。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>从Sinergymv3.0.9 开始，这些环境是使用每个建筑物的 JSON 配置文件自动生成的，而不是使用环境构造函数中直接设置的参数手动注册每个环境 ID。请参阅<a href="https://ugr-sail.github.io/sinergym/compilation/main/pages/environments_registration.html#environments-configuration-and-registration" target="_blank" rel="noreferrer">环境配置与注册</a></p></div><h3 id="_5-3-available-parameters-可用参数" tabindex="-1">5.3.Available Parameters 可用参数 <a class="header-anchor" href="#_5-3-available-parameters-可用参数" aria-label="Permalink to &quot;5.3.Available Parameters 可用参数&quot;">​</a></h3><p>通过环境构造函数，我们可以配置实验环境的完整上下文，可以从上表中所示的Sinergym预定义环境开始，也可以创建一个新环境。Sinergym 最初提供非配置的建筑和天气。根据这些参数值，这些文件会进行更新，以使其适应此新功能，这将由 Sinergym 自动进行。例如，使用另一个天气文件需要更新建筑位置和设计天数，使用新的观测变量需要更新 Output:Variable和 Output:Meter 字段，同样的情况发生在直接与模拟相关的额外配置上下文中，如果设置了天气变化，则带有噪声的天气将出现使用。这些新的建筑和天气文件版本保存在 Sinergym 输出文件夹中，保持原始版本不变。</p><h3 id="_5-5-adding-new-buildings-for-environments-为环境添加新建筑" tabindex="-1">5.5.Adding new buildings for environments 为环境添加新建筑 <a class="header-anchor" href="#_5-5-adding-new-buildings-for-environments-为环境添加新建筑" aria-label="Permalink to &quot;5.5.Adding new buildings for environments 为环境添加新建筑&quot;">​</a></h3><p>用户可以修改现有环境或创建新的环境定义，纳入新的气候、行动和观察空间。此外，他们可以选择使用与当前支持的模型不同的构建模型 （epJSON 文件）。要添加与 Sinergym 一起使用的新建筑物，请按照下列步骤操作：</p><ol><li><p>Add your building file 将您的建筑文件 (epJSON) 添加到建筑物中。确保与Sinergym 中使用的 EnergyPlus 版本兼容。如果您使用旧版本的IDF 文件，建议使用IDFVersionUpdater 更新它，然后使用ConvertInputFormat将其转换为 epJSON 格式。这两个工具都可以在 EnergyPlus 安装文件夹中访问。</p></li><li><p>Adjusting building objects 调整建筑对象，例如RunPeriod and 和 SimulationControl 以满足用户需求，因为这些元素定义了 Sinergym 中的交互情节。</p></li><li><p>我们需要分别确定我们想要观察和控制的建筑物的组成部分 。这是该过程中最具挑战性的部分。通常，用户已经熟悉建筑物，因此提前知道元素的名称和键 ，如果没有，可以遵循以下过程。</p></li></ol><p>OutputVariables and 为了查看和的不同 Meters ，可以直接使用 EnergyPlus 进行初步模拟，无需建立任何控制流程。可以查阅输出文件，特别是带有 RDD RDD扩展名的文件来识别可能的可观察变量。</p><p>挑战在于知道名称，但不知道可能的 key 密钥 EnergyPlus 最初不提供此信息）。这些名称可用于定义环境（请参阅步骤 3）。如果密钥不正确，将通知该错误并在输出中提供一个名为 data_available.txt 的文件，因为它已经与 EnergyPlus API 连接。该文件将包含所有可控制的操作调度程序和所有可观察的变量, 这次带有它们各自的 Keys 键, 从而能够正确定义环境。</p><p>获得此信息后，下一步就是使用建筑模型定义环境。我们有几种选择：</p><p>a. 直接使用 Sinergym 环境构造函数。用于构建观察和控制的参数在类中进行了解释，并且应以与 EnergyPlus API 相同的格式指定。</p><p>b. 设置配置以直接注册环境 ID。有关详细信息，请参阅文档环境配置和注册。Sinergym 将验证所建立的配置是否完全正确，并通知任何潜在的错误。</p><h2 id="_6-environments-configuration-and-registration-环境配置和注册" tabindex="-1">6.Environments Configuration and Registration 环境配置和注册 <a class="header-anchor" href="#_6-environments-configuration-and-registration-环境配置和注册" aria-label="Permalink to &quot;6.Environments Configuration and Registration 环境配置和注册&quot;">​</a></h2><p>定义新环境时，我们可以使用 Sinergym 环境构造函数并填充我们在部分中解释的参数。</p><p>可以基于同一建筑物制作许多环境，具体取决于其配置。因此，创建（或注册 Gymnasium ID）所有这些可能会很乏味。</p><p>Sinergym 有一个系统可以自动执行此过程。从sinergym/data/default_configuration, 中托管的JSON文件 ，将为每个可能的配置构建一组参数以及关联的ID，并将自动在gymnasium中注册。</p><p>本节将解释这些 JSON 配置定义的结构。此外，这种结构有利于观察变量（ time_variables、variables 和 meters ）和动作变量的定义(actuators)。</p><p>Sinergym 不会像环境构造函数那样以 EnergyPlus Python API 格式进行定义，而是会读取这个更简单的结构并自动解析为 EnergyPlus Python API 格式。</p><table><thead><tr><th>Key 钥匙</th><th>Optional 选修的</th><th>Description 描述</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>id_base 基础序号</td><td>No不</td><td>Base name to refer to the ID’s with this building model.<br>引用此建筑模型的 ID 的基本名称。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>building_file建筑文件</td><td>No不</td><td>Building model file allocated in <br>建筑模型文件分配在sinergym/data/buildings/..</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>weather_specification天气规范</td><td>No不</td><td>Set of weather to generate an environment with each one, allocated in 一组天气，用于生成每个环境的环境，分配在sinergym/data/weather/..</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>config_params配置参数</td><td>Yes是的</td><td>Extra parameters for the environments; it is optional.环境的额外参数；它是可选的。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>variation变化</td><td>Yes是的</td><td>Create additionally a version of all environments with stochasticity in weather.另外创建一个具有天气随机性的所有环境的版本。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>max_ep_data_store_num</td><td>Yes是的</td><td>Max storage in Sinergym Sinergym episodes, by default 10.剧集中的最大存储空间，默认为 10。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>time_variables时间变量</td><td>No不</td><td>time_variables list definition.列表定义。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>variables变量</td><td>No不</td><td>variables dict definition.字典定义。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>meters米</td><td>No不</td><td>meters dict definition.字典定义。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>actuators执行器</th><th>No不</th><th>actuators dict definition.字典定义。</th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>action_space动作空间</td><td>No不</td><td>Gymnasium action space definition.体育馆活动空间定义。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>action_space_discrete动作空间离散</td><td>Yes是的</td><td>If you want that 如果您希望Sinergym Sinergym auto-generate a discrete version of environments, you should write this space too.自动生成环境的离散版本，您也应该编写此空间。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>only_discrete仅离散</td><td>Yes是的</td><td>If you have specified action_space and a discrete_space based on action_space (required, see 如果您指定了action_space和基于action_space的discrete_space（必需，请参阅DiscretizeEnv DiscretizeEnv), you can only register discrete version with this flag），则只能使用此标志注册离散版本</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>reward报酬</td><td>No不</td><td>Reward class name to use.要使用的奖励类名称。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>reward_kwargs奖励_kwargs</td><td>No不</td><td>Reward kwargs for Reward class constructor in dict format.字典格式的奖励类构造函数的奖励 kwargs。</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>',33);function y(_,b,f,v,S,P){const a=d("ArticleMetadata"),i=d("ClientOnly"),r=d("NolebaseGitContributors"),n=d("NolebaseGitChangelog");return g(),s("div",null,[p,t(i,null,{default:l(()=>[t(a)]),_:1}),u,t(r),t(n)])}const I=o(c,[["render",y]]);export{w as __pageData,I as default};
