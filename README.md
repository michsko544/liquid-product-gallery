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

Section is called `Top Products Slider`.

You can change the source of slider data in two ways:
- use specific `Collection`
- use `Product tag`.
  
When you select the `Product tag` in customizer then slider will take all collections of current product and will search for all products with specified tag. If some product is in multiple collections then it will be deduplicated.

The rating of the product is editable in the metafields of the product (`custom.rating`).

Available customizer settings:
![Slider settings](https://i.ibb.co/LrX0Lmm/Zrzut-ekranu-2024-05-19-o-19-42-15.jpg)


