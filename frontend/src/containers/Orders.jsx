// --- 次でuseEffectを追加 ---
import React, { Fragment, useEffect, useReducer } from 'react';

// --- ここから追加 ---
import { fetchLineFoods } from '../apis/line_foods';
// --- ここまで追加 ---
// reducers
import {
  initialState,
  lineFoodsActionTyps,
  lineFoodsReducer,
} from '../reducers/lineFoods';
// --- ここまで追加 ---
export const Orders = () => {
  const [state, dispatch] = useReducer(lineFoodsReducer, initialState);
// --- ここから追加 ---
  useEffect(() => {
    // --- ここから修正 ---
    dispatch({ type: lineFoodsActionTyps.FETCHING });
    fetchLineFoods()
      .then((data) =>
        dispatch({
          type: lineFoodsActionTyps.FETCH_SUCCESS,
          payload: {
            lineFoodsSummary: data
          }
        })
      )
      .catch((e) => console.error(e));
    // --- ここから修正 ---
  }, []);
// --- ここまで追加 ---

  return (
    <Fragment>
      注文画面
    </Fragment>
  )
}
