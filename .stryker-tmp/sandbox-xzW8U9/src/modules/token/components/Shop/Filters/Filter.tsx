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
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import StoreData from '../../products/data';
import AuthorFilter from './authorFilter';
import './Filter.css';
import PriceFilter from './priceFilter';

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
  value1: Array<number>;
  setValue1: React.Dispatch<React.SetStateAction<Array<number>>>;
  min: number;
  max: number;
}
const Filter: React.FC<FilterProps> = ({
  setFiltered,
  value1,
  setValue1,
  min,
  max
}) => {
  if (stryMutAct_9fa48("728")) {
    {}
  } else {
    stryCov_9fa48("728");
    useEffect(() => {
      if (stryMutAct_9fa48("729")) {
        {}
      } else {
        stryCov_9fa48("729");
        setValue1(stryMutAct_9fa48("730") ? [] : (stryCov_9fa48("730"), [min, max]));
      }
    }, stryMutAct_9fa48("731") ? [] : (stryCov_9fa48("731"), [min, max, setValue1]));
    const [expanded, setExpanded] = useState<string | false>(stryMutAct_9fa48("732") ? "" : (stryCov_9fa48("732"), 'author'));
    const [searchTerm, setSearchTerm] = useState(stryMutAct_9fa48("733") ? "Stryker was here!" : (stryCov_9fa48("733"), ''));
    const [selectedBrands, setSelectedBrands] = useState<Array<string>>(stryMutAct_9fa48("734") ? ["Stryker was here"] : (stryCov_9fa48("734"), []));
    const handleChange = (panel: string) => {
      if (stryMutAct_9fa48("735")) {
        {}
      } else {
        stryCov_9fa48("735");
        // eslint-disable-next-line @typescript-eslint/naming-convention
        return (_event: React.SyntheticEvent, isExpanded: boolean) => {
          if (stryMutAct_9fa48("736")) {
            {}
          } else {
            stryCov_9fa48("736");
            setExpanded(isExpanded ? panel : stryMutAct_9fa48("737") ? true : (stryCov_9fa48("737"), false));
          }
        };
      }
    };
    const filteredBrands = stryMutAct_9fa48("738") ? StoreData : (stryCov_9fa48("738"), StoreData.filter(brand => {
      if (stryMutAct_9fa48("739")) {
        {}
      } else {
        stryCov_9fa48("739");
        return stryMutAct_9fa48("740") ? brand.productName.toUpperCase().includes(searchTerm.toLowerCase()) : (stryCov_9fa48("740"), brand.productName.toLowerCase().includes(stryMutAct_9fa48("741") ? searchTerm.toUpperCase() : (stryCov_9fa48("741"), searchTerm.toLowerCase())));
      }
    }));
    const handleBrandChange = (brandName: string): void => {
      if (stryMutAct_9fa48("742")) {
        {}
      } else {
        stryCov_9fa48("742");
        setSelectedBrands(prev => {
          if (stryMutAct_9fa48("743")) {
            {}
          } else {
            stryCov_9fa48("743");
            const newSelectedBrands = prev.includes(brandName) ? stryMutAct_9fa48("744") ? prev : (stryCov_9fa48("744"), prev.filter(brand => {
              if (stryMutAct_9fa48("745")) {
                {}
              } else {
                stryCov_9fa48("745");
                return stryMutAct_9fa48("748") ? brand === brandName : stryMutAct_9fa48("747") ? false : stryMutAct_9fa48("746") ? true : (stryCov_9fa48("746", "747", "748"), brand !== brandName);
              }
            })) : stryMutAct_9fa48("749") ? [] : (stryCov_9fa48("749"), [...prev, brandName]);
            if (stryMutAct_9fa48("752") ? newSelectedBrands.length !== 0 : stryMutAct_9fa48("751") ? false : stryMutAct_9fa48("750") ? true : (stryCov_9fa48("750", "751", "752"), newSelectedBrands.length === 0)) {
              if (stryMutAct_9fa48("753")) {
                {}
              } else {
                stryCov_9fa48("753");
                setFiltered(StoreData);
              }
            } else {
              if (stryMutAct_9fa48("754")) {
                {}
              } else {
                stryCov_9fa48("754");
                const filteredProducts = stryMutAct_9fa48("755") ? StoreData : (stryCov_9fa48("755"), StoreData.filter(product => {
                  if (stryMutAct_9fa48("756")) {
                    {}
                  } else {
                    stryCov_9fa48("756");
                    return newSelectedBrands.includes(product.productName);
                  }
                }));
                setFiltered(filteredProducts);
              }
            }
            return newSelectedBrands;
          }
        });
      }
    };
    return <div>
			<div className='filterSection'>
				<div className='filterCategories'></div>
				<div className='filterColors'></div>
				<div className='filterSizes'></div>
				<div className='filterBrands'>
					<Accordion expanded={stryMutAct_9fa48("759") ? expanded !== 'author' : stryMutAct_9fa48("758") ? false : stryMutAct_9fa48("757") ? true : (stryCov_9fa48("757", "758", "759"), expanded === (stryMutAct_9fa48("760") ? "" : (stryCov_9fa48("760"), 'author')))} onChange={handleChange(stryMutAct_9fa48("761") ? "" : (stryCov_9fa48("761"), 'author'))} disableGutters elevation={0}>
						<AccordionSummary expandIcon={<IoIosArrowDown size={20} />} aria-controls='panel1-content' id='panel1-header' sx={stryMutAct_9fa48("762") ? {} : (stryCov_9fa48("762"), {
              padding: 0,
              marginBottom: 2
            })}>
							<h5 className='filterHeading'>Author</h5>
						</AccordionSummary>
						<AccordionDetails sx={stryMutAct_9fa48("763") ? {} : (stryCov_9fa48("763"), {
              padding: 0
            })}>
							<AuthorFilter setFiltered={setFiltered} />
						</AccordionDetails>
					</Accordion>
					<Accordion expanded={stryMutAct_9fa48("766") ? expanded !== 'author' : stryMutAct_9fa48("765") ? false : stryMutAct_9fa48("764") ? true : (stryCov_9fa48("764", "765", "766"), expanded === (stryMutAct_9fa48("767") ? "" : (stryCov_9fa48("767"), 'author')))} onChange={handleChange(stryMutAct_9fa48("768") ? "" : (stryCov_9fa48("768"), 'author'))} disableGutters elevation={0}>
						<AccordionSummary expandIcon={<IoIosArrowDown size={20} />} aria-controls='panel1-content' id='panel1-header' sx={stryMutAct_9fa48("769") ? {} : (stryCov_9fa48("769"), {
              padding: 0,
              marginBottom: 2
            })}>
							<h5 className='filterHeading'>Book name</h5>
						</AccordionSummary>
						<AccordionDetails sx={stryMutAct_9fa48("770") ? {} : (stryCov_9fa48("770"), {
              padding: 0
            })}>
							<div className='searchBar'>
								<BiSearch className='searchIcon' size={20} color={stryMutAct_9fa48("771") ? "" : (stryCov_9fa48("771"), '#767676')} />
								<input type='text' placeholder='Search' value={searchTerm} onChange={(e): void => {
                  if (stryMutAct_9fa48("772")) {
                    {}
                  } else {
                    stryCov_9fa48("772");
                    setSearchTerm(e.target.value);
                  }
                }} />
							</div>
							<div className='brandList'>
								{(stryMutAct_9fa48("776") ? filteredBrands.length <= 0 : stryMutAct_9fa48("775") ? filteredBrands.length >= 0 : stryMutAct_9fa48("774") ? false : stryMutAct_9fa48("773") ? true : (stryCov_9fa48("773", "774", "775", "776"), filteredBrands.length > 0)) ? filteredBrands.map(brand => {
                  if (stryMutAct_9fa48("777")) {
                    {}
                  } else {
                    stryCov_9fa48("777");
                    return <div className='brandItem' key={brand.productID}>
													<input type='checkbox' checked={selectedBrands.includes(brand.productName)} onChange={(): void => {
                        if (stryMutAct_9fa48("778")) {
                          {}
                        } else {
                          stryCov_9fa48("778");
                          handleBrandChange(brand.productName);
                        }
                      }} id={stryMutAct_9fa48("779") ? `` : (stryCov_9fa48("779"), `brand-${brand.productID}`)} className='brandRadio' />
													<label htmlFor={stryMutAct_9fa48("780") ? `` : (stryCov_9fa48("780"), `brand-${brand.productID}`)} className='brandLabel'>
														{brand.productName}
													</label>

													<span className='brandCount'>{stryMutAct_9fa48("783") ? brand.count && 0 : stryMutAct_9fa48("782") ? false : stryMutAct_9fa48("781") ? true : (stryCov_9fa48("781", "782", "783"), brand.count || 0)}</span>
												</div>;
                  }
                }) : <div className='notFoundMessage'>Not found</div>}
							</div>
						</AccordionDetails>
					</Accordion>
				</div>
				<div className='filterPrice'>
					<Accordion defaultExpanded disableGutters elevation={0}>
						<AccordionSummary expandIcon={<IoIosArrowDown size={20} />} aria-controls='panel1-content' id='panel1-header' sx={stryMutAct_9fa48("784") ? {} : (stryCov_9fa48("784"), {
              padding: 0,
              marginBottom: 2
            })}>
							<h5 className='filterHeading'>Price</h5>
						</AccordionSummary>
						<AccordionDetails sx={stryMutAct_9fa48("785") ? {} : (stryCov_9fa48("785"), {
              padding: 0
            })}>
							<PriceFilter setValue1={setValue1} value1={value1} min={min} max={max} />
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</div>;
  }
};
export default Filter;