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
import { Size, Color } from '../button.types';
import type { ButtonProps, ButtonType } from '../button.types';
import { baseStyle, textBtnStyle, colorStyles } from '../button.styles';
export const TextBtn: React.FC<ButtonProps<ButtonType.TEXT>> = ({
  loading,
  disabled,
  additionalProps,
  className,
  ...buttonProps
}) => {
  if (stryMutAct_9fa48("1194")) {
    {}
  } else {
    stryCov_9fa48("1194");
    const {
      size = Size.MEDIUM,
      color = Color.MAIN_COLOR,
      text,
      leftIcon,
      rightIcon
    } = additionalProps;
    const styles = cx(baseStyle(size), textBtnStyle(size), colorStyles[color]);
    return <button type='button' className={cx(styles, className)} disabled={stryMutAct_9fa48("1195") ? disabled && loading : (stryCov_9fa48("1195"), disabled ?? loading)} {...buttonProps}>
			{loading ? stryMutAct_9fa48("1196") ? "" : (stryCov_9fa48("1196"), 'Loading...') : <>
						{stryMutAct_9fa48("1199") ? leftIcon || <span className='left-icon'>{leftIcon}</span> : stryMutAct_9fa48("1198") ? false : stryMutAct_9fa48("1197") ? true : (stryCov_9fa48("1197", "1198", "1199"), leftIcon && <span className='left-icon'>{leftIcon}</span>)}
						{stryMutAct_9fa48("1202") ? text || <span className='text'>{text}</span> : stryMutAct_9fa48("1201") ? false : stryMutAct_9fa48("1200") ? true : (stryCov_9fa48("1200", "1201", "1202"), text && <span className='text'>{text}</span>)}
						{stryMutAct_9fa48("1205") ? rightIcon || <span className='right-icon'>{rightIcon}</span> : stryMutAct_9fa48("1204") ? false : stryMutAct_9fa48("1203") ? true : (stryCov_9fa48("1203", "1204", "1205"), rightIcon && <span className='right-icon'>{rightIcon}</span>)}
					</>}
		</button>;
  }
};