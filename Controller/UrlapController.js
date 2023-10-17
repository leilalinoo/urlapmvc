import View from "../View/UrlapView.js"
import Model from "../Model/UrlapModel.js"

class Controller{
    constructor(){
        console.log("cnstr")
        this.urlapModel = new Model()
        this.urlapView  = new View($(".urlap"), this.urlapModel.leiro)

        $(window).on("felvesz", (event)=>{
            console.log(event.detail)
        })
    }
}
export default Controller