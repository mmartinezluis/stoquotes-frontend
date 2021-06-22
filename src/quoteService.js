class QuoteService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getQuote(user_id, quote_id){
        fetch(`${this.endpoint}/users/${user_id}/quotes/${quote_id}`)
        .then(resp => resp.json())
        .then(quote => {
            const q = new Quote(quote)
            return q
        })
    }


}