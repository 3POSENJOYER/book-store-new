/* eslint-disable camelcase */

import Product_3 from '../../../../assets/Products/Alchemised.jpg'
import {
	default as Product_15,
	default as Product_4,
} from '../../../../assets/Products/Bookshops.jpg'
import Product_1 from '../../../../assets/Products/borunov1.jpg'
import Product_1_1 from '../../../../assets/Products/borunov1_1.jpg'
import Product_14 from '../../../../assets/Products/Creative.jpg'
import Product_7 from '../../../../assets/Products/DarklyDreaminDexter.jpg'
import Product_2 from '../../../../assets/Products/Forest.jpg'
import Product_2_2 from '../../../../assets/Products/Forest_1.jpg'
import Product_13 from '../../../../assets/Products/LossLiberation.jpg'
import Product_6 from '../../../../assets/Products/NeverFlinch.jpg'
import Product_5_1 from '../../../../assets/Products/Onyx Storm_1.jpg'
import Product_5 from '../../../../assets/Products/OnyxStorm.jpg'
import Product_9 from '../../../../assets/Products/Th SecretOfSecrets.jpg'
import Product_8 from '../../../../assets/Products/TheFuryOfTheGods.jpg'
import Product_8_1 from '../../../../assets/Products/TheFuryOfTheGods_1.jpg'
import Product_18 from '../../../../assets/Products/TheRoseField.jpg'
import Product_17 from '../../../../assets/Products/Thornhedge.jpg'
import Product_12 from '../../../../assets/Products/ViolentDelights.jpg'
import Product_10 from '../../../../assets/Products/Wicked.jpg'
import Product_11 from '../../../../assets/Products/Wool.jpg'
const StoreData = [
	{
		productID: 1,
		frontImg:  Product_1,
		backImg:   Product_1_1,
		produtDescription:
			'An inspiring guide to achieving mastery through persistence, discipline, and creativity. Perfect for readers seeking motivation.',
		productName:    'The Path to Mastery',
		author:         'Daniel Ross',
		genre:          'Self-help',
		year:           2021,
		productPrice:   100,
		count:          20,
		productReviews: '1.2 milion reviews',
	},
	{
		productID: 2,
		frontImg:  Product_2,
		backImg:   Product_2_2,
		produtDescription:
			'A thrilling novel set in a mystical forest where nature hides ancient secrets and the line between good and evil blurs.',
		productName:    'Whispers of the Forest',
		author:         'Elena Hartwood',
		genre:          'Fantasy',
		year:           2019,
		productPrice:   24,
		count:          17,
		productReviews: '3.4k reviews',
	},
	{
		productID: 3,
		frontImg:  Product_3,
		backImg:   Product_2_2,
		produtDescription:
			'A captivating tale of alchemy, ambition, and the eternal quest for transformation — both spiritual and physical.',
		productName:    'The Alchemist’s Secret',
		author:         'Marcus Legrand',
		genre:          'Fantasy / Adventure',
		year:           2020,
		productPrice:   31,
		count:          12,
		productReviews: '5.1k reviews',
	},
	{
		productID: 4,
		frontImg:  Product_4,
		backImg:   Product_4,
		produtDescription:
			'A heartwarming story about courage, friendship, and a mysterious bunny that changes everything.',
		productName:    'We Love Bunny',
		author:         'Sophie Cain',
		genre:          'Children’s Fiction',
		year:           2022,
		productPrice:   18,
		count:          20,
		productReviews: '2.9k reviews',
	},
	{
		productID: 5,
		frontImg:  Product_5,
		backImg:   Product_5_1,
		produtDescription:
			'A fast-paced sci-fi adventure exploring a world powered by dark crystals and the rise of the Onyx Storm.',
		productName:    'Onyx Storm',
		author:         'Kevin Arlow',
		genre:          'Science Fiction',
		year:           2021,
		productPrice:   27,
		count:          35,
		productReviews: '4.8k reviews',
	},
	{
		productID: 6,
		frontImg:  Product_6,
		backImg:   Product_2_2,
		produtDescription:
			'A powerful self-development book teaching how to stay calm, confident, and unshakable under any pressure.',
		productName:    'Never Flinch',
		author:         'Grant Redfield',
		genre:          'Self-help / Psychology',
		year:           2023,
		productPrice:   21,
		count:          56,
		productReviews: '6.5k reviews',
	},
	{
		productID: 7,
		frontImg:  Product_7,
		backImg:   Product_2_2,
		produtDescription:
			'A dark psychological thriller following Dexter, a detective with dreams darker than the crimes he solves.',
		productName:    'Darkly Dreaming Dexter',
		author:         'Jeff Lindsay',
		genre:          'Thriller',
		year:           2004,
		productPrice:   32,
		count:          12,
		productReviews: '12k reviews',
	},
	{
		productID: 8,
		frontImg:  Product_8,
		backImg:   Product_8_1,
		produtDescription:
			'An epic fantasy saga where gods battle mortals for control over destiny itself. Perfect for fans of mythology.',
		productName:    'The Fury of the Gods',
		author:         'Valeria Stormborn',
		genre:          'Epic Fantasy',
		year:           2022,
		productPrice:   35,
		count:          48,
		productReviews: '9.7k reviews',
	},
	{
		productID: 9,
		frontImg:  Product_10,
		backImg:   Product_10,
		produtDescription:
			'A dark fantasy romance filled with dangerous secrets, ancient curses, and forbidden love that defies fate.',
		productName:    'Wicked Whispers',
		author:         'Ava Blackthorne',
		genre:          'Dark Romance',
		year:           2020,
		productPrice:   26,
		count:          5,
		productReviews: '9.1k reviews',
	},
	{
		productID: 10,
		frontImg:  Product_10,
		backImg:   Product_10,
		produtDescription:
			'A dark fantasy romance filled with dangerous secrets, ancient curses, and forbidden love that defies fate.',
		productName:    'Wicked Whispers',
		author:         'Ava Blackthorne',
		genre:          'Dark Romance',
		year:           2020,
		productPrice:   26,
		count:          2,
		productReviews: '9.1k reviews',
	},
	{
		productID: 11,
		frontImg:  Product_11,
		backImg:   Product_11,
		produtDescription:
			'A gripping post-apocalyptic thriller set in a world buried beneath dust and silence, where hope lives underground.',
		productName:    'Wool',
		author:         'Hugh Howey',
		genre:          'Post-apocalyptic Fiction',
		year:           2011,
		productPrice:   24,
		count:          15,
		productReviews: '12.4k reviews',
	},
	{
		productID: 12,
		frontImg:  Product_12,
		backImg:   Product_12,
		produtDescription:
			'A modern retelling of Shakespearean tragedy where loyalty and power collide in a city ruled by violence.',
		productName:    'These Violent Delights',
		author:         'Chloe Gong',
		genre:          'Fantasy / Romance',
		year:           2020,
		productPrice:   27,
		count:          15,
		productReviews: '15.2k reviews',
	},
	{
		productID: 13,
		frontImg:  Product_13,
		backImg:   Product_13,
		produtDescription:
			'A touching memoir of survival and healing that traces the author’s journey from loss to liberation.',
		productName:    'Loss and Liberation',
		author:         'Nora Keller',
		genre:          'Memoir',
		year:           2018,
		productPrice:   22,
		count:          46,
		productReviews: '6.9k reviews',
	},
	{
		productID: 14,
		frontImg:  Product_14,
		backImg:   Product_14,
		produtDescription:
			'A motivational guide to unlocking your imagination and building a life filled with artistic purpose.',
		productName:    'Creative Awakening',
		author:         'Mia Rowan',
		genre:          'Self-help / Creativity',
		year:           2021,
		productPrice:   19,
		count:          1,
		productReviews: '5.2k reviews',
	},
	{
		productID: 15,
		frontImg:  Product_15,
		backImg:   Product_15,
		produtDescription:
			'A heartwarming travelogue through the world’s most charming bookshops and the stories they hold.',
		productName:    'The Bookshop Diaries',
		author:         'Oliver Grant',
		genre:          'Travel / Non-fiction',
		year:           2019,
		productPrice:   21,
		count:          54,
		productReviews: '8.7k reviews',
	},
	{
		productID: 16,
		frontImg:  Product_9,
		backImg:   Product_9,
		produtDescription:
			'A psychological novel exploring friendship, betrayal, and the chilling loneliness of modern life.',
		productName:    'No Friend But the Night',
		author:         'Harper Vane',
		genre:          'Psychological Fiction',
		year:           2017,
		productPrice:   25,
		count:          123,
		productReviews: '10.3k reviews',
	},
	{
		productID: 17,
		frontImg:  Product_17,
		backImg:   Product_17,
		produtDescription:
			'A dark fairy tale about thorns, monsters, and the fragile hope hidden behind ancient walls.',
		productName:    'Thornhedge',
		author:         'T. Kingfisher',
		genre:          'Fantasy / Fairy Tale',
		year:           2023,
		productPrice:   23,
		count:          99,
		productReviews: '7.6k reviews',
	},
	{
		productID: 18,
		frontImg:  Product_18,
		backImg:   Product_18,
		produtDescription:
			'A historical romance set amid blooming wars and forbidden gardens, where love must fight to survive.',
		productName:    'The Rose Field',
		author:         'Victoria Langley',
		genre:          'Historical Romance',
		year:           2022,
		productPrice:   29,
		count:          32,
		productReviews: '11.2k reviews',
	},
]

export default StoreData
