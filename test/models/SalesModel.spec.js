import SalesModel from '../../src/models/Sales.Model'
import ProductsModel from '../../src/models/Products.Model'
import ClientsModel from '../../src/models/Clients.Model'
import EmployeesModel from '../../src/models/Employees.Model'
import ProvidersModel from '../../src/models/Providers.Model'

describe("Sales database API test", () => {

    it("Should create a new sale", (done) => {

        let providerProduct = new ProvidersModel().createProvider({
            nome_forn: 'DISTRIBUIDORA PARANA',
            tel_forn: 24342
        }).then(provider => {
            if (provider) {
                let product = new ProductsModel().createProduct({
                    nome_prod: 'Whey Protein',
                    bar_prod: 4345,
                    cod_fab: 13123,
                    nome_fab: 'Growth',
                    qnt_prod: 50,
                    preco_prod: "76.00",
                    fornecedores_cod_forn: provider.insertId
                })
                return product
            }
        }).catch(e => {
            console.log(e)
        })
        let client = new ClientsModel().createClient({
            nome_cli: "Luan A S",
            cpf_cli: 3280470,
            tel_cli: 12312,
            end_cli: 'RUA TESTE Nº 123'
        })

        let empl = new EmployeesModel().createEmpoyee({
            nome_func: 'Jose reis',
            end_func: 'Rua do teste',
            tel_func: 93749723,
            email_func: 'jose@hotmail.com',
            senha_func: 'senha'
        })

        let salePromise = Promise.all([providerProduct, client, empl]).then(data => {
            if (data) {
                let sale = new SalesModel().createSale({
                    produtos_cod_prod: data[0].insertId,
                    clientes_cod_cli: data[1].insertId,
                    funcionarios_cod_func: data[2].insertId,
                    data_vend: new Date().toISOString().slice(0, 19).replace('T', ' '),
                    forma_pgto: 'VISTA'
                })

                return sale
            }
        }).catch(e => {
            console.log(e)
        })

        salePromise.then(data => {
            if (data) {
                done()
            }
        }).catch(e => {
            console.log(e)
        })

    })

    it ('Should retrive all data from database', (done) => {
        new SalesModel().readAllSales().then(sales => {
            if (sales) {
                done()
            }
        }).catch(e => {
            console.log(e)
        })
    })

    it ('Should retrive single sale', (done) => {
        new SalesModel().readAllSales().then(sales => {
            if (sales) {
                new SalesModel().readById(sales[0])
                    .then(sale => {
                        if(sale)
                            done()
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        }).catch(e => {
            console.log(e)
        })
    })

    it ('Should delete sale', (done) => {
        new SalesModel().readAllSales().then(sales => {
            if (sales) {
                new SalesModel().deleteSale(sales[0])
                    .then(data => {
                        if (data.affectedRows != 0) {
                            done()
                        }
                    }).catch(e => {
                        console.log(e)
                    })
            }
        }).catch(e => {
            console.log(e)
        })
    })

})