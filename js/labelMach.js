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