interface State {
  isLoading: boolean;
  authentication: {
    user: IUser | null;
    session_token?: string | null;
  };
  movies: {
    movies: IMovie[];
    series: IMovie[];
  };
}

interface ActionStandardBase {
  type: string;
  meta?: any;
  error?: any;
}

interface ActionStandard<T> extends ActionStandardBase {
  payload?: T;
}

interface ActionPayloadRequired<T> extends ActionStandardBase {
  payload: T;
}
