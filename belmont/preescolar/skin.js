// Garden Gnome Software - Skin
// Pano2VR 5.2.2/15983
// Filename: simplex_v5_preescolar.ggsk
// Generated vie. sep. 14 17:55:28 2018

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggLeft=-120;
		this._userdata.ggTop=-80;
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container ';
		this._userdata.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : -120px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		this._userdata.setAttribute('style',hs);
		this._userdata.style[domTransform + 'Origin']='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		me._userdata.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._userdata.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle ';
		this._userdatabg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 138px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 238px;';
		hs+='pointer-events:auto;';
		this._userdatabg.setAttribute('style',hs);
		this._userdatabg.style[domTransform + 'Origin']='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdatabg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		this._userdata.appendChild(this._userdatabg);
		this._title=document.createElement('div');
		this._title__text=document.createElement('div');
		this._title.className='ggskin ggskin_textdiv';
		this._title.ggTextDiv=this._title__text;
		this._title.ggId="title";
		this._title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._title.ggVisible=true;
		this._title.className='ggskin ggskin_text ';
		this._title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		this._title.setAttribute('style',hs);
		this._title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._title__text.setAttribute('style',hs);
		this._title.ggUpdateText=function() {
			var hs="<b>"+me.ggUserdata.title+"<\/b>";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		this._title.appendChild(this._title__text);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._title.ggUpdatePosition=function (useTransition) {
		}
		this._userdata.appendChild(this._title);
		this._description=document.createElement('div');
		this._description__text=document.createElement('div');
		this._description.className='ggskin ggskin_textdiv';
		this._description.ggTextDiv=this._description__text;
		this._description.ggId="description";
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		this._description.className='ggskin ggskin_text ';
		this._description.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		this._description.setAttribute('style',hs);
		this._description.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._description__text.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		this._description.appendChild(this._description__text);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._description.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._description.ggUpdatePosition=function (useTransition) {
		}
		this._userdata.appendChild(this._description);
		this._author=document.createElement('div');
		this._author__text=document.createElement('div');
		this._author.className='ggskin ggskin_textdiv';
		this._author.ggTextDiv=this._author__text;
		this._author.ggId="author";
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		this._author.className='ggskin ggskin_text ';
		this._author.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		this._author.setAttribute('style',hs);
		this._author.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._author__text.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			var hs=me.ggUserdata.author;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author.ggUpdateText();
		this._author.appendChild(this._author__text);
		me._author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._author.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._author.ggUpdatePosition=function (useTransition) {
		}
		this._userdata.appendChild(this._author);
		this._datetime=document.createElement('div');
		this._datetime__text=document.createElement('div');
		this._datetime.className='ggskin ggskin_textdiv';
		this._datetime.ggTextDiv=this._datetime__text;
		this._datetime.ggId="datetime";
		this._datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._datetime.ggVisible=true;
		this._datetime.className='ggskin ggskin_text ';
		this._datetime.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		this._datetime.setAttribute('style',hs);
		this._datetime.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._datetime__text.setAttribute('style',hs);
		this._datetime.ggUpdateText=function() {
			var hs=me.ggUserdata.datetime;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime.ggUpdateText();
		this._datetime.appendChild(this._datetime__text);
		me._datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._datetime.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._datetime.ggUpdatePosition=function (useTransition) {
		}
		this._userdata.appendChild(this._datetime);
		this._copyright=document.createElement('div');
		this._copyright__text=document.createElement('div');
		this._copyright.className='ggskin ggskin_textdiv';
		this._copyright.ggTextDiv=this._copyright__text;
		this._copyright.ggId="copyright";
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		this._copyright.className='ggskin ggskin_text ';
		this._copyright.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : 218px;';
		hs+='pointer-events:auto;';
		this._copyright.setAttribute('style',hs);
		this._copyright.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._copyright__text.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			var hs="&#169; "+me.ggUserdata.copyright;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		this._copyright.appendChild(this._copyright__text);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._copyright.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._copyright.ggUpdatePosition=function (useTransition) {
		}
		this._userdata.appendChild(this._copyright);
		this._userdata_close=document.createElement('div');
		this._userdata_close__img=document.createElement('img');
		this._userdata_close__img.className='ggskin ggskin_svg';
		this._userdata_close__img.setAttribute('src',basePath + 'images/userdata_close.svg');
		this._userdata_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._userdata_close__img['ondragstart']=function() { return false; };
		this._userdata_close.appendChild(this._userdata_close__img);
		this._userdata_close__imgo=document.createElement('img');
		this._userdata_close__imgo.className='ggskin ggskin_svg';
		this._userdata_close__imgo.setAttribute('src',basePath + 'images/userdata_close__o.svg');
		this._userdata_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._userdata_close__imgo['ondragstart']=function() { return false; };
		this._userdata_close.appendChild(this._userdata_close__imgo);
		this._userdata_close.ggId="userdata_close";
		this._userdata_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata_close.ggVisible=true;
		this._userdata_close.className='ggskin ggskin_svg ';
		this._userdata_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 207px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._userdata_close.setAttribute('style',hs);
		this._userdata_close.style[domTransform + 'Origin']='50% 50%';
		me._userdata_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._userdata_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._userdata_close.onclick=function (e) {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
		}
		this._userdata_close.onmouseover=function (e) {
			me._userdata_close__img.style.visibility='hidden';
			me._userdata_close__imgo.style.visibility='inherit';
		}
		this._userdata_close.onmouseout=function (e) {
			me._userdata_close__img.style.visibility='inherit';
			me._userdata_close__imgo.style.visibility='hidden';
		}
		this._userdata_close.ggUpdatePosition=function (useTransition) {
		}
		this._userdata.appendChild(this._userdata_close);
		this.divSkin.appendChild(this._userdata);
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggLeft=-166;
		this._controller.ggTop=-67;
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container ';
		this._controller.ggType='container';
		hs ='';
		hs+='height : 58px;';
		hs+='left : -166px;';
		hs+='position : absolute;';
		hs+='top : -67px;';
		hs+='visibility : inherit;';
		hs+='width : 331px;';
		hs+='pointer-events:none;';
		this._controller.setAttribute('style',hs);
		this._controller.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		me._controller.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._up=document.createElement('div');
		this._up__img=document.createElement('img');
		this._up__img.className='ggskin ggskin_svg';
		this._up__img.setAttribute('src',basePath + 'images/up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._up__img['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__img);
		this._up__imgo=document.createElement('img');
		this._up__imgo.className='ggskin ggskin_svg';
		this._up__imgo.setAttribute('src',basePath + 'images/up__o.svg');
		this._up__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._up__imgo['ondragstart']=function() { return false; };
		this._up.appendChild(this._up__imgo);
		this._up.ggId="up";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_svg ';
		this._up.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 66px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._up.setAttribute('style',hs);
		this._up.style[domTransform + 'Origin']='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._up.onmouseover=function (e) {
			me._up__img.style.visibility='hidden';
			me._up__imgo.style.visibility='inherit';
		}
		this._up.onmouseout=function (e) {
			me._up__img.style.visibility='inherit';
			me._up__imgo.style.visibility='hidden';
			me.elementMouseDown['up']=false;
		}
		this._up.onmousedown=function (e) {
			me.elementMouseDown['up']=true;
		}
		this._up.onmouseup=function (e) {
			me.elementMouseDown['up']=false;
		}
		this._up.ontouchend=function (e) {
			me.elementMouseDown['up']=false;
		}
		this._up.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._up);
		this._down=document.createElement('div');
		this._down__img=document.createElement('img');
		this._down__img.className='ggskin ggskin_svg';
		this._down__img.setAttribute('src',basePath + 'images/down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._down__img['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__img);
		this._down__imgo=document.createElement('img');
		this._down__imgo.className='ggskin ggskin_svg';
		this._down__imgo.setAttribute('src',basePath + 'images/down__o.svg');
		this._down__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._down__imgo['ondragstart']=function() { return false; };
		this._down.appendChild(this._down__imgo);
		this._down.ggId="down";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_svg ';
		this._down.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 66px;';
		hs+='position : absolute;';
		hs+='top : 27px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._down.setAttribute('style',hs);
		this._down.style[domTransform + 'Origin']='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._down.onmouseover=function (e) {
			me._down__img.style.visibility='hidden';
			me._down__imgo.style.visibility='inherit';
		}
		this._down.onmouseout=function (e) {
			me._down__img.style.visibility='inherit';
			me._down__imgo.style.visibility='hidden';
			me.elementMouseDown['down']=false;
		}
		this._down.onmousedown=function (e) {
			me.elementMouseDown['down']=true;
		}
		this._down.onmouseup=function (e) {
			me.elementMouseDown['down']=false;
		}
		this._down.ontouchend=function (e) {
			me.elementMouseDown['down']=false;
		}
		this._down.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._down);
		this._left=document.createElement('div');
		this._left__img=document.createElement('img');
		this._left__img.className='ggskin ggskin_svg';
		this._left__img.setAttribute('src',basePath + 'images/left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._left__img['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__img);
		this._left__imgo=document.createElement('img');
		this._left__imgo.className='ggskin ggskin_svg';
		this._left__imgo.setAttribute('src',basePath + 'images/left__o.svg');
		this._left__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._left__imgo['ondragstart']=function() { return false; };
		this._left.appendChild(this._left__imgo);
		this._left.ggId="left";
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		this._left.className='ggskin ggskin_svg ';
		this._left.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 41px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._left.setAttribute('style',hs);
		this._left.style[domTransform + 'Origin']='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._left.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._left.onmouseover=function (e) {
			me._left__img.style.visibility='hidden';
			me._left__imgo.style.visibility='inherit';
		}
		this._left.onmouseout=function (e) {
			me._left__img.style.visibility='inherit';
			me._left__imgo.style.visibility='hidden';
			me.elementMouseDown['left']=false;
		}
		this._left.onmousedown=function (e) {
			me.elementMouseDown['left']=true;
		}
		this._left.onmouseup=function (e) {
			me.elementMouseDown['left']=false;
		}
		this._left.ontouchend=function (e) {
			me.elementMouseDown['left']=false;
		}
		this._left.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._left);
		this._right=document.createElement('div');
		this._right__img=document.createElement('img');
		this._right__img.className='ggskin ggskin_svg';
		this._right__img.setAttribute('src',basePath + 'images/right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._right__img['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__img);
		this._right__imgo=document.createElement('img');
		this._right__imgo.className='ggskin ggskin_svg';
		this._right__imgo.setAttribute('src',basePath + 'images/right__o.svg');
		this._right__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._right__imgo['ondragstart']=function() { return false; };
		this._right.appendChild(this._right__imgo);
		this._right.ggId="right";
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		this._right.className='ggskin ggskin_svg ';
		this._right.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 91px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._right.setAttribute('style',hs);
		this._right.style[domTransform + 'Origin']='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._right.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._right.onmouseover=function (e) {
			me._right__img.style.visibility='hidden';
			me._right__imgo.style.visibility='inherit';
		}
		this._right.onmouseout=function (e) {
			me._right__img.style.visibility='inherit';
			me._right__imgo.style.visibility='hidden';
			me.elementMouseDown['right']=false;
		}
		this._right.onmousedown=function (e) {
			me.elementMouseDown['right']=true;
		}
		this._right.onmouseup=function (e) {
			me.elementMouseDown['right']=false;
		}
		this._right.ontouchend=function (e) {
			me.elementMouseDown['right']=false;
		}
		this._right.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._right);
		this._zoomin=document.createElement('div');
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin__imgo=document.createElement('img');
		this._zoomin__imgo.className='ggskin ggskin_svg';
		this._zoomin__imgo.setAttribute('src',basePath + 'images/zoomin__o.svg');
		this._zoomin__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoomin__imgo['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__imgo);
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=true;
		this._zoomin.className='ggskin ggskin_svg ';
		this._zoomin.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 131px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
		}
		this._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
		}
		this._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
		}
		this._zoomin.ggUpdatePosition=function (useTransition) {
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin__text=document.createElement('div');
		this._tt_zoomin.className='ggskin ggskin_textdiv';
		this._tt_zoomin.ggTextDiv=this._tt_zoomin__text;
		this._tt_zoomin.ggId="tt_zoomin";
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		this._tt_zoomin.className='ggskin ggskin_text ';
		this._tt_zoomin.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_zoomin.setAttribute('style',hs);
		this._tt_zoomin.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin__text.setAttribute('style',hs);
		this._tt_zoomin__text.innerHTML="Zoom In";
		this._tt_zoomin.appendChild(this._tt_zoomin__text);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_zoomin.ggCurrentLogicStateVisible = -1;
		this._tt_zoomin.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['zoomin'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomin.style[domTransition]='';
				if (me._tt_zoomin.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
					me._tt_zoomin.ggVisible=true;
				}
				else {
					me._tt_zoomin.style.visibility="hidden";
					me._tt_zoomin.ggVisible=false;
				}
			}
		}
		this._tt_zoomin.ggUpdatePosition=function (useTransition) {
		}
		this._tt_zoomin_white=document.createElement('div');
		this._tt_zoomin_white__text=document.createElement('div');
		this._tt_zoomin_white.className='ggskin ggskin_textdiv';
		this._tt_zoomin_white.ggTextDiv=this._tt_zoomin_white__text;
		this._tt_zoomin_white.ggId="tt_zoomin_white";
		this._tt_zoomin_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin_white.ggVisible=true;
		this._tt_zoomin_white.className='ggskin ggskin_text ';
		this._tt_zoomin_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_zoomin_white.setAttribute('style',hs);
		this._tt_zoomin_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin_white__text.setAttribute('style',hs);
		this._tt_zoomin_white__text.innerHTML="Zoom In";
		this._tt_zoomin_white.appendChild(this._tt_zoomin_white__text);
		me._tt_zoomin_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_zoomin_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_zoomin_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_zoomin.appendChild(this._tt_zoomin_white);
		this._zoomin.appendChild(this._tt_zoomin);
		this._controller.appendChild(this._zoomin);
		this._zoomout=document.createElement('div');
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout__imgo=document.createElement('img');
		this._zoomout__imgo.className='ggskin ggskin_svg';
		this._zoomout__imgo.setAttribute('src',basePath + 'images/zoomout__o.svg');
		this._zoomout__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoomout__imgo['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__imgo);
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=true;
		this._zoomout.className='ggskin ggskin_svg ';
		this._zoomout.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 161px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
		}
		this._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
		}
		this._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
		}
		this._zoomout.ggUpdatePosition=function (useTransition) {
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout__text=document.createElement('div');
		this._tt_zoomout.className='ggskin ggskin_textdiv';
		this._tt_zoomout.ggTextDiv=this._tt_zoomout__text;
		this._tt_zoomout.ggId="tt_zoomout";
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		this._tt_zoomout.className='ggskin ggskin_text ';
		this._tt_zoomout.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_zoomout.setAttribute('style',hs);
		this._tt_zoomout.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout__text.setAttribute('style',hs);
		this._tt_zoomout__text.innerHTML="Zoom Out";
		this._tt_zoomout.appendChild(this._tt_zoomout__text);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_zoomout.ggCurrentLogicStateVisible = -1;
		this._tt_zoomout.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['zoomout'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomout.style[domTransition]='';
				if (me._tt_zoomout.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
					me._tt_zoomout.ggVisible=true;
				}
				else {
					me._tt_zoomout.style.visibility="hidden";
					me._tt_zoomout.ggVisible=false;
				}
			}
		}
		this._tt_zoomout.ggUpdatePosition=function (useTransition) {
		}
		this._tt_zoomout_white=document.createElement('div');
		this._tt_zoomout_white__text=document.createElement('div');
		this._tt_zoomout_white.className='ggskin ggskin_textdiv';
		this._tt_zoomout_white.ggTextDiv=this._tt_zoomout_white__text;
		this._tt_zoomout_white.ggId="tt_zoomout_white";
		this._tt_zoomout_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout_white.ggVisible=true;
		this._tt_zoomout_white.className='ggskin ggskin_text ';
		this._tt_zoomout_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_zoomout_white.setAttribute('style',hs);
		this._tt_zoomout_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout_white__text.setAttribute('style',hs);
		this._tt_zoomout_white__text.innerHTML="Zoom Out";
		this._tt_zoomout_white.appendChild(this._tt_zoomout_white__text);
		me._tt_zoomout_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_zoomout_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_zoomout_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_zoomout.appendChild(this._tt_zoomout_white);
		this._zoomout.appendChild(this._tt_zoomout);
		this._controller.appendChild(this._zoomout);
		this._button_simplex_auto_rotate=document.createElement('div');
		this._button_simplex_auto_rotate.ggId="button_simplex_auto_rotate";
		this._button_simplex_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_simplex_auto_rotate.ggVisible=true;
		this._button_simplex_auto_rotate.className='ggskin ggskin_container ';
		this._button_simplex_auto_rotate.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 201px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._button_simplex_auto_rotate.setAttribute('style',hs);
		this._button_simplex_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._button_simplex_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_simplex_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_simplex_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		this._button_stop_auto_rotate=document.createElement('div');
		this._button_stop_auto_rotate__img=document.createElement('img');
		this._button_stop_auto_rotate__img.className='ggskin ggskin_svg';
		this._button_stop_auto_rotate__img.setAttribute('src',basePath + 'images/button_stop_auto_rotate.svg');
		this._button_stop_auto_rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_stop_auto_rotate__img['ondragstart']=function() { return false; };
		this._button_stop_auto_rotate.appendChild(this._button_stop_auto_rotate__img);
		this._button_stop_auto_rotate__imgo=document.createElement('img');
		this._button_stop_auto_rotate__imgo.className='ggskin ggskin_svg';
		this._button_stop_auto_rotate__imgo.setAttribute('src',basePath + 'images/button_stop_auto_rotate__o.svg');
		this._button_stop_auto_rotate__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_stop_auto_rotate__imgo['ondragstart']=function() { return false; };
		this._button_stop_auto_rotate.appendChild(this._button_stop_auto_rotate__imgo);
		this._button_stop_auto_rotate.ggId="button stop auto rotate";
		this._button_stop_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_stop_auto_rotate.ggVisible=false;
		this._button_stop_auto_rotate.className='ggskin ggskin_svg ';
		this._button_stop_auto_rotate.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._button_stop_auto_rotate.setAttribute('style',hs);
		this._button_stop_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._button_stop_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_stop_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_stop_auto_rotate.onclick=function (e) {
			me.player.stopAutorotate();
		}
		this._button_stop_auto_rotate.onmouseover=function (e) {
			me._button_stop_auto_rotate__img.style.visibility='hidden';
			me._button_stop_auto_rotate__imgo.style.visibility='inherit';
			me.elementMouseOver['button_stop_auto_rotate']=true;
		}
		this._button_stop_auto_rotate.onmouseout=function (e) {
			me._button_stop_auto_rotate__img.style.visibility='inherit';
			me._button_stop_auto_rotate__imgo.style.visibility='hidden';
			me.elementMouseOver['button_stop_auto_rotate']=false;
		}
		this._button_stop_auto_rotate.ontouchend=function (e) {
			me.elementMouseOver['button_stop_auto_rotate']=false;
		}
		me._button_stop_auto_rotate.ggCurrentLogicStateVisible = -1;
		this._button_stop_auto_rotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsAutorotating() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_stop_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_stop_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_stop_auto_rotate.style[domTransition]='';
				if (me._button_stop_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._button_stop_auto_rotate.style.visibility=(Number(me._button_stop_auto_rotate.style.opacity)>0||!me._button_stop_auto_rotate.style.opacity)?'inherit':'hidden';
					me._button_stop_auto_rotate.ggVisible=true;
				}
				else {
					me._button_stop_auto_rotate.style.visibility="hidden";
					me._button_stop_auto_rotate.ggVisible=false;
				}
			}
		}
		this._button_stop_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		this._tt_stop_auto_rotate=document.createElement('div');
		this._tt_stop_auto_rotate__text=document.createElement('div');
		this._tt_stop_auto_rotate.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate.ggTextDiv=this._tt_stop_auto_rotate__text;
		this._tt_stop_auto_rotate.ggId="tt_stop_auto_rotate";
		this._tt_stop_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate.ggVisible=false;
		this._tt_stop_auto_rotate.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_stop_auto_rotate.setAttribute('style',hs);
		this._tt_stop_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate__text.innerHTML="Stop Auto Rotate";
		this._tt_stop_auto_rotate.appendChild(this._tt_stop_auto_rotate__text);
		me._tt_stop_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_stop_auto_rotate.ggCurrentLogicStateVisible = -1;
		this._tt_stop_auto_rotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_stop_auto_rotate'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_stop_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_stop_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_stop_auto_rotate.style[domTransition]='';
				if (me._tt_stop_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_stop_auto_rotate.style.visibility=(Number(me._tt_stop_auto_rotate.style.opacity)>0||!me._tt_stop_auto_rotate.style.opacity)?'inherit':'hidden';
					me._tt_stop_auto_rotate.ggVisible=true;
				}
				else {
					me._tt_stop_auto_rotate.style.visibility="hidden";
					me._tt_stop_auto_rotate.ggVisible=false;
				}
			}
		}
		this._tt_stop_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		this._tt_stop_auto_rotate_white=document.createElement('div');
		this._tt_stop_auto_rotate_white__text=document.createElement('div');
		this._tt_stop_auto_rotate_white.className='ggskin ggskin_textdiv';
		this._tt_stop_auto_rotate_white.ggTextDiv=this._tt_stop_auto_rotate_white__text;
		this._tt_stop_auto_rotate_white.ggId="tt_stop_auto_rotate_white";
		this._tt_stop_auto_rotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_stop_auto_rotate_white.ggVisible=true;
		this._tt_stop_auto_rotate_white.className='ggskin ggskin_text ';
		this._tt_stop_auto_rotate_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_stop_auto_rotate_white.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_stop_auto_rotate_white__text.setAttribute('style',hs);
		this._tt_stop_auto_rotate_white__text.innerHTML="Stop Auto Rotate";
		this._tt_stop_auto_rotate_white.appendChild(this._tt_stop_auto_rotate_white__text);
		me._tt_stop_auto_rotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_stop_auto_rotate_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_stop_auto_rotate_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_stop_auto_rotate.appendChild(this._tt_stop_auto_rotate_white);
		this._button_stop_auto_rotate.appendChild(this._tt_stop_auto_rotate);
		this._button_simplex_auto_rotate.appendChild(this._button_stop_auto_rotate);
		this._button_start_auto_rotate=document.createElement('div');
		this._button_start_auto_rotate__img=document.createElement('img');
		this._button_start_auto_rotate__img.className='ggskin ggskin_svg';
		this._button_start_auto_rotate__img.setAttribute('src',basePath + 'images/button_start_auto_rotate.svg');
		this._button_start_auto_rotate__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_start_auto_rotate__img['ondragstart']=function() { return false; };
		this._button_start_auto_rotate.appendChild(this._button_start_auto_rotate__img);
		this._button_start_auto_rotate__imgo=document.createElement('img');
		this._button_start_auto_rotate__imgo.className='ggskin ggskin_svg';
		this._button_start_auto_rotate__imgo.setAttribute('src',basePath + 'images/button_start_auto_rotate__o.svg');
		this._button_start_auto_rotate__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_start_auto_rotate__imgo['ondragstart']=function() { return false; };
		this._button_start_auto_rotate.appendChild(this._button_start_auto_rotate__imgo);
		this._button_start_auto_rotate.ggId="button start auto rotate";
		this._button_start_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_start_auto_rotate.ggVisible=true;
		this._button_start_auto_rotate.className='ggskin ggskin_svg ';
		this._button_start_auto_rotate.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._button_start_auto_rotate.setAttribute('style',hs);
		this._button_start_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._button_start_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_start_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_start_auto_rotate.onclick=function (e) {
			me.player.startAutorotate("0.1","5","1");
		}
		this._button_start_auto_rotate.onmouseover=function (e) {
			me._button_start_auto_rotate__img.style.visibility='hidden';
			me._button_start_auto_rotate__imgo.style.visibility='inherit';
			me.elementMouseOver['button_start_auto_rotate']=true;
		}
		this._button_start_auto_rotate.onmouseout=function (e) {
			me._button_start_auto_rotate__img.style.visibility='inherit';
			me._button_start_auto_rotate__imgo.style.visibility='hidden';
			me.elementMouseOver['button_start_auto_rotate']=false;
		}
		this._button_start_auto_rotate.ontouchend=function (e) {
			me.elementMouseOver['button_start_auto_rotate']=false;
		}
		me._button_start_auto_rotate.ggCurrentLogicStateVisible = -1;
		this._button_start_auto_rotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsAutorotating() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_start_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_start_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_start_auto_rotate.style[domTransition]='';
				if (me._button_start_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._button_start_auto_rotate.style.visibility="hidden";
					me._button_start_auto_rotate.ggVisible=false;
				}
				else {
					me._button_start_auto_rotate.style.visibility=(Number(me._button_start_auto_rotate.style.opacity)>0||!me._button_start_auto_rotate.style.opacity)?'inherit':'hidden';
					me._button_start_auto_rotate.ggVisible=true;
				}
			}
		}
		this._button_start_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		this._tt_start_auto_rotate=document.createElement('div');
		this._tt_start_auto_rotate__text=document.createElement('div');
		this._tt_start_auto_rotate.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate.ggTextDiv=this._tt_start_auto_rotate__text;
		this._tt_start_auto_rotate.ggId="tt_start_auto_rotate";
		this._tt_start_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate.ggVisible=false;
		this._tt_start_auto_rotate.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_start_auto_rotate.setAttribute('style',hs);
		this._tt_start_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate__text.setAttribute('style',hs);
		this._tt_start_auto_rotate__text.innerHTML="Start Auto Rotate";
		this._tt_start_auto_rotate.appendChild(this._tt_start_auto_rotate__text);
		me._tt_start_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_start_auto_rotate.ggCurrentLogicStateVisible = -1;
		this._tt_start_auto_rotate.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_start_auto_rotate'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_start_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_start_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_start_auto_rotate.style[domTransition]='';
				if (me._tt_start_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_start_auto_rotate.style.visibility=(Number(me._tt_start_auto_rotate.style.opacity)>0||!me._tt_start_auto_rotate.style.opacity)?'inherit':'hidden';
					me._tt_start_auto_rotate.ggVisible=true;
				}
				else {
					me._tt_start_auto_rotate.style.visibility="hidden";
					me._tt_start_auto_rotate.ggVisible=false;
				}
			}
		}
		this._tt_start_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		this._tt_start_auto_rotate_white=document.createElement('div');
		this._tt_start_auto_rotate_white__text=document.createElement('div');
		this._tt_start_auto_rotate_white.className='ggskin ggskin_textdiv';
		this._tt_start_auto_rotate_white.ggTextDiv=this._tt_start_auto_rotate_white__text;
		this._tt_start_auto_rotate_white.ggId="tt_start_auto_rotate_white";
		this._tt_start_auto_rotate_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_start_auto_rotate_white.ggVisible=true;
		this._tt_start_auto_rotate_white.className='ggskin ggskin_text ';
		this._tt_start_auto_rotate_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_start_auto_rotate_white.setAttribute('style',hs);
		this._tt_start_auto_rotate_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_start_auto_rotate_white__text.setAttribute('style',hs);
		this._tt_start_auto_rotate_white__text.innerHTML="Start Auto Rotate";
		this._tt_start_auto_rotate_white.appendChild(this._tt_start_auto_rotate_white__text);
		me._tt_start_auto_rotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_start_auto_rotate_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_start_auto_rotate_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_start_auto_rotate.appendChild(this._tt_start_auto_rotate_white);
		this._button_start_auto_rotate.appendChild(this._tt_start_auto_rotate);
		this._button_simplex_auto_rotate.appendChild(this._button_start_auto_rotate);
		this._controller.appendChild(this._button_simplex_auto_rotate);
		this._info=document.createElement('div');
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + 'images/info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info__imgo=document.createElement('img');
		this._info__imgo.className='ggskin ggskin_svg';
		this._info__imgo.setAttribute('src',basePath + 'images/info__o.svg');
		this._info__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._info__imgo['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__imgo);
		this._info.ggId="info";
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_svg ';
		this._info.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 231px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._info.setAttribute('style',hs);
		this._info.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info.onclick=function (e) {
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility=(Number(me._userdata.style.opacity)>0||!me._userdata.style.opacity)?'inherit':'hidden';
			me._userdata.ggVisible=true;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility=(Number(me._screentint.style.opacity)>0||!me._screentint.style.opacity)?'inherit':'hidden';
			me._screentint.ggVisible=true;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility='hidden';
			me._controller.ggVisible=false;
		}
		this._info.onmouseover=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
			me.elementMouseOver['info']=true;
		}
		this._info.onmouseout=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
			me.elementMouseOver['info']=false;
		}
		this._info.ontouchend=function (e) {
			me.elementMouseOver['info']=false;
		}
		this._info.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info=document.createElement('div');
		this._tt_info__text=document.createElement('div');
		this._tt_info.className='ggskin ggskin_textdiv';
		this._tt_info.ggTextDiv=this._tt_info__text;
		this._tt_info.ggId="tt_info";
		this._tt_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info.ggVisible=false;
		this._tt_info.className='ggskin ggskin_text ';
		this._tt_info.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_info.setAttribute('style',hs);
		this._tt_info.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info__text.setAttribute('style',hs);
		this._tt_info__text.innerHTML="Show Information";
		this._tt_info.appendChild(this._tt_info__text);
		me._tt_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_info.ggCurrentLogicStateVisible = -1;
		this._tt_info.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['info'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_info.style[domTransition]='';
				if (me._tt_info.ggCurrentLogicStateVisible == 0) {
					me._tt_info.style.visibility=(Number(me._tt_info.style.opacity)>0||!me._tt_info.style.opacity)?'inherit':'hidden';
					me._tt_info.ggVisible=true;
				}
				else {
					me._tt_info.style.visibility="hidden";
					me._tt_info.ggVisible=false;
				}
			}
		}
		this._tt_info.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info_white=document.createElement('div');
		this._tt_info_white__text=document.createElement('div');
		this._tt_info_white.className='ggskin ggskin_textdiv';
		this._tt_info_white.ggTextDiv=this._tt_info_white__text;
		this._tt_info_white.ggId="tt_info_white";
		this._tt_info_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_info_white.ggVisible=true;
		this._tt_info_white.className='ggskin ggskin_text ';
		this._tt_info_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_info_white.setAttribute('style',hs);
		this._tt_info_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_info_white__text.setAttribute('style',hs);
		this._tt_info_white__text.innerHTML="Show Information";
		this._tt_info_white.appendChild(this._tt_info_white__text);
		me._tt_info_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_info_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_info_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_info.appendChild(this._tt_info_white);
		this._info.appendChild(this._tt_info);
		this._controller.appendChild(this._info);
		this._button_simplex_movemode=document.createElement('div');
		this._button_simplex_movemode.ggId="button_simplex_movemode";
		this._button_simplex_movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_simplex_movemode.ggVisible=true;
		this._button_simplex_movemode.className='ggskin ggskin_container ';
		this._button_simplex_movemode.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 261px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._button_simplex_movemode.setAttribute('style',hs);
		this._button_simplex_movemode.style[domTransform + 'Origin']='50% 50%';
		me._button_simplex_movemode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_simplex_movemode.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_simplex_movemode.ggUpdatePosition=function (useTransition) {
		}
		this._movemode_drag=document.createElement('div');
		this._movemode_drag__img=document.createElement('img');
		this._movemode_drag__img.className='ggskin ggskin_svg';
		this._movemode_drag__img.setAttribute('src',basePath + 'images/movemode_drag.svg');
		this._movemode_drag__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._movemode_drag__img['ondragstart']=function() { return false; };
		this._movemode_drag.appendChild(this._movemode_drag__img);
		this._movemode_drag__imgo=document.createElement('img');
		this._movemode_drag__imgo.className='ggskin ggskin_svg';
		this._movemode_drag__imgo.setAttribute('src',basePath + 'images/movemode_drag__o.svg');
		this._movemode_drag__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._movemode_drag__imgo['ondragstart']=function() { return false; };
		this._movemode_drag.appendChild(this._movemode_drag__imgo);
		this._movemode_drag.ggId="movemode_drag";
		this._movemode_drag.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode_drag.ggVisible=false;
		this._movemode_drag.className='ggskin ggskin_svg ';
		this._movemode_drag.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._movemode_drag.setAttribute('style',hs);
		this._movemode_drag.style[domTransform + 'Origin']='50% 50%';
		me._movemode_drag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._movemode_drag.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._movemode_drag.onclick=function (e) {
			me.player.changeViewMode(1);
		}
		this._movemode_drag.onmouseover=function (e) {
			me._movemode_drag__img.style.visibility='hidden';
			me._movemode_drag__imgo.style.visibility='inherit';
			me.elementMouseOver['movemode_drag']=true;
		}
		this._movemode_drag.onmouseout=function (e) {
			me._movemode_drag__img.style.visibility='inherit';
			me._movemode_drag__imgo.style.visibility='hidden';
			me.elementMouseOver['movemode_drag']=false;
		}
		this._movemode_drag.ontouchend=function (e) {
			me.elementMouseOver['movemode_drag']=false;
		}
		me._movemode_drag.ggCurrentLogicStateVisible = -1;
		this._movemode_drag.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewMode() == 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._movemode_drag.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._movemode_drag.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._movemode_drag.style[domTransition]='';
				if (me._movemode_drag.ggCurrentLogicStateVisible == 0) {
					me._movemode_drag.style.visibility=(Number(me._movemode_drag.style.opacity)>0||!me._movemode_drag.style.opacity)?'inherit':'hidden';
					me._movemode_drag.ggVisible=true;
				}
				else {
					me._movemode_drag.style.visibility="hidden";
					me._movemode_drag.ggVisible=false;
				}
			}
		}
		this._movemode_drag.ggUpdatePosition=function (useTransition) {
		}
		this._tt_movemode0=document.createElement('div');
		this._tt_movemode0__text=document.createElement('div');
		this._tt_movemode0.className='ggskin ggskin_textdiv';
		this._tt_movemode0.ggTextDiv=this._tt_movemode0__text;
		this._tt_movemode0.ggId="tt_movemode";
		this._tt_movemode0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode0.ggVisible=false;
		this._tt_movemode0.className='ggskin ggskin_text ';
		this._tt_movemode0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		this._tt_movemode0.setAttribute('style',hs);
		this._tt_movemode0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode0__text.setAttribute('style',hs);
		this._tt_movemode0__text.innerHTML="Change Control Mode";
		this._tt_movemode0.appendChild(this._tt_movemode0__text);
		me._tt_movemode0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_movemode0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_movemode0.ggCurrentLogicStateVisible = -1;
		this._tt_movemode0.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['movemode_drag'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_movemode0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_movemode0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_movemode0.style[domTransition]='';
				if (me._tt_movemode0.ggCurrentLogicStateVisible == 0) {
					me._tt_movemode0.style.visibility=(Number(me._tt_movemode0.style.opacity)>0||!me._tt_movemode0.style.opacity)?'inherit':'hidden';
					me._tt_movemode0.ggVisible=true;
				}
				else {
					me._tt_movemode0.style.visibility="hidden";
					me._tt_movemode0.ggVisible=false;
				}
			}
		}
		this._tt_movemode0.ggUpdatePosition=function (useTransition) {
		}
		this._tt_movemode_white0=document.createElement('div');
		this._tt_movemode_white0__text=document.createElement('div');
		this._tt_movemode_white0.className='ggskin ggskin_textdiv';
		this._tt_movemode_white0.ggTextDiv=this._tt_movemode_white0__text;
		this._tt_movemode_white0.ggId="tt_movemode_white";
		this._tt_movemode_white0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode_white0.ggVisible=true;
		this._tt_movemode_white0.className='ggskin ggskin_text ';
		this._tt_movemode_white0.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		this._tt_movemode_white0.setAttribute('style',hs);
		this._tt_movemode_white0.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode_white0__text.setAttribute('style',hs);
		this._tt_movemode_white0__text.innerHTML="Change Control Mode";
		this._tt_movemode_white0.appendChild(this._tt_movemode_white0__text);
		me._tt_movemode_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_movemode_white0.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_movemode_white0.ggUpdatePosition=function (useTransition) {
		}
		this._tt_movemode0.appendChild(this._tt_movemode_white0);
		this._movemode_drag.appendChild(this._tt_movemode0);
		this._button_simplex_movemode.appendChild(this._movemode_drag);
		this._movemode_continuous=document.createElement('div');
		this._movemode_continuous__img=document.createElement('img');
		this._movemode_continuous__img.className='ggskin ggskin_svg';
		this._movemode_continuous__img.setAttribute('src',basePath + 'images/movemode_continuous.svg');
		this._movemode_continuous__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._movemode_continuous__img['ondragstart']=function() { return false; };
		this._movemode_continuous.appendChild(this._movemode_continuous__img);
		this._movemode_continuous__imgo=document.createElement('img');
		this._movemode_continuous__imgo.className='ggskin ggskin_svg';
		this._movemode_continuous__imgo.setAttribute('src',basePath + 'images/movemode_continuous__o.svg');
		this._movemode_continuous__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._movemode_continuous__imgo['ondragstart']=function() { return false; };
		this._movemode_continuous.appendChild(this._movemode_continuous__imgo);
		this._movemode_continuous.ggId="movemode_continuous";
		this._movemode_continuous.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._movemode_continuous.ggVisible=true;
		this._movemode_continuous.className='ggskin ggskin_svg ';
		this._movemode_continuous.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._movemode_continuous.setAttribute('style',hs);
		this._movemode_continuous.style[domTransform + 'Origin']='50% 50%';
		me._movemode_continuous.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._movemode_continuous.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._movemode_continuous.onclick=function (e) {
			me.player.changeViewMode(0);
		}
		this._movemode_continuous.onmouseover=function (e) {
			me._movemode_continuous__img.style.visibility='hidden';
			me._movemode_continuous__imgo.style.visibility='inherit';
			me.elementMouseOver['movemode_continuous']=true;
		}
		this._movemode_continuous.onmouseout=function (e) {
			me._movemode_continuous__img.style.visibility='inherit';
			me._movemode_continuous__imgo.style.visibility='hidden';
			me.elementMouseOver['movemode_continuous']=false;
		}
		this._movemode_continuous.ontouchend=function (e) {
			me.elementMouseOver['movemode_continuous']=false;
		}
		me._movemode_continuous.ggCurrentLogicStateVisible = -1;
		this._movemode_continuous.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewMode() == 0)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._movemode_continuous.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._movemode_continuous.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._movemode_continuous.style[domTransition]='';
				if (me._movemode_continuous.ggCurrentLogicStateVisible == 0) {
					me._movemode_continuous.style.visibility="hidden";
					me._movemode_continuous.ggVisible=false;
				}
				else {
					me._movemode_continuous.style.visibility=(Number(me._movemode_continuous.style.opacity)>0||!me._movemode_continuous.style.opacity)?'inherit':'hidden';
					me._movemode_continuous.ggVisible=true;
				}
			}
		}
		this._movemode_continuous.ggUpdatePosition=function (useTransition) {
		}
		this._tt_movemode=document.createElement('div');
		this._tt_movemode__text=document.createElement('div');
		this._tt_movemode.className='ggskin ggskin_textdiv';
		this._tt_movemode.ggTextDiv=this._tt_movemode__text;
		this._tt_movemode.ggId="tt_movemode";
		this._tt_movemode.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode.ggVisible=false;
		this._tt_movemode.className='ggskin ggskin_text ';
		this._tt_movemode.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		this._tt_movemode.setAttribute('style',hs);
		this._tt_movemode.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode__text.setAttribute('style',hs);
		this._tt_movemode__text.innerHTML="Change Control Mode";
		this._tt_movemode.appendChild(this._tt_movemode__text);
		me._tt_movemode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_movemode.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_movemode.ggCurrentLogicStateVisible = -1;
		this._tt_movemode.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['movemode_continuous'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_movemode.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_movemode.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_movemode.style[domTransition]='';
				if (me._tt_movemode.ggCurrentLogicStateVisible == 0) {
					me._tt_movemode.style.visibility=(Number(me._tt_movemode.style.opacity)>0||!me._tt_movemode.style.opacity)?'inherit':'hidden';
					me._tt_movemode.ggVisible=true;
				}
				else {
					me._tt_movemode.style.visibility="hidden";
					me._tt_movemode.ggVisible=false;
				}
			}
		}
		this._tt_movemode.ggUpdatePosition=function (useTransition) {
		}
		this._tt_movemode_white=document.createElement('div');
		this._tt_movemode_white__text=document.createElement('div');
		this._tt_movemode_white.className='ggskin ggskin_textdiv';
		this._tt_movemode_white.ggTextDiv=this._tt_movemode_white__text;
		this._tt_movemode_white.ggId="tt_movemode_white";
		this._tt_movemode_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_movemode_white.ggVisible=true;
		this._tt_movemode_white.className='ggskin ggskin_text ';
		this._tt_movemode_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 168px;';
		hs+='pointer-events:auto;';
		this._tt_movemode_white.setAttribute('style',hs);
		this._tt_movemode_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 168px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_movemode_white__text.setAttribute('style',hs);
		this._tt_movemode_white__text.innerHTML="Change Control Mode";
		this._tt_movemode_white.appendChild(this._tt_movemode_white__text);
		me._tt_movemode_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_movemode_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_movemode_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_movemode.appendChild(this._tt_movemode_white);
		this._movemode_continuous.appendChild(this._tt_movemode);
		this._button_simplex_movemode.appendChild(this._movemode_continuous);
		this._controller.appendChild(this._button_simplex_movemode);
		this._button_simplex_fullscreen=document.createElement('div');
		this._button_simplex_fullscreen.ggId="button_simplex_fullscreen";
		this._button_simplex_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_simplex_fullscreen.ggVisible=true;
		this._button_simplex_fullscreen.className='ggskin ggskin_container ';
		this._button_simplex_fullscreen.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 291px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._button_simplex_fullscreen.setAttribute('style',hs);
		this._button_simplex_fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_simplex_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_simplex_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._button_simplex_fullscreen.ggCurrentLogicStateVisible = -1;
		this._button_simplex_fullscreen.ggUpdateConditionNodeChange=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_simplex_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_simplex_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_simplex_fullscreen.style[domTransition]='';
				if (me._button_simplex_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_simplex_fullscreen.style.visibility="hidden";
					me._button_simplex_fullscreen.ggVisible=false;
				}
				else {
					me._button_simplex_fullscreen.style.visibility=(Number(me._button_simplex_fullscreen.style.opacity)>0||!me._button_simplex_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_simplex_fullscreen.ggVisible=true;
				}
			}
		}
		this._button_simplex_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._button_simplex_fullscreen.ggNodeChange=function () {
			me._button_simplex_fullscreen.ggUpdateConditionNodeChange();
		}
		this._button_image_normalscreen=document.createElement('div');
		this._button_image_normalscreen__img=document.createElement('img');
		this._button_image_normalscreen__img.className='ggskin ggskin_svg';
		this._button_image_normalscreen__img.setAttribute('src',basePath + 'images/button_image_normalscreen.svg');
		this._button_image_normalscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_normalscreen__img['ondragstart']=function() { return false; };
		this._button_image_normalscreen.appendChild(this._button_image_normalscreen__img);
		this._button_image_normalscreen__imgo=document.createElement('img');
		this._button_image_normalscreen__imgo.className='ggskin ggskin_svg';
		this._button_image_normalscreen__imgo.setAttribute('src',basePath + 'images/button_image_normalscreen__o.svg');
		this._button_image_normalscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_normalscreen__imgo['ondragstart']=function() { return false; };
		this._button_image_normalscreen.appendChild(this._button_image_normalscreen__imgo);
		this._button_image_normalscreen.ggId="button_image_normalscreen";
		this._button_image_normalscreen.ggLeft=-32;
		this._button_image_normalscreen.ggTop=-32;
		this._button_image_normalscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_normalscreen.ggVisible=false;
		this._button_image_normalscreen.className='ggskin ggskin_svg ';
		this._button_image_normalscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._button_image_normalscreen.setAttribute('style',hs);
		this._button_image_normalscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_normalscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_normalscreen.onclick=function (e) {
			me.player.exitFullscreen();
		}
		this._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_normalscreen']=true;
		}
		this._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		this._button_image_normalscreen.ontouchend=function (e) {
			me.elementMouseOver['button_image_normalscreen']=false;
		}
		me._button_image_normalscreen.ggCurrentLogicStateVisible = -1;
		this._button_image_normalscreen.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		this._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			me._button_image_normalscreen.ggUpdateConditionResize();
		}
		this._tt_exit_fullscreen=document.createElement('div');
		this._tt_exit_fullscreen__text=document.createElement('div');
		this._tt_exit_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_exit_fullscreen.ggTextDiv=this._tt_exit_fullscreen__text;
		this._tt_exit_fullscreen.ggId="tt_exit_fullscreen";
		this._tt_exit_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_exit_fullscreen.ggVisible=false;
		this._tt_exit_fullscreen.className='ggskin ggskin_text ';
		this._tt_exit_fullscreen.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_exit_fullscreen.setAttribute('style',hs);
		this._tt_exit_fullscreen.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_exit_fullscreen__text.setAttribute('style',hs);
		this._tt_exit_fullscreen__text.innerHTML="Exit Fullscreen";
		this._tt_exit_fullscreen.appendChild(this._tt_exit_fullscreen__text);
		me._tt_exit_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_exit_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_exit_fullscreen.ggCurrentLogicStateVisible = -1;
		this._tt_exit_fullscreen.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_image_normalscreen'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_exit_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_exit_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_exit_fullscreen.style[domTransition]='';
				if (me._tt_exit_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_exit_fullscreen.style.visibility=(Number(me._tt_exit_fullscreen.style.opacity)>0||!me._tt_exit_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_exit_fullscreen.ggVisible=true;
				}
				else {
					me._tt_exit_fullscreen.style.visibility="hidden";
					me._tt_exit_fullscreen.ggVisible=false;
				}
			}
		}
		this._tt_exit_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._tt_exit_fullscreen_white=document.createElement('div');
		this._tt_exit_fullscreen_white__text=document.createElement('div');
		this._tt_exit_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_exit_fullscreen_white.ggTextDiv=this._tt_exit_fullscreen_white__text;
		this._tt_exit_fullscreen_white.ggId="tt_exit_fullscreen_white";
		this._tt_exit_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_exit_fullscreen_white.ggVisible=true;
		this._tt_exit_fullscreen_white.className='ggskin ggskin_text ';
		this._tt_exit_fullscreen_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_exit_fullscreen_white.setAttribute('style',hs);
		this._tt_exit_fullscreen_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_exit_fullscreen_white__text.setAttribute('style',hs);
		this._tt_exit_fullscreen_white__text.innerHTML="Exit Fullscreen";
		this._tt_exit_fullscreen_white.appendChild(this._tt_exit_fullscreen_white__text);
		me._tt_exit_fullscreen_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_exit_fullscreen_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_exit_fullscreen_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_exit_fullscreen.appendChild(this._tt_exit_fullscreen_white);
		this._button_image_normalscreen.appendChild(this._tt_exit_fullscreen);
		this._button_simplex_fullscreen.appendChild(this._button_image_normalscreen);
		this._button_image_fullscreen=document.createElement('div');
		this._button_image_fullscreen__img=document.createElement('img');
		this._button_image_fullscreen__img.className='ggskin ggskin_svg';
		this._button_image_fullscreen__img.setAttribute('src',basePath + 'images/button_image_fullscreen.svg');
		this._button_image_fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_fullscreen__img['ondragstart']=function() { return false; };
		this._button_image_fullscreen.appendChild(this._button_image_fullscreen__img);
		this._button_image_fullscreen__imgo=document.createElement('img');
		this._button_image_fullscreen__imgo.className='ggskin ggskin_svg';
		this._button_image_fullscreen__imgo.setAttribute('src',basePath + 'images/button_image_fullscreen__o.svg');
		this._button_image_fullscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_fullscreen__imgo['ondragstart']=function() { return false; };
		this._button_image_fullscreen.appendChild(this._button_image_fullscreen__imgo);
		this._button_image_fullscreen.ggId="button_image_fullscreen";
		this._button_image_fullscreen.ggLeft=-32;
		this._button_image_fullscreen.ggTop=-32;
		this._button_image_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_fullscreen.ggVisible=true;
		this._button_image_fullscreen.className='ggskin ggskin_svg ';
		this._button_image_fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -32px;';
		hs+='position : absolute;';
		hs+='top : -32px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._button_image_fullscreen.setAttribute('style',hs);
		this._button_image_fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_fullscreen.onclick=function (e) {
			me.player.enterFullscreen();
		}
		this._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_fullscreen']=true;
		}
		this._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		this._button_image_fullscreen.ontouchend=function (e) {
			me.elementMouseOver['button_image_fullscreen']=false;
		}
		me._button_image_fullscreen.ggCurrentLogicStateVisible = -1;
		this._button_image_fullscreen.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		this._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			me._button_image_fullscreen.ggUpdateConditionResize();
		}
		this._tt_enter_fullscreen=document.createElement('div');
		this._tt_enter_fullscreen__text=document.createElement('div');
		this._tt_enter_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_enter_fullscreen.ggTextDiv=this._tt_enter_fullscreen__text;
		this._tt_enter_fullscreen.ggId="tt_enter_fullscreen";
		this._tt_enter_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_enter_fullscreen.ggVisible=false;
		this._tt_enter_fullscreen.className='ggskin ggskin_text ';
		this._tt_enter_fullscreen.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_enter_fullscreen.setAttribute('style',hs);
		this._tt_enter_fullscreen.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_enter_fullscreen__text.setAttribute('style',hs);
		this._tt_enter_fullscreen__text.innerHTML="Enter Fullscreen";
		this._tt_enter_fullscreen.appendChild(this._tt_enter_fullscreen__text);
		me._tt_enter_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_enter_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_enter_fullscreen.ggCurrentLogicStateVisible = -1;
		this._tt_enter_fullscreen.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['button_image_fullscreen'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_fullscreen.style[domTransition]='';
				if (me._tt_enter_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_fullscreen.style.visibility=(Number(me._tt_enter_fullscreen.style.opacity)>0||!me._tt_enter_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_enter_fullscreen.ggVisible=true;
				}
				else {
					me._tt_enter_fullscreen.style.visibility="hidden";
					me._tt_enter_fullscreen.ggVisible=false;
				}
			}
		}
		this._tt_enter_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		this._tt_enter_fullscreen_white=document.createElement('div');
		this._tt_enter_fullscreen_white__text=document.createElement('div');
		this._tt_enter_fullscreen_white.className='ggskin ggskin_textdiv';
		this._tt_enter_fullscreen_white.ggTextDiv=this._tt_enter_fullscreen_white__text;
		this._tt_enter_fullscreen_white.ggId="tt_enter_fullscreen_white";
		this._tt_enter_fullscreen_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_enter_fullscreen_white.ggVisible=true;
		this._tt_enter_fullscreen_white.className='ggskin ggskin_text ';
		this._tt_enter_fullscreen_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_enter_fullscreen_white.setAttribute('style',hs);
		this._tt_enter_fullscreen_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_enter_fullscreen_white__text.setAttribute('style',hs);
		this._tt_enter_fullscreen_white__text.innerHTML="Enter Fullscreen";
		this._tt_enter_fullscreen_white.appendChild(this._tt_enter_fullscreen_white__text);
		me._tt_enter_fullscreen_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_enter_fullscreen_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_enter_fullscreen_white.ggUpdatePosition=function (useTransition) {
		}
		this._tt_enter_fullscreen.appendChild(this._tt_enter_fullscreen_white);
		this._button_image_fullscreen.appendChild(this._tt_enter_fullscreen);
		this._button_simplex_fullscreen.appendChild(this._button_image_fullscreen);
		this._controller.appendChild(this._button_simplex_fullscreen);
		this._svg_1=document.createElement('div');
		this._svg_1__img=document.createElement('img');
		this._svg_1__img.className='ggskin ggskin_svg';
		this._svg_1__img.setAttribute('src',basePath + 'images/svg_1.svg');
		this._svg_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._svg_1__img['ondragstart']=function() { return false; };
		this._svg_1.appendChild(this._svg_1__img);
		this._svg_1.ggId="Svg 1";
		this._svg_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1.ggVisible=true;
		this._svg_1.className='ggskin ggskin_svg ';
		this._svg_1.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -2px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._svg_1.setAttribute('style',hs);
		this._svg_1.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._svg_1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._svg_1.onclick=function (e) {
			me._thumbs_barra.ggVisible = !me._thumbs_barra.ggVisible;
			var flag=me._thumbs_barra.ggVisible;
			me._thumbs_barra.style[domTransition]='none';
			me._thumbs_barra.style.visibility=((flag)&&(Number(me._thumbs_barra.style.opacity)>0||!me._thumbs_barra.style.opacity))?'inherit':'hidden';
		}
		this._svg_1.ggUpdatePosition=function (useTransition) {
		}
		this._controller.appendChild(this._svg_1);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggLeft=-105;
		this._loading.ggTop=-30;
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=true;
		this._loading.className='ggskin ggskin_container ';
		this._loading.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : -30px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		this._loading.setAttribute('style',hs);
		this._loading.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		me._loading.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle ';
		this._loadingbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		this._loadingbg.setAttribute('style',hs);
		this._loadingbg.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingbg);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text ';
		this._loadingtext.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:auto;';
		this._loadingtext.setAttribute('style',hs);
		this._loadingtext.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(me.player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingtext.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle ';
		this._loadingbar.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		this._loadingbar.setAttribute('style',hs);
		this._loadingbar.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loadingbar.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._screentint=document.createElement('div');
		this._screentint.ggId="screentint";
		this._screentint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint.ggVisible=false;
		this._screentint.className='ggskin ggskin_rectangle ';
		this._screentint.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screentint.setAttribute('style',hs);
		this._screentint.style[domTransform + 'Origin']='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		me._screentint.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint.onclick=function (e) {
			me._close.style[domTransition]='none';
			me._close.style.visibility='hidden';
			me._close.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
			me._popup_video_youtube.ggInitMedia('');
			me._popup_video_youtube.style[domTransition]='none';
			me._popup_video_youtube.style.visibility='hidden';
			me._popup_video_youtube.ggVisible=false;
			me._video_popup_youtube.style[domTransition]='none';
			me._video_popup_youtube.style.visibility='hidden';
			me._video_popup_youtube.ggVisible=false;
			me._popup_video_vimeo.ggInitMedia('');
			me._popup_video_vimeo.style[domTransition]='none';
			me._popup_video_vimeo.style.visibility='hidden';
			me._popup_video_vimeo.ggVisible=false;
			me._video_popup_vimeo.style[domTransition]='none';
			me._video_popup_vimeo.style.visibility='hidden';
			me._video_popup_vimeo.ggVisible=false;
			me._popup_video_url.ggInitMedia('');
			me._popup_video_url.style[domTransition]='none';
			me._popup_video_url.style.visibility='hidden';
			me._popup_video_url.ggVisible=false;
			me._video_popup_url.style[domTransition]='none';
			me._video_popup_url.style.visibility='hidden';
			me._video_popup_url.ggVisible=false;
			me._video_popup_controls_url.style[domTransition]='none';
			me._video_popup_controls_url.style.visibility='hidden';
			me._video_popup_controls_url.ggVisible=false;
			me._popup_video_file.ggInitMedia('');
			me._popup_video_file.style[domTransition]='none';
			me._popup_video_file.style.visibility='hidden';
			me._popup_video_file.ggVisible=false;
			me._video_popup_file.style[domTransition]='none';
			me._video_popup_file.style.visibility='hidden';
			me._video_popup_file.ggVisible=false;
			me._video_popup_controls_file.style[domTransition]='none';
			me._video_popup_controls_file.style.visibility='hidden';
			me._video_popup_controls_file.ggVisible=false;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._userdata.style[domTransition]='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		this._screentint.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._screentint);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggLeft=-148;
		this._information.ggTop=-150;
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information.ggVisible=false;
		this._information.className='ggskin ggskin_container ';
		this._information.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -148px;';
		hs+='position : absolute;';
		hs+='top : -150px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._informationbg=document.createElement('div');
		this._informationbg.ggId="informationbg";
		this._informationbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._informationbg.ggVisible=true;
		this._informationbg.className='ggskin ggskin_rectangle ';
		this._informationbg.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 248px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 298px;';
		hs+='pointer-events:auto;';
		this._informationbg.setAttribute('style',hs);
		this._informationbg.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._informationbg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._informationbg.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._informationbg);
		this._info_text_body=document.createElement('div');
		this._info_text_body__text=document.createElement('div');
		this._info_text_body.className='ggskin ggskin_textdiv';
		this._info_text_body.ggTextDiv=this._info_text_body__text;
		this._info_text_body.ggId="info_text_body";
		this._info_text_body.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_body.ggVisible=true;
		this._info_text_body.className='ggskin ggskin_text ';
		this._info_text_body.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		hs+='pointer-events:auto;';
		this._info_text_body.setAttribute('style',hs);
		this._info_text_body.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 274px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_text_body__text.setAttribute('style',hs);
		this._info_text_body__text.innerHTML="";
		this._info_text_body.appendChild(this._info_text_body__text);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_body.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._info_text_body);
		this._info_title=document.createElement('div');
		this._info_title__text=document.createElement('div');
		this._info_title.className='ggskin ggskin_textdiv';
		this._info_title.ggTextDiv=this._info_title__text;
		this._info_title.ggId="info_title";
		this._info_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_title.ggVisible=true;
		this._info_title.className='ggskin ggskin_text ';
		this._info_title.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		this._info_title.setAttribute('style',hs);
		this._info_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 99px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_title__text.setAttribute('style',hs);
		this._info_title__text.innerHTML="";
		this._info_title.appendChild(this._info_title__text);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_title.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._info_title);
		this._ht_info_close=document.createElement('div');
		this._ht_info_close__img=document.createElement('img');
		this._ht_info_close__img.className='ggskin ggskin_svg';
		this._ht_info_close__img.setAttribute('src',basePath + 'images/ht_info_close.svg');
		this._ht_info_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_info_close__img['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__img);
		this._ht_info_close__imgo=document.createElement('img');
		this._ht_info_close__imgo.className='ggskin ggskin_svg';
		this._ht_info_close__imgo.setAttribute('src',basePath + 'images/ht_info_close__o.svg');
		this._ht_info_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_info_close__imgo['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__imgo);
		this._ht_info_close.ggId="ht_info_close";
		this._ht_info_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info_close.ggVisible=true;
		this._ht_info_close.className='ggskin ggskin_svg ';
		this._ht_info_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 263px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._ht_info_close.setAttribute('style',hs);
		this._ht_info_close.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_info_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_info_close.onclick=function (e) {
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
		}
		this._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		this._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		this._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._ht_info_close);
		this.divSkin.appendChild(this._information);
		this._image_popup=document.createElement('div');
		this._image_popup.ggId="image_popup";
		this._image_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup.ggVisible=false;
		this._image_popup.className='ggskin ggskin_container ';
		this._image_popup.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		this._image_popup.setAttribute('style',hs);
		this._image_popup.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		me._image_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup.ggUpdatePosition=function (useTransition) {
		}
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_svg';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.svg');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img['ondragstart']=function() { return false; };
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading_image";
		this._loading_image.ggLeft=-20;
		this._loading_image.ggTop=-20;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_svg ';
		this._loading_image.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._image_popup.appendChild(this._loading_image);
		this._popup_image=document.createElement('div');
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		this._popup_image__img.setAttribute('src',basePath + '');
		this._popup_image__img['ondragstart']=function() { return false; };
		hs ='';
		this._popup_image.appendChild(this._popup_image__img);
		this._popup_image.ggId="popup_image";
		this._popup_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image.ggVisible=true;
		this._popup_image.className='ggskin ggskin_external ';
		this._popup_image.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._popup_image.setAttribute('style',hs);
		this._popup_image.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._image_popup.appendChild(this._popup_image);
		this.divSkin.appendChild(this._image_popup);
		this._video_popup_file=document.createElement('div');
		this._video_popup_file.ggId="video_popup_file";
		this._video_popup_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_file.ggVisible=false;
		this._video_popup_file.className='ggskin ggskin_container ';
		this._video_popup_file.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		this._video_popup_file.setAttribute('style',hs);
		this._video_popup_file.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		me._video_popup_file.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		this._loading_video_file=document.createElement('div');
		this._loading_video_file__img=document.createElement('img');
		this._loading_video_file__img.className='ggskin ggskin_svg';
		this._loading_video_file__img.setAttribute('src',basePath + 'images/loading_video_file.svg');
		this._loading_video_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_video_file__img['ondragstart']=function() { return false; };
		this._loading_video_file.appendChild(this._loading_video_file__img);
		this._loading_video_file.ggId="loading_video_file";
		this._loading_video_file.ggLeft=-20;
		this._loading_video_file.ggTop=-20;
		this._loading_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_file.ggVisible=true;
		this._loading_video_file.className='ggskin ggskin_svg ';
		this._loading_video_file.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._loading_video_file.setAttribute('style',hs);
		this._loading_video_file.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._video_popup_file.appendChild(this._loading_video_file);
		this._popup_video_file=document.createElement('div');
		this._popup_video_file.seekbars = [];
		this._popup_video_file.seekbars.push('seekbar_file');
		this._popup_video_file.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_file.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('autoplay', '');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = me.player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._popup_video_file.ggVideoSource = media;
		}
		this._popup_video_file.ggId="popup_video_file";
		this._popup_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_video_file.ggVisible=false;
		this._popup_video_file.className='ggskin ggskin_video ';
		this._popup_video_file.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._popup_video_file.setAttribute('style',hs);
		this._popup_video_file.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.currentTime > 0 && me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		me._popup_video_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_file.appendChild(this._popup_video_file);
		this.divSkin.appendChild(this._video_popup_file);
		this._video_popup_controls_file=document.createElement('div');
		this._video_popup_controls_file.ggId="video_popup_controls_file";
		this._video_popup_controls_file.ggLeft=-142;
		this._video_popup_controls_file.ggTop=-31;
		this._video_popup_controls_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_controls_file.ggVisible=false;
		this._video_popup_controls_file.className='ggskin ggskin_container ';
		this._video_popup_controls_file.ggType='container';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -142px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		this._video_popup_controls_file.setAttribute('style',hs);
		this._video_popup_controls_file.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		me._video_popup_controls_file.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._seekbar_file=document.createElement('div');
		this._seekbar_file__playhead=document.createElement('div');
		this._seekbar_file.mediaEl = null;
		this._seekbar_file.ggId="seekbar_file";
		this._seekbar_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._seekbar_file.ggVisible=true;
		this._seekbar_file.className='ggskin ggskin_seekbar ';
		this._seekbar_file.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		this._seekbar_file.setAttribute('style',hs);
		this._seekbar_file.style[domTransform + 'Origin']='50% 50%';
		this._seekbar_file.connectToMediaEl = function() {
			disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#ffffff';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
			}
			me._seekbar_file.mediaEl = me.player.getMediaObject('popup_video_file');
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '0px';
				me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
				if (me._seekbar_file.ggActivate) {
					me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
				}
				if (me._seekbar_file.ggDeactivate) {
					me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
					me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
				}
			me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_file');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		this._seekbar_file.updatePlayback = function() {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState) {
					var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 0;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #c0c0c0 ' + currPos + '%';
							} else {
								gradientString += ', #ffffff ' + currPos + '%, #ffffff ' + rangeStart + '%';
								gradientString += ', #c0c0c0 ' + rangeStart + '%';
							}
								gradientString += ', #c0c0c0 ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #ffffff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		this._seekbar_file.appendChild(this._seekbar_file__playhead);
		var hs;
		hs+='background: #ffffff;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 0px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 8;';
		hs_playhead += cssPrefix + 'border-radius: 8px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		hs_playhead += 'pointer-events: none;';
		this._seekbar_file.setAttribute('style', hs);
		this._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.currentTime > 0 && me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		me._seekbar_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._seekbar_file.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_file.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_file.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		this._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		this._seekbar_file.ggUpdatePosition=function (useTransition) {
		}
		this._seekbar_file.ggNodeChange=function () {
			me._seekbar_file.connectToMediaEl();
		}
		this._video_popup_controls_file.appendChild(this._seekbar_file);
		this._ht_video_play_file=document.createElement('div');
		this._ht_video_play_file__img=document.createElement('img');
		this._ht_video_play_file__img.className='ggskin ggskin_svg';
		this._ht_video_play_file__img.setAttribute('src',basePath + 'images/ht_video_play_file.svg');
		this._ht_video_play_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_video_play_file__img['ondragstart']=function() { return false; };
		this._ht_video_play_file.appendChild(this._ht_video_play_file__img);
		this._ht_video_play_file__imgo=document.createElement('img');
		this._ht_video_play_file__imgo.className='ggskin ggskin_svg';
		this._ht_video_play_file__imgo.setAttribute('src',basePath + 'images/ht_video_play_file__o.svg');
		this._ht_video_play_file__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_video_play_file__imgo['ondragstart']=function() { return false; };
		this._ht_video_play_file.appendChild(this._ht_video_play_file__imgo);
		this._ht_video_play_file.ggId="ht_video_play_file";
		this._ht_video_play_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_play_file.ggVisible=false;
		this._ht_video_play_file.className='ggskin ggskin_svg ';
		this._ht_video_play_file.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._ht_video_play_file.setAttribute('style',hs);
		this._ht_video_play_file.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_play_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_play_file.onclick=function (e) {
			me.player.playSound("popup_video_file","1");
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		this._ht_video_play_file.onmouseover=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
		}
		this._ht_video_play_file.onmouseout=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
		}
		this._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_controls_file.appendChild(this._ht_video_play_file);
		this._ht_video_pause_file=document.createElement('div');
		this._ht_video_pause_file__img=document.createElement('img');
		this._ht_video_pause_file__img.className='ggskin ggskin_svg';
		this._ht_video_pause_file__img.setAttribute('src',basePath + 'images/ht_video_pause_file.svg');
		this._ht_video_pause_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_video_pause_file__img['ondragstart']=function() { return false; };
		this._ht_video_pause_file.appendChild(this._ht_video_pause_file__img);
		this._ht_video_pause_file__imgo=document.createElement('img');
		this._ht_video_pause_file__imgo.className='ggskin ggskin_svg';
		this._ht_video_pause_file__imgo.setAttribute('src',basePath + 'images/ht_video_pause_file__o.svg');
		this._ht_video_pause_file__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_video_pause_file__imgo['ondragstart']=function() { return false; };
		this._ht_video_pause_file.appendChild(this._ht_video_pause_file__imgo);
		this._ht_video_pause_file.ggId="ht_video_pause_file";
		this._ht_video_pause_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_pause_file.ggVisible=true;
		this._ht_video_pause_file.className='ggskin ggskin_svg ';
		this._ht_video_pause_file.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._ht_video_pause_file.setAttribute('style',hs);
		this._ht_video_pause_file.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_pause_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_pause_file.onclick=function (e) {
			me.player.pauseSound("popup_video_file");
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		this._ht_video_pause_file.onmouseover=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
		}
		this._ht_video_pause_file.onmouseout=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
		}
		this._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_controls_file.appendChild(this._ht_video_pause_file);
		this.divSkin.appendChild(this._video_popup_controls_file);
		this._video_popup_url=document.createElement('div');
		this._video_popup_url.ggId="video_popup_url";
		this._video_popup_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_url.ggVisible=false;
		this._video_popup_url.className='ggskin ggskin_container ';
		this._video_popup_url.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		this._video_popup_url.setAttribute('style',hs);
		this._video_popup_url.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_url.ggIsActive=function() {
			return false;
		}
		me._video_popup_url.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_url.ggUpdatePosition=function (useTransition) {
		}
		this._loading_video_url=document.createElement('div');
		this._loading_video_url__img=document.createElement('img');
		this._loading_video_url__img.className='ggskin ggskin_svg';
		this._loading_video_url__img.setAttribute('src',basePath + 'images/loading_video_url.svg');
		this._loading_video_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_video_url__img['ondragstart']=function() { return false; };
		this._loading_video_url.appendChild(this._loading_video_url__img);
		this._loading_video_url.ggId="loading_video_url";
		this._loading_video_url.ggLeft=-20;
		this._loading_video_url.ggTop=-20;
		this._loading_video_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_url.ggVisible=true;
		this._loading_video_url.className='ggskin ggskin_svg ';
		this._loading_video_url.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._loading_video_url.setAttribute('style',hs);
		this._loading_video_url.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._video_popup_url.appendChild(this._loading_video_url);
		this._popup_video_url=document.createElement('div');
		this._popup_video_url.seekbars = [];
		this._popup_video_url.seekbars.push('seekbar_url');
		this._popup_video_url.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_url.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_url.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_url.hasChildNodes()) {
				me._popup_video_url.removeChild(me._popup_video_url.lastChild);
			}
			if (me._popup_video_url__vid) {
				me._popup_video_url__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_url.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_url.ggVideoNotLoaded = false;
			me._popup_video_url__vid=document.createElement('video');
			me._popup_video_url__vid.className='ggskin ggskin_video';
			me._popup_video_url__vid.setAttribute('width', '100%');
			me._popup_video_url__vid.setAttribute('height', '100%');
			me._popup_video_url__vid.setAttribute('autoplay', '');
			me._popup_video_url__source=document.createElement('source');
			me._popup_video_url__source.setAttribute('src', media);
			me._popup_video_url__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_url__vid.appendChild(me._popup_video_url__source);
			me._popup_video_url.appendChild(me._popup_video_url__vid);
			var videoEl = me.player.registerVideoElement('popup_video_url', me._popup_video_url__vid);
			videoEl.autoplay = true;
			notifySeekbars();
			me._popup_video_url.ggVideoSource = media;
		}
		this._popup_video_url.ggId="popup_video_url";
		this._popup_video_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_video_url.ggVisible=false;
		this._popup_video_url.className='ggskin ggskin_video ';
		this._popup_video_url.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._popup_video_url.setAttribute('style',hs);
		this._popup_video_url.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_url.ggIsActive=function() {
			if (me._popup_video_url__vid != null) {
				return (me._popup_video_url__vid.currentTime > 0 && me._popup_video_url__vid.paused == false && me._popup_video_url__vid.ended == false);
			} else {
				return false;
			}
		}
		me._popup_video_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_video_url.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_url.appendChild(this._popup_video_url);
		this.divSkin.appendChild(this._video_popup_url);
		this._video_popup_controls_url=document.createElement('div');
		this._video_popup_controls_url.ggId="video_popup_controls_url";
		this._video_popup_controls_url.ggLeft=-142;
		this._video_popup_controls_url.ggTop=-31;
		this._video_popup_controls_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_controls_url.ggVisible=false;
		this._video_popup_controls_url.className='ggskin ggskin_container ';
		this._video_popup_controls_url.ggType='container';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -142px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		this._video_popup_controls_url.setAttribute('style',hs);
		this._video_popup_controls_url.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_url.ggIsActive=function() {
			return false;
		}
		me._video_popup_controls_url.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_controls_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._seekbar_url=document.createElement('div');
		this._seekbar_url__playhead=document.createElement('div');
		this._seekbar_url.mediaEl = null;
		this._seekbar_url.ggId="seekbar_url";
		this._seekbar_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._seekbar_url.ggVisible=true;
		this._seekbar_url.className='ggskin ggskin_seekbar ';
		this._seekbar_url.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		this._seekbar_url.setAttribute('style',hs);
		this._seekbar_url.style[domTransform + 'Origin']='50% 50%';
		this._seekbar_url.connectToMediaEl = function() {
			disableSeekbar = function() {
				me._seekbar_url__playhead.style.visibility = 'hidden';
				me._seekbar_url.style.background = '#ffffff';
				me._seekbar_url.ggConnected = false;
			}
			if (me._seekbar_url.mediaEl != null) {
				me._seekbar_url.mediaEl.removeEventListener('progress', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.removeEventListener('canplay', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.removeEventListener('timeupdate', me._seekbar_url.updatePlayback);
			}
			me._seekbar_url.mediaEl = me.player.getMediaObject('popup_video_url');
			if (me._seekbar_url.mediaEl != null) {
				me._seekbar_url__playhead.style.visibility = 'inherit';
				me._seekbar_url__playhead.style.left = '0px';
				me._seekbar_url.mediaEl.addEventListener('progress', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.addEventListener('canplay', me._seekbar_url.updatePlayback);
				me._seekbar_url.mediaEl.addEventListener('timeupdate', me._seekbar_url.updatePlayback);
				if (me._seekbar_url.ggActivate) {
					me._seekbar_url.mediaEl.addEventListener('play', me._seekbar_url.ggActivate);
				}
				if (me._seekbar_url.ggDeactivate) {
					me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggDeactivate);
					me._seekbar_url.mediaEl.addEventListener('pause', me._seekbar_url.ggDeactivate);
				}
			me._seekbar_url.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_url');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		this._seekbar_url.updatePlayback = function() {
			if (!me._seekbar_url.ggConnected) return;
			if (me._seekbar_url.mediaEl != null) {
				if (me._seekbar_url.mediaEl.readyState) {
					var percent = me._seekbar_url.mediaEl.currentTime / me._seekbar_url.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_url.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 0;
					me._seekbar_url__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_url.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					for (var i = 0; i < me._seekbar_url.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_url.mediaEl.buffered.start(i) / me._seekbar_url.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_url.mediaEl.buffered.end(i) / me._seekbar_url.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #c0c0c0 ' + currPos + '%';
							} else {
								gradientString += ', #ffffff ' + currPos + '%, #ffffff ' + rangeStart + '%';
								gradientString += ', #c0c0c0 ' + rangeStart + '%';
							}
								gradientString += ', #c0c0c0 ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #ffffff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_url.style.background = gradientString;
				}
			}
		}
		this._seekbar_url.appendChild(this._seekbar_url__playhead);
		var hs;
		hs+='background: #ffffff;';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 0px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 8;';
		hs_playhead += cssPrefix + 'border-radius: 8px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		hs_playhead += 'pointer-events: none;';
		this._seekbar_url.setAttribute('style', hs);
		this._seekbar_url__playhead.setAttribute('style', hs_playhead);
		me._seekbar_url.ggIsActive=function() {
			if (me._seekbar_url.mediaEl != null) {
				return (me._seekbar_url.mediaEl.currentTime > 0 && me._seekbar_url.mediaEl.paused == false && me._seekbar_url.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		me._seekbar_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._seekbar_url.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_url.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_url.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_url.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
					me._seekbar_url.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_url.ggActivate=function () {
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
		}
		this._seekbar_url.ggDeactivate=function () {
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
		}
		this._seekbar_url.ggUpdatePosition=function (useTransition) {
		}
		this._seekbar_url.ggNodeChange=function () {
			me._seekbar_url.connectToMediaEl();
		}
		this._video_popup_controls_url.appendChild(this._seekbar_url);
		this._ht_video_play_url=document.createElement('div');
		this._ht_video_play_url__img=document.createElement('img');
		this._ht_video_play_url__img.className='ggskin ggskin_svg';
		this._ht_video_play_url__img.setAttribute('src',basePath + 'images/ht_video_play_url.svg');
		this._ht_video_play_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_video_play_url__img['ondragstart']=function() { return false; };
		this._ht_video_play_url.appendChild(this._ht_video_play_url__img);
		this._ht_video_play_url__imgo=document.createElement('img');
		this._ht_video_play_url__imgo.className='ggskin ggskin_svg';
		this._ht_video_play_url__imgo.setAttribute('src',basePath + 'images/ht_video_play_url__o.svg');
		this._ht_video_play_url__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_video_play_url__imgo['ondragstart']=function() { return false; };
		this._ht_video_play_url.appendChild(this._ht_video_play_url__imgo);
		this._ht_video_play_url.ggId="ht_video_play_url";
		this._ht_video_play_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_play_url.ggVisible=false;
		this._ht_video_play_url.className='ggskin ggskin_svg ';
		this._ht_video_play_url.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._ht_video_play_url.setAttribute('style',hs);
		this._ht_video_play_url.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_play_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_play_url.onclick=function (e) {
			me.player.playSound("popup_video_url","1");
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
		}
		this._ht_video_play_url.onmouseover=function (e) {
			me._ht_video_play_url__img.style.visibility='hidden';
			me._ht_video_play_url__imgo.style.visibility='inherit';
		}
		this._ht_video_play_url.onmouseout=function (e) {
			me._ht_video_play_url__img.style.visibility='inherit';
			me._ht_video_play_url__imgo.style.visibility='hidden';
		}
		this._ht_video_play_url.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_controls_url.appendChild(this._ht_video_play_url);
		this._ht_video_pause_url=document.createElement('div');
		this._ht_video_pause_url__img=document.createElement('img');
		this._ht_video_pause_url__img.className='ggskin ggskin_svg';
		this._ht_video_pause_url__img.setAttribute('src',basePath + 'images/ht_video_pause_url.svg');
		this._ht_video_pause_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_video_pause_url__img['ondragstart']=function() { return false; };
		this._ht_video_pause_url.appendChild(this._ht_video_pause_url__img);
		this._ht_video_pause_url__imgo=document.createElement('img');
		this._ht_video_pause_url__imgo.className='ggskin ggskin_svg';
		this._ht_video_pause_url__imgo.setAttribute('src',basePath + 'images/ht_video_pause_url__o.svg');
		this._ht_video_pause_url__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_video_pause_url__imgo['ondragstart']=function() { return false; };
		this._ht_video_pause_url.appendChild(this._ht_video_pause_url__imgo);
		this._ht_video_pause_url.ggId="ht_video_pause_url";
		this._ht_video_pause_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_pause_url.ggVisible=true;
		this._ht_video_pause_url.className='ggskin ggskin_svg ';
		this._ht_video_pause_url.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._ht_video_pause_url.setAttribute('style',hs);
		this._ht_video_pause_url.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_pause_url.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_pause_url.onclick=function (e) {
			me.player.pauseSound("popup_video_url");
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
		}
		this._ht_video_pause_url.onmouseover=function (e) {
			me._ht_video_pause_url__img.style.visibility='hidden';
			me._ht_video_pause_url__imgo.style.visibility='inherit';
		}
		this._ht_video_pause_url.onmouseout=function (e) {
			me._ht_video_pause_url__img.style.visibility='inherit';
			me._ht_video_pause_url__imgo.style.visibility='hidden';
		}
		this._ht_video_pause_url.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_controls_url.appendChild(this._ht_video_pause_url);
		this.divSkin.appendChild(this._video_popup_controls_url);
		this._video_popup_vimeo=document.createElement('div');
		this._video_popup_vimeo.ggId="video_popup_vimeo";
		this._video_popup_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_vimeo.ggVisible=false;
		this._video_popup_vimeo.className='ggskin ggskin_container ';
		this._video_popup_vimeo.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		this._video_popup_vimeo.setAttribute('style',hs);
		this._video_popup_vimeo.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_vimeo.ggIsActive=function() {
			return false;
		}
		me._video_popup_vimeo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_vimeo.ggUpdatePosition=function (useTransition) {
		}
		this._loading_video_vimeo=document.createElement('div');
		this._loading_video_vimeo__img=document.createElement('img');
		this._loading_video_vimeo__img.className='ggskin ggskin_svg';
		this._loading_video_vimeo__img.setAttribute('src',basePath + 'images/loading_video_vimeo.svg');
		this._loading_video_vimeo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_video_vimeo__img['ondragstart']=function() { return false; };
		this._loading_video_vimeo.appendChild(this._loading_video_vimeo__img);
		this._loading_video_vimeo.ggId="loading_video_vimeo";
		this._loading_video_vimeo.ggLeft=-20;
		this._loading_video_vimeo.ggTop=-20;
		this._loading_video_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_vimeo.ggVisible=true;
		this._loading_video_vimeo.className='ggskin ggskin_svg ';
		this._loading_video_vimeo.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._loading_video_vimeo.setAttribute('style',hs);
		this._loading_video_vimeo.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_vimeo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_vimeo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._video_popup_vimeo.appendChild(this._loading_video_vimeo);
		this._popup_video_vimeo=document.createElement('div');
		this._popup_video_vimeo.seekbars = [];
		this._popup_video_vimeo.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_vimeo.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_vimeo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_vimeo.hasChildNodes()) {
				me._popup_video_vimeo.removeChild(me._popup_video_vimeo.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_vimeo.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_vimeo.ggVideoNotLoaded = false;
			me._popup_video_vimeo__vid=document.createElement('iframe');
			me._popup_video_vimeo__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://player.vimeo.com/video/' + media + ggVideoParams;
			me._popup_video_vimeo__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_vimeo__vid.setAttribute('width', '100%');
			me._popup_video_vimeo__vid.setAttribute('height', '100%');
			me._popup_video_vimeo__vid.setAttribute('style', 'border:none; ');
			me._popup_video_vimeo.appendChild(me._popup_video_vimeo__vid);
			me._popup_video_vimeo.ggVideoSource = media;
		}
		this._popup_video_vimeo.ggId="popup_video_vimeo";
		this._popup_video_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_video_vimeo.ggVisible=false;
		this._popup_video_vimeo.className='ggskin ggskin_video ';
		this._popup_video_vimeo.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._popup_video_vimeo.setAttribute('style',hs);
		this._popup_video_vimeo.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_video_vimeo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_vimeo.appendChild(this._popup_video_vimeo);
		this.divSkin.appendChild(this._video_popup_vimeo);
		this._video_popup_youtube=document.createElement('div');
		this._video_popup_youtube.ggId="video_popup_youtube";
		this._video_popup_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_youtube.ggVisible=false;
		this._video_popup_youtube.className='ggskin ggskin_container ';
		this._video_popup_youtube.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		this._video_popup_youtube.setAttribute('style',hs);
		this._video_popup_youtube.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			return false;
		}
		me._video_popup_youtube.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_youtube.ggUpdatePosition=function (useTransition) {
		}
		this._loading_video_youtube=document.createElement('div');
		this._loading_video_youtube__img=document.createElement('img');
		this._loading_video_youtube__img.className='ggskin ggskin_svg';
		this._loading_video_youtube__img.setAttribute('src',basePath + 'images/loading_video_youtube.svg');
		this._loading_video_youtube__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_video_youtube__img['ondragstart']=function() { return false; };
		this._loading_video_youtube.appendChild(this._loading_video_youtube__img);
		this._loading_video_youtube.ggId="loading_video_youtube";
		this._loading_video_youtube.ggLeft=-20;
		this._loading_video_youtube.ggTop=-20;
		this._loading_video_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_youtube.ggVisible=true;
		this._loading_video_youtube.className='ggskin ggskin_svg ';
		this._loading_video_youtube.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._loading_video_youtube.setAttribute('style',hs);
		this._loading_video_youtube.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_youtube.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._video_popup_youtube.appendChild(this._loading_video_youtube);
		this._popup_video_youtube=document.createElement('div');
		this._popup_video_youtube.seekbars = [];
		this._popup_video_youtube.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_youtube.hasChildNodes()) {
				me._popup_video_youtube.removeChild(me._popup_video_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_youtube.ggVideoNotLoaded = false;
			me._popup_video_youtube__vid=document.createElement('iframe');
			me._popup_video_youtube__vid.className='ggskin ggskin_video';
		var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;rel=0';
		var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._popup_video_youtube__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_youtube__vid.setAttribute('width', '100%');
			me._popup_video_youtube__vid.setAttribute('height', '100%');
			me._popup_video_youtube__vid.setAttribute('style', 'border:none; ');
			me._popup_video_youtube.appendChild(me._popup_video_youtube__vid);
			me._popup_video_youtube.ggVideoSource = media;
		}
		this._popup_video_youtube.ggId="popup_video_youtube";
		this._popup_video_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_video_youtube.ggVisible=false;
		this._popup_video_youtube.className='ggskin ggskin_video ';
		this._popup_video_youtube.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._popup_video_youtube.setAttribute('style',hs);
		this._popup_video_youtube.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_video_youtube.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_youtube.appendChild(this._popup_video_youtube);
		this.divSkin.appendChild(this._video_popup_youtube);
		this._close=document.createElement('div');
		this._close__img=document.createElement('img');
		this._close__img.className='ggskin ggskin_svg';
		this._close__img.setAttribute('src',basePath + 'images/close.svg');
		this._close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._close__img['ondragstart']=function() { return false; };
		this._close.appendChild(this._close__img);
		this._close__imgo=document.createElement('img');
		this._close__imgo.className='ggskin ggskin_svg';
		this._close__imgo.setAttribute('src',basePath + 'images/close__o.svg');
		this._close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._close__imgo['ondragstart']=function() { return false; };
		this._close.appendChild(this._close__imgo);
		this._close.ggId="close";
		this._close.ggLeft=-37;
		this._close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close.ggVisible=false;
		this._close.className='ggskin ggskin_svg ';
		this._close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._close.setAttribute('style',hs);
		this._close.style[domTransform + 'Origin']='50% 50%';
		me._close.ggIsActive=function() {
			return false;
		}
		me._close.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._close.onclick=function (e) {
			me._close.style[domTransition]='none';
			me._close.style.visibility='hidden';
			me._close.ggVisible=false;
			me._screentint.style[domTransition]='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style[domTransition]='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
			me._popup_video_youtube.ggInitMedia('');
			me._popup_video_youtube.style[domTransition]='none';
			me._popup_video_youtube.style.visibility='hidden';
			me._popup_video_youtube.ggVisible=false;
			me._video_popup_youtube.style[domTransition]='none';
			me._video_popup_youtube.style.visibility='hidden';
			me._video_popup_youtube.ggVisible=false;
			me._popup_video_vimeo.ggInitMedia('');
			me._popup_video_vimeo.style[domTransition]='none';
			me._popup_video_vimeo.style.visibility='hidden';
			me._popup_video_vimeo.ggVisible=false;
			me._video_popup_vimeo.style[domTransition]='none';
			me._video_popup_vimeo.style.visibility='hidden';
			me._video_popup_vimeo.ggVisible=false;
			me._popup_video_url.ggInitMedia('');
			me._popup_video_url.style[domTransition]='none';
			me._popup_video_url.style.visibility='hidden';
			me._popup_video_url.ggVisible=false;
			me._video_popup_url.style[domTransition]='none';
			me._video_popup_url.style.visibility='hidden';
			me._video_popup_url.ggVisible=false;
			me._video_popup_controls_url.style[domTransition]='none';
			me._video_popup_controls_url.style.visibility='hidden';
			me._video_popup_controls_url.ggVisible=false;
			me._popup_video_file.ggInitMedia('');
			me._popup_video_file.style[domTransition]='none';
			me._popup_video_file.style.visibility='hidden';
			me._popup_video_file.ggVisible=false;
			me._video_popup_file.style[domTransition]='none';
			me._video_popup_file.style.visibility='hidden';
			me._video_popup_file.ggVisible=false;
			me._video_popup_controls_file.style[domTransition]='none';
			me._video_popup_controls_file.style.visibility='hidden';
			me._video_popup_controls_file.ggVisible=false;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
		}
		this._close.onmouseover=function (e) {
			me._close__img.style.visibility='hidden';
			me._close__imgo.style.visibility='inherit';
		}
		this._close.onmouseout=function (e) {
			me._close__img.style.visibility='inherit';
			me._close__imgo.style.visibility='hidden';
		}
		this._close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._close);
		this._thumbs_barra=document.createElement('div');
		this._thumbs_barra__content=document.createElement('div');
		this._thumbs_barra.ggContent=this._thumbs_barra__content;
		this._thumbs_barra.appendChild(this._thumbs_barra__content);
		hs ='';
		hs+='background : rgba(163,163,163,0.784314);';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._thumbs_barra__content.setAttribute('style',hs);
		this._thumbs_barra.ggId="thumbs_barra";
		this._thumbs_barra.ggTop=-155;
		this._thumbs_barra.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbs_barra.ggVisible=true;
		this._thumbs_barra.className='ggskin ggskin_scrollarea ';
		this._thumbs_barra.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='background : rgba(163,163,163,0.784314);';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 82px;';
		hs+='left : 5%;';
		hs+='overflow-x : auto;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : -155px;';
		hs+='visibility : inherit;';
		hs+='width : 90.9%;';
		hs+='pointer-events:auto;';
		hs+='border-radius: 5px;';
		this._thumbs_barra.setAttribute('style',hs);
		this._thumbs_barra.style[domTransform + 'Origin']='50% 50%';
		me._thumbs_barra.ggIsActive=function() {
			return false;
		}
		me._thumbs_barra.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._thumbs_barra.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._thumbnail_cloner=document.createElement('div');
		this._thumbnail_cloner.ggNumRepeat = 1;
		this._thumbnail_cloner.ggWidth = 98;
		this._thumbnail_cloner.ggHeight = 60;
		this._thumbnail_cloner.ggUpdating = false;
		this._thumbnail_cloner.ggFilter = [];
		this._thumbnail_cloner.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._thumbnail_cloner.ggFilter = filter;
			} else {
				filter = me._thumbnail_cloner.ggFilter;
			};
			if (me._thumbnail_cloner.hasChildNodes() == true) {
				while (me._thumbnail_cloner.firstChild) {
					me._thumbnail_cloner.removeChild(me._thumbnail_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numRows = me._thumbnail_cloner.ggNumRepeat;
			if (numRows < 1) numRows = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._thumbnail_cloner__node = document.createElement('div');
					me._thumbnail_cloner.appendChild(me._thumbnail_cloner__node);
					me._thumbnail_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._thumbnail_cloner.ggHeight) + 'px; left:' + (column * me._thumbnail_cloner.ggWidth) + 'px; height: ' + me._thumbnail_cloner.ggHeight + 'px; width: ' + me._thumbnail_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me);
					me._thumbnail_cloner__node.appendChild(inst.__div);
					me._thumbnail_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					row++;
					if (row >= numRows) {
						row = 0;
						column++;
					}
				}
			}
			me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._thumbnail_cloner.ggUpdating = false;
		}
		this._thumbnail_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				stack.push(me._thumbnail_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._thumbnail_cloner.ggTags = [];
		this._thumbnail_cloner.ggId="Thumbnail Cloner";
		this._thumbnail_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_cloner.ggVisible=true;
		this._thumbnail_cloner.className='ggskin ggskin_cloner ';
		this._thumbnail_cloner.ggType='cloner';
		hs ='';
		hs+='height : 59px;';
		hs+='left : 1px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:none;';
		this._thumbnail_cloner.setAttribute('style',hs);
		this._thumbnail_cloner.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._thumbnail_cloner.ggLastSize) || (me._thumbnail_cloner.ggLastSize.w!=w) || (me._thumbnail_cloner.ggLastSize.h!=h)) {
				me._thumbnail_cloner.ggLastSize={ w:w, h:h };
				me._thumbnail_cloner.ggUpdate();
			}
		}
		this._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		this._thumbs_barra__content.appendChild(this._thumbnail_cloner);
		this.divSkin.appendChild(this._thumbs_barra);
		this._dropdown_menu=document.createElement('div');
		this._dropdown_menu.ggId="Dropdown Menu";
		this._dropdown_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu.ggVisible=true;
		this._dropdown_menu.className='ggskin ggskin_container ';
		this._dropdown_menu.ggType='container';
		hs ='';
		hs+='height : 90%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		this._dropdown_menu.setAttribute('style',hs);
		this._dropdown_menu.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		me._dropdown_menu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._dropdown_menu.ggCurrentLogicStateVisible = -1;
		this._dropdown_menu.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().height <= 340)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dropdown_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dropdown_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dropdown_menu.style[domTransition]='';
				if (me._dropdown_menu.ggCurrentLogicStateVisible == 0) {
					me._dropdown_menu.style.visibility="hidden";
					me._dropdown_menu.ggVisible=false;
				}
				else {
					me._dropdown_menu.style.visibility=(Number(me._dropdown_menu.style.opacity)>0||!me._dropdown_menu.style.opacity)?'inherit':'hidden';
					me._dropdown_menu.ggVisible=true;
				}
			}
		}
		this._dropdown_menu.ggUpdatePosition=function (useTransition) {
			me._dropdown_menu.ggUpdateConditionResize();
		}
		this._dropdown_background=document.createElement('div');
		this._dropdown_background.ggId="Dropdown Background";
		this._dropdown_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_background.ggVisible=true;
		this._dropdown_background.className='ggskin ggskin_rectangle ';
		this._dropdown_background.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #afafaf;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 314px;';
		hs+='left : 0px;';
		hs+='opacity : 0.75;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		this._dropdown_background.setAttribute('style',hs);
		this._dropdown_background.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_background.onclick=function (e) {
			me._dropdown_menu_title_background.onclick();
		}
		this._dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		this._dropdown_scrollarea=document.createElement('div');
		this._dropdown_scrollarea__content=document.createElement('div');
		this._dropdown_scrollarea.ggContent=this._dropdown_scrollarea__content;
		this._dropdown_scrollarea.appendChild(this._dropdown_scrollarea__content);
		hs ='';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._dropdown_scrollarea__content.setAttribute('style',hs);
		this._dropdown_scrollarea.ggId="Dropdown Scrollarea";
		this._dropdown_scrollarea.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_scrollarea.ggVisible=true;
		this._dropdown_scrollarea.className='ggskin ggskin_scrollarea ';
		this._dropdown_scrollarea.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 1px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		this._dropdown_scrollarea.setAttribute('style',hs);
		this._dropdown_scrollarea.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_scrollarea.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_scrollarea.onclick=function (e) {
			me._dropdown_menu_title_background.onclick();
		}
		this._dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._dropdown_cloner=document.createElement('div');
		this._dropdown_cloner.ggPermeable=false;
		this._dropdown_cloner.ggNumRepeat = 1;
		this._dropdown_cloner.ggWidth = 180;
		this._dropdown_cloner.ggHeight = 25;
		this._dropdown_cloner.ggUpdating = false;
		this._dropdown_cloner.ggFilter = [];
		this._dropdown_cloner.ggUpdate = function(filter) {
			if(me._dropdown_cloner.ggUpdating == true) return;
			me._dropdown_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._dropdown_cloner.ggFilter = filter;
			} else {
				filter = me._dropdown_cloner.ggFilter;
			};
			if (me._dropdown_cloner.hasChildNodes() == true) {
				while (me._dropdown_cloner.firstChild) {
					me._dropdown_cloner.removeChild(me._dropdown_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._dropdown_cloner.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._dropdown_cloner__node = document.createElement('div');
					me._dropdown_cloner.appendChild(me._dropdown_cloner__node);
					me._dropdown_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._dropdown_cloner.ggHeight) + 'px; left:' + (column * me._dropdown_cloner.ggWidth) + 'px; height: ' + me._dropdown_cloner.ggHeight + 'px; width: ' + me._dropdown_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_dropdown_cloner_Class(nodeId, me);
					me._dropdown_cloner__node.appendChild(inst.__div);
					me._dropdown_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					column++;
					if (column >= numCols) {
						column = 0;
						row++;
					}
				}
			}
			me._dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._dropdown_cloner.ggUpdating = false;
		}
		this._dropdown_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				stack.push(me._dropdown_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._dropdown_cloner.ggTags = [];
		this._dropdown_cloner.ggId="Dropdown Cloner";
		this._dropdown_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_cloner.ggVisible=true;
		this._dropdown_cloner.className='ggskin ggskin_cloner ';
		this._dropdown_cloner.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:auto;';
		this._dropdown_cloner.setAttribute('style',hs);
		this._dropdown_cloner.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				var child=me._dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._dropdown_cloner.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._dropdown_cloner.ggLastSize) || (me._dropdown_cloner.ggLastSize.w!=w) || (me._dropdown_cloner.ggLastSize.h!=h)) {
				me._dropdown_cloner.ggLastSize={ w:w, h:h };
				me._dropdown_cloner.ggUpdate();
			}
		}
		this._dropdown_cloner.ggNodeChange=function () {
			me._dropdown_cloner.ggUpdateConditionNodeChange();
		}
		this._dropdown_scrollarea__content.appendChild(this._dropdown_cloner);
		this._dropdown_background.appendChild(this._dropdown_scrollarea);
		this._dropdown_menu.appendChild(this._dropdown_background);
		this._dropdown_menu_title_background=document.createElement('div');
		this._dropdown_menu_title_background.ggId="Dropdown Menu Title Background";
		this._dropdown_menu_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu_title_background.ggVisible=true;
		this._dropdown_menu_title_background.className='ggskin ggskin_rectangle ';
		this._dropdown_menu_title_background.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		this._dropdown_menu_title_background.setAttribute('style',hs);
		this._dropdown_menu_title_background.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_menu_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_menu_title_background.onclick=function (e) {
			me._dropdown_background.ggVisible = !me._dropdown_background.ggVisible;
			var flag=me._dropdown_background.ggVisible;
			me._dropdown_background.style[domTransition]='none';
			me._dropdown_background.style.visibility=((flag)&&(Number(me._dropdown_background.style.opacity)>0||!me._dropdown_background.style.opacity))?'inherit':'hidden';
			me._dropdown_open.ggVisible = !me._dropdown_open.ggVisible;
			var flag=me._dropdown_open.ggVisible;
			me._dropdown_open.style[domTransition]='none';
			me._dropdown_open.style.visibility=((flag)&&(Number(me._dropdown_open.style.opacity)>0||!me._dropdown_open.style.opacity))?'inherit':'hidden';
			me._dropdown_close.ggVisible = !me._dropdown_close.ggVisible;
			var flag=me._dropdown_close.ggVisible;
			me._dropdown_close.style[domTransition]='none';
			me._dropdown_close.style.visibility=((flag)&&(Number(me._dropdown_close.style.opacity)>0||!me._dropdown_close.style.opacity))?'inherit':'hidden';
		}
		this._dropdown_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=true;
		}
		this._dropdown_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
		}
		this._dropdown_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
		}
		me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = -1;
		this._dropdown_menu_title_background.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['dropdown_menu_title_background'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style[domTransition]='background-color none';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(239,239,239,1)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		this._dropdown_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		this._dropdown_menu_title=document.createElement('div');
		this._dropdown_menu_title__text=document.createElement('div');
		this._dropdown_menu_title.className='ggskin ggskin_textdiv';
		this._dropdown_menu_title.ggTextDiv=this._dropdown_menu_title__text;
		this._dropdown_menu_title.ggId="Dropdown Menu Title";
		this._dropdown_menu_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu_title.ggVisible=true;
		this._dropdown_menu_title.className='ggskin ggskin_text ';
		this._dropdown_menu_title.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 162px;';
		hs+='pointer-events:auto;';
		this._dropdown_menu_title.setAttribute('style',hs);
		this._dropdown_menu_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 162px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._dropdown_menu_title__text.setAttribute('style',hs);
		this._dropdown_menu_title.ggUpdateText=function() {
			var hs="<b>Preescolar: <\/b>"+me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		this._dropdown_menu_title.appendChild(this._dropdown_menu_title__text);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_menu_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
		}
		this._dropdown_menu_title_background.appendChild(this._dropdown_menu_title);
		this._dropdown_open=document.createElement('div');
		this._dropdown_open__img=document.createElement('img');
		this._dropdown_open__img.className='ggskin ggskin_svg';
		this._dropdown_open__img.setAttribute('src',basePath + 'images/dropdown_open.svg');
		this._dropdown_open__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dropdown_open__img['ondragstart']=function() { return false; };
		this._dropdown_open.appendChild(this._dropdown_open__img);
		this._dropdown_open.ggId="Dropdown Open";
		this._dropdown_open.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_open.ggVisible=true;
		this._dropdown_open.className='ggskin ggskin_svg ';
		this._dropdown_open.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 169px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		this._dropdown_open.setAttribute('style',hs);
		this._dropdown_open.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_open.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_open.ggUpdatePosition=function (useTransition) {
		}
		this._dropdown_menu_title_background.appendChild(this._dropdown_open);
		this._dropdown_close=document.createElement('div');
		this._dropdown_close__img=document.createElement('img');
		this._dropdown_close__img.className='ggskin ggskin_svg';
		this._dropdown_close__img.setAttribute('src',basePath + 'images/dropdown_close.svg');
		this._dropdown_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dropdown_close__img['ondragstart']=function() { return false; };
		this._dropdown_close.appendChild(this._dropdown_close__img);
		this._dropdown_close.ggId="Dropdown Close";
		this._dropdown_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_close.ggVisible=false;
		this._dropdown_close.className='ggskin ggskin_svg ';
		this._dropdown_close.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : 169px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		this._dropdown_close.setAttribute('style',hs);
		this._dropdown_close.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_close.ggUpdatePosition=function (useTransition) {
		}
		this._dropdown_menu_title_background.appendChild(this._dropdown_close);
		this._dropdown_menu.appendChild(this._dropdown_menu_title_background);
		this.divSkin.appendChild(this._dropdown_menu);
		this._logo=document.createElement('div');
		this._logo__img=document.createElement('img');
		this._logo__img.className='ggskin ggskin_image';
		this._logo__img.setAttribute('src',basePath + 'images/logo.png');
		this._logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._logo__img.className='ggskin ggskin_image';
		this._logo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._logo__img);
		this._logo.appendChild(this._logo__img);
		this._logo.ggId="logo";
		this._logo.ggLeft=-102;
		this._logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo.ggVisible=true;
		this._logo.className='ggskin ggskin_image ';
		this._logo.ggType='image';
		hs ='';
		hs+='height : 41px;';
		hs+='left : -102px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 204px;';
		hs+='pointer-events:auto;';
		this._logo.setAttribute('style',hs);
		this._logo.style[domTransform + 'Origin']='50% 50%';
		me._logo.ggIsActive=function() {
			return false;
		}
		me._logo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._logo.onmouseover=function (e) {
			me.elementMouseOver['logo']=true;
		}
		this._logo.onmouseout=function (e) {
			me.elementMouseOver['logo']=false;
		}
		this._logo.ontouchend=function (e) {
			me.elementMouseOver['logo']=false;
		}
		this._logo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._tt_logo=document.createElement('div');
		this._tt_logo__text=document.createElement('div');
		this._tt_logo.className='ggskin ggskin_textdiv';
		this._tt_logo.ggTextDiv=this._tt_logo__text;
		this._tt_logo.ggId="tt_logo";
		this._tt_logo.ggLeft=-59;
		this._tt_logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_logo.ggVisible=false;
		this._tt_logo.className='ggskin ggskin_text ';
		this._tt_logo.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_logo.setAttribute('style',hs);
		this._tt_logo.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_logo__text.setAttribute('style',hs);
		this._tt_logo__text.innerHTML="Ir a Belmont";
		this._tt_logo.appendChild(this._tt_logo__text);
		me._tt_logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_logo.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._tt_logo.ggCurrentLogicStateVisible = -1;
		this._tt_logo.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['logo'] == true) && 
				(me.player.getIsMobile() == false)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_logo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_logo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_logo.style[domTransition]='';
				if (me._tt_logo.ggCurrentLogicStateVisible == 0) {
					me._tt_logo.style.visibility=(Number(me._tt_logo.style.opacity)>0||!me._tt_logo.style.opacity)?'inherit':'hidden';
					me._tt_logo.ggVisible=true;
				}
				else {
					me._tt_logo.style.visibility="hidden";
					me._tt_logo.ggVisible=false;
				}
			}
		}
		this._tt_logo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._tt_logo_white=document.createElement('div');
		this._tt_logo_white__text=document.createElement('div');
		this._tt_logo_white.className='ggskin ggskin_textdiv';
		this._tt_logo_white.ggTextDiv=this._tt_logo_white__text;
		this._tt_logo_white.ggId="tt_logo_white";
		this._tt_logo_white.ggLeft=-76;
		this._tt_logo_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_logo_white.ggVisible=true;
		this._tt_logo_white.className='ggskin ggskin_text ';
		this._tt_logo_white.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -76px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		this._tt_logo_white.setAttribute('style',hs);
		this._tt_logo_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 148px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_logo_white__text.setAttribute('style',hs);
		this._tt_logo_white__text.innerHTML="Ir a Belmont";
		this._tt_logo_white.appendChild(this._tt_logo_white__text);
		me._tt_logo_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_logo_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_logo_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
			}
		}
		this._tt_logo.appendChild(this._tt_logo_white);
		this._logo.appendChild(this._tt_logo);
		this.divSkin.appendChild(this._logo);
		this._tt_google=document.createElement('div');
		this._tt_google__text=document.createElement('div');
		this._tt_google.className='ggskin ggskin_textdiv';
		this._tt_google.ggTextDiv=this._tt_google__text;
		this._tt_google.ggId="tt_google";
		this._tt_google.ggTop=-28;
		this._tt_google.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_google.ggVisible=true;
		this._tt_google.className='ggskin ggskin_text ';
		this._tt_google.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='left : 6px;';
		hs+='position : absolute;';
		hs+='top : -28px;';
		hs+='visibility : inherit;';
		hs+='width : 143px;';
		hs+='pointer-events:auto;';
		this._tt_google.setAttribute('style',hs);
		this._tt_google.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 143px;';
		hs+='height: 19px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_google__text.setAttribute('style',hs);
		this._tt_google__text.innerHTML="Verlo en Google Maps";
		this._tt_google.appendChild(this._tt_google__text);
		me._tt_google.ggIsActive=function() {
			return false;
		}
		me._tt_google.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._tt_google.onclick=function (e) {
			me.player.openUrl("https:\/\/goo.gl\/eP1rWv","_blank");
		}
		this._tt_google.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._tt_google_white=document.createElement('div');
		this._tt_google_white__text=document.createElement('div');
		this._tt_google_white.className='ggskin ggskin_textdiv';
		this._tt_google_white.ggTextDiv=this._tt_google_white__text;
		this._tt_google_white.ggId="tt_google_white";
		this._tt_google_white.ggTop=-22;
		this._tt_google_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_google_white.ggVisible=true;
		this._tt_google_white.className='ggskin ggskin_text ';
		this._tt_google_white.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 143px;';
		hs+='pointer-events:auto;';
		this._tt_google_white.setAttribute('style',hs);
		this._tt_google_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 143px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_google_white__text.setAttribute('style',hs);
		this._tt_google_white__text.innerHTML="Verlo en Google Maps";
		this._tt_google_white.appendChild(this._tt_google_white__text);
		me._tt_google_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_google_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_google_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._tt_google.appendChild(this._tt_google_white);
		this.divSkin.appendChild(this._tt_google);
		this._tt_tray360=document.createElement('div');
		this._tt_tray360__text=document.createElement('div');
		this._tt_tray360.className='ggskin ggskin_textdiv';
		this._tt_tray360.ggTextDiv=this._tt_tray360__text;
		this._tt_tray360.ggId="tt_tray360";
		this._tt_tray360.ggLeft=-134;
		this._tt_tray360.ggTop=-28;
		this._tt_tray360.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_tray360.ggVisible=true;
		this._tt_tray360.className='ggskin ggskin_text ';
		this._tt_tray360.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='left : -134px;';
		hs+='position : absolute;';
		hs+='top : -28px;';
		hs+='visibility : inherit;';
		hs+='width : 126px;';
		hs+='pointer-events:auto;';
		this._tt_tray360.setAttribute('style',hs);
		this._tt_tray360.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 126px;';
		hs+='height: 19px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_tray360__text.setAttribute('style',hs);
		this._tt_tray360__text.innerHTML="Trayecto360";
		this._tt_tray360.appendChild(this._tt_tray360__text);
		me._tt_tray360.ggIsActive=function() {
			return false;
		}
		me._tt_tray360.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._tt_tray360.onclick=function (e) {
			me.player.openUrl("http:\/\/www.trayecto360.com\/","_blank");
		}
		this._tt_tray360.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._tt_tray360_white=document.createElement('div');
		this._tt_tray360_white__text=document.createElement('div');
		this._tt_tray360_white.className='ggskin ggskin_textdiv';
		this._tt_tray360_white.ggTextDiv=this._tt_tray360_white__text;
		this._tt_tray360_white.ggId="tt_tray360_white";
		this._tt_tray360_white.ggLeft=-128;
		this._tt_tray360_white.ggTop=-22;
		this._tt_tray360_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_tray360_white.ggVisible=true;
		this._tt_tray360_white.className='ggskin ggskin_text ';
		this._tt_tray360_white.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -128px;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 126px;';
		hs+='pointer-events:auto;';
		this._tt_tray360_white.setAttribute('style',hs);
		this._tt_tray360_white.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 126px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_tray360_white__text.setAttribute('style',hs);
		this._tt_tray360_white__text.innerHTML="Trayecto360";
		this._tt_tray360_white.appendChild(this._tt_tray360_white__text);
		me._tt_tray360_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._tt_tray360_white.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._tt_tray360_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._tt_tray360.appendChild(this._tt_tray360_white);
		this.divSkin.appendChild(this._tt_tray360);
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		me._popup_video_url.ggVideoSource = '';
		me._popup_video_url.ggVideoNotLoaded = true;
		me._popup_video_vimeo.ggVideoSource = '';
		me._popup_video_vimeo.ggVideoNotLoaded = true;
		me._popup_video_youtube.ggVideoSource = '';
		me._popup_video_youtube.ggVideoNotLoaded = true;
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._thumbnail_cloner.ggUpdate(me._thumbnail_cloner.ggTags);
			me._dropdown_cloner.ggUpdate(me._dropdown_cloner.ggTags);
		}
		this.divSkin.ggLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		this.divSkin.ggReLoaded=function() {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._button_simplex_fullscreen.ggNodeChange();
		me._seekbar_file.ggNodeChange();
		me._seekbar_url.ggNodeChange();
		me._thumbnail_cloner.ggNodeChange();
		me._dropdown_cloner.ggNodeChange();
		me.ggHotspotCallChildFunctions('ggNodeChange');
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._title.ggUpdateText();
		me._description.ggUpdateText();
		me._author.ggUpdateText();
		me._datetime.ggUpdateText();
		me._copyright.ggUpdateText();
		if (me.elementMouseDown['up']) {
			me.player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['down']) {
			me.player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['left']) {
			me.player.changePanLog(1,true);
		}
		if (me.elementMouseDown['right']) {
			me.player.changePanLog(-1,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseOver['zoomin']) {
		}
		me._tt_zoomin.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseOver['zoomout']) {
		}
		me._tt_zoomout.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_stop_auto_rotate']) {
		}
		me._button_stop_auto_rotate.ggUpdateConditionTimer();
		me._tt_stop_auto_rotate.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_start_auto_rotate']) {
		}
		me._button_start_auto_rotate.ggUpdateConditionTimer();
		me._tt_start_auto_rotate.ggUpdateConditionTimer();
		if (me.elementMouseOver['info']) {
		}
		me._tt_info.ggUpdateConditionTimer();
		if (me.elementMouseOver['movemode_drag']) {
		}
		me._movemode_drag.ggUpdateConditionTimer();
		me._tt_movemode0.ggUpdateConditionTimer();
		if (me.elementMouseOver['movemode_continuous']) {
		}
		me._movemode_continuous.ggUpdateConditionTimer();
		me._tt_movemode.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_image_normalscreen']) {
		}
		me._tt_exit_fullscreen.ggUpdateConditionTimer();
		if (me.elementMouseOver['button_image_fullscreen']) {
		}
		me._tt_enter_fullscreen.ggUpdateConditionTimer();
		me._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		me._thumbnail_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		me._dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me.elementMouseOver['dropdown_menu_title_background']) {
		}
		me._dropdown_menu_title_background.ggUpdateConditionTimer();
		me._dropdown_menu_title.ggUpdateText();
		if (me.elementMouseOver['logo']) {
		}
		me._tt_logo.ggUpdateConditionTimer();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_node') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 100px;';
			hs+='position : absolute;';
			hs+='top : 140px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openNext(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._hsimage_node=document.createElement('div');
			this._hsimage_node__img=document.createElement('img');
			this._hsimage_node__img.className='ggskin ggskin_svg';
			this._hsimage_node__img.setAttribute('src',basePath + 'images/hsimage_node.svg');
			this._hsimage_node__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hsimage_node__img['ondragstart']=function() { return false; };
			this._hsimage_node.appendChild(this._hsimage_node__img);
			this._hsimage_node__imgo=document.createElement('img');
			this._hsimage_node__imgo.className='ggskin ggskin_svg';
			this._hsimage_node__imgo.setAttribute('src',basePath + 'images/hsimage_node__o.svg');
			this._hsimage_node__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._hsimage_node__imgo['ondragstart']=function() { return false; };
			this._hsimage_node.appendChild(this._hsimage_node__imgo);
			this._hsimage_node.ggId="hsimage_node";
			this._hsimage_node.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage_node.ggVisible=true;
			this._hsimage_node.className='ggskin ggskin_svg ';
			this._hsimage_node.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._hsimage_node.setAttribute('style',hs);
			this._hsimage_node.style[domTransform + 'Origin']='50% 50%';
			me._hsimage_node.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsimage_node.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsimage_node.onmouseover=function (e) {
				me._hsimage_node__img.style.visibility='hidden';
				me._hsimage_node__imgo.style.visibility='inherit';
			}
			this._hsimage_node.onmouseout=function (e) {
				me._hsimage_node__img.style.visibility='inherit';
				me._hsimage_node__imgo.style.visibility='hidden';
			}
			this._hsimage_node.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hsimage_node);
			this._hotspot_preview=document.createElement('div');
			this._hotspot_preview.ggId="hotspot_preview";
			this._hotspot_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_preview.ggVisible=false;
			this._hotspot_preview.className='ggskin ggskin_container ';
			this._hotspot_preview.ggType='container';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 103px;';
			hs+='left : -73px;';
			hs+='position : absolute;';
			hs+='top : -128px;';
			hs+='visibility : hidden;';
			hs+='width : 153px;';
			hs+='pointer-events:none;';
			this._hotspot_preview.setAttribute('style',hs);
			this._hotspot_preview.style[domTransform + 'Origin']='50% 50%';
			me._hotspot_preview.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hotspot_preview.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hotspot_preview.ggCurrentLogicStateVisible = -1;
			this._hotspot_preview.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hotspot_preview.style[domTransition]='';
					if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
						me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
						me._hotspot_preview.ggVisible=true;
					}
					else {
						me._hotspot_preview.style.visibility="hidden";
						me._hotspot_preview.ggVisible=false;
					}
				}
			}
			this._hotspot_preview.ggUpdatePosition=function (useTransition) {
			}
			this._preview_picture_frame_=document.createElement('div');
			this._preview_picture_frame_.ggId="preview_picture_frame ";
			this._preview_picture_frame_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_picture_frame_.ggVisible=true;
			this._preview_picture_frame_.className='ggskin ggskin_rectangle ';
			this._preview_picture_frame_.ggType='rectangle';
			hs ='';
			hs+=cssPrefix + 'border-radius : 5px;';
			hs+='border-radius : 5px;';
			hs+='background : rgba(255,255,255,0.784314);';
			hs+='border : 1px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 99px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 0px;';
			hs+='visibility : inherit;';
			hs+='width : 149px;';
			hs+='pointer-events:auto;';
			this._preview_picture_frame_.setAttribute('style',hs);
			this._preview_picture_frame_.style[domTransform + 'Origin']='50% 50%';
			me._preview_picture_frame_.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._preview_picture_frame_.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._preview_picture_frame_.ggUpdatePosition=function (useTransition) {
			}
			this._hotspot_preview.appendChild(this._preview_picture_frame_);
			this._preview_nodeimage=document.createElement('div');
			this._preview_nodeimage__img=document.createElement('img');
			this._preview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage__img.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
			this._preview_nodeimage.ggNodeId=nodeId;
			this._preview_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._preview_nodeimage__img.className='ggskin ggskin_nodeimage';
			this._preview_nodeimage__img['ondragstart']=function() { return false; };
			this._preview_nodeimage.appendChild(this._preview_nodeimage__img);
			this._preview_nodeimage.ggId="Preview NodeImage";
			this._preview_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_nodeimage.ggVisible=true;
			this._preview_nodeimage.className='ggskin ggskin_nodeimage ';
			this._preview_nodeimage.ggType='nodeimage';
			hs ='';
			hs+='height : 90px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 5px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._preview_nodeimage.setAttribute('style',hs);
			this._preview_nodeimage.style[domTransform + 'Origin']='50% 50%';
			me._preview_nodeimage.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me._preview_nodeimage.ggElementNodeId=function() {
				return this.ggNodeId;
			}
			this._preview_nodeimage.ggUpdatePosition=function (useTransition) {
			}
			this._hotspot_preview.appendChild(this._preview_nodeimage);
			this._tooltip_bg=document.createElement('div');
			this._tooltip_bg.ggId="tooltip_bg";
			this._tooltip_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_bg.ggVisible=true;
			this._tooltip_bg.className='ggskin ggskin_rectangle ';
			this._tooltip_bg.ggType='rectangle';
			hs ='';
			hs+='background : rgba(0,0,0,0.392157);';
			hs+='border : 0px solid #000000;';
			hs+='cursor : default;';
			hs+='height : 20px;';
			hs+='left : 5px;';
			hs+='position : absolute;';
			hs+='top : 77px;';
			hs+='visibility : inherit;';
			hs+='width : 140px;';
			hs+='pointer-events:auto;';
			this._tooltip_bg.setAttribute('style',hs);
			this._tooltip_bg.style[domTransform + 'Origin']='50% 50%';
			me._tooltip_bg.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_bg.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_bg.ggUpdatePosition=function (useTransition) {
			}
			this._hotspot_preview.appendChild(this._tooltip_bg);
			this._tooltip_drop_shadow=document.createElement('div');
			this._tooltip_drop_shadow__text=document.createElement('div');
			this._tooltip_drop_shadow.className='ggskin ggskin_textdiv';
			this._tooltip_drop_shadow.ggTextDiv=this._tooltip_drop_shadow__text;
			this._tooltip_drop_shadow.ggId="tooltip_drop_shadow";
			this._tooltip_drop_shadow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip_drop_shadow.ggVisible=true;
			this._tooltip_drop_shadow.className='ggskin ggskin_text ';
			this._tooltip_drop_shadow.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 1px;';
			hs+='position : absolute;';
			hs+='top : 80px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tooltip_drop_shadow.setAttribute('style',hs);
			this._tooltip_drop_shadow.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip_drop_shadow__text.setAttribute('style',hs);
			this._tooltip_drop_shadow__text.innerHTML=me.hotspot.title;
			this._tooltip_drop_shadow.appendChild(this._tooltip_drop_shadow__text);
			me._tooltip_drop_shadow.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip_drop_shadow.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip_drop_shadow.ggUpdatePosition=function (useTransition) {
			}
			this._hotspot_preview.appendChild(this._tooltip_drop_shadow);
			this._tooltip=document.createElement('div');
			this._tooltip__text=document.createElement('div');
			this._tooltip.className='ggskin ggskin_textdiv';
			this._tooltip.ggTextDiv=this._tooltip__text;
			this._tooltip.ggId="tooltip";
			this._tooltip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tooltip.ggVisible=true;
			this._tooltip.className='ggskin ggskin_text ';
			this._tooltip.ggType='text';
			hs ='';
			hs+='height : 20px;';
			hs+='left : 0px;';
			hs+='position : absolute;';
			hs+='top : 79px;';
			hs+='visibility : inherit;';
			hs+='width : 148px;';
			hs+='pointer-events:auto;';
			this._tooltip.setAttribute('style',hs);
			this._tooltip.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 148px;';
			hs+='height: 20px;';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tooltip__text.setAttribute('style',hs);
			this._tooltip__text.innerHTML=me.hotspot.title;
			this._tooltip.appendChild(this._tooltip__text);
			me._tooltip.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tooltip.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._tooltip.ggUpdatePosition=function (useTransition) {
			}
			this._hotspot_preview.appendChild(this._tooltip);
			this._checkmark_tick0=document.createElement('div');
			this._checkmark_tick0__img=document.createElement('img');
			this._checkmark_tick0__img.className='ggskin ggskin_svg';
			this._checkmark_tick0__img.setAttribute('src',basePath + 'images/checkmark_tick0.svg');
			this._checkmark_tick0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._checkmark_tick0__img['ondragstart']=function() { return false; };
			this._checkmark_tick0.appendChild(this._checkmark_tick0__img);
			this._checkmark_tick0.ggId="checkmark_tick";
			this._checkmark_tick0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._checkmark_tick0.ggVisible=false;
			this._checkmark_tick0.className='ggskin ggskin_svg ';
			this._checkmark_tick0.ggType='svg';
			hs ='';
			hs+='height : 36px;';
			hs+='left : 110px;';
			hs+='position : absolute;';
			hs+='top : 3px;';
			hs+='visibility : hidden;';
			hs+='width : 36px;';
			hs+='pointer-events:auto;';
			this._checkmark_tick0.setAttribute('style',hs);
			this._checkmark_tick0.style[domTransform + 'Origin']='50% 50%';
			me._checkmark_tick0.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._checkmark_tick0.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._checkmark_tick0.ggCurrentLogicStateVisible = -1;
			this._checkmark_tick0.ggUpdateConditionNodeChange=function () {
				var newLogicStateVisible;
				if (
					(me.player.nodeVisited(me._checkmark_tick0.ggElementNodeId()) == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._checkmark_tick0.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._checkmark_tick0.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._checkmark_tick0.style[domTransition]='';
					if (me._checkmark_tick0.ggCurrentLogicStateVisible == 0) {
						me._checkmark_tick0.style.visibility=(Number(me._checkmark_tick0.style.opacity)>0||!me._checkmark_tick0.style.opacity)?'inherit':'hidden';
						me._checkmark_tick0.ggVisible=true;
					}
					else {
						me._checkmark_tick0.style.visibility="hidden";
						me._checkmark_tick0.ggVisible=false;
					}
				}
			}
			this._checkmark_tick0.ggUpdatePosition=function (useTransition) {
			}
			this._checkmark_tick0.ggNodeChange=function () {
				me._checkmark_tick0.ggUpdateConditionNodeChange();
			}
			this._hotspot_preview.appendChild(this._checkmark_tick0);
			this.__div.appendChild(this._hotspot_preview);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hotspot_preview.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_info') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility=(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity)?'inherit':'hidden';
				me.skin._screentint.ggVisible=true;
				me.skin._info_title.ggText="<b>"+me.hotspot.title+"<\/b>";
				me.skin._info_title.ggTextDiv.innerHTML=me.skin._info_title.ggText;
				if (me.skin._info_title.ggUpdateText) {
					me.skin._info_title.ggUpdateText=function() {
						var hs="<b>"+me.hotspot.title+"<\/b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._info_title.ggUpdatePosition) {
					me.skin._info_title.ggUpdatePosition();
				}
				me.skin._info_title.ggTextDiv.scrollTop = 0;
				me.skin._info_text_body.ggText=me.hotspot.description;
				me.skin._info_text_body.ggTextDiv.innerHTML=me.skin._info_text_body.ggText;
				if (me.skin._info_text_body.ggUpdateText) {
					me.skin._info_text_body.ggUpdateText=function() {
						var hs=me.hotspot.description;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._info_text_body.ggUpdatePosition) {
					me.skin._info_text_body.ggUpdatePosition();
				}
				me.skin._info_text_body.ggTextDiv.scrollTop = 0;
				me.skin._information.ggVisible = !me.skin._information.ggVisible;
				var flag=me.skin._information.ggVisible;
				me.skin._information.style[domTransition]='none';
				me.skin._information.style.visibility=((flag)&&(Number(me.skin._information.style.opacity)>0||!me.skin._information.style.opacity))?'inherit':'hidden';
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_info_image=document.createElement('div');
			this._ht_info_image__img=document.createElement('img');
			this._ht_info_image__img.className='ggskin ggskin_svg';
			this._ht_info_image__img.setAttribute('src',basePath + 'images/ht_info_image.svg');
			this._ht_info_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_info_image__img['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__img);
			this._ht_info_image__imgo=document.createElement('img');
			this._ht_info_image__imgo.className='ggskin ggskin_svg';
			this._ht_info_image__imgo.setAttribute('src',basePath + 'images/ht_info_image__o.svg');
			this._ht_info_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_info_image__imgo['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__imgo);
			this._ht_info_image.ggId="ht_info_image";
			this._ht_info_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_image.ggVisible=true;
			this._ht_info_image.className='ggskin ggskin_svg ';
			this._ht_info_image.ggType='svg';
			hs ='';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -17px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_info_image.setAttribute('style',hs);
			this._ht_info_image.style[domTransform + 'Origin']='50% 50%';
			me._ht_info_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_info_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_info_image.onmouseover=function (e) {
				me._ht_info_image__img.style.visibility='hidden';
				me._ht_info_image__imgo.style.visibility='inherit';
			}
			this._ht_info_image.onmouseout=function (e) {
				me._ht_info_image__img.style.visibility='inherit';
				me._ht_info_image__imgo.style.visibility='hidden';
			}
			this._ht_info_image.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_info_image);
			this._tt_information=document.createElement('div');
			this._tt_information__text=document.createElement('div');
			this._tt_information.className='ggskin ggskin_textdiv';
			this._tt_information.ggTextDiv=this._tt_information__text;
			this._tt_information.ggId="tt_information";
			this._tt_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_information.ggVisible=false;
			this._tt_information.className='ggskin ggskin_text ';
			this._tt_information.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 20px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			hs+='pointer-events:auto;';
			this._tt_information.setAttribute('style',hs);
			this._tt_information.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 95px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.784314);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tt_information__text.setAttribute('style',hs);
			this._tt_information__text.innerHTML=me.hotspot.title;
			this._tt_information.appendChild(this._tt_information__text);
			me._tt_information.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_information.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_information.ggCurrentLogicStateVisible = -1;
			this._tt_information.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_information.style[domTransition]='';
					if (me._tt_information.ggCurrentLogicStateVisible == 0) {
						me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
						me._tt_information.ggVisible=true;
					}
					else {
						me._tt_information.style.visibility="hidden";
						me._tt_information.ggVisible=false;
					}
				}
			}
			this._tt_information.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._tt_information);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_information.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_image') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility=(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity)?'inherit':'hidden';
				me.skin._screentint.ggVisible=true;
				me.skin._close.style[domTransition]='none';
				me.skin._close.style.visibility=(Number(me.skin._close.style.opacity)>0||!me.skin._close.style.opacity)?'inherit':'hidden';
				me.skin._close.ggVisible=true;
				me.skin._popup_image.ggText=me.player.getBasePath()+""+me.hotspot.url;
				me.skin._popup_image__img.src=me.skin._popup_image.ggText;
				me.skin._popup_image.style[domTransition]='none';
				me.skin._popup_image.style.visibility=(Number(me.skin._popup_image.style.opacity)>0||!me.skin._popup_image.style.opacity)?'inherit':'hidden';
				me.skin._popup_image.ggVisible=true;
				me.skin._image_popup.style[domTransition]='none';
				me.skin._image_popup.style.visibility=(Number(me.skin._image_popup.style.opacity)>0||!me.skin._image_popup.style.opacity)?'inherit':'hidden';
				me.skin._image_popup.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._hstext_image=document.createElement('div');
			this._hstext_image__text=document.createElement('div');
			this._hstext_image.className='ggskin ggskin_textdiv';
			this._hstext_image.ggTextDiv=this._hstext_image__text;
			this._hstext_image.ggId="hstext_image";
			this._hstext_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext_image.ggVisible=false;
			this._hstext_image.className='ggskin ggskin_text ';
			this._hstext_image.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 17px;';
			hs+='left : -49px;';
			hs+='position : absolute;';
			hs+='top : 20px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			hs+='pointer-events:auto;';
			this._hstext_image.setAttribute('style',hs);
			this._hstext_image.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 95px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext_image__text.setAttribute('style',hs);
			this._hstext_image__text.innerHTML=me.hotspot.title;
			this._hstext_image.appendChild(this._hstext_image__text);
			me._hstext_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hstext_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._hstext_image.ggCurrentLogicStateVisible = -1;
			this._hstext_image.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._hstext_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._hstext_image.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._hstext_image.style[domTransition]='';
					if (me._hstext_image.ggCurrentLogicStateVisible == 0) {
						me._hstext_image.style.visibility=(Number(me._hstext_image.style.opacity)>0||!me._hstext_image.style.opacity)?'inherit':'hidden';
						me._hstext_image.ggVisible=true;
					}
					else {
						me._hstext_image.style.visibility="hidden";
						me._hstext_image.ggVisible=false;
					}
				}
			}
			this._hstext_image.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hstext_image);
			this._hsimage_image=document.createElement('div');
			this._hsimage_image__img=document.createElement('img');
			this._hsimage_image__img.className='ggskin ggskin_svg';
			this._hsimage_image__img.setAttribute('src',basePath + 'images/hsimage_image.svg');
			this._hsimage_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._hsimage_image__img['ondragstart']=function() { return false; };
			this._hsimage_image.appendChild(this._hsimage_image__img);
			this._hsimage_image__imgo=document.createElement('img');
			this._hsimage_image__imgo.className='ggskin ggskin_svg';
			this._hsimage_image__imgo.setAttribute('src',basePath + 'images/hsimage_image__o.svg');
			this._hsimage_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._hsimage_image__imgo['ondragstart']=function() { return false; };
			this._hsimage_image.appendChild(this._hsimage_image__imgo);
			this._hsimage_image.ggId="hsimage_image";
			this._hsimage_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage_image.ggVisible=true;
			this._hsimage_image.className='ggskin ggskin_svg ';
			this._hsimage_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -17px;';
			hs+='position : absolute;';
			hs+='top : -17px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._hsimage_image.setAttribute('style',hs);
			this._hsimage_image.style[domTransform + 'Origin']='50% 50%';
			me._hsimage_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._hsimage_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._hsimage_image.onmouseover=function (e) {
				me._hsimage_image__img.style.visibility='hidden';
				me._hsimage_image__imgo.style.visibility='inherit';
			}
			this._hsimage_image.onmouseout=function (e) {
				me._hsimage_image__img.style.visibility='inherit';
				me._hsimage_image__imgo.style.visibility='hidden';
			}
			this._hsimage_image.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._hsimage_image);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._hstext_image.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_video_file') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_file";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility=(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity)?'inherit':'hidden';
				me.skin._screentint.ggVisible=true;
				me.skin._close.style[domTransition]='none';
				me.skin._close.style.visibility=(Number(me.skin._close.style.opacity)>0||!me.skin._close.style.opacity)?'inherit':'hidden';
				me.skin._close.ggVisible=true;
				me.skin._video_popup_controls_file.style[domTransition]='none';
				me.skin._video_popup_controls_file.style.visibility=(Number(me.skin._video_popup_controls_file.style.opacity)>0||!me.skin._video_popup_controls_file.style.opacity)?'inherit':'hidden';
				me.skin._video_popup_controls_file.ggVisible=true;
				me.skin._popup_video_file.ggInitMedia(me.player.getBasePath()+""+me.hotspot.url);
				if (me.skin._popup_video_file.ggVideoNotLoaded) {
					me.skin._popup_video_file.ggInitMedia(me.skin._popup_video_file.ggVideoSource);
				}
				me.skin._popup_video_file.style[domTransition]='none';
				me.skin._popup_video_file.style.visibility=(Number(me.skin._popup_video_file.style.opacity)>0||!me.skin._popup_video_file.style.opacity)?'inherit':'hidden';
				me.skin._popup_video_file.ggVisible=true;
				me.skin._video_popup_file.style[domTransition]='none';
				me.skin._video_popup_file.style.visibility=(Number(me.skin._video_popup_file.style.opacity)>0||!me.skin._video_popup_file.style.opacity)?'inherit':'hidden';
				me.skin._video_popup_file.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_video_video_file=document.createElement('div');
			this._ht_video_video_file__img=document.createElement('img');
			this._ht_video_video_file__img.className='ggskin ggskin_svg';
			this._ht_video_video_file__img.setAttribute('src',basePath + 'images/ht_video_video_file.svg');
			this._ht_video_video_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_video_video_file__img['ondragstart']=function() { return false; };
			this._ht_video_video_file.appendChild(this._ht_video_video_file__img);
			this._ht_video_video_file__imgo=document.createElement('img');
			this._ht_video_video_file__imgo.className='ggskin ggskin_svg';
			this._ht_video_video_file__imgo.setAttribute('src',basePath + 'images/ht_video_video_file__o.svg');
			this._ht_video_video_file__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_video_video_file__imgo['ondragstart']=function() { return false; };
			this._ht_video_video_file.appendChild(this._ht_video_video_file__imgo);
			this._ht_video_video_file.ggId="ht_video_video_file";
			this._ht_video_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_video_file.ggVisible=true;
			this._ht_video_video_file.className='ggskin ggskin_svg ';
			this._ht_video_video_file.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_video_video_file.setAttribute('style',hs);
			this._ht_video_video_file.style[domTransform + 'Origin']='50% 50%';
			me._ht_video_video_file.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_video_video_file.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_video_video_file.onmouseover=function (e) {
				me._ht_video_video_file__img.style.visibility='hidden';
				me._ht_video_video_file__imgo.style.visibility='inherit';
			}
			this._ht_video_video_file.onmouseout=function (e) {
				me._ht_video_video_file__img.style.visibility='inherit';
				me._ht_video_video_file__imgo.style.visibility='hidden';
			}
			this._ht_video_video_file.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_video_video_file);
			this._tt_ht_video_file=document.createElement('div');
			this._tt_ht_video_file__text=document.createElement('div');
			this._tt_ht_video_file.className='ggskin ggskin_textdiv';
			this._tt_ht_video_file.ggTextDiv=this._tt_ht_video_file__text;
			this._tt_ht_video_file.ggId="tt_ht_video_file";
			this._tt_ht_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_file.ggVisible=false;
			this._tt_ht_video_file.className='ggskin ggskin_text ';
			this._tt_ht_video_file.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			hs+='pointer-events:auto;';
			this._tt_ht_video_file.setAttribute('style',hs);
			this._tt_ht_video_file.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.666667);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 3px 6px 3px 6px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_file__text.setAttribute('style',hs);
			this._tt_ht_video_file__text.innerHTML=me.hotspot.title;
			this._tt_ht_video_file.appendChild(this._tt_ht_video_file__text);
			me._tt_ht_video_file.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_video_file.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_video_file.ggCurrentLogicStateVisible = -1;
			this._tt_ht_video_file.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_ht_video_file.style[domTransition]='';
					if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
						me._tt_ht_video_file.ggVisible=true;
					}
					else {
						me._tt_ht_video_file.style.visibility="hidden";
						me._tt_ht_video_file.ggVisible=false;
					}
				}
			}
			this._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_video_file);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_video_file.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_video_url') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_url";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility=(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity)?'inherit':'hidden';
				me.skin._screentint.ggVisible=true;
				me.skin._close.style[domTransition]='none';
				me.skin._close.style.visibility=(Number(me.skin._close.style.opacity)>0||!me.skin._close.style.opacity)?'inherit':'hidden';
				me.skin._close.ggVisible=true;
				me.skin._video_popup_controls_url.style[domTransition]='none';
				me.skin._video_popup_controls_url.style.visibility=(Number(me.skin._video_popup_controls_url.style.opacity)>0||!me.skin._video_popup_controls_url.style.opacity)?'inherit':'hidden';
				me.skin._video_popup_controls_url.ggVisible=true;
				me.skin._popup_video_url.ggInitMedia(me.hotspot.url);
				if (me.skin._popup_video_url.ggVideoNotLoaded) {
					me.skin._popup_video_url.ggInitMedia(me.skin._popup_video_url.ggVideoSource);
				}
				me.skin._popup_video_url.style[domTransition]='none';
				me.skin._popup_video_url.style.visibility=(Number(me.skin._popup_video_url.style.opacity)>0||!me.skin._popup_video_url.style.opacity)?'inherit':'hidden';
				me.skin._popup_video_url.ggVisible=true;
				me.skin._video_popup_url.style[domTransition]='none';
				me.skin._video_popup_url.style.visibility=(Number(me.skin._video_popup_url.style.opacity)>0||!me.skin._video_popup_url.style.opacity)?'inherit':'hidden';
				me.skin._video_popup_url.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_video_video_url=document.createElement('div');
			this._ht_video_video_url__img=document.createElement('img');
			this._ht_video_video_url__img.className='ggskin ggskin_svg';
			this._ht_video_video_url__img.setAttribute('src',basePath + 'images/ht_video_video_url.svg');
			this._ht_video_video_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_video_video_url__img['ondragstart']=function() { return false; };
			this._ht_video_video_url.appendChild(this._ht_video_video_url__img);
			this._ht_video_video_url__imgo=document.createElement('img');
			this._ht_video_video_url__imgo.className='ggskin ggskin_svg';
			this._ht_video_video_url__imgo.setAttribute('src',basePath + 'images/ht_video_video_url__o.svg');
			this._ht_video_video_url__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_video_video_url__imgo['ondragstart']=function() { return false; };
			this._ht_video_video_url.appendChild(this._ht_video_video_url__imgo);
			this._ht_video_video_url.ggId="ht_video_video_url";
			this._ht_video_video_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_video_url.ggVisible=true;
			this._ht_video_video_url.className='ggskin ggskin_svg ';
			this._ht_video_video_url.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_video_video_url.setAttribute('style',hs);
			this._ht_video_video_url.style[domTransform + 'Origin']='50% 50%';
			me._ht_video_video_url.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_video_video_url.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_video_video_url.onmouseover=function (e) {
				me._ht_video_video_url__img.style.visibility='hidden';
				me._ht_video_video_url__imgo.style.visibility='inherit';
			}
			this._ht_video_video_url.onmouseout=function (e) {
				me._ht_video_video_url__img.style.visibility='inherit';
				me._ht_video_video_url__imgo.style.visibility='hidden';
			}
			this._ht_video_video_url.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_video_video_url);
			this._tt_ht_video_url=document.createElement('div');
			this._tt_ht_video_url__text=document.createElement('div');
			this._tt_ht_video_url.className='ggskin ggskin_textdiv';
			this._tt_ht_video_url.ggTextDiv=this._tt_ht_video_url__text;
			this._tt_ht_video_url.ggId="tt_ht_video_url";
			this._tt_ht_video_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_url.ggVisible=false;
			this._tt_ht_video_url.className='ggskin ggskin_text ';
			this._tt_ht_video_url.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			hs+='pointer-events:auto;';
			this._tt_ht_video_url.setAttribute('style',hs);
			this._tt_ht_video_url.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.666667);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 3px 6px 3px 6px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_url__text.setAttribute('style',hs);
			this._tt_ht_video_url__text.innerHTML=me.hotspot.title;
			this._tt_ht_video_url.appendChild(this._tt_ht_video_url__text);
			me._tt_ht_video_url.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_video_url.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_video_url.ggCurrentLogicStateVisible = -1;
			this._tt_ht_video_url.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_ht_video_url.style[domTransition]='';
					if (me._tt_ht_video_url.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_video_url.style.visibility=(Number(me._tt_ht_video_url.style.opacity)>0||!me._tt_ht_video_url.style.opacity)?'inherit':'hidden';
						me._tt_ht_video_url.ggVisible=true;
					}
					else {
						me._tt_ht_video_url.style.visibility="hidden";
						me._tt_ht_video_url.ggVisible=false;
					}
				}
			}
			this._tt_ht_video_url.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_video_url);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_video_url.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_video_vimeo') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_vimeo";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility=(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity)?'inherit':'hidden';
				me.skin._screentint.ggVisible=true;
				me.skin._close.style[domTransition]='none';
				me.skin._close.style.visibility=(Number(me.skin._close.style.opacity)>0||!me.skin._close.style.opacity)?'inherit':'hidden';
				me.skin._close.ggVisible=true;
				me.skin._popup_video_vimeo.ggInitMedia(me.hotspot.url);
				if (me.skin._popup_video_vimeo.ggVideoNotLoaded) {
					me.skin._popup_video_vimeo.ggInitMedia(me.skin._popup_video_vimeo.ggVideoSource);
				}
				me.skin._popup_video_vimeo.style[domTransition]='none';
				me.skin._popup_video_vimeo.style.visibility=(Number(me.skin._popup_video_vimeo.style.opacity)>0||!me.skin._popup_video_vimeo.style.opacity)?'inherit':'hidden';
				me.skin._popup_video_vimeo.ggVisible=true;
				me.skin._video_popup_vimeo.style[domTransition]='none';
				me.skin._video_popup_vimeo.style.visibility=(Number(me.skin._video_popup_vimeo.style.opacity)>0||!me.skin._video_popup_vimeo.style.opacity)?'inherit':'hidden';
				me.skin._video_popup_vimeo.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_video_video_vimeo=document.createElement('div');
			this._ht_video_video_vimeo__img=document.createElement('img');
			this._ht_video_video_vimeo__img.className='ggskin ggskin_svg';
			this._ht_video_video_vimeo__img.setAttribute('src',basePath + 'images/ht_video_video_vimeo.svg');
			this._ht_video_video_vimeo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_video_video_vimeo__img['ondragstart']=function() { return false; };
			this._ht_video_video_vimeo.appendChild(this._ht_video_video_vimeo__img);
			this._ht_video_video_vimeo__imgo=document.createElement('img');
			this._ht_video_video_vimeo__imgo.className='ggskin ggskin_svg';
			this._ht_video_video_vimeo__imgo.setAttribute('src',basePath + 'images/ht_video_video_vimeo__o.svg');
			this._ht_video_video_vimeo__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_video_video_vimeo__imgo['ondragstart']=function() { return false; };
			this._ht_video_video_vimeo.appendChild(this._ht_video_video_vimeo__imgo);
			this._ht_video_video_vimeo.ggId="ht_video_video_vimeo";
			this._ht_video_video_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_video_vimeo.ggVisible=true;
			this._ht_video_video_vimeo.className='ggskin ggskin_svg ';
			this._ht_video_video_vimeo.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_video_video_vimeo.setAttribute('style',hs);
			this._ht_video_video_vimeo.style[domTransform + 'Origin']='50% 50%';
			me._ht_video_video_vimeo.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_video_video_vimeo.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_video_video_vimeo.onmouseover=function (e) {
				me._ht_video_video_vimeo__img.style.visibility='hidden';
				me._ht_video_video_vimeo__imgo.style.visibility='inherit';
			}
			this._ht_video_video_vimeo.onmouseout=function (e) {
				me._ht_video_video_vimeo__img.style.visibility='inherit';
				me._ht_video_video_vimeo__imgo.style.visibility='hidden';
			}
			this._ht_video_video_vimeo.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_video_video_vimeo);
			this._tt_ht_video_vimeo=document.createElement('div');
			this._tt_ht_video_vimeo__text=document.createElement('div');
			this._tt_ht_video_vimeo.className='ggskin ggskin_textdiv';
			this._tt_ht_video_vimeo.ggTextDiv=this._tt_ht_video_vimeo__text;
			this._tt_ht_video_vimeo.ggId="tt_ht_video_vimeo";
			this._tt_ht_video_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_vimeo.ggVisible=false;
			this._tt_ht_video_vimeo.className='ggskin ggskin_text ';
			this._tt_ht_video_vimeo.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			hs+='pointer-events:auto;';
			this._tt_ht_video_vimeo.setAttribute('style',hs);
			this._tt_ht_video_vimeo.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.666667);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 3px 6px 3px 6px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_vimeo__text.setAttribute('style',hs);
			this._tt_ht_video_vimeo__text.innerHTML=me.hotspot.title;
			this._tt_ht_video_vimeo.appendChild(this._tt_ht_video_vimeo__text);
			me._tt_ht_video_vimeo.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_video_vimeo.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_video_vimeo.ggCurrentLogicStateVisible = -1;
			this._tt_ht_video_vimeo.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_ht_video_vimeo.style[domTransition]='';
					if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_video_vimeo.style.visibility=(Number(me._tt_ht_video_vimeo.style.opacity)>0||!me._tt_ht_video_vimeo.style.opacity)?'inherit':'hidden';
						me._tt_ht_video_vimeo.ggVisible=true;
					}
					else {
						me._tt_ht_video_vimeo.style.visibility="hidden";
						me._tt_ht_video_vimeo.ggVisible=false;
					}
				}
			}
			this._tt_ht_video_vimeo.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_video_vimeo);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_video_vimeo.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_youtube";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 250px;';
			hs+='position : absolute;';
			hs+='top : 50px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._controller.style[domTransition]='none';
				me.skin._controller.style.visibility='hidden';
				me.skin._controller.ggVisible=false;
				me.skin._screentint.style[domTransition]='none';
				me.skin._screentint.style.visibility=(Number(me.skin._screentint.style.opacity)>0||!me.skin._screentint.style.opacity)?'inherit':'hidden';
				me.skin._screentint.ggVisible=true;
				me.skin._close.style[domTransition]='none';
				me.skin._close.style.visibility=(Number(me.skin._close.style.opacity)>0||!me.skin._close.style.opacity)?'inherit':'hidden';
				me.skin._close.ggVisible=true;
				me.skin._popup_video_youtube.ggInitMedia(me.hotspot.url);
				if (me.skin._popup_video_youtube.ggVideoNotLoaded) {
					me.skin._popup_video_youtube.ggInitMedia(me.skin._popup_video_youtube.ggVideoSource);
				}
				me.skin._popup_video_youtube.style[domTransition]='none';
				me.skin._popup_video_youtube.style.visibility=(Number(me.skin._popup_video_youtube.style.opacity)>0||!me.skin._popup_video_youtube.style.opacity)?'inherit':'hidden';
				me.skin._popup_video_youtube.ggVisible=true;
				me.skin._video_popup_youtube.style[domTransition]='none';
				me.skin._video_popup_youtube.style.visibility=(Number(me.skin._video_popup_youtube.style.opacity)>0||!me.skin._video_popup_youtube.style.opacity)?'inherit':'hidden';
				me.skin._video_popup_youtube.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_video_video_youtube=document.createElement('div');
			this._ht_video_video_youtube__img=document.createElement('img');
			this._ht_video_video_youtube__img.className='ggskin ggskin_svg';
			this._ht_video_video_youtube__img.setAttribute('src',basePath + 'images/ht_video_video_youtube.svg');
			this._ht_video_video_youtube__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_video_video_youtube__img['ondragstart']=function() { return false; };
			this._ht_video_video_youtube.appendChild(this._ht_video_video_youtube__img);
			this._ht_video_video_youtube__imgo=document.createElement('img');
			this._ht_video_video_youtube__imgo.className='ggskin ggskin_svg';
			this._ht_video_video_youtube__imgo.setAttribute('src',basePath + 'images/ht_video_video_youtube__o.svg');
			this._ht_video_video_youtube__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_video_video_youtube__imgo['ondragstart']=function() { return false; };
			this._ht_video_video_youtube.appendChild(this._ht_video_video_youtube__imgo);
			this._ht_video_video_youtube.ggId="ht_video_video_youtube";
			this._ht_video_video_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_video_youtube.ggVisible=true;
			this._ht_video_video_youtube.className='ggskin ggskin_svg ';
			this._ht_video_video_youtube.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_video_video_youtube.setAttribute('style',hs);
			this._ht_video_video_youtube.style[domTransform + 'Origin']='50% 50%';
			me._ht_video_video_youtube.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_video_video_youtube.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_video_video_youtube.onmouseover=function (e) {
				me._ht_video_video_youtube__img.style.visibility='hidden';
				me._ht_video_video_youtube__imgo.style.visibility='inherit';
			}
			this._ht_video_video_youtube.onmouseout=function (e) {
				me._ht_video_video_youtube__img.style.visibility='inherit';
				me._ht_video_video_youtube__imgo.style.visibility='hidden';
			}
			this._ht_video_video_youtube.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_video_video_youtube);
			this._tt_ht_video_youtube=document.createElement('div');
			this._tt_ht_video_youtube__text=document.createElement('div');
			this._tt_ht_video_youtube.className='ggskin ggskin_textdiv';
			this._tt_ht_video_youtube.ggTextDiv=this._tt_ht_video_youtube__text;
			this._tt_ht_video_youtube.ggId="tt_ht_video_youtube";
			this._tt_ht_video_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_youtube.ggVisible=false;
			this._tt_ht_video_youtube.className='ggskin ggskin_text ';
			this._tt_ht_video_youtube.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			hs+='pointer-events:auto;';
			this._tt_ht_video_youtube.setAttribute('style',hs);
			this._tt_ht_video_youtube.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.666667);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 3px 4px 3px 4px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_youtube__text.setAttribute('style',hs);
			this._tt_ht_video_youtube__text.innerHTML=me.hotspot.title;
			this._tt_ht_video_youtube.appendChild(this._tt_ht_video_youtube__text);
			me._tt_ht_video_youtube.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_video_youtube.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_video_youtube.ggCurrentLogicStateVisible = -1;
			this._tt_ht_video_youtube.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_ht_video_youtube.style[domTransition]='';
					if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_video_youtube.style.visibility=(Number(me._tt_ht_video_youtube.style.opacity)>0||!me._tt_ht_video_youtube.style.opacity)?'inherit':'hidden';
						me._tt_ht_video_youtube.ggVisible=true;
					}
					else {
						me._tt_ht_video_youtube.style.visibility="hidden";
						me._tt_ht_video_youtube.ggVisible=false;
					}
				}
			}
			this._tt_ht_video_youtube.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_video_youtube);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_video_youtube.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinCloner_thumbnail_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 98px; height: 60px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._thumbnail_nodeimage=document.createElement('div');
		this._thumbnail_nodeimage__img=document.createElement('img');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		this._thumbnail_nodeimage.ggNodeId=nodeId;
		this._thumbnail_nodeimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._thumbnail_nodeimage__img.className='ggskin ggskin_nodeimage';
		this._thumbnail_nodeimage__img['ondragstart']=function() { return false; };
		this._thumbnail_nodeimage.appendChild(this._thumbnail_nodeimage__img);
		this._thumbnail_nodeimage.ggId="Thumbnail NodeImage";
		this._thumbnail_nodeimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_nodeimage.ggVisible=true;
		this._thumbnail_nodeimage.className='ggskin ggskin_nodeimage ';
		this._thumbnail_nodeimage.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		this._thumbnail_nodeimage.setAttribute('style',hs);
		this._thumbnail_nodeimage.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_nodeimage.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._thumbnail_nodeimage.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		this._thumbnail_nodeimage.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}","");
		}
		this._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		this._checkmark_tick=document.createElement('div');
		this._checkmark_tick__img=document.createElement('img');
		this._checkmark_tick__img.className='ggskin ggskin_svg';
		this._checkmark_tick__img.setAttribute('src',basePath + 'images/checkmark_tick.svg');
		this._checkmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._checkmark_tick__img['ondragstart']=function() { return false; };
		this._checkmark_tick.appendChild(this._checkmark_tick__img);
		this._checkmark_tick.ggId="checkmark_tick";
		this._checkmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._checkmark_tick.ggVisible=false;
		this._checkmark_tick.className='ggskin ggskin_svg ';
		this._checkmark_tick.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 72px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		this._checkmark_tick.setAttribute('style',hs);
		this._checkmark_tick.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._checkmark_tick.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._checkmark_tick.ggCurrentLogicStateVisible = -1;
		this._checkmark_tick.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true) || 
				(me._checkmark_tick.ggIsActive() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		this._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnail_nodeimage.appendChild(this._checkmark_tick);
		this._thumbnail_active=document.createElement('div');
		this._thumbnail_active.ggId="Thumbnail Active";
		this._thumbnail_active.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_active.ggVisible=true;
		this._thumbnail_active.className='ggskin ggskin_rectangle ';
		this._thumbnail_active.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #d1d1d1;';
		hs+='cursor : default;';
		hs+='height : 53px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 91px;';
		hs+='pointer-events:auto;';
		this._thumbnail_active.setAttribute('style',hs);
		this._thumbnail_active.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._thumbnail_active.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
		}
		this._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
		}
		this._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
		}
		me._thumbnail_active.ggCurrentLogicStateBorderColor = -1;
		this._thumbnail_active.ggUpdateConditionTimer=function () {
			var newLogicStateBorderColor;
			if (
				(me._thumbnail_active.ggIsActive() == true)
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				(me.elementMouseOver['thumbnail_active'] == true)
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color none';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(209,209,209,1)";
				}
			}
		}
		this._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		this._thumbnail_nodeimage.appendChild(this._thumbnail_active);
		this.__div.appendChild(this._thumbnail_nodeimage);
	};
	function SkinCloner_dropdown_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 180px; height: 25px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._dropdown_menu_text=document.createElement('div');
		this._dropdown_menu_text__text=document.createElement('div');
		this._dropdown_menu_text.className='ggskin ggskin_textdiv';
		this._dropdown_menu_text.ggTextDiv=this._dropdown_menu_text__text;
		this._dropdown_menu_text.ggId="Dropdown Menu Text";
		this._dropdown_menu_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu_text.ggVisible=true;
		this._dropdown_menu_text.className='ggskin ggskin_text ';
		this._dropdown_menu_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 23px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 146px;';
		hs+='pointer-events:auto;';
		this._dropdown_menu_text.setAttribute('style',hs);
		this._dropdown_menu_text.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 146px;';
		hs+='height: 18px;';
		hs+='background: #afafaf;';
		hs+='border: 0px solid #848484;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._dropdown_menu_text__text.setAttribute('style',hs);
		this._dropdown_menu_text__text.innerHTML=me.ggUserdata.title;
		this._dropdown_menu_text.appendChild(this._dropdown_menu_text__text);
		me._dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_menu_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_menu_text.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
			me._dropdown_menu_title_background.onclick();
		}
		this._dropdown_menu_text.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_text']=true;
		}
		this._dropdown_menu_text.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_text']=false;
		}
		this._dropdown_menu_text.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_text']=false;
		}
		me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = -1;
		me._dropdown_menu_text.ggCurrentLogicStateTextColor = -1;
		this._dropdown_menu_text.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['dropdown_menu_text'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				(me._dropdown_menu_text.ggIsActive() == true)
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_text__text.style[domTransition]='background-color none, color none';
				if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 1) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(175,175,175,1)";
				}
			}
			var newLogicStateTextColor;
			if (
				(me._dropdown_menu_text.ggIsActive() == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				(me.elementMouseOver['dropdown_menu_text'] == true)
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._dropdown_menu_text.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._dropdown_menu_text__text.style[domTransition]='background-color none, color none';
				if (me._dropdown_menu_text.ggCurrentLogicStateTextColor == 0) {
					me._dropdown_menu_text__text.style.color="rgba(0,0,0,1)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateTextColor == 1) {
					me._dropdown_menu_text__text.style.color="rgba(0,0,0,1)";
				}
				else {
					me._dropdown_menu_text__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		this._dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		this.__div.appendChild(this._dropdown_menu_text);
		this._dropdown_checkmark=document.createElement('div');
		this._dropdown_checkmark__img=document.createElement('img');
		this._dropdown_checkmark__img.className='ggskin ggskin_svg';
		this._dropdown_checkmark__img.setAttribute('src',basePath + 'images/dropdown_checkmark.svg');
		this._dropdown_checkmark__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dropdown_checkmark__img['ondragstart']=function() { return false; };
		this._dropdown_checkmark.appendChild(this._dropdown_checkmark__img);
		this._dropdown_checkmark.ggId="Dropdown Checkmark";
		this._dropdown_checkmark.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_checkmark.ggVisible=true;
		this._dropdown_checkmark.className='ggskin ggskin_svg ';
		this._dropdown_checkmark.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._dropdown_checkmark.setAttribute('style',hs);
		this._dropdown_checkmark.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_checkmark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_checkmark.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._dropdown_checkmark.ggCurrentLogicStateAlpha = -1;
		this._dropdown_checkmark.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.player.nodeVisited(me._dropdown_checkmark.ggElementNodeId()) == true) || 
				(me._dropdown_checkmark.ggIsActive() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dropdown_checkmark.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dropdown_checkmark.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dropdown_checkmark.style[domTransition]='opacity none, visibility none';
				if (me._dropdown_checkmark.ggCurrentLogicStateAlpha == 0) {
					me._dropdown_checkmark.style.visibility=me._dropdown_checkmark.ggVisible?'inherit':'hidden';
					me._dropdown_checkmark.style.opacity=1;
				}
				else {
					me._dropdown_checkmark.style.visibility="hidden";
					me._dropdown_checkmark.style.opacity=0;
				}
			}
		}
		this._dropdown_checkmark.ggUpdatePosition=function (useTransition) {
		}
		this.__div.appendChild(this._dropdown_checkmark);
	};
	this.addSkin();
};