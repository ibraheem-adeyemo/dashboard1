import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  productName: Yup.string()
    .trim()
    .required("Product name is required")
    .min(3, "Product name must be at atleast 3 characters")
    .max(100, "Product name must be at most 100 characters"),

  description: Yup.string()
    .trim()
    .required("Product description is required")
    .min(50, "Product description must be at atleast 50 characters")
    .max(500, "Product description must be at most 500 characters"),

  category: Yup.string().trim().required("Category is required"),

  brand: Yup.string().trim().required("Brand is required"),

  sku: Yup.string()
    .trim()
    .required("SKU is required")
    .max(50, "SKU must be at most 50 characters"),

  stockQuantity: Yup.number()
    .typeError("Stock quantity must be a number")
    .required("Stock quantity is required")
    .integer("Stock quantity must be an integer")
    .min(0, "Stock quantity cannot be negative"),

  regularPrice: Yup.number()
    .typeError("Regular price must be a number")
    .required("Regular price is required")
    .positive("Regular price must be greater than 0"),

  salePrice: Yup.number()
    .typeError("Sale price must be a number")
    .min(0, "Sale price cannot be negative")
    .max(
      Yup.ref("regularPrice"),
      "Sale price cannot be greater than regular price",
    )
    .nullable(),

  TaxStatus: Yup.string()
    .oneOf(["taxable", "none", "shipping"], "Invalid tax status")
    .required("Tax status is required"),

  TaxClass: Yup.string().required("Tax class is required"),

  tags: Yup.array()
    .of(Yup.string().trim().required("Tag cannot be empty"))
    .min(1, "At least one tag is required"),

  imgUrl: Yup.array()
    .of(
      Yup.mixed().test(
        "file-or-url",
        "Image URL or file is required",
        (value: string | string[]) => {
          return typeof value === "string" || value instanceof File;
        },
      ),
    )
    .min(1, "At least one image is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(4).required("Password is required"),
});
