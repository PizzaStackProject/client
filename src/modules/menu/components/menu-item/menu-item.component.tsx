import { cloudinary } from "@app/core/cloudinary/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import clsx from "clsx";
import { FC } from "react";
import { Pizza } from "../../types";

interface MenuItemProps extends Omit<Pizza, 'id'> {
  fitImage?: boolean;
}


export const MenuItem: FC<MenuItemProps> = ({ image, weight,title,ingredients,price,fitImage = false }) => {

  const imageCld = cloudinary.image(image);

  const transformation = ['w_384','h_240','dpr_2.0'];

  if (fitImage)
   transformation.unshift('c_fit');

  imageCld.addTransformation(transformation.join(','));

  const titleClasses = clsx('text-xl font-semibold', {
    'mb-2': ingredients,
    'mb-8': !!ingredients
  })

  return (
    <div className="w-96 shadow-xl rounded-2xl">
      <div className="relative">
        <AdvancedImage
          cldImg={imageCld}
          width={384}
          height={240}
          className="rounded-t-2xl"
        />
        {weight && (
          <span className="absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 rounded-[2rem]">
          {weight}g
        </span>)}
      </div>
      <div className="p-8">
        <h2 className={titleClasses}>{title!}</h2>
        {ingredients && (
          <p className="mb-8">{ingredients!}</p>
        )}
        <span className="text-xl font-semibold">{price}$</span>
      </div>
    </div>
  );
};
