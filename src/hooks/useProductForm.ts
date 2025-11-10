import { useState } from "react";

interface IProductFormProp {
    productName: string;
    description: string;
    category: string;
    brand: string;
    sku: string;
    stockQuantity: string | number;
    regularPrice: string | number;
    TaxStatus: string;
    TaxClass: string;
    salePrice: string | number;
    tags: string[];
    imgUrl: string[];
}
export const useProductForm = () => {
    const initialProductValue: IProductFormProp = {
      productName: '',
      description: '',
      category: '',
      brand: '',
      sku: '',
      stockQuantity: '',
      regularPrice: '',
      TaxStatus: '',
      TaxClass: '',
      salePrice: '',
      tags: [],
      imgUrl: [],
    };

    const [productFormData, setProductFormData] = useState<typeof initialProductValue>(initialProductValue)
    
    const updateProductFormData = (field:string, value:string | string []) => {
        setProductFormData(prev => (
            {
                ...prev,
                [field] : value,
            }
        ))
    }

    const handleSubmit = () => {
        console.log(productFormData)
    }
    return {
        initialProductValue,
        productFormData,
        handleSubmit,
        updateProductFormData
    };
  };