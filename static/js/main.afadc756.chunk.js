(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(7),c=n.n(o),r=(n(14),n(1)),i=n(2),u=n(4),l=n(3),p=n(5),h=(n(15),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.className},this.props.value.minutes,s.a.createElement("span",{style:{fontSize:50}},"m")," : ",this.props.value.seconds,s.a.createElement("span",{style:{fontSize:50}},"s"))}}]),t}(a.Component)),m=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{onClick:this.props.onClick,className:this.props.className},"stop")}}]),t}(a.Component),d=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={minutes:0,seconds:0},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"updateMinutes",value:function(){this.setState(function(e){return{minutes:e.minutes+1}})}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.setState(function(e){return{seconds:e.seconds+1}}),e.state.seconds>60&&(e.updateMinutes(),e.state.seconds=0)},1e3)}},{key:"renderWatch",value:function(){return s.a.createElement(h,{value:this.state,className:"watch"})}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"renderstopButton",value:function(){return s.a.createElement(m,{onClick:this.stop.bind(this),className:"stopButton"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("div",null,this.renderWatch()),s.a.createElement("div",null,this.renderstopButton()))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.afadc756.chunk.js.map