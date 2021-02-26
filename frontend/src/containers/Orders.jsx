// --- 次でuseEffectを追加 ---
import React, { Fragment, useEffect } from 'react';

// --- ここから追加 ---
import { fetchLineFoods } from '../apis/line_foods';
// --- ここまで追加 ---

export const Orders = () => {

// --- ここから追加 ---
  useEffect(() => {
    fetchLineFoods()
      .then((data) =>
        console.log(data)
      )
      .catch((e) => console.error(e));
  }, []);
// --- ここまで追加 ---

  return (
    <Fragment>
      注文画面
    </Fragment>
  )
}
