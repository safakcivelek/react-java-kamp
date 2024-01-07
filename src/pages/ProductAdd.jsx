import { Form, Formik, Field, ErrorMessage } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react';
import * as Yup from 'yup';
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

//Yup doğrulama yapmamızı sağlayan bir yapıdır.
export default function ProductAdd() {
    const initialValues = { title: "", price: 10 }

    const schema = Yup.object({
        title: Yup.string().required("Ürün adı zorunludur."),
        price: Yup.number().required("Ürün fiyatı zorunludur.")
    })

    return (
        /* Component'imizi açtığımız zaman o formumuzun default değerlerine ihtiyaç duyar 'Formik' */
        /* validationSchema 'yup' kütüphanesi ile gelir. Validasyon kurallarını belirleyen şemadır */
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <Form className='ui form'>
                <KodlamaIoTextInput name="title" placeholder="Ürün Adı" />
                <KodlamaIoTextInput name="price" placeholder="Ürün fiyatı" />
                <Button color='green' type='submit'>Ekle</Button>
            </Form>
        </Formik>
    )
}
