import { EffectCallback, useEffect } from "react";

/**
 * ### useMount hook
 *
 * 컴포넌트가 mount될 시 실행할 콜백 함수입니다.
 *
 * @param cb 실행할 콜백 함수
 */
const useMount = (cb: EffectCallback) => {
  useEffect(() => {
    cb && cb();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMount;
