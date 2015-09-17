var fullname_multilingual = {
	en: 'Yizhe Wang',
	zh: '王 艺 哲'
};

var educations_multilingual = {
	en: [
		{
			degree: 'M.S. in Computer Science',
			school: '<a href="http://csc.villanova.edu" target="_blank">Villanova University</a>, Philadelphia, U.S.A',
			period: 'May. 2016',
			course: 'Coursework: Internet of Things, Database System, Algorithms, Operating Systems, Programming Languages'
		},
		{
			degree: 'M.S. in Construction Management',
			school: '<a href="http://www.civ.neu.edu" target="_blank">Northeastern University</a>, Boston, U.S.A',
			period: 'May. 2011',
			course: 'Coursework: Probability and Statistics, Engineering Project Management'
		},
		{
			degree: 'B.S. in Hydraulic Engineering',
			school: '<a href="http://www.hydr.tsinghua.edu.cn" target="_blank">Tsinghua University</a>, Beijing, China',
			period: 'July. 2009',
			course: 'Coursework: Computer Networks, Programming in C++'
		}
	],
	zh: [
		{
			degree: '计算机科学 硕士',
			school: '<a href="http://csc.villanova.edu" target="_blank">Villanova University</a>, 费城, 美国',
			period: '2016年5月',
			course: '相关课程：物理网、数据库基础、数据结构与算法、操作系统、编程语言'
		},
		{
			degree: '工程项目管理 硕士',
			school: '<a href="http://www.civ.neu.edu" target="_blank">Northeastern University</a>, 波士顿, 美国',
			period: '2011年5月',
			course: '相关课程：概率论与数理统计、工程项目管理'
		},
		{
			degree: '水利水电工程 学士',
			school: '<a href="http://www.hydr.tsinghua.edu.cn" target="_blank">清华大学</a>, 北京, 中国',
			period: '2009年7月',
			course: '相关课程：计算机网络、程序设计基础'
		}
	]
};

var skills_multilingual = {
	en: [
		{
			type: 'Languages',
			details: 'Java, JavaScript, Python, PL/SQL'
		},
		{
			type: 'Framework',
			details: 'AngularJS, ASP.NET MVC'
		},
		{
			type: 'Development Approach',
			details: 'Git, Agile with Scrum, Test-Driven-Development'
		}
		],
	zh: [
		{
			type: '开发语言',
			details: 'Java, JavaScript, Python, PL/SQL'
		},
		{
			type: '开发框架',
			details: 'AngularJS, ASP.NET MVC'
		},
		{
			type: '开发模式',
			details: 'Git, Scrum 敏捷开发, 测试驱动开发'
		}
	]
};

var experiences_multilingual = {
	en: [
		{
			jobTitle: 'Intern Software Developer',
			location: 'FIS, Philadelphia, PA',
			period: 'June. 2015 - July. 2015',
			details: [
				'Extensive research on technical feasibility of a new product in plan.',
				'Chose Raspberry Pi as the basis of the product and procured necessary parts',
				'Built up a sample product with hardware parts.',
				'Full documentation of progress and and collaboration with the team.'
			]
		},
		{
			jobTitle: 'Intern .NET Developer',
			location: 'AmeriHealth Administrators, Philadelphia, PA',
			period: 'May. 2014 - Sept. 2014',
			details: [
				'Developed tools with .NET frameworks to facilitate other team member\'s work.',
				'Adopted Scrum approach in projects.',
				'Used Microsoft Team-Foundation-Server (TFS) for source control.'
			]
		}
	],
	zh: [
		{
			jobTitle: '软件工程师实习',
			location: 'FIS, 费城',
			period: '2015年6月 - 2015年7月',
			details: [
				'大量阅读参考文献，调研分析新产品的技术可行性',
				'选择树莓派 (Raspberry Pi) 作为新产品的基本载体，并进行相关配件的采购',
				'利用已有配件制作出一个样品',
				'在公司Wiki上及时更新项目进展和技术文档，与在印度的海外组员进行合作'
			]
		},
		{
			jobTitle: '.NET 程序员实习',
			location: 'AmeriHealth Administrators, 费城',
			period: '2014年5月 - 2014年9月',
			details: [
				'利用.NET 框架开发一些实用工具，为其他程序员的日常工作提供便利',
				'在项目中遵循 Scrum 敏捷开发理念',
				'熟悉并使用微软的 Team-Foundation-Server (TFS) 进行代码版本控制'
			]
		}
	]
};

var projects_multilingual = {
	en: [
		{
			projectTitle: 'Front-end development with AngularJS',
			location: '',
			period: 'Aug. 2015',
			details: [
				'Designed UI and functionality from scratch.',
				'Implemented with AngularJS for instant content refreshing.',
				'Familiar with AngularJS MVVM framework and two-way data binding.',
				'Used Git for version control, project URL: <a href="https://wangyiz4262.github.io/leetcode/" target="_blank">https://wangyiz4262.github.io/leetcode/</a>'
			]
		},
		{
			projectTitle: 'A Raspberry Pi based temperature - luminosity sensing device',
			location: '',
			period: 'April. 2015',
			details: [
				'Built up an IoT device with Raspberry Pi, temperature sensor and luminosity sensor.',
				'Presented the relationship between temperature and luminosity with a RESTful service created by Django framework.',
				'Understood the idea of MTV framework by Django, and get my Python skill honed.',
				'Used Git for version control, project URL: <a href="https://github.com/wangyiz4262/iotproject/">https://github.com/wangyiz4262/iotproject/</a>.'
			]
		},
		{
			projectTitle: 'Full-stack web development',
			location: 'AmeriHealth Administrators, Philadelphia, PA',
			period: 'Aug. 2014 - Sept. 2014',
			details: [
				'Performed as full-stack engineer for developing data retrieval service from SQL Server.',
				'Implemented the web service with ASP.NET MVC 4.',
				'Saved 80% of time for developers when using this application instead of writing queries in SQL Server.'
			]
		},
		{
			projectTitle: 'Auto generator for Visual Studio solutions',
			location: 'AmeriHealth Administrators, Philadelphia, PA',
			period: 'June. 2014 - July. 2014',
			details: [
				'Created Visual Studio solutions automatically instead of manual operation.',
				'Saved 90% of effort for developers when creating Visual Studio solutions.',
				'Followed Test-Driven-Development approach (TDD) as writing unit test before implementing every function.',
				'Documented necessary instructions for user manual.'
			]
		},
		{
			projectTitle: 'Writing huge XML files with low memory cost',
			location: 'AmeriHealth Administrators, Philadelphia, PA',
			period: 'May. 2014',
			details: [
				'Applied rules of Scrum for development of the system.',
				'Generated huge XML files with content of different level of randomness.',
				'Accelerated testing progress by customizing the size of loaded XML file.'
			]
		}
	],
	zh: [
		{
			projectTitle: 'AngularJS 前端开发',
			location: '',
			period: '2015年8月',
			details: [
				'产品功能设计及 UI 设计',
				'利用 AngularJS 实现即时内容更新',
				'深入理解 AngularJS 的 MVVM 框架设计思想及数据双向绑定的实现',
				'使用 Git 进行代码版本控制，项目URL：<a href="https://wangyiz4262.github.io/leetcode/" target="_blank">https://wangyiz4262.github.io/leetcode/</a>'
			]
		},
		{
			projectTitle: '基于树莓派的光强-温度感应器',
			location: '',
			period: '2015年4月',
			details: [
				'利用树莓派和光强、温度感应器组装起一个物联网设备，用来感应温度与日光强度变化间的关系',
				'使用 Django 框架搭建一个 RESTful 服务用来展示实验结果',
				'理解 Django 的 MTV 框架设计思想，并训练 Python 编程能力',
				'使用 Git 进行代码版本控制，项目URL：<a href="https://github.com/wangyiz4262/iotproject">https://github.com/wangyiz4262/iotproject</a>'
			]
		},
		{
			projectTitle: '全栈 Web 服务开发',
			location: 'AmeriHealth Administrators, 费城',
			period: '2014年8月 - 2014年9月',
			details: [
				'利用 ASP.NET MVC 4 框架同时进行前台和后台的开发',
				'从服务器获取自定义范围的错误日志，在网页上动态展示',
				'避免打开 SQL Server，为开发人员查看错误日志节约 80% 的时间'
			]
		},
		{
			projectTitle: 'Visual Studio Solution 自动生成器',
			location: 'AmeriHealth Administrators, 费城',
			period: '2014年6月 - 2014年7月',
			details: [
				'自动生成具有自定义结构的 Visual Studio 项目',
				'因减少手工操作从而节约 90% 用于创建新项目的时间',
				'为每一个新建函数进行单元测试，遵循测试驱动开发的开发流程',
				'及时书写技术文档和用户使用手册'
			]
		},
		{
			projectTitle: '低内存占用生成大体积 XML',
			location: 'AmeriHealth Administrators, 费城',
			period: '2014年5月',
			details: [
				'遵循 Scrum 敏捷开发理念',
				'使用.NET 框架中 Stream IO 方式读取 XML 样本文件，并同步生成内容随机的 XML 文件',
				'生成的 XML 文件大小可根据需要自定义'
			]
		}
	]
};