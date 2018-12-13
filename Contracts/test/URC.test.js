const URC = artifacts.require("./URC.sol");

contract('URC', (accounts) => {

    let urc;

    beforeEach(async ()=>{
        urc = await URC.new();
    })

    it("Deve ser zero o saldo da Conta 0", async () => {
        return urc.balanceOf(accounts[0]).then( function (balance) {
            assert.equal(0, balance);
        })
    });

    it("Devem ser criados tokens para Conta 0", async () => {

        let createdTokens = 100;

        return urc.createTokens(accounts[0],createdTokens).then( function (instance) {
            return urc.balanceOf(accounts[0]).then( function (balance) {
                assert.equal(createdTokens, balance);
            })
        });        
    });

    it("Devem ser transferidos 30 tokens da Conta 0 para a Conta 3", async () => {

        let createdTokens = 100;
        let transferTokens = 30;

        return urc.createTokens(accounts[0],createdTokens).then( function (instance) {
            return urc.transfer(accounts[3],transferTokens).then( function (instance) {
                return urc.balanceOf(accounts[3]).then( function (balance) {
                    assert.equal(transferTokens, balance, "Saldo da Conta 3 incorreta");
                });
            });
        });        
    });


});
