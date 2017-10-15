# Universal Drawer

## Description
This project focuses on creating drawers for your website with minimum number of steps. **As simple as that**

Primarily we are working on providing for types of drawers : 
 - Left drawer
 - Right drawer
 - Upper drawer
 - Lower drawer

###Drawers are intended to be:
 - Working (ofcourse)
 - Compatible with each other
 - Responsive

## Table of contents

- installation
	- npm
	- yarn
	- github
- usage
	- structuring
	- styling
	- methods to call
- For developers
	- contributing

## Installation 
- Go to your project directory
- open terminal and run command

### npm
- run command : **npm i --save _universal-drawer_**

### yarn
- run command : **yarn add _react_**

### github
- clone the respository
- Access the css and js files in the dist/css and dist/js folder respectively.

## usage

### structuring

**drawer**

```

<div class="u-drawer">
	<div class="header">
		<span class="toggle close"><i class="fa fa-bars" aria-hidden="true"></i></span>
	</div>
	<div class="main">
		
	</div>
	<div class="footer">
		
	</div>
</div>

```

**Left Drawer**
```
<div class="u-drawer u-drawer-left"></div>
.
.
.

```

**Right Drawer**
```
<div class="u-drawer u-drawer-right"></div>
.
.
.

```

**Upper Drawer**
```
<div class="u-drawer u-drawer-upper"></div>
.
.
.

```

**Lower Drawer**
```
<div class="u-drawer u-drawer-lower"></div>
.
.
.

```

### Styling
All default styling for the drawer element are done based on the classes added to the elements. 
So it important **not to remove the default classes added to the structure**

Access the sass files at the following directory: _universal-drawer/sass/_

### Methods to call


