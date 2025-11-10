'use client';

import TextField from '@/components/forms/text-field';
import { useProductForm } from '@/hooks/useProductForm';
import { productSchema } from '@/utils/schema';
import { Field, Form, Formik } from 'formik';
import React from 'react'

export const ProductForm = () => {
    const {initialProductValue, updateProductFormData, productFormData, handleSubmit } = useProductForm();


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
             <Form className="space-y-5 max-w-2xl shadow-sm">
                 
             <TextField
               id="productName"
               name="productName"
               label="Product Name"
               placeholder="Enter product name"
               value={values.productName}
               fieldHasBorder={true}
               className="bg-transparent border border-[var(--neutral-border)]"
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                 handleChange(e); // ensure Formik knows about the change
                 updateProductFormData('productName', e.target.value);
               }}
               onBlur={handleBlur} // crucial for touched tracking
               error={touched.productName && Boolean(errors.productName)}
               messageType={{type: errors, message: touched.productName && errors.productName}}
             />
             
             <TextField
               id="category"
               name="category"
               label="Category"
               placeholder="e.g. Electronics"
               value={values.category}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                 handleChange(e);
                 updateProductFormData('category', e.target.value);
               }}
               onBlur={handleBlur}
               error={touched.category && Boolean(errors.category)}
               messageType={{type: errors, message: touched.category && errors.category}}
             />
           </Form>
        
         )}
          </Formik>
        </div>
    </div>
  )
}
