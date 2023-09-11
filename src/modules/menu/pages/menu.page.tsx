import { useGetMenuQuery } from "@app/core/types";
import { MenuList } from "../components/menu-list/menu-list.component";
import { MenuListLoading } from "../components/menu-list-loading/menu-list-loading.component";
import { ShowInfo } from "@app/common/components/show-info/show-info.component";

export const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();

  if (error) {
    return (
      <ShowInfo type="error">
        <p>Sorry. It's error</p>
        <p>Try later</p>
      </ShowInfo>
    );
  }

  if (loading) return <MenuListLoading items={9} />;

  if (!data) {
    return (
      <ShowInfo type="info">
        <p>Sorry. Menu is empty</p>
      </ShowInfo>
    );
  }

  return <MenuList items={data?.menu} />;
};
