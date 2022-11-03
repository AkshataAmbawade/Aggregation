const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/House')
    .then(() => {
        console.log("working...")
    })
    .catch((err) => {
        console.log(err)
    })

const houseP = new mongoose.Schema({
    location: String,
    price: Number,
    noOfbedrooms: Number,
    floor: Number
})

const Housep = new mongoose.model("HousePrice", houseP);


// const createDocument = async () => {
//     try {
//         const client1 = new Housep({
//             location: "Delhi",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client2 = new Housep({
//             location: "Chandigarh",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 4
//         })
//         const client3 = new Housep({
//             location: "Delhi",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client4 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client5 = new Housep({
//             location: "Delhi",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client6 = new Housep({
//             location: "Bangalore",
//             price: 5,
//             noOfbedrooms: 6,
//             floor: 1
//         })
//         const client7 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client8 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client9 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client10 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client11 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client12 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client13 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client14 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client15 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client16 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client17 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client18 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client19 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client20 = new Housep({
//             location: "Bangalore",
//             price: 2,
//             noOfbedrooms: 3,
//             floor: 1
//         })
//         const client21 = new Housep({
//             location: "Delhi",
//             price: 6,
//             noOfbedrooms: 4,
//             floor: 5
//         })
//         const client22 = new Housep({
//             location: "chandigarh",
//             price: 6,
//             noOfbedrooms: 5,
//             floor: 3
//         })
//         const client23 = new Housep({
//             location: "Bangalore",
//             price: 21,
//             noOfbedrooms: 5,
//             floor: 29
//         })
//         const client24 = new Housep({
//             location: "Delhi",
//             price: 1,
//             noOfbedrooms: 1,
//             floor: 12
//         })
//         const client25 = new Housep({
//             location: "Bangalore",
//             price: 8,
//             noOfbedrooms: 8,
//             floor: 6
//         })
//         const result = await Housep.insertMany([client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12, client13, client14, client15, client16, client17, client18, client19, client20, client21, client22, client23, client24, client25])
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }
// createDocument();
//Operations in a typical pipeline

// -$match -$group  -$sort
const Agg = async () => {
    try {

        const result = await Housep.aggregate([
            { $match: { location: 'Delhi' } },
            { $sort: { price: -1 } }
        ])
        console.log(result)
    }
    catch (err) { console.log(err.message) }
}
Agg()