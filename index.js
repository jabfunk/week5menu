class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author
    }
    describe() {
        return `${this.author} wrote ${this.title}.`;
    }
}


class Favorites {
   constructor(author) {
       this.author = author; 
       this.books = [];
   }
   addBook(book) {
       if (book instanceof Book) {
           this.book.push(book); 
       } else {
           throw new Error(`Error`)
       }
   }
   describe() {
       return `${this.author} has ${this.book.length} books.`;
   }
}


class Menu {
    constructor() {
        this.favorites = [];
        this.selectedBook = null; 
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case `1`: 
                    this.createFavorite();
                    break;
                case `2`: 
                    this.viewFavorites(); 
                    break;
                case `3`: 
                    this.deleteFavorite();
                    break;
                default: 
                    selection = 0;
                
            }
            selection = this.showMainMenuOptions();
        }
        alert('Come back soon!');
    }

    showMainMenuOptions() { 
        return prompt(`
        0) exit 
        1) create new favorite book
        2) view favorite books
        3) delete favorite book
        `); 
    }

    showFavoritesMenuOptions(bookInfo) {
        return prompt(`
        0) exit
        1) create new favorite book
        2) delete favorite book
        ---------------------------
        ${bookInfo}
        `)
    }

    createFavorite() { 
        let authors = prompt(`Enter title of book`); 
        this.books.push(new Favorite(title));
    }

    viewFavorites() { 
        let index = prompt('Enter the name of the books you wish to view'); 
        if (index > -1 && index < this.favorites.length) {
            this.selectedBook = this.authors[index]; 
            }
        }

    deleteFavorite() { 
        let index = prompt('Enter the name of the favorite you wish to delete:'); 
        if (index > -1 && index.selectedAuthor.books.length) { 
            this.selectedAuthor.books.splice(index, 1); 
        }
    }   
} 
 
let menu = new Menu();
menu.start(); 
