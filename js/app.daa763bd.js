(function(t){function e(e){for(var a,s,c=e[0],o=e[1],l=e[2],d=0,h=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/spotify-playlist-viz/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},1:function(t,e){},2863:function(t,e,n){"use strict";n("3ee7")},"3ee7":function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},7112:function(t,e,n){t.exports=n.p+"img/Spotify_Logo_RGB_Green.11dc437a.png"},"9c0c":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("Auth"),a("v-app-bar",{attrs:{app:"",color:"black",flat:""}},[a("v-toolbar-title",{staticClass:"title"},[t._v("Spotify Playlist Viz")])],1),a("v-main",{staticClass:"grey lighten-3"},[a("v-container",[a("v-container",[a("v-row",[a("v-row",{attrs:{justify:"space-around",align:"center"}},[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-form",[a("v-text-field",{attrs:{label:"Insert playlist link ...",required:""},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}})],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-btn",{attrs:{elevation:"2",color:"secondary"},on:{click:t.compute}},[t._v(" Search playlist ")])],1)],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"9"}},[a("v-sheet",{attrs:{rounded:"lg"}},[a("Canva",{ref:"canva",on:{selectedSong:t.changeSong}})],1),t.selectable?a("v-card",[a("v-card-title",[t._v(t._s(t.extractor.title)+" ")]),a("v-card-subtitle",[t._v(t._s(t.extractor.author)+" ")]),a("v-card-text",[t._v(" "+t._s(t.extractor.description)+" ")])],1):t._e()],1),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("v-sheet",{attrs:{rounded:"lg","min-height":"268",v:""}},[a("v-card",[a("v-img",{attrs:{src:t.current_cover,height:"300","max-height":"300","max-width":"300"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),a("v-card-title",[t._v(" "+t._s(t.current_song))]),a("v-card-subtitle",[t._v(" "+t._s(t.current_artist))])],1)],1)],1)],1)],1)],1),a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",[a("v-btn",{staticClass:"mx-4",attrs:{dark:"",icon:"",href:"https://github.com/ammlyy/spotify-playlist-viz",target:"_blank"}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" mdi-github ")])],1),a("v-spacer"),a("v-img",{attrs:{"max-height":"70","max-width":"150",src:n("7112"),href:"https://www.spotify.com/it/"}})],1)],1)],1)],1)},i=[],s=n("d4ec"),c=n("bee2"),o=n("262e"),l=n("2caf"),u=(n("9911"),n("d81d"),n("9ab4")),d=n("1b40"),h=(n("a4d3"),n("e01a"),n("ac1f"),n("1276"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("b0c0"),n("159b"),n("d9ca")),v=n.n(h),f=n("e83a"),p=n.n(f),m=function(){function t(){Object(s["a"])(this,t),this.access=new v.a,this.title="",this.description="",this.author="",this.songs_list=[],this.model=new p.a({dim:3,perplexity:30,earlyExaggeration:5,learningRate:50,nIter:2e3,metric:"euclidean"})}return Object(c["a"])(t,[{key:"fetchPlaylist",value:function(t){var e=this,n=String(window.location).split("#")[1],a=new URLSearchParams(n),r=a.get("access_token");this.access.setAccessToken(r||"");var i=t.split("/")[4].split("?")[0];return console.log(i),this.songs_list=[],new Promise((function(t){e.access.getPlaylist(i).then((function(n){e.title=n.body.name,e.author=n.body.owner.display_name?n.body.owner.display_name:"",e.description=n.body.description?n.body.description:"",n.body.tracks.items.forEach((function(t){e.songs_list.push({title:t.track.name,artist:t.track.artists[0].name,img:t.track.album.images[1].url,id:t.track.id})})),t(e.songs_list)}))}))}},{key:"extractFeatures",value:function(t){var e=this,n=[];return new Promise((function(a){e.access.getAudioFeaturesForTracks(t).then((function(t){t.body.audio_features.forEach((function(t){n.push([t.acousticness,t.danceability,t.instrumentalness,t.energy,t.key,t.liveness,t.loudness,t.mode,t.speechiness,t.tempo,t.time_signature,t.valence])})),a(n)}))}))}},{key:"trainModel",value:function(t){this.model.init({data:t}),this.model.run();var e=this.model.getOutputScaled();return e}}]),t}(),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:"c"}})},y=[],b=n("5a89"),_=n("4721"),w=function(t){Object(o["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.inst_id=0,t.mouse=new b["n"](1,1),t.raycaster=new b["j"],t.instance_id=0,t}return Object(c["a"])(n,[{key:"mounted",value:function(){var t=this,e=document.getElementById("c");e&&(this.camera=new b["h"](70,e.clientWidth/e.clientHeight,.01,10),this.camera.position.z=2,this.camera.lookAt(0,0,0),this.scene=new b["k"],this.material=new b["g"],this.geometry=new b["c"](.5,3),this.geometry.scale(.2,.2,.2),this.renderer=new b["p"]({antialias:!0,canvas:e,alpha:!0}),this.renderer.setClearColor(0,1),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.domElement.addEventListener("mousemove",this.onMouseMove.bind(this),!1),this.controls=new _["a"](this.camera,e),this.controls.minDistance=.7,this.controls.maxDistance=5,this.animate(),this.$root.$children[0].$on("dataChanged",(function(e){return t.instantiate(e.length,e)})))}},{key:"instantiate",value:function(t,e){this.clear();var n=new b["f"];this.mesh=new b["d"](this.geometry,this.material,t);for(var a=0;a<t;a++){n=this.translateMatrix(n,e[a]),this.mesh.setMatrixAt(a,n);var r=this.getColor(e[a]);this.mesh.setColorAt(a,r)}this.scene.add(this.mesh),this.scene.needsUpdate=!0}},{key:"translateMatrix",value:function(t,e){var n=new b["o"];return n.x=2*e[0],n.y=2*e[1],n.z=e[2]/2,t.setPosition(n),t}},{key:"getColor",value:function(t){return new b["a"]((t[0]+1)/2,(t[1]+1)/2,(t[2]+1)/2)}},{key:"onMouseMove",value:function(t){t.preventDefault();var e=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(t.clientX-e.left)/e.width*2-1,this.mouse.y=-(t.clientY-e.top)/e.height*2+1}},{key:"clear",value:function(){while(this.scene.children.length>0)this.scene.remove(this.scene.children[0])}},{key:"animate",value:function(){if(window.requestAnimationFrame(this.animate),this.controls.update(),this.raycaster.setFromCamera(this.mouse,this.camera),this.mesh){var t=this.raycaster.intersectObject(this.mesh);if(t.length>0){var e=t[0].instanceId?t[0].instanceId:0;this.instance_id!=e&&(this.instance_id=e,this.$emit("selectedSong",this.instance_id))}}this.renderer.render(this.scene,this.camera)}}]),n}(d["b"]);w=Object(u["a"])([d["a"]],w);var x=w,k=x,j=(n("2863"),n("2877")),O=Object(j["a"])(k,g,y,!1,null,"0d7136e2",null),C=O.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.containsToken()?n("div",{staticClass:"text-center"},[n("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" Access ")]),n("v-card-text",[t._v(" Authorize the app through your Spotify account. ")]),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"green",text:""},on:{click:t.authRequest}},[t._v(" Here ")])],1)],1)],1)],1):t._e()},S=[],P=(n("5319"),function(t){Object(o["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.dialog=!0,t}return Object(c["a"])(n,[{key:"authRequest",value:function(){var t="https://accounts.spotify.com/authorize";t+="?client_id="+encodeURIComponent("175cd279c85d469b8d435cd78556527a"),t+="&redirect_uri="+encodeURIComponent("https://ammlyy.github.io/spotify-playlist-viz/"),t+="&response_type=token",t+="&state=123",window.location.replace(t),this.dialog=!1}},{key:"containsToken",value:function(){return!window.location.hash}}]),n}(d["b"]));P=Object(u["a"])([d["a"]],P);var M=P,T=M,A=n("6544"),R=n.n(A),z=n("8336"),E=n("b0af"),F=n("99d9"),I=n("169a"),$=n("ce7e"),B=n("2fa4"),D=Object(j["a"])(T,V,S,!1,null,null,null),q=D.exports;R()(D,{VBtn:z["a"],VCard:E["a"],VCardActions:F["a"],VCardText:F["c"],VCardTitle:F["d"],VDialog:I["a"],VDivider:$["a"],VSpacer:B["a"]});var U=function(t){Object(o["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.apply(this,arguments),t.link="",t.extractor=new m,t.selectable=!1,t.current_song="",t.current_artist="",t.current_cover="",t}return Object(c["a"])(n,[{key:"updated",value:function(){}},{key:"compute",value:function(){var t=this;this.extractor.fetchPlaylist(this.link).then((function(e){return t.extractor.extractFeatures(e.map((function(t){return t.id})))})).then((function(e){return t.extractor.trainModel(e)})).then((function(e){t.$emit("dataChanged",e),t.selectable=!0}))}},{key:"changeSong",value:function(t){this.current_song=this.extractor.songs_list[t].title,this.current_artist=this.extractor.songs_list[t].artist,this.current_cover=this.extractor.songs_list[t].img}}]),n}(d["b"]);U=Object(u["a"])([Object(d["a"])({components:{Canva:C,Auth:q}})],U);var H=U,L=H,G=(n("5c0b"),n("7496")),J=n("40dc"),W=n("62ad"),X=n("a523"),Y=n("553a"),K=n("4bd4"),N=n("132d"),Q=n("adda"),Z=n("f6c4"),tt=n("490a"),et=n("0fd9"),nt=n("8dd9"),at=n("8654"),rt=n("2a7f"),it=Object(j["a"])(L,r,i,!1,null,null,null),st=it.exports;R()(it,{VApp:G["a"],VAppBar:J["a"],VBtn:z["a"],VCard:E["a"],VCardSubtitle:F["b"],VCardText:F["c"],VCardTitle:F["d"],VCol:W["a"],VContainer:X["a"],VFooter:Y["a"],VForm:K["a"],VIcon:N["a"],VImg:Q["a"],VMain:Z["a"],VProgressCircular:tt["a"],VRow:et["a"],VSheet:nt["a"],VSpacer:B["a"],VTextField:at["a"],VToolbarTitle:rt["a"]});var ct=n("ed18"),ot=n.n(ct),lt=n("ce5b"),ut=n.n(lt),dt=n("f309");a["default"].config.productionTip=!1,ot.a.config(),a["default"].use(ut.a),new a["default"]({vuetify:new dt["a"],render:function(t){return t(st)}}).$mount("#app")}});
//# sourceMappingURL=app.daa763bd.js.map