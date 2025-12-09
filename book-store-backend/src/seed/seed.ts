/* eslint-disable no-console */
import { connect, model } from 'mongoose';
import { Product, ProductSchema } from '../products/schemas/product.schema';

// === MODEL ===
const ProductModel = model(Product.name, ProductSchema);

// === BASE URL FOR IMAGES (must match AppModule ServeStatic setup)
const BASE_URL = 'http://localhost:3000/book-store-new/products/';

// === STORE DATA ===
const StoreData = [
  {
    productID: 1,
    frontImg: BASE_URL + 'borunov1.jpg',
    backImg: BASE_URL + 'borunov1_1.jpg',
    produtDescription:
      'An inspiring guide to achieving mastery through persistence, discipline, and creativity.',
    productName: 'The Path to Mastery',
    productPrice: 54,
    productReviews: '1.2 million reviews',
  },
  {
    productID: 2,
    frontImg: BASE_URL + 'Forest.jpg',
    backImg: BASE_URL + 'Forest_1.jpg',
    produtDescription: 'A thrilling novel set in a mystical forest.',
    productName: 'Whispers of the Forest',
    productPrice: 88,
    productReviews: '3.4k reviews',
  },
  {
    productID: 3,
    frontImg: BASE_URL + 'Alchemised.jpg',
    backImg: BASE_URL + 'Forest_1.jpg',
    produtDescription:
      'A captivating tale of alchemy, ambition, and transformation.',
    productName: "The Alchemist's Secret",
    productPrice: 23,
    productReviews: '5.1k reviews',
  },
  {
    productID: 4,
    frontImg: BASE_URL + 'Bookshops.jpg',
    backImg: BASE_URL + 'Bookshops.jpg',
    produtDescription: 'A heartwarming story about courage and friendship.',
    productName: 'We Love Bunny',
    productPrice: 67,
    productReviews: '2.9k reviews',
  },
  {
    productID: 5,
    frontImg: BASE_URL + 'OnyxStorm.jpg',
    backImg: BASE_URL + 'Onyx Storm_1.jpg',
    produtDescription:
      'A fast-paced sci-fi adventure about the rise of the Onyx Storm.',
    productName: 'Onyx Storm',
    productPrice: 41,
    productReviews: '4.8k reviews',
  },
  {
    productID: 6,
    frontImg: BASE_URL + 'NeverFlinch.jpg',
    backImg: BASE_URL + 'Forest_1.jpg',
    produtDescription:
      'A powerful book teaching how to stay confident under pressure.',
    productName: 'Never Flinch',
    productPrice: 79,
    productReviews: '6.5k reviews',
  },
  {
    productID: 7,
    frontImg: BASE_URL + 'DarklyDreaminDexter.jpg',
    backImg: BASE_URL + 'Forest_1.jpg',
    produtDescription:
      'A psychological thriller following Dexter and his inner darkness.',
    productName: 'Darkly Dreaming Dexter',
    productPrice: 12,
    productReviews: '12k reviews',
  },
  {
    productID: 8,
    frontImg: BASE_URL + 'TheFuryOfTheGods.jpg',
    backImg: BASE_URL + 'TheFuryOfTheGods_1.jpg',
    produtDescription: 'An epic battle between mortals and gods.',
    productName: 'The Fury of the Gods',
    productPrice: 95,
    productReviews: '9.7k reviews',
  },
  {
    productID: 9,
    frontImg: BASE_URL + 'Wicked.jpg',
    backImg: BASE_URL + 'Wicked.jpg',
    produtDescription:
      'A dark fantasy romance full of ancient curses and secrets.',
    productName: 'Wicked Whispers',
    productPrice: 38,
    productReviews: '9.1k reviews',
  },
  {
    productID: 10,
    frontImg: BASE_URL + 'Wicked.jpg',
    backImg: BASE_URL + 'Wicked.jpg',
    produtDescription: 'Alternative cover edition of the dark fantasy romance.',
    productName: 'Wicked Whispers (Alt Edition)',
    productPrice: 72,
    productReviews: '9.1k reviews',
  },
  {
    productID: 11,
    frontImg: BASE_URL + 'Wool.jpg',
    backImg: BASE_URL + 'Wool.jpg',
    produtDescription: 'A gripping post-apocalyptic thriller set underground.',
    productName: 'Wool',
    productPrice: 14,
    productReviews: '12.4k reviews',
  },
  {
    productID: 12,
    frontImg: BASE_URL + 'ViolentDelights.jpg',
    backImg: BASE_URL + 'ViolentDelights.jpg',
    produtDescription: 'A modern tragedy where power and loyalty collide.',
    productName: 'These Violent Delights',
    productPrice: 83,
    productReviews: '15.2k reviews',
  },
  {
    productID: 13,
    frontImg: BASE_URL + 'LossLiberation.jpg',
    backImg: BASE_URL + 'LossLiberation.jpg',
    produtDescription: 'A memoir about surviving loss and finding hope again.',
    productName: 'Loss and Liberation',
    productPrice: 47,
    productReviews: '6.9k reviews',
  },
  {
    productID: 14,
    frontImg: BASE_URL + 'Creative.jpg',
    backImg: BASE_URL + 'Creative.jpg',
    produtDescription: 'A motivational guide to unlocking creative potential.',
    productName: 'Creative Awakening',
    productPrice: 19,
    productReviews: '5.2k reviews',
  },
  {
    productID: 15,
    frontImg: BASE_URL + 'Bookshops.jpg',
    backImg: BASE_URL + 'Bookshops.jpg',
    produtDescription:
      'A travelogue through the world’s most charming bookshops.',
    productName: 'The Bookshop Diaries',
    productPrice: 59,
    productReviews: '8.7k reviews',
  },
  {
    productID: 16,
    frontImg: BASE_URL + 'Th SecretOfSecrets.jpg',
    backImg: BASE_URL + 'Th SecretOfSecrets.jpg',
    produtDescription:
      'A novel exploring friendship, betrayal, and loneliness.',
    productName: 'No Friend But the Night',
    productPrice: 33,
    productReviews: '10.3k reviews',
  },
  {
    productID: 17,
    frontImg: BASE_URL + 'Thornhedge.jpg',
    backImg: BASE_URL + 'Thornhedge.jpg',
    produtDescription: 'A dark fairy tale about monsters and forgotten hope.',
    productName: 'Thornhedge',
    productPrice: 91,
    productReviews: '7.6k reviews',
  },
  {
    productID: 18,
    frontImg: BASE_URL + 'TheRoseField.jpg',
    backImg: BASE_URL + 'TheRoseField.jpg',
    produtDescription: 'A historical romance set in war-torn gardens.',
    productName: 'The Rose Field',
    productPrice: 26,
    productReviews: '11.2k reviews',
  },
];

// === SEED FUNCTION ===
async function seed() {
  try {
    console.log('📡 Connecting to MongoDB...');
    await connect(
      'mongodb+srv://koufeed:A132465c@cluster1.tti5h.mongodb.net/bookstore',
    );

    console.log('🗑 Clearing products collection...');
    await ProductModel.deleteMany({});

    console.log('📥 Inserting new products...');
    await ProductModel.insertMany(StoreData);

    console.log('✅ SEED COMPLETED');
    process.exit(0);
  } catch (err) {
    console.error('❌ SEED ERROR:', err);
    process.exit(1);
  }
}

seed();
