export default class ArrayList<T> {
    public length: number;
    private data: T[];


    constructor(initialSize: number) {
        this.data = new Array<T>(initialSize);
        this.length = 0;
    }

    prepend(item: T): void {
        this.insertAt(item, 0);

}
    insertAt(item: T, idx: number): void {
        if (idx <0 || idx > this.length ){
            throw new Error("Index out of range")
        }
        this.data.splice(idx, 0, item);
        this.length++;


}
    append(item: T): void {
        this.data[this.length] = item
        this.length++
}
    remove(item: T): T | undefined {
        const index = this.data.indexOf(item);
        if( index !== -1) {
            return this.removeAt(index);
        }
        return undefined;

}
    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length){
            return undefined;
        }
        return this.data[idx];

}
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length){
            return undefined;
        }
        const removeItem = this.data.splice(idx, 1)[0];
        this.length--;
        return removeItem
}
}