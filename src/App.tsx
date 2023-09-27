import { Header } from "@app/common/components/header/header.component";
import { MenuPage } from "@app/modules/menu/pages/menu.page";
import { Footer } from "./common/components/footer/footer.component";
import { useGetCategoriesQuery } from "./core/types";

export const App = () => {

  const {data, loading} = useGetCategoriesQuery();

  return (
    <div>
      <Header isLoading={loading} categories={data?.category}/>
      <div className="mx-12 mb-24 pt-24">
        <MenuPage />
      </div>
      <Footer />
    </div>
  );
};
