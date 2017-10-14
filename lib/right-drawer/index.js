import DrawerBase from '../base';

export default class RightDrawer extends DrawerBase{
	constructor(){
		super();
		console.log('This is right drawer');
	}
	init(params={}){
		console.log(params);
	}
}