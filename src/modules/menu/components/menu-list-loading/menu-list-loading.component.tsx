import { Pizza } from "../../types";
import { MenuItemLoading } from "../menu-item-loading/menu-item-loading.component";

interface MenuListLoadingProps {
  items: number;
}

export const MenuListLoading = ({ items }: MenuListLoadingProps) => {
  return (
    <div className="flex flex-wrap gap-10">
      {new Array(items).fill(1).map((v, ind) => {
        return <MenuItemLoading key={`menu-loading-${ind}`} />;
      })}
    </div>
  );
};
