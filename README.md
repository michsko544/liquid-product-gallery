# Liquid Product Gallery

Project of product carousel using Swiper library.

Demo URL: https://weblovo-store.myshopify.com/products/the-collection-snowboard-hydrogen?preview_theme_id=142584676572

![Slider image](https://i.ibb.co/MDzHP3Y/Zrzut-ekranu-2024-05-19-o-19-37-50.jpg)

## Requirements

- Node - `^20`
- pnpm - `^8`
- Shopify CLI - `^3`

## Stack

- [Vite](https://vitejs.dev/)
- [Rollup](https://rollupjs.org/)
- [Scss](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Liquid](https://shopify.dev/docs/api/liquid)
- [Swiper](https://swiperjs.com/swiper-api)

## Getting started

1. `nvm use`
2. `pnpm i`
3. `pnpm theme:dev` (Before it you can update `--store` parameter)
4. `pnpm start` (Second terminal session)
5. `pnpm lint` or `pnpm lint:fix`

## Docs

### General

Section is called `Top Products Slider`.

You can change the source of slider data in two ways:
- use specific `Collection`
- use `Product tag`.
  
The rating of each product is editable in the metafields of the product (`custom.rating`).

### Customizer Settings

Available customizer settings:
- `Slider title` - title of the section.
- `Slider limit` - max quantity of products in slider (range 1..30).
- `Display source` - source of products in the slider.
- `Source product tag` - when `Product tag` is selected, then slider will take all collections of current product and will search for all products with specified tag. If some product is in multiple collections then it will be deduplicated. Currently opened product won't be shown in the slider.
- `Source collection` - when `Custom collection` is selected, then slider will take provided collection.
- `No products message` - text display where there is no products to display.
- `Button link` - link where customer will be redirected after clicking button.
- `Button text` - text message on the button.
  
![Slider settings](https://i.ibb.co/LrX0Lmm/Zrzut-ekranu-2024-05-19-o-19-42-15.jpg)

### Swiper integration

Swiper is installed as an npm package and bundled into the assets directory using `Vite` and `Rollup`. The bundle is in ESM format, which is [supported by modern browsers](https://caniuse.com/?search=esm), allowing the script to be loaded using `type="module"`. This eliminates the need to wait for a separate Swiper script to load.

```js
{
  direction: 'horizontal',
  loop: false,
  spaceBetween: 16, // Gap according to the mobile design
  slidesPerView: 1.3, // Slides width according to the mobile design

  speed: 100, // Duration of transition between slides (in ms)
  grabCursor: true, // This option may a little improve desktop usability. If true, user will see the "grab" cursor when hover on Swiper
  freeMode: true, // Enables Swiper freemode

  breakpoints: {
    500: {
      slidesPerView: 2.3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3.3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3.3,
      spaceBetween: 24,
      speed: 200,
    },
    1240: {
      slidesPerView: 4.3,
      spaceBetween: 24,
    },
  },
}
```


