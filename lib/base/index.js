import $ from 'jquery';
export default class DrawerBase{
	constructor(){
	    this.divHeight = $(window).height();
	    this.tansformDiv = this.transformDiv.bind(this);
	}
	transformDiv(selector,divwidth,divposition){
		$(selector).height(this.divHeight);
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
	animateSelector(selector,divposition){
		switch(divposition) {
			case 'left':
				$(selector).animate({'left':0});
				break;
			case 'right':
				$(selector).animate({'right':0});
				break;
			default:
				$(selector).animate({'left':0});
				break;
		}
	}
}