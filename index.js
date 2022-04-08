class Deck {
    constructor(deck=null){
        if(deck == null){
            this.cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
            this.suit = ['heart','spade','diamond','club']
        }
        this.deck = this.create_deck()
    }
    create_deck(){
        let deck = []
        for(let i=0;i<this.suit.length;i++){
            for(let x=0;x<this.cards.length;x++){
            deck[deck.length] = `${this.cards[x]} of ${this.suit[i]}`
            }
        }
        return deck
    }
    deal_card(){
        if(this.deck.length == 0){
            println('new deck!');
            this.deck = create_deck();
        }
        else if(this.deck.length == 1){
            let last = this.deck[0];
            this.deck = [];
            return last;
        }
        else{
            let card_index = Randomizer.nextInt(0,this.deck.length-1);
            let card = this.deck[card_index];
            this.deck.splice(card_index, 1);
            return card;
        }
    }
}
var x = new Deck();
println(x.deal_card())
