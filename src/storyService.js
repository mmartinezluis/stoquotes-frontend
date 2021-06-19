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
}