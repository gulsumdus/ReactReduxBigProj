//function Component
import React, { useEffect, useState } from "react"
//useEffect, DidMount.. yerine kullanılır. Yani herhangi bir işlemi call ederek return edilmesini sağlar!!!

import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";


function AddOrUpdateProduct({
    products,        // Ürünlerin listesini içeren prop
    categories,      // Kategorilerin listesini içeren prop
    getProducts,     // Ürünleri API'den veya store'dan çekmek için fonksiyon
    getCategories,   // Kategorileri API'den veya store'dan çekmek için fonksiyon
    saveProduct,     // Ürünü kaydetmek veya güncellemek için fonksiyon
    history,         // Sayfa yönlendirmesi yapmak için kullanılan nesne
    ...props         // Diğer ekstra props'ları almak için
}) {

    const [product, setProduct] = useState({ ...props.product }); // Başlangıçta prop'tan gelen ürünü state olarak ayarla

    useEffect(() => {          // Kategori listesi boşsa, getCategories() çağrılarak kategoriler getiriliyor.
        //props.product değiştiğinde, product state'i güncelleniyor.
        if (categories.length === 0) {
            getCategories(); // Eğer kategori listesi boşsa, güncelle
        }
        setProduct({ ...props.product }); // props.product değişirse, state'i güncelle
    }, [props.product, categories]); // props.product veya categories değiştiğinde çalıştır

    function handleChange(event) {
        const { name, value } = event.target; // Input'tan gelen name ve value değerini al

        setProduct(previousProduct => ({
            ...previousProduct, // Önceki ürün bilgilerini koru
            [name]: name === "categoryId" ? parseInt(value, 10) : value // Eğer kategori ID'si ise sayıya çevir, değilse direkt ata
        }));
    }

    function handleSave(event) {
        event.preventDefault(); // Formun varsayılan yenilenme davranışını engelle
        saveProduct(product).then(() => { // Ürünü kaydet ve işlem tamamlanınca
            history.push("/"); // Anasayfaya yönlendir
        });
    }

//*****************redux*******************/

const mapDispatchToProps = {
    getCategories, saveProduct
}

}

export default connect (mapDispatchToProps)(AddOrUpdateProduct)