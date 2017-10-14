import $ from 'jquery';
export default class DrawerBase{
	constructor(){
	    this.divHeight = $(window).height();
	    this.tansformDiv = this.transformDiv.bind(this);
	}
	transformDiv(selector,width,position){
		$(selector).height(this.divHeight);
		$(selector).width(width);
		$(selector).addClass(position);
		$(selector).css({position:width});
	}
	animateSelector(selector,position){
		$(selector).animate({position:'0'}).fadeIn('slow');
	}
}