
class Hello {
    constructor(_name) {
        this.name = _name
    }

    sayHello() {
        console.log(`Hey, ${this.name}, how are you doing`)
    }
}

async function main(params) {
    const helloKadu = new Hello(`Kadu`)
    const helloKatia = new Hello(`Katia`)

    helloKadu.sayHello()
    helloKatia.sayHello()
}

main()