export class ProjectModel {
  public name: string;
  public description: string;
  public link: string;
  public dotColor: string;
  public language: string;

  constructor(
    name: string,
    description: string,
    link: string,
    dotColor: string,
    language: string,
  ) {
    this.name = name;
    this.description = description;
    this.link = link;
    this.dotColor = dotColor;
    this.language = language;
  }
}
