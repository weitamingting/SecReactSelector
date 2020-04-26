(function(){
	function _generalInitHtml( data, context ) {
		var firstSelector = context.options.firstSelector,
			secSelector = context.options.secSelector;
		// 生成公司选择
		var firstStr = '';
		firstStr += `<option value="">请选择公司</option>`;
		data.forEach(function( item, index ){
			firstStr += `<option value="${item.value}">${item.name}</option>`;
		});
		$(firstSelector).html(firstStr);
		$(firstSelector).on('change', function(){
			var firstVal = $(this).val();
			var currentFirst = data.filter(function( item ){
				return firstVal === item.value;
			});

			if (currentFirst.length > 0){
				var currentDps = currentFirst[0].children;
				var secStr = '';
				secStr += `<option value="">请选择部门</option>`;
				currentDps.forEach( function( dataItem ) {
					secStr += `<option value="${dataItem.value}">${dataItem.name}</option>`;
				});
				$(secSelector).html(secStr);
			} else {
				var secStr = `<option value="">请选择部门</option>`;
				$(secSelector).html(secStr);
			}

		})
	}

	function _generalHtmlAndSetValue( context, value ) {
		var firstSelector = context.options.firstSelector,
			secSelector = context.options.secSelector,
			firstVal = value.firstVal,
			secVal = value.secVal,
			_this = this;
		var firstStr = '';
		firstStr += `<option value="">请选择公司</option>`;
		context.data.forEach(function( item, index ){
			firstStr += `<option value="${item.value}">${item.name}</option>`;
		});
		$(firstSelector).html(firstStr);
		$(firstSelector).val(firstVal);
		var currentFirst = context.data.filter(function( item ){
			return firstVal == item.value;
		});
		if (currentFirst.length > 0){
			var currentDps = currentFirst[0].children;
			var secStr = '';
			secStr += `<option value="">请选择部门</option>`;
			currentDps.forEach( function( dataItem ) {
				secStr += `<option value="${dataItem.value}">${dataItem.name}</option>`;
			});
			$(secSelector).html(secStr);
		} else {
			var secStr = `<option value="">请选择部门</option>`;
			$(secSelector).html(secStr);
		};
		$(secSelector).val(secVal);
	}

	/** 
	 * options：
	 * firstSelector：第一级select元素选择器
	 * secSelector：第二级select元素选择器
	 * data：静态数据，如果设置了url则此选项失效
	 * url：请求数据的ajax接口地址，如果设置了url则data失效
	 * method：ajax请求方法
	 * ajaxParam：ajax请求参数
	**/
	function SecReactSelector( options ){
		if (!options) return;
		this.options = options;
		this.url = options.url ? options.url : null;
		this.data = [];
		this.fakeData = [];
		var _this = this;

		if (this.url){
			$.ajax({
				url : options.url,
				cache : false,
				async : true,
				type: options.method ? options.method : "GET",
				data: options.ajaxParam ? options.ajaxParam : {},
				beforeSend : function() {
				},
				success: function(res){
					_this.data = res;

					_generalInitHtml(_this.data, _this);

					_this.fakeData = res;
				},
				complete : function() {
				}
			});
		} else {
			this.data = options.data;
			_generalInitHtml(options.data, this);
		}

	}
	
	/**
	   setValue({
		firstVal: '',
		secVal: ''
	   })
	   firstVal：一级选择器的值
	   secVal：二级选择器的值
	 **/
	SecReactSelector.prototype.setValue = function (value){
		var _this = this;
		// 当已经有部门数据的时候，不再监听属性变化
		if (this.data.length > 0) {
			_generalHtmlAndSetValue(this, value);
		} else {
			// 如果没有部门数据说明ajax接口信息还未返回，需要监听数据对象，当对象变化时重新触发dom渲染
			Object.defineProperty(_this, 'fakeData', {
				set: function (val) {
					// 设置部门
					_generalHtmlAndSetValue(_this, value);
				}
			});
		};
	};
	
	window.SecReactSelector = SecReactSelector;
})();