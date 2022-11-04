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
    floor: Number,
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
            //{ $match: { location: 'Delhi' } },  //stage one
            // { $match: { price: 2 } },          //stage two
            // { $match: { noOfbedrooms: 3 } },   //saage three
            // { $group: { _id: "$location" } },  //groupt by only one field
            // {$group:{_id:"$company.location.country"}}  //this one is for example that we can group by nested field also
            // { $group: { _id: "$price" } } , //group by only one field
            // { $group: { _id: { location: "$location", price: "$price", noOfbedrooms: "$noOfbedrooms" } } } //group by more than one field


            //Let's now combine $match and $group stages
            // { $match: { location: "Bangalore" } },
            // { $group: { _id: { noOfbedrooms: "$noOfbedrooms", floor: "$floor", price: "$price" } } },

            //Let's change the order that means first we will do $group and then we will do $match

            // { $group: { _id: { price: "$price", location: "$location", noOfbedrooms: "$noOfbedrooms" } } },
            // { $match: { "_id.price": { $lt: 2 } } }

            //$count : it count the number of documents that we get as a input  and in count we pass the string
            // { $count: "location" }
            //Let's now combine the $gorup and the $count stages

            // { $group: { _id: { locaion: "$location", price: "$price", floor: "$floor" } } },
            // { $count: "Count" }

            //Let's combine the $match $group and $count $match should be in the beginning
            // { $match: { location: "Delhi" } },
            // { $match: { price: { $gt: 2 } } },
            // { $group: { _id: { location: "$location" } } },
            // { $count: "Count" }

            //$sort This stage is used to sort the input documents and usually the sort stage is placed after match and group stages
            //ascendeing order =1
            // descending order =-1
            // Lets sort by location in acending order
            // { $sort: { location: -1, price: 1 } },
            // { $count: "count" }
            // { $sort: { price: -1 } }    

            // Lets now combine $group and $sort
            // { $group: { _id: { price: "$price" } } },
            // { $sort: { _id: -1 } }

            //  Lets now combine $match , $group and $sort
            // { $match: { location: "Delhi" } },
            // { $group: { _id: { price: "$price", floor: "$floor" } } },
            // { $sort: { "_id.price": 1, "_id.floor": -1 } },

            //project stage is very similar to selecte() in find()
            // here 1===>include
            //      0===>exclude
            //      expression===>the output will include the expression
            // { $project: { _id: 0, location: 1 } }

            //limit stage is just similar to the limit() in find()

            // Lets combine $limit, $match, $group,$count

            // { $limit: 2 },
            // { $match: { location: "Delhi" } },
            // { $group: { _id: { price: "$price" } } },
            // { $count: "count" }

            // $unwind stage is used to perform the aggregation operation on the array fields
            // for that you required an array 
            // just refer index.js for $unwind

            //Accumulators  are special operators $sum $add $min $max $avg
            // Most accumulators are used only in the $group stage

            // $sum Accumulator   sums numeric values for the documents in each group

            // { $group: { _id: { price: "$price" }, count: { $sum: 1 } } },

            //$avg Accumulator calculate average values of the certain values in the documents for the  each group

            // { $group: { _id: "$location", avg: { $avg: "$price" } } }
            // $add  
            // { $match: { location: 'Delhi' } },
            // { $group: { _id: '$location', Total: { $sum: { $add: ['$noOfbedrooms', '$floor'] } } } }

            // Unary Operator  : are usually used in the $project stage In the $group stage unary operation with Accumlators
            //  $type  : it will take the value of the certain field and output is BSON type
            //  $or $lt $gt $and all of this take conditions and return the true or false as a output
            // $multiply : it multiply two or more values

            // $type it returns the BSON of the field values bacically it nothing but typeof
            // { $project: { location: 1, price: { $type: "$price" }, loc: { $type: "$location" } } }

            // $out stage
            // { $group: { _id: { location: "$location" } } },
            // { $out: "output" }


        ])
        console.log(result)
    }
    catch (err) { console.log(err.message) }
}
Agg()