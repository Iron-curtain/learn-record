function fetchData() {}

// function fetch() {
//     return (
//         fetchData().then(() => {
//             return 'done'
//         })
//     )
// }

// async function fetch() {
//     await fetchData()
//     return 'done'
// }

function fetch() {
    try {
        fetchData()
            .then(result => {
                const data = JSON.parse(result)
            })
            .catch(err => {
                console.log(err);
            })
    } catch (error) {
        console.log(error);
    }
}

async function fetch() {
    try{
        const data = JSON.parse(await fetchData())
    } catch (error) {
        console.log(error);
    }
}