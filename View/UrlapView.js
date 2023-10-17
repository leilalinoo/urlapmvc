import TextUrlapElem from "./TextUrlapELem.js";

class View {
  #leiro = {};
  #urlapElemList = [];
  #valid = true;
  #urlapAdatok = {}
  constructor(szuloElem, leiro) {
    this.#leiro = leiro;
    this.szuloElem = szuloElem;
    this.szuloElem.append("<form>");
    this.formElem = this.szuloElem.children("form");
    console.log(this.formElem);
    this.#urlapLetrehoz();
    this.submitElem = $("#submit");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#valid = true;
      this.#urlapElemList.forEach((elem) => {
        this.#valid = this.#valid && elem.valid;
        console.log(this.#valid);
      });
      if (this.#valid) {
        console.log("valid");
        //össze kell szedni az űrlap adatait
        this.#urlapElemList.forEach((elem)=>{
            let ertek = elem.ertek
            let kulcs = elem.key
            this.#urlapAdatok[kulcs] = ertek
            this.#sajatEsemenykezelo("felvesz")
           // console.log(this.#urlapAdatok)
        })
      } else {
        console.log("nemvalid");
      }
    });
  }

  #urlapLetrehoz() {
    for (const key in this.#leiro) {
      switch (this.#leiro[key].type) {
        case "text":
          //this.#textElem(key);
          this.#urlapElemList.push(
            new TextUrlapElem(key, this.#leiro[key], this.formElem)
          );
          break;
        case "number":
          this.#numberElem(key);
          break;
        default:
          break;
      }
    }
    let txt = `<input type="submit" value="hoooowww yeaaaaahhhh ~~" id="submit">`;
    this.formElem.append(txt);
  }

  #numberElem(key) {
    let txt = "";
    txt += `
            <div class="mb-3 mt-3">
                <label for="${key}" class= "form-label">${
      this.#leiro[key].megj
    }:</label>
                <input  type="${this.#leiro[key].type}" 
                        class="form-control" 
                        id="${key}" 
                        placeholder = "${this.#leiro[key].placeholder}" 
                        value = "${this.#leiro[key].value}" 
                        min = "${this.#leiro[key].regex.min}"
                        max = "${this.#leiro[key].regex.max}">
                <div class="valid lathato">VALID</div>
                <div class="invalid lathato">${this.#leiro[key].valid}</div>
            </div>
        `;

    this.formElem.append(txt);
  }

  #sajatEsemenykezelo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, {detail: this});
    window.dispatchEvent(esemenyem);
  }

}
export default View;
