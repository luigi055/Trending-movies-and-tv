class User implements IUser {
  public id: string;
  public name: string;
  public email: string;
  public avatar: string;

  constructor({ id, name, email, avatar }: IUser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatar = avatar;
  }
}

export default User;
