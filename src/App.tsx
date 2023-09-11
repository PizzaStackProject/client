import { Header } from "@app/common/components/header/header.component";
import { MenuList } from "@app/modules/menu/components/menu-list/menu-list.component";
import { MenuPage } from "@app/modules/menu/pages/menu.page";

export const App = () => (
  <div>
    <Header />
    <div className="mx-12 mb-24">
      <MenuPage />
    </div>
  </div>
)
