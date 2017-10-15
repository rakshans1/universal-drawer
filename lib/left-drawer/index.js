import DrawerBase from '../base';

export default class LeftDrawer extends DrawerBase{
	constructor(){
		super();
	}
	init(params={selector:'.u-drawer',width:'20%'}){
		this.transformDiv(params.selector,params.width,'left');
		this.setInitialSelectorPosition(params.selector,params.width,'left');
		this.toggleClick(params.selector,params.width,'left');
	}
}