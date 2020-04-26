# SecReactSelector
一个基于jQuery，支持ajax取值/设置值的万能二级联动选择器控件，可自动监听ajax并在成功接收数据后设置选择器值
[效果演示](https://weitamingting.github.io/SecReactSelector/ "效果演示")

## 使用

```html
<script src="/path/to/sec-react-selector.min.js"></script>
```
```js
    var data = [
		{
			name: '某某青岛奥威机车车辆股份有限公司',
			value: '0',
			children: [
				{"value":"1","name":"规划发展部"},
				{"value":"2","name":"运营管理部"},
				{"value":"3","name":"总经理办公室"},
				{"value":"4","name":"法律事务部"},
				{"value":"5","name":"人力资源部"},
				{"value":"6","name":"财务部"},
				{"value":"7","name":"质量管理部"},
				{"value":"8","name":"信息技术部"},
				{"value":"9","name":"企业文化部"},
				{"value":"10","name":"审计与风险部"},
				{"value":"11","name":"档案室"},
				{"value":"17","name":"检修服务事业部"},
				{"value":"18","name":"海外事业部"},
				{"value":"19","name":"新产业事业部"},
				{"value":"20","name":"科技发展部"},
				{"value":"21","name":"技术中心"},
				{"value":"22","name":"技术工程部"},
				{"value":"23","name":"国家工程实验室/研究中心"},
				{"value":"24","name":"计量理化中心"},
				{"value":"25","name":"生产部"},
				{"value":"26","name":"物流中心"},
				{"value":"27","name":"安全环保部"},
				{"value":"28","name":"资产管理部"},
				{"value":"29","name":"采购部"},
				{"value":"30","name":"保卫部"},
				{"value":"31","name":"车体分厂"},
				{"value":"32","name":"转向架分厂"},
				{"value":"33","name":"总装分厂"},
				{"value":"34","name":"动能供应分厂"},
				{"value":"35","name":"工会"},
				{"value":"36","name":"党委办公室"},
				{"value":"37","name":"组织部"},
				{"value":"38","name":"团委"},
				{"value":"39","name":"纪委办公室"},
				{"value":"40","name":"党委巡察办公室"}
			]
		},
		{
			name: '武汉维保中心',
			value: '1',
			children: [
				{"value":"101","name":"综合管理部"},
				{"value":"102","name":"市场部"},
				{"value":"103","name":"财务部"},
				{"value":"104","name":"采购物流部"},
				{"value":"105","name":"技术质量部"},
				{"value":"106","name":"部件检修技术部研究部"},
				{"value":"107","name":"生产部"},
				{"value":"108","name":"安全生产办公室"},
				{"value":"109","name":"青岛分公司"},
				{"value":"110","name":"西安分公司"}
			]
		},
		{
			name: '佛山某某奥威车辆公司',
			value: '2',
			children: [
				{"value":"201","name":"佛山某某奥威车辆公司"}
			]
		},
		{
			name: '温州某某奥威车辆公司',
			value: '3',
			children: [
				{"value":"301","name":"温州某某奥威车辆公司"}
			]
		},
		{
			name: '成都某某奥威车辆公司',
			value: '4',
			children: [
				{"value":"401","name":"综合管理部"},
				{"value":"402","name":"财务部"},
				{"value":"403","name":"技术中心"},
				{"value":"404","name":"检修服务部"},
				{"value":"405","name":"生产部"},
				{"value":"406","name":"采购物流部"},
				{"value":"407","name":"制造中心"},
				{"value":"408","name":"质量管理部"}
			]
		},
		{
			name: '郑州某某奥威车辆公司',
			value: '5',
			children: [
				{"value":"501","name":"郑州某某奥威车辆公司"}
			]
		},
		{
			name: '天津某某奥威轨道车辆有限公司',
			value: '6',
			children: [
				{"value":"601","name":"天津某某奥威轨道车辆有限公司"}
			]
		},
		{
			name: '科技公司',
			value: '7',
			children: [
				{"value":"701","name":"科技公司"}
			]
		},
		{
			name: '某某成都公司',
			value: '8',
			children: [
				{"value":"801","name":"总经理（董事会）办公室"},
				{"value":"802","name":"企划部"},
				{"value":"803","name":"财务部"},
				{"value":"804","name":"人力资源部（党委干部部）"},
				{"value":"805","name":"党委办公室（党委组织部）"},
				{"value":"806","name":"党委宣传部（企业文化部）"},
				{"value":"807","name":"纪委"},
				{"value":"808","name":"工会办公室"},
				{"value":"809","name":"权益保障部"},
				{"value":"810","name":"团委办公室"},
				{"value":"811","name":"社会事务部（党委老干部部）"},
				{"value":"812","name":"审计风险部（法律事务办公室）"},
				{"value":"813","name":"信息技术部"},
				{"value":"814","name":"质量管理部"},
				{"value":"818","name":"技术部（精益生产办公室）"},
				{"value":"819","name":"技术管理部"},
				{"value":"820","name":"计量理化检测中心"},
				{"value":"821","name":"安全环保部（武装保卫部）"},
				{"value":"822","name":"生产部"},
				{"value":"823","name":"采购部"},
				{"value":"824","name":"资产能源管理中心"},
				{"value":"825","name":"物流中心"},
				{"value":"826","name":"城轨分厂"},
				{"value":"827","name":"客车分厂"},
				{"value":"828","name":"转向架分厂"},
				{"value":"829","name":"电气分厂"}
			]
		},
		{
			name: '某某广东公司',
			value: '9',
			children: [
				{"value":"901","name":"公司领导"},
				{"value":"902","name":"党群工作部"},
				{"value":"903","name":"综合管理部"},
				{"value":"904","name":"人力资源部"},
				{"value":"905","name":"财务部"},
				{"value":"906","name":"事业部"},
				{"value":"909","name":"质量管理部"},
				{"value":"910","name":"制造安全部"},
				{"value":"911","name":"采购部"},
				{"value":"912","name":"资产管理部"}
			]
		}
	]

	var srSelector = new SecReactSelector({
		firstSelector: '#first-selector',
		secSelector: '#second-selector',
		data: data
	})
	
	$("#set-value").on('click', function() {
		setValue()
	})

	function setValue() {
		srSelector.setValue({
			firstVal: '9',
			secVal: '901'
		})
	}

	// ajax请求联动选择器的数据
	var ajaxSelector = new SecReactSelector({
		firstSelector: '#ajax-first-selector',
		secSelector: '#ajax-second-selector',
		url: '/test.json'
	})

	// 可自动监听ajax是否结束，等待ajax执行结束后进行选择器联动赋值
	ajaxSelector.setValue({
		firstVal: '9',
		secVal: '901'
	})

	$("#ajax-set-value").on('click', function() {
		ajaxSetValue()
	})

	function ajaxSetValue() {
		ajaxSelector.setValue({
			firstVal: '6',
			secVal: '601'
		})
	}
```
## 选项说明

### 初始化选项
`new SecReactSelector( options )`

`options`：

`firstSelector`：第一级select元素选择器

`secSelector`：第二级select元素选择器

`data`：静态数据，如果设置了url则此选项失效

`url`：请求数据的ajax接口地址，如果设置了url则data失效

`method`：ajax请求方法

`ajaxParam`：ajax请求参数

### 方法

`setValue()`

`selectorInstance.setValue({
    firstVal: '一级选择器值',
    secVal: '二级选择器值'
})`