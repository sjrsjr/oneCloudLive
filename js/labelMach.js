//图片预加载部分
var bgs = ['lbg@2x.png', 'lbg2@2x.png'];
var labels = $(".wanted-label-list>li");
for(var i = 0; i < labels.length; i++) {
	labels[i].style.backgroundImage = "url(img/" + bgs[0] + ")";
	labels[i].style.backgroundSize = "100% 100%";
	labels[i].style.backgroundRepeat = "no-repeat";
}
var wantList = [];
var checkedIsTrue = false;
var touchCount = 0;
for(var i = 0; i < labels.length; i++) {
	$(labels[i]).on('touchend', function(e) {
		if(touchCount < 3 && !$(this).attr('data')) {
			touchCount++;
			$(this)[0].style.backgroundImage = "url(img/" + bgs[1] + ")";
			$(this)[0].style.color = '#fff';
			$(this).attr('data', 'checked');
			//  console.log( $(this).text());
			wantList.push($(this).text());
			console.log(wantList);
		} else if($(this).attr('data')) {
			$(this)[0].style.backgroundImage = "url(img/" + bgs[0] + ")";
			$(this)[0].style.color = 'black';
			$(this).removeAttr('data', 'checked');
			for(var i = 0; i < wantList.length; i++) {
				if(wantList[i] == $(this).text()) {
					wantList.splice(i, 1);
					break;
				}
				console.log(wantList);
			}
			touchCount--;
		} else {
			$(".pleaseSelect").show();
			return;
		}
		console.log(touchCount);
		if(touchCount >=1 && touchCount <= 3) {
			checkedIsTrue = true;
		}else{
		checkedIsTrue = false;	
		}
		console.log(checkedIsTrue);
	})

}

//求租小图标
var arrWantedIcon = ['qz_iconche@2x.png', 'qz_iconqian@2x.png', 'qz_iconren@2x.png', 'qz_iconjia@2x.png', 'qz_btnphone@2x.png'];
var wantedIcons = $(".wanted-item>div>.icon");
for(var i = 0; i < wantedIcons.length; i++) {
	wantedIcons[i].style.backgroundImage = "url(img/" + arrWantedIcon[i] + ")";
	wantedIcons[i].style.backgroundSize = "contain";
	wantedIcons[i].style.backgroundRepeat = "no-repeat";
}

//字数验证提示
function vefity(obj, min, max) {
	var len = obj.value.length;

	console.log(len);
	if(len < min) {
//		$(obj).parent().find(".p1").show();
		$(obj).siblings(".p1").show();
//		
	} else if(len >= min) {
		$(obj).siblings(".p1").hide();
		
		if(len >= max) {
			obj.value.substr(0, max);
			$(obj).siblings(".p2").show();
		} else {
			$(obj).siblings(".p2").hide();
			obj.setAttribute("data", 'success');
			console.log(obj.getAttribute("data"))
		}
	}

}