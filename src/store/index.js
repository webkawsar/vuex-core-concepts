import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {

        books: [
            {name: "Harry Potter", price: 100},
            {name: "Lord of The Rings", price: 150},
            {name: "Night Circus", price: 200},
            {name: "Lost World", price: 300}
        ],
        
    },
    getters: {
        saleBooks: (state) => {
            let books = state.books.map(book => {
                return {
                    name: `*** ${book.name} ***`,
                    price: book.price / 2
                }
            })
            return books;
        }
    },
    mutations: {
        reducePrice: (state) => {
            state.books.forEach(book => book.price -= 10)
        }
    },
    actions: {
        reducePrice: (context) => {
            context.commit("reducePrice");
        }
    }
})
