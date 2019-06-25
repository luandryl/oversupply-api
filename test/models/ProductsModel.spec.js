import chai from 'chai'
import ProductsModel from '../../src/models/Products.Model'
import ProvidersModel from '../../src/models/Providers.Model'

chai.should()

describe('Products TEST basic API =>', () => {

    const productsModel = new ProductsModel()

    it('Shoud create new Product', (done) => {
        let provider = new ProvidersModel()

        provider = provider.createProvider({
            nome_forn: 'SOUZA CRUZ',
            tel_forn: 243423
        })

        provider.then(data => {
            if (data) {
                let newProduct = productsModel.createProduct({
                    nome_prod: 'Cigarro Height',
                    bar_prod: 4345,
                    cod_fab: 13123,
                    nome_fab: 'HEIGHT',
                    qnt_prod: 50,
                    preco_prod: "5.00",
                    fornecedores_cod_forn: data.insertId
                })
                newProduct.then(n => {
                    if (n) {
                        done()
                    }
                }).catch(err => {
                    console.log(err)
                })
            }           
        }).catch(e => {
            console.log(e)
        })
    })

    it ("Shoud retrive all products", (done) => {

        let productsArray = productsModel.readAllProducts()

        productsArray.then(products => {
            if(products) {
                done()
            }
        }).catch(err => {
            console.log(err)
        })
    })

    it ("Shoud retrive product by id", (done) => {
        let productsArray = productsModel.readAllProducts()

        productsArray.then(products => {
            if(products) {
                let singleProduct = productsModel.readById(products[0])
                singleProduct.then(product => {
                    if(product)
                        done()
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(err => {
            console.log(err)
        })
    })
    it ('Should update a product by id', (done) => {
        let productsArray = productsModel.readAllProducts()

        productsArray.then(products => {
            if(products) {
                let updateProductObj = products[0]
                updateProductObj.preco_prod = "3.50"
                let updated = productsModel.updateProduct(updateProductObj)
                updated.then(up => {
                    if(up.affectedRows != 0 ){
                        done()
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }).catch(err => {
            console.log(err)
        })
    })

    it('Shoud delete product by id', (done) => {
        let productsArray = productsModel.readAllProducts()

        productsArray.then(products => {
            if(products) {
                let deleteProductObj = products[0]
                let deleted = productsModel.delete(deleteProductObj)
                deleted.then(del => {
                    if(del.affectedRows != 0 ){
                        done()
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }).catch(err => {
            console.log(err)
        })
    })
   


})