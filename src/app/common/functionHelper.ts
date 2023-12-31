import { IArtist } from "../interfaces/IArtist";

export function stripHtmlTags(html: string): string {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}


export function generateRandomColor(): string {
  const randomColorNumber = Math.floor(Math.random() * 16777215);
  const randomColorHex = randomColorNumber.toString(16).padStart(6, '0');
  return `#${randomColorHex}`;
}


export function msToTime(duration: number): string {
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const seconds = Math.floor((duration / 1000) % 60);

  return `${hours > 0 ? hours + ':' : ''}${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}


export function getAllArtistsNames(artists: IArtist[]): string {
  if (artists && artists.length > 0) {
      const artistNames = artists.map(artist => artist.name);
      return artistNames.join(', ');
  }
  return '';
}
