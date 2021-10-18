import App from './App.js';
import shuffle from './shuffle.js'; 

//Test de app
describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });

  it("número de cartas en el juego", () => {
    let cards = App().getElementsByClassName("card");
    expect(cards).toHaveLength(12);
  }); 

  
});


//Test de shuffle
describe("shuffle", () => {
  it("debería ser una función", () => {
    expect(typeof shuffle).toEqual('function');
  });

  it('debería retornar 2 para "[1,2,3,4]"' , () => {
    let array = [1,2,3,4];
  expect(shuffle(array)).toHaveLength(4);
  });

  it('debería retornar 3 para "[1,2,3,4]"' , () => {
    let array = [1,2,3,4];
  expect(shuffle(array)).toContain(3);
  });

 /* it('debería barajar las cartas', () => {
    let array = [1, 2, 3, 4, 5,];
    expect(shuffle(array) == array)
})*/
})