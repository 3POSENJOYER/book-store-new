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
import React, { useEffect, useState } from 'react';
import './ShopDetails.css';
import { FaCartPlus, FaStar } from 'react-icons/fa';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { FiHeart } from 'react-icons/fi';
import { IoClose, IoFilterSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface Product {
  productID: number;
  productName: string;
  produtDescription: string;
  frontImg?: string;
  backImg?: string;
  productPrice: number;
  productReviews: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ShopDetailsProps {
  filtered: Array<Product>;
  value1: [number, number];
}
const ShopDetails: React.FC<ShopDetailsProps> = ({
  filtered,
  value1
}) => {
  if (stryMutAct_9fa48("822")) {
    {}
  } else {
    stryCov_9fa48("822");
    const [isLoading, setIsLoading] = useState(stryMutAct_9fa48("823") ? true : (stryCov_9fa48("823"), false));
    const [isDrawerOpen, setIsDrawerOpen] = useState(stryMutAct_9fa48("824") ? true : (stryCov_9fa48("824"), false));
    const [selectSort, setSelectSort] = useState(stryMutAct_9fa48("825") ? "" : (stryCov_9fa48("825"), 'default'));
    const [products, setProducts] = useState<Array<Product>>(filtered);
    useEffect(() => {
      if (stryMutAct_9fa48("826")) {
        {}
      } else {
        stryCov_9fa48("826");
        const handler = setTimeout(() => {
          if (stryMutAct_9fa48("827")) {
            {}
          } else {
            stryCov_9fa48("827");
            setIsLoading(stryMutAct_9fa48("828") ? false : (stryCov_9fa48("828"), true));
            const sorted = stryMutAct_9fa48("829") ? filtered : (stryCov_9fa48("829"), filtered.filter(el => {
              if (stryMutAct_9fa48("830")) {
                {}
              } else {
                stryCov_9fa48("830");
                return stryMutAct_9fa48("833") ? el.productPrice >= value1[0] || el.productPrice <= value1[1] : stryMutAct_9fa48("832") ? false : stryMutAct_9fa48("831") ? true : (stryCov_9fa48("831", "832", "833"), (stryMutAct_9fa48("836") ? el.productPrice < value1[0] : stryMutAct_9fa48("835") ? el.productPrice > value1[0] : stryMutAct_9fa48("834") ? true : (stryCov_9fa48("834", "835", "836"), el.productPrice >= value1[0])) && (stryMutAct_9fa48("839") ? el.productPrice > value1[1] : stryMutAct_9fa48("838") ? el.productPrice < value1[1] : stryMutAct_9fa48("837") ? true : (stryCov_9fa48("837", "838", "839"), el.productPrice <= value1[1])));
              }
            }));
            setIsLoading(stryMutAct_9fa48("840") ? true : (stryCov_9fa48("840"), false));
            setProducts(sorted);
          }
        }, 300);
        return () => {
          if (stryMutAct_9fa48("841")) {
            {}
          } else {
            stryCov_9fa48("841");
            clearTimeout(handler);
          }
        };
      }
    }, stryMutAct_9fa48("842") ? [] : (stryCov_9fa48("842"), [value1, filtered]));
    useEffect(() => {
      if (stryMutAct_9fa48("843")) {
        {}
      } else {
        stryCov_9fa48("843");
        const sorted = stryMutAct_9fa48("844") ? [] : (stryCov_9fa48("844"), [...filtered]);
        if (stryMutAct_9fa48("847") ? selectSort !== 'lowToHigh' : stryMutAct_9fa48("846") ? false : stryMutAct_9fa48("845") ? true : (stryCov_9fa48("845", "846", "847"), selectSort === (stryMutAct_9fa48("848") ? "" : (stryCov_9fa48("848"), 'lowToHigh')))) {
          if (stryMutAct_9fa48("849")) {
            {}
          } else {
            stryCov_9fa48("849");
            stryMutAct_9fa48("850") ? sorted : (stryCov_9fa48("850"), sorted.sort((a, b) => {
              if (stryMutAct_9fa48("851")) {
                {}
              } else {
                stryCov_9fa48("851");
                return stryMutAct_9fa48("852") ? a.productPrice + b.productPrice : (stryCov_9fa48("852"), a.productPrice - b.productPrice);
              }
            }));
          }
        }
        if (stryMutAct_9fa48("855") ? selectSort !== 'highToLow' : stryMutAct_9fa48("854") ? false : stryMutAct_9fa48("853") ? true : (stryCov_9fa48("853", "854", "855"), selectSort === (stryMutAct_9fa48("856") ? "" : (stryCov_9fa48("856"), 'highToLow')))) {
          if (stryMutAct_9fa48("857")) {
            {}
          } else {
            stryCov_9fa48("857");
            stryMutAct_9fa48("858") ? sorted : (stryCov_9fa48("858"), sorted.sort((a, b) => {
              if (stryMutAct_9fa48("859")) {
                {}
              } else {
                stryCov_9fa48("859");
                return stryMutAct_9fa48("860") ? b.productPrice + a.productPrice : (stryCov_9fa48("860"), b.productPrice - a.productPrice);
              }
            }));
          }
        }
        if (stryMutAct_9fa48("863") ? selectSort !== 'a-z' : stryMutAct_9fa48("862") ? false : stryMutAct_9fa48("861") ? true : (stryCov_9fa48("861", "862", "863"), selectSort === (stryMutAct_9fa48("864") ? "" : (stryCov_9fa48("864"), 'a-z')))) {
          if (stryMutAct_9fa48("865")) {
            {}
          } else {
            stryCov_9fa48("865");
            stryMutAct_9fa48("866") ? sorted : (stryCov_9fa48("866"), sorted.sort((a, b) => {
              if (stryMutAct_9fa48("867")) {
                {}
              } else {
                stryCov_9fa48("867");
                return a.productName.localeCompare(b.productName);
              }
            }));
          }
        }
        if (stryMutAct_9fa48("870") ? selectSort !== 'z-a' : stryMutAct_9fa48("869") ? false : stryMutAct_9fa48("868") ? true : (stryCov_9fa48("868", "869", "870"), selectSort === (stryMutAct_9fa48("871") ? "" : (stryCov_9fa48("871"), 'z-a')))) {
          if (stryMutAct_9fa48("872")) {
            {}
          } else {
            stryCov_9fa48("872");
            stryMutAct_9fa48("873") ? sorted : (stryCov_9fa48("873"), sorted.sort((a, b) => {
              if (stryMutAct_9fa48("874")) {
                {}
              } else {
                stryCov_9fa48("874");
                return b.productName.localeCompare(a.productName);
              }
            }));
          }
        }
        setProducts(sorted);
      }
    }, stryMutAct_9fa48("875") ? [] : (stryCov_9fa48("875"), [selectSort, filtered]));
    const scrollToTop = (): void => {
      if (stryMutAct_9fa48("876")) {
        {}
      } else {
        stryCov_9fa48("876");
        window.scrollTo(stryMutAct_9fa48("877") ? {} : (stryCov_9fa48("877"), {
          top: 0,
          behavior: stryMutAct_9fa48("878") ? "" : (stryCov_9fa48("878"), 'smooth')
        }));
      }
    };
    const toggleDrawer = (): void => {
      if (stryMutAct_9fa48("879")) {
        {}
      } else {
        stryCov_9fa48("879");
        setIsDrawerOpen(stryMutAct_9fa48("880") ? isDrawerOpen : (stryCov_9fa48("880"), !isDrawerOpen));
      }
    };
    const closeDrawer = (): void => {
      if (stryMutAct_9fa48("881")) {
        {}
      } else {
        stryCov_9fa48("881");
        setIsDrawerOpen(stryMutAct_9fa48("882") ? true : (stryCov_9fa48("882"), false));
      }
    };
    return <>
			<div className='shopDetails'>
				<div className='shopDetailMain'>
					<div className='shopDetails__left'></div>
					<div className='shopDetails__right'>
						<div className='shopDetailsSorting'>
							<div className='shopDetailsBreadcrumbLink'>
								<Link to='/' onClick={scrollToTop}>
									Home
								</Link>
								&nbsp;/&nbsp;
								<Link to='/shop'>The Shop</Link>
							</div>
							<div className='filterLeft' onClick={toggleDrawer}>
								<IoFilterSharp />
								<p>Filter</p>
							</div>
							<div className='shopDetailsSort'>
								<select onChange={(e): void => {
                  if (stryMutAct_9fa48("883")) {
                    {}
                  } else {
                    stryCov_9fa48("883");
                    setSelectSort(e.target.value);
                  }
                }} name='sort' id='sort' value={selectSort}>
									<option value='default'>Default Sorting</option>
									<option value='a-z'>Alphabetically, A-Z</option>
									<option value='z-a'>Alphabetically, Z-A</option>
									<option value='lowToHigh'>Price, Low to high</option>
									<option value='highToLow'>Price, high to low</option>
								</select>
								<div className='filterRight' onClick={toggleDrawer}>
									<div className='filterSeprator'></div>
									<IoFilterSharp />
									<p>Filter</p>
								</div>
							</div>
						</div>
						<div className='shopDetailsProducts'>
							<div className='shopDetailsProductsContainer'>
								{isLoading ? <div>loading </div> : stryMutAct_9fa48("884") ? products.map((product: Product) => {
                  return <div key={product.productID} className='sdProductContainer'>
												<div className='sdProductImages'>
													<Link to={`/product/${product.productID}`} onClick={scrollToTop}>
														<img src={product.frontImg} alt='' className='sdProduct_front' />
														<img src={product.backImg} alt='' className='sdProduct_back' />
													</Link>
													<h4>Add to Cart</h4>
												</div>
												<div className='sdProductImagesCart'>
													<FaCartPlus />
												</div>
												<div className='sdProductInfo'>
													<div className='sdProductCategoryWishlist'>
														<FiHeart />
													</div>
													<div className='sdProductNameInfo'>
														<Link to={`/product/${product.productID}`} onClick={scrollToTop}>
															<h5>{product.productName}</h5>
														</Link>

														<p>${product.productPrice}</p>
														<div className='sdProductRatingReviews'>
															<div className='sdProductRatingStar'>
																<FaStar color='#FEC78A' size={10} />
																<FaStar color='#FEC78A' size={10} />
																<FaStar color='#FEC78A' size={10} />
																<FaStar color='#FEC78A' size={10} />
																<FaStar color='#FEC78A' size={10} />
															</div>
															<span>{product.productReviews}</span>
														</div>
													</div>
												</div>
											</div>;
                }) : (stryCov_9fa48("884"), products.slice(0, 12).map((product: Product) => {
                  if (stryMutAct_9fa48("885")) {
                    {}
                  } else {
                    stryCov_9fa48("885");
                    return <div key={product.productID} className='sdProductContainer'>
												<div className='sdProductImages'>
													<Link to={stryMutAct_9fa48("886") ? `` : (stryCov_9fa48("886"), `/product/${product.productID}`)} onClick={scrollToTop}>
														<img src={product.frontImg} alt='' className='sdProduct_front' />
														<img src={product.backImg} alt='' className='sdProduct_back' />
													</Link>
													<h4>Add to Cart</h4>
												</div>
												<div className='sdProductImagesCart'>
													<FaCartPlus />
												</div>
												<div className='sdProductInfo'>
													<div className='sdProductCategoryWishlist'>
														<FiHeart />
													</div>
													<div className='sdProductNameInfo'>
														<Link to={stryMutAct_9fa48("887") ? `` : (stryCov_9fa48("887"), `/product/${product.productID}`)} onClick={scrollToTop}>
															<h5>{product.productName}</h5>
														</Link>

														<p>${product.productPrice}</p>
														<div className='sdProductRatingReviews'>
															<div className='sdProductRatingStar'>
																<FaStar color='#FEC78A' size={10} />
																<FaStar color='#FEC78A' size={10} />
																<FaStar color='#FEC78A' size={10} />
																<FaStar color='#FEC78A' size={10} />
																<FaStar color='#FEC78A' size={10} />
															</div>
															<span>{product.productReviews}</span>
														</div>
													</div>
												</div>
											</div>;
                  }
                }))}
							</div>
						</div>
						<div className='shopDetailsPagination'>
							<div className='sdPaginationPrev'>
								<p onClick={scrollToTop}>
									<FaAngleLeft />
									Prev
								</p>
							</div>
							<div className='sdPaginationNumber'>
								<div className='paginationNum'>
									<p onClick={scrollToTop}>1</p>
									<p onClick={scrollToTop}>2</p>
									<p onClick={scrollToTop}>3</p>
									<p onClick={scrollToTop}>4</p>
								</div>
							</div>
							<div className='sdPaginationNext'>
								<p onClick={scrollToTop}>
									Next
									<FaAngleRight />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={stryMutAct_9fa48("888") ? `` : (stryCov_9fa48("888"), `filterDrawer ${isDrawerOpen ? stryMutAct_9fa48("889") ? "" : (stryCov_9fa48("889"), 'open') : stryMutAct_9fa48("890") ? "Stryker was here!" : (stryCov_9fa48("890"), '')}`)}>
				<div className='drawerHeader'>
					<p>Filter By</p>
					<IoClose onClick={closeDrawer} className='closeButton' size={26} />
				</div>
				<div className='drawerContent'></div>
			</div>
		</>;
  }
};
export default ShopDetails;