/*
 * Edit this file to fill the page. Put media files in media/ and use
 * relative paths such as "./media/featured-demo.mp4" below.
 * Empty strings intentionally keep the labeled placeholders visible.
 */
const project = {
  paperTitle: "Hear the World in Stereo: Learning Dynamic Spatial Correspondence for Immersive Joint Video-Audio Generation",
  abstract: "Recent joint video-audio generation models have achieved strong semantic correspondence and temporal synchronization. However, applications such as AR/VR and interactive gaming further require stereo audio to provide an immersive sense, which remains largely overlooked. Effective stereo audio requires the perceived sound location to evolve consistently with the motion of its corresponding visual source. We refer to this property as Dynamic Spatial Correspondence and propose StereoBind, a framework that binds visual source motion to stereo sound generation. StereoBind uses motion tracks to coordinate visual motion and stereo audio through three complementary mechanisms. Visual Motion Binding establishes source-aware audiovisual correspondence, the Spatial Track Encoder captures absolute source positions, and Residual Track RoPE models relative motion. For supervision and evaluation, we construct StereoWorld-29K, a large-scale stereo audio-video dataset with paired motion tracks, and StereoWorldBench for measuring audiovisual spatial consistency. Experiments show that StereoBind substantially improves spatial alignment in stereo audio generation over existing models while preserving overall audiovisual quality.",
  bibtex: "",
  paperUrl: "",
  codeUrl: "https://github.com/vivoCameraResearch/StereoBind",
};

const media = {
  "teaser-figure":  { src: "./media/teaser.jpg", alt: "StereoBind teaser showing visual motion, dynamic stereo audio, and the resulting immersive experience" },
  "dataset-figure": { src: "./media/stereoworld-29k-pipeline.jpg", alt: "StereoWorld-29K construction pipeline with data curation, AVS processing, and spatial data synthesis" },
  "method-figure":  { src: "./media/stereobind-method.jpg", alt: "StereoBind architecture with Visual Motion Binding Tokens, Spatial Track Encoder, and Residual Track RoPE" },
  "quantitative-results": { src: "./media/quantitative-results.jpg", alt: "Quantitative comparison table covering visual quality, audio quality, audio-visual synchronization, and stereo spatial fidelity" },
};

const comparisonModels = [
  { slug: "stereobind", label: "StereoBind", ours: true },
  { slug: "ltx-2-5", label: "LTX-2.5" },
  { slug: "minimax-h3", label: "MiniMax-H3" },
  { slug: "ovi", label: "Ovi" },
  { slug: "prismaudio", label: "PrismAudio" },
  { slug: "see2sound", label: "See2Sound" },
];

const comparisonSamples = Array.from({ length: 6 }, (_, index) => ({
  number: index + 1,
  slug: `sample-${String(index + 1).padStart(2, "0")}`,
}));

function createResultSet(slug, label, count, note) {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      title: `${label} · ${number}`,
      src: `./media/results/${slug}/${slug}-${number}.mp4`,
      poster: "",
      note,
    };
  });
}

const resultVideos = {
  "static-left": createResultSet("static-left", "Static Left", 6, "Stationary source localized on the left."),
  "static-right": createResultSet("static-right", "Static Right", 6, "Stationary source localized on the right."),
  "dynamic-left-to-right": createResultSet("dynamic-left-to-right", "Left to Right", 7, "Source and stereo position move from left to right."),
  "dynamic-right-to-left": createResultSet("dynamic-right-to-left", "Right to Left", 5, "Source and stereo position move from right to left."),
  "dynamic-left-right-left": createResultSet("dynamic-left-right-left", "Left → Right → Left", 5, "Source and stereo position reverse from right back to left."),
  "dynamic-right-left-right": createResultSet("dynamic-right-left-right", "Right → Left → Right", 4, "Source and stereo position reverse from left back to right."),
};

if (project.paperTitle.trim()) {
  const title = document.getElementById("hero-title");
  const colon = project.paperTitle.indexOf(":");
  if (colon > -1) {
    const emphasis = document.createElement("em");
    emphasis.textContent = project.paperTitle.slice(colon + 1).trim();
    title.replaceChildren(document.createTextNode(project.paperTitle.slice(0, colon + 1) + " "), emphasis);
  } else {
    title.textContent = project.paperTitle;
  }
  document.title = project.paperTitle;
}
if (project.abstract.trim()) {
  const abstract = document.getElementById("abstract-text");
  const emphasizedText = "Dynamic Spatial Correspondence";
  const emphasisStart = project.abstract.indexOf(emphasizedText);
  if (emphasisStart > -1) {
    const emphasis = document.createElement("em");
    emphasis.textContent = emphasizedText;
    abstract.replaceChildren(
      document.createTextNode(project.abstract.slice(0, emphasisStart)),
      emphasis,
      document.createTextNode(project.abstract.slice(emphasisStart + emphasizedText.length)),
    );
  } else {
    abstract.textContent = project.abstract;
  }
}
if (project.bibtex.trim()) {
  const bibtex = document.getElementById("bibtex-text");
  bibtex.textContent = project.bibtex;
  bibtex.hidden = false;
}

function activateLink(id, url, label, className) {
  if (!url.trim()) return;
  const old = document.getElementById(id);
  const link = document.createElement("a");
  link.id = id;
  link.className = className;
  link.href = url;
  link.textContent = label;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  old.replaceWith(link);
}
activateLink("paper-link", project.paperUrl, "Paper ↗", "button button-primary");
activateLink("code-link", project.codeUrl, "Code ↗", "button button-code");

for (const grid of document.querySelectorAll("[data-results]")) {
  const category = grid.dataset.results;
  for (const [index, item] of (resultVideos[category] || []).entries()) {
    const slotId = `${category}-${index + 1}`;
    media[slotId] = { src: item.src, poster: item.poster, alt: item.title };

    const card = document.createElement("article");
    card.className = "result-card";
    const frame = document.createElement("div");
    frame.className = "media-placeholder media-result";
    frame.dataset.slot = slotId;
    frame.dataset.type = "video";
    frame.setAttribute("role", "img");
    frame.setAttribute("aria-label", `Reserved video for ${item.title}`);

    const corner = document.createElement("div");
    corner.className = "placeholder-corner";
    corner.textContent = `${category.replaceAll("-", " ").toUpperCase()} / ${String(index + 1).padStart(2, "0")}`;
    const center = document.createElement("div");
    center.className = "placeholder-center";
    const play = document.createElement("span");
    play.className = "placeholder-play";
    play.setAttribute("aria-hidden", "true");
    play.textContent = "▶";
    const name = document.createElement("strong");
    name.textContent = item.title;
    const instruction = document.createElement("small");
    instruction.textContent = "Add stereo result video · 16:9";
    center.append(play, name, instruction);
    frame.append(corner, center);

    const caption = document.createElement("div");
    caption.className = "result-card-copy";
    const heading = document.createElement("h4");
    heading.textContent = item.title;
    const note = document.createElement("p");
    note.textContent = item.note;
    caption.append(heading, note);
    card.append(frame, caption);
    grid.append(card);
  }
}

for (const matrix of document.querySelectorAll("[data-comparison-matrix]")) {
  for (const sample of comparisonSamples) {
    const row = document.createElement("section");
    row.className = "comparison-sample";
    row.setAttribute("aria-labelledby", `comparison-${sample.slug}`);

    const heading = document.createElement("div");
    heading.className = "comparison-sample-heading";
    const index = document.createElement("span");
    index.textContent = String(sample.number).padStart(2, "0");
    const title = document.createElement("h3");
    title.id = `comparison-${sample.slug}`;
    title.textContent = `Sample ${String(sample.number).padStart(2, "0")}`;
    const descriptor = document.createElement("p");
    descriptor.textContent = "Same input · six generated outputs";
    heading.append(index, title, descriptor);

    const grid = document.createElement("div");
    grid.className = "comparison-sample-grid";

    for (const model of comparisonModels) {
      const slotId = `comparison-${sample.slug}-${model.slug}`;
      media[slotId] = {
        src: `./media/comparisons/${sample.slug}/${model.slug}.mp4`,
        poster: "",
        alt: `${model.label} result for Sample ${String(sample.number).padStart(2, "0")}`,
      };

      const card = document.createElement("article");
      card.className = `comparison-cell${model.ours ? " comparison-cell-ours" : ""}`;

      const label = document.createElement("div");
      label.className = "comparison-model-label";
      const name = document.createElement("strong");
      name.textContent = model.label;
      label.append(name);
      if (model.ours) {
        const badge = document.createElement("span");
        badge.textContent = "OURS";
        label.append(badge);
      }

      const frame = document.createElement("div");
      frame.className = "media-placeholder media-comparison-cell";
      frame.dataset.slot = slotId;
      frame.dataset.type = "video";
      frame.setAttribute("role", "img");
      frame.setAttribute("aria-label", `Reserved video for ${model.label}, Sample ${String(sample.number).padStart(2, "0")}`);

      const center = document.createElement("div");
      center.className = "placeholder-center";
      const play = document.createElement("span");
      play.className = "placeholder-play";
      play.setAttribute("aria-hidden", "true");
      play.textContent = "▶";
      const placeholderName = document.createElement("strong");
      placeholderName.textContent = model.label;
      center.append(play, placeholderName);
      frame.append(center);

      card.append(label, frame);
      grid.append(card);
    }

    row.append(heading, grid);
    matrix.append(row);
  }
}

for (const slot of document.querySelectorAll("[data-slot]")) {
  const item = media[slot.dataset.slot];
  if (!item?.src?.trim()) continue;
  const isVideo = slot.dataset.type === "video";
  const element = document.createElement(isVideo ? "video" : "img");
  element.src = item.src;
  element.setAttribute("aria-label", item.alt);
  if (isVideo) {
    element.controls = true;
    element.playsInline = true;
    element.preload = "metadata";
    if (item.poster) element.poster = item.poster;
  } else {
    element.alt = item.alt;
    element.loading = "lazy";
    element.decoding = "async";
  }
  slot.replaceChildren(element);
  slot.classList.add("is-filled");
  slot.removeAttribute("role");
  slot.removeAttribute("aria-label");
}
