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
export const colors = stryMutAct_9fa48("1208") ? {} : (stryCov_9fa48("1208"), {
  green: stryMutAct_9fa48("1209") ? "" : (stryCov_9fa48("1209"), '#1D9368'),
  darkGray: stryMutAct_9fa48("1210") ? "" : (stryCov_9fa48("1210"), '#111111'),
  gray: stryMutAct_9fa48("1211") ? "" : (stryCov_9fa48("1211"), '#464646'),
  baseBlack: stryMutAct_9fa48("1212") ? "" : (stryCov_9fa48("1212"), '#000000'),
  darkYellow: stryMutAct_9fa48("1213") ? "" : (stryCov_9fa48("1213"), '#C9B30C'),
  radialGradient: stryMutAct_9fa48("1214") ? "" : (stryCov_9fa48("1214"), 'radial-gradient(circle, rgba(0, 255, 100, 0.1) 0%, transparent 70%)'),
  IradialGradient: stryMutAct_9fa48("1215") ? "" : (stryCov_9fa48("1215"), 'radial-gradient(circle, rgba(0,255,100,0.1) 0%, transparent 110%)'),
  greenShadow: stryMutAct_9fa48("1216") ? "" : (stryCov_9fa48("1216"), '#00FF004D')
});