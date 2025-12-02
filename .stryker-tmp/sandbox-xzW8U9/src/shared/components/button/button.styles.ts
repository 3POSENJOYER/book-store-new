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
import type { Size } from './button.types';
import { orbitronSemibold } from '../../../shared/styles';
export const baseStyle = (size: Size): string => {
  if (stryMutAct_9fa48("1143")) {
    {}
  } else {
    stryCov_9fa48("1143");
    const sizeMap = stryMutAct_9fa48("1144") ? {} : (stryCov_9fa48("1144"), {
      small: stryMutAct_9fa48("1145") ? {} : (stryCov_9fa48("1145"), {
        height: stryMutAct_9fa48("1146") ? "" : (stryCov_9fa48("1146"), '36px'),
        borderRadius: stryMutAct_9fa48("1147") ? "" : (stryCov_9fa48("1147"), '10px'),
        fontSize: stryMutAct_9fa48("1148") ? "" : (stryCov_9fa48("1148"), '13px')
      }),
      medium: stryMutAct_9fa48("1149") ? {} : (stryCov_9fa48("1149"), {
        height: stryMutAct_9fa48("1150") ? "" : (stryCov_9fa48("1150"), '45px'),
        borderRadius: stryMutAct_9fa48("1151") ? "" : (stryCov_9fa48("1151"), '10px'),
        fontSize: stryMutAct_9fa48("1152") ? "" : (stryCov_9fa48("1152"), '20px')
      }),
      large: stryMutAct_9fa48("1153") ? {} : (stryCov_9fa48("1153"), {
        height: stryMutAct_9fa48("1154") ? "" : (stryCov_9fa48("1154"), '65px'),
        borderRadius: stryMutAct_9fa48("1155") ? "" : (stryCov_9fa48("1155"), '14px'),
        fontSize: stryMutAct_9fa48("1156") ? "" : (stryCov_9fa48("1156"), '20px')
      })
    });
    return stryMutAct_9fa48("1157") ? css`` : (stryCov_9fa48("1157"), css`
    height: ${sizeMap[size].height};
    border-radius: ${sizeMap[size].borderRadius};
    ${orbitronSemibold(13)}
    font-size: ${sizeMap[size].fontSize};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none !important;
    gap: 8px !important;
    /* font-family: Orbitron; */
    display: flex;
    align-items: center;
 
    &:disabled {
      background-color: lightgray;
      color: gray;
      cursor: not-allowed;
    }
  `);
  }
};
export const textBtnStyle = (size: Size): string => {
  if (stryMutAct_9fa48("1158")) {
    {}
  } else {
    stryCov_9fa48("1158");
    const paddingMap = stryMutAct_9fa48("1159") ? {} : (stryCov_9fa48("1159"), {
      small: stryMutAct_9fa48("1160") ? "" : (stryCov_9fa48("1160"), '0 30px'),
      medium: stryMutAct_9fa48("1161") ? "" : (stryCov_9fa48("1161"), '0 56px'),
      large: stryMutAct_9fa48("1162") ? "" : (stryCov_9fa48("1162"), '0 56px')
    });
    return stryMutAct_9fa48("1163") ? css`` : (stryCov_9fa48("1163"), css`
    padding: ${paddingMap[size]};
  `);
  }
};
export const iconBtnStyle = (size: Size): string => {
  if (stryMutAct_9fa48("1164")) {
    {}
  } else {
    stryCov_9fa48("1164");
    const sizeMap = stryMutAct_9fa48("1165") ? {} : (stryCov_9fa48("1165"), {
      small: stryMutAct_9fa48("1166") ? "" : (stryCov_9fa48("1166"), '36px'),
      medium: stryMutAct_9fa48("1167") ? "" : (stryCov_9fa48("1167"), '42px'),
      large: stryMutAct_9fa48("1168") ? "" : (stryCov_9fa48("1168"), '48px')
    });
    return stryMutAct_9fa48("1169") ? css`` : (stryCov_9fa48("1169"), css`
    width: ${sizeMap[size]};
    height: ${sizeMap[size]};
    padding: 0;
  `);
  }
};
type ButtonStyles = {
  bgcolor?: string;
  color?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverColor?: string;
  focusColorShadow?: string;
  disabledColor?: string;
  disabledBgColor?: string;
  disabledBorderColor?: string;
};
type ButtonNonOutStyles = {
  color?: string;
  hoverColor?: string;
  focusColor?: string;
  disabledColor?: string;
};

// eslint-disable-next-line no-unused-vars
const generateButtonNonOutStyles = (styles: ButtonNonOutStyles): string => {
  if (stryMutAct_9fa48("1170")) {
    {}
  } else {
    stryCov_9fa48("1170");
    const {
      color,
      hoverColor,
      focusColor,
      disabledColor
    } = styles;
    return stryMutAct_9fa48("1171") ? css`` : (stryCov_9fa48("1171"), css`
		color: var(--${color});
		& path {
			fill: var(--${color});
		}
		background-color: transparent;
		border: none;

		&:hover {
			color: var(--${hoverColor});
			& path {
				fill: var(--${hoverColor});
			}
		}
	  
		&:focus {
			color: var(--${focusColor});
			& path {
				fill: var(--${focusColor});
			}
		}
	  
		&:disabled {
			color: var(--${disabledColor});
			background-color: transparent;
			& path {
				fill:  var(--${disabledColor});
			}
		}
	`);
  }
};
const generateButtonStyles = (styles: ButtonStyles): string => {
  if (stryMutAct_9fa48("1172")) {
    {}
  } else {
    stryCov_9fa48("1172");
    const {
      bgcolor,
      color,
      borderColor,
      hoverColor,
      hoverBgColor,
      focusColorShadow,
      disabledColor,
      disabledBgColor,
      disabledBorderColor
    } = styles;
    return stryMutAct_9fa48("1173") ? css`` : (stryCov_9fa48("1173"), css`
		background: var(--${bgcolor});
		color: var(--${color});
		& path {
			fill: var(--${color});
		}
    	border: 1px solid var(--${borderColor});
		box-shadow: 4px 4px 20px rgba(35, 162, 0, 0.25), -4px -4px 20px rgba(35, 162, 0, 0.25);

    	&:hover {
      	background: var(--${hoverBgColor});
			color: var(--${hoverColor});
			cursor: pointer;
		 	& path {
				fill: var(--${hoverColor});
			}
		}

		&:focus{
			box-shadow: 0px 0px 0px 4px var(--${focusColorShadow});
		}

		&:disabled {
			background: var(--${disabledBgColor});
		${disabledBorderColor ? stryMutAct_9fa48("1174") ? `` : (stryCov_9fa48("1174"), `border: 1px solid var(--${disabledBorderColor});`) : stryMutAct_9fa48("1175") ? `` : (stryCov_9fa48("1175"), `border: 1px solid transparent;`)}
		${disabledColor ? stryMutAct_9fa48("1176") ? `` : (stryCov_9fa48("1176"), `
			color: var(--${disabledColor});
			& path {
				fill: var(--${disabledColor});
			}
			`) : stryMutAct_9fa48("1177") ? `` : (stryCov_9fa48("1177"), `color: var(--${color});`)}

		}
  `);
  }
};
export const colorStyles = stryMutAct_9fa48("1178") ? {} : (stryCov_9fa48("1178"), {
  mainColor: generateButtonStyles(stryMutAct_9fa48("1179") ? {} : (stryCov_9fa48("1179"), {
    bgcolor: stryMutAct_9fa48("1180") ? "" : (stryCov_9fa48("1180"), 'black'),
    color: stryMutAct_9fa48("1181") ? "" : (stryCov_9fa48("1181"), 'white'),
    borderColor: stryMutAct_9fa48("1182") ? "" : (stryCov_9fa48("1182"), 'green'),
    hoverBgColor: stryMutAct_9fa48("1183") ? "" : (stryCov_9fa48("1183"), 'white'),
    hoverColor: stryMutAct_9fa48("1184") ? "" : (stryCov_9fa48("1184"), 'black'),
    // only for example
    disabledColor: stryMutAct_9fa48("1185") ? "" : (stryCov_9fa48("1185"), 'white'),
    disabledBgColor: stryMutAct_9fa48("1186") ? "" : (stryCov_9fa48("1186"), 'base-black'),
    disabledBorderColor: stryMutAct_9fa48("1187") ? "" : (stryCov_9fa48("1187"), 'gray')
  })),
  none: stryMutAct_9fa48("1188") ? css`` : (stryCov_9fa48("1188"), css`
		background: transparent;
		border: none;
		color: inherit;
		&:hover {
		background: transparent;
		}
		&:focus {
		box-shadow: none;
		}
		&:disabled {
		background: transparent;
		border: none;
		color: inherit;
		cursor: not-allowed;
		}
  	`)
});