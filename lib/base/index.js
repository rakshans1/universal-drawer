import $ from 'jquery';
export default class DrawerBase{
	constructor(){
	    this.tansformDiv = this.transformDiv.bind(this);
	    this.openDrawer = this.openDrawer.bind(this);
	    this.closeDrawer = this.closeDrawer.bind(this);
	}
	transformDiv(selector,divwidth,divposition){
		$(selector).width(divwidth);
		$(selector).addClass(divposition);
	}
	setInitialSelectorPosition(selector,divWidth,divposition){
		switch(divposition) {
			case 'left':
				$(selector).css('left','-'+divWidth);
				break;
			case 'right':
				$(selector).css('right','-'+divWidth);
				break;
			default:
				$(selector).css('left','-'+divWidth);
				break;
		}
	}
	openDrawer(selector=".u-drawer",divwidth="30%",divposition="left"){
		switch(divposition) {
			case 'left':
				$(selector).animate({'left':0});
				$('body').animate({'margin-left': divwidth});
				break;
			case 'right':
				$(selector).animate({'right':0});
				$('body').animate({'margin-right': divwidth});
				break;
			default:
				$(selector).animate({'left':0});
				break;
		}
		$(selector+' .header .toggle').addClass('open');
	}
	toggleClick(selector,divwidth,divposition){
		$(selector+' .header .toggle').stop(true).click(()=>{
			if ($(selector+' .header .toggle').hasClass('open')) {
				$(selector+' .header .toggle').removeClass('open')
				this.closeDrawer(selector,divwidth,divposition);
			}
			else if ($(selector+' .header .toggle').hasClass('close')) {
				$(selector+' .header .toggle').removeClass('close');
				this.openDrawer(selector,divwidth,divposition);
			}
		})
	}
	closeDrawer(selector,divWidth,divposition){
		switch(divposition) {
			case 'left':
				$(selector).animate({'left':'-'+divWidth});
				$('body').animate({'margin-left': 0});
				break;
			case 'right':
				$(selector).animate({'right':'-'+divWidth});
				$('body').animate({'margin-right': 0});
				break;
			default:
				$(selector).animate({'left':'-'+divWidth});
				$('body').animate({'margin-left': 0});
				break;
		}
		$(selector+' .header .toggle').addClass('close');
	}
}