import{a as St,b as le,c as de,d as A,f as Rt,g as Et}from"./chunk-DXNMI5ZQ.js";import{$ as c,$c as H,Ab as fe,Ba as D,Bb as ve,Ca as P,Da as E,Db as pt,Dc as re,F as Ze,Fa as f,Fb as bt,Gc as wt,H as _,Ha as u,Hc as Ce,Ia as be,Ic as ye,J as x,Ja as ue,Jb as ut,K as T,Ka as nt,Kc as Le,La as at,Lb as ht,Lc as Dt,M as Ke,Ma as Y,Mb as gt,Mc as Pt,Na as U,Nc as se,Oa as he,Ob as _t,P as ke,Pa as ge,Q as Xe,Qa as Ie,Qb as ft,Ra as F,Rb as Se,S as y,Sa as S,Uc as W,Va as v,Vc as $,W as N,Wa as R,Xa as J,Xc as It,Yc as Bt,Za as ie,Zc as Q,_ as Je,_a as oe,_c as Z,a as te,ab as it,b as ne,ca as et,cb as L,db as O,dc as vt,ea as tt,eb as ot,ec as Re,fa as pe,g as Qe,ga as M,gb as k,h as ce,hb as rt,i as je,ia as Me,jb as l,k as We,ka as we,kb as ee,l as $e,la as De,lc as Ct,mb as st,mc as yt,n as ae,na as V,nb as z,nc as xt,oa as I,ob as Be,oc as Tt,pa as B,pb as lt,q as Ge,qb as dt,r as Te,ra as Pe,s as X,sa as G,t as qe,ta as q,ua as g,uc as kt,va as s,vc as Ee,w as Ye,wa as d,wc as Mt,x as me,xa as w,xb as _e,y as Ue,yb as ct,z as j,zb as mt}from"./chunk-MZOTCG3X.js";var Ae=["*"];var Vt=["tabListContainer"],zt=["tabList"],Qt=["tabListInner"],jt=["nextPaginator"],Wt=["previousPaginator"];var $t=["mat-tab-nav-bar",""],Gt=["mat-tab-link",""];var Fe="mdc-tab-indicator--active",Lt="mdc-tab-indicator--no-transition",Ne=class{_items;_currentItem;constructor(r){this._items=r}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0}alignToElement(r){let e=this._items.find(n=>n.elementRef.nativeElement===r),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let n=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(n),this._currentItem=e}}},qt=(()=>{class i{_elementRef=_(N);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(Fe);return}let n=t.getBoundingClientRect(),a=e.width/n.width,o=e.left-n.left;t.classList.add(Lt),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${a})`),t.getBoundingClientRect(),t.classList.remove(Lt),t.classList.add(Fe),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Fe)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),n=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",n.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=Me({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",z]}})}return i})();var Ft={passive:!0},Yt=650,Ut=100,Zt=(()=>{class i{_elementRef=_(N);_changeDetectorRef=_(st);_viewportRuler=_(yt);_dir=_(bt,{optional:!0});_ngZone=_(Xe);_platform=_(ut);_sharedResizeObserver=_(vt);_injector=_(Ke);_renderer=_(tt);_animationsDisabled=Re();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new ce;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new ce;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new ke;indexFocused=new ke;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),Ft),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),Ft))}ngAfterContentInit(){let e=this._dir?this._dir.change:$e("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(qe(32),j(this._destroyed)),n=this._viewportRuler.change(150).pipe(j(this._destroyed)),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new ft(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),et(a,{injector:this._injector}),Te(e,n,t,this._items.changes,this._itemsResized()).pipe(j(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),a()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?We:this._items.changes.pipe(me(this._items),Ue(e=>new Qe(t=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(a=>t.next(a));return e.forEach(a=>n.observe(a.elementRef.nativeElement)),()=>{n.disconnect()}}))),Ye(1),X(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!_t(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,n=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:o}=t.elementRef.nativeElement,h,m;this._getLayoutDirection()=="ltr"?(h=a,m=h+o):(m=this._tabListInner.nativeElement.offsetWidth-a,h=m-o);let p=this.scrollDistance,b=this.scrollDistance+n;h<p?this.scrollDistance-=p-h:m>b&&(this.scrollDistance+=Math.min(m-b,h-p))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,n=e-t>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),Ge(Yt,Ut).pipe(j(Te(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:a}=this._scrollHeader(e);(a===0||a>=n)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=Me({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",z],selectedIndex:[2,"selectedIndex","selectedIndex",Be]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})();var Kt=new Ze("MAT_TABS_CONFIG");var He=(()=>{class i extends Zt{_focusedItem=y(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(e){this._fitInkBarToContent.next(e),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new je(!1);stretchTabs=!0;get animationDuration(){return this._animationDuration}set animationDuration(e){let t=e+"";this._animationDuration=/^\d+$/.test(t)?e+"ms":t}_animationDuration;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=y(!1);color="primary";tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let e=_(Kt,{optional:!0});super(),this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new Ne(this._items),this._items.changes.pipe(me(null),j(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(me(null),j(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let e=this._items.toArray();for(let t=0;t<e.length;t++)if(e[t].active){this.selectedIndex=t,this.tabPanel&&(this.tabPanel._activeTabId=e[t].id),this._focusedItem.set(e[t]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}_hasFocus(e){return this._keyManager?.activeItem===e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(t,n,a){if(t&1&&nt(a,Ve,5),t&2){let o;Y(o=U())&&(n._items=o)}},viewQuery:function(t,n){if(t&1&&at(Vt,7)(zt,7)(Qt,7)(jt,5)(Wt,5),t&2){let a;Y(a=U())&&(n._tabListContainer=a.first),Y(a=U())&&(n._tabList=a.first),Y(a=U())&&(n._tabListInner=a.first),Y(a=U())&&(n._nextPaginator=a.first),Y(a=U())&&(n._previousPaginator=a.first)}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(t,n){t&2&&(V("role",n._getRole()),F("--mat-tab-animation-duration",n.animationDuration),S("mat-mdc-tab-header-pagination-controls-enabled",n._showPaginationControls)("mat-mdc-tab-header-rtl",n._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",n.stretchTabs)("mat-primary",n.color!=="warn"&&n.color!=="accent")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("_mat-animation-noopable",n._animationsDisabled))},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",z],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",z],animationDuration:"animationDuration",backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",z],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],features:[we],attrs:$t,ngContentSelectors:Ae,decls:13,vars:6,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(t,n){t&1&&(be(),s(0,"div",5,0),f("click",function(){return n._handlePaginatorClick("before")})("mousedown",function(o){return n._handlePaginatorPress("before",o)})("touchend",function(){return n._stopInterval()}),w(2,"div",6),d(),s(3,"div",7,1),f("keydown",function(o){return n._handleKeydown(o)}),s(5,"div",8,2),f("cdkObserveContent",function(){return n._onContentChanges()}),s(7,"div",9,3),ue(9),d()()(),s(10,"div",10,4),f("mousedown",function(o){return n._handlePaginatorPress("after",o)})("click",function(){return n._handlePaginatorClick("after")})("touchend",function(){return n._stopInterval()}),w(12,"div",6),d()),t&2&&(S("mat-mdc-tab-header-pagination-disabled",n._disableScrollBefore),g("matRippleDisabled",n._disableScrollBefore||n.disableRipple),c(10),S("mat-mdc-tab-header-pagination-disabled",n._disableScrollAfter),g("matRippleDisabled",n._disableScrollAfter||n.disableRipple))},dependencies:[Ee,gt],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--mat-tab-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--mat-tab-divider-height, 1px);
  border-bottom-color: var(--mat-tab-divider-color, var(--mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--mat-tab-foreground-color);
}
`],encapsulation:2})}return i})(),Ve=(()=>{class i extends qt{_tabNavBar=_(He);elementRef=_(N);_focusMonitor=_(ht);_destroyed=new ce;_isActive=!1;_tabIndex=k(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(e){e!==this._isActive&&(this._isActive=e,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=y(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=_(Se).getId("mat-tab-link-");constructor(){super(),_(pt).load(Mt);let e=_(kt,{optional:!0}),t=_(new rt("tabindex"),{optional:!0});this.rippleConfig=e||{},this.tabIndex=t==null?0:parseInt(t)||0,Re()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(j(this._destroyed)).subscribe(n=>{this.fitInkBarToContent=n})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(this.disabled?e.preventDefault():this._tabNavBar.tabPanel&&(e.keyCode===32&&e.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(t,n){t&1&&f("focus",function(){return n._handleFocus()})("keydown",function(o){return n._handleKeydown(o)}),t&2&&(V("aria-controls",n._getAriaControls())("aria-current",n._getAriaCurrent())("aria-disabled",n.disabled)("aria-selected",n._getAriaSelected())("id",n.id)("tabIndex",n._tabIndex())("role",n._getRole()),S("mat-mdc-tab-disabled",n.disabled)("mdc-tab--active",n.active))},inputs:{active:[2,"active","active",z],disabled:[2,"disabled","disabled",z],disableRipple:[2,"disableRipple","disableRipple",z],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Be(e)],id:"id"},exportAs:["matTabLink"],features:[we],attrs:Gt,ngContentSelectors:Ae,decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(t,n){t&1&&(be(),w(0,"span",0)(1,"div",1),s(2,"span",2)(3,"span",3),ue(4),d()()),t&2&&(c(),g("matRippleTrigger",n.elementRef.nativeElement)("matRippleDisabled",n.rippleDisabled))},dependencies:[Ee],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--mat-tab-container-height, 48px);
  font-family: var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));
  font-size: var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));
  letter-spacing: var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));
  line-height: var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));
  font-weight: var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-indicator-color, var(--mat-sys-primary));
  border-top-width: var(--mat-tab-active-indicator-height, 2px);
  border-radius: var(--mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label {
  color: var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label {
  color: var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})(),Nt=(()=>{class i{id=_(Se).getId("mat-tab-nav-panel-");_activeTabId;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-mdc-tab-nav-panel"],hostVars:2,hostBindings:function(t,n){t&2&&V("aria-labelledby",n._activeTabId)("id",n.id)},inputs:{id:"id"},exportAs:["matTabNavPanel"],ngContentSelectors:Ae,decls:1,vars:0,template:function(t,n){t&1&&(be(),ue(0))},encapsulation:2,changeDetection:0})}return i})();function Xt(i,r){if(i&1){let e=E();s(0,"div",6),f("click",function(){x(e);let n=u();return T(n.closeMenu())}),d(),s(1,"nav",7)(2,"a",8),f("click",function(){x(e);let n=u();return T(n.closeMenu())}),s(3,"span",2),v(4,"I PROGETTI"),d()(),s(5,"a",9),f("click",function(){x(e);let n=u();return T(n.closeMenu())}),s(6,"span",2),v(7,"I DATI"),d()()()}}var xe=(()=>{class i{router=_(fe);url=re(this.router.events.pipe(X(e=>e instanceof _e),ae(e=>e.urlAfterRedirects)),{initialValue:this.router.url});activeSection=k(()=>{let t=this.url().split(/[?#]/)[0].split("/").filter(Boolean)[0]??"dashboard";return t==="map"||t==="stories"?"dati":"progetti"});menuOpen=y(!1);toggleMenu(){this.menuOpen.update(e=>!e)}closeMenu(){this.menuOpen.set(!1)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["sheldon-header"]],decls:15,vars:4,consts:[[1,"sheldon-header"],[1,"panel","panel--brand"],[1,"label"],["href","https://unmotivoinpiu.com/","target","_blank",1,"panel","panel--nav"],["routerLink","/dashboard",1,"panel","panel--nav","panel--active"],["aria-label","Toggle menu",1,"hamburger",3,"click"],[1,"toast-backdrop",3,"click"],[1,"toast-menu"],["href","https://unmotivoinpiu.com/","target","_blank",1,"toast-menu__item",3,"click"],["routerLink","/dashboard",1,"toast-menu__item","panel--active",3,"click"]],template:function(t,n){t&1&&(s(0,"header",0)(1,"div",1)(2,"span",2),v(3,"PAESAGGI FUTURI"),d()(),s(4,"a",3)(5,"span",2),v(6,"I PROGETTI"),d()(),s(7,"a",4)(8,"span",2),v(9,"I DATI"),d()(),s(10,"button",5),f("click",function(){return n.toggleMenu()}),w(11,"span")(12,"span")(13,"span"),d()(),I(14,Xt,8,0)),t&2&&(c(10),S("is-open",n.menuOpen()),V("aria-expanded",n.menuOpen()),c(4),B(n.menuOpen()?14:-1))},dependencies:[ve],styles:[`[_ngcontent-%COMP%]:root{--sheldon-col: clamp(72px, 8vw, 96px)}@media(max-width:1366px){[_ngcontent-%COMP%]:root{--sheldon-col: 90px}}@media(max-width:959px){[_ngcontent-%COMP%]:root{--sheldon-col: 56px}}[_ngcontent-%COMP%]:root{--mat-sys-primary: transparent !important;--mat-tab-inactive-label-text-color: white;--color-gradient-ambiente-start: #F4B80D;--color-gradient-ambiente-end: #C79BCC;--color-gradient-cultura-start: #0080FF;--color-gradient-cultura-end: #FF9966;--color-gradient-mobilita-start: #C79BCC;--color-gradient-mobilita-end: #55BC7A;--color-gradient-sicurezza-start: #3FB5C4;--color-gradient-sicurezza-end: #F4DF64;--color-gradient-economia-start: #3FB5C4;--color-gradient-economia-end: #F4DF64;--color-gradient-sociale-start: #99EBF2;--color-gradient-sociale-end: #FF5A39;--color-gradient-societa-start: #99EBF2;--color-gradient-societa-end: #FF5A39;--chart-transition-duration: .5s;--filter-control-height: 18px;--min-bar-height: 40px;--mat-list-list-item-one-line-container-height: 30px;--mat-icon-button-icon-size: 100%;--mat-icon-button-state-layer-size: 25px;--mat-sys-surface: #EFE9E9;--mat-button-toggle-divider-color: transparent;--mat-button-toggle-selected-state-text-color: black;--mat-button-toggle-label-text-weight: bolder}body.sheldon-theme-bw[_ngcontent-%COMP%]{--color-gradient-ambiente-start: #000;--color-gradient-ambiente-end: #000;--color-gradient-cultura-start: #000;--color-gradient-cultura-end: #000;--color-gradient-mobilita-start: #000;--color-gradient-mobilita-end: #000;--color-gradient-sicurezza-start: #000;--color-gradient-sicurezza-end: #000;--color-gradient-economia-start: #000;--color-gradient-economia-end: #000;--color-gradient-sociale-start: #000;--color-gradient-sociale-end: #000;--color-gradient-societa-start: #000;--color-gradient-societa-end: #000;--mat-sys-secondary-container: rgb(219 219 219 / .44)}[_nghost-%COMP%]{display:block;width:100%;position:relative;z-index:100}.sheldon-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;height:48px;border-bottom:1px solid #3a3a3a}.panel[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 20px;background-color:#111;border-right:1px solid #3a3a3a;text-decoration:none}.panel[_ngcontent-%COMP%]:last-child{border-right:none}.panel--nav[_ngcontent-%COMP%]{justify-content:center;cursor:pointer;transition:background-color .2s ease,color .2s ease}.panel--nav[_ngcontent-%COMP%]:hover:not(.panel--active){background-color:#222}.panel--active[_ngcontent-%COMP%]{background-color:#e8e4e0}.panel--active[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#111}.label[_ngcontent-%COMP%]{font-family:inherit;font-size:22px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#fff;white-space:nowrap}.hamburger[_ngcontent-%COMP%]{display:none;flex-direction:column;justify-content:center;align-items:center;gap:5px;padding:0 16px;background:#111;border:none;border-left:1px solid #3a3a3a;cursor:pointer}.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;width:22px;height:2px;background:#fff;transition:transform .25s ease,opacity .25s ease}.hamburger.is-open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){transform:translateY(7px) rotate(45deg)}.hamburger.is-open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){opacity:0;transform:scaleX(0)}.hamburger.is-open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){transform:translateY(-7px) rotate(-45deg)}.toast-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:98;background:#00000080}.toast-menu[_ngcontent-%COMP%]{position:fixed;top:48px;left:0;right:0;z-index:99;background:#111;border-bottom:1px solid #3a3a3a;animation:_ngcontent-%COMP%_toast-slide-down .2s ease}.toast-menu__item[_ngcontent-%COMP%]{display:flex;align-items:center;padding:18px 24px;text-decoration:none;border-bottom:1px solid #3a3a3a;transition:background-color .15s ease}.toast-menu__item[_ngcontent-%COMP%]:last-child{border-bottom:none}.toast-menu__item[_ngcontent-%COMP%]:hover{background-color:#222}.toast-menu__item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:20px}@keyframes _ngcontent-%COMP%_toast-slide-down{0%{transform:translateY(-8px);opacity:0}to{transform:translateY(0);opacity:1}}@media(max-width:599px){.sheldon-header[_ngcontent-%COMP%]{grid-template-columns:1fr auto}.panel--nav[_ngcontent-%COMP%]{display:none}.hamburger[_ngcontent-%COMP%]{display:flex}}
/*# sourceMappingURL=header.component-MLMBZIP4.css.map */`]})}return i})();function Jt(i,r){if(i&1&&(s(0,"a",2),v(1),d()),i&2){let e=r.$implicit,t=u();g("routerLink",e.url)("active",t.activeLink()===e.url),c(),J(" ",e.name," ")}}var en=(()=>{class i{links=[];randomCategory="mobilita";constructor(){this.randomCategory=Le(["ambiente","sociale","mobilita"])[0]}route=_(ct);router=_(fe);url=re(this.router.events.pipe(X(e=>e instanceof _e),ae(e=>e.urlAfterRedirects)),{initialValue:this.router.url});activeLink=k(()=>this.url().split(/[?#]/)[0].split("/").filter(Boolean)[0]??"dashboard");theme=_(wt).theme;categoria=re(this.route.queryParamMap.pipe(ae(e=>e.get("categoria")??this.randomCategory)),{initialValue:new URLSearchParams(window.location.search).get("categoria")??Le(["ambiente","sociale","mobilita"])[0]});background=k(()=>{this.theme();let e=this.categoria();if(!e)return"";let t=Dt(e);return Pt(`--color-gradient-${t}-start`)});static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["sheldon-navigation"]],inputs:{links:"links"},decls:7,vars:3,consts:[["tabPanel",""],["mat-tab-nav-bar","",3,"tabPanel"],["mat-tab-link","",3,"routerLink","active"]],template:function(t,n){if(t&1&&(w(0,"sheldon-header"),s(1,"nav",1),G(2,Jt,2,3,"a",2,Pe),d(),s(4,"mat-tab-nav-panel",null,0),w(6,"router-outlet"),d()),t&2){let a=Ie(5);c(),F("background",n.background()),g("tabPanel",a),c(),q(n.links)}},dependencies:[He,Nt,Ve,mt,ve,xe],styles:[`body.sheldon-theme-bw   [_nghost-%COMP%]{--mat-tab-inactive-label-text-color: white !important;--mat-tab-inactive-hover-label-text-color: white}[_nghost-%COMP%]{--mat-tab-inactive-label-text-color: black !important}[_nghost-%COMP%]     .mat-mdc-tab-link-container{flex-grow:unset!important;height:100%}[_nghost-%COMP%]   .mdc-tab-indicator--active[_ngcontent-%COMP%]{background-color:#fff!important;color:#000!important}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]{height:24px!important;display:flex;flex-direction:row}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]     .mat-mdc-tab-list{display:flex}[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:uppercase;height:100%;margin-top:auto;margin-bottom:auto;font-weight:800;font-size:18px;letter-spacing:-.001em}
/*# sourceMappingURL=navigation.component-PDNW3DY6.css.map */`]})}return i})();var nn=["wrapper"],an=i=>({title:i}),on=(i,r)=>r.label;function rn(i,r){if(i&1){let e=E();s(0,"sheldon-sort-toggle",12),f("sortChange",function(n){x(e);let a=u();return T(a.onSortChange(n))}),d()}if(i&2){let e=u();g("defaultSortDirection",e.defaultSortDirection())}}function sn(i,r){if(i&1){let e=E();s(0,"sheldon-dynamic-filter",13),f("filterChange",function(n){x(e);let a=u();return T(a.onFilterChange(n))}),d()}if(i&2){let e=u();g("filterBy",e.filtersFields())("dataset",e.data())("masterField",e.masterField())}}function ln(i,r){if(i&1){let e=E();s(0,"sheldon-reduce-toggle",14),f("reduceChange",function(n){x(e);let a=u();return T(a.onReduceChange(n))}),d()}if(i&2){let e=u();g("options",e.auxReduce())}}function dn(i,r){if(i&1&&(s(0,"div",17),w(1,"sheldon-two-lines-chart-label",18),d()),i&2){let e=u().$implicit,t=u();F("color",e.textColor),c(),g("text",ie(e.shortLabel))("sub",ie(t.formatPercentage(e)))}}function cn(i,r){if(i&1){let e=E();s(0,"div",15),f("mouseenter",function(n){let a=x(e).$implicit,o=u();return T(o.onSegmentEnter(a,n))})("mousemove",function(n){x(e);let a=u();return T(a.onSegmentMove(n))})("mouseleave",function(){x(e);let n=u();return T(n.onSegmentLeave())})("touchstart",function(n){let a=x(e).$implicit,o=u();return T(o.onSegmentTouch(a,n))}),I(1,dn,2,6,"div",16),d()}if(i&2){let e=r.$implicit,t=u();F("flex",t.expandOnHover()&&t.hoveredSegment()===e?e.percentage*3:e.percentage)("min-width",t.expandOnHover()&&t.hoveredSegment()===e?"max-content":null)("background",e.color),S("pop-segment--hovered",t.expandOnHover()&&t.hoveredSegment()===e)("pop-segment--dimmed",t.hoveredSegment()!==null&&t.hoveredSegment()!==e),V("aria-label",e.label+": "+t.formatPercentage(e)),c(),B(t.hoveredSegment()!==e?1:-1)}}var mn=(()=>{class i{multiples;title=l("");infoText=l("");cardId=l("");labelField=l("nome");data=l([]);currentReduce=y(null);reduceBy=l("sum");auxReduce=l([]);groupBy=l("comune");limit=l(15);categoria=l("");expandOnHover=l(!1);showSorting=l(!1);sortBy=l("value");sortDirection=y("desc");defaultSortDirection=l("desc");masterField=l(null);filterBy=l(null);filtersFields=k(()=>this.filterBy()!==null?this.filterBy().split("|"):[]);appliedFilters=y([]);hoveredSegment=y(null);wrapperRef=ee("wrapper");tooltipRef=ee(A,{read:N});pointer=y({x:0,y:0});touchMode=y(!1);scrollListener=()=>{this.touchMode()&&(this.hoveredSegment.set(null),this.touchMode.set(!1))};segments=k(()=>{let e=this.appliedFilters().length&&this.appliedFilters().some(m=>m.value),t=e?this.data().filter(m=>e?this.appliedFilters().every(b=>b.value.length&&b.value===`${m[b.key]}`):!0):this.data(),n=Object.groupBy(t,m=>m[this.groupBy()]),a=this.getGroupedKeys(n),o=[],h=Ce(t,this.currentReduce().reduceBy,this.currentReduce().campo);return a.map(m=>{let p=ye(n,m,this.currentReduce().reduceBy),b=se(this.categoria(),"90deg");o.push({label:m,shortLabel:m,percentage:p/h*100,count:p,color:b,hoverColor:"gold",textColor:"black"})}),o});constructor(e){this.multiples=e,window.addEventListener("scroll",this.scrollListener,{passive:!0,capture:!0})}ngOnInit(){this.currentReduce.set({campo:this.groupBy(),reduceBy:this.reduceBy()}),this.sortDirection.set(this.defaultSortDirection())}ngOnDestroy(){window.removeEventListener("scroll",this.scrollListener,!0)}getGroupedKeys(e){let t=this.sortBy()==="category"?Object.keys(e).sort((n,a)=>`${n}`.localeCompare(`${a}`)):Object.keys(e).sort((n,a)=>ye(e,n,this.currentReduce().reduceBy)-ye(e,a,this.currentReduce().reduceBy));return(!this.showSorting()&&this.defaultSortDirection()==="desc"||this.showSorting()&&this.sortDirection()==="desc")&&t.reverse(),this.limit()?t.slice(0,this.limit()):t}onSegmentEnter(e,t){this.touchMode()||(this.hoveredSegment.set(e),this.positionTooltip(t.clientX,t.clientY))}onSegmentMove(e){this.touchMode()||this.positionTooltip(e.clientX,e.clientY)}onSegmentLeave(){this.touchMode()||this.hoveredSegment.set(null)}onSegmentTouch(e,t){t.preventDefault();let n=t.changedTouches[0];this.touchMode.set(!0),this.hoveredSegment()===e?this.hoveredSegment.set(null):(this.hoveredSegment.set(e),this.positionTooltip(n.clientX,n.clientY))}onTooltipClick(){this.touchMode()&&(this.hoveredSegment.set(null),this.touchMode.set(!1))}positionTooltip(e,t){this.updateTooltipPosition(e,t),requestAnimationFrame(()=>this.updateTooltipPosition(e,t))}updateTooltipPosition(e,t){let n=this.wrapperRef()?.nativeElement;if(!n){this.pointer.set({x:e,y:t});return}let a=12,o=n.getBoundingClientRect(),h=this.tooltipRef()?.nativeElement.querySelector(".chart-tooltip"),m=h?.offsetWidth??196,p=h?.offsetHeight??64,b=e+a;b+m>o.right&&(b=e-a-m),b=Math.min(Math.max(b,o.left),Math.max(o.right-m,o.left));let C=t+a;C+p>o.bottom&&(C=t-a-p),C=Math.min(Math.max(C,o.top),Math.max(o.bottom-p,o.top)),this.pointer.set({x:b,y:C})}formatCount(e){return`(${e.toLocaleString("it-IT")})`}formatPercentage(e){return this.currentReduce().reduceBy==="sum"?this.multiples.transform(e.count):e.percentage.toFixed(1).replace(".",",")+"%"}onFilterChange(e){this.appliedFilters.set(e.filter(t=>t.value))}onSortChange(e){this.sortDirection.set(e.value)}onReduceChange(e){this.currentReduce.set(e.value)}static \u0275fac=function(t){return new(t||i)(pe(H))};static \u0275cmp=M({type:i,selectors:[["sheldon-segmented-chart"]],viewQuery:function(t,n){t&1&&he(n.wrapperRef,nn,5)(n.tooltipRef,A,5,N),t&2&&ge(2)},inputs:{title:[1,"title"],infoText:[1,"infoText"],cardId:[1,"cardId"],labelField:[1,"labelField"],data:[1,"data"],reduceBy:[1,"reduceBy"],auxReduce:[1,"auxReduce"],groupBy:[1,"groupBy"],limit:[1,"limit"],categoria:[1,"categoria"],expandOnHover:[1,"expandOnHover"],showSorting:[1,"showSorting"],sortBy:[1,"sortBy"],defaultSortDirection:[1,"defaultSortDirection"],masterField:[1,"masterField"],filterBy:[1,"filterBy"]},features:[oe([H])],decls:16,vars:23,consts:[["wrapper",""],[1,"height-sm",3,"categoria","infoText","cardId"],["title",""],["subheader",""],[3,"defaultSortDirection"],[3,"filterBy","dataset","masterField"],[3,"options"],["content",""],[1,"pop-bar-container"],["role","img",1,"pop-bar"],[1,"pop-segment",3,"pop-segment--hovered","pop-segment--dimmed","flex","min-width","background"],[3,"click","visible","interactive","text","sub","x","y","offsetX","offsetY"],[3,"sortChange","defaultSortDirection"],[3,"filterChange","filterBy","dataset","masterField"],[3,"reduceChange","options"],[1,"pop-segment",3,"mouseenter","mousemove","mouseleave","touchstart"],[1,"pop-segment__content",3,"color"],[1,"pop-segment__content"],[1,"pop-segment__label",3,"text","sub"]],template:function(t,n){if(t&1&&(s(0,"sheldon-card",1),D(1,2),v(2),L(3,"transloco"),P(),D(4,3),I(5,rn,1,1,"sheldon-sort-toggle",4),I(6,sn,1,3,"sheldon-dynamic-filter",5),I(7,ln,1,1,"sheldon-reduce-toggle",6),P(),D(8,7),s(9,"div",8,0)(11,"div",9),L(12,"transloco"),G(13,cn,2,12,"div",10,on),d()(),s(15,"sheldon-chart-tooltip",11),f("click",function(){return n.onTooltipClick()}),d(),P(),d()),t&2){let a;g("categoria",n.categoria())("infoText",n.infoText())("cardId",n.cardId()),c(2),R(n.title()||O(3,16,"chart.population")),c(3),B(n.showSorting()?5:-1),c(),B(n.filterBy()!==null?6:-1),c(),B(n.auxReduce().length?7:-1),c(4),V("aria-label",ot(12,18,"segmentedBar.populationDistribution",it(21,an,n.title()))),c(2),q(n.segments()),c(2),g("visible",n.hoveredSegment()!==null)("interactive",n.touchMode())("text",((a=n.hoveredSegment())==null?null:a.label)??"")("sub",n.hoveredSegment()?n.formatPercentage(n.hoveredSegment()):"")("x",n.pointer().x)("y",n.pointer().y)("offsetX",0)("offsetY",0)}},dependencies:[dt,Bt,Q,Z,St,le,de,$,A,W],styles:[`[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .pop-badges[_ngcontent-%COMP%]{display:flex;gap:6px}[_nghost-%COMP%]   .pop-highlight[_ngcontent-%COMP%]{color:#fff;font-size:32px;font-weight:800;letter-spacing:-.02em;line-height:1}[_nghost-%COMP%]   .pop-bar-container[_ngcontent-%COMP%]{padding:0;margin-top:auto;background:#fff}[_nghost-%COMP%]   .pop-bar[_ngcontent-%COMP%]{display:flex;height:112px;width:100%;overflow:hidden}[_nghost-%COMP%]   .pop-segment[_ngcontent-%COMP%]{display:flex;align-items:flex-end;justify-content:flex-start;overflow:hidden;cursor:pointer;transition:flex var(--chart-transition-duration) cubic-bezier(.4,0,.2,1),filter .25s ease,box-shadow .25s ease;position:relative;min-width:0}[_nghost-%COMP%]   .pop-segment__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;min-width:0;overflow:hidden}[_nghost-%COMP%]   .pop-segment__label[_ngcontent-%COMP%]{transition:none;font-size:12px;padding:2px 5px 3px}[_nghost-%COMP%]   .pop-segment--hovered[_ngcontent-%COMP%]{z-index:1;overflow:visible}[_nghost-%COMP%]   .pop-segment--hovered[_ngcontent-%COMP%]   .pop-segment__content[_ngcontent-%COMP%]{overflow:visible}[_nghost-%COMP%]   .pop-segment--dimmed[_ngcontent-%COMP%]{filter:brightness(.8) saturate(.8)}
/*# sourceMappingURL=chart-segmented-bar.component-QR45O2SJ.css.map */`]})}return i})();function pn(i,r){if(i&1&&(s(0,"mat-list-item")(1,"div",7)(2,"span",8),v(3),d(),s(4,"span",9),v(5),L(6,"multiples"),d()()()),i&2){let e=r.$implicit;c(3),R(e.nome),c(2),R(O(6,2,e.valore))}}var bn=(()=>{class i{title=l("");infoText=l("");cardId=l("");categoria=l("sociale");filterBy=l("");filtersFields=k(()=>this.filterBy().split("|"));appliedFilters=y([]);masterField=l(null);limit=l(15);data=l([]);filteredData=k(()=>{let e=this.appliedFilters();return e.length&&e.some(n=>n.value)?this.data().filter(n=>e.every(a=>a.value.length&&a.value===`${n[a.key]}`)):this.data()});onFilterChange(e){this.appliedFilters.set(e.filter(t=>t.value))}udm=l("\u20AC");totaleValore=k(()=>this.filteredData().map(e=>e.valore).reduce((e,t)=>e+t,0));static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["sheldon-list"]],inputs:{title:[1,"title"],infoText:[1,"infoText"],cardId:[1,"cardId"],categoria:[1,"categoria"],filterBy:[1,"filterBy"],masterField:[1,"masterField"],limit:[1,"limit"],data:[1,"data"],udm:[1,"udm"]},decls:18,vars:18,consts:[[1,"height-l",3,"categoria","infoText","cardId"],["title",""],["subheader",""],[3,"filterChange","filterBy","dataset","masterField"],["content",""],["appendOnly","","itemSize","30",1,"list-container"],[4,"cdkVirtualFor","cdkVirtualForOf"],[1,"list-row"],[1,"nome-container"],[1,"valore-container"]],template:function(t,n){t&1&&(s(0,"sheldon-card",0),D(1,1),v(2),L(3,"transloco"),P(),D(4,2),s(5,"sheldon-dynamic-filter",3),f("filterChange",function(o){return n.onFilterChange(o)}),d(),P(),D(6,4),s(7,"mat-list")(8,"cdk-virtual-scroll-viewport",5),De(9,pn,7,4,"mat-list-item",6),s(10,"mat-list-item")(11,"div",7)(12,"span",8),v(13),L(14,"transloco"),d(),s(15,"span",9),v(16),L(17,"multiples"),d()()()()(),P(),d()),t&2&&(g("categoria",n.categoria())("infoText",n.infoText())("cardId",n.cardId()),c(2),R(n.title()||O(3,12,"chart.projectsByComune")),c(3),g("filterBy",n.filtersFields())("dataset",n.data())("masterField",n.masterField()),c(4),g("cdkVirtualForOf",n.filteredData()),c(2),F("font-weight","bold"),c(2),R(O(14,14,"list.total")),c(3),R(O(17,16,n.totaleValore())))},dependencies:[Q,Z,Rt,Et,Ct,xt,Tt,$,H,W],styles:[`[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .kpi-value-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .list-count[_ngcontent-%COMP%]{display:block;font-size:11px;opacity:.7;margin-top:2px}[_nghost-%COMP%]   .list-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:217px;overflow-y:scroll;scrollbar-width:none;-ms-overflow-style:none}[_nghost-%COMP%]   .list-container[_ngcontent-%COMP%]::-webkit-scrollbar{width:0;height:0}[_nghost-%COMP%]   mat-list-item[_ngcontent-%COMP%]{padding:0;width:100%;box-sizing:border-box;border-bottom:.5px solid #000}[_nghost-%COMP%]   .list-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;width:100%;min-width:0;overflow:hidden}[_nghost-%COMP%]   .nome-container[_ngcontent-%COMP%]{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-left:8px;font-size:14px;letter-spacing:-.0001em}[_nghost-%COMP%]   .valore-container[_ngcontent-%COMP%]{flex-shrink:0;margin-left:8px;padding-right:8px}[_nghost-%COMP%]     .cdk-virtual-scroll-content-wrapper{position:relative;contain:content}[_nghost-%COMP%]     .cdk-virtual-scroll-spacer{height:0!important}
/*# sourceMappingURL=lista.component-H6MGTWP6.css.map */`]})}return i})();var un=["wrapper"],hn=(i,r)=>r.label;function gn(i,r){if(i&1){let e=E();s(0,"sheldon-dynamic-filter",10),f("filterChange",function(n){x(e);let a=u();return T(a.onFilterChange(n))}),d()}if(i&2){let e=u();g("filterBy",e.filtersFields())("dataset",e.data())("masterField",e.masterField())}}function _n(i,r){if(i&1){let e=E();s(0,"sheldon-reduce-toggle",11),f("reduceChange",function(n){x(e);let a=u();return T(a.onReduceChange(n))}),d()}if(i&2){let e=u();g("options",e.auxReduce())}}function fn(i,r){if(i&1&&w(0,"sheldon-two-lines-chart-label",13),i&2){let e=u().$implicit;g("text",e.label)("sub",e.formattedValue)}}function vn(i,r){if(i&1){let e=E();s(0,"div",12),f("mouseenter",function(n){let a=x(e).$implicit,o=u();return T(o.onTileEnter(a,n))})("mousemove",function(n){x(e);let a=u();return T(a.onTileMove(n))})("mouseleave",function(){x(e);let n=u();return T(n.onTileLeave())})("touchstart",function(n){let a=x(e).$implicit,o=u();return T(o.onTileTouch(a,n))}),I(1,fn,1,2,"sheldon-two-lines-chart-label",13),d()}if(i&2){let e=r.$implicit,t=u();F("left",e.x,"%")("top",e.y,"%")("width",e.w,"%")("height",e.h,"%")("background",e.color),S("dimmed",t.hoveredTile()!==null&&t.hoveredTile()!==e),c(),B(t.hoveredTile()!==e?1:-1)}}var Cn=(()=>{class i{multiples;title=l("");infoText=l("");cardId=l("");data=l([]);groups=l(["comune"]);campo=l("valore");reduceBy=l("sum");auxReduce=l([]);filterBy=l(null);filtersFields=k(()=>this.filterBy()!==null?this.filterBy().split("|"):[]);masterField=l(null);appliedFilters=y([]);currentReduce=y(null);gradients=k(()=>this.data().map(e=>se(this.categoria(),"0deg")));scrollListener=()=>{this.touchMode()&&(this.hoveredTile.set(null),this.touchMode.set(!1))};constructor(e){this.multiples=e,window.addEventListener("scroll",this.scrollListener,{passive:!0,capture:!0})}ngOnDestroy(){window.removeEventListener("scroll",this.scrollListener,!0)}ngOnInit(){this.currentReduce.set({campo:this.auxReduce()[0].campo??this.campo(),reduceBy:this.auxReduce()[0].reduceBy??this.reduceBy()})}filteredData=k(()=>this.appliedFilters().length&&this.appliedFilters().some(t=>t.value)?this.data().filter(t=>this.appliedFilters().every(n=>n.value.length&&n.value===`${t[n.key]}`)):this.data());aggregatedTree=k(()=>{let e=this.filteredData(),t=this.groups(),{campo:n,reduceBy:a}=this.currentReduce(),o=t[0],h=t[t.length-1],m=new Map;for(let p of e){let b=t.map(C=>`${p[C]??"\u2014"}`).join("||");m.has(b)||m.set(b,{groupKey:`${p[o]??"\u2014"}`,label:`${p[h]??"\u2014"}`,rows:[]}),m.get(b).rows.push(p)}return Array.from(m.values()).map(({groupKey:p,label:b,rows:C})=>({groupKey:p,label:b,value:Ce(C,a,n)})).filter(p=>p.value>0).sort((p,b)=>b.value-p.value)});tiles=k(()=>{let e=this.aggregatedTree(),{reduceBy:t}=this.currentReduce();return e.length?yn(e,{x:0,y:0,w:100,h:100}).map((a,o)=>{let h=a.x+a.w>=99.999?100-a.x:a.w,m=a.y+a.h>=99.999?100-a.y:a.h;return{label:a.label,value:a.value,formattedValue:this.multiples.transform(a.value),x:a.x,y:a.y,w:h,h:m,color:this.gradients()[o]}}):[]});categoria=l("");wrapperRef=ee("wrapper");tooltipRef=ee(A,{read:N});hoveredTile=y(null);pointer=y({x:0,y:0});touchMode=y(!1);onTileEnter(e,t){this.touchMode()||(this.hoveredTile.set(e),this.positionTooltip(t.clientX,t.clientY))}onTileMove(e){this.touchMode()||this.positionTooltip(e.clientX,e.clientY)}onTileLeave(){this.touchMode()||this.hoveredTile.set(null)}onTileTouch(e,t){t.preventDefault();let n=t.changedTouches[0];this.touchMode.set(!0),this.hoveredTile()===e?this.hoveredTile.set(null):(this.hoveredTile.set(e),this.positionTooltip(n.clientX,n.clientY))}onTooltipClick(){this.touchMode()&&(this.hoveredTile.set(null),this.touchMode.set(!1))}positionTooltip(e,t){this.updateTooltipPosition(e,t),requestAnimationFrame(()=>this.updateTooltipPosition(e,t))}updateTooltipPosition(e,t){let n=this.wrapperRef()?.nativeElement;if(!n){this.pointer.set({x:e,y:t});return}let a=12,o=n.getBoundingClientRect(),h=this.tooltipRef()?.nativeElement.querySelector(".chart-tooltip"),m=h?.offsetWidth??196,p=h?.offsetHeight??64,b=e+a;b+m>o.right&&(b=e-a-m),b=Math.min(Math.max(b,o.left),Math.max(o.right-m,o.left));let C=t+a;C+p>o.bottom&&(C=t-a-p),C=Math.min(Math.max(C,o.top),Math.max(o.bottom-p,o.top)),this.pointer.set({x:b,y:C})}onReduceChange(e){this.currentReduce.set(e.value)}onFilterChange(e){this.appliedFilters.set(e.filter(t=>t.value))}getBarBackground(e="0deg"){return se(this.categoria(),e)}static \u0275fac=function(t){return new(t||i)(pe(H))};static \u0275cmp=M({type:i,selectors:[["sheldon-chart-treemap"]],viewQuery:function(t,n){t&1&&he(n.wrapperRef,un,5)(n.tooltipRef,A,5,N),t&2&&ge(2)},inputs:{title:[1,"title"],infoText:[1,"infoText"],cardId:[1,"cardId"],data:[1,"data"],groups:[1,"groups"],campo:[1,"campo"],reduceBy:[1,"reduceBy"],auxReduce:[1,"auxReduce"],filterBy:[1,"filterBy"],masterField:[1,"masterField"],categoria:[1,"categoria"]},features:[oe([lt,H])],decls:13,vars:16,consts:[["wrapper",""],[1,"height-l",3,"categoria","infoText","cardId"],["title",""],["subheader",""],[3,"filterBy","dataset","masterField"],[3,"options"],["content",""],[1,"treemap-wrapper"],[1,"treemap-tile","cursor-pointer",3,"dimmed","left","top","width","height","background"],[3,"click","visible","interactive","text","sub","x","y","offsetX","offsetY"],[3,"filterChange","filterBy","dataset","masterField"],[3,"reduceChange","options"],[1,"treemap-tile","cursor-pointer",3,"mouseenter","mousemove","mouseleave","touchstart"],[3,"text","sub"]],template:function(t,n){if(t&1&&(s(0,"sheldon-card",1),D(1,2),v(2),L(3,"transloco"),P(),D(4,3),I(5,gn,1,3,"sheldon-dynamic-filter",4),I(6,_n,1,1,"sheldon-reduce-toggle",5),P(),D(7,6),s(8,"div",7,0),G(10,vn,2,13,"div",8,hn),d(),s(12,"sheldon-chart-tooltip",9),f("click",function(){return n.onTooltipClick()}),d(),P(),d()),t&2){let a,o;g("categoria",n.categoria())("infoText",n.infoText())("cardId",n.cardId()),c(2),R(n.title()||O(3,14,"chart.treemap")),c(3),B(n.filterBy()!==null?5:-1),c(),B(n.auxReduce().length?6:-1),c(4),q(n.tiles()),c(2),g("visible",n.hoveredTile()!==null)("interactive",n.touchMode())("text",((a=n.hoveredTile())==null?null:a.label)??"")("sub",((o=n.hoveredTile())==null?null:o.formattedValue)??"")("x",n.pointer().x)("y",n.pointer().y)("offsetX",0)("offsetY",0)}},dependencies:[Q,Z,le,de,A,$,W],styles:[`[_nghost-%COMP%]{display:block;width:100%}[_nghost-%COMP%]   .treemap-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}[_nghost-%COMP%]   .treemap-tile[_ngcontent-%COMP%]{position:absolute;box-sizing:border-box;overflow:hidden;cursor:default;transition:left var(--chart-transition-duration) ease,top var(--chart-transition-duration) ease,width var(--chart-transition-duration) ease,height var(--chart-transition-duration) ease,opacity .15s ease}[_nghost-%COMP%]   .treemap-tile.dimmed[_ngcontent-%COMP%]{filter:brightness(.75)}[_nghost-%COMP%]   sheldon-two-lines-chart-label[_ngcontent-%COMP%]{text-overflow:ellipsis;padding:2px 5px;font-size:12px;margin:0}
/*# sourceMappingURL=chart-treemap.component-4OZVEDQR.css.map */`]})}return i})();function yn(i,r){let e=i.reduce((a,o)=>a+o.value,0),t=r.w*r.h,n=i.map(a=>ne(te({},a),{area:a.value/e*t}));return ze(n,r)}function ze(i,r){if(!i.length)return[];if(i.length===1)return[ne(te({},i[0]),{x:r.x,y:r.y,w:r.w,h:r.h})];let[e,t]=xn(i,r),n=e.reduce((o,h)=>o+h.area,0),a=[];if(r.w>=r.h){let o=n/r.h,h=r.y;for(let p=0;p<e.length;p++){let b=e[p],C=p===e.length-1?r.y+r.h-h:b.area/o;a.push(ne(te({},b),{x:r.x,y:h,w:o,h:C})),h+=C}let m=r.x+o;return a.concat(ze(t,{x:m,y:r.y,w:r.x+r.w-m,h:r.h}))}else{let o=n/r.w,h=r.x;for(let p=0;p<e.length;p++){let b=e[p],C=p===e.length-1?r.x+r.w-h:b.area/o;a.push(ne(te({},b),{x:h,y:r.y,w:C,h:o})),h+=C}let m=r.y+o;return a.concat(ze(t,{x:r.x,y:m,w:r.w,h:r.y+r.h-m}))}}function xn(i,r){let e=Math.min(r.w,r.h),t=[],n=1/0;for(let a=0;a<i.length;a++){let o=i.slice(0,a+1),h=Tn(o,e);if(h<=n)n=h,t=o;else break}return[t,i.slice(t.length)]}function Tn(i,r){let e=i.reduce((t,n)=>t+n.area,0);return Math.max(...i.map(t=>{let n=t.area/e*r,a=e/r;return Math.max(n/a,a/n)}))}var Ht=(()=>{class i{data=l({});url=l("");static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["sheldon-link-button"]],inputs:{data:[1,"data"],url:[1,"url"]},decls:4,vars:5,consts:[[1,"sheldon-card-descrizione-button"],["matButton","outlined","target","_blank",3,"href"]],template:function(t,n){t&1&&(s(0,"div",0)(1,"a",1),v(2),L(3,"transloco"),d()()),t&2&&(c(),g("href",ie(n.data()[n.url()]),Je),c(),J(" ",O(3,3,"card.discoverMore")))},dependencies:[It,W],styles:[`[_nghost-%COMP%]   .sheldon-card-descrizione-button[_ngcontent-%COMP%]{display:flex;margin-top:12px;margin-bottom:12px}[_nghost-%COMP%]     .mat-mdc-outlined-button{margin-left:auto;margin-right:auto;align-self:center;padding:2px 8px;height:20px;font-weight:800}[_nghost-%COMP%]     .mat-mdc-outlined-button:not(:disabled){color:#fff!important;background-color:#000!important}
/*# sourceMappingURL=sheldon-link-button-2HCC342R.css.map */`]})}return i})();function kn(i,r){if(i&1&&w(0,"sheldon-link-button",4),i&2){let e=u();g("data",e.data())("url",e.url())}}var Mn=(()=>{class i{title=l("Dettaglio intervento");description=l("");url=l("/");data=l({});static \u0275fac=function(t){return new(t||i)};static \u0275cmp=M({type:i,selectors:[["sheldon-descrizione"]],inputs:{title:[1,"title"],description:[1,"description"],url:[1,"url"],data:[1,"data"]},decls:7,vars:7,consts:[[1,"height-m",3,"showSubheader","showButtons"],["title",""],["content",""],[1,"sheldon-card-descrizione"],[3,"data","url"]],template:function(t,n){t&1&&(s(0,"sheldon-card",0),D(1,1),v(2),P(),D(3,2),s(4,"div",3),v(5),d(),I(6,kn,1,2,"sheldon-link-button",4),P(),d()),t&2&&(g("showSubheader",!1)("showButtons",!1),c(2),R(n.data()[n.title()]),c(2),S("has-button",n.data()[n.url()]),c(),J(" ",n.data()[n.description()]," "),c(),B(n.data()[n.url()]?6:-1))},dependencies:[Q,$,Ht],styles:[`[_nghost-%COMP%]{display:block;width:100%;height:100%}[_nghost-%COMP%]   .sheldon-card-descrizione[_ngcontent-%COMP%]{padding:0 8px;overflow-y:scroll;margin-top:12px;height:100%}[_nghost-%COMP%]   .sheldon-card-descrizione.has-button[_ngcontent-%COMP%]{height:calc(100% - 42px)}
/*# sourceMappingURL=card-descrizione.component-QQUEURK2.css.map */`]})}return i})();export{en as a,mn as b,bn as c,Cn as d,Mn as e};
//# sourceMappingURL=chunk-WU346LFW.js.map
