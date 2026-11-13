import { useState } from 'react';
import { ArrowRight, Search, User, X, ArrowUpDown, LayoutGrid, List, Sparkles, ChefHat, CheckCircle2 } from 'lucide-react';
import logoImage from '../../logo.jpg';
import './Categories.css';

interface SimpleRecipe {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
}

interface Category {
  title: string;
  image?: string;
  imageAlt?: string;
  jp: string;
  simpleRecipes: SimpleRecipe[];
  description: string;
}

const categories: Category[] = [
  {
    title: 'Noodles',
    image: '/food/ramen/Shoyu_ramen.jpg',
    imageAlt: 'Bowl of Japanese shoyu ramen',
    jp: '麺類 (Menrui)',
    description: 'Comforting ramen, udon, and soba dishes, from rich broths to refreshing chilled noodles.',
    simpleRecipes: [
      {
        title: 'Shoyu Ramen',
        description: 'Warm soy-seasoned broth, add cooked ramen noodles, and finish with egg and sliced scallions.',
        ingredients: ['Ramen noodles', 'Soy sauce', 'Chicken broth', 'Soft-boiled egg', 'Scallions', 'Chashu pork'],
        steps: [
          'Boil 2 cups of water and add the chicken broth.',
          'Stir in the soy sauce to create the base soup.',
          'Cook the ramen noodles in a separate pot according to package instructions.',
          'Drain the noodles and place them in a bowl.',
          'Pour the hot broth over the noodles.',
          'Top with soft-boiled egg, sliced scallions, and chashu pork. Enjoy!'
        ]
      },
      {
        title: 'Shio Ramen',
        description: 'A light and clear ramen broth seasoned primarily with salt. It highlights the natural flavors of the ingredients.',
        ingredients: ['Ramen noodles', 'Chicken broth', 'Sea salt', 'Chashu pork', 'Soft-boiled egg', 'Scallions'],
        steps: [
          'Heat the chicken broth and season with sea salt to taste (shio tare).',
          'Cook the ramen noodles in boiling water according to the package instructions, then drain.',
          'Place the noodles in a bowl and pour the hot broth over them.',
          'Top with sliced chashu pork, a halved soft-boiled egg, and chopped scallions.'
        ]
      },
      {
        title: 'Miso Ramen',
        description: 'A hearty and savory ramen with a rich broth made from fermented soybean paste (miso).',
        ingredients: ['Ramen noodles', 'Miso paste', 'Pork broth', 'Corn', 'Butter', 'Bean sprouts'],
        steps: [
          'Sauté minced garlic and ginger in a pan.',
          'Add miso paste and pork broth, stirring until dissolved. Bring to a simmer.',
          'Cook noodles separately and drain.',
          'Pour broth over noodles and top with corn, butter, and bean sprouts.'
        ]
      },
      {
        title: 'Zaru Soba',
        description: 'Chilled buckwheat noodles served with a refreshing dipping sauce. Perfect for summer.',
        ingredients: ['Soba noodles', 'Dashi stock', 'Soy sauce', 'Mirin', 'Nori strips', 'Wasabi'],
        steps: [
          'Mix dashi, soy sauce, and mirin to make the dipping sauce (tsuyu). Chill in the fridge.',
          'Boil soba noodles, then immediately shock them in ice water to stop cooking.',
          'Drain noodles well and serve on a bamboo mat (zaru).',
          'Garnish with nori strips and serve with chilled dipping sauce and wasabi.'
        ]
      },
      {
        title: 'Yaki Udon',
        description: 'Stir-fry udon noodles with sliced vegetables and soy sauce until hot.',
        ingredients: ['Udon noodles', 'Mixed vegetables (cabbage, carrots)', 'Soy sauce', 'Sesame oil', 'Garlic'],
        steps: [
          'Heat sesame oil in a pan and sauté garlic until fragrant.',
          'Add the mixed vegetables and stir-fry for 2-3 minutes.',
          'Add the cooked udon noodles and soy sauce.',
          'Toss everything together until well combined and hot. Serve immediately.'
        ]
      },
    ],
  },
  {
    title: 'Rice Bowls & Dishes',
    image: '/food/donburi/katsudon.jpg',
    imageAlt: 'Japanese katsudon rice bowl',
    jp: '丼物・ご飯 (Donburi & Gohan)',
    description: 'Hearty rice bowls and home-style favorites topped with savory Japanese ingredients.',
    simpleRecipes: [
      {
        title: 'Oyakodon',
        description: 'Simmer chicken and onion with soy sauce, then gently cook with egg and serve over rice.',
        ingredients: ['Chicken thigh', 'Eggs', 'Onion', 'Dashi broth', 'Soy sauce', 'Steamed rice'],
        steps: [
          'Slice the chicken and onion thinly.',
          'Simmer dashi, soy sauce, and mirin in a pan.',
          'Add chicken and onion, and cook until chicken is done.',
          'Beat eggs lightly and pour over the chicken.',
          'Cover and cook until egg is just set.',
          'Slide over a bowl of hot steamed rice.'
        ]
      },
      {
        title: 'Gyudon (牛丼)',
        description: 'A popular Japanese rice bowl dish, consisting of beef and onions simmered in a mildly sweet and savory sauce.',
        ingredients: ['Thinly sliced beef', 'Onion', 'Soy sauce', 'Mirin', 'Steamed rice'],
        steps: [
          'Slice the onion thinly. In a pan, combine soy sauce, mirin, sugar, and water (or dashi) and bring to a boil.',
          'Add the onions and simmer until soft and translucent.',
          'Add the thinly sliced beef and cook until just done (do not overcook).',
          'Serve the beef and onions over a hot bowl of steamed rice and pour the sauce on top.'
        ]
      },
      {
        title: 'Katsudon (カツ丼)',
        description: 'A comforting rice bowl topped with a deep-fried pork cutlet, egg, and onions simmered in a savory broth.',
        ingredients: ['Pork loin', 'Panko breadcrumbs', 'Egg', 'Onion', 'Dashi broth', 'Steamed rice'],
        steps: [
          'Coat the pork loin in flour, dip in beaten egg, and coat with panko breadcrumbs. Deep fry until golden and cooked through.',
          'In a small pan, simmer dashi broth, soy sauce, and mirin. Add sliced onions and cook until soft.',
          'Slice the cooked pork cutlet and add it to the pan. Pour beaten eggs over the top, cover, and cook until the egg is just set.',
          'Slide the pork and egg mixture over a bowl of hot steamed rice.'
        ]
      },
      {
        title: 'Tendon (Tempura Bowl)',
        description: 'A bowl of steamed rice topped with crispy tempura and drizzled with a sweet and savory sauce.',
        ingredients: ['Steamed rice', 'Shrimp tempura', 'Vegetable tempura', 'Dashi broth', 'Soy sauce', 'Mirin'],
        steps: [
          'Prepare your favorite tempura (shrimp and vegetables).',
          'Make the sauce by simmering dashi, soy sauce, mirin, and sugar until slightly thickened.',
          'Place hot steamed rice in a bowl.',
          'Arrange the tempura on top of the rice and drizzle generously with the sauce.'
        ]
      },
      {
        title: 'Salmon Don',
        description: 'A simple yet elegant rice bowl topped with fresh, thinly sliced raw salmon.',
        ingredients: ['Fresh sushi-grade salmon', 'Steamed sushi rice', 'Soy sauce', 'Wasabi', 'Scallions'],
        steps: [
          'Slice the fresh salmon into thin, even pieces.',
          'Prepare a bowl of warm sushi rice.',
          'Arrange the salmon slices neatly over the rice.',
          'Garnish with chopped scallions. Serve with soy sauce and wasabi on the side.'
        ]
      },
      {
        title: 'Onigiri',
        description: 'Shape warm seasoned rice around a filling such as salted salmon, then wrap with nori.',
        ingredients: ['Cooked Japanese rice', 'Salt', 'Nori seaweed', 'Salted salmon (or tuna mayo)'],
        steps: [
          'Wet your hands and rub with salt to prevent sticking.',
          'Place a scoop of rice in your hand and make an indentation.',
          'Put the filling inside and wrap the rice around it.',
          'Shape into a triangle or ball.',
          'Wrap with a strip of nori seaweed.'
        ]
      },
    ],
  },
  {
    title: 'Sushi & Sashimi',
    image: '/food/sushi/sashimi_platter.png',
    imageAlt: 'Assorted sashimi platter',
    jp: '寿司・刺身 (Sushi & Sashimi)',
    description: 'Fresh sashimi, nigiri, and sushi rolls prepared with balanced flavors and care.',
    simpleRecipes: [
      {
        title: 'Sushi (寿司)',
        description: 'A classic Japanese dish consisting of vinegared rice accompanied by various ingredients like seafood and vegetables.',
        ingredients: ['Sushi rice', 'Nori seaweed', 'Fresh salmon', 'Cucumber', 'Avocado'],
        steps: [
          'Wash and cook sushi rice. Once cooked, mix in sushi vinegar and let it cool.',
          'Slice the salmon, cucumber, and avocado into long, thin strips.',
          'Place a sheet of nori on a bamboo mat, spread the rice evenly, and add the fillings.',
          'Roll the sushi tightly, wet the edge of the nori to seal, and slice into bite-sized pieces.'
        ]
      },
      {
        title: 'Nigiri Sushi',
        description: 'Hand-pressed sushi rice topped with a slice of fresh fish, such as tuna or salmon.',
        ingredients: ['Sushi rice', 'Fresh tuna or salmon', 'Wasabi', 'Soy sauce'],
        steps: [
          'Slice the fish into thin, rectangular pieces.',
          'Wet your hands and form small oblong balls of sushi rice.',
          'Dab a tiny bit of wasabi on the fish and press it onto the rice.',
          'Serve immediately with soy sauce.'
        ]
      },
      {
        title: 'California Roll',
        description: 'An inside-out sushi roll containing crab (or imitation crab), avocado, and cucumber, coated in sesame seeds.',
        ingredients: ['Sushi rice', 'Nori', 'Imitation crab', 'Avocado', 'Cucumber', 'Sesame seeds'],
        steps: [
          'Place nori on a bamboo mat and cover with a thin layer of rice.',
          'Flip the nori so the rice faces down.',
          'Add crab, avocado, and cucumber strips to one edge.',
          'Roll tightly, then coat the outside with sesame seeds.',
          'Slice into pieces.'
        ]
      },
      {
        title: 'Tuna Sashimi',
        description: 'Thick, fresh slices of raw tuna, showcasing the pure flavor of the fish.',
        ingredients: ['Sushi-grade tuna', 'Daikon radish (grated)', 'Shiso leaves', 'Wasabi', 'Soy sauce'],
        steps: [
          'Slice the tuna into thick, even pieces.',
          'Place grated daikon and shiso leaves on a plate.',
          'Arrange the tuna slices beautifully on the plate.',
          'Serve with wasabi and soy sauce.'
        ]
      },
      {
        title: 'Kappa Maki',
        description: 'Roll sushi rice and cucumber in a sheet of nori, then slice into bite-sized pieces.',
        ingredients: ['Sushi rice', 'Nori', 'Cucumber', 'Wasabi'],
        steps: [
          'Place a nori sheet on a bamboo mat.',
          'Spread sushi rice evenly over the nori.',
          'Place thin strips of cucumber in the center.',
          'Roll tightly using the mat.',
          'Slice into bite-sized pieces with a wet knife.'
        ]
      },
      {
        title: 'Inari Sushi',
        description: 'Fill seasoned tofu pockets with sushi rice for an easy, portable snack.',
        ingredients: ['Inari tofu pouches', 'Sushi rice', 'Sesame seeds'],
        steps: [
          'Prepare sushi rice.',
          'Open the inari pouches carefully.',
          'Stuff the pouches with sushi rice.',
          'Sprinkle with sesame seeds and serve.'
        ]
      },
    ],
  },
  {
    title: 'Fried & Crispy',
    image: '/food/tempura/shrimp_tempura.webp',
    imageAlt: 'Crispy shrimp tempura',
    jp: '揚げ物 (Agemono)',
    description: 'Golden, crunchy favorites including light tempura, tonkatsu, and Japanese karaage.',
    simpleRecipes: [
      {
        title: 'Shrimp Tempura',
        description: 'Crispy, battered and deep-fried seafood or vegetables. The batter is light and fluffy, perfect with a dipping sauce.',
        ingredients: ['Large shrimp', 'Flour', 'Egg', 'Ice water', 'Tempura dipping sauce'],
        steps: [
          'Peel and devein the shrimp, leaving the tails intact. Make small cuts on the belly to straighten them.',
          'In a bowl, lightly whisk the egg and ice water. Add flour and mix gently; do not overmix (lumps are okay).',
          'Dip the shrimp into the batter, coating evenly.',
          'Deep fry in hot oil (175°C) for 2-3 minutes until golden and crispy. Drain on paper towels.'
        ]
      },
      {
        title: 'Chicken Karaage',
        description: 'Japanese-style fried chicken, marinated in soy sauce and ginger, and coated in potato starch.',
        ingredients: ['Chicken thighs', 'Soy sauce', 'Ginger', 'Garlic', 'Potato starch', 'Oil'],
        steps: [
          'Cut chicken into bite-sized pieces. Marinate in soy sauce, ginger, and garlic for 15 minutes.',
          'Drain excess marinade and coat chicken evenly with potato starch.',
          'Deep fry in hot oil until golden brown and cooked through.',
          'Drain on paper towels and serve with lemon wedges.'
        ]
      },
      {
        title: 'Tonkatsu',
        description: 'A thick, juicy pork cutlet coated in panko breadcrumbs and deep-fried until golden.',
        ingredients: ['Pork loin chops', 'Flour', 'Egg', 'Panko', 'Oil', 'Tonkatsu sauce'],
        steps: [
          'Tenderize the pork chops and season with salt and pepper.',
          'Dredge in flour, dip in beaten egg, and coat generously with panko.',
          'Deep fry until golden brown and cooked through.',
          'Slice into strips and serve with shredded cabbage and tonkatsu sauce.'
        ]
      },
      {
        title: 'Vegetable Tempura',
        description: 'Coat sliced vegetables in tempura batter and fry in small batches until crisp.',
        ingredients: ['Sweet potato', 'Eggplant', 'Green beans', 'Tempura batter mix'],
        steps: [
          'Slice vegetables into thin, even pieces.',
          'Coat with flour, then dip into the tempura batter.',
          'Fry in hot oil until crispy.',
          'Drain and serve with tempura dipping sauce.'
        ]
      },
    ],
  },
  {
    title: 'Grilled & Skewered',
    image: '/food/yakitori/momo.png',
    imageAlt: 'Grilled yakitori chicken skewers',
    jp: '焼き物 (Yakimono)',
    description: 'Smoky, char-grilled dishes and yakitori skewers brushed with savory sauces.',
    simpleRecipes: [
      {
        title: 'Yakitori (焼き鳥)',
        description: 'Japanese skewered chicken, typically grilled over charcoal and seasoned with either salt (shio) or a sweet soy sauce (tare).',
        ingredients: ['Chicken thigh', 'Bamboo skewers', 'Soy sauce', 'Mirin', 'Sugar', 'Leeks'],
        steps: [
          'Soak bamboo skewers in water for 30 minutes. Cut chicken and leeks into bite-sized pieces.',
          'Thread chicken and leeks alternately onto the skewers.',
          'Make the tare sauce by simmering soy sauce, mirin, and sugar in a small pan until slightly thickened.',
          'Grill the skewers over medium-high heat until cooked. Brush with tare sauce during the last few minutes of grilling.'
        ]
      },
      {
        title: 'Teriyaki Chicken',
        description: 'Pan-fried or grilled chicken glazed with a sweet and savory soy-based sauce.',
        ingredients: ['Chicken thighs', 'Soy sauce', 'Mirin', 'Sake', 'Sugar', 'Ginger'],
        steps: [
          'Mix soy sauce, mirin, sake, sugar, and grated ginger to make teriyaki sauce.',
          'Pan-fry chicken skin-side down until golden and crispy.',
          'Flip and cook the other side.',
          'Pour the sauce into the pan and simmer until it thickens and coats the chicken.',
          'Slice and serve.'
        ]
      },
      {
        title: 'Salt-Grilled Salmon',
        description: 'Season salmon with salt and grill until flaky, then serve with lemon.',
        ingredients: ['Salmon fillets', 'Sea salt', 'Lemon'],
        steps: [
          'Pat salmon dry and sprinkle generously with salt.',
          'Let it sit for 20 minutes, then pat dry again.',
          'Grill skin-side down until crispy.',
          'Flip and grill until cooked through.',
          'Serve with a squeeze of lemon.'
        ]
      },
    ],
  },
  {
    title: 'Soups & Hot Pots',
    image: '/food/ramen/nabeyaki.png',
    imageAlt: 'Nabeyaki udon served in a hot pot',
    jp: '汁物・鍋 (Shirumono & Nabe)',
    description: 'Warming bowls and simmering hot pots, from comforting miso soup to nabemono.',
    simpleRecipes: [
      {
        title: 'Miso Soup',
        description: 'Warm dashi, dissolve in miso, and add tofu and wakame.',
        ingredients: ['Dashi stock', 'Miso paste', 'Silken tofu', 'Wakame seaweed', 'Scallions'],
        steps: [
          'Heat dashi stock in a pot.',
          'Dissolve miso paste in a little hot water, then add to the pot.',
          'Add cubed tofu and dried wakame.',
          'Simmer gently for 2 minutes (do not boil).',
          'Garnish with scallions.'
        ]
      },
      {
        title: 'Sukiyaki',
        description: 'A sweet and savory hot pot dish with thinly sliced beef, tofu, and vegetables.',
        ingredients: ['Thinly sliced beef', 'Tofu', 'Napa cabbage', 'Shiitake mushrooms', 'Soy sauce', 'Sugar'],
        steps: [
          'Heat a shallow iron pot and grease with beef fat.',
          'Sear the beef slices briefly, then push to the side.',
          'Add soy sauce, sugar, and a little water to create a broth.',
          'Add tofu, cabbage, and mushrooms, and simmer until tender.',
          'Dip cooked ingredients in beaten raw egg before eating (optional).'
        ]
      },
      {
        title: 'Nabeyaki Udon',
        description: 'Simmer udon with vegetables in broth and top with an egg until just set.',
        ingredients: ['Udon noodles', 'Dashi broth', 'Chicken', 'Egg', 'Vegetables', 'Kamaboko (fish cake)'],
        steps: [
          'Bring dashi broth to a boil.',
          'Add chicken and vegetables, cook until tender.',
          'Add udon noodles to the pot.',
          'Crack an egg on top, cover, and cook until egg is set.',
          'Top with kamaboko and serve in the pot.'
        ]
      },
    ],
  },
  {
    title: 'Small Plates & Appetizers',
    image: '/food/sushi/inari.png',
    imageAlt: 'Inari sushi served as a Japanese small plate',
    jp: 'おつまみ (Otsumami)',
    description: 'Easy-to-share bites and izakaya-style starters for rounding out a Japanese meal.',
    simpleRecipes: [
      {
        title: 'Gyoza',
        description: 'Pan-fried dumplings filled with ground meat and vegetables, served with a dipping sauce.',
        ingredients: ['Gyoza wrappers', 'Ground pork', 'Cabbage', 'Garlic', 'Ginger', 'Soy sauce'],
        steps: [
          'Finely chop cabbage and mix with ground pork, garlic, ginger, and soy sauce.',
          'Place a spoonful of filling in a wrapper and pleat the edges to seal.',
          'Pan-fry the dumplings until the bottoms are golden.',
          'Add a little water, cover, and steam until cooked through.',
          'Serve with a soy-vinegar dipping sauce.'
        ]
      },
      {
        title: 'Takoyaki',
        description: 'Ball-shaped savory snacks filled with octopus, cooked in a special pan.',
        ingredients: ['Takoyaki batter mix', 'Octopus', 'Green onions', 'Pickled ginger', 'Takoyaki sauce', 'Mayonnaise'],
        steps: [
          'Prepare the batter according to the package instructions.',
          'Heat a takoyaki pan and fill the holes with batter.',
          'Add diced octopus, green onions, and pickled ginger to each hole.',
          'As they cook, use a skewer to turn them and form balls.',
          'Drizzle with takoyaki sauce and mayonnaise, and top with bonito flakes.'
        ]
      },
      {
        title: 'Agedashi Tofu',
        description: 'Lightly coat tofu in potato starch, pan-fry until crisp, and serve with warm soy-dashi broth.',
        ingredients: ['Silken tofu', 'Potato starch', 'Oil for frying', 'Dashi broth', 'Soy sauce'],
        steps: [
          'Cut tofu into cubes and pat dry.',
          'Coat lightly with potato starch.',
          'Deep fry until golden and crispy.',
          'Mix dashi and soy sauce for the broth.',
          'Place tofu in a bowl and pour warm broth around it.'
        ]
      },
      {
        title: 'Salted Edamame',
        description: 'Boil edamame until tender, drain, and toss with flaky salt.',
        ingredients: ['Frozen edamame', 'Sea salt'],
        steps: [
          'Bring a pot of salted water to a boil.',
          'Add edamame and cook for 4-5 minutes.',
          'Drain well.',
          'Toss with flaky sea salt while still warm.'
        ]
      },
    ],
  },
  {
    title: 'Street Food & Snacks',
    image: '/food/tempura/Kakiage.jpg',
    imageAlt: 'Crispy kakiage vegetable fritter',
    jp: '屋台料理 (Yatai Ryori)',
    description: 'Casual Japanese street-food favorites and savory snacks, perfect for sharing.',
    simpleRecipes: [
      {
        title: 'Okonomiyaki',
        description: 'A savory Japanese pancake filled with cabbage and topped with a variety of condiments.',
        ingredients: ['Cabbage', 'Flour', 'Eggs', 'Bacon or pork belly', 'Okonomiyaki sauce', 'Japanese mayonnaise'],
        steps: [
          'Mix shredded cabbage, flour, eggs, and a little water into a thick batter.',
          'Pour onto a hot griddle and top with bacon.',
          'Cook both sides until golden brown and cooked through.',
          'Top with okonomiyaki sauce, mayonnaise, and bonito flakes.'
        ]
      },
      {
        title: 'Kakiage',
        description: 'Toss sliced vegetables in a little tempura batter and fry until crisp.',
        ingredients: ['Mixed vegetables (onion, carrot)', 'Flour', 'Egg', 'Cold water'],
        steps: [
          'Slice vegetables into thin strips.',
          'Mix flour, egg, and cold water to make a batter.',
          'Combine vegetables with the batter.',
          'Drop spoonfuls into hot oil.',
          'Fry until golden and crispy.'
        ]
      },
      {
        title: 'Yaki Onigiri',
        description: 'Grill rice balls until lightly toasted, brushing with soy sauce near the end.',
        ingredients: ['Cooked rice', 'Soy sauce', 'Sesame oil', 'Butter (optional)'],
        steps: [
          'Shape rice into triangles.',
          'Heat a pan with a little sesame oil.',
          'Place rice balls in the pan and grill.',
          'Brush with soy sauce.',
          'Flip and grill the other side until crispy.'
        ]
      },
    ],
  },
  {
    title: 'Desserts & Sweets',
    // BAGONG DAGDAG NA IMAGE MULA SA ONLINE (Unsplash)
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000&auto=format&fit=crop',
    imageAlt: 'Traditional Japanese sweets and matcha',
    jp: '甘味 (Kanmi)',
    description: 'Traditional wagashi, matcha treats, chewy mochi, and other Japanese sweets.',
    simpleRecipes: [
      {
        title: 'Dorayaki',
        description: 'Two small, fluffy pancakes sandwiching a sweet red bean paste filling.',
        ingredients: ['Flour', 'Eggs', 'Sugar', 'Honey', 'Baking soda', 'Red bean paste (anko)'],
        steps: [
          'Whisk eggs and sugar together, then add honey and flour.',
          'Cook small, round pancakes on a hot pan.',
          'Once cooled, sandwich a generous scoop of red bean paste between two pancakes.'
        ]
      },
      {
        title: 'Daifuku',
        description: 'A soft, chewy mochi stuffed with sweet red bean paste.',
        ingredients: ['Glutinous rice flour (mochiko)', 'Sugar', 'Water', 'Red bean paste', 'Potato starch'],
        steps: [
          'Mix mochiko, sugar, and water, and microwave until translucent and sticky.',
          'Dust a surface with potato starch and roll out the mochi.',
          'Cut into circles and wrap around balls of red bean paste.'
        ]
      },
      {
        title: 'Matcha Ice Cream',
        description: 'Creamy and rich ice cream infused with the distinct earthy flavor of green tea.',
        ingredients: ['Heavy cream', 'Milk', 'Sugar', 'Matcha powder', 'Egg yolks'],
        steps: [
          'Whisk egg yolks and sugar until pale. Whisk in sifted matcha powder.',
          'Heat milk and cream, then slowly temper into the egg mixture.',
          'Cook until thickened, then chill completely.',
          'Churn in an ice cream maker according to manufacturer instructions.'
        ]
      },
      {
        title: 'Kinako Mochi',
        description: 'Warm mochi until soft, then dust with roasted soybean powder and a little sugar.',
        ingredients: ['Mochi rice cakes', 'Kinako (roasted soybean flour)', 'Sugar'],
        steps: [
          'Boil or microwave mochi until soft and puffy.',
          'Mix kinako and sugar in a bowl.',
          'Coat the warm mochi in the kinako mixture.',
          'Serve immediately while soft.'
        ]
      },
      {
        title: 'Matcha Milk Pudding',
        description: 'Whisk matcha into warm sweetened milk, stir in gelatin, and chill until set.',
        ingredients: ['Milk', 'Matcha powder', 'Sugar', 'Gelatin powder'],
        steps: [
          'Bloom gelatin in cold water.',
          'Warm milk and sugar, whisk in matcha.',
          'Add bloomed gelatin and stir until dissolved.',
          'Pour into molds.',
          'Chill in the fridge for at least 3 hours.'
        ]
      },
    ],
  },
];

const Categories: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedRecipe, setSelectedRecipe] = useState<SimpleRecipe | null>(null);

  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategory = categories[randomIndex];
    setSearchQuery(randomCategory.title);
  };

  let filteredCategories = categories.filter(category => {
    const query = searchQuery.toLowerCase();
    return (
      category.title.toLowerCase().includes(query) ||
      category.jp.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query)
    );
  });

  filteredCategories = filteredCategories.sort((a, b) => {
    if (sortBy === 'az') return a.title.localeCompare(b.title);
    if (sortBy === 'za') return b.title.localeCompare(a.title);
    if (sortBy === 'recipes') return b.simpleRecipes.length - a.simpleRecipes.length;
    return 0;
  });

  return (
    <div className="categories-page">
      <header className="header">
        <a className="logo" href="#home" aria-label="Kaiseki Kitchen home">
          <img src={logoImage} alt="" className="logo-img" />
          <span>Kaisuki kitchen</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">HOME</a>
          <a href="#categories" className="active" aria-current="page">CATEGORIES</a>
          <a href="#contact">CONTACT</a>
          <a href="#about">ABOUT</a>
        </nav>
        <div className="header-actions">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')}>
                <X size={14} />
              </button>
            )}
          </div>
          <div className="user-icon" aria-hidden="true">
            <User size={18} />
          </div>
        </div>
      </header>

      <main className="categories-main">
        <section className="categories-intro" aria-labelledby="categories-title">
          <p className="categories-eyebrow">KAISUKE KITCHEN</p>
          <h1 id="categories-title">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Explore Categories'}
          </h1>
          <p className="categories-subtitle">
            {searchQuery
              ? `Showing ${filteredCategories.length} result(s) found.`
              : 'Find your next favorite from the many flavors of Japanese cuisine.'}
          </p>
        </section>

        <div className="categories-toolbar">
          <div className="toolbar-left">
            <button className="surprise-btn" onClick={handleSurpriseMe}>
              <Sparkles size={16} /> Surprise Me!
            </button>
          </div>
          <div className="toolbar-right">
            <div className="sort-control">
              <ArrowUpDown size={16} className="toolbar-icon" />
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                <option value="default">Sort: Default</option>
                <option value="az">Name (A-Z)</option>
                <option value="za">Name (Z-A)</option>
                <option value="recipes">Most Recipes</option>
              </select>
            </div>
            <div className="view-toggles">
              <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')} title="Grid View">
                <LayoutGrid size={18} />
              </button>
              <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')} title="List View">
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {filteredCategories.length > 0 ? (
          <section className={`categories-grid ${viewMode === 'list' ? 'list-view' : ''}`} aria-label="Recipe categories">
            {filteredCategories.map((category) => (
              <article className="category-card" key={category.title}>
                {category.image ? (
                  <div className="category-card-image">
                    <img src={category.image} alt={category.imageAlt} loading="lazy" />
                  </div>
                ) : (
                  <div className="category-card-image category-card-image--placeholder" role="img" aria-label="No dessert photo is available yet">
                    <span>Japanese sweets</span>
                  </div>
                )}

                <div className="category-card-content">
                  <div className="category-card-heading">
                    <span className="category-japanese">{category.jp}</span>
                    <span className="category-count">{category.simpleRecipes.length} simple recipes</span>
                  </div>
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>

                  <button className="explore-btn" onClick={() => setSelectedCategory(category)}>
                    Explore Recipes <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="categories-empty">
            <h2>No categories found 😔</h2>
            <p>We couldn't find any category matching "{searchQuery}".</p>
            <button className="reset-search-btn" onClick={() => setSearchQuery('')}>
              View All Categories
            </button>
          </div>
        )}
      </main>

      {selectedCategory && (
        <div className="category-modal-overlay" onClick={() => setSelectedCategory(null)}>
          <div className="category-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedCategory(null)}>
              <X size={24} />
            </button>

            <div className="category-modal-header">
              <img
                src={selectedCategory.image || 'https://placehold.co/600x400/eee/999?text=No+Image'}
                alt={selectedCategory.title}
                className="category-modal-image"
              />
              <div className="category-modal-title">
                <span className="category-modal-jp">{selectedCategory.jp}</span>
                <h2>{selectedCategory.title}</h2>
                <p>{selectedCategory.description}</p>
              </div>
            </div>

            <div className="category-modal-body">
              <h3>Available Recipes</h3>
              <div className="modal-recipe-grid">
                {selectedCategory.simpleRecipes.map((recipe, index) => (
                  <div
                    className="modal-recipe-card"
                    key={index}
                    onClick={() => setSelectedRecipe(recipe)}
                  >
                    <div className="modal-recipe-icon">
                      <ChefHat size={20} />
                    </div>
                    <div className="modal-recipe-info">
                      <h4>{recipe.title}</h4>
                      <p>{recipe.description}</p>
                    </div>
                    <div className="modal-recipe-arrow">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedRecipe && (
        <div className="recipe-drawer-overlay" onClick={() => setSelectedRecipe(null)}>
          <div className="recipe-drawer" onClick={(e) => e.stopPropagation()}>
            <button className="close-drawer-btn" onClick={() => setSelectedRecipe(null)}>
              <X size={24} />
            </button>

            <div className="drawer-header">
              <span className="drawer-category">Recipe Details</span>
              <h2>{selectedRecipe.title}</h2>
              <p>{selectedRecipe.description}</p>
            </div>

            <div className="drawer-body">
              <div className="drawer-section">
                <h3><CheckCircle2 size={20} /> Ingredients</h3>
                <ul className="drawer-ingredients-list">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>

              <div className="drawer-section">
                <h3><ChefHat size={20} /> Step-by-Step</h3>
                <ol className="drawer-steps-list">
                  {selectedRecipe.steps.map((step, i) => (
                    <li key={i}>
                      <span className="step-number">{i + 1}</span>
                      <span className="step-text">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="categories-footer">
        <p className="categories-quote">"Bringing the Art of Japanese Cuisine to Your Kitchen."</p>
        <div className="categories-footer-links">
          <a href="#about">About us</a>
          <div className="categories-social">
            <span>Follow us</span>
            <div className="categories-social-icons">
              <a href="#facebook" aria-label="Facebook"><img src="/fblogo.webp" alt="" /></a>
              <a href="#instagram" aria-label="Instagram"><img src="/instalogo.jpg" alt="" /></a>
              <a href="#twitter" aria-label="X"><img src="/twitterlogo.jpg" alt="" /></a>
            </div>
          </div>
          <a href="#contact">Contact us</a>
        </div>
      </footer>
    </div>
  );
};

export default Categories;