var MessageTest = (function($,undefined){
	//变量缓存
	var $showInfo = $("#showInfo");
	var $showError = $("#showError");
	var $showWarning = $("#showWarning");
	var $alertInfo = $("#alertInfo");
	var $confirmQuestion = $("#confirmQuestion");
	var $showAllOptions = $("#showAllOptions");
	var  loadOnce = true;

	//test
	var _showInfo = function(){
		Message.show({Msg: "这是一个showInfo", iconImg: 'info'});
	};

	var _showError = function(){
		Message.show({Msg: "这是一个showError", iconImg: 'error'});
	};

	var _showWarning = function(){
		Message.show({Msg: "这是一个showWarning", iconImg: 'warning',isHideDate: 6000});
	};

	var _alertInfo = function(){
		Message.alert({Msg: "这是一个alertInfo", iconImg: 'info'});
	};

	var _confirmQuestion = function(){
		Message.confirm({
            Msg: "确定删除吗？",
            okSkin: 'danger',
            iconImg: 'question',
            isModal: false
        }).on(function (flag) {
            if (flag) {
                Message.alert({Msg: "删除", iconImg: 'info'});
            }else{
            	Message.alert({Msg: "不删除", iconImg: 'info'});
            }
		})
    };

    var _showAllOptions = function(){
    	Message.confirm({
        	title: "我是title",
            Msg: "我是Msg",
            okSkin: 'danger',
            iconImg: 'question',
            btnOk: "我是确定", 
            btnCancel: "我是取消", 
            isClose: true,
            isModal: false
        }).on(function (flag) {
           	if (flag) {
                Message.alert({Msg: "亲，你选择了确定", iconImg: 'info',isClose: false});
            }
        });
    }

    //事件绑定
    var  _bindMethod = function(){
    	$showInfo.bind("click",_showInfo);
    	$showError.bind("click",_showError);
    	$showWarning.bind("click",_showWarning);
    	$alertInfo.bind("click",_alertInfo);
    	$confirmQuestion.bind("click",_confirmQuestion);
    	$showAllOptions.bind("click",_showAllOptions);
    };

    //初始化
    var  _init = function(){
    	if(loadOnce){
    		_bindMethod();
    	}
    };

    _init();
})(jQuery)
