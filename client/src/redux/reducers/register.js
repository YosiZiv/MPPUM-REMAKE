import { SET_INPUT } from "../actions/register";
const initState = {
  registerForm: {},
};

export default function register(state = initState, action) {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.payload.id]: {
            value: action.payload.value,
          },
        },
      };
    default:
      return state;
  }
}
// case SET_SEARCH_FIELDS:
//   return {
//     ...state,
//     searchForm: {
//       ...state.searchForm,
//       [action.payload.id]: {
//         value: action.payload.value,
//         isValid: checkValidity(
//           action.payload.value,
//           action.payload.validation,
//         ),
//       },
//     },
// case SET_USER:
//   return { ...state, user: action.payload };
// case SET_EMAILS:
//   return { ...state, emails: action.payload };
// case SEARCH_USER_AUTO_COMPLETE:
//   const autoCompleteResult = [];
//   if (state.emails.length) {
//     state.emails.forEach(email => {
//       if (email.includes(action.payload) && action.payload !== '') {
//         autoCompleteResult.push(email);
//       }
//     });
//   }
//   return { ...state, autoCompleteResult };
// case SWITCH_REGISTER_MODE:
//   return { ...state, mode: !state.mode };
