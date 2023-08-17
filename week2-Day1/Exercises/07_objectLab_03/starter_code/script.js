const library = [
    {
        title: "Musashi",
        author: "Eiji Yoshikawa",
        read: true
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Bronte",
        read: true
    },
    {
        title: "Northinger Abbey",
        author: "Jane Austen",
        read: false
    },
    {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        read: true
    }
];

for(let i=0; i<library.length; i++){
    
        const bookLine = library[i].title + " by " + library[i].author;
    
        if(library[i].read){
            console.log("You already read " + bookLine);
        }else{
            console.log("You still need to read " + bookLine);
        }

}