class NumberUrlapElem {
  #key;
  #elemLeiro;
  #valid = false;
  #ertek = ""
  constructor(key, elemLeiro, szuloElem) {
    this.#key = key;
    this.#elemLeiro = elemLeiro;
    this.formElem = szuloElem;

    this.#numberElem(key);
    this.inputElem = $(`#${this.#key}`);
    console.log(this.inputElem);
    this.validElem = this.formElem
      .children("div:last-child")
      .children(".valid");
    console.log(this.validElem);
    this.invalidElem = this.formElem
      .children("div:last-child")
      .children(".invalid");
    console.log(this.invalidElem);

    this.inputElem.on("keyup", () => {
        this.#ertek = this.inputElem.val();
        console.log(this.inputElem.val())
        console.log(this.#ertek)
       // let reg = this.#elemLeiro.regex;
       // let regReg = new RegExp(reg);
      //  console.log(regReg.test(this.#ertek));
        if (this.#ertek >= this.#elemLeiro.min && this.#ertek  <= this.#elemLeiro.max) {
          this.#valid = true;
          this.validElem.removeClass("lathato");
          this.invalidElem.addClass("lathato");
        } else {
          this.#valid = false;
          this.invalidElem.removeClass("lathato");
          this.validElem.addClass("lathato");
        }
      });
  }

  get valid() {
    return this.#valid;
  }

  get key() {
    return this.#key;
  }

  get ertek() {
    return this.#ertek;
  }

  #numberElem() {
    let txt = "";
    txt += `
                <div class="mb-3 mt-3">
                    <label for="${this.#key}" 
                            class= "form-label">${this.#elemLeiro.megj}:
                    </label>
                    <input  type="${this.#elemLeiro.megj}" 
                            class="form-control" 
                            id="${this.#key}" 
                            placeholder = "${this.#elemLeiro.placeholder}" 
                            name = "${this.#key}"
                            value = "${this.#elemLeiro.value}">
                    <div class="valid lathato">VALID</div>
                    <div class="invalid lathato">${this.#elemLeiro.valid}</div>
                </div>
            `;
//min = "${this.#elemLeiro.regex.min}"
//max = "${this.#elemLeiro.regex.max}"pattern = "${this.#elemLeiro.regex}">
                            
    this.formElem.append(txt);
  }
}
export default NumberUrlapElem;
