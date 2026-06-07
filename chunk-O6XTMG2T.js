import{Ca as O,Fa as V,Ga as N,J as P,Ka as W,l as _,ya as Q}from"./chunk-Z4QW5UWV.js";import{Ba as x,Db as h,Eb as c,Fb as m,Gb as p,Hb as S,Ib as T,Qc as j,Rc as F,Sb as M,Tb as b,Ub as $,Wa as d,Wb as R,Xb as A,ca as E,db as G,ea as l,ib as g,jc as L,mc as u,nc as f,va as B,wb as v}from"./chunk-ZZ2H635T.js";var w=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let e=Math.max(...this.tracker);return e>1?this.rowCount+e-1:this.rowCount}positions;update(e,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(e),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(i=>this._trackTile(i))}_trackTile(e){let t=this._findMatchingGap(e.colspan);return this._markTilePosition(t,e),this.columnIndex=t+e.colspan,new z(this.rowIndex,t)}_findMatchingGap(e){e>this.tracker.length;let t=-1,i=-1;do{if(this.columnIndex+e>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),i=this._findGapEndIndex(t);continue}i=this._findGapEndIndex(t),this.columnIndex=t+1}while(i-t<e||i==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let e=0;e<this.tracker.length;e++)this.tracker[e]=Math.max(0,this.tracker[e]-1)}_findGapEndIndex(e){for(let t=e+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(e,t){for(let i=0;i<t.colspan;i++)this.tracker[e+i]=t.rowspan}},z=class{row;col;constructor(e,t){this.row=e,this.col=t}};var q=["*"];var X=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,Z=new E("MAT_GRID_LIST"),H=(()=>{class r{_element=l(x);_gridList=l(Z,{optional:!0});_rowspan=1;_colspan=1;constructor(){}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(_(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(_(t))}_setStyle(t,i){this._element.nativeElement.style[t]=i}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=g({type:r,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(i,n){i&2&&v("rowspan",n.rowspan)("colspan",n.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:q,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(i,n){i&1&&(M(),S(0,"div",0),b(1),T())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2,changeDetection:0})}return r})();var Y=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,y=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(e,t,i,n){this._gutterSize=K(e),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=i,this._direction=n}getBaseTileSize(e,t){return`(${e}% - (${this._gutterSize} * ${t}))`}getTilePosition(e,t){return t===0?"0":a(`(${e} + ${this._gutterSize}) * ${t}`)}getTileSize(e,t){return`(${e} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(e,t,i){let n=100/this._cols,o=(this._cols-1)/this._cols;this.setColStyles(e,i,n,o),this.setRowStyles(e,t,n,o)}setColStyles(e,t,i,n){let o=this.getBaseTileSize(i,n),s=this._direction==="rtl"?"right":"left";e._setStyle(s,this.getTilePosition(o,t)),e._setStyle("width",a(this.getTileSize(o,e.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(e){return`${this._rowspan} * ${this.getTileSize(e,1)}`}getComputedHeight(){return null}},C=class extends y{fixedRowHeight;constructor(e){super(),this.fixedRowHeight=e}init(e,t,i,n){super.init(e,t,i,n),this.fixedRowHeight=K(this.fixedRowHeight),Y.test(this.fixedRowHeight)}setRowStyles(e,t){e._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),e._setStyle("height",a(this.getTileSize(this.fixedRowHeight,e.rowspan)))}getComputedHeight(){return["height",a(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["height",null]),e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}},D=class extends y{rowHeightRatio;baseTileHeight;constructor(e){super(),this._parseRatio(e)}setRowStyles(e,t,i,n){let o=i/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(o,n),e._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),e._setStyle("paddingTop",a(this.getTileSize(this.baseTileHeight,e.rowspan)))}getComputedHeight(){return["paddingBottom",a(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(e){e._setListStyle(["paddingBottom",null]),e._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(e){let t=e.split(":");t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}},k=class extends y{setRowStyles(e,t){let i=100/this._rowspan,n=(this._rows-1)/this._rows,o=this.getBaseTileSize(i,n);e._setStyle("top",this.getTilePosition(o,t)),e._setStyle("height",a(this.getTileSize(o,e.rowspan)))}reset(e){e._tiles&&e._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}};function a(r){return`calc(${r})`}function K(r){return r.match(/([A-Za-z%]+)$/)?r:`${r}px`}var tt="fit",U=(()=>{class r{_element=l(x);_dir=l(P,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;constructor(){}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(_(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){let i=`${t??""}`;i!==this._rowHeight&&(this._rowHeight=i,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===tt?this._tileStyler=new k:t&&t.indexOf(":")>-1?this._tileStyler=new D(t):this._tileStyler=new C(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new w);let t=this._tileCoordinator,i=this._tiles.filter(o=>!o._gridList||o._gridList===this),n=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,i),this._tileStyler.init(this.gutterSize,t,this.cols,n),i.forEach((o,s)=>{let I=t.positions[s];this._tileStyler.setStyle(o,I.row,I.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=g({type:r,selectors:[["mat-grid-list"]],contentQueries:function(i,n,o){if(i&1&&$(o,H,5),i&2){let s;R(s=A())&&(n._tiles=s)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(i,n){i&2&&v("cols",n.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[L([{provide:Z,useExisting:r}])],ngContentSelectors:q,decls:2,vars:0,template:function(i,n){i&1&&(M(),S(0,"div"),b(1),T())},styles:[X],encapsulation:2,changeDetection:0})}return r})();var Dt=(()=>{class r{apiService;popolazione=B([]);constructor(t){this.apiService=t}ngOnInit(){this.apiService.getPopolazione(),this.popolazione=this.apiService.popolazione}static \u0275fac=function(i){return new(i||r)(G(W))};static \u0275cmp=g({type:r,selectors:[["sheldon-public-story"]],decls:13,vars:20,consts:[["cols","2"],["groupBy","comune","filterBy","unione|anno","reduceBy","sum",3,"title","data","limit"],["groupBy","comune","filterBy","unione|anno","masterField","unione","reduceBy","sum",3,"title","data","limit"],["groupBy","anno","filterBy","unione|comune","masterField","unione","reduceBy","sum",3,"title","data","limit"],["groupBy","comune","filterBy","unione|comune|anno","masterField","unione","reduceBy","sum",3,"title","data","limit"]],template:function(i,n){i&1&&(c(0,"mat-grid-list",0)(1,"mat-grid-tile"),p(2,"sheldon-chart-bars",1),u(3,"transloco"),m(),c(4,"mat-grid-tile"),p(5,"sheldon-chart-h-bars",2),u(6,"transloco"),m(),c(7,"mat-grid-tile"),p(8,"sheldon-chart-line",3),u(9,"transloco"),m(),c(10,"mat-grid-tile"),p(11,"sheldon-kpi",4),u(12,"transloco"),m()()),i&2&&(d(2),h("title",f(3,12,"dataStory.populationByComune"))("data",n.popolazione())("limit",10),d(3),h("title",f(6,14,"dataStory.populationByComuneStacked"))("data",n.popolazione())("limit",10),d(3),h("title",f(9,16,"dataStory.populationTrendByComune"))("data",n.popolazione())("limit",-1),d(3),h("title",f(12,18,"dataStory.totalAreaPopulation"))("data",n.popolazione())("limit",-1))},dependencies:[O,V,Q,N,U,H,F,j],encapsulation:2})}return r})();export{Dt as default};
//# sourceMappingURL=chunk-O6XTMG2T.js.map
