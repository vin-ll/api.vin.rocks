export class UserModel {
  public id: number;
  public username: string;
  public password: string;
  public role: number;

  constructor(id: number, username: string, password: string, role: number) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
