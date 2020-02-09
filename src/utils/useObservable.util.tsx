import { Observable } from "rxjs";
import { useEffect, useState } from "react";

/**
 * Returns the last value of an observable, using  the React Hook API
 * @param {Observable} observable
 * @return {string} last value of Observable
 */
export function useObservable<T>(observable: Observable<T>) {
  const [state, setState] = useState();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
}

