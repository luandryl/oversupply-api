import chai from 'chai'
import ProvidersModels  from '../../src/models/Providers.Model'

describe('Providers test API', () => {
    const providersModel = new ProvidersModels

    it("Shoud create new Provider", (done) => {
        let newProvider = providersModel.createProvider({
            nome_forn: 'SOUZA CRUZ',
            tel_forn: 243423
        }).then((p) => {
            if (p)
                done()
        }).catch(er => {
            console.log(er)
        })
    })

    it("Sould retrive all providers", (done) => {
        let providersArray = providersModel.readAllProviders()
        providersArray.then(providers => {
            if(providers){
                done()
            }
        }).catch(e => {
            console.log(e)
        })
    })

    it("Sould retrive provider by id", (done) => {
        let providersArray = providersModel.readAllProviders()
        providersArray.then(providers => {
            if(providers){
                let singleProv = providersModel.readById(providers[0])
                singleProv.then(prov => {
                    if(prov)
                        done()
                }).catch(err => {
                    console.log(err)
                })
            }
        }).catch(e => {
            console.log(e)
        })
    })

    it("Sould update rovider by id", (done) => {
        let providersArray = providersModel.readAllProviders()
        providersArray.then(providers => {
            if(providers){
                let updateProviderObj = providers[0]
                updateProviderObj.nome_forn = 'MARLBORO CIGARR'

                let updatedProvider = providersModel.updateProvider(updateProviderObj)
                updatedProvider.then(up => {
                    if(up.affectedRows != 0)
                        done()
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(e => {
            console.log(e)
        })
    })

    it("Sould delete provider by id", (done) => {
        let providersArray = providersModel.readAllProviders()
        providersArray.then(providers => {
            if(providers){
                let deletedProvider = providersModel.deleteProvider(providers[0])
                deletedProvider.then(res => {
                    if(res.affectedRows != 0)
                        done()
                }).catch(err => {
                    console.log(err)
                })
            }
        }).catch(e => {
            console.log(e)
        })
    })

})