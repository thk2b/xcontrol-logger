export default Super => class Logger extends Super {
    log(nextStore){
        console.log(nextStore)
    }
    set store(nextStore){
        this.log(nextStore)
        super.store = nextStore
    }
}