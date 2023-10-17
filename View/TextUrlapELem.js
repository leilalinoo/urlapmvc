class TextUrlapElem {
  #key;
  #elemLeiro = {};
  #valid = false;
  #ertek = "";
  constructor(key, elemLeiro, szuloElem) {
    this.#key = key;
    this.#elemLeiro = elemLeiro;
    this.formElem = szuloElem;

    this.#textElem(key);
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
      let reg = this.#elemLeiro.regex;
      let regReg = new RegExp(reg);
      console.log(regReg.test(this.#ertek));
      if (regReg.test(this.#ertek)) {
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

  #textElem() {
    let txt = "";
    txt += `
                <div class="mb-3 mt-3">
                    <label for="${this.#key}" 
                            class= "form-label">${this.#elemLeiro.megj}:
                    </label>
                    <input  type="${this.#elemLeiro.type}" 
                            class="form-control" 
                            id="${this.#key}" 
                            placeholder = "${this.#elemLeiro.placeholder}"
                            name = "${this.#key}"
                            value = "${this.#elemLeiro.value}" 
                            pattern = "${this.#elemLeiro.regex}">
                    <div class="valid lathato">VALID</div>
                    <div class="invalid lathato">${this.#elemLeiro.valid}</div>
                </div>
            `;

    this.formElem.append(txt);
  }
}
export default TextUrlapElem;
