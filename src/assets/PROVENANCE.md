# Provenance of shipped rasters and data

No raster on this site was generated. Every image is the organisers' own material, copied from the WordPress site it replaces (`https://krakonosuvcyklomaraton.cz/wp-content/uploads/…`) on 26 October 2026. Photographer credits come from the gallery pages of that site.

## photos/

| File | Original upload | Notes |
|---|---|---|
| hero-snezka.jpg | 2025/06/IMG_4253.jpg | 2025 gallery cover; hero poster under the YouTube video |
| sjezd-peloton.jpg | 2023/09/g431-BrychtaJan-Krakonosuv-cyklomaraton-20230617-101526-DSC-8823.jpg | Foto: Jan Brychta, 2023 |
| peloton-bouda.jpg | 2024/12/photo-pg-5938-.jpg | used by the training-camp article |
| horska-silnice.jpg | 2023/09/IMG_1490.jpg | old site's Open Graph image |
| lubawka-2026.jpg | 2026/06/721818634_1607852911341762_8218056396492715585_n.jpg | 2026 gallery cover, watermark Relacje Regionalne |
| stoupani.jpg | 2023/09/g403-IMG-0318.jpg | 2022 gallery cover |
| dvojice-les.jpg | 2023/09/g370-IMG-1879.jpg | 2021 gallery cover |
| peloton-dest.jpg | 2023/09/g339-krakonos65.jpg | 2020 gallery cover |
| peloton-mesto.jpg | 2023/09/g310-IMG-0366.jpg | 2019 gallery cover, watermark Miloš Šálek |
| turiste-u-trati.jpg | 2023/09/g231-IMG-2433.jpg | 2018 gallery cover |
| peloton-udoli.jpg | 2023/09/g174-IMG-0400.jpg | 2017 gallery cover |
| balik.jpg | 2023/09/g151-g106-IMA-6990.jpg | 2016 gallery cover |
| peloton-les.jpg | 2023/09/g146-g73-IMG-3733.jpg | 2015 gallery cover |
| zatacka.jpg | 2023/09/g145-g81-10623747-1551463771757148-7371024192070498123-o.jpg | 2014 gallery cover |
| hotel-krakonos.jpg | 2023/10/g44-HOTEL-KRAKONOS.jpg | accommodation page |

## news/

predstartovni.jpg (2024/06/dsc-38.jpg), casia.jpg (2026/02/WhatsApp-Image-2026-02-06-at-12.38.31-1-1.jpeg), kasper.jpg (2023/10/WhatsApp-Image-2023-10-30-at-08.38.31.jpeg), soustredeni.jpg (2024/12/photo-pg-5938-.jpg), colnago.jpg (2024/05/Colnago-V3Rs-2020-Neu-New-Test-Review-102.jpg), pujcovna-banner.jpg (2024/05/kcm-pujcovna-1200x628-banner-prodej.jpg), safe-1/2/3.png (2025/06/SAFE-1/2/3.png, SportHelp), voucher.png (2024/11/Screenshot-2024-11-19-at-16.24.40.png).

The three route-marking images in the 2024 pre-race article were hosted on `lh7-us.googleusercontent.com` and already returned 404 on the old site; they are not carried over.

## shop/, riders/, partners/, obce/

E-shop product photos (2023/11/…), the four rider portraits from the testimonials block (2023/09/Screenshot-2023-09-23-at-12.34.*.png), partner logos and municipal coats of arms, all from the same uploads folder. Three SVG partner logos (Ethanol Energy, Tufo, Královéhradecký kraj) had their `viewBox` cropped to the artwork; the drawing itself is unchanged.

## Brand (public/brand/)

kcm-casia.png (2026/03/kcm-casia.png), krakonos-white.png (2023/09/krakonos_white.png), kcm-logo-square.jpg (2023/09/KCM-logo-V-kopie.jpg). The favicon in `public/` is drawn from the long-route profile data.

## Data (src/data/)

- `routes.json`: 2026 routes shared on Mapy.com (`mapy.com/s/lufujuloce`, `mapy.com/s/jurotegada`), 100 elevation samples each as published by Mapy.com; place names reverse-geocoded from OpenStreetMap (Nominatim) and checked against the organisers' pre-race information.
- `splits-2026.json`: official 2026 results, SportSoft race 805, split times at Pomezní bouda and Pražská bouda. Windows for unmeasured places are linear interpolation between measured points and are labelled as such on the page.
