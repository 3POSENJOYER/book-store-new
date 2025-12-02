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
import StoreData from '../../products/data';
import React, { useState } from 'react';
import './Filter.css';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Product {
  productID: number;
  productName: string;
  produtDescription: string;
  frontImg?: string;
  backImg?: string;
  productPrice: number;
  productReviews: string;
  count?: number;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface FilterProps {
  setFiltered: React.Dispatch<React.SetStateAction<Array<Product>>>;
}
const AuthorFilter: React.FC<FilterProps> = ({
  setFiltered
}) => {
  if (stryMutAct_9fa48("695")) {
    {}
  } else {
    stryCov_9fa48("695");
    const [searchTerm] = useState(stryMutAct_9fa48("696") ? "Stryker was here!" : (stryCov_9fa48("696"), ''));
    const [selectedAuthor, setSelectedAuthor] = useState<Array<string>>(stryMutAct_9fa48("697") ? ["Stryker was here"] : (stryCov_9fa48("697"), []));
    const handleAuthorChange = (AuthorName: string): void => {
      if (stryMutAct_9fa48("698")) {
        {}
      } else {
        stryCov_9fa48("698");
        setSelectedAuthor(prev => {
          if (stryMutAct_9fa48("699")) {
            {}
          } else {
            stryCov_9fa48("699");
            const newSelectedAuthor = prev.includes(AuthorName) ? stryMutAct_9fa48("700") ? prev : (stryCov_9fa48("700"), prev.filter(Author => {
              if (stryMutAct_9fa48("701")) {
                {}
              } else {
                stryCov_9fa48("701");
                return stryMutAct_9fa48("704") ? Author === AuthorName : stryMutAct_9fa48("703") ? false : stryMutAct_9fa48("702") ? true : (stryCov_9fa48("702", "703", "704"), Author !== AuthorName);
              }
            })) : stryMutAct_9fa48("705") ? [] : (stryCov_9fa48("705"), [...prev, AuthorName]);
            if (stryMutAct_9fa48("708") ? newSelectedAuthor.length !== 0 : stryMutAct_9fa48("707") ? false : stryMutAct_9fa48("706") ? true : (stryCov_9fa48("706", "707", "708"), newSelectedAuthor.length === 0)) {
              if (stryMutAct_9fa48("709")) {
                {}
              } else {
                stryCov_9fa48("709");
                setFiltered(StoreData);
              }
            } else {
              if (stryMutAct_9fa48("710")) {
                {}
              } else {
                stryCov_9fa48("710");
                const filteredProducts = stryMutAct_9fa48("711") ? StoreData : (stryCov_9fa48("711"), StoreData.filter(product => {
                  if (stryMutAct_9fa48("712")) {
                    {}
                  } else {
                    stryCov_9fa48("712");
                    return newSelectedAuthor.includes(product.author);
                  }
                }));
                setFiltered(filteredProducts);
              }
            }
            return newSelectedAuthor;
          }
        });
      }
    };
    const filteredAuthor = stryMutAct_9fa48("713") ? StoreData : (stryCov_9fa48("713"), StoreData.filter(Author => {
      if (stryMutAct_9fa48("714")) {
        {}
      } else {
        stryCov_9fa48("714");
        return stryMutAct_9fa48("715") ? Author.author.toUpperCase().includes(searchTerm.toLowerCase()) : (stryCov_9fa48("715"), Author.author.toLowerCase().includes(stryMutAct_9fa48("716") ? searchTerm.toUpperCase() : (stryCov_9fa48("716"), searchTerm.toLowerCase())));
      }
    }));
    return <div>
			<div className='brandList'>
				{(stryMutAct_9fa48("720") ? filteredAuthor.length <= 0 : stryMutAct_9fa48("719") ? filteredAuthor.length >= 0 : stryMutAct_9fa48("718") ? false : stryMutAct_9fa48("717") ? true : (stryCov_9fa48("717", "718", "719", "720"), filteredAuthor.length > 0)) ? filteredAuthor.map(Author => {
          if (stryMutAct_9fa48("721")) {
            {}
          } else {
            stryCov_9fa48("721");
            return <div className='brandItem' key={Author.productID}>
									<input type='checkbox' checked={selectedAuthor.includes(Author.author)} onChange={(): void => {
                if (stryMutAct_9fa48("722")) {
                  {}
                } else {
                  stryCov_9fa48("722");
                  handleAuthorChange(Author.author);
                }
              }} id={stryMutAct_9fa48("723") ? `` : (stryCov_9fa48("723"), `author-${Author.productID}`)} className='brandRadio' />
									<label htmlFor={stryMutAct_9fa48("724") ? `` : (stryCov_9fa48("724"), `author-${Author.productID}`)} className='brandLabel'>
										{Author.author}
									</label>
									<span className='brandCount'>{stryMutAct_9fa48("727") ? Author.count && 0 : stryMutAct_9fa48("726") ? false : stryMutAct_9fa48("725") ? true : (stryCov_9fa48("725", "726", "727"), Author.count || 0)}</span>
								</div>;
          }
        }) : <div className='notFoundMessage'>Not found</div>}
			</div>
		</div>;
  }
};
export default AuthorFilter;