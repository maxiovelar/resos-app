import { FC } from "react";
import { Alert } from "../../common";
import { Loader } from "..";

interface Props {
  isLoading: boolean;
  isEmpty: boolean;
  isError: boolean;
  children: React.ReactNode;
}

export const StateContainer: FC<Props> = ({
  isLoading,
  isEmpty,
  isError,
  children,
}) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Alert severity="error">Something went wrong.</Alert>;
  }

  if (isEmpty) {
    return <Alert severity="info">No results found for your search.</Alert>;
  }

  return <>{children}</>;
};
