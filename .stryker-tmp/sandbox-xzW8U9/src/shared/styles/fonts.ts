/* eslint-disable no-unused-expressions */
// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { css } from '@emotion/css';
import { injectGlobal } from '@emotion/css';
import orbitronTtf from '../../assets/fonts/Orbitron.ttf';
stryMutAct_9fa48("1217") ? injectGlobal`` : (stryCov_9fa48("1217"), injectGlobal`
  @font-face {
    font-family: 'Orbitron';
    src: url(${orbitronTtf}) format('truetype');
    font-weight: 100 1000;
    font-display: swap;
  }
`);
const font = stryMutAct_9fa48("1218") ? css`` : (stryCov_9fa48("1218"), css`
	font-family: Orbitron, Arial, Helvetica, sans-serif;
 `);
export const orbitronMax = (fontSize: number, lineHeight?: number): string => {
  if (stryMutAct_9fa48("1219")) {
    {}
  } else {
    stryCov_9fa48("1219");
    return stryMutAct_9fa48("1220") ? css`` : (stryCov_9fa48("1220"), css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${stryMutAct_9fa48("1221") ? lineHeight && fontSize * 1.4 : (stryCov_9fa48("1221"), lineHeight ?? (stryMutAct_9fa48("1222") ? fontSize / 1.4 : (stryCov_9fa48("1222"), fontSize * 1.4)))}px;
		font-weight: 900;
	`);
  }
};
export const orbitronBold = (fontSize: number, lineHeight?: number): string => {
  if (stryMutAct_9fa48("1223")) {
    {}
  } else {
    stryCov_9fa48("1223");
    return stryMutAct_9fa48("1224") ? css`` : (stryCov_9fa48("1224"), css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${stryMutAct_9fa48("1225") ? lineHeight && fontSize * 1.4 : (stryCov_9fa48("1225"), lineHeight ?? (stryMutAct_9fa48("1226") ? fontSize / 1.4 : (stryCov_9fa48("1226"), fontSize * 1.4)))}px;
		font-weight: 700;
	`);
  }
};
export const orbitronSemibold = (fontSize: number, lineHeight?: number): string => {
  if (stryMutAct_9fa48("1227")) {
    {}
  } else {
    stryCov_9fa48("1227");
    return stryMutAct_9fa48("1228") ? css`` : (stryCov_9fa48("1228"), css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${stryMutAct_9fa48("1229") ? lineHeight && fontSize * 1.4 : (stryCov_9fa48("1229"), lineHeight ?? (stryMutAct_9fa48("1230") ? fontSize / 1.4 : (stryCov_9fa48("1230"), fontSize * 1.4)))}px;
		font-weight: 600;
	`);
  }
};
export const orbitronMidBold = (fontSize: number, lineHeight?: number): string => {
  if (stryMutAct_9fa48("1231")) {
    {}
  } else {
    stryCov_9fa48("1231");
    return stryMutAct_9fa48("1232") ? css`` : (stryCov_9fa48("1232"), css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${stryMutAct_9fa48("1233") ? lineHeight && fontSize * 1.4 : (stryCov_9fa48("1233"), lineHeight ?? (stryMutAct_9fa48("1234") ? fontSize / 1.4 : (stryCov_9fa48("1234"), fontSize * 1.4)))}px;
		font-weight: 560;
	`);
  }
};
export const orbitronMedium = (fontSize: number, lineHeight?: number): string => {
  if (stryMutAct_9fa48("1235")) {
    {}
  } else {
    stryCov_9fa48("1235");
    return stryMutAct_9fa48("1236") ? css`` : (stryCov_9fa48("1236"), css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${stryMutAct_9fa48("1237") ? lineHeight && fontSize * 1.4 : (stryCov_9fa48("1237"), lineHeight ?? (stryMutAct_9fa48("1238") ? fontSize / 1.4 : (stryCov_9fa48("1238"), fontSize * 1.4)))}px;
		font-weight: 500;
	`);
  }
};
export const orbitronMediumReg = (fontSize: number, lineHeight?: number): string => {
  if (stryMutAct_9fa48("1239")) {
    {}
  } else {
    stryCov_9fa48("1239");
    return stryMutAct_9fa48("1240") ? css`` : (stryCov_9fa48("1240"), css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${stryMutAct_9fa48("1241") ? lineHeight && fontSize * 1.4 : (stryCov_9fa48("1241"), lineHeight ?? (stryMutAct_9fa48("1242") ? fontSize / 1.4 : (stryCov_9fa48("1242"), fontSize * 1.4)))}px;
		font-weight: 460;
	`);
  }
};
export const orbitronRegular = (fontSize: number, lineHeight?: number): string => {
  if (stryMutAct_9fa48("1243")) {
    {}
  } else {
    stryCov_9fa48("1243");
    return stryMutAct_9fa48("1244") ? css`` : (stryCov_9fa48("1244"), css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${stryMutAct_9fa48("1245") ? lineHeight && fontSize * 1.4 : (stryCov_9fa48("1245"), lineHeight ?? (stryMutAct_9fa48("1246") ? fontSize / 1.4 : (stryCov_9fa48("1246"), fontSize * 1.4)))}px;
		font-weight: 400;
	`);
  }
};
export const orbitronLight = (fontSize: number, lineHeight?: number): string => {
  if (stryMutAct_9fa48("1247")) {
    {}
  } else {
    stryCov_9fa48("1247");
    return stryMutAct_9fa48("1248") ? css`` : (stryCov_9fa48("1248"), css`
		${font}
		font-size: ${fontSize}px;
		line-height: ${stryMutAct_9fa48("1249") ? lineHeight && fontSize * 1.4 : (stryCov_9fa48("1249"), lineHeight ?? (stryMutAct_9fa48("1250") ? fontSize / 1.4 : (stryCov_9fa48("1250"), fontSize * 1.4)))}px;
		font-weight: 300;
	`);
  }
};