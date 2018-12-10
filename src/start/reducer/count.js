const initialStart = {
  count: 0,
  
};
const count = (start = initialStart, action = {}) => {
  switch (action.type) {
    case "INCEEMENT":
      return {
        count: ++start.count
      };
    case "DECREMENT":
      return {
        count: --start.count
      };
    case "REACTSETTIME":
      return {
        count: 100
      };

    default:
      return start;
  }
};

export default count;
