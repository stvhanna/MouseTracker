(function(){var a=this.MouseTracker={};a.VERSION="0.0.1";a.Tracker=function(b){a.refresh=b.refresh||500;a.debugLevel=b.debugLevel||0};a.Start=function(){a._record={id:"idGenial",ts:(new Date).getTime(),p:[],sw:$(window).width(),sh:$(window).height()};window.onmousemove=a.MouseMoveTrack;window.onclick=a.MouseClickTrack;window.ondblclick=a.MouseDblClickTrack;window.onmousedown=a.MouseDownTrack;window.onmouseup=a.MouseUpTrack};a.Stop=function(){window.onmousemove=null;window.onclick=null;window.ondblclick=
null;window.onmousedown=null;window.onmouseup=null};a.MouseMoveTrack=function(b){window.onMouseTrackerRecord||(window.onMouseTrackerRecord=setTimeout(function(){a.MouseMoveTrackFired(b)},a.refresh))};a.MouseMoveTrackFired=function(a){c.addPoint(a,"move");window.onMouseTrackerRecord=null};a.MouseClickTrack=function(a){c.addPoint(a,"click")};a.MouseDblClickTrack=function(a){c.addPoint(a,"dblClick")};a.MouseDownTrack=function(a){c.addPoint(a,"down")};a.MouseUpTrack=function(a){c.addPoint(a,"up")};var c=
a.Record={addPoint:function(b,c){a._record.p.push({ts:(new Date).getTime()-a._record.timestamp,x:b.pageX,y:b.pageY,t:c})},save:function(){d(JSON.stringify(a._record))}},d=a.Debug=function(){this.console&&(2<=a.debugLevel&&console.trace(),1<=a.debugLevel&&console.log(Array.prototype.slice.call(arguments)))}})(this,document);
