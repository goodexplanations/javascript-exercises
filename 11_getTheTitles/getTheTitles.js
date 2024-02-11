const getTheTitles = function(books) {

    titleList = [];

    for (const singleBook of books){
        titleList.push(singleBook.title);
        console.log(`Made it here`);
        console.log(`${singleBook.title}`);
    }

    return titleList;
};

// Do not edit below this line
module.exports = getTheTitles;
