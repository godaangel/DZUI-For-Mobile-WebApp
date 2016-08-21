var Toast = function(){
	this.message = "toast";
	this.position = "default"; //md ,top ,bottom
	this.timeout = 1500;
};

Toast.prototype = {
	init: function(data){
		if($('.toast').find('.dz_toast_'+data.position).attr('class')){
			return false;
		}
		var _this = this;
		_this.message = data.message || _this.message;
		_this.position = data.position || _this.position;
		_this.timeout = data.timeout || _this.timeout;

		var timestamp = new Date().getTime();
		var toastTpl = '<div class="toast toast_' + timestamp + '">'
					        + '<div class="dz_toast dz_toast_' + _this.position + '">'
					            + '<p class="dz_toast_content color-fff">' + _this.message + '</p>'
					        + '</div>'
					    + '</div>';

		$('body').append(toastTpl);

		_this.show(timestamp);
		setTimeout(function(){
			_this.hide(timestamp);
		},_this.timeout);
	},
	show: function(timestamp){
		setTimeout(function(){
			$(".toast_" + timestamp).addClass("dz_toast_show");
		},0);
	},
	hide: function(timestamp){
		$(".toast_" + timestamp).removeClass("dz_toast_show");
		setTimeout(function(){
			$(".toast_" + timestamp).remove();
		},400);
	}
};