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

// Each static-left-NN result uses the prompt and motion track from NN.txt / NN.mp4.
const staticLeftInputs = {
  "static-left-01": {
    prompt: "A locked-off medium-wide shot shows a colorful flower shop filled with bouquets, green foliage, and soft daylight from the storefront window. A young male florist wearing a beige apron stands at a fixed arrangement table on the left side of the frame. Looking toward a customer near the camera, he says warmly, “These roses opened this morning, so they should stay fresh for several more days.” His mouth movements follow the sentence naturally, and he lightly touches one flower stem without stepping away from his position. The camera remains completely static throughout the uninterrupted shot, with no pan, tilt, zoom, tracking, reframing, or cuts. A faint diffuse indoor ambience stays in the background, while the florist’s voice remains clearly localized to the same point on the left.",
    motionTrack: "./media/results/static-left/motion-tracks/01.mp4",
  },
  "static-left-02": {
    prompt: "A locked-off medium-wide shot shows a quiet indoor archery range with marked shooting lanes and distant target boards. A male instructor wearing a dark sports shirt stands at a fixed position on the left side of the frame. Facing a beginner near the camera, he says calmly, “Keep your shoulder relaxed and bring the string back to the same anchor point each time.” His lips remain synchronized with the dialogue, and he demonstrates a small hand position without walking or shifting across the scene. The camera remains completely static throughout the single uninterrupted shot, with no pan, tilt, zoom, tracking, reframing, or cuts. The range is otherwise quiet, while his voice remains clearly localized on the left side.",
    motionTrack: "./media/results/static-left/motion-tracks/02.mp4",
  },
  "static-left-03": {
    prompt: "A locked-off medium-wide shot shows a humid botanical greenhouse filled with tall tropical plants, glass panels, and soft natural daylight. A middle-aged male gardener wearing a green work vest stands completely still beside a row of potted ferns on the left side of the frame. Looking toward a visitor near the camera, he says in a calm explanatory voice, “These plants prefer indirect light, so keep them away from the strongest afternoon sun.” His lips move naturally with the sentence, and he makes a small hand gesture toward the leaves without changing his position. The camera remains completely static throughout the uninterrupted shot, with no pan, tilt, zoom, tracking, reframing, or cuts. A faint diffuse greenhouse room tone remains in the background, while the gardener’s voice stays firmly localized on the left side.",
    motionTrack: "./media/results/static-left/motion-tracks/03.mp4",
  },
  "static-left-04": {
    prompt: "A locked-off medium-wide shot shows a quiet antique clock shop with dark wooden cabinets and several silent decorative clocks in the background. A single tall grandfather clock stands on the left side of the frame and is the only active foreground sound source. During the shot, the clock produces four slow, resonant chimes from its fixed position. The clock remains completely stationary, and no person enters the scene or interacts with it. The camera remains fully static throughout the continuous shot, with no pan, tilt, zoom, dolly, reframing, or cuts. The surrounding shop is nearly silent except for a faint diffuse indoor room tone, allowing each chime to remain clearly anchored to the same position on the left.",
    motionTrack: "./media/results/static-left/motion-tracks/04.mp4",
  },
  "static-left-05": {
    prompt: "A locked-off medium-wide shot shows a clean dental consultation room with pale cabinets, a dental chair, and cool clinical lighting. A female dentist wearing light blue scrubs stands completely still beside the chair on the left side of the frame. Looking toward a patient near the camera, she says in a calm reassuring voice, “The filling looks stable, but avoid chewing anything hard on this side today.” Her lips move naturally with the sentence, and she makes a small hand gesture while keeping both feet planted in the same position. The camera remains entirely static throughout the continuous shot, with no pan, tilt, zoom, tracking, reframing, or cuts. The room is otherwise quiet, and her voice stays firmly localized on the left.",
    motionTrack: "./media/results/static-left/motion-tracks/05.mp4",
  },
  "static-left-06": {
    prompt: "A locked-off medium-wide shot shows a dim concrete garage illuminated by a single cool overhead lamp. A black motorcycle rests completely stationary on a maintenance stand on the left side of the frame, with its tires firmly off the ground and no rider present. The engine runs at a deep, steady idle, causing subtle vibration in the exhaust pipe and side mirrors without moving the motorcycle from its position. The engine then produces two distinct, powerful revs separated by a brief return to idle, before settling into a low mechanical rumble again. The camera remains completely fixed throughout the continuous shot, with no panning, tracking, zooming, reframing, or cuts. Soft garage reverberation follows the engine sound, but the idle, both revs, and the exhaust vibration remain firmly anchored to the left side.",
    motionTrack: "./media/results/static-left/motion-tracks/06.mp4",
  },
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

    const number = String(index + 1).padStart(2, "0");
    const input = staticLeftInputs[`${category}-${number}`];
    if (input) {
      const details = document.createElement("details");
      details.className = "result-input-details";

      const summary = document.createElement("summary");
      summary.textContent = "Input prompt + motion track";
      summary.setAttribute("aria-label", `Input prompt and motion track for ${item.title}`);

      const body = document.createElement("div");
      body.className = "result-input-body";
      const promptLabel = document.createElement("h5");
      promptLabel.textContent = "INPUT PROMPT";
      const prompt = document.createElement("p");
      prompt.className = "result-input-prompt";
      prompt.textContent = input.prompt;
      const trackLabel = document.createElement("h5");
      trackLabel.textContent = "MOTION TRACK";
      const track = document.createElement("video");
      track.className = "result-motion-track";
      track.src = input.motionTrack;
      track.controls = true;
      track.playsInline = true;
      track.loop = true;
      track.muted = true;
      track.preload = "metadata";
      track.setAttribute("aria-label", `Motion track for ${item.title}`);
      body.append(promptLabel, prompt, trackLabel, track);
      details.append(summary, body);
      card.append(details);
    }

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
