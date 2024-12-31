import * as React from "react";

export type DispatchSetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;
export type DispatchSetStateWithPrevStateType<S> = React.Dispatch<(prevState: S) => S>;