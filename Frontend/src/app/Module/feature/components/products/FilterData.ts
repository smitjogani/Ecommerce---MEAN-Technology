export const filter = [
    {
        id: "color",
        name: "Color",
        options: [
            {value: "white", lable: "white"},
            {value: "black", lable: "black"},
            {value: "red", lable: "red"},
            {value: "pink", lable: "pink"},            
            {value: "being", lable: "being"},
            {value: "blue", lable: "blue"},
            {value: "brown", lable: "brown"},
            {value: "green", lable: "green"},
            {value: "purple", lable: "purple"},
            {value: "yellow", lable: "yellow"},
        ]
    },
    {
        id:"size",
        name: "Size",
        options:[
            {value:"S", lable:"S"},
            {value:"M", lable:"M"},
            {value:"L", lable:"L"},
        ]
    }
];

export const singleFilter = [
    {
        id:"price",
        name: "Price",
        options:[
            {value:"159-399", lable:"₹59 to ₹399"},
            {value:"399-999", lable:"₹399 to ₹999"},
            {value:"999-1999", lable:"₹999 to ₹1999"},
            {value:"1999-2999", lable:"₹1999 to ₹2999"},
            {value:"2999-4999", lable:"₹2999 to ₹4999"},            
        ]
    },
    {
        id:"discount",
        name: "Discount Range",
        options:[
            {value:"20", lable:"20% or more"},
            {value:"30", lable:"30% or more"},
            {value:"40", lable:"40% or more"},
            {value:"50", lable:"50% or more"},
            {value:"60", lable:"60% or more"},
            {value:"70", lable:"70% or more"},
            {value:"80", lable:"80% or more"},
        ]
    },
    {
        id:"stock",
        name: "Avability",
        options: [
            {value:"in_stock", lable:"Available"},
            {value:"out_of_stock", lable:"Out Of Stock"}
        ]
    }
]