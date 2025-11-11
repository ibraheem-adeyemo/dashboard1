'use client';

import CustomFormSelect from '@/components/forms/custom-form-select';
import CustomTextArea from '@/components/forms/custom-textarea';
import TextField from '@/components/forms/text-field';
import { CustomSelect } from '@/components/ui/select/custom-select';
import { useProductForm } from '@/hooks/useProductForm';
import { BRAND_OPTIONS, CATEGORY_OPTIONS } from '@/utils/helpers';
import { productSchema } from '@/utils/schema';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import TagInput from './TagInput';

export const ProductForm = () => {
    const {initialProductValue, updateProductFormData, productFormData, handleSubmit } = useProductForm();

    const [tags, setTags] = useState([])

  const handleTagsChange = (newTags:[]) => {
    console.log('Tags updated:', newTags);
    setTags(newTags);
  };

  return (
    <div>
        <div>
          <Formik
            enableReinitialize
            initialValues={initialProductValue}
            validateOnBlur={true}
            validateOnChange={false}
            validationSchema={productSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, setFieldValue, dirty, isValid }) => (
             <Form className="space-y-5 max-w-2xl">
          <TextField
            id="productName"
            name="productName"
            label="Product Name"
            placeholder="Enter product name"
            value={values.productName}
            fieldHasBorder
            className="bg-transparent border"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e);
              updateProductFormData('productName', e.target.value);
            }}
            onBlur={handleBlur}
            error={touched.productName && Boolean(errors.productName)}
            messageType={{
              type: errors,
              message: touched.productName && errors.productName,
            }}
          />

          {/* Description */}
          <CustomTextArea
            id="description"
            name="description"
            label="Description"
            placeholder="Write a short description"
            value={values.description}
            fieldHasBorder
            className="bg-transparent h-[10rem] resize-none"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              handleChange(e);
              updateProductFormData('description', e.target.value);
            }}
            onBlur={handleBlur}
            error={touched.description && Boolean(errors.description)}
            messageType={{
              type: errors,
              message: touched.description && errors.description,
            }}
          />

          {/* Category */}

          <CustomFormSelect 
          id="category"
          name="category" 
          value={values.category} 
          label='Category'
          onChange={(e) => {
              handleChange(e);
              updateProductFormData('category', e);
            }} 
            options={CATEGORY_OPTIONS} 
            placeholder='select a category'
            messageType={{
                type: errors,
                message: touched.category && errors.category,
              }}
              error={touched.category && Boolean(errors.category)}
               />

          {/* Brand */}
          <CustomFormSelect 
          id="brand"
          name="brand" 
          value={values.brand} 
          label="Brand"
          onChange={(e) => {
              handleChange(e);
              updateProductFormData('category', e);
            }} 
            options={BRAND_OPTIONS} 
            placeholder='select a brand'
            messageType={{
                type: errors,
                message: touched.brand && errors.brand,
              }}
              error={touched.brand && Boolean(errors.brand)}
               />
         

          <div className="flex flex-col md:flex-row justify-between">
          <TextField
            id="sku"
            name="sku"
            label="SKU"
            placeholder="e.g. SMG-S23-128GB"
            value={values.sku}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e);
              updateProductFormData('sku', e.target.value);
            }}
            fieldHasBorder
            className="bg-transparent border border-[var(--neutral-border)]"
            onBlur={handleBlur}
            error={touched.sku && Boolean(errors.sku)}
            messageType={{
              type: errors,
              message: touched.sku && errors.sku,
            }}
          />

          {/* Stock Quantity */}
          <TextField
            id="stockQuantity"
            name="stockQuantity"
            label="Stock Quantity"
            type="number"
            placeholder="Enter available stock"
            fieldHasBorder
            className="bg-transparent border border-[var(--neutral-border)]"
            value={values.stockQuantity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e);
              updateProductFormData('stockQuantity', e.target.value);
            }}
            onBlur={handleBlur}
            error={touched.stockQuantity && Boolean(errors.stockQuantity)}
            messageType={{
              type: errors,
              message: touched.stockQuantity && errors.stockQuantity,
            }}
          />
</div>
<div className="flex flex-col md:flex-row justify-between">
          <TextField
            id="regularPrice"
            name="regularPrice"
            label="Regular Price"
            type="number"
            placeholder="Enter regular price"
            fieldHasBorder
            className="bg-transparent border border-[var(--neutral-border)]"
            value={values.regularPrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e);
              updateProductFormData('regularPrice', e.target.value);
            }}
            onBlur={handleBlur}
            error={touched.regularPrice && Boolean(errors.regularPrice)}
            messageType={{
              type: errors,
              message: touched.regularPrice && errors.regularPrice,
            }}
          />

          {/* Sale Price */}
          <TextField
            id="salePrice"
            name="salePrice"
            label="Sale Price"
            type="number"
            placeholder="Enter sale price"
            fieldHasBorder
            className="bg-transparent border border-[var(--neutral-border)]"
            value={values.salePrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e);
              updateProductFormData('salePrice', e.target.value);
            }}
            onBlur={handleBlur}
            error={touched.salePrice && Boolean(errors.salePrice)}
            messageType={{
              type: errors,
              message: touched.salePrice && errors.salePrice,
            }}
          />
</div>
<div className="flex flex-col md:flex-row justify-between">
          <TextField
            id="TaxStatus"
            name="TaxStatus"
            label="Tax Status"
            placeholder="e.g. Taxable"
            fieldHasBorder
            className="bg-transparent border border-[var(--neutral-border)]"
            value={values.TaxStatus}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e);
              updateProductFormData('TaxStatus', e.target.value);
            }}
            onBlur={handleBlur}
            error={touched.TaxStatus && Boolean(errors.TaxStatus)}
            messageType={{
              type: errors,
              message: touched.TaxStatus && errors.TaxStatus,
            }}
          />

          {/* Tax Class */}
          <TextField
            id="TaxClass"
            name="TaxClass"
            label="Tax Class"
            placeholder="e.g. Standard Rate"
            fieldHasBorder
            className="bg-transparent border border-[var(--neutral-border)]"
            value={values.TaxClass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(e);
              updateProductFormData('TaxClass', e.target.value);
            }}
            onBlur={handleBlur}
            error={touched.TaxClass && Boolean(errors.TaxClass)}
            messageType={{
              type: errors,
              message: touched.TaxClass && errors.TaxClass,
            }}
          />

         </div>
         <TagInput 
        initialTags={tags}
        onTagsChange={handleTagsChange}
      />
          {/* <TextField
            id="tags"
            name="tags"
            label="Tags"
            placeholder="Enter tags separated by commas"
            value={values.tags.join(', ')}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const tagList = e.target.value.split(',').map(tag => tag.trim());
              handleChange({
                target: { name: 'tags', value: tagList },
              } as any);
              updateProductFormData('tags', tagList);
            }}
            onBlur={handleBlur}
            error={touched.tags && Boolean(errors.tags)}
            messageType={{
              type: errors,
              message: touched.tags && (errors.tags as string),
            }}
          /> */}

          
        </Form>
        
         )}
          </Formik>
        </div>
    </div>
  )
}
