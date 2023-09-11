import { MenuItem } from '../menu-item/menu-item.component';
import { Pizza } from '../../types';

interface MenuListProps {
  items: Pizza[];
}

export const MenuList = ({items}:MenuListProps) => {
    return (
        <div className='flex flex-wrap gap-10'>
            {items.map(({image, ...pizza}) => (
                <MenuItem image={image} {...pizza} key={pizza.id} />
            ))}
        </div>
    )
}