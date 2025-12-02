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
import { cx } from '@emotion/css';
import { baseStyle, iconBtnStyle, colorStyles } from '../button.styles';
import { Size } from '../button.types';
import type { ButtonProps, ButtonType } from '../button.types';
export const IconBtn: React.FC<ButtonProps<ButtonType.ICON>> = ({
  loading,
  disabled,
  additionalProps,
  className,
  ...buttonProps
}) => {
  if (stryMutAct_9fa48("1189")) {
    {}
  } else {
    stryCov_9fa48("1189");
    const {
      size = Size.MEDIUM,
      color,
      icon
    } = additionalProps;
    const styles = cx(baseStyle(size), iconBtnStyle(size), stryMutAct_9fa48("1192") ? color || colorStyles[color] : stryMutAct_9fa48("1191") ? false : stryMutAct_9fa48("1190") ? true : (stryCov_9fa48("1190", "1191", "1192"), color && colorStyles[color]));
    return <button type='button' className={cx(styles, className)} disabled={stryMutAct_9fa48("1193") ? disabled && loading : (stryCov_9fa48("1193"), disabled ?? loading)} {...buttonProps}>
			{loading ? <span>Loading...</span> : icon}
		</button>;
  }
};