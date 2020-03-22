interface PhotoConstructorProps {
  url: string;
  label: string;
}

export class Photo {
  public url: string;
  public label: string;

  constructor(props: PhotoConstructorProps) {
    this.url = props.url;
    this.label = props.label;
  }
}
