// ============================================================================
// Gallery data for the Photography section.
// This file is managed by the Photo Manager tool (photo-manager.html) — you can
// edit it by hand too, but the tool handles uploading files to the right
// folder and keeping this file's syntax valid.
//
// CATEGORIES: each entry becomes a filter tab on the site (in this order,
// after "All"). To add a new gallery, just add a category here — no other
// file needs to change.
// ============================================================================
const categories = [
  { key: "australia", label: "Australia" },
  { key: "malta", label: "Malta" },
  { key: "mexico", label: "Mexico" },
  { key: "others", label: "Other" }
];

// PHOTOS: each entry is one image.
//   file        - path to the image, relative to the site root
//   type        - "local" for files in /Pictures, or "crop"/"fit" for the
//                  legacy wsimg.com-hosted photos
//   category    - must match a "key" from categories above
//   caption     - short title shown on the gallery thumbnail
//   description - longer description used for image alt text (accessibility + SEO)
const photos = [
{"file": "Pictures/Australia/wynyard-construction-site.png", "type": "local", "category": "australia", "caption": "Wynyard Metro - Construction Site - Sydney", "description": "Metro Construction Site at Wynyard, Sydney CBD"},
{"file": "1000042844.jpg", "type": "crop", "category": "australia", "caption": "Crown Sydney, Barangaroo", "description": "Crown Sydney tower in Barangaroo, Sydney, Australia"},
{"file": "1000040101.jpg", "type": "crop", "category": "australia", "caption": "Sydney Harbour Bridge", "description": "Sydney Harbour Bridge, Sydney, Australia"},
{"file": "1000040062.jpg", "type": "fit", "category": "australia", "caption": "Sydney Opera House at Sunset", "description": "Sydney Opera House at sunset, Sydney, Australia"},
{"file": "1000029159.jpg", "type": "crop", "category": "australia", "caption": "Sydney Light Rail", "description": "Sydney Light Rail Sydney, Australia"},
{"file": "20200117_183257.jpg", "type": "crop", "category": "australia", "caption": "Sydney Light Rail", "description": "A Sydney Light Rail, Sydney, Australia"},
{"file": "1000040097.jpg", "type": "crop", "category": "australia", "caption": "VH-TCN, Channel 9 Helicopter", "description": "VH-TCN, the Channel 9 news helicopter, over Sydney, Australia"},
{"file": "1000040063.jpg", "type": "fit", "category": "australia", "caption": "Brisbane", "description": "Brisbane"},
{"file": "1000046291.jpg", "type": "crop", "category": "australia", "caption": "Barangaroo, Sydney", "description": "Barangaroo, Sydney"},
{"file": "Pictures/Sydney/10310668_10155619459655542_4635549900128185290_n.jpg", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/425911_10151369836655542_528460851_n.jpg", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/6361_10152328234240542_1454540521_n.jpg", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/1102557_10153080668590542_1623327941_o.jpg", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/733743_10152680721175542_4213615_n.jpg", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/78004_10152642755155542_228539177_o.jpg", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true%20(8).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true.webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true%20(1).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true%20(2).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(1).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(3).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true%20(6).webp", "type": "local", "category": "australia", "caption": "VH-TCN, Channel 9 Helicopter", "description": "VH-TCN, Channel 9 Helicopter"},
{"file": "Pictures/Sydney/rs=w_600,cg_true%20(7).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true%20(9).webp", "type": "local", "category": "australia", "caption": "VH-TCN, Channel 9 Helicopter", "description": "VH-TCN, Channel 9 Helicopter"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(4).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(5).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(6).webp", "type": "local", "category": "australia", "caption": "VH-TCN, Channel 9 Helicopter", "description": "VH-TCN, Channel 9 Helicopter"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(7).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(8).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(9).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(10).webp", "type": "local", "category": "australia", "caption": "Luna Park, Sydney", "description": "Luna Park, Sydney"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(11).webp", "type": "local", "category": "australia", "caption": "Luna Park, Sydney", "description": "Luna Park, Sydney"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(12).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(13).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true%20(10).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(15).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(16).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(18).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true%20(11).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(19).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(20).webp", "type": "local", "category": "australia", "caption": "Ettalong, NSW", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(21).webp", "type": "local", "category": "australia", "caption": "Sydney", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_600,cg_true,m%20(22).webp", "type": "local", "category": "australia", "caption": "Sydney CBD", "description": "Photograph from Sydney, Australia"},
{"file": "Pictures/Sydney/rs=w_1280,h_855.webp", "type": "local", "category": "australia", "caption": "Cribs", "description": "Cribs at Circular Quay"},
{"file": "Pictures/Sydney/rs=w_1280,h_855%20(1).webp", "type": "local", "category": "australia", "caption": "Angel Place, Sydney", "description": "Angel Place, Sydney"},
{"file": "Pictures/Sydney/rs=w_1280,h_853.webp", "type": "local", "category": "australia", "caption": "Sydney Opera House", "description": "Sydney Opera House"},
{"file": "Pictures/Sydney/rs=w_1160,h_1160.webp", "type": "local", "category": "australia", "caption": "Townhall Crossing, Sydney CBD", "description": "Townhall Crossing, Sydney CBD"},
{"file": "Pictures/Malta/malta-01.webp", "type": "local", "category": "malta", "caption": "Bażilika Tal-Madonna Ta' Pinu Mill Gharb - Gozo ", "description": "Bażilika Tal-Madonna Ta' Pinu Mill Gharb - Gozo "},
{"file": "Pictures/Malta/malta-02.webp", "type": "local", "category": "malta", "caption": "Malta", "description": "Malta"},
{"file": "Pictures/Malta/malta-03.webp", "type": "local", "category": "malta", "caption": "Cittadella - Gozo", "description": "Cittadella - Gozo"},
{"file": "Pictures/Malta/malta-04.webp", "type": "local", "category": "malta", "caption": "Blue Lagoon - Comino Island", "description": "Blue Lagoon - Comino Island"},
{"file": "Pictures/Malta/malta-05.webp", "type": "local", "category": "malta", "caption": "Valletta - Malta", "description": "Valletta - Malta"},
{"file": "Pictures/Malta/malta-06.webp", "type": "local", "category": "malta", "caption": "Malta  fields", "description": "Malta"},
{"file": "Pictures/Malta/malta-07.webp", "type": "local", "category": "malta", "caption": "Mdina - Malta", "description": "Mdina - Malta"},
{"file": "Pictures/Malta/malta-08.webp", "type": "local", "category": "malta", "caption": "Malta", "description": "Malta"},
{"file": "Pictures/Malta/malta-09.webp", "type": "local", "category": "malta", "caption": "Malta", "description": "Malta"},
{"file": "Pictures/Malta/malta-10.webp", "type": "local", "category": "malta", "caption": "Malta", "description": "Malta"},
{"file": "Pictures/Malta/malta-11.webp", "type": "local", "category": "malta", "caption": "Malta", "description": "Malta"},
{"file": "Pictures/Malta/malta-12.webp", "type": "local", "category": "malta", "caption": "Malta", "description": "Malta"},
{"file": "Pictures/Malta/malta-13.webp", "type": "local", "category": "malta", "caption": "Malta", "description": "Malta"},
{"file": "Pictures/Malta/malta-14.webp", "type": "local", "category": "malta", "caption": "Malta", "description": "Malta"},
{"file": "Pictures/Malta/malta-15.webp", "type": "local", "category": "malta", "caption": "Malta", "description": "Malta"},
{"file": "Pictures/Malta/malta-16.webp", "type": "local", "category": "malta", "caption": "Malta", "description": "Malta"},
{"file": "Pictures/Mexico/mexico-01.webp", "type": "local", "category": "mexico", "caption": "Chicxulub, Yuc, Mexico", "description": "Chicxulub, Yuc, Mexico"},
{"file": "Pictures/Mexico/mexico-02.webp", "type": "local", "category": "mexico", "caption": "Chichen-Itza, Mexico", "description": "Chichen-Itza, Mexico"},
{"file": "Pictures/Mexico/mexico-03.webp", "type": "local", "category": "mexico", "caption": "Yuc, Mexico", "description": "Yuc, Mexico"},
{"file": "Pictures/Mexico/mexico-04.webp", "type": "local", "category": "mexico", "caption": "Mexico", "description": "AICM"},
{"file": "Pictures/Mexico/mexico-05.webp", "type": "local", "category": "mexico", "caption": "Mexico City, Aquarium", "description": "Mexico"},
{"file": "Pictures/Mexico/mexico-06.webp", "type": "local", "category": "mexico", "caption": "Chichen-Itza, Mexico", "description": "Mexico"},
{"file": "Pictures/Mexico/mexico-07.webp", "type": "local", "category": "mexico", "caption": "Basilica de Guadalupe, Mexico", "description": "Basilica de Guadalupe, Mexico"},
{"file": "Pictures/Mexico/mexico-08.webp", "type": "local", "category": "mexico", "caption": "Reforma, Mexico", "description": "Reforma, Mexico"},
{"file": "Pictures/Mexico/mexico-09.webp", "type": "local", "category": "mexico", "caption": "Chapultepec - Mexico", "description": "Chapultepec - Mexico"},
{"file": "Pictures/Mexico/mexico-10.webp", "type": "local", "category": "mexico", "caption": "Teotihuacan, Mexico", "description": "Teotihuacan, Mexico"},
{"file": "Pictures/Mexico/mexico-11.webp", "type": "local", "category": "mexico", "caption": "Chicxulub, Yuc, Mexico", "description": "Chicxulub, Yuc, Mexico"},
{"file": "Pictures/Mexico/mexico-12.webp", "type": "local", "category": "mexico", "caption": "Flamingos, Mexico", "description": "Photograph from Mexico"},
{"file": "Pictures/Mexico/mexico-13.webp", "type": "local", "category": "mexico", "caption": "Chicxulub, Yuc, Mexico", "description": "Chicxulub, Yuc, Mexico"},
{"file": "Pictures/Mexico/mexico-14.webp", "type": "local", "category": "mexico", "caption": "Chicxulub, Yuc, Mexico", "description": "Chicxulub, Yuc, Mexico"},
{"file": "Pictures/Mexico/mexico-15.webp", "type": "local", "category": "mexico", "caption": "Merida, Yuc, Mexico", "description": "Merida, Yuc, Mexico"},
{"file": "Pictures/Mexico/mexico-16.webp", "type": "local", "category": "mexico", "caption": "Merida, Yuc, Mexico", "description": "Merida, Yuc, Mexico"},
{"file": "Pictures/Mexico/mexico-17.webp", "type": "local", "category": "mexico", "caption": "Merida, Yuc, Mexico", "description": "Merida, Yuc, Mexico"},
{"file": "Pictures/Others/Seattle,%20WA.jpg", "type": "local", "category": "others", "caption": "Seattle, WA", "description": "Seattle, Washington, United States"},
{"file": "Pictures/Mexico/mexico-18.webp", "type": "local", "category": "mexico", "caption": "Basilica de Guadalupe, Mexico", "description": "Basilica de Guadalupe, Mexico"}
];
