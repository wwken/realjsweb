# Changelog

## 1.0.0 (2024-05-12)


### ⚠ BREAKING CHANGES

* **map:** Introduction of map instance caching needed a change to the DOM-Structure produced by the map component (added a div-element owned by the Map component to contain the map instance).
* **map:** The type passed to the `onProjectionChange` is changed from `MapCameraChangedEvent` to `MapEvent`, so there are no longer camera-props available for this event
* removed the `useStreetViewPanorama()` and `useDirectionsService()` hooks.
* The behaviour of the props controlling camera parameters (center, zoom, heading and tilt) changed. Unless you are using controlled props, you have to change the prop names from e.g. `center` to `defaultCenter` (the same goes for `zoom`, `heading` and `tilt`).
* removed MapProps.onLoadMap
* loading multiple libraries at once is no longer supported, changed the return type of useMapsLibrary.

### Features

* add example for drawing tools ([#220](https://github.com/wwken/realjsweb/issues/220)) ([75e91c4](https://github.com/wwken/realjsweb/commit/75e91c4a3b3893ac3d97b5689682bcca5262aac9))
* add new prop InfoWindow.shouldFocus ([#254](https://github.com/wwken/realjsweb/issues/254)) ([c83ea37](https://github.com/wwken/realjsweb/commit/c83ea375295699ed4e3c3a4a6f097cad1a4aca7d))
* add solution-channel parameter ([#334](https://github.com/wwken/realjsweb/issues/334)) ([f93e43e](https://github.com/wwken/realjsweb/commit/f93e43ee444a86dbc1b594d0c256229e6d207957))
* **advanced-marker:** add style prop to add styles to content-element ([#337](https://github.com/wwken/realjsweb/issues/337)) ([e942fb5](https://github.com/wwken/realjsweb/commit/e942fb5f5543a0a27e9987ee4324825958f08fdf))
* **advanced-marker:** add support for `clickable` option ([#341](https://github.com/wwken/realjsweb/issues/341)) ([ca96e54](https://github.com/wwken/realjsweb/commit/ca96e540a2117f7437745e8e1f71f83ef6c04e25))
* Allow &lt;Pin&gt; glyphs to be passed as children (close [#98](https://github.com/wwken/realjsweb/issues/98)) ([#99](https://github.com/wwken/realjsweb/issues/99)) ([6374453](https://github.com/wwken/realjsweb/commit/637445313c8c9364cbf1f32346d3438fc0589d74))
* better handling for missing map configuration ([#308](https://github.com/wwken/realjsweb/issues/308)) ([b318d67](https://github.com/wwken/realjsweb/commit/b318d676088e6f0ef787ffa911c552a12ecb4895))
* cleanup map, remove onLoadMap prop ([d5e7dfd](https://github.com/wwken/realjsweb/commit/d5e7dfdf74d76395ffbc1bcd2afda62a12eb7e57))
* handle API-key errors in map-component ([#165](https://github.com/wwken/realjsweb/issues/165)) ([26ccc15](https://github.com/wwken/realjsweb/commit/26ccc15d640346ce71157d387fbc56720234fa4c))
* implement dynamic library loading ([f71c158](https://github.com/wwken/realjsweb/commit/f71c158b356176bdbaaef7afa6c3d1852021d960))
* implement props for all map-events with custom MapEvent type ([820a301](https://github.com/wwken/realjsweb/commit/820a301e4a30e2b7bbbe7c82c69675f9c410813e))
* **infowindow:** add `className` and `style` props ([92854c9](https://github.com/wwken/realjsweb/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))
* **infowindow:** add missing options and events ([92854c9](https://github.com/wwken/realjsweb/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))
* **infowindow:** InfoWindow overhaul ([#335](https://github.com/wwken/realjsweb/issues/335)) ([92854c9](https://github.com/wwken/realjsweb/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))
* **map:** implement initial version of map-instance caching ([#349](https://github.com/wwken/realjsweb/issues/349)) ([4a6e83a](https://github.com/wwken/realjsweb/commit/4a6e83a26f06131baac288e3474d0e3163715f92))
* new MapControl component ([#51](https://github.com/wwken/realjsweb/issues/51)) ([7eb49ed](https://github.com/wwken/realjsweb/commit/7eb49ed55eb548c342f83bcdbf9dc655655bafe7))
* restore map state when changing mapId ([#213](https://github.com/wwken/realjsweb/issues/213)) ([0db363f](https://github.com/wwken/realjsweb/commit/0db363f9c0291135b31ac387d4513bbaf652517a))
* standalone examples (CodeSandbox) ([#48](https://github.com/wwken/realjsweb/issues/48)) ([959c6e3](https://github.com/wwken/realjsweb/commit/959c6e3d57d896d4f76640e01b3ad0a33dea3fae))
* update map viewport when props are changed ([0b1d800](https://github.com/wwken/realjsweb/commit/0b1d800dc5e4b9bf0b1ddb42b9fed392b23b8dae))
* useMapsLibrary returns API object instead of boolean ([#26](https://github.com/wwken/realjsweb/issues/26)) ([a3aa4c5](https://github.com/wwken/realjsweb/commit/a3aa4c5e10228003206c8de3305f857df50d73d1))


### Bug Fixes

* add `loading=async` to maps API url ([cb1336f](https://github.com/wwken/realjsweb/commit/cb1336fc97dda8b3ad99c3f9a9a560cf8186056b))
* add map camera state tracking ([#84](https://github.com/wwken/realjsweb/issues/84)) ([1dc1584](https://github.com/wwken/realjsweb/commit/1dc158436c4ffde60548486da5410b46e989fc5b))
* add types to package exports ([#62](https://github.com/wwken/realjsweb/issues/62)) ([1ab493a](https://github.com/wwken/realjsweb/commit/1ab493a71ddaeff3b31caec10be1fd4728d51362))
* **advanced-marker:** remove content element in cleanup ([#351](https://github.com/wwken/realjsweb/issues/351)) ([128df87](https://github.com/wwken/realjsweb/commit/128df8730b7e1549e530a108192e7bae0699f199))
* allow AdvancedMarker to accept space-separated multiple class names ([#143](https://github.com/wwken/realjsweb/issues/143)) ([eab53e2](https://github.com/wwken/realjsweb/commit/eab53e2ffa69325fb927b16d59f6aa7faa589a49))
* api-loader didn't call callback on repeat load calls ([743878a](https://github.com/wwken/realjsweb/commit/743878a33abe2b0fb6bfe96377df07066536e51e))
* avoid re-render on every importLibrary() call ([#135](https://github.com/wwken/realjsweb/issues/135)) ([32b5894](https://github.com/wwken/realjsweb/commit/32b5894518a22793c236bcab33291f25b48f7367))
* **docs:** use correct spelling of JavaScript ([#312](https://github.com/wwken/realjsweb/issues/312)) ([f38d3c4](https://github.com/wwken/realjsweb/commit/f38d3c4004663fd1850c00dca7ddfb7e92b8d5cf))
* don't use potentially unreliable addListener functions ([#158](https://github.com/wwken/realjsweb/issues/158)) ([7309efa](https://github.com/wwken/realjsweb/commit/7309efa1db8b392ebe2840e5d527a92419c9fc2a))
* empty commit to trigger release-please ([b04a942](https://github.com/wwken/realjsweb/commit/b04a9421fc290c3ca6eacc02391726beab4bba4b))
* export api-loading-status types ([#231](https://github.com/wwken/realjsweb/issues/231)) ([9695034](https://github.com/wwken/realjsweb/commit/9695034d3c51936c2c701b7fb8be4a864f349c3e)), closes [#230](https://github.com/wwken/realjsweb/issues/230)
* export event-types ([#167](https://github.com/wwken/realjsweb/issues/167)) ([cdd6b72](https://github.com/wwken/realjsweb/commit/cdd6b72f848bf5b54618862788e1a3a221fcdce1))
* export type properly ([#170](https://github.com/wwken/realjsweb/issues/170)) ([e561031](https://github.com/wwken/realjsweb/commit/e56103149f15977ae0e7f62dd359cd3759b71fc9))
* infowindow double rendering and eslint warnings ([#185](https://github.com/wwken/realjsweb/issues/185)) ([404cc06](https://github.com/wwken/realjsweb/commit/404cc06253a92f120f97f72179949a8f4c0fc87b))
* InfoWindow.shouldFocus doesn't work with false as value ([#278](https://github.com/wwken/realjsweb/issues/278)) ([2f4b508](https://github.com/wwken/realjsweb/commit/2f4b508a3da87f778496043dc7d5b40f47837d1f))
* **infowindow:** add missing cleanup for infowindow ([92854c9](https://github.com/wwken/realjsweb/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))
* **infowindow:** better dependency checks, using `useDeepCompareEffect` where needed ([92854c9](https://github.com/wwken/realjsweb/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))
* **infowindow:** removed unneeded dependency in infowindow hooks ([92854c9](https://github.com/wwken/realjsweb/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))
* map controls crashing when invalid key is provided ([#290](https://github.com/wwken/realjsweb/issues/290)) ([5052dfb](https://github.com/wwken/realjsweb/commit/5052dfbf3735ff07319b7bd7108ae9448b0c2840))
* **map:** (un)register map instance without id ([c4c443c](https://github.com/wwken/realjsweb/commit/c4c443c3166b4950a7e3f798132f254e6f8c5fa6))
* **map:** change event-type of projectionChanged event to MapEvent ([#346](https://github.com/wwken/realjsweb/issues/346)) ([83f9309](https://github.com/wwken/realjsweb/commit/83f93091c858663b0183dd62bdc212a246013072))
* **map:** fix changing the map-id ([d97cae9](https://github.com/wwken/realjsweb/commit/d97cae9ded0de30604e543d78341984cb61de942))
* **map:** set container position to relative ([#356](https://github.com/wwken/realjsweb/issues/356)) ([7fa2b71](https://github.com/wwken/realjsweb/commit/7fa2b711952a2472c409c38cd39edc1866cecbe3))
* **map:** set other container position to relative ([#357](https://github.com/wwken/realjsweb/issues/357)) ([8e77d70](https://github.com/wwken/realjsweb/commit/8e77d70c272ac243c5d53f3dd6c02f508104226f))
* markers not removed in strict mode ([#15](https://github.com/wwken/realjsweb/issues/15)) ([6c4244a](https://github.com/wwken/realjsweb/commit/6c4244afee3b315690d271dd88133c8a86bd1f13)), closes [#14](https://github.com/wwken/realjsweb/issues/14)
* memoize context-values to avoid excessive re-renders ([#287](https://github.com/wwken/realjsweb/issues/287)) ([bea68f9](https://github.com/wwken/realjsweb/commit/bea68f923e9326188baebd8a89b9ad5cbf891303)), closes [#285](https://github.com/wwken/realjsweb/issues/285)
* move @types/google.maps to dependencies ([#115](https://github.com/wwken/realjsweb/issues/115)) ([9b788e1](https://github.com/wwken/realjsweb/commit/9b788e10722ecbc8d483313c7d746b90f67afc87)), closes [#106](https://github.com/wwken/realjsweb/issues/106)
* omit map prop from markers ([#305](https://github.com/wwken/realjsweb/issues/305)) ([8a38acf](https://github.com/wwken/realjsweb/commit/8a38acf04ab665bbeeeef87a87d195bcbf44ccea))
* output an error when useMap is called outside APIProvider ([#117](https://github.com/wwken/realjsweb/issues/117)) ([5c30c3d](https://github.com/wwken/realjsweb/commit/5c30c3d5a36af57a649ca3201f7dd0c3819e6035))
* prepare for first publishing ([4186441](https://github.com/wwken/realjsweb/commit/41864413e606bd41ed2d6ae77829d33d4439a59f))
* prevent passing empty parameters to ApiLoader ([#193](https://github.com/wwken/realjsweb/issues/193)) ([0601753](https://github.com/wwken/realjsweb/commit/0601753c03539dc1180272b31aafab911ebe9c2c))
* remove deep-link into fast-deep-equal package ([#208](https://github.com/wwken/realjsweb/issues/208)) ([f0be380](https://github.com/wwken/realjsweb/commit/f0be3803eeb3aa0c80b19b42977e714dcb746a2f))
* replace prop `gmpDraggable` with `draggable` in AdvancedMarker ([#53](https://github.com/wwken/realjsweb/issues/53)) ([1dbf477](https://github.com/wwken/realjsweb/commit/1dbf477dfa2e471edf9a9daacd5e5e384a48d8de))
* trigger release for new library function from commit 31f2655 ([b5a13e5](https://github.com/wwken/realjsweb/commit/b5a13e598d97ae65304df6f79d05247b847e670b))
* update ControlPosition values ([#71](https://github.com/wwken/realjsweb/issues/71)) ([1dd144a](https://github.com/wwken/realjsweb/commit/1dd144ac3deac53a77d870ba8cf1e4623786a620))
* update usage of useMapsLibrary in AdvancedMarker ([#55](https://github.com/wwken/realjsweb/issues/55)) ([b01fc8b](https://github.com/wwken/realjsweb/commit/b01fc8bbafae569fbb21a3175deb5b66762eb083))
* use moveCamera and useLayoutEffect for faster map-updates ([e493d5f](https://github.com/wwken/realjsweb/commit/e493d5ffa350efebddd5ef63bb57495954478877))
* use parameter `v` instead of `version` ([0626fb6](https://github.com/wwken/realjsweb/commit/0626fb6411ada3293d0f4a640dff07d0e19fc805))


### Miscellaneous Chores

* add registry-url to release action ([9fa403b](https://github.com/wwken/realjsweb/commit/9fa403bd4d6dfc31b84683543868b0bfbe70e2b9))
* tag 1.0.0 release ([afb67a7](https://github.com/wwken/realjsweb/commit/afb67a7b076e83c025a147d488a93c33150c5b15))


### Code Refactoring

* improved state-handling implementation ([#181](https://github.com/wwken/realjsweb/issues/181)) ([904b918](https://github.com/wwken/realjsweb/commit/904b918427da071477ed4bb8c2c65006b35dff88))
* remove obsolete hooks ([#219](https://github.com/wwken/realjsweb/issues/219)) ([69b2373](https://github.com/wwken/realjsweb/commit/69b23734270e8754a518790620872dc1f4136cc7))

## [1.0.0](https://github.com/visgl/react-google-maps/compare/v0.11.2...v1.0.0) (2024-05-11)


### Miscellaneous Chores

* tag 1.0.0 release ([afb67a7](https://github.com/visgl/react-google-maps/commit/afb67a7b076e83c025a147d488a93c33150c5b15))

## [0.11.2](https://github.com/visgl/react-google-maps/compare/v0.11.1...v0.11.2) (2024-05-10)


### Bug Fixes

* **map:** set other container position to relative ([#357](https://github.com/visgl/react-google-maps/issues/357)) ([8e77d70](https://github.com/visgl/react-google-maps/commit/8e77d70c272ac243c5d53f3dd6c02f508104226f))

## [0.11.1](https://github.com/visgl/react-google-maps/compare/v0.11.0...v0.11.1) (2024-05-10)


### Bug Fixes

* **advanced-marker:** remove content element in cleanup ([#351](https://github.com/visgl/react-google-maps/issues/351)) ([128df87](https://github.com/visgl/react-google-maps/commit/128df8730b7e1549e530a108192e7bae0699f199))
* **map:** set container position to relative ([#356](https://github.com/visgl/react-google-maps/issues/356)) ([7fa2b71](https://github.com/visgl/react-google-maps/commit/7fa2b711952a2472c409c38cd39edc1866cecbe3))

## [0.11.0](https://github.com/visgl/react-google-maps/compare/v0.10.0...v0.11.0) (2024-05-08)


### ⚠ BREAKING CHANGES

* **map:** Introduction of map instance caching needed a change to the DOM-Structure produced by the map component (added a div-element owned by the Map component to contain the map instance).
* **map:** The type passed to the `onProjectionChange` is changed from `MapCameraChangedEvent` to `MapEvent`, so there are no longer camera-props available for this event

### Features

* **advanced-marker:** add support for `clickable` option ([#341](https://github.com/visgl/react-google-maps/issues/341)) ([ca96e54](https://github.com/visgl/react-google-maps/commit/ca96e540a2117f7437745e8e1f71f83ef6c04e25))
* **map:** implement initial version of map-instance caching ([#349](https://github.com/visgl/react-google-maps/issues/349)) ([4a6e83a](https://github.com/visgl/react-google-maps/commit/4a6e83a26f06131baac288e3474d0e3163715f92))


### Bug Fixes

* **map:** change event-type of projectionChanged event to MapEvent ([#346](https://github.com/visgl/react-google-maps/issues/346)) ([83f9309](https://github.com/visgl/react-google-maps/commit/83f93091c858663b0183dd62bdc212a246013072))

## [0.10.0](https://github.com/visgl/react-google-maps/compare/v0.9.0...v0.10.0) (2024-05-03)


### Features

* add solution-channel parameter ([#334](https://github.com/visgl/react-google-maps/issues/334)) ([f93e43e](https://github.com/visgl/react-google-maps/commit/f93e43ee444a86dbc1b594d0c256229e6d207957))
* **advanced-marker:** add style prop to add styles to content-element ([#337](https://github.com/visgl/react-google-maps/issues/337)) ([e942fb5](https://github.com/visgl/react-google-maps/commit/e942fb5f5543a0a27e9987ee4324825958f08fdf))
* **infowindow:** add `className` and `style` props ([92854c9](https://github.com/visgl/react-google-maps/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))
* **infowindow:** add missing options and events ([92854c9](https://github.com/visgl/react-google-maps/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))
* **infowindow:** InfoWindow overhaul ([#335](https://github.com/visgl/react-google-maps/issues/335)) ([92854c9](https://github.com/visgl/react-google-maps/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))


### Bug Fixes

* **infowindow:** add missing cleanup for infowindow ([92854c9](https://github.com/visgl/react-google-maps/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))
* **infowindow:** better dependency checks, using `useDeepCompareEffect` where needed ([92854c9](https://github.com/visgl/react-google-maps/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))
* **infowindow:** removed unneeded dependency in infowindow hooks ([92854c9](https://github.com/visgl/react-google-maps/commit/92854c9103c90a8f0ad1c16eba729402b1e36919))

## [0.9.0](https://github.com/visgl/react-google-maps/compare/v0.8.3...v0.9.0) (2024-04-18)


### Features

* better handling for missing map configuration ([#308](https://github.com/visgl/react-google-maps/issues/308)) ([b318d67](https://github.com/visgl/react-google-maps/commit/b318d676088e6f0ef787ffa911c552a12ecb4895))


### Bug Fixes

* **docs:** use correct spelling of JavaScript ([#312](https://github.com/visgl/react-google-maps/issues/312)) ([f38d3c4](https://github.com/visgl/react-google-maps/commit/f38d3c4004663fd1850c00dca7ddfb7e92b8d5cf))
* omit map prop from markers ([#305](https://github.com/visgl/react-google-maps/issues/305)) ([8a38acf](https://github.com/visgl/react-google-maps/commit/8a38acf04ab665bbeeeef87a87d195bcbf44ccea))

## [0.8.3](https://github.com/visgl/react-google-maps/compare/v0.8.2...v0.8.3) (2024-04-04)


### Bug Fixes

* api-loader didn't call callback on repeat load calls ([743878a](https://github.com/visgl/react-google-maps/commit/743878a33abe2b0fb6bfe96377df07066536e51e))
* map controls crashing when invalid key is provided ([#290](https://github.com/visgl/react-google-maps/issues/290)) ([5052dfb](https://github.com/visgl/react-google-maps/commit/5052dfbf3735ff07319b7bd7108ae9448b0c2840))

## [0.8.2](https://github.com/visgl/react-google-maps/compare/v0.8.1...v0.8.2) (2024-03-29)


### Bug Fixes

* memoize context-values to avoid excessive re-renders ([#287](https://github.com/visgl/react-google-maps/issues/287)) ([bea68f9](https://github.com/visgl/react-google-maps/commit/bea68f923e9326188baebd8a89b9ad5cbf891303)), closes [#285](https://github.com/visgl/react-google-maps/issues/285)

## [0.8.1](https://github.com/visgl/react-google-maps/compare/v0.8.0...v0.8.1) (2024-03-26)


### Bug Fixes

* InfoWindow.shouldFocus doesn't work with false as value ([#278](https://github.com/visgl/react-google-maps/issues/278)) ([2f4b508](https://github.com/visgl/react-google-maps/commit/2f4b508a3da87f778496043dc7d5b40f47837d1f))

## [0.8.0](https://github.com/visgl/react-google-maps/compare/v0.7.1...v0.8.0) (2024-03-20)


### Features

* add new prop InfoWindow.shouldFocus ([#254](https://github.com/visgl/react-google-maps/issues/254)) ([c83ea37](https://github.com/visgl/react-google-maps/commit/c83ea375295699ed4e3c3a4a6f097cad1a4aca7d))

## [0.7.1](https://github.com/visgl/react-google-maps/compare/v0.7.0...v0.7.1) (2024-02-23)


### Bug Fixes

* export api-loading-status types ([#231](https://github.com/visgl/react-google-maps/issues/231)) ([9695034](https://github.com/visgl/react-google-maps/commit/9695034d3c51936c2c701b7fb8be4a864f349c3e)), closes [#230](https://github.com/visgl/react-google-maps/issues/230)

## [0.7.0](https://github.com/visgl/react-google-maps/compare/v0.6.1...v0.7.0) (2024-02-15)


### ⚠ BREAKING CHANGES

* removed the `useStreetViewPanorama()` and `useDirectionsService()` hooks.

### Features

* add example for drawing tools ([#220](https://github.com/visgl/react-google-maps/issues/220)) ([75e91c4](https://github.com/visgl/react-google-maps/commit/75e91c4a3b3893ac3d97b5689682bcca5262aac9))
* restore map state when changing mapId ([#213](https://github.com/visgl/react-google-maps/issues/213)) ([0db363f](https://github.com/visgl/react-google-maps/commit/0db363f9c0291135b31ac387d4513bbaf652517a))


### Code Refactoring

* remove obsolete hooks ([#219](https://github.com/visgl/react-google-maps/issues/219)) ([69b2373](https://github.com/visgl/react-google-maps/commit/69b23734270e8754a518790620872dc1f4136cc7))

## [0.6.1](https://github.com/visgl/react-google-maps/compare/v0.6.0...v0.6.1) (2024-02-08)


### Bug Fixes

* remove deep-link into fast-deep-equal package ([#208](https://github.com/visgl/react-google-maps/issues/208)) ([f0be380](https://github.com/visgl/react-google-maps/commit/f0be3803eeb3aa0c80b19b42977e714dcb746a2f))

## [0.6.0](https://github.com/visgl/react-google-maps/compare/v0.5.4...v0.6.0) (2024-02-07)


### ⚠ BREAKING CHANGES

* The behaviour of the props controlling camera parameters (center, zoom, heading and tilt) changed. Unless you are using controlled props, you have to change the prop names from e.g. `center` to `defaultCenter` (the same goes for `zoom`, `heading` and `tilt`).

### Code Refactoring

* improved state-handling implementation ([#181](https://github.com/visgl/react-google-maps/issues/181)) ([904b918](https://github.com/visgl/react-google-maps/commit/904b918427da071477ed4bb8c2c65006b35dff88))

## [0.5.4](https://github.com/visgl/react-google-maps/compare/v0.5.3...v0.5.4) (2024-02-01)


### Bug Fixes

* prevent passing empty parameters to ApiLoader ([#193](https://github.com/visgl/react-google-maps/issues/193)) ([0601753](https://github.com/visgl/react-google-maps/commit/0601753c03539dc1180272b31aafab911ebe9c2c))

## [0.5.3](https://github.com/visgl/react-google-maps/compare/v0.5.2...v0.5.3) (2024-02-01)


### Bug Fixes

* add `loading=async` to maps API url ([cb1336f](https://github.com/visgl/react-google-maps/commit/cb1336fc97dda8b3ad99c3f9a9a560cf8186056b))
* use parameter `v` instead of `version` ([0626fb6](https://github.com/visgl/react-google-maps/commit/0626fb6411ada3293d0f4a640dff07d0e19fc805))

## [0.5.2](https://github.com/visgl/react-google-maps/compare/v0.5.1...v0.5.2) (2024-02-01)


### Bug Fixes

* trigger release for new library function from commit 31f2655 ([b5a13e5](https://github.com/visgl/react-google-maps/commit/b5a13e598d97ae65304df6f79d05247b847e670b))

## [0.5.1](https://github.com/visgl/react-google-maps/compare/v0.5.0...v0.5.1) (2024-01-31)


### Bug Fixes

* infowindow double rendering and eslint warnings ([#185](https://github.com/visgl/react-google-maps/issues/185)) ([404cc06](https://github.com/visgl/react-google-maps/commit/404cc06253a92f120f97f72179949a8f4c0fc87b))

## [0.5.0](https://github.com/visgl/react-google-maps/compare/v0.4.3...v0.5.0) (2024-01-18)


### Features

* handle API-key errors in map-component ([#165](https://github.com/visgl/react-google-maps/issues/165)) ([26ccc15](https://github.com/visgl/react-google-maps/commit/26ccc15d640346ce71157d387fbc56720234fa4c))


### Bug Fixes

* don't use potentially unreliable addListener functions ([#158](https://github.com/visgl/react-google-maps/issues/158)) ([7309efa](https://github.com/visgl/react-google-maps/commit/7309efa1db8b392ebe2840e5d527a92419c9fc2a))
* export event-types ([#167](https://github.com/visgl/react-google-maps/issues/167)) ([cdd6b72](https://github.com/visgl/react-google-maps/commit/cdd6b72f848bf5b54618862788e1a3a221fcdce1))
* export type properly ([#170](https://github.com/visgl/react-google-maps/issues/170)) ([e561031](https://github.com/visgl/react-google-maps/commit/e56103149f15977ae0e7f62dd359cd3759b71fc9))

## [0.4.3](https://github.com/visgl/react-google-maps/compare/v0.4.2...v0.4.3) (2024-01-05)


### Bug Fixes

* allow AdvancedMarker to accept space-separated multiple class names ([#143](https://github.com/visgl/react-google-maps/issues/143)) ([eab53e2](https://github.com/visgl/react-google-maps/commit/eab53e2ffa69325fb927b16d59f6aa7faa589a49))

## [0.4.2](https://github.com/visgl/react-google-maps/compare/v0.4.1...v0.4.2) (2023-12-22)


### Bug Fixes

* avoid re-render on every importLibrary() call ([#135](https://github.com/visgl/react-google-maps/issues/135)) ([32b5894](https://github.com/visgl/react-google-maps/commit/32b5894518a22793c236bcab33291f25b48f7367))

## [0.4.1](https://github.com/visgl/react-google-maps/compare/v0.4.0...v0.4.1) (2023-12-01)


### Bug Fixes

* move @types/google.maps to dependencies ([#115](https://github.com/visgl/react-google-maps/issues/115)) ([9b788e1](https://github.com/visgl/react-google-maps/commit/9b788e10722ecbc8d483313c7d746b90f67afc87)), closes [#106](https://github.com/visgl/react-google-maps/issues/106)
* output an error when useMap is called outside APIProvider ([#117](https://github.com/visgl/react-google-maps/issues/117)) ([5c30c3d](https://github.com/visgl/react-google-maps/commit/5c30c3d5a36af57a649ca3201f7dd0c3819e6035))

## [0.4.0](https://github.com/visgl/react-google-maps/compare/v0.3.3...v0.4.0) (2023-11-28)


### Features

* Allow &lt;Pin&gt; glyphs to be passed as children (close [#98](https://github.com/visgl/react-google-maps/issues/98)) ([#99](https://github.com/visgl/react-google-maps/issues/99)) ([6374453](https://github.com/visgl/react-google-maps/commit/637445313c8c9364cbf1f32346d3438fc0589d74))

## [0.3.3](https://github.com/visgl/react-google-maps/compare/v0.3.2...v0.3.3) (2023-11-13)


### Bug Fixes

* add map camera state tracking ([#84](https://github.com/visgl/react-google-maps/issues/84)) ([1dc1584](https://github.com/visgl/react-google-maps/commit/1dc158436c4ffde60548486da5410b46e989fc5b))

## [0.3.2](https://github.com/visgl/react-google-maps/compare/v0.3.1...v0.3.2) (2023-11-09)


### Bug Fixes

* use moveCamera and useLayoutEffect for faster map-updates ([e493d5f](https://github.com/visgl/react-google-maps/commit/e493d5ffa350efebddd5ef63bb57495954478877))

## [0.3.1](https://github.com/visgl/react-google-maps/compare/v0.3.0...v0.3.1) (2023-11-09)


### Bug Fixes

* update ControlPosition values ([#71](https://github.com/visgl/react-google-maps/issues/71)) ([1dd144a](https://github.com/visgl/react-google-maps/commit/1dd144ac3deac53a77d870ba8cf1e4623786a620))

## [0.3.0](https://github.com/visgl/react-google-maps/compare/v0.2.1...v0.3.0) (2023-11-09)


### ⚠ BREAKING CHANGES

* removed MapProps.onLoadMap

### Features

* cleanup map, remove onLoadMap prop ([d5e7dfd](https://github.com/visgl/react-google-maps/commit/d5e7dfdf74d76395ffbc1bcd2afda62a12eb7e57))
* implement props for all map-events with custom MapEvent type ([820a301](https://github.com/visgl/react-google-maps/commit/820a301e4a30e2b7bbbe7c82c69675f9c410813e))
* update map viewport when props are changed ([0b1d800](https://github.com/visgl/react-google-maps/commit/0b1d800dc5e4b9bf0b1ddb42b9fed392b23b8dae))

## [0.2.1](https://github.com/visgl/react-google-maps/compare/v0.2.0...v0.2.1) (2023-11-07)


### Bug Fixes

* add types to package exports ([#62](https://github.com/visgl/react-google-maps/issues/62)) ([1ab493a](https://github.com/visgl/react-google-maps/commit/1ab493a71ddaeff3b31caec10be1fd4728d51362))

## [0.2.0](https://github.com/visgl/react-google-maps/compare/v0.1.2...v0.2.0) (2023-11-07)


### Features

* new MapControl component ([#51](https://github.com/visgl/react-google-maps/issues/51)) ([7eb49ed](https://github.com/visgl/react-google-maps/commit/7eb49ed55eb548c342f83bcdbf9dc655655bafe7))
* standalone examples (CodeSandbox) ([#48](https://github.com/visgl/react-google-maps/issues/48)) ([959c6e3](https://github.com/visgl/react-google-maps/commit/959c6e3d57d896d4f76640e01b3ad0a33dea3fae))


### Bug Fixes

* replace prop `gmpDraggable` with `draggable` in AdvancedMarker ([#53](https://github.com/visgl/react-google-maps/issues/53)) ([1dbf477](https://github.com/visgl/react-google-maps/commit/1dbf477dfa2e471edf9a9daacd5e5e384a48d8de))
* update usage of useMapsLibrary in AdvancedMarker ([#55](https://github.com/visgl/react-google-maps/issues/55)) ([b01fc8b](https://github.com/visgl/react-google-maps/commit/b01fc8bbafae569fbb21a3175deb5b66762eb083))

## [0.1.2](https://github.com/visgl/react-google-maps/compare/v0.1.1...v0.1.2) (2023-11-01)


### Miscellaneous Chores

* add registry-url to release action ([9fa403b](https://github.com/visgl/react-google-maps/commit/9fa403bd4d6dfc31b84683543868b0bfbe70e2b9))

## [0.1.1](https://github.com/visgl/react-google-maps/compare/v0.1.0...v0.1.1) (2023-11-01)


### Bug Fixes

* empty commit to trigger release-please ([b04a942](https://github.com/visgl/react-google-maps/commit/b04a9421fc290c3ca6eacc02391726beab4bba4b))

## [0.1.0](https://github.com/visgl/react-google-maps/compare/v0.0.5...v0.1.0) (2023-10-27)


### ⚠ BREAKING CHANGES

* loading multiple libraries at once is no longer supported, changed the return type of useMapsLibrary.

### Features

* useMapsLibrary returns API object instead of boolean ([#26](https://github.com/visgl/react-google-maps/issues/26)) ([a3aa4c5](https://github.com/visgl/react-google-maps/commit/a3aa4c5e10228003206c8de3305f857df50d73d1))
