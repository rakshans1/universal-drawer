import DrawerBase from '../base';

export default class RightDrawer extends DrawerBase{
	constructor(){
		super();
		console.log('This is right drawer');
	}
	init(params={selector:'.u-drawer',width:'20%'}){
		this.transformDiv(params.selector,params.width,'right');
		this.setInitialSelectorPosition(params.selector,params.width,'right');
		this.toggleClick(params.selector,params.width,'right');
	}
}