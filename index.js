const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Name')
    .then(() => {
        console.log("Now its working....")
    })
    .catch((err) => {
        console.log(err)
    })

const nameSchema = new mongoose.Schema({
    name: String,
    roll: Number,
    hobbies: {
        type: [String],
    }
})


const Namemodel = new mongoose.model("Names", nameSchema);


// const createDocument = async () => {
//     try {
//         const n1 = new Namemodel({
//             name: "Akshata",
//             roll: 1,
//             hobbies: ["Dancing", "Playing", "listening to music"]
//         })

//         const result = await Namemodel.insertMany([n1])
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }
// createDocument();

const agg = async () => {
    try {
        const result = await Namemodel.aggregate([

            // { $unwind: "$hobbies" },

            // Lets combine the $unwind and $project
            // { $unwind: "$hobbies" },
            // { $project: { hobbies: 1 } }

            //Lets combine the $unwind and the $group
            // { $unwind: "$hobbies" },
            // { $group: { _id: "$hobbies" } }

            // Lets combine the $unwind $group and $sum
            // { $unwind: "$hobbies" },
            // { $group: { _id: "$hobbies", count: { $sum: 1 } } }

            //$type
            // { $project: { name: 1, hobbies: { $type: "$hobbies" } } }

            //$arrayElemAt
            //     {
            //         $project: {
            //             name: 1,
            //             _id: 0,
            //             ElemAt0: { $arrayElemAt: ['$hobbies', 0] },
            //             ElemAt1: { $arrayElemAt: ['$hobbies', 1] },
            //             ElemAt2: { $arrayElemAt: ['$hobbies', 2] }
            //         }
            //     }
            // ])


            //$reverseArray
            {
                $project: {
                    name: 1,
                    _id: 0,
                    Reverse: { $reverseArray: '$hobbies' }
                }
            }
        ])
        console.log(result)
    } catch (err) {
        console.log(err.message)
    }
}
agg();