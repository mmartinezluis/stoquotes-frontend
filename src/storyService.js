class StoryService {
    
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getStories(){
        fetch(`${this.endpoint}/stories`)
        .then(resp => resp.json())
        .then(stories =>  {
            for (const story of stories ){
                const s =  new Story(story)
                s.addToDom()
            }
        })
     }

     createStory(){
        const story = {
            description: document.getElementById('description').value,
            user_id: 1,
            quote_id: 1,
        }
    
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(story)
        }

        fetch(`${this.endpoint}/stories`, configObj)
        .then(resp => resp.json())
        .then(story => {
            const s = new Story(story)
            console.log(s)
            s.addToDom()
        })
     }

     deleteStory(id){
         fetch(`${this.endpoint}/stories/${id}`, {
             method: 'DELETE',
             headers: {
                 'Content-Type': 'application/json'
             }
         })
         .then(resp => resp.json())
         .then(json => {
             alert(json.message)
         })
     }
}