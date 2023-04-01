export class SkillModel {
  public name: string;
  public type: string;
  public use: string;
  public dotColor: string;

  constructor(name: string, type: string, use: string, dotColor: string) {
    this.name = name;
    this.type = type;
    this.use = use;
    this.dotColor = dotColor;
  }
}
