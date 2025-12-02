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
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import { PiShareNetworkLight } from 'react-icons/pi';
import './product-detalis.css';

// Визначення інтерфейсу Product (повинно збігатися з ProductDto на бекенді)
interface IProduct {
  productID: number;
  productName: string;
  produtDescription: string;
  frontImg?: string;
  backImg?: string;
  productPrice: number;
  productReviews: string;
}
const API_BASE_URL = stryMutAct_9fa48("586") ? "" : (stryCov_9fa48("586"), 'http://localhost:3000');
export const ProductDeatlis: React.FC = () => {
  if (stryMutAct_9fa48("587")) {
    {}
  } else {
    stryCov_9fa48("587");
    const [quantity, setQuantity] = useState(1);
    // Стан для зберігання даних продукту, завантажених з API
    const [detail, setDetail] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(stryMutAct_9fa48("588") ? false : (stryCov_9fa48("588"), true));
    const {
      id
    } = useParams<{
      id: string;
    }>();

    // --- 1. ФУНКЦІЯ ЗАВАНТАЖЕННЯ ДЕТАЛЕЙ ПРОДУКТУ З API ---
    useEffect(() => {
      if (stryMutAct_9fa48("589")) {
        {}
      } else {
        stryCov_9fa48("589");
        if (stryMutAct_9fa48("592") ? false : stryMutAct_9fa48("591") ? true : stryMutAct_9fa48("590") ? id : (stryCov_9fa48("590", "591", "592"), !id)) {
          if (stryMutAct_9fa48("593")) {
            {}
          } else {
            stryCov_9fa48("593");
            return;
          }
        }
        const fetchProductDetail = async (): Promise<void> => {
          if (stryMutAct_9fa48("594")) {
            {}
          } else {
            stryCov_9fa48("594");
            setLoading(stryMutAct_9fa48("595") ? false : (stryCov_9fa48("595"), true));
            try {
              if (stryMutAct_9fa48("596")) {
                {}
              } else {
                stryCov_9fa48("596");
                // Використовуємо GET /products/:id маршрут на NestJS
                const res = await fetch(stryMutAct_9fa48("597") ? `` : (stryCov_9fa48("597"), `${API_BASE_URL}/products/${id}`));
                if (stryMutAct_9fa48("600") ? res.status !== 404 : stryMutAct_9fa48("599") ? false : stryMutAct_9fa48("598") ? true : (stryCov_9fa48("598", "599", "600"), res.status === 404)) {
                  if (stryMutAct_9fa48("601")) {
                    {}
                  } else {
                    stryCov_9fa48("601");
                    setDetail(null);
                    setLoading(stryMutAct_9fa48("602") ? true : (stryCov_9fa48("602"), false));
                    return;
                  }
                }
                if (stryMutAct_9fa48("605") ? false : stryMutAct_9fa48("604") ? true : stryMutAct_9fa48("603") ? res.ok : (stryCov_9fa48("603", "604", "605"), !res.ok)) {
                  if (stryMutAct_9fa48("606")) {
                    {}
                  } else {
                    stryCov_9fa48("606");
                    throw new Error(stryMutAct_9fa48("607") ? `` : (stryCov_9fa48("607"), `HTTP error! status: ${res.status}`));
                  }
                }
                const data: IProduct = await res.json();
                setDetail(data);
              }
            } catch (err) {
              if (stryMutAct_9fa48("608")) {
                {}
              } else {
                stryCov_9fa48("608");
                console.error(stryMutAct_9fa48("609") ? "" : (stryCov_9fa48("609"), 'Failed to fetch product details:'), err);
                setDetail(null);
              }
            } finally {
              if (stryMutAct_9fa48("610")) {
                {}
              } else {
                stryCov_9fa48("610");
                setLoading(stryMutAct_9fa48("611") ? true : (stryCov_9fa48("611"), false));
              }
            }
          }
        };
        fetchProductDetail();
      }
    }, stryMutAct_9fa48("612") ? [] : (stryCov_9fa48("612"), [id]));
    // ----------------------------------------------------------------------

    const increment = (): void => {
      if (stryMutAct_9fa48("613")) {
        {}
      } else {
        stryCov_9fa48("613");
        setQuantity(stryMutAct_9fa48("614") ? quantity - 1 : (stryCov_9fa48("614"), quantity + 1));
      }
    };
    const decrement = (): void => {
      if (stryMutAct_9fa48("615")) {
        {}
      } else {
        stryCov_9fa48("615");
        if (stryMutAct_9fa48("619") ? quantity <= 1 : stryMutAct_9fa48("618") ? quantity >= 1 : stryMutAct_9fa48("617") ? false : stryMutAct_9fa48("616") ? true : (stryCov_9fa48("616", "617", "618", "619"), quantity > 1)) {
          if (stryMutAct_9fa48("620")) {
            {}
          } else {
            stryCov_9fa48("620");
            setQuantity(stryMutAct_9fa48("621") ? quantity + 1 : (stryCov_9fa48("621"), quantity - 1));
          }
        }
      }
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (stryMutAct_9fa48("622")) {
        {}
      } else {
        stryCov_9fa48("622");
        const value = parseInt(event.target.value);
        if (stryMutAct_9fa48("625") ? !isNaN(value) || value > 0 : stryMutAct_9fa48("624") ? false : stryMutAct_9fa48("623") ? true : (stryCov_9fa48("623", "624", "625"), (stryMutAct_9fa48("626") ? isNaN(value) : (stryCov_9fa48("626"), !isNaN(value))) && (stryMutAct_9fa48("629") ? value <= 0 : stryMutAct_9fa48("628") ? value >= 0 : stryMutAct_9fa48("627") ? true : (stryCov_9fa48("627", "628", "629"), value > 0)))) {
          if (stryMutAct_9fa48("630")) {
            {}
          } else {
            stryCov_9fa48("630");
            setQuantity(value);
          }
        }
      }
    };
    const [clicked, setClicked] = useState(stryMutAct_9fa48("631") ? true : (stryCov_9fa48("631"), false));

    // --- Стан завантаження та Не знайдено ---
    if (stryMutAct_9fa48("633") ? false : stryMutAct_9fa48("632") ? true : (stryCov_9fa48("632", "633"), loading)) {
      if (stryMutAct_9fa48("634")) {
        {}
      } else {
        stryCov_9fa48("634");
        return <h2>Loading product details...</h2>;
      }
    }
    if (stryMutAct_9fa48("637") ? false : stryMutAct_9fa48("636") ? true : stryMutAct_9fa48("635") ? detail : (stryCov_9fa48("635", "636", "637"), !detail)) {
      if (stryMutAct_9fa48("638")) {
        {}
      } else {
        stryCov_9fa48("638");
        return <h2>Product with ID {id} not found</h2>;
      }
    }
    // ------------------------------------------

    const currentId = detail.productID;
    const nextId = stryMutAct_9fa48("639") ? currentId - 1 : (stryCov_9fa48("639"), currentId + 1);
    const prevId = stryMutAct_9fa48("640") ? currentId + 1 : (stryCov_9fa48("640"), currentId - 1);
    return <>
			<div className='productSection'>
				<div className='productShowCase'>
					<div className='productGallery'>
						<div className='productThumb'>
							<img src={detail.frontImg} alt={detail.productName} />
						</div>
					</div>
					<div className='productDetails'>
						<div className='productBreadcrumb'>
							<div className='breadcrumbLink'>
								<Link to='/'>Home</Link>&nbsp;/&nbsp;
								<Link to='/shop'>The Shop</Link>
							</div>
							<div className='prevNextLink'>
								{/* Використовуємо припущення, що ID є послідовними (тимчасово) */}
								<Link to={stryMutAct_9fa48("641") ? `` : (stryCov_9fa48("641"), `/product/${prevId}`)}>
									<GoChevronLeft />
									<p>Prev</p>
								</Link>

								<Link to={stryMutAct_9fa48("642") ? `` : (stryCov_9fa48("642"), `/product/${nextId}`)}>
									<p>Next</p>
									<GoChevronRight />
								</Link>
							</div>
						</div>
						<div className='productName'>
							<h1>{detail.productName}</h1>
						</div>
						{/* ... (інші деталі продукту, як і раніше) ... */}

						<div className='productDescription'>
							<p>
								{detail.produtDescription}
							</p>
						</div>

						{/* ... (інші секції) ... */}

						<div className='productCartQuantity'>
							<div className='productQuantity'>
								<button onClick={decrement}>-</button>
								<input type='text' value={quantity} onChange={handleInputChange} />
								<button onClick={increment}>+</button>
							</div>
							<div className='productCartBtn'>
								<button>Add to Cart</button>
							</div>
						</div>

						{/* ... (решта розмітки) ... */}
					</div>
				</div>
			</div>
		</>;
  }
};
export default ProductDeatlis;