export const getTaks = () => {
  return async (dispatch, getState) => {
    try {
      const data = await fetch("http://localhost:3000/taks");
      const taks = await data.json();
      dispatch({
        type: "SET_TAKS",
        payload: {
          taks,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addTaks = (newTaks) => {
  return async (dispatch, getState) => {
    const data = await fetch("http://localhost:3000/taks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaks),
    });
    const taks = await data.json();
    dispatch({
      type: "ADD_TAKS",
      payload: {
        taks,
      },
    });
  };
};

export const deleteTaks = (taksId) => {
  return async (dispatch) => {
    const data = await fetch(`http://localhost:3000/taks/${taksId}`, {
      method: "DELETE",
    });
    const taks = data.json();
    console.log("taks", taks);
    dispatch({
      type: "DELETE_TAKS",
      payload: {
        taksId,
      },
    });
  };
};
