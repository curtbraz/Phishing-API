function logMsgToConsole(msg){if("console" in window&&"log" in console){console.log(msg)}}try{if(!document.getElementsByClassName){document.getElementsByClassName=function(search){var d=document,elements,pattern,i,results=[];if(d.querySelectorAll){return d.querySelectorAll("."+search)}if(d.evaluate){pattern=".//*[contains(concat(' ', @class, ' '), ' "+search+" ')]";elements=d.evaluate(pattern,d,null,0,null);while((i=elements.iterateNext())){results.push(i)}}else{elements=d.getElementsByTagName("*");pattern=new RegExp("(^|\\s)"+search+"(\\s|$)");for(i=0;i<elements.length;i++){if(pattern.test(elements[i].className)){results.push(elements[i])}}}return results}}}catch(err){}function loadcssfile(styleName){var fileName=styleName.replace(".css","-legacy.css");fileName=window.location.protocol+"//www.fedex.com"+fileName;var fileref=document.createElement("link");fileref.setAttribute("rel","stylesheet");fileref.setAttribute("type","text/css");fileref.setAttribute("href",fileName);if(typeof fileref!="undefined"){document.getElementsByTagName("head")[0].appendChild(fileref)}}function loadcss(styleName){var fileref=document.createElement("link");fileref.setAttribute("rel","stylesheet");fileref.setAttribute("type","text/css");fileref.setAttribute("href",styleName);if(typeof fileref!="undefined"){document.getElementsByTagName("head")[0].appendChild(fileref)}}var disableStyle=function(styleName,disabled){var styles=document.styleSheets;var href="";try{for(var i=0;i<styles.length;i++){if(!styles[i].href){continue}var re=new RegExp(".*?//.*?/","");var cssStr=styles[i].href.replace(re,"/");var r=/[^\/]*$/;var dirPath=cssStr.replace(r,"");href=styles[i].href.split("/");href=href[href.length-1];if(href==styleName){styles[i].disabled=disabled;var cssPath=dirPath+styleName;loadcssfile(cssPath);break}}}catch(err){}};(function(){function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent("CustomEvent");evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt}CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent})();function setcookie(name,value,duration){cookiestring=name+"="+escape(value)+";EXPIRES="+getexpirydate(duration)+"; path=/; domain=.fedex.com;";document.cookie=cookiestring;if(!getcookie(name)){return false}else{return true}}function deletecookie(name){cookiestring=name+"=; EXPIRES=Thu, 01-Jan-70 00:00:01 GMT; path=/; domain=.fedex.com;";document.cookie=cookiestring;if(!getcookie(name)){return false}else{return true}}function getcookie(cookiename){var cookiestring=""+document.cookie;var index1=cookiestring.indexOf(cookiename);if(index1==-1||cookiename==""){return""}var index2=cookiestring.indexOf(";",index1);if(index2==-1){index2=cookiestring.length}return unescape(cookiestring.substring(index1+cookiename.length+1,index2))}if(!FDX){var FDX={}}FDX.SESSION={userRewards:getcookie("fdx_rewardPoints"),userRewardsTier:getcookie("fdx_memberType")};FDX.UTILNAV={searchClass:"fxg-user-options__search",searchBtnClass:"fxg-user-options__search-btn",searchBtnClassIcon:"fxg-user-options__icon",headerOpenClass:"fxg-header--search-open",headerCloseClass:"fxg-header--search-close",searchBoxClass:"fxg-search-js",searchResultsClass:"fxg-search-results",searchResultsShowClass:"fxg-search-results--show",headerClass:"fxg-header",searchCloseBtnClass:"fxg-close-btn",searchFieldClass:"fxg-user-options__search-field",wrapperClass:"fxg-nav",wrapperOpenClass:"fxg-nav--search-open",defaultSignInText:"",unAuthenticatedMarkupPath:"",authenticatedMarkupPath:"",searchPath:"//www.fedex.com/cgi-bin/search_redirect/?",rewardMemberClass:"fxg-rewards-link-member",rewardNonMemberClass:"fxg-rewards-link-non-member",rewardPointsClass:"fxg-link__reward-points",rewardDetailClass:"fxg-link__detail",openSearchBox:function(){addClass(firstByClass(FDX.UTILNAV.wrapperClass),FDX.UTILNAV.wrapperOpenClass);firstByClass("fxg-search-btn").addEventListener("click",function(){if(firstByClass("fxg-user-options__search-field").value.length>0){FDX.UTILNAV.search()}})},closeSearchBox:function(elem){firstByClass(FDX.UTILNAV.searchFieldClass,elem.parentNode).value="";removeClass(firstByClass(FDX.UTILNAV.wrapperClass),FDX.UTILNAV.wrapperOpenClass);addClass(firstByClass(FDX.UTILNAV.wrapperClass),FDX.UTILNAV.headerCloseClass);setTimeout(function(){removeClass(firstByClass(FDX.UTILNAV.wrapperClass),FDX.UTILNAV.headerCloseClass)},250);FDX.UTILNAV.hideResults();FDX.DROPDOWN.closeAllDropdowns()},showResults:function(){addClass(firstByClass(FDX.UTILNAV.searchResultsClass),FDX.UTILNAV.searchResultsShowClass);FDX.DROPDOWN.showOverlay()},hideResults:function(){removeClass(firstByClass(FDX.UTILNAV.searchResultsClass),FDX.UTILNAV.searchResultsShowClass);FDX.DROPDOWN.hideOverlay()},mobileCloseSearch:function(mq){if(mq.matches){if(hasClass(firstByClass(FDX.UTILNAV.wrapperClass),FDX.UTILNAV.wrapperOpenClass)){FDX.UTILNAV.closeSearchBox(firstByClass(FDX.UTILNAV.searchCloseBtnClass,firstByClass(FDX.UTILNAV.searchClass)))}}},search:function(){var searchString="";var searchfields=document.getElementsByClassName(FDX.UTILNAV.searchBoxClass);for(a=0;a<searchfields.length;a++){if(searchfields[a]){searchString+="&"+searchfields[a].name+"="+searchfields[a].value}}window.location=FDX.UTILNAV.searchPath+searchString},hideContactName:function(){$(".fxg-user-options__sign-in a span").text(FDX.UTILNAV.defaultSignInText+" ")},showContactName:function(){$(".fxg-user-options__sign-in a span").text(FDX.SESSION.getContactName()+" ")},showAuthenticatedState:function(){return},showUnAuthenticatedState:function(){return},toggleRewardPointsLink:function(){if(!FDX){var FDX={}}try{if(FDX.SESSION.userRewards){logMsgToConsole("rewards");firstByClass(FDX.UTILNAV.rewardPointsClass).innerHTML=Number(FDX.SESSION.userRewards).toLocaleString();firstByClass(FDX.UTILNAV.rewardDetailClass).innerHTML=FDX.SESSION.userRewardsTier;firstByClass(FDX.UTILNAV.rewardMemberClass).style.display="block";firstByClass(FDX.UTILNAV.rewardNonMemberClass).style.display="none"}else{logMsgToConsole("NOrewards");firstByClass(FDX.UTILNAV.rewardMemberClass).style.display="none";firstByClass(FDX.UTILNAV.rewardNonMemberClass).style.display="block"}}catch(err){}},init:function(){return}};function clickSearch(){FDX.UTILNAV.openSearchBox();var loginMenuOut=new CustomEvent("loginMenuOut");document.getElementsByTagName("body")[0].dispatchEvent(loginMenuOut)}function doEvent(callElement,callEvent,callFunction){var IE7=(/MSIE 7/i.test(navigator.userAgent));var IE8=(/MSIE 8/i.test(navigator.userAgent));try{if(!(IE7||IE8)){callElement.addEventListener(callEvent,callFunction,false)}else{callElement.attachEvent("on"+callEvent,callFunction)}}catch(err){}}FDX.DROPDOWN={dropdownClass:"fxg-dropdown-js",openClass:"fxg-dropdown__item--open",subMenuClass:"fxg-dropdown__sub-menu",overlayClass:"fxg-overlay",navClass:"fxg-nav",headerClass:"fxg-header",signInButtonClass:"fxg-user-options__sign-in",bootstrapDropdownClass:"fxg-bootstrap-dropdown",toggleDropdown:function(e){e.preventDefault();logMsgToConsole("Toggle Dropdown className: "+e.target.className+"  "+e.target.nodeName);if(e.target.nodeName=="LI"){elem=e.target}else{elem=e.target.parentNode}logMsgToConsole("Element: "+elem.NodeName);if(hasClass(elem,FDX.DROPDOWN.openClass)){logMsgToConsole("This menu is open "+elem.nodeClass);removeClass(elem,FDX.DROPDOWN.openClass);FDX.DROPDOWN.hideOverlay()}else{FDX.DROPDOWN.closeAllDropdowns();logMsgToConsole("THis thing menu is closed: "+elem.nodeName);addClass(elem,FDX.DROPDOWN.openClass);FDX.DROPDOWN.showOverlay()}},closeAllDropdowns:function(){logMsgToConsole("Closing all dropdowns");var dropdowns=document.getElementsByClassName(FDX.DROPDOWN.openClass);for(a=0;a<dropdowns.length+1;a++){removeClass(dropdowns[a],FDX.DROPDOWN.openClass)}var loginMenuOut=new CustomEvent("loginMenuOut");document.getElementsByTagName("body")[0].dispatchEvent(loginMenuOut);FDX.DROPDOWN.hideOverlay()},showOverlay:function(){logMsgToConsole("showOverLay");if(!firstByClass(FDX.DROPDOWN.overlayClass)){var node=document.createElement("div");node.className=FDX.DROPDOWN.overlayClass;insertAfter(node,firstByClass(FDX.DROPDOWN.navClass))}},hideOverlay:function(){logMsgToConsole("Hide Overlay");var overlay=firstByClass(FDX.DROPDOWN.overlayClass);if(overlay){overlay.parentNode.removeChild(overlay)}},langtoggleOpen:function(e){if(e.target.outerHTML==='<span class="fxg-icon"></span>'){if(hasClass(e.target.parentNode.parentNode,"open")){removeClass(e.target.parentNode.parentNode,"open")}else{addClass(e.target.parentNode.parentNode,"open")}}else{if(hasClass(e.target.parentNode,"open")){removeClass(e.target.parentNode,"open")}else{addClass(e.target.parentNode,"open")}}}};function isDescendant(parent,child){var node=child.parentNode;while(node!=null){if(node==parent){return true}node=node.parentNode}return false}FDX.GLOBALNAV={mobileMenuBtnId:"fxg-mobile-menu-btn",wrapperClass:"fxg-nav",wrapperOpenClass:"fxg-nav--mobile-menu-open",isActiveClass:"is-active",openMobileNav:function(){if(typeof(FDX.DROPDOWN)!=="undefined"){FDX.DROPDOWN.closeAllDropdowns();FDX.DROPDOWN.showOverlay()}addClass(document.getElementById(FDX.GLOBALNAV.mobileMenuBtnId),FDX.GLOBALNAV.isActiveClass);addClass(firstByClass(FDX.GLOBALNAV.wrapperClass),FDX.GLOBALNAV.wrapperOpenClass)},closeMobileNav:function(){removeClass(document.getElementById(FDX.GLOBALNAV.mobileMenuBtnId),FDX.GLOBALNAV.isActiveClass);removeClass(firstByClass(FDX.GLOBALNAV.wrapperClass),FDX.GLOBALNAV.wrapperOpenClass)},};FDX.BREAKPOINTS={DesktopMediaQuery:"993",TabletMediaQuery:"992",MobileMediaQuery:"768",getDesktopMediaQuery:function(){return window.matchMedia("(min-width: "+FDX.BREAKPOINTS.DesktopMediaQuery+"px)")},getTabletMediaQuery:function(){return window.matchMedia("(max-width: "+FDX.BREAKPOINTS.TabletMediaQuery+"px)")},getMobileMediaQuery:function(){return window.matchMedia("(max-width: "+FDX.BREAKPOINTS.MobileMediaQuery+"px)")}};FDX.LOCATIONS_MODULE={submit:function(){var v=document.getElementById("HeaderLocationsModule").address.value;window.location="https://www.fedex.com/locate/?locale=en_US&appId=WCON&originPostalCode="+v+"&originCountryCode=US&actionType=results"}};FDX.TRACK={trackFailedClass:"fxg-tracking-error",trackFailedMessage:"An undefined error occurred.",trackingNumFieldName:"trackingNumber",headerTrackingModuleID:"#HeaderTrackingModule",homeTrackingAppID:"#HomeTrackingApp",doTrackModule:function(){FDX.TRACK.removeErrorMessage();var v=document.getElementById("HeaderTrackingModule").trackingNumber.value;var locale="en_US";var cc="en";window.location="https://www.fedex.com/apps/fedextrack/index.html?action=track&tracknumbers="+v+"&locale="+locale+"&cntry_code="+cc},doTrackApp:function(){if(FDX.CUBE){FDX.CUBE.openApp()}},validateField:function(k,v){if(v){return true}return false},removeErrorMessage:function(){var failed=firstByClass(FDX.TRACK.trackFailedClass);if(failed){failed.parentNode.removeChild(failed)}},showErrorMessage:function(){}};var isInvalid=function(field){return invalidField=(!field.value||field.value=="")?true:false};var clearInvalidState=function(field){removeClass(field,"fxg-field__input--error");field.setAttribute("aria-invalid","false");field.removeAttribute("aria-describedby");if(firstByClass("fxg-field__validation",field.parentNode)){field.parentNode.removeChild(firstByClass("fxg-field__validation",field.parentNode))}};var headerTrackingValidation=function(field){clearInvalidState(field);if(isInvalid(field)){addClass(field,"fxg-field__input--error");field.focus();field.setAttribute("aria-invalid","true");var msg=field.getAttribute("data-errmsg")?field.getAttribute("data-errmsg"):"This is a required field.";var id="fxg-validation-"+new Date().getTime();field.setAttribute("aria-describedby",id);var currentAlert=document.createElement("span");addClass(currentAlert,"fxg-field__validation");currentAlert.innerHTML=msg;currentAlert.setAttribute("id",id);field.parentNode.appendChild(currentAlert);if(firstError===null){firstError=field;alert=currentAlert}return false}else{return true}};doEvent(document.getElementById("HeaderTrackingModule"),"submit",function(e){e.preventDefault();if(document.getElementById("trackingnumberinput")&&headerTrackingValidation(document.getElementById("trackingnumberinput"))){FDX.TRACK.doTrackModule()}});function hasClass(ele,cls){if(ele){logMsgToConsole("hasClass: "+ele+" - "+cls);return !!ele.className.match(new RegExp("(\\s|^)"+cls+"(\\s|$)"))}logMsgToConsole("Has ele not defined to check: "+cls)}function addClass(ele,cls){logMsgToConsole("addClass: "+ele+" - "+cls);if(!hasClass(ele,cls)){ele.className+=" "+cls}}function removeClass(ele,cls){logMsgToConsole("removeClass: "+ele+" - "+cls);if(hasClass(ele,cls)){var reg=new RegExp("(\\s|^)"+cls+"(\\s|$)");ele.className=ele.className.replace(reg," ");logMsgToConsole("CN: "+ele.className)}}function firstByClass(cls,parentElement){logMsgToConsole("firstByClass: "+cls);if(!parentElement){parentElement=document}var ele=document.getElementsByClassName(cls)[0];if(ele!==undefined){return ele}else{logMsgToConsole("Did not find Element matching "+cls+" class name")}}function insertAfter(newNode,referenceNode){referenceNode.parentNode.insertBefore(newNode,referenceNode.nextSibling)}function loadInit(){if(hasClass(document.body,"ddclick")){logMsgToConsole("LoadInit Already ran");return}logMsgToConsole("loadInit()");var URLLink=document.location.href;var valuematch=URLLink.match("/fcl/logon.do");var valuematch2=URLLink.match("/apps/shipadmin/");var valuematch3=URLLink.match("/ratefinder/");addClass(document.body,"ddclick");if((valuematch!=null)||(valuematch2!=null)||(valuematch3!=null)){disableStyle("master-responsive-min.css",true);disableStyle("global-wrapper-min.css",true);disableStyle("master-min.css",true);disableStyle("ie6-min.css",true);disableStyle("ie-min.css",true)}if(valuematch3!=null){var IE7=(/MSIE 7/i.test(navigator.userAgent));var IE8=(/MSIE 8/i.test(navigator.userAgent));var legacyfooter=document.getElementById("fx-global-footer");var aemfooter=document.getElementById("global_footer_reference");var legacyheader=document.getElementById("fx-global-header");var aemheader=document.getElementById("fxg-header-container");if(IE7||IE8){try{legacyfooter.style.display="block";aemfooter.style.display="none";legacyheader.style.display="block";aemheader.style.display="none"}catch(err){}}else{try{legacyfooter.style.display="none";aemfooter.style.display="block";legacyheader.style.display="none";aemheader.style.display="block"}catch(err){}}}doEvent(firstByClass(FDX.UTILNAV.searchBtnClass),"click",clickSearch);var sb=firstByClass(FDX.UTILNAV.searchBoxClass);var sib=document.getElementById("SrchBtn");logMsgToConsole("SB: "+sb);if(sb){if(sib){doEvent(sib,"click",function(e){logMsgToConsole("search button"+sb.value);if(sb.value.length>0){FDX.UTILNAV.search()}else{FDX.UTILNAV.hideResults()}})}doEvent(sb,"keyup",function(e){logMsgToConsole("Key UP"+e.target);if(e.keyCode==13){if(e.target.value.length>0){FDX.UTILNAV.search()}}else{if(e.target.value.length>0){FDX.UTILNAV.showResults()}else{FDX.UTILNAV.hideResults()}}})}doEvent(firstByClass(FDX.UTILNAV.searchCloseBtnClass,firstByClass(FDX.UTILNAV.searchClass)),"click",function(){FDX.UTILNAV.closeSearchBox(this)});FDX.UTILNAV.init();var dropdowns=document.getElementsByClassName(FDX.DROPDOWN.dropdownClass);for(a=0;a<dropdowns.length;a++){doEvent(dropdowns[a],"click",function(e){FDX.DROPDOWN.toggleDropdown(e)})}doEvent(document,"click",function(e){if(hasClass(e.target,FDX.DROPDOWN.overlayClass)){FDX.GLOBALNAV.closeMobileNav();FDX.DROPDOWN.closeAllDropdowns()}});doEvent(document,"keyup",function(e){if(e.keyCode==27){FDX.GLOBALNAV.closeMobileNav();FDX.DROPDOWN.closeAllDropdowns();FDX.DROPDOWN.hideOverlay()}if(e.which==9||e.keyCode==9){var focus=document.activeElement;var submenuArray=document.getElementsByClassName("fxg-dropdown__sub-menu");var isChild=false;for(var i=0;i<submenuArray.length;i++){if(isDescendant(submenuArray[i],focus)){isChild=true;break}}if(!isChild){FDX.GLOBALNAV.closeMobileNav();FDX.DROPDOWN.closeAllDropdowns()}}});doEvent(firstByClass(FDX.DROPDOWN.signInButtonClass),"click",function(e){if(document.body.clientWidth<=FDX.BREAKPOINTS.TabletMediaQuery){FDX.GLOBALNAV.closeMobileNav()}});var langparent=document.getElementsByClassName(FDX.DROPDOWN.bootstrapDropdownClass)[0];doEvent(langparent,"click",function(e){FDX.DROPDOWN.langtoggleOpen(e)});doEvent(document.getElementById(FDX.GLOBALNAV.mobileMenuBtnId),"click",function(e){if(hasClass(this,FDX.GLOBALNAV.isActiveClass)){FDX.GLOBALNAV.closeMobileNav();FDX.DROPDOWN.hideOverlay()}else{FDX.GLOBALNAV.openMobileNav();FDX.DROPDOWN.showOverlay()}})}doEvent(window,"load",loadInit);try{var globalalert=document.getElementById("fx-global-alert");if(globalalert){document.getElementById("fxg-header--sticky").style.top="30px"}}catch(err){}try{doEvent(firstByClass("alert-close"),"click",function(e){document.getElementById("fxg-header--sticky").style.top="0px"})}catch(err){}if(!(document.getElementById("fxg-header-container")==null)){loadInit()}var IE7=(/MSIE 7/i.test(navigator.userAgent));var IE8=(/MSIE 8/i.test(navigator.userAgent));try{if(!(IE7||IE8)){document.body.addEventListener("touchend",function(e){if(hasClass(e.target,FDX.DROPDOWN.overlayClass)){FDX.GLOBALNAV.closeMobileNav();FDX.DROPDOWN.closeAllDropdowns()}},false)}else{document.body.attachEvent("touchend",function(e){if(hasClass(e.target,FDX.DROPDOWN.overlayClass)){FDX.GLOBALNAV.closeMobileNav();FDX.DROPDOWN.closeAllDropdowns()}},false)}}catch(err){};