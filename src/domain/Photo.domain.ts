interface PhotoConstructorProps {
  url: string;
  previewUrl?: string;
  label?: string;
}

export class Photo {
  public url: string;
  public previewUrl?: string;
  public label?: string;

  constructor({ url, previewUrl, label }: PhotoConstructorProps) {
    this.url = url;
    this.previewUrl = previewUrl;
    this.label = label;
  }
}
