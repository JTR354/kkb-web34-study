import { REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../action/constants";
const userInit = {
  isLogin: false,
  userInfo: { id: null, name: "", score: 0 },
  loading: false, // loading
  err: { msg: "" },
};

export default function loginReducer(
  state = { ...userInit },
  { type, payload }
) {
  switch (type) {
    case REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
        err: { msg: "" },
        userInfo: { ...payload },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        ...userInit,
        ...payload,
        loading: false,
      };
    default:
      return state;
  }
}
