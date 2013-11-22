function open_function(url,width,height,options) { 
	self.msgWindow = open(url, "Window", "width=" + width + ",height=" + height + ",screenX=" + (screen.width-width)/2 + ",screenY=" + (screen.height-height)/2 + ",dependent=yes" + ",left=" + (screen.width-width)/2 + ",top=" + (screen.height-height)/2 + options );
	if (self.msgWindow) { 
		self.msgWindow.focus();
		if (self.msgWindow.opener == null) self.msgWindow.opener = self;
	}
}

function get_url (url, k0 ,v0 ,k1 ,v1 ,k2 ,v2 ,k3 ,v3 ,k4 ,v4 ) { 
	if (k0 && v0) url += "?" + k0 + "=" + escape(v0); if (k1 && v1) url += "&" + k1 + "=" + escape(v1); 
	if (k2 && v2) url += "&" + k2 + "=" + escape(v2); if (k3 && v3) url += "&" + k3 + "=" + escape(v3);
	if (k4 && v4) url += "&" + k4 + "=" + escape(v4); 
	return url;
}
var bV=parseInt(navigator.appVersion);
NS4=(document.layers) ? true : false;
IE4=((document.all)&&(bV>=4)) ? true : false;
DOM=(!document.layers && !document.all && bV>=4) ? true : false;

// A hack to guess if the browser supports the DOM
capable = (NS4 || IE4 || DOM) ? true : false;

var active;
function startclose(){
     active = window.setTimeout("closeAll()",1000);
}
function stopclose(){
     if(active){
		window.clearTimeout(active);
	}
}
function expandIt(el, id, OffsX, OffsY) {
	if (!capable) return;
	// closeAll();
	
	var coords;
	var MouseX=0;
	var MouseY=0;
	if (DOM || IE4) {
		coords = {x: 0, y: 0};
		var element = document.getElementById('POSER_'+id);
		while (element) {
			coords.x += element.offsetLeft;
			coords.y += element.offsetTop;
			element = element.offsetParent;
		}
	} else if (NS4) {
		var element = document.links['POSER_'+id];
		coords = {x: element.x, y: element.y};
	} else {
		return false;
	}
	
	if (coords){
		var poserX = coords['x'];
		var poserY = coords['y'];
	}
	MouseX=(poserX+OffsX);
	MouseY=(poserY+OffsY);
	
	if(DOM) {
		whichEl = document.getElementById(el);
		whichEl.style.top = MouseY+"px";
		whichEl.style.left = MouseX+"px";
		whichEl.style.visibility = "visible";
		whichEl.style.display = "block";
	} else if (IE4) {
		document.all[eval('el')].style.top = MouseY+"px";
		document.all[eval('el')].style.left = MouseX+"px";
		document.all[eval('el')].style.display = "block";
		document.all[eval('el')].style.visibility = "visible";
	} else if(NS4) {
		whichEl = eval("document." + el);
		whichEl.top = parseInt(MouseY);
		whichEl.left = parseInt(MouseX);  
		whichEl.visibility = "show";
		whichEl.display = "block";
	} 
}

function closeAll(){
  closeAllByName("child");
  closeAllByName("subchild");
}

function closeAllByName(name){
	stopclose();
	if (NS4) {
		for (i=0; i<document.layers.length; i++) {
			whichEl = document.layers[i];
			if (whichEl.id.toLowerCase().indexOf(name) != -1) {
				whichEl.visibility = "hide";
				whichEl.display = "none";
			}
		}
	} else if(IE4) {
		tempColl = document.all.tags("DIV");
		for (i=0; i<tempColl.length; i++) {
			whichEl = tempColl(i);
			if (whichEl.className == name){
				whichEl.style.display = "none";
				whichEl.style.visibility = "hidden";
			}
		}
	} else if(DOM) {
		tempColl = document.getElementsByTagName("DIV");
		for (i=0; i<tempColl.length; i++) {
			whichEl = tempColl[i];
			if (whichEl.className == name){
				whichEl.style.visibility = "hidden";
				whichEl.style.display = "none";
			}
		}
	}
}