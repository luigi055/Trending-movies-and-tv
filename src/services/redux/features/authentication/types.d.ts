interface AuthenticationState {
  user: IUser | null;
  session_token?: string | null;
}
