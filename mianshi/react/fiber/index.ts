const tasks: any[] = []

function * run () {
    let task
    while (task = tasks.shift()) {
        yield task()
    }
}


const iterator = run()

iterator.next()