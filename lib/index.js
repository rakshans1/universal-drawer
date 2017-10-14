import "../sass/index.scss";
import LeftDrawer from "./left-drawer";
import RightDrawer from "./right-drawer";
import UpperDrawer from "./upper-drawer";
import LowerDrawer from "./lower-drawer";

var left = new LeftDrawer();
var right = new RightDrawer();
var up = new UpperDrawer();
var lower = new LowerDrawer();

export {
	left,
	right,
	up,
	lower
}