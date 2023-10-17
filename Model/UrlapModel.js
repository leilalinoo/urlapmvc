import { urlapLeiro } from "./adat.js"
class Model{
    #leiro
    constructor(){
        this.#leiro = urlapLeiro
    }

    /*getLeiro(){
        return this.#leiro
    }*/

    get leiro(){
        return this.#leiro
    }
}
export default Model