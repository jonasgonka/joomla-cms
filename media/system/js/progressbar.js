/*	MIT License*/Fx.ProgressBar=new Class({Extends:Fx,options:{text:null,url:null,transition:Fx.Transitions.Circ.easeOut,fit:!0,link:"cancel",html5:!0},initialize:function(a,c){this.element=$(a);this.parent(c);this.element.set("role","progressbar");this.element.set("aria-valuenow","0");this.element.set("aria-valuemin","0");this.element.set("aria-valuemax","100");if(this.options.html5)this.progressElement=(new Element("progress")).wraps(this.element),this.progressElement.max=100,this.progressElement.value=0;var d=this.options.url;d&&this.element.setStyles({"background-image":"url("+d+")","background-repeat":"no-repeat"});if(this.options.fit){if(d=d||this.element.getStyle("background-image").replace(/^url\(["']?|["']?\)$/g,"")){var b=new Image;b.onload=function(){this.fill=b.width;b=b.onload=null;this.set(this.now||0)}.bind(this);b.src=d;if(!this.fill&&b.width)b.onload()}}else this.set(0)},start:function(a,c){return this.parent(this.now,arguments.length==1?a.limit(0,100):a/c*100)},set:function(a){this.now=a;this.element.setStyle("backgroundPosition",(this.fill?(this.fill/-2+a/100*(this.element.width||1)||0).round()+"px":100-a+"%")+" 0px").title=Math.round(a)+"%";this.element.set("aria-valuenow",a);if(this.options.html5)this.progressElement.value=a;var c=$(this.options.text);c&&c.set("text",Math.round(a)+"%");return this}});