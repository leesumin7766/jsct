/*  문제 분석
    1. 도서 정보 기입
    2. 판매중인지 확인
    3. 재고와 구매권수 비교
    4. 절판 시 *
    5. 출력
*/
function find(param0, param1) {
    // 1.
    books = [
        { name: "Great", soldout: true, category: "Novel", rating: 3.1, count: 2, start:"197001", end:"198104"},
        { name: "Laws", soldout: true, category: "Novel", rating: 4.8, count: 3, start:"198006", end:"198507"},
        { name: "Dracula", soldout: true, category: "Drama", rating: 2.3, count: 6, start:"199105", end:"199605"},
        { name: "Mario", soldout: true, category: "Drama", rating: 3.8, count: 4, start:"200109", end:"201211"},
        { name: "House", soldout: false, category: "Magazine", rating: 4.4, count: 1, start:"198707", end:"202506"},
        { name: "Art1", soldout: true, category: "Design", rating: 4.2, count: 2, start:"198506", end:"199107"},
        { name: "Art2", soldout: true, category: "Design", rating: 3.0, count: 3, start:"199502", end:"200512"},
        { name: "Wars", soldout: true, category: "Novel", rating: 4.6, count: 2, start:"198204", end:"200305"},
        { name: "Solo", soldout: false, category: "Poem", rating: 4.9, count: 2, start:"200703", end:"202506"},
        { name: "Lost", soldout: false, category: "Web", rating: 3.2, count: 8, start:"199806", end:"202506"},
        { name: "Ocean", soldout: true, category: "Magazine", rating: 4.3, count: 1, start:"200502", end:"202006"}
    ]
    answer = [];

    for (const book of books) {
        if (book.start <= param0 && param0 <= book.end) { // 2.
            if (book.count >= param1){ // 3.
                let name = book.soldout ? book.name + "*" : book.name; // 4.
                answer.push({ name, rating: book.rating, category: book.category});
            }  
        } 
    }

    answer.sort((x, y) => y.rating - x.rating);
    if (answer.length === 0) {
        return "!EMPTY";
    } else {
        return answer.map(book => `${book.name}(${book.category}) ${book.rating}`).join(", ");
    }
}

console.log(find("198402", 2))
console.log(find("200008", 6))
console.log(find("199004", 3))