(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			docEl.style.fontSize = 100 * clientWidth / 750 + 'px';
		};

	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
//点击弹窗消失
$(".test>ul>li:nth-of-type(2)").on("touchstart",function(){
		$(this).parent().parent().hide();
})
//不同dpr下不同的图片 
var h = window.innerHeight;
var w = window.innerWidth;
$(".wrap,.wrap-no,.test,.protocol,.preLoading").css({
	"minHeight": h + "px",
	"width": w + "px"
})
$(".wrap").parent().css({
	"background": "url(img/sy_bg@2x.png) no-repeat",
	"backgroundSize": "100% 100%",
	"backgroundAttachment":"fixed"

});
$(".wanted-item .caseIcon").css({
	"background": "url(img/rentCase@2x.png) no-repeat",
	"backgroundSize": "100% 100%"
})
var dpr = window.devicePixelRatio;
console.log(dpr)
if(dpr >=3) {
	$(".wrap").parent().css({
		"background": "url(img/sy_bg@3x.png) no-repeat ",
	    "backgroundSize": "cover"
//	    "backgroundAttachment": "fixed"
	});
	//首页
	$(".home>.head>.title").css({
		"background": "url(img/sy_title@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
		
	    
	});
	$(".home>.middle .leftimg").css({
		"background": "url(img/sy_des@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".home .middle .leftbtn").css({
		"background": "url(img/sy_btna@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
		
		
	    
	});
	$(".home .middle .rightimg").css({
		"background": "url(img/sy_des2@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".home .middle .rightbtn").css({
		"background": "url(img/sy_btnb@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	//搜索页
	$(".search .inp").css({
		"background": "url(img/ss_search@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".search .inp div").css({
		"background": "url(img/ss_sou@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".search .search_choose").css({
		"background": "url(img/ss_search2@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".search select").css({
		"background": "url(img/ss_xiala@3x.png) 85% 50% no-repeat",
		"backgroundSize": "20%",
		
	    
	});
	
	$(".search .searchBtn").css({
		"background": "url(img/ss_btnsou@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".search .search_bottom ul li:nth-of-type(1)").css({
		"background": "url(img/ss_btnzy@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".search .search_bottom ul li:nth-of-type(2)").css({
		"background": "url(img/ss_btnwo@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	
	//登记页
	$(".login .wantedBtn").css({
		"background": "url(img/dj_btnqz@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".login .rentBtn").css({
		"background": "url(img/dj_btncz@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".login .xiala").css({
		"background": "url(img/dj_xiala@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	//主页
	$(".personal-homePage .vip-member .oneCloud").css({
		"background": "url(img/zy_yi@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".personal-homePage .vip-member .twoCloud").css({
		"background": "url(img/zy_er@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".personal-homePage .vip-member .threeCloud").css({
		"background": "url(img/zy_san@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".personal-homePage .guan").css({
		"background": "url(img/zy_btnguan@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".personal-homePage .gai").css({
		"background": "url(img/zy_btngai@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	//
	$(".wantedLetter .deliver a").css({
		"background": "url(img/qz_btntou@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".space-empty .rent a").css({
		"background": "url(img/zy_btndian@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	$(".space-empty .rent li:nth-of-type(2)").css({
		"background": "url(img/zy_wei@3x.png) no-repeat",
		"backgroundSize": "100% 100%"
	    
	});
	//弹框
	
	$(".test-black").css({
		"background": "url(img/br_hei@3x.png)",
		"backgroundSize": "100% 100%"
	});
	$(".test-white").css({
		"background": "url(img/br_bai@3x.png)",
		"backgroundSize": "100% 100%"
	});
	$(".wanted-item .caseIcon").css({
	"background": "url(img/rentCase@3x.png) no-repeat",
	"backgroundSize": "100% 100%"
})
	$(".container>ul>.wifi>img").attr('src','img/slow@3x.png');

}