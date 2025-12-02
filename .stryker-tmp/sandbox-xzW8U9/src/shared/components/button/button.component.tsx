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
import React from 'react';
import type { ButtonProps } from './';
import { IconBtn, TextBtn, ButtonType } from './';
export const Button = <T extends ButtonType,>({
  additionalProps,
  loading = stryMutAct_9fa48("1136") ? true : (stryCov_9fa48("1136"), false),
  disabled = stryMutAct_9fa48("1137") ? true : (stryCov_9fa48("1137"), false),
  ...buttonProps
}: ButtonProps<T>): React.ReactElement => {
  if (stryMutAct_9fa48("1138")) {
    {}
  } else {
    stryCov_9fa48("1138");
    const {
      btnType
    } = additionalProps;
    switch (btnType) {
      case ButtonType.TEXT:
        if (stryMutAct_9fa48("1139")) {} else {
          stryCov_9fa48("1139");
          return <TextBtn loading={loading} disabled={disabled} additionalProps={additionalProps} {...buttonProps} />;
        }
      case ButtonType.ICON:
        if (stryMutAct_9fa48("1140")) {} else {
          stryCov_9fa48("1140");
          return <IconBtn loading={loading} disabled={disabled} additionalProps={additionalProps} {...buttonProps} />;
        }
      default:
        if (stryMutAct_9fa48("1141")) {} else {
          stryCov_9fa48("1141");
          throw new Error(stryMutAct_9fa48("1142") ? "" : (stryCov_9fa48("1142"), 'Unsupported button type'));
        }
    }
  }
};
export default Button;