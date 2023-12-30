export function stripHtmlTags(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}


export function generateRandomColor(): string {
  const randomColorNumber = Math.floor(Math.random() * 16777215);
  const randomColorHex = randomColorNumber.toString(16).padStart(6, '0');
  return `#${randomColorHex}`;
}