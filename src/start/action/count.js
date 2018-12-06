export const increment = () => {
  return {
    type: "INCEEMENT"
  };
};

export const settimeoutAdd = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

// export const reactsettime = () => {
//   return {
//     type: "REACTSETTIME"
//   };
// };
