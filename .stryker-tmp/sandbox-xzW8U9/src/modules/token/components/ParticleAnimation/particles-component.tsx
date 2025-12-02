/* eslint-disable */
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
import React, { useRef, useEffect } from 'react';
import useMousePosition from './useMousePosition';
interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
}
export default function Particles({
  className = stryMutAct_9fa48("284") ? "Stryker was here!" : (stryCov_9fa48("284"), ''),
  quantity = 100,
  staticity = 15,
  ease = 50
}: ParticlesProps) {
  if (stryMutAct_9fa48("285")) {
    {}
  } else {
    stryCov_9fa48("285");
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null);
    const circles = useRef<Array<any>>(stryMutAct_9fa48("286") ? ["Stryker was here"] : (stryCov_9fa48("286"), []));
    const mousePosition = useMousePosition();
    const mouse = useRef<{
      x: number;
      y: number;
    }>(stryMutAct_9fa48("287") ? {} : (stryCov_9fa48("287"), {
      x: 0,
      y: 0
    }));
    const canvasSize = useRef<{
      w: number;
      h: number;
    }>(stryMutAct_9fa48("288") ? {} : (stryCov_9fa48("288"), {
      w: 0,
      h: 0
    }));
    const dpr = (stryMutAct_9fa48("291") ? typeof window === 'undefined' : stryMutAct_9fa48("290") ? false : stryMutAct_9fa48("289") ? true : (stryCov_9fa48("289", "290", "291"), typeof window !== (stryMutAct_9fa48("292") ? "" : (stryCov_9fa48("292"), 'undefined')))) ? window.devicePixelRatio : 1;
    useEffect(() => {
      if (stryMutAct_9fa48("293")) {
        {}
      } else {
        stryCov_9fa48("293");
        if (stryMutAct_9fa48("295") ? false : stryMutAct_9fa48("294") ? true : (stryCov_9fa48("294", "295"), canvasRef.current)) {
          if (stryMutAct_9fa48("296")) {
            {}
          } else {
            stryCov_9fa48("296");
            context.current = canvasRef.current.getContext(stryMutAct_9fa48("297") ? "" : (stryCov_9fa48("297"), '2d'));
          }
        }
        initCanvas();
        animate();
        window.addEventListener(stryMutAct_9fa48("298") ? "" : (stryCov_9fa48("298"), 'resize'), initCanvas);
        return () => {
          if (stryMutAct_9fa48("299")) {
            {}
          } else {
            stryCov_9fa48("299");
            window.removeEventListener(stryMutAct_9fa48("300") ? "" : (stryCov_9fa48("300"), 'resize'), initCanvas);
          }
        };
      }
    }, stryMutAct_9fa48("301") ? ["Stryker was here"] : (stryCov_9fa48("301"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("302")) {
        {}
      } else {
        stryCov_9fa48("302");
        onMouseMove();
      }
    }, stryMutAct_9fa48("303") ? [] : (stryCov_9fa48("303"), [mousePosition.x, mousePosition.y]));
    const initCanvas = () => {
      if (stryMutAct_9fa48("304")) {
        {}
      } else {
        stryCov_9fa48("304");
        resizeCanvas();
        drawParticles();
      }
    };
    const onMouseMove = () => {
      if (stryMutAct_9fa48("305")) {
        {}
      } else {
        stryCov_9fa48("305");
        if (stryMutAct_9fa48("307") ? false : stryMutAct_9fa48("306") ? true : (stryCov_9fa48("306", "307"), canvasRef.current)) {
          if (stryMutAct_9fa48("308")) {
            {}
          } else {
            stryCov_9fa48("308");
            const rect = canvasRef.current.getBoundingClientRect();
            const {
              w,
              h
            } = canvasSize.current;
            const x = stryMutAct_9fa48("309") ? mousePosition.x - rect.left + w / 2 : (stryCov_9fa48("309"), (stryMutAct_9fa48("310") ? mousePosition.x + rect.left : (stryCov_9fa48("310"), mousePosition.x - rect.left)) - (stryMutAct_9fa48("311") ? w * 2 : (stryCov_9fa48("311"), w / 2)));
            const y = stryMutAct_9fa48("312") ? mousePosition.y - rect.top + h / 2 : (stryCov_9fa48("312"), (stryMutAct_9fa48("313") ? mousePosition.y + rect.top : (stryCov_9fa48("313"), mousePosition.y - rect.top)) - (stryMutAct_9fa48("314") ? h * 2 : (stryCov_9fa48("314"), h / 2)));
            const inside = stryMutAct_9fa48("317") ? x < w / 2 && x > -w / 2 && y < h / 2 || y > -h / 2 : stryMutAct_9fa48("316") ? false : stryMutAct_9fa48("315") ? true : (stryCov_9fa48("315", "316", "317"), (stryMutAct_9fa48("319") ? x < w / 2 && x > -w / 2 || y < h / 2 : stryMutAct_9fa48("318") ? true : (stryCov_9fa48("318", "319"), (stryMutAct_9fa48("321") ? x < w / 2 || x > -w / 2 : stryMutAct_9fa48("320") ? true : (stryCov_9fa48("320", "321"), (stryMutAct_9fa48("324") ? x >= w / 2 : stryMutAct_9fa48("323") ? x <= w / 2 : stryMutAct_9fa48("322") ? true : (stryCov_9fa48("322", "323", "324"), x < (stryMutAct_9fa48("325") ? w * 2 : (stryCov_9fa48("325"), w / 2)))) && (stryMutAct_9fa48("328") ? x <= -w / 2 : stryMutAct_9fa48("327") ? x >= -w / 2 : stryMutAct_9fa48("326") ? true : (stryCov_9fa48("326", "327", "328"), x > (stryMutAct_9fa48("329") ? -w * 2 : (stryCov_9fa48("329"), (stryMutAct_9fa48("330") ? +w : (stryCov_9fa48("330"), -w)) / 2)))))) && (stryMutAct_9fa48("333") ? y >= h / 2 : stryMutAct_9fa48("332") ? y <= h / 2 : stryMutAct_9fa48("331") ? true : (stryCov_9fa48("331", "332", "333"), y < (stryMutAct_9fa48("334") ? h * 2 : (stryCov_9fa48("334"), h / 2)))))) && (stryMutAct_9fa48("337") ? y <= -h / 2 : stryMutAct_9fa48("336") ? y >= -h / 2 : stryMutAct_9fa48("335") ? true : (stryCov_9fa48("335", "336", "337"), y > (stryMutAct_9fa48("338") ? -h * 2 : (stryCov_9fa48("338"), (stryMutAct_9fa48("339") ? +h : (stryCov_9fa48("339"), -h)) / 2)))));
            if (stryMutAct_9fa48("341") ? false : stryMutAct_9fa48("340") ? true : (stryCov_9fa48("340", "341"), inside)) {
              if (stryMutAct_9fa48("342")) {
                {}
              } else {
                stryCov_9fa48("342");
                mouse.current.x = x;
                mouse.current.y = y;
              }
            }
          }
        }
      }
    };
    const resizeCanvas = () => {
      if (stryMutAct_9fa48("343")) {
        {}
      } else {
        stryCov_9fa48("343");
        if (stryMutAct_9fa48("346") ? canvasContainerRef.current && canvasRef.current || context.current : stryMutAct_9fa48("345") ? false : stryMutAct_9fa48("344") ? true : (stryCov_9fa48("344", "345", "346"), (stryMutAct_9fa48("348") ? canvasContainerRef.current || canvasRef.current : stryMutAct_9fa48("347") ? true : (stryCov_9fa48("347", "348"), canvasContainerRef.current && canvasRef.current)) && context.current)) {
          if (stryMutAct_9fa48("349")) {
            {}
          } else {
            stryCov_9fa48("349");
            circles.current.length = 0;
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = stryMutAct_9fa48("350") ? window.innerHeight / 3 : (stryCov_9fa48("350"), window.innerHeight * 3);
            canvasRef.current.width = stryMutAct_9fa48("351") ? canvasSize.current.w / dpr : (stryCov_9fa48("351"), canvasSize.current.w * dpr);
            canvasRef.current.height = stryMutAct_9fa48("352") ? canvasSize.current.h / dpr : (stryCov_9fa48("352"), canvasSize.current.h * dpr);
            canvasRef.current.style.width = stryMutAct_9fa48("353") ? `` : (stryCov_9fa48("353"), `${canvasSize.current.w}px`);
            canvasRef.current.style.height = stryMutAct_9fa48("354") ? `` : (stryCov_9fa48("354"), `${canvasSize.current.h}px`);
            context.current.scale(dpr, dpr);
          }
        }
      }
    };
    type Circle = {
      x: number;
      y: number;
      translateX: number;
      translateY: number;
      size: number;
      alpha: number;
      targetAlpha: number;
      dx: number;
      dy: number;
      magnetism: number;
    };
    const circleParams = (): Circle => {
      if (stryMutAct_9fa48("355")) {
        {}
      } else {
        stryCov_9fa48("355");
        const x = Math.floor(stryMutAct_9fa48("356") ? Math.random() / canvasSize.current.w : (stryCov_9fa48("356"), Math.random() * canvasSize.current.w));
        const y = Math.floor(stryMutAct_9fa48("357") ? Math.random() / canvasSize.current.h : (stryCov_9fa48("357"), Math.random() * canvasSize.current.h));
        const translateX = 0;
        const translateY = 0;
        const size = stryMutAct_9fa48("358") ? Math.floor(Math.random() * 2) - 1 : (stryCov_9fa48("358"), Math.floor(stryMutAct_9fa48("359") ? Math.random() / 2 : (stryCov_9fa48("359"), Math.random() * 2)) + 1);
        const alpha = 0;
        const targetAlpha = parseFloat((stryMutAct_9fa48("360") ? Math.random() * 0.6 - 0.1 : (stryCov_9fa48("360"), (stryMutAct_9fa48("361") ? Math.random() / 0.6 : (stryCov_9fa48("361"), Math.random() * 0.6)) + 0.1)).toFixed(1));
        const dx = stryMutAct_9fa48("362") ? (Math.random() - 0.5) / 0.2 : (stryCov_9fa48("362"), (stryMutAct_9fa48("363") ? Math.random() + 0.5 : (stryCov_9fa48("363"), Math.random() - 0.5)) * 0.2);
        const dy = stryMutAct_9fa48("364") ? (Math.random() - 0.5) / 0.2 : (stryCov_9fa48("364"), (stryMutAct_9fa48("365") ? Math.random() + 0.5 : (stryCov_9fa48("365"), Math.random() - 0.5)) * 0.2);
        const magnetism = stryMutAct_9fa48("366") ? 0.1 - Math.random() * 4 : (stryCov_9fa48("366"), 0.1 + (stryMutAct_9fa48("367") ? Math.random() / 4 : (stryCov_9fa48("367"), Math.random() * 4)));
        return stryMutAct_9fa48("368") ? {} : (stryCov_9fa48("368"), {
          x,
          y,
          translateX,
          translateY,
          size,
          alpha,
          targetAlpha,
          dx,
          dy,
          magnetism
        });
      }
    };
    const drawCircle = (circle: Circle, update = stryMutAct_9fa48("369") ? true : (stryCov_9fa48("369"), false)) => {
      if (stryMutAct_9fa48("370")) {
        {}
      } else {
        stryCov_9fa48("370");
        if (stryMutAct_9fa48("372") ? false : stryMutAct_9fa48("371") ? true : (stryCov_9fa48("371", "372"), context.current)) {
          if (stryMutAct_9fa48("373")) {
            {}
          } else {
            stryCov_9fa48("373");
            const {
              x,
              y,
              translateX,
              translateY,
              size,
              alpha
            } = circle;
            context.current.translate(translateX, translateY);
            context.current.beginPath();
            context.current.arc(x, y, size, 0, stryMutAct_9fa48("374") ? 2 / Math.PI : (stryCov_9fa48("374"), 2 * Math.PI));
            context.current.fillStyle = stryMutAct_9fa48("375") ? `` : (stryCov_9fa48("375"), `rgba(255, 255, 255, ${alpha})`);
            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (stryMutAct_9fa48("378") ? false : stryMutAct_9fa48("377") ? true : stryMutAct_9fa48("376") ? update : (stryCov_9fa48("376", "377", "378"), !update)) {
              if (stryMutAct_9fa48("379")) {
                {}
              } else {
                stryCov_9fa48("379");
                circles.current.push(circle);
              }
            }
          }
        }
      }
    };
    const clearContext = () => {
      if (stryMutAct_9fa48("380")) {
        {}
      } else {
        stryCov_9fa48("380");
        if (stryMutAct_9fa48("382") ? false : stryMutAct_9fa48("381") ? true : (stryCov_9fa48("381", "382"), context.current)) {
          if (stryMutAct_9fa48("383")) {
            {}
          } else {
            stryCov_9fa48("383");
            context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
          }
        }
      }
    };
    const drawParticles = () => {
      if (stryMutAct_9fa48("384")) {
        {}
      } else {
        stryCov_9fa48("384");
        clearContext();
        const particleCount = quantity;
        for (let i = 0; stryMutAct_9fa48("387") ? i >= particleCount : stryMutAct_9fa48("386") ? i <= particleCount : stryMutAct_9fa48("385") ? false : (stryCov_9fa48("385", "386", "387"), i < particleCount); stryMutAct_9fa48("388") ? i-- : (stryCov_9fa48("388"), i++)) {
          if (stryMutAct_9fa48("389")) {
            {}
          } else {
            stryCov_9fa48("389");
            const circle = circleParams();
            drawCircle(circle);
          }
        }
      }
    };
    const remapValue = (value: number, start1: number, end1: number, start2: number, end2: number): number => {
      if (stryMutAct_9fa48("390")) {
        {}
      } else {
        stryCov_9fa48("390");
        const remapped = stryMutAct_9fa48("391") ? (value - start1) * (end2 - start2) / (end1 - start1) - start2 : (stryCov_9fa48("391"), (stryMutAct_9fa48("392") ? (value - start1) * (end2 - start2) * (end1 - start1) : (stryCov_9fa48("392"), (stryMutAct_9fa48("393") ? (value - start1) / (end2 - start2) : (stryCov_9fa48("393"), (stryMutAct_9fa48("394") ? value + start1 : (stryCov_9fa48("394"), value - start1)) * (stryMutAct_9fa48("395") ? end2 + start2 : (stryCov_9fa48("395"), end2 - start2)))) / (stryMutAct_9fa48("396") ? end1 + start1 : (stryCov_9fa48("396"), end1 - start1)))) + start2);
        return (stryMutAct_9fa48("400") ? remapped <= 0 : stryMutAct_9fa48("399") ? remapped >= 0 : stryMutAct_9fa48("398") ? false : stryMutAct_9fa48("397") ? true : (stryCov_9fa48("397", "398", "399", "400"), remapped > 0)) ? remapped : 0;
      }
    };
    const animate = () => {
      if (stryMutAct_9fa48("401")) {
        {}
      } else {
        stryCov_9fa48("401");
        clearContext();
        circles.current.forEach((circle: Circle, i: number) => {
          if (stryMutAct_9fa48("402")) {
            {}
          } else {
            stryCov_9fa48("402");
            // Handle the alpha value
            const edge = stryMutAct_9fa48("403") ? [] : (stryCov_9fa48("403"), [stryMutAct_9fa48("404") ? circle.x + circle.translateX + circle.size : (stryCov_9fa48("404"), (stryMutAct_9fa48("405") ? circle.x - circle.translateX : (stryCov_9fa48("405"), circle.x + circle.translateX)) - circle.size), // distance from left edge
            stryMutAct_9fa48("406") ?
            // distance from left edge
            canvasSize.current.w - circle.x - circle.translateX + circle.size : (stryCov_9fa48("406"), (stryMutAct_9fa48("407") ? canvasSize.current.w - circle.x + circle.translateX : (stryCov_9fa48("407"), (stryMutAct_9fa48("408") ? canvasSize.current.w + circle.x : (stryCov_9fa48("408"), canvasSize.current.w - circle.x)) - circle.translateX)) - circle.size), // distance from right edge
            stryMutAct_9fa48("409") ?
            // distance from right edge
            circle.y + circle.translateY + circle.size : (stryCov_9fa48("409"), (stryMutAct_9fa48("410") ? circle.y - circle.translateY : (stryCov_9fa48("410"), circle.y + circle.translateY)) - circle.size), // distance from top edge
            stryMutAct_9fa48("411") ?
            // distance from top edge
            canvasSize.current.h - circle.y - circle.translateY + circle.size // distance from bottom edge
            : (stryCov_9fa48("411"), (stryMutAct_9fa48("412") ? canvasSize.current.h - circle.y + circle.translateY : (stryCov_9fa48("412"), (stryMutAct_9fa48("413") ? canvasSize.current.h + circle.y : (stryCov_9fa48("413"), canvasSize.current.h - circle.y)) - circle.translateY)) - circle.size) // distance from bottom edge
            ]);
            const closestEdge = edge.reduce((a, b) => {
              if (stryMutAct_9fa48("414")) {
                {}
              } else {
                stryCov_9fa48("414");
                return stryMutAct_9fa48("415") ? Math.max(a, b) : (stryCov_9fa48("415"), Math.min(a, b));
              }
            });
            const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
            if (stryMutAct_9fa48("419") ? remapClosestEdge <= 1 : stryMutAct_9fa48("418") ? remapClosestEdge >= 1 : stryMutAct_9fa48("417") ? false : stryMutAct_9fa48("416") ? true : (stryCov_9fa48("416", "417", "418", "419"), remapClosestEdge > 1)) {
              if (stryMutAct_9fa48("420")) {
                {}
              } else {
                stryCov_9fa48("420");
                circle.alpha = stryMutAct_9fa48("421") ? circle.alpha - 0.02 : (stryCov_9fa48("421"), circle.alpha + 0.02);
                if (stryMutAct_9fa48("425") ? circle.alpha <= circle.targetAlpha : stryMutAct_9fa48("424") ? circle.alpha >= circle.targetAlpha : stryMutAct_9fa48("423") ? false : stryMutAct_9fa48("422") ? true : (stryCov_9fa48("422", "423", "424", "425"), circle.alpha > circle.targetAlpha)) {
                  if (stryMutAct_9fa48("426")) {
                    {}
                  } else {
                    stryCov_9fa48("426");
                    circle.alpha = circle.targetAlpha;
                  }
                }
              }
            } else {
              if (stryMutAct_9fa48("427")) {
                {}
              } else {
                stryCov_9fa48("427");
                circle.alpha = stryMutAct_9fa48("428") ? circle.targetAlpha / remapClosestEdge : (stryCov_9fa48("428"), circle.targetAlpha * remapClosestEdge);
              }
            }
            circle.x = stryMutAct_9fa48("429") ? circle.x - circle.dx : (stryCov_9fa48("429"), circle.x + circle.dx);
            circle.y = stryMutAct_9fa48("430") ? circle.y - circle.dy : (stryCov_9fa48("430"), circle.y + circle.dy);
            circle.translateX = stryMutAct_9fa48("431") ? circle.translateX - (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease : (stryCov_9fa48("431"), circle.translateX + (stryMutAct_9fa48("432") ? (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) * ease : (stryCov_9fa48("432"), (stryMutAct_9fa48("433") ? mouse.current.x / (staticity / circle.magnetism) + circle.translateX : (stryCov_9fa48("433"), (stryMutAct_9fa48("434") ? mouse.current.x * (staticity / circle.magnetism) : (stryCov_9fa48("434"), mouse.current.x / (stryMutAct_9fa48("435") ? staticity * circle.magnetism : (stryCov_9fa48("435"), staticity / circle.magnetism)))) - circle.translateX)) / ease)));
            circle.translateY = stryMutAct_9fa48("436") ? circle.translateY - (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease : (stryCov_9fa48("436"), circle.translateY + (stryMutAct_9fa48("437") ? (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) * ease : (stryCov_9fa48("437"), (stryMutAct_9fa48("438") ? mouse.current.y / (staticity / circle.magnetism) + circle.translateY : (stryCov_9fa48("438"), (stryMutAct_9fa48("439") ? mouse.current.y * (staticity / circle.magnetism) : (stryCov_9fa48("439"), mouse.current.y / (stryMutAct_9fa48("440") ? staticity * circle.magnetism : (stryCov_9fa48("440"), staticity / circle.magnetism)))) - circle.translateY)) / ease)));
            // circle gets out of the canvas
            if (stryMutAct_9fa48("443") ? (circle.x < -circle.size || circle.x > canvasSize.current.w + circle.size || circle.y < -circle.size) && circle.y > canvasSize.current.h + circle.size : stryMutAct_9fa48("442") ? false : stryMutAct_9fa48("441") ? true : (stryCov_9fa48("441", "442", "443"), (stryMutAct_9fa48("445") ? (circle.x < -circle.size || circle.x > canvasSize.current.w + circle.size) && circle.y < -circle.size : stryMutAct_9fa48("444") ? false : (stryCov_9fa48("444", "445"), (stryMutAct_9fa48("447") ? circle.x < -circle.size && circle.x > canvasSize.current.w + circle.size : stryMutAct_9fa48("446") ? false : (stryCov_9fa48("446", "447"), (stryMutAct_9fa48("450") ? circle.x >= -circle.size : stryMutAct_9fa48("449") ? circle.x <= -circle.size : stryMutAct_9fa48("448") ? false : (stryCov_9fa48("448", "449", "450"), circle.x < (stryMutAct_9fa48("451") ? +circle.size : (stryCov_9fa48("451"), -circle.size)))) || (stryMutAct_9fa48("454") ? circle.x <= canvasSize.current.w + circle.size : stryMutAct_9fa48("453") ? circle.x >= canvasSize.current.w + circle.size : stryMutAct_9fa48("452") ? false : (stryCov_9fa48("452", "453", "454"), circle.x > (stryMutAct_9fa48("455") ? canvasSize.current.w - circle.size : (stryCov_9fa48("455"), canvasSize.current.w + circle.size)))))) || (stryMutAct_9fa48("458") ? circle.y >= -circle.size : stryMutAct_9fa48("457") ? circle.y <= -circle.size : stryMutAct_9fa48("456") ? false : (stryCov_9fa48("456", "457", "458"), circle.y < (stryMutAct_9fa48("459") ? +circle.size : (stryCov_9fa48("459"), -circle.size)))))) || (stryMutAct_9fa48("462") ? circle.y <= canvasSize.current.h + circle.size : stryMutAct_9fa48("461") ? circle.y >= canvasSize.current.h + circle.size : stryMutAct_9fa48("460") ? false : (stryCov_9fa48("460", "461", "462"), circle.y > (stryMutAct_9fa48("463") ? canvasSize.current.h - circle.size : (stryCov_9fa48("463"), canvasSize.current.h + circle.size)))))) {
              if (stryMutAct_9fa48("464")) {
                {}
              } else {
                stryCov_9fa48("464");
                // remove the circle from the array
                circles.current.splice(i, 1);
                // create a new circle
                const newCircle = circleParams();
                drawCircle(newCircle);
                // update the circle position
              }
            } else {
              if (stryMutAct_9fa48("465")) {
                {}
              } else {
                stryCov_9fa48("465");
                drawCircle(stryMutAct_9fa48("466") ? {} : (stryCov_9fa48("466"), {
                  ...circle,
                  x: circle.x,
                  y: circle.y,
                  translateX: circle.translateX,
                  translateY: circle.translateY,
                  alpha: circle.alpha
                }), stryMutAct_9fa48("467") ? false : (stryCov_9fa48("467"), true));
              }
            }
          }
        });
        window.requestAnimationFrame(animate);
      }
    };
    return <div className={className} ref={canvasContainerRef} aria-hidden='true'>
  		<canvas ref={canvasRef} />
  	</div>;
  }
}