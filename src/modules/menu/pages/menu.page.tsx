import { useGetMenuQuery } from "@app/core/types";
import { MenuListLoading } from "../components/menu-list-loading/menu-list-loading.component";
import { ShowInfo } from "@app/common/components/show-info/show-info.component";
import { MenuCategory } from "../components/menu-category/menu-category.component";

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

  return (
    <div className="flex flex-col gap-12">
      {data.category.map((category) => (
        <MenuCategory data={category} key={`menu-page-${category.id}`} />
      ))}
    </div>
  );
};
