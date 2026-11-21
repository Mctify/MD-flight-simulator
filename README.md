# MDFS for Windows (PC only)

A single portable `MDFS.exe` (Electron)

I could not compile this where I made it (no Electron and no internet there), so build it with one of these. Nothing here has been run yet, so expect to fix a small thing if a step complains.

## Easiest: GitHub builds it for you

1. Create a new empty repository on github.com and upload everything in this folder, including the hidden `.github` folder.
2. Open the repository's Actions tab. "Build MDFS for Windows" starts by itself (press "Run workflow" if not). It takes a few minutes.
3. Open the finished run and download `MDFS-exe` from Artifacts. Unzip it and run `MDFS.exe`.

## Build on your own PC (Node 20+)

    npm install
    npm run dist       # result: dist/MDFS.exe
    npm start          # or run it without packaging

## Scenery

When a flight starts, the app streams satellite imagery (Sentinel-2 cloudless by default, or NASA Blue Marble) and real terrain elevation from public servers, so it needs an internet connection. Change this under OPTIONS. Without a connection it falls back to procedural scenery.

## Credits and licence

- Aircraft model: Lufthansa Cargo MD-11F by OUTPISTON (Sketchfab), CC BY-NC-SA 4.0. Keep the credit, share under the same licence, no commercial use.
- Imagery: Sentinel-2 cloudless - https://s2maps.eu by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2020), non-commercial licence. NASA GIBS: we acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science Data and Information System (ESDIS).
- Elevation: Terrain Tiles on AWS.
- Airport coordinates, elevations and runway headings are approximate (typed from memory), not for navigation.
