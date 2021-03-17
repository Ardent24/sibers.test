const createHeader = () => {
  return `
            <header class="contacts-header">
               <div class="contacts-header__wrapper">
                    <h1 class="contacts-title">Contacts</h1>
                    <button class="contacts-header__add"></button> 
                    <input type="search" class="contacts-header__search" placeholder="Search"/>
                  </div>
            </header>
        `
}

export {createHeader};