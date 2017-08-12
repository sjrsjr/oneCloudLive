var imgSrc=['img/sy_bg@2x.png','img/sy_bg@3x.png','img/sy_btna@2x.png','img/sy_btna@3x.png','img/sy_btnb@2x.png','img/sy_btnb@3x.png','img/sy_check@2x.png','img/sy_check@3x.png','img/sy_des@2x.png','img/sy_des@3x.png','img/sy_des2@2x.png','img/sy_des2@3x.png','img/sy_title@2x.png','img/sy_title@3x.png','img/sy_uncheck@2x.png','img/sy_uncheck@3x.png','img/dj_btncz.png','img/dj_btncz@3x.png','img/dj_btnqz@2x.png','img/dj_btnqz@3x.png','img/dj_fz@2x.png','img/dj_fz@3x.png','img/qz_btnphone@2x.png','img/qz_btnphone@3x.png','img/qz_iconche@2x.png','img/qz_bi@3x.png','img/qz_btnok@2x.png','img/qz_btnok@3x.png','img/qz_iconche@2x.png','img/qz_iconche@3x.png','img/qz_iconjia@2x.png','img/qz_iconjia@3x.png','img/qz_iconqian@2x.png','img/qz_iconqian@3x.png','img/qz_iconren@2x.png','img/qz_iconren@3x.png','img/qz_btntou@2x.png','img/qz_btntou@3x.png','img/cz_btncha@2x.png','img/cz_btncha@3x.png','img/cz_btnok@2x.png','img/cz_btnok@3x.png','img/cz_toudi@2x.png','img/cz_toudi@3x.png','img/cz_wenzi@2x.png','img/cz_wenzi@3x.png','img/zy_bai@2x.png','img/zy_bai@3x.png','img/zy_btngai@2x.png','img/zy_btngai@3x.png','img/zy_btnguan@2x.png','img/zy_btnguan@3x.png','img/zy_btnwo@2x.png','img/zy_btnwo@3x.png','img/zy_btnzhu@2x.png','img/zy_btnzhu@3x.png','img/zy_er@2x.png','img/zy_er@3x.png','img/zy_hei@2x.png','img/zy_hei@3x.png','img/zy_san@2x.png','img/zy_san@3x.png','img/zy_yi@2x.png','img/zy_yi@3x.png','img/zy_btndian@2x.png','img/zy_btndian@3x.png','img/zy_wei@2x.png','img/zy_wei@3x.png','img/br_bai@2x.png','img/br_bai@3x.png','img/br_di@2x.png','img/br_di@3x.png','img/br_hei@2x.png','img/br_hei@3x.png','img/br_btnwo@2x.png','img/br_btnwo@3x.png','img/br_dibu@2x.png','img/br_dibu@3x.png','img/br_wen@2x.png','img/br_wen@3x.png','img/br_btnwod@2x.png','img/br_btnwod@3x.png','img/br_dibua@2x.png','img/br_dibua@3x.png','img/br_wenzi@2x.png','img/br_wenzi@3x.png','img/slow@2x.png','img/slow@3x.png','img/add@2x.png','img/add@3x.png','img/down@2x.png','img/down@3x.png','img/r1@2x.png','img/r1@3x.png','img/r2@2x.png','img/r2@3x.png','img/r3@2x.png','img/r3@3x.png','img/drop_bg@2x.png','img/drop_bg@3x.png','img/drop_right@2x.png','img/drop_right@3x.png'];
var imgNum=0;
for(var i=0;i<imgSrc.length;i++){
       var img = new Image();
		img.src = imgSrc[i];
		img.index=i;
		img.onload = function(){
			imgNum++;
//			console.log("第"+this.index+"张图加载完毕");
			$(".loading-text").text("已完成"+Math.ceil(imgNum/imgSrc.length*100)+"%");	
			if(imgNum == imgSrc.length){
				$(".container").hide();
				$(".home").show();
			}
		}
	
	}