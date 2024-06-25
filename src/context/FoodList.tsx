export const FoodList = [
  {
    key: 'mcdonalds',
    data: [
      {
        name: '2 Sanduíches + Batata Média',
        description:
          'Dois hambúrgueres, queijo, alface, cebola, picles e especial molho em pão de gergelim, acompanhado de batatas fritas médias.',
        cost: 'R$ 39,90',
        image: require('../assets/images/stores/mcdonalds/2-lanches.png'),
      },
      {
        name: 'Duplo Quarterão',
        description:
          'Two beef patties with cheese, onions, pickles, mustard, and ketchup on a sesame seed bun.',
        cost: 'R$ 18,50',
        image: require('../assets/images/stores/mcdonalds/duplo-quarteirao.png'),
      },
      {
        name: 'Duplo Cheddar McMelt',
        description:
          'Two beef patties with melted cheddar cheese, caramelized onions, and shoyu sauce on a dark bun.',
        cost: 'R$ 20,90',
        image: require('../assets/images/stores/mcdonalds/duplo-cheddar-mcmelt.png'),
      },
      {
        name: 'Duplo Burger Bacon',
        description:
          'Two beef patties with bacon, cheese, ketchup, and mustard on a sesame seed bun.',
        cost: 'R$ 19,90',
        image: require('../assets/images/stores/mcdonalds/duplo-burger-bacon.png'),
      },
      {
        name: 'Hamburger CarneQueijo',
        description:
          'A beef patty with cheese, pickles, onions, ketchup, and mustard on a regular bun.',
        cost: 'R$ 9,90',
        image: require('../assets/images/stores/mcdonalds/carne-queijo.jpg'),
      },
    ],
  },
  {
    key: 'burgerking',
    data: [
      {
        name: 'Whopper',
        description:
          'A flame-grilled beef patty with tomatoes, lettuce, mayonnaise, ketchup, pickles, and onions on a soft sesame seed bun.',
        cost: 'R$ 22,90',
        image: null,
        //image: require('../assets/images/stores/burgerking/whopper.png'),
      },
      {
        name: 'Cheeseburger',
        description:
          'A flame-grilled beef patty with cheese, pickles, mustard, and ketchup on a soft sesame seed bun.',
        cost: 'R$ 12,50',
        image: null,
        //image: require('../assets/images/stores/burgerking/cheeseburger.png'),
      },
      {
        name: 'Sanduíche de Frango',
        description:
          'A crispy chicken fillet with lettuce and mayonnaise on a soft sesame seed bun.',
        cost: 'R$ 15,90',
        image: null,
        //image: require('../assets/images/stores/burgerking/sanduiche-de-frango.png'),
      },
      {
        name: 'Veggie Burger',
        description:
          'A vegetarian patty with fresh lettuce, tomatoes, mayonnaise, ketchup, pickles, and onions on a toasted sesame seed bun.',
        cost: 'R$ 18,90',
        image: null,
        //image: require('../assets/images/stores/burgerking/veggie-burger.png'),
      },
      {
        name: 'Batata Frita Média',
        description: 'Crispy golden fries seasoned with salt.',
        cost: 'R$ 9,90',
        image: null,
        //image: require('../assets/images/stores/burgerking/batata-frita.png'),
      },
    ],
  },
  {
    key: 'subway',
    data: [
      {
        name: 'Frango Teriyaki',
        description:
          'Tender teriyaki-glazed chicken strips with your choice of fresh vegetables and sauces on freshly baked bread.',
        cost: 'R$ 16,90',
        image: null,
        //image: require('../assets/images/stores/subway/frango-teriyaki.png'),
      },
      {
        name: 'Italiano B.M.T.',
        description:
          'Genoa salami, spicy pepperoni, and Black Forest ham with your choice of fresh vegetables and condiments on freshly baked bread.',
        cost: 'R$ 18,50',
        //image: require('../assets/images/stores/subway/italiano-bmt.png'),
        image: null,
      },
      {
        name: 'Veggie Delite',
        description:
          'A variety of fresh vegetables and your choice of condiments served on freshly baked bread.',
        cost: 'R$ 14,90',
        image: null,
        //image: require('../assets/images/stores/subway/veggie-delite.png'),
      },
      {
        name: 'Peito de Peru',
        description:
          'Sliced turkey breast with your choice of fresh vegetables and condiments on freshly baked bread.',
        cost: 'R$ 17,90',
        image: null,
        //image: require('../assets/images/stores/subway/peito-de-peru.png'),
      },
      {
        name: 'Atum',
        description:
          'Flaked tuna mixed with creamy mayonnaise served with your choice of fresh vegetables and condiments on freshly baked bread.',
        cost: 'R$ 15,90',
        image: null,
        //image: require('../assets/images/stores/subway/atum.png'),
      },
    ],
  },
  {
    key: 'starbucks',
    data: [
      {
        name: 'Caffè Americano',
        description:
          'Espresso shots topped up with hot water for a rich and robust coffee experience.',
        cost: 'R$ 7,90',
        image: null,
        //image: require('../assets/images/stores/starbucks/caffe-americano.png'),
      },
      {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and a deep layer of foam.',
        cost: 'R$ 10,50',
        image: null,
        //image: require('../assets/images/stores/starbucks/cappuccino.png'),
      },
      {
        name: 'Latte',
        description:
          'Smooth espresso mixed with steamed milk and a light layer of foam.',
        cost: 'R$ 11,90',
        image: null,
        //image: require('../assets/images/stores/starbucks/latte.png'),
      },
      {
        name: 'Mocha',
        description:
          'Espresso combined with bittersweet mocha sauce and steamed milk, topped off with sweetened whipped cream.',
        cost: 'R$ 12,50',
        image: null,
        //image: require('../assets/images/stores/starbucks/mocha.png'),
      },
      {
        name: 'Caramel Macchiato',
        description:
          'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with caramel drizzle.',
        cost: 'R$ 13,90',
        image: null,
        //image: require('../assets/images/stores/starbucks/caramel-macchiato.png'),
      },
    ],
  },
  {
    key: 'kfc',
    data: [
      {
        name: 'Frango Receita Original',
        description:
          'Classic KFC chicken pieces, seasoned with Colonel Sanders secret recipe of 11 herbs and spices.',
        cost: 'R$ 18,90',
        image: null,
        //image: require('../assets/images/stores/kfc/frango-receita-original.png'),
      },
      {
        name: 'Tiras Crocantes',
        description: 'Crispy, tender strips of all-white meat chicken.',
        cost: 'R$ 16,90',
        image: null,
        //image: require('../assets/images/stores/kfc/tiras-crocantes.png'),
      },
      {
        name: 'Popcorn Chicken',
        description: 'Bite-sized, crispy chicken pieces, perfect for snacking.',
        cost: 'R$ 14,90',
        image: null,
        //image: require('../assets/images/stores/kfc/popcorn-chicken.png'),
      },
      {
        name: 'Sanduíche de Frango',
        description:
          'A juicy chicken fillet with lettuce and mayonnaise on a bun.',
        cost: 'R$ 15,90',
        image: null,
        //image: require('../assets/images/stores/kfc/sanduiche-de-frango.png'),
      },
      {
        name: 'Purê de Batatas',
        description: 'Smooth and creamy mashed potatoes with rich gravy.',
        cost: 'R$ 7,90',
        image: null,
        //image: require('../assets/images/stores/kfc/pure-de-batatas.png'),
      },
    ],
  },
  {
    key: 'dominos',
    data: [
      {
        name: 'Pizza de Pepperoni',
        description:
          'A generous portion of pepperoni on top of mozzarella cheese and tomato sauce.',
        cost: 'R$ 39,90',
        image: null,
        //image: require('../assets/images/stores/dominos/pizza-de-pepperoni.png'),
      },
      {
        name: 'Pizza Margherita',
        description:
          'Simple and classic with mozzarella cheese and tomato sauce, garnished with basil.',
        cost: 'R$ 35,90',
        image: null,
        //image: require('../assets/images/stores/dominos/pizza-margherita.png'),
      },
      {
        name: 'Pizza de Frango BBQ',
        description:
          'BBQ sauce topped with grilled chicken, onions, and mozzarella cheese.',
        cost: 'R$ 37,90',
        image: null,
        //image: require('../assets/images/stores/dominos/pizza-de-frango-bbq.png'),
      },
      {
        name: 'Pizza Veggie',
        description:
          'A mix of fresh vegetables and mozzarella cheese on a tomato base.',
        cost: 'R$ 36,90',
        image: null,
        //image: require('../assets/images/stores/dominos/pizza-veggie.png'),
      },
      {
        name: 'Pão de Alho',
        description: 'Garlic breadsticks sprinkled with seasoning.',
        cost: 'R$ 8,90',
        image: null,
        //image: require('../assets/images/stores/dominos/pao-de-alho.png'),
      },
    ],
  },
  {
    key: 'pizzahut',
    data: [
      {
        name: 'Pepperoni Pizza',
        description:
          'Classic pizza topped with generous slices of pepperoni and mozzarella cheese.',
        cost: 'R$ 34,90',
        image: null,
        // image: require('../assets/images/stores/pizzahut/pepperoni-pizza.png'),
      },
      {
        name: 'Margherita Pizza',
        description:
          'Traditional pizza with tomato sauce, fresh mozzarella cheese, and basil leaves.',
        cost: 'R$ 30,90',
        image: null,
        // image: require('../assets/images/stores/pizzahut/margherita-pizza.png'),
      },
      {
        name: 'BBQ Chicken Pizza',
        description:
          'Pizza topped with BBQ sauce, grilled chicken, onions, and mozzarella cheese.',
        cost: 'R$ 32,90',
        image: null,
        // image: require('../assets/images/stores/pizzahut/bbq-chicken-pizza.png'),
      },
      {
        name: 'Veggie Supreme Pizza',
        description:
          'Pizza loaded with fresh vegetables like bell peppers, onions, olives, and mushrooms.',
        cost: 'R$ 31,90',
        image: null,
        // image: require('../assets/images/stores/pizzahut/veggie-supreme-pizza.png'),
      },
      {
        name: 'Garlic Breadsticks',
        description:
          'Warm breadsticks topped with garlic butter and Parmesan cheese.',
        cost: 'R$ 8,90',
        image: null,
      },
    ],
  },
];
