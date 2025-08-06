function* IdGenerator() {
    let id = 0;
    while (true) {
        yield ++id;
        // console.log(id);
    }
}

const idIterator = IdGenerator();

export const createID = () => idIterator.next().value;
