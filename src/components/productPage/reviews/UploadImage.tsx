"use client";

import { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";

import { IoIosRemoveCircle } from "react-icons/io";

import Button from "@/components/reusable/Button";

interface UploadImageProps {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const UploadImage: React.FC<UploadImageProps> = ({ images, setImages }) => {
  const [error, setError] = useState<string | null>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let files = Array.from(e.target.files);

      if (images.length + files.length > 3) {
        setError("Maximum 3 images are allowed.");
        return;
      }

      files.forEach((img, index) => {
        if (
          img.type !== "image/jpeg" &&
          img.type !== "image/png" &&
          img.type !== "image/webp"
        ) {
          setError(
            `${img.name} format is unsupported! Only JPEG,PNG & WEBP are allowed.`
          );
          files = files.filter((item) => item.name !== img.name);
          return;
        } else if (img.size > 1024 * 1024 * 5) {
          setError(`${img.name} size is too large. Max 5mb allowed.`);
          files = files.filter((item) => item.name !== img.name);
          return;
        } else {
          setError("");
          const reader = new FileReader();
          reader.readAsDataURL(img);
          reader.onload = (e) => {
            setImages((images) => [...images, e.target?.result as string]);
          };
        }
      });
    }
  };

  const removeImage = (image: string) => {
    setImages((images) => images.filter((img) => img !== image));
    if (images.length <= 3) {
      setError("");
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        hidden
        onChange={handleChange}
        multiple
        accept="image/png,image/jpeg,image/webp"
      />
      <div className="inline-block">
        <Button
          buttonText="Add Images"
          rounded="md"
          normal
          onClick={() => inputRef.current?.click()}
        />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex items-center gap-2">
        {images.length > 0 &&
          images.map((img, index) => (
            <div key={index} className="relative mt-3 ">
              <IoIosRemoveCircle
                size={20}
                className="absolute -top-2 -left-2 text-secondary-color bg-base-background-color cursor-pointer rounded-full"
                onClick={() => removeImage(img)}
              />
              <div className="h-[86px] w-[86px] overflow-hidden">
                <Image src={img} alt="" width={100} height={100} className="" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UploadImage;
