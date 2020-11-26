function RumTracking(e){"use strict";var n=true,r=false,t=false,i=window.HEAD_LOAD_TIMESTAMP||undefined,o,a={},u,s=undefined,c,f,m,d,p=0,l=[],g=true,w,T;function y(e){C();a=e;a["enabled"]=a["enabled"]===false?false:true;if(!a["enabled"]){return}a["beacon-url"]=a["beacon-url"]||"/lite/rum-track";a["beacon-service"]=a["beacon-service"]||"lite";a["event-name"]=a["event-name"]||"RealUserMonitoringEvent";a["topic-name"]=a["topic-name"]||"RealUserMonitoringEvent";a["app-id"]=a["app-id"]||"linkedin.rum.tracking";a["is-single-page-app"]=a["is-single-page-app"]===false?false:true;a["cross-origin"]=a["cross-origin"]||false;a["beacon-timeout"]=a["beacon-timeout"]===undefined?6e4:a["beacon-timeout"];a["request-sampling-rate"]=a["request-sampling-rate"]||.01;a["user-timing-mark-enabled"]=a["user-timing-mark-enabled"]||false;a["user-timing-measure-enabled"]=a["user-timing-measure-enabled"]===false?false:true;if(a["beacon-source"]&&a["beacon-source"]==="internal-apps"){t=true;a["page-key-prefix"]=a["page-key-prefix"]||""}a["navigation-timing-only"]=a["navigation-timing-only"]||false;if(a["navigation-timing-only"]){a["enable-rs-timing"]=a["enable-rs-timing"]||false;if(a["enable-rs-timing"]){b()}if(document.readyState=="complete"){setTimeout(_,500)}else{window.addEventListener("load",function(){setTimeout(_,500)})}}else{a["enable-rs-timing"]=a["enable-rs-timing"]===false?false:true;b();window.addEventListener("unload",_);window.addEventListener("scroll",function(){if(m){return}try{m=K();f=P()}catch(e){}})}}function b(){var e={"default":.001,xmlhttprequest:1};if(a["rs-sample-rate"]!==null&&typeof a["rs-sample-rate"]==="object"){for(var n in a["rs-sample-rate"]){if(a["rs-sample-rate"].hasOwnProperty(n)){e[n]=a["rs-sample-rate"][n]}}}a["rs-sample-rate"]=e;if(k.resourceTimingSupport===true){k.readResourceTiming();k.setBufferSize(100);if(window.performance.onresourcetimingbufferfull===null){window.performance.onresourcetimingbufferfull=k.readResourceTiming}else if(window.performance.onwebkitresourcetimingbufferfull===null){window.performance.onwebkitresourcetimingbufferfull=k.readResourceTiming}}w=document.createElement("a");T=document.createElement("a")}function S(){var e=document.querySelector('meta[name="treeID"]');return e&&e.getAttribute("content")}function v(){var e=document.querySelector('meta[name="pageKey"]');if(e){return e.getAttribute("content")}else{return document.body.id?document.body.id.substring("pagekey-".length):""}}function E(){var e,n=document.querySelector('meta[name="renderingMode"]');if(n){e=n.getAttribute("data-mode");if(e==="BIGPIPE"){e="BIG_PIPE"}}return e}var h=["loadEventEnd","loadEventStart","domComplete","domContentLoadedEventEnd","domContentLoadedEventStart","domInteractive","domLoading","responseEnd","responseStart","requestStart","secureConnectionStart","connectEnd","connectStart","domainLookupEnd","domainLookupStart","fetchStart","redirectEnd","redirectStart","unloadEventEnd","unloadEventStart","navigationStart"];function R(){var e,n,t;if(r){return}if(window.performance&&window.performance.timing&&window.performance.navigation){o["navigationTimingApi"]=true;e=window.performance.timing;i=e["navigationStart"];for(n=0;n<h.length;n++){t=h[n];if(e[t]){o[t]=e[t]}}o["redirectCount"]=window.performance.navigation.redirectCount;o["navigationType"]=window.performance.navigation.type}else{o["navigationTimingApi"]=false}r=true}var k={resourceTimingSupport:window.performance&&typeof window.performance.getEntriesByType==="function",clearBuffer:function(){var e;if(k.resourceTimingSupport!==true||!a["enable-rs-timing"]){return}if(window.performance.clearResourceTimings&&typeof window.performance.clearResourceTimings==="function"){window.performance.clearResourceTimings()}else if(window.performance.webkitClearResourceTimings&&typeof window.performance.webkitClearResourceTimings==="function"){window.performance.webkitClearResourceTimings()}},setBufferSize:function(e){if(k.resourceTimingSupport!==true||!a["enable-rs-timing"]){return}if(window.performance.setResourceTimingBufferSize&&typeof window.performance.setResourceTimingBufferSize==="function"){window.performance.setResourceTimingBufferSize(e)}else if(window.performance.webkitSetResourceTimingBufferSize&&typeof window.performance.webkitSetResourceTimingBufferSize==="function"){window.performance.webkitSetResourceTimingBufferSize(e)}},resourceTimingFields:{name:true,entryType:false,duration:true,initiatorType:true,fetchStart:true,responseEnd:true,startTime:true,connectEnd:true,connectStart:true,domainLookupEnd:true,domainLookupStart:true,redirectEnd:true,redirectStart:true,requestStart:true,responseStart:true,secureConnectionStart:true,nextHopProtocol:true,transferSize:true,decodedBodySize:true,encodedBodySize:true,workerStart:true},readResourceTiming:function(){var e,n,r,t,i,u,s="rand",f=false,m=o["resourceTimingEntries"]||[];if(k.resourceTimingSupport!==true||!a["enable-rs-timing"]){return}e=window.performance.getEntriesByType("resource");for(n=0;n<e.length;n++){t={};for(r in e[n]){if(k.resourceTimingFields[r]===true){t[r]=e[n][r]}}if(t["initiatorType"]==="img"){c.push(t)}i=Math.random();u=a["rs-sample-rate"][e[n].initiatorType]||a["rs-sample-rate"]["default"];f=d<=a["request-sampling-rate"];if(f||i<=u){m.push(t);t["sampleMode"]="";if(f){t["sampleMode"]="requestSampled,"}if(i<=u){t["sampleMode"]+=s+u.toString()}}}k.clearBuffer();if(m.length>0){o["resourceTimingEntries"]=m}}};function M(){if(window.performance){if(window.performance.clearMarks){window.performance.clearMarks()}if(window.performance.clearMeasures){window.performance.clearMeasures()}}}function B(e,n){var r,t,i,o=[];for(t=0;t<e.length;t++){r=e[t];if(r){i={};i["entryType"]=n;i["name"]=r.name;i["startTime"]=r.startTime;i["duration"]=r.duration;o.push(i)}}return o}function I(){var e,n=[];if(window.performance&&typeof window.performance.getEntriesByType==="function"){if(a["user-timing-measure-enabled"]){e=window.performance.getEntriesByType("measure");n=n.concat(B(e,"MEASURE"))}if(a["user-timing-mark-enabled"]){e=window.performance.getEntriesByType("mark");n=n.concat(B(e,"MARK"))}}o["userTimingEntries"]=n;M()}function A(){var e;if(Object.keys(u).length>0){o["detailedRenderTimingEntries"]=[];for(var n in u){if(u.hasOwnProperty(n)){o["detailedRenderTimingEntries"].push(u[n])}}}k.readResourceTiming();if(o["resourceTimingEntries"]){for(e=o["resourceTimingEntries"].length-1;e>=0;e--){if(o["resourceTimingEntries"][e]["name"]){o["resourceTimingEntries"][e]["name"]=o["resourceTimingEntries"][e]["name"].split(/[?#]/)[0]}}}R();I()}function _(){var e,r,u,s;if(!a["enabled"]){return}A();if(!("navigationStart"in o)){return}if(!g){return}if(a["beacon-source"]){o["timeSource"]=a["beacon-source"]}s=S();if(s){o["treeId"]=s}if(!o.hasOwnProperty("pageKey")&&n){o["pageKey"]=v()}if(!o["pageKey"]){return}if(a["commit-id"]){o["sessionID"]=a["commit-id"]}o["boomerangStart"]=i;o["isSinglePageApp"]=a["is-single-page-app"];if(o["isSinglePageApp"]){if(a["web-ui-framework"]){o["webUIFramework"]=a["web-ui-framework"]}o["appRenderMode"]=E();if(n){o["pageLoadMode"]="INITIAL";if(H()){o["isAppRenderFailed"]=true}}else{o["pageLoadMode"]="PARTIAL"}if("renderCompleteTime"in o){o["timeDone"]=P()}else if(!a["navigation-timing-only"]){return}}if(a["app-version"]){o["appVersion"]=a["app-version"]}if(t){if(a["web-ui-framework"]==="EMBER"&&o["pageKey"]!==undefined){o["pageKey"]=a["page-key-prefix"]+":"+o["pageKey"]}else if(!document.querySelector('meta[name="pageKey"]')){o["pageKey"]=a["page-key-prefix"]+":"+window.location.pathname}}try{if(a["beacon-service"]=="lite"){r=JSON.stringify(o);if(a["cross-origin"]){u=document.body.appendChild(new Image);u.width=1;u.height=1;u.style.display="none";u.src=a["beacon-url"]+"?ir=t&dy=t&plist="+encodeURIComponent(r)}else{e=new XMLHttpRequest;e.open("POST",a["beacon-url"],true);e.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=UTF-8");e.setRequestHeader("X-IsAJAXForm","1");e.send("plist="+encodeURIComponent(r))}}else{q(o)}}catch(c){}C()}function q(e){var n,r={eventInfo:{eventName:a["event-name"],topicName:a["topic-name"],appId:a["app-id"]},eventBody:e};r.eventBody["requestHeader"]={pageKey:e["pageKey"]};r.eventBody["trackingTime"]=-1;n=new XMLHttpRequest;n.open("POST",a["beacon-url"],true);n.setRequestHeader("content-type","application/json");n.send(JSON.stringify([r]))}function C(){o={};c=[];l=[];u={};f=undefined;m=undefined;d=Math.random();g=true;if(s){clearTimeout(s);s=undefined}}function L(e){var n=document.querySelectorAll("img"),r,t,i=[];for(t=n.length-1;t>=0;t--){r=n[t];if(r&&r.src&&r.src.length>0){i.push(r)}}return i}function O(e){var n,r=e.getBoundingClientRect();n={top:Math.max(r.top,0),left:Math.max(r.left,0),bottom:Math.min(r.bottom,window.innerHeight||doc.documentElement.clientHeight),right:Math.min(r.right,window.innerWidth||doc.documentElement.clientWidth)};return!(n.bottom<=n.top||n.right<=n.left)}function P(){var e,n,r,t;if(f){return f}R();f=o["renderCompleteTime"]-o["navigationStart"];if(l){for(r=l.length-1;r>=0;r--){n=l[r];if(n){for(t=c.length-1;t>=0;t--){e=c[t];if(n.src===e.name){if(m&&i&&e["startTime"]>m-i){break}if(n.width*n.height<=1){break}if(O(n)){f=Math.max(f,i+e["responseEnd"]-o["navigationStart"])}break}}}}}return f}function K(){return window.performance&&window.performance.timing&&typeof window.performance.now==="function"?Math.round(window.performance.now())+window.performance.timing.navigationStart:(new Date).getTime()}function H(){return document.querySelector("code#renderError")!=null}y(e);return{setPageKey:function(e){o["pageKey"]=e},addTreeId:function(e,n){var r;if(w&&T){w.href=n;k.readResourceTiming();if(o["resourceTimingEntries"]){for(r=o["resourceTimingEntries"].length-1;r>=0;r--){T.href=o["resourceTimingEntries"][r]["name"];if(w.protocol===T.protocol&&w.host===T.host&&w.pathname===T.pathname&&(w.search===T.search||w.search==="")){o["resourceTimingEntries"][r]["resourceTreeId"]=e;break}}}}},appTransitionStart:function(e){if(e||p>0){_();C();o["navigationStart"]=K();n=false}},appRenderComplete:function(){p++;o["renderCompleteTime"]=K();l=L();if(!s){s=setTimeout(_,a["beacon-timeout"])}},appViewRenderStart:function(e,n){u[e]={renderName:n||e,viewName:n,viewId:e,renderStart:K()}},appViewRenderComplete:function(e,n){if(u[e]){u[e]["renderEnd"]=K()}},setDeepLinkTrackingId:function(e){g=false},setWindowHiddenState:function(e){o["isImpactedByHiddenWindow"]=e},customMarkNames:{UI_FRAMEWORK_BOOTSTRAP_START:"mark_ui_framework_bootstrap_start",UI_FRAMEWORK_BOOTSTRAP_END:"mark_ui_framework_bootstrap_end",ABOVE_THE_FOLD:"mark_above_the_fold"}}}LIModules.exports("RumTracking",window.RumTracking);window.RumTracking=void 0;