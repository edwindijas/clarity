export const main = () => {
  const entry = document.createElement("div");
  entry.id = "my-extension-entrypoint";
  document.body.appendChild(entry);
  console.log("Content script loaded");
}

export const createEntry = () => {
  const entry = document.createElement("div");
  entry.id = "my-extension-entrypoint";
  document.body.appendChild(entry);

  entry.attachShadow({ mode: "open" });
  return entry;
}