export const main = (windowId: string) => {
  if (document.getElementById("my-extension-entrypoint")) return;
  createEntry(windowId);
}

export const createEntry = (id: string) => {
  const entry = document.createElement("div");
  entry.id = id;
  document.body.appendChild(entry);
  entry.attachShadow({ mode: "open" });
  return entry;
}