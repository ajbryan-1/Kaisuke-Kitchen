import { ArrowRight, Search, User } from 'lucide-react';
import logoImage from '../../logo.jpg';
import './ContactPage.css';
import './Categories.css';

interface Category {
  title: string;
  image?: string;
  imageAlt?: string;
  jp: string;
  simpleRecipes: {
    title: string;
    description: string;
  }[];
  description: string;
}

const categories: Category[] = [
  {
    title: 'Noodles',
    image: '/food/ramen/Shoyu_ramen.jpg',
    imageAlt: 'Bowl of Japanese shoyu ramen',
    jp: '麺類 (Menrui)',
    description:
      'Comforting ramen, udon, and soba dishes, from rich broths to refreshing chilled noodles.',
    simpleRecipes: [
      {
        title: 'Shoyu Ramen',
        description: 'Warm soy-seasoned broth, add cooked ramen noodles, and finish with egg and sliced scallions.',
      },
      {
        title: 'Yaki Udon',
        description: 'Stir-fry udon noodles with sliced vegetables and soy sauce until hot.',
      },
    ],
  },
  {
    title: 'Rice Bowls & Dishes',
    image: '/food/donburi/katsudon.jpg',
    imageAlt: 'Japanese katsudon rice bowl',
    jp: '丼物・ご飯 (Donburi & Gohan)',
    description:
      'Hearty rice bowls and home-style favorites topped with savory Japanese ingredients.',
    simpleRecipes: [
      {
        title: 'Oyakodon',
        description: 'Simmer chicken and onion with soy sauce, then gently cook with egg and serve over rice.',
      },
      {
        title: 'Onigiri',
        description: 'Shape warm seasoned rice around a filling such as salted salmon, then wrap with nori.',
      },
    ],
  },
  {
    title: 'Sushi & Sashimi',
    image: '/food/sushi/sashimi_platter.png',
    imageAlt: 'Assorted sashimi platter',
    jp: '寿司・刺身 (Sushi & Sashimi)',
    description:
      'Fresh sashimi, nigiri, and sushi rolls prepared with balanced flavors and care.',
    simpleRecipes: [
      {
        title: 'Kappa Maki',
        description: 'Roll sushi rice and cucumber in a sheet of nori, then slice into bite-sized pieces.',
      },
      {
        title: 'Inari Sushi',
        description: 'Fill seasoned tofu pockets with sushi rice for an easy, portable snack.',
      },
    ],
  },
  {
    title: 'Fried & Crispy',
    image: '/food/tempura/shrimp_tempura.webp',
    imageAlt: 'Crispy shrimp tempura',
    jp: '揚げ物 (Agemono)',
    description:
      'Golden, crunchy favorites including light tempura, tonkatsu, and Japanese karaage.',
    simpleRecipes: [
      {
        title: 'Shrimp Tempura',
        description: 'Dip shrimp in a light flour-and-egg batter and fry until crisp and golden.',
      },
      {
        title: 'Vegetable Tempura',
        description: 'Coat sliced vegetables in tempura batter and fry in small batches until crisp.',
      },
    ],
  },
  {
    title: 'Grilled & Skewered',
    image: '/food/yakitori/momo.png',
    imageAlt: 'Grilled yakitori chicken skewers',
    jp: '焼き物 (Yakimono)',
    description:
      'Smoky, char-grilled dishes and yakitori skewers brushed with savory sauces.',
    simpleRecipes: [
      {
        title: 'Yakitori',
        description: 'Thread chicken pieces onto skewers, grill until cooked, and brush with a soy-based glaze.',
      },
      {
        title: 'Salt-Grilled Salmon',
        description: 'Season salmon with salt and grill until flaky, then serve with lemon.',
      },
    ],
  },
  {
    title: 'Soups & Hot Pots',
    image: '/food/ramen/nabeyaki.png',
    imageAlt: 'Nabeyaki udon served in a hot pot',
    jp: '汁物・鍋 (Shirumono & Nabe)',
    description:
      'Warming bowls and simmering hot pots, from comforting miso soup to nabemono.',
    simpleRecipes: [
      {
        title: 'Miso Soup',
        description: 'Warm dashi, dissolve in miso, and add tofu and wakame.',
      },
      {
        title: 'Nabeyaki Udon',
        description: 'Simmer udon with vegetables in broth and top with an egg until just set.',
      },
    ],
  },
  {
    title: 'Small Plates & Appetizers',
    image: '/food/sushi/inari.png',
    imageAlt: 'Inari sushi served as a Japanese small plate',
    jp: 'おつまみ (Otsumami)',
    description:
      'Easy-to-share bites and izakaya-style starters for rounding out a Japanese meal.',
    simpleRecipes: [
      {
        title: 'Salted Edamame',
        description: 'Boil edamame until tender, drain, and toss with flaky salt.',
      },
      {
        title: 'Agedashi Tofu',
        description: 'Lightly coat tofu in potato starch, pan-fry until crisp, and serve with warm soy-dashi broth.',
      },
    ],
  },
  {
    title: 'Street Food & Snacks',
    image: '/food/tempura/Kakiage.jpg',
    imageAlt: 'Crispy kakiage vegetable fritter',
    jp: '屋台料理 (Yatai Ryori)',
    description:
      'Casual Japanese street-food favorites and savory snacks, perfect for sharing.',
    simpleRecipes: [
      {
        title: 'Kakiage',
        description: 'Toss sliced vegetables in a little tempura batter and fry until crisp.',
      },
      {
        title: 'Yaki Onigiri',
        description: 'Grill rice balls until lightly toasted, brushing with soy sauce near the end.',
      },
    ],
  },
  {
    title: 'Desserts & Sweets',
    jp: '甘味 (Kanmi)',
    description:
      'Traditional wagashi, matcha treats, chewy mochi, and other Japanese sweets.',
    simpleRecipes: [
      {
        title: 'Kinako Mochi',
        description: 'Warm mochi until soft, then dust with roasted soybean powder and a little sugar.',
      },
      {
        title: 'Matcha Milk Pudding',
        description: 'Whisk matcha into warm sweetened milk, stir in gelatin, and chill until set.',
      },
    ],
  },
];

const Categories: React.FC = () => (
  <div className="categories-page">
    <header className="header">
      <a className="logo" href="#home" aria-label="Kaiseki Kitchen home">
        <img src={logoImage} alt="" className="logo-img" />
        <span>Kaiseki kitchen</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#home">HOME</a>
        <a href="#categories" className="active" aria-current="page">
          CATEGORIES
        </a>
        <a href="#contact">CONTACT</a>
        <a href="#about">ABOUT</a>
      </nav>

      <div className="header-actions">
        <div className="search-bar" aria-hidden="true">
          <Search size={16} className="search-icon" />
        </div>
        <div className="user-icon" aria-hidden="true">
          <User size={18} />
        </div>
      </div>
    </header>

    <main className="categories-main">
      <section className="categories-intro" aria-labelledby="categories-title">
        <p className="categories-eyebrow">KAISEKI KITCHEN</p>
        <h1 id="categories-title">Explore Categories</h1>
        <p className="categories-subtitle">
          Find your next favorite from the many flavors of Japanese cuisine.
        </p>
      </section>

      <section className="categories-grid" aria-label="Recipe categories">
        {categories.map((category) => (
          <article className="category-card" key={category.title}>
            {category.image ? (
              <div className="category-card-image">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  loading="lazy"
                />
              </div>
            ) : (
              <div
                className="category-card-image category-card-image--placeholder"
                role="img"
                aria-label="No dessert photo is available yet"
              >
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
              <details className="category-recipes">
                <summary className="category-explore">
                  Explore recipes <ArrowRight size={15} aria-hidden="true" />
                </summary>
                <ul className="category-recipe-list">
                  {category.simpleRecipes.map((recipe) => (
                    <li key={recipe.title}>
                      <h3>{recipe.title}</h3>
                      <p>{recipe.description}</p>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </article>
        ))}
      </section>
    </main>

    <footer className="categories-footer">
      <p className="categories-quote">
        "Bringing the Art of Japanese Cuisine to Your Kitchen."
      </p>
      <div className="categories-footer-links">
        <a href="#about">About us</a>
        <div className="categories-social">
          <span>Follow us</span>
          <div className="categories-social-icons">
            <a href="#facebook" aria-label="Facebook">
              <img src="/fblogo.webp" alt="" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <img src="/instalogo.jpg" alt="" />
            </a>
            <a href="#twitter" aria-label="X">
              <img src="/twitterlogo.jpg" alt="" />
            </a>
          </div>
        </div>
        <a href="#contact">Contact us</a>
      </div>
    </footer>
  </div>
);

export default Categories;
