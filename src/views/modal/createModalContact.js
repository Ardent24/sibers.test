export default class CreateModalContact {
  constructor(name, phone, email, country, city) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.country = country;
    this.city = city;
  }

  templateModal() {
    return `
          <div class="contacts-modal__wrapper">
              <header class="contacts-modal__header">
                 <h4 class="contacts-modal__title">${this.name}</h4>
                  <button class="contacts-modal__close">&times;</button>
              </header>
              <main class="contacts-modal__main">
                <div class="contacts-modal__group">
                  <label class="contacts-modal__lable">Phone</label>
                  <input type="text" class="contacts-modal__inp" value="${this.phone}" data-attr="phone">
                </div>
                <div class="contacts-modal__group">
                   <label class="contacts-modal__lable">Email</label>
                    <input type="text" class="contacts-modal__inp" value="${this.email}" data-attr="email">
                </div>
                <div class="contacts-modal__group">
                  <label class="contacts-modal__lable">Country</label>
                  <input type="text" class="contacts-modal__inp" value="${this.country}" data-attr="address">
                </div>
                <div class="contacts-modal__group">
                  <label class="contacts-modal__lable">City</label>
                  <input type="text" class="contacts-modal__inp" value="${this.city}" data-attr="address">
                </div>
              </main>
          </div>
      `
  }
}