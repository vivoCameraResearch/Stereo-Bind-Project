# StereoBind project page: content guide

The paper title and abstract are already filled. The page keeps media empty until you provide the actual material. Put media files in `dist/media/` and set paths in `dist/content.js`, for example `"./media/static-01.mp4"`. An empty `src` leaves a labeled placeholder visible.

## Brand logo

- Asset: `dist/media/stereobind-logo.png`
- Placement: the full mark is the hero visual; compact versions appear in the header and footer.
- Keep the transparent padding and the complete left/right wave shapes when replacing or exporting the logo.

## Paper and code links

Set `paperUrl` and `codeUrl` in the `project` object near the top of `dist/content.js`. Until real URLs are supplied, the two top-of-page buttons remain disabled. Use anonymous destinations if the page is shared during double-blind review.

## Fixed media slots

| Slot in `dist/content.js` | Page location | Put here |
| --- | --- | --- |
| `teaser-figure` | “See the motion. Hear it move.” | Installed teaser image showing visual motion and the corresponding acoustic trajectory (`dist/media/teaser.jpg`) |
| `dataset-figure` | “Teaching sound where to move” | Installed StereoWorld-29K construction pipeline (`dist/media/stereoworld-29k-pipeline.jpg`) |
| `method-figure` | “From correspondence to generation” | Installed StereoBind method figure showing VMB Tokens, STE, and RT-RoPE (`dist/media/stereobind-method.jpg`) |
| `quantitative-results` | “Measured across quality and space” | Installed quantitative comparison table (`dist/media/quantitative-results.jpg`) |

For the video slots, 16:9 MP4 with H.264 video and AAC **stereo** audio is a practical web export. A 1080p source and a still poster image are useful. Preserve the left and right channels—do not downmix to mono. For figures, prefer SVG or a high-resolution PNG/WebP with labels that remain readable on mobile.

## Results gallery

The Results section now follows six spatial patterns: **Static Left**, **Static Right**, **Dynamic Left to Right**, **Dynamic Right to Left**, **Dynamic Left → Right → Left**, and **Dynamic Right → Left → Right**. The 33 installed clips live under `dist/media/results/` and use sequential category filenames such as `static-left-01.mp4`.

`createResultSet` in `dist/content.js` defines the displayed count, title, path, and note for each category. When adding or removing clips, keep the filenames sequential and update the corresponding count. Preserve the original stereo channels and do not add a multi-source demonstration unless the paper scope changes.

## Qualitative comparison matrix

The comparison section contains six samples by six systems: **StereoBind**, **LTX-2.5**, **MiniMax-H3**, **Ovi**, **PrismAudio**, and **See2Sound**. Its 36 clips live under `dist/media/comparisons/sample-01/` through `sample-06/`. Every sample folder uses the same six normalized filenames (`stereobind.mp4`, `ltx-2-5.mp4`, `minimax-h3.mp4`, `ovi.mp4`, `prismaudio.mp4`, and `see2sound.mp4`) so the column order stays consistent.

The matrix is generated from `comparisonModels` and `comparisonSamples` in `dist/content.js`. Keep all six outputs for a sample aligned in scene, duration, and playback loudness. StereoBind is intentionally the first, highlighted column.

## Before sharing with reviewers

Check all clips with two-ear headphones, verify stereo-channel integrity, and level-match baseline comparisons. Confirm that poster images, filenames, links, and page metadata do not reveal authors or institutions. This template includes no analytics, third-party embeds, or remote fonts; still verify that the selected host does not track reviewers if you plan to include this URL in an ICLR 2027 submission.
