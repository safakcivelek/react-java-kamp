import { Form, Formik } from 'formik'
import React from 'react'
import { FormField } from 'semantic-ui-react';
import * as Yup from 'yup';

//Yup doğrulama yapmamızı sağlayan bir yapıdır.
export default function ProductAdd() {
    const initialValues = { title: "", price: 10 }

    const schema = Yup.object({
        title: Yup.string().required("Ürün adı zorunludur."),
        price: Yup.number().required("Ürün fiyatı zorunludur.")
    })

    return (
        <div>
            {/* Component'imizi açtığımız zaman o formumuzun default değerlerine ihtiyaç duyar 'Formik' */}
            {/* validationSchema 'yup' kütüphanesi ile gelir. Validasyon kurallarını belirleyen şemadır */}
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
            >
                <Form>
                    <FormField>
                        <label >Ürün Adı</label>
                        <input placeholder="Ürün Adı" />
                    </FormField>
                    <FormField>
                        <label >Ürün Fiyatı</label>
                        <input placeholder="Ürün Fiyatı" />
                    </FormField>
                </Form>
            </Formik>
        </div>
    )
}
