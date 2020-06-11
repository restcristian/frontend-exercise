import React, { useState, useRef } from "react";
import { Container, Row, Col } from "../../components/mod/FlexGrid";
import { PlusIcon } from "../../components/ui/Icon";
import Button from "../../components/ui/Button";
import styles from "./Recipes.module.scss";
import { getPreparationTime } from "../../utils/utils";
import Rate from "../../components/ui/Rate";

const Recipes = () => {
  const initialRecipes = [
    {
      calories: "516 kcal",
      carbos: "47 g",
      description:
        "There\u2019s nothing like the simple things in life - the smell of freshly cut grass, sitting outside on a nice sunny day, spending time with friends and family. Well here is a recipe that delivers simple culinary pleasures - some nice fresh fish with a crispy crust, crunchy potato wedges and some delightfully sweet sugar snap peas flavoured with cooling mint. Slip into something comfortable and relax into a delicious dinner!",
      difficulty: 0,
      fats: "8 g",
      favorites: 1,
      headline: "with Sweet Potato Wedges and Minted Snap Peas",
      id: "533143aaff604d567f8b4571",
      image:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_600/hellofresh_s3/image/5ecd4d622df2ac54db00c6d8-1d19611e.jpg",
      ingredients: [
        "375g Sweet Potatoes",
        "1 Tsp Paprika",
        "2 Tbsps Parmesan Cheese",
        "1 Lemon",
        "A Few Sprigs Thyme",
        "25g Panko Breadcrumbs",
        "1 Tbsp Butter",
        "2 Cod Fillets",
        "150g Sugar Snap Peas",
        "A Few Sprigs Mint",
        "75ml Sour Cream",
      ],
      name: "Crispy Fish Goujons ",
      proteins: "43 g",
      rating: 5,
      thumb:
        "https://d3hvwccx09j84u.cloudfront.net/thumb/image/533143aaff604d567f8b4571.jpg",
      time: "PT35M",
    },
    {
      calories: "397 kcal",
      carbos: "26 g",
      description:
        "Close your eyes, open up your Ras El Hanout and inhale deeply. You are no longer standing in your kitchen. Around you are the sounds of a bustling market. Robed men sell ornate carpets and a camel nibbles affectionately at your ear.  OK, we\u2019re pretty sure Paul McKenna\u2019s job is safe for now, but get cooking this recipe and take dinnertime on a magic carpet ride to Casablanca! Our tip for this recipe is to take your meat out of the fridge at least 30 minutes before dinner which will allow you to cook it more evenly.",
      difficulty: 0,
      fats: "5 g",
      favorites: 13,
      headline: "with Spinach and Lemon Couscous",
      id: "53314247ff604d44808b4569",
      image:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_600/hellofresh_s3/image/5ecd4d622df2ac54db00c6d8-1d19611e.jpg",
      ingredients: [
        "1 Lemon",
        "1 Fillet Skirt Steak",
        "1 Tsp Ras El Hanout",
        "1 Clove Garlic",
        "1 Spring Onion",
        "1/2 Cup Carrot",
        "1 Red Pepper",
        "150g Couscous",
        "A Handful Baby Spinach Leaves",
        "4 Tbsps Coriander",
      ],
      name: "Moroccan Skirt Steak ",
      proteins: "31 g",
      rating: 4.3,
      thumb:
        "https://d3hvwccx09j84u.cloudfront.net/thumb/image/53314247ff604d44808b4569.jpg",
      time: "PT30M",
    },
    {
      calories: "458 kcal",
      carbos: "29 g",
      description:
        "World-renowned people generally all have one thing in common: a legacy. For Henry Ford it was the motorcar, for Thomas Edison it was the lightbulb. For our intern Simon, it was this lip-smackingly awesome Sea Bream. Taking the warm crunchiness of potatoes against the fresh southern asian flavours of fish with coriander, ginger and lime, it\u2019s the perfect dish for transporting your tastebuds. Don\u2019t let the smell of the fish sauce throw you - add it gradually to your sauce for a really authentic asian spin!",
      difficulty: 1,
      fats: "6 g",
      favorites: 9,
      headline: "with Tomato Concasse and Crispy Potatoes",
      id: "53314276ff604d28828b456b",
      image:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_600/hellofresh_s3/image/5ecd4d622df2ac54db00c6d8-1d19611e.jpg",
      ingredients: [
        "2 Fillets Sea Bream",
        "1 Lime",
        "A Few Tomatoes",
        "\u2153 Cup Onion",
        "2 Cloves Garlic",
        "1/2 Tsp Ginger",
        "1 Tbsp Fish Sauce",
        "2 Tbsp Coriander",
        "2 Cups New Potatoes",
      ],
      name: "Simple Sumptuous Sea Bream",
      proteins: "29 g",
      rating: 2.5,
      thumb:
        "https://d3hvwccx09j84u.cloudfront.net/thumb/image/53314276ff604d28828b456b.jpg",
      time: "PT35M",
    },
    {
      calories: "717 kcal",
      carbos: "44 g",
      description:
        "Nostalgia is a powerful thing. For some it\u2019s triggered by the smell of freshly cut grass, for others by the sound of a love song from their heady teenage years. For Head Chef Patrick it\u2019s all about Swiss Roll. A firm dinnertime favourite from his primary school years, we still see him go all misty eyed at the mere mention of it. We\u2019re pretty sure that was the inspiration behind this little number. Tonight, prepare to create a little nostalgia that the little \u2018uns will remember for years!",
      difficulty: 2,
      fats: "10 g",
      favorites: 1,
      headline: "with Roasted Rocket Potatoes",
      id: "533143bfff604d44808b456a",
      image:
        "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_600/hellofresh_s3/image/5ecd4d622df2ac54db00c6d8-1d19611e.jpg",
      ingredients: [
        "2 Chicken Breasts",
        "1 Ball Mozzarella",
        "2 Tbsps Pesto",
        "A Handful of New Potatoes",
        "1 Bunches of Rocket",
        "1 Onion",
      ],
      name: "Mozzarella and Pesto Roulades",
      proteins: "67 g",
      rating: 4.6,
      thumb:
        "https://d3hvwccx09j84u.cloudfront.net/thumb/image/533143bfff604d44808b456a.jpg",
      time: "PT35M",
    },
  ];
  const [recipes, setRecipes] = useState(initialRecipes);
  const recipeRefs = useRef([]);
  const loadRecipes = () => {
    console.log("recipies loaded");
  };

  const toggleRecipeExtrainfo = (recipeRef) => {
    recipeRef.classList.toggle(styles.openCard);
  };

  const renderRecipes = () => {
    return recipes.map((recipe, idx) => (
      <Col key={recipe.id} md={4} sm={6} xs={12}>
        <div
          className={styles.recipeCard}
          ref={(ref) => recipeRefs.current.push(ref)}
        >
          <div className={styles.recipeImageContainer}>
            <button
              className={styles.toggleButton}
              onClick={() => toggleRecipeExtrainfo(recipeRefs.current[idx])}
            >
              <PlusIcon />
            </button>
            <img
              className={styles.recipeImage}
              src={recipe.image}
              data-image={recipe.image}
              alt={recipe.headline}
            />
            <div className={styles.recipeExtaContent}>
              <div className={styles.recipeExtaContentWrapper}>
                <span>{recipe.calories}</span>
                <span>/</span>
                <span>{getPreparationTime(recipe.time)}</span>
              </div>
            </div>
          </div>
          <div className={styles.recipeContent}>
            <h3 className={styles.recipeName}>{recipe.name}</h3>
            <p className={styles.recipeHeadline}>{recipe.headline}</p>
            <Rate
              initialValue={recipe.rating}
              onRateChange={(value) => {
                const clonedRecipes = [...recipes];
                clonedRecipes[idx].rating = value;
                setRecipes(clonedRecipes);
              }}
            />
          </div>
        </div>
      </Col>
    ));
  };
  return (
    <div className={styles.recipesContainer}>
      <Container>
        <Row>
          {renderRecipes()}
          <Col xs={12} textAlign="center">
            <Button onClick={loadRecipes}>Load More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Recipes;
