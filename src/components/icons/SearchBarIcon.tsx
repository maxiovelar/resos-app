import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";

type Props = React.ComponentProps<typeof SearchIcon>;
export const SearchBarIcon: FC<Props> = ({ ...props }) => {
  return <SearchIcon {...props} />;
};
