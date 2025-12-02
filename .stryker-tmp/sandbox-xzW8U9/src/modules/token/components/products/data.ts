/* eslint-disable camelcase */
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
import Product_3 from '../../../../assets/Products/Alchemised.jpg';
import { default as Product_15, default as Product_4 } from '../../../../assets/Products/Bookshops.jpg';
import Product_1 from '../../../../assets/Products/borunov1.jpg';
import Product_1_1 from '../../../../assets/Products/borunov1_1.jpg';
import Product_14 from '../../../../assets/Products/Creative.jpg';
import Product_7 from '../../../../assets/Products/DarklyDreaminDexter.jpg';
import Product_2 from '../../../../assets/Products/Forest.jpg';
import Product_2_2 from '../../../../assets/Products/Forest_1.jpg';
import Product_13 from '../../../../assets/Products/LossLiberation.jpg';
import Product_6 from '../../../../assets/Products/NeverFlinch.jpg';
import Product_5_1 from '../../../../assets/Products/Onyx Storm_1.jpg';
import Product_5 from '../../../../assets/Products/OnyxStorm.jpg';
import Product_9 from '../../../../assets/Products/Th SecretOfSecrets.jpg';
import Product_8 from '../../../../assets/Products/TheFuryOfTheGods.jpg';
import Product_8_1 from '../../../../assets/Products/TheFuryOfTheGods_1.jpg';
import Product_18 from '../../../../assets/Products/TheRoseField.jpg';
import Product_17 from '../../../../assets/Products/Thornhedge.jpg';
import Product_12 from '../../../../assets/Products/ViolentDelights.jpg';
import Product_10 from '../../../../assets/Products/Wicked.jpg';
import Product_11 from '../../../../assets/Products/Wool.jpg';
const StoreData = stryMutAct_9fa48("477") ? [] : (stryCov_9fa48("477"), [stryMutAct_9fa48("478") ? {} : (stryCov_9fa48("478"), {
  productID: 1,
  frontImg: Product_1,
  backImg: Product_1_1,
  produtDescription: stryMutAct_9fa48("479") ? "" : (stryCov_9fa48("479"), 'An inspiring guide to achieving mastery through persistence, discipline, and creativity. Perfect for readers seeking motivation.'),
  productName: stryMutAct_9fa48("480") ? "" : (stryCov_9fa48("480"), 'The Path to Mastery'),
  author: stryMutAct_9fa48("481") ? "" : (stryCov_9fa48("481"), 'Daniel Ross'),
  genre: stryMutAct_9fa48("482") ? "" : (stryCov_9fa48("482"), 'Self-help'),
  year: 2021,
  productPrice: 54,
  count: 20,
  productReviews: stryMutAct_9fa48("483") ? "" : (stryCov_9fa48("483"), '1.2 milion reviews')
}), stryMutAct_9fa48("484") ? {} : (stryCov_9fa48("484"), {
  productID: 2,
  frontImg: Product_2,
  backImg: Product_2_2,
  produtDescription: stryMutAct_9fa48("485") ? "" : (stryCov_9fa48("485"), 'A thrilling novel set in a mystical forest where nature hides ancient secrets and the line between good and evil blurs.'),
  productName: stryMutAct_9fa48("486") ? "" : (stryCov_9fa48("486"), 'Whispers of the Forest'),
  author: stryMutAct_9fa48("487") ? "" : (stryCov_9fa48("487"), 'Elena Hartwood'),
  genre: stryMutAct_9fa48("488") ? "" : (stryCov_9fa48("488"), 'Fantasy'),
  year: 2019,
  productPrice: 88,
  count: 17,
  productReviews: stryMutAct_9fa48("489") ? "" : (stryCov_9fa48("489"), '3.4k reviews')
}), stryMutAct_9fa48("490") ? {} : (stryCov_9fa48("490"), {
  productID: 3,
  frontImg: Product_3,
  backImg: Product_2_2,
  produtDescription: stryMutAct_9fa48("491") ? "" : (stryCov_9fa48("491"), 'A captivating tale of alchemy, ambition, and the eternal quest for transformation — both spiritual and physical.'),
  productName: stryMutAct_9fa48("492") ? "" : (stryCov_9fa48("492"), 'The Alchemist’s Secret'),
  author: stryMutAct_9fa48("493") ? "" : (stryCov_9fa48("493"), 'Marcus Legrand'),
  genre: stryMutAct_9fa48("494") ? "" : (stryCov_9fa48("494"), 'Fantasy / Adventure'),
  year: 2020,
  productPrice: 23,
  count: 12,
  productReviews: stryMutAct_9fa48("495") ? "" : (stryCov_9fa48("495"), '5.1k reviews')
}), stryMutAct_9fa48("496") ? {} : (stryCov_9fa48("496"), {
  productID: 4,
  frontImg: Product_4,
  backImg: Product_4,
  produtDescription: stryMutAct_9fa48("497") ? "" : (stryCov_9fa48("497"), 'A heartwarming story about courage, friendship, and a mysterious bunny that changes everything.'),
  productName: stryMutAct_9fa48("498") ? "" : (stryCov_9fa48("498"), 'We Love Bunny'),
  author: stryMutAct_9fa48("499") ? "" : (stryCov_9fa48("499"), 'Sophie Cain'),
  genre: stryMutAct_9fa48("500") ? "" : (stryCov_9fa48("500"), 'Children’s Fiction'),
  year: 2022,
  productPrice: 67,
  count: 20,
  productReviews: stryMutAct_9fa48("501") ? "" : (stryCov_9fa48("501"), '2.9k reviews')
}), stryMutAct_9fa48("502") ? {} : (stryCov_9fa48("502"), {
  productID: 5,
  frontImg: Product_5,
  backImg: Product_5_1,
  produtDescription: stryMutAct_9fa48("503") ? "" : (stryCov_9fa48("503"), 'A fast-paced sci-fi adventure exploring a world powered by dark crystals and the rise of the Onyx Storm.'),
  productName: stryMutAct_9fa48("504") ? "" : (stryCov_9fa48("504"), 'Onyx Storm'),
  author: stryMutAct_9fa48("505") ? "" : (stryCov_9fa48("505"), 'Kevin Arlow'),
  genre: stryMutAct_9fa48("506") ? "" : (stryCov_9fa48("506"), 'Science Fiction'),
  year: 2021,
  productPrice: 41,
  count: 35,
  productReviews: stryMutAct_9fa48("507") ? "" : (stryCov_9fa48("507"), '4.8k reviews')
}), stryMutAct_9fa48("508") ? {} : (stryCov_9fa48("508"), {
  productID: 6,
  frontImg: Product_6,
  backImg: Product_2_2,
  produtDescription: stryMutAct_9fa48("509") ? "" : (stryCov_9fa48("509"), 'A powerful self-development book teaching how to stay calm, confident, and unshakable under any pressure.'),
  productName: stryMutAct_9fa48("510") ? "" : (stryCov_9fa48("510"), 'Never Flinch'),
  author: stryMutAct_9fa48("511") ? "" : (stryCov_9fa48("511"), 'Grant Redfield'),
  genre: stryMutAct_9fa48("512") ? "" : (stryCov_9fa48("512"), 'Self-help / Psychology'),
  year: 2023,
  productPrice: 79,
  count: 56,
  productReviews: stryMutAct_9fa48("513") ? "" : (stryCov_9fa48("513"), '6.5k reviews')
}), stryMutAct_9fa48("514") ? {} : (stryCov_9fa48("514"), {
  productID: 7,
  frontImg: Product_7,
  backImg: Product_2_2,
  produtDescription: stryMutAct_9fa48("515") ? "" : (stryCov_9fa48("515"), 'A dark psychological thriller following Dexter, a detective with dreams darker than the crimes he solves.'),
  productName: stryMutAct_9fa48("516") ? "" : (stryCov_9fa48("516"), 'Darkly Dreaming Dexter'),
  author: stryMutAct_9fa48("517") ? "" : (stryCov_9fa48("517"), 'Jeff Lindsay'),
  genre: stryMutAct_9fa48("518") ? "" : (stryCov_9fa48("518"), 'Thriller'),
  year: 2004,
  productPrice: 12,
  count: 12,
  productReviews: stryMutAct_9fa48("519") ? "" : (stryCov_9fa48("519"), '12k reviews')
}), stryMutAct_9fa48("520") ? {} : (stryCov_9fa48("520"), {
  productID: 8,
  frontImg: Product_8,
  backImg: Product_8_1,
  produtDescription: stryMutAct_9fa48("521") ? "" : (stryCov_9fa48("521"), 'An epic fantasy saga where gods battle mortals for control over destiny itself. Perfect for fans of mythology.'),
  productName: stryMutAct_9fa48("522") ? "" : (stryCov_9fa48("522"), 'The Fury of the Gods'),
  author: stryMutAct_9fa48("523") ? "" : (stryCov_9fa48("523"), 'Valeria Stormborn'),
  genre: stryMutAct_9fa48("524") ? "" : (stryCov_9fa48("524"), 'Epic Fantasy'),
  year: 2022,
  productPrice: 95,
  count: 48,
  productReviews: stryMutAct_9fa48("525") ? "" : (stryCov_9fa48("525"), '9.7k reviews')
}), stryMutAct_9fa48("526") ? {} : (stryCov_9fa48("526"), {
  productID: 9,
  frontImg: Product_10,
  backImg: Product_10,
  produtDescription: stryMutAct_9fa48("527") ? "" : (stryCov_9fa48("527"), 'A dark fantasy romance filled with dangerous secrets, ancient curses, and forbidden love that defies fate.'),
  productName: stryMutAct_9fa48("528") ? "" : (stryCov_9fa48("528"), 'Wicked Whispers'),
  author: stryMutAct_9fa48("529") ? "" : (stryCov_9fa48("529"), 'Ava Blackthorne'),
  genre: stryMutAct_9fa48("530") ? "" : (stryCov_9fa48("530"), 'Dark Romance'),
  year: 2020,
  productPrice: 38,
  count: 5,
  productReviews: stryMutAct_9fa48("531") ? "" : (stryCov_9fa48("531"), '9.1k reviews')
}), stryMutAct_9fa48("532") ? {} : (stryCov_9fa48("532"), {
  productID: 10,
  frontImg: Product_10,
  backImg: Product_10,
  produtDescription: stryMutAct_9fa48("533") ? "" : (stryCov_9fa48("533"), 'A dark fantasy romance filled with dangerous secrets, ancient curses, and forbidden love that defies fate.'),
  productName: stryMutAct_9fa48("534") ? "" : (stryCov_9fa48("534"), 'Wicked Whispers'),
  author: stryMutAct_9fa48("535") ? "" : (stryCov_9fa48("535"), 'Ava Blackthorne'),
  genre: stryMutAct_9fa48("536") ? "" : (stryCov_9fa48("536"), 'Dark Romance'),
  year: 2020,
  productPrice: 72,
  count: 2,
  productReviews: stryMutAct_9fa48("537") ? "" : (stryCov_9fa48("537"), '9.1k reviews')
}), stryMutAct_9fa48("538") ? {} : (stryCov_9fa48("538"), {
  productID: 11,
  frontImg: Product_11,
  backImg: Product_11,
  produtDescription: stryMutAct_9fa48("539") ? "" : (stryCov_9fa48("539"), 'A gripping post-apocalyptic thriller set in a world buried beneath dust and silence, where hope lives underground.'),
  productName: stryMutAct_9fa48("540") ? "" : (stryCov_9fa48("540"), 'Wool'),
  author: stryMutAct_9fa48("541") ? "" : (stryCov_9fa48("541"), 'Hugh Howey'),
  genre: stryMutAct_9fa48("542") ? "" : (stryCov_9fa48("542"), 'Post-apocalyptic Fiction'),
  year: 2011,
  productPrice: 14,
  count: 15,
  productReviews: stryMutAct_9fa48("543") ? "" : (stryCov_9fa48("543"), '12.4k reviews')
}), stryMutAct_9fa48("544") ? {} : (stryCov_9fa48("544"), {
  productID: 12,
  frontImg: Product_12,
  backImg: Product_12,
  produtDescription: stryMutAct_9fa48("545") ? "" : (stryCov_9fa48("545"), 'A modern retelling of Shakespearean tragedy where loyalty and power collide in a city ruled by violence.'),
  productName: stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), 'These Violent Delights'),
  author: stryMutAct_9fa48("547") ? "" : (stryCov_9fa48("547"), 'Chloe Gong'),
  genre: stryMutAct_9fa48("548") ? "" : (stryCov_9fa48("548"), 'Fantasy / Romance'),
  year: 2020,
  productPrice: 83,
  count: 15,
  productReviews: stryMutAct_9fa48("549") ? "" : (stryCov_9fa48("549"), '15.2k reviews')
}), stryMutAct_9fa48("550") ? {} : (stryCov_9fa48("550"), {
  productID: 13,
  frontImg: Product_13,
  backImg: Product_13,
  produtDescription: stryMutAct_9fa48("551") ? "" : (stryCov_9fa48("551"), 'A touching memoir of survival and healing that traces the author’s journey from loss to liberation.'),
  productName: stryMutAct_9fa48("552") ? "" : (stryCov_9fa48("552"), 'Loss and Liberation'),
  author: stryMutAct_9fa48("553") ? "" : (stryCov_9fa48("553"), 'Nora Keller'),
  genre: stryMutAct_9fa48("554") ? "" : (stryCov_9fa48("554"), 'Memoir'),
  year: 2018,
  productPrice: 47,
  count: 46,
  productReviews: stryMutAct_9fa48("555") ? "" : (stryCov_9fa48("555"), '6.9k reviews')
}), stryMutAct_9fa48("556") ? {} : (stryCov_9fa48("556"), {
  productID: 14,
  frontImg: Product_14,
  backImg: Product_14,
  produtDescription: stryMutAct_9fa48("557") ? "" : (stryCov_9fa48("557"), 'A motivational guide to unlocking your imagination and building a life filled with artistic purpose.'),
  productName: stryMutAct_9fa48("558") ? "" : (stryCov_9fa48("558"), 'Creative Awakening'),
  author: stryMutAct_9fa48("559") ? "" : (stryCov_9fa48("559"), 'Mia Rowan'),
  genre: stryMutAct_9fa48("560") ? "" : (stryCov_9fa48("560"), 'Self-help / Creativity'),
  year: 2021,
  productPrice: 19,
  count: 1,
  productReviews: stryMutAct_9fa48("561") ? "" : (stryCov_9fa48("561"), '5.2k reviews')
}), stryMutAct_9fa48("562") ? {} : (stryCov_9fa48("562"), {
  productID: 15,
  frontImg: Product_15,
  backImg: Product_15,
  produtDescription: stryMutAct_9fa48("563") ? "" : (stryCov_9fa48("563"), 'А heartwarming travelogue through the world’s most charming bookshops and the stories they hold.'),
  productName: stryMutAct_9fa48("564") ? "" : (stryCov_9fa48("564"), 'The Bookshop Diaries'),
  author: stryMutAct_9fa48("565") ? "" : (stryCov_9fa48("565"), 'Oliver Grant'),
  genre: stryMutAct_9fa48("566") ? "" : (stryCov_9fa48("566"), 'Travel / Non-fiction'),
  year: 2019,
  productPrice: 59,
  count: 54,
  productReviews: stryMutAct_9fa48("567") ? "" : (stryCov_9fa48("567"), '8.7k reviews')
}), stryMutAct_9fa48("568") ? {} : (stryCov_9fa48("568"), {
  productID: 16,
  frontImg: Product_9,
  backImg: Product_9,
  produtDescription: stryMutAct_9fa48("569") ? "" : (stryCov_9fa48("569"), 'A psychological novel exploring friendship, betrayal, and the chilling loneliness of modern life.'),
  productName: stryMutAct_9fa48("570") ? "" : (stryCov_9fa48("570"), 'No Friend But the Night'),
  author: stryMutAct_9fa48("571") ? "" : (stryCov_9fa48("571"), 'Harper Vane'),
  genre: stryMutAct_9fa48("572") ? "" : (stryCov_9fa48("572"), 'Psychological Fiction'),
  year: 2017,
  productPrice: 33,
  count: 123,
  productReviews: stryMutAct_9fa48("573") ? "" : (stryCov_9fa48("573"), '10.3k reviews')
}), stryMutAct_9fa48("574") ? {} : (stryCov_9fa48("574"), {
  productID: 17,
  frontImg: Product_17,
  backImg: Product_17,
  produtDescription: stryMutAct_9fa48("575") ? "" : (stryCov_9fa48("575"), 'A dark fairy tale about thorns, monsters, and the fragile hope hidden behind ancient walls.'),
  productName: stryMutAct_9fa48("576") ? "" : (stryCov_9fa48("576"), 'Thornhedge'),
  author: stryMutAct_9fa48("577") ? "" : (stryCov_9fa48("577"), 'T. Kingfisher'),
  genre: stryMutAct_9fa48("578") ? "" : (stryCov_9fa48("578"), 'Fantasy / Fairy Tale'),
  year: 2023,
  productPrice: 91,
  count: 99,
  productReviews: stryMutAct_9fa48("579") ? "" : (stryCov_9fa48("579"), '7.6k reviews')
}), stryMutAct_9fa48("580") ? {} : (stryCov_9fa48("580"), {
  productID: 18,
  frontImg: Product_18,
  backImg: Product_18,
  produtDescription: stryMutAct_9fa48("581") ? "" : (stryCov_9fa48("581"), 'A historical romance set amid blooming wars and forbidden gardens, where love must fight to survive.'),
  productName: stryMutAct_9fa48("582") ? "" : (stryCov_9fa48("582"), 'The Rose Field'),
  author: stryMutAct_9fa48("583") ? "" : (stryCov_9fa48("583"), 'Victoria Langley'),
  genre: stryMutAct_9fa48("584") ? "" : (stryCov_9fa48("584"), 'Historical Romance'),
  year: 2022,
  productPrice: 26,
  count: 32,
  productReviews: stryMutAct_9fa48("585") ? "" : (stryCov_9fa48("585"), '11.2k reviews')
})]);
export default StoreData;