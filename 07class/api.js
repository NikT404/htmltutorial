// async function hello() {
//     try {
//         const response = await fetch("https://api.ipify.org/?format=json")
//         const jsonResponse = await response.json()
//         console.log(jsonResponse)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// hello()    
// { ip: '152.58.99.235' }



// function hello() {
//     new Promise((resolve, reject) => {
//         fetch("https://api.ipify.org/?format=json")
//             .then(response => response.json())
//             .then(jsonResponse => resolve(jsonResponse))
//             .catch(error => reject(error));
//     })
//         .then(jsonResponse => {
//             console.log(jsonResponse);
//         })
//         .catch(error => {
//             console.log(error.message);
//         });
// }

// hello();
// { ip: '152.58.99.235' }




// const pincode = async () => {
//     try {
//         const response = await fetch("https://api.ipify.org/?format=json")
//         const jsonResponse = await response.json()
//         console.log(jsonResponse)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// pincode()

const cricket = async () => { //parameter ->a=305627
    try {
        const response = await fetch(`https://api-v1.com/v1/sV3.php?key=NZQ`)
        const jsonResponse = await response.json()
        console.log(jsonResponse["j"])
        console.log(jsonResponse["A"])

    } catch (error) {
        console.log(error.message)
    }
}
cricket()


