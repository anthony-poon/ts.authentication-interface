import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store/index';

const parseToken = (tokenValue: string) => {
  const claim = JSON.parse(atob(tokenValue.split(".")[1]));
  return {
    tokenValue,
    expireAt: claim.exp - 60 * 5,
  }
}

type Token = {
  tokenValue: string,
  expireAt: number,
}

type TokenType = 'access' | 'refresh' | 'reauthenticate' | 'two_fa';

type AuthenticationState = {
  identity: string|null,
  tokens: Partial<Record<TokenType, Token>>,
  roles: string[],
}

const initialState: AuthenticationState = {
  identity: null,
  tokens: {},
  roles: [],
}

type AddTokenPayload = {
  type: TokenType;
  tokenValue: string
}

type LoginPayload = {
  access: string,
  refresh: string,
  identity: string,
  roles: string[]
}

export const authentication = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    addTokenByType: (state, action: PayloadAction<AddTokenPayload>) => {
      state.tokens[action.payload.type] = parseToken(action.payload.tokenValue);
    },
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.identity = action.payload.identity;
      state.tokens['access'] = parseToken(action.payload.access);
      state.tokens['refresh'] = parseToken(action.payload.refresh);
      state.roles = action.payload.roles;
    },
    logout: (state) => {
      state.tokens = {}
    }
  },
});

export const selectToken = (tokenType: TokenType) => (state: RootState) => {
  const token = state.authentication.tokens[tokenType];
  if (!token) {
    return null;
  }
  const { tokenValue, expireAt } = token;
  const now = new Date().getTime() / 1000;
  if (now > expireAt) {
    return null;
  }
  return tokenValue
}
export const selectIsAuthenticated = createSelector(
  [selectToken('access')],
  (tokeValue) => !!tokeValue // true if access token exists, false otherwise
);

export const { addTokenByType, login, logout } = authentication.actions;
export default authentication.reducer;