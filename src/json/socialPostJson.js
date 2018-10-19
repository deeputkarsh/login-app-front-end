const postArray = [
    {
        type:"images",
        text:"this is a new text Post",
        subPost:{
            images: [
                "https://image1.jdomni.in//product/tmp/16102018/DF/65/71/FA195E5EB4183D553F878E494D_1539675143848.jpg",
                "https://image1.jdomni.in/jdomni_email/testimonial_new.jpg"/* ,
                "https://image1.jdomni.in//product/tmp/16102018/DF/65/71/FA195E5EB4183D553F878E494D_1539675143848.jpg" */
            ]
        },
        comments: [{
            userName: "Vaibhav Chaudhary",
            userImage: "https://image1.jdomni.in/jdomni_email/testimonial_new.jpg",
            text:'nice pics'
        } , {
            userName: "Ami Gami",
            userImage: "https://image1.jdomni.in/jdomni_email/testimonial_new.jpg",
            text:'nice pics'
        } , {
            userName: "Srikanth Pisharody",
            userImage: "https://image1.jdomni.in/jdomni_email/testimonial_new.jpg",
            text:'This is awesome',
            replies:[{
                userName: "Pooja Waradkar",
                userImage: "https://image1.jdomni.in/jdomni_email/testimonial_new.jpg",
                text:'Yayyy!!!'
            } , {
                userName: "Tapas Kumar",
                userImage: "https://image1.jdomni.in/jdomni_email/testimonial_new.jpg",
                text:'Sahi baat!!'
            } , {
                userName: "Himanshu Khantwal",
                userImage: "https://image1.jdomni.in/jdomni_email/testimonial_new.jpg",
                text:'Kuch bhi'
            } , {
                userName: "Utkarsh Deep",
                userImage: "https://image1.jdomni.in/jdomni_email/testimonial_new.jpg",
                text:'Sahi bola bhai @Himanshu'
            } , {
                userName: "Himanshu Khantwal",
                userImage: "https://image1.jdomni.in/jdomni_email/testimonial_new.jpg",
                text:'Bhai Bhai Bhai!!!'
            }]
        }],
        likeData : {
            like: 20,
            love: 10,
            haha: 5,
            wow: 3,
            sad: 1,
            angry: 1,
            total : 40
        },
        shareCount : 10
    } , {
        type:"products",
        text:"this is a new text Post",
        subPost:{
            products: [
                {
                    name: 'AC Repair & Services',
                    imgpath: [
                        'https://image1.jdomni.in/jdomni_email/testimonial_new.jpg'
                    ],
                    price: '250',
                    isSellOnline: true,
                    isReceiveEnquiry: false,
                    itemcode: "-112523923",
                    itemsizecode: "112523923",
                    variantid: "113108075"
                } , {
                    name: 'AC Repair & Services2',
                    imgpath: [
                        'https://image1.jdomni.in/jdomni_email/testimonial_new.jpg',
                        "https://image1.jdomni.in//product/tmp/16102018/DF/65/71/FA195E5EB4183D553F878E494D_1539675143848.jpg",
                    ],
                    price: '350',
                    isSellOnline: false,
                    isReceiveEnquiry: true,
                    itemcode: "-112523923",
                    itemsizecode: "112523923",
                    variantid: "113108075",
                    saveEnqOnModalOpen: false, //verifyNum,
                    formId: "1463309",
                } , {
                    name: 'AC Repair & Services3',
                    imgpath: [
                        'https://image1.jdomni.in/jdomni_email/testimonial_new.jpg'
                    ],
                    price: '300',
                    isSellOnline: true,
                    isReceiveEnquiry: false,
                    itemcode: "-112523923",
                    itemsizecode: "112523923",
                    variantid: "113108075"
                }
            ]
        }
    } , {
        type:"products",
        text:"this is a new text Post",
        subPost:{
            products: [
                {
                    name: 'AC Repair & Services2',
                    imgpath: [
                        'https://image1.jdomni.in/jdomni_email/testimonial_new.jpg',
                        "https://image1.jdomni.in//product/tmp/16102018/DF/65/71/FA195E5EB4183D553F878E494D_1539675143848.jpg",
                    ],
                    price: '350',
                    isSellOnline: false,
                    isReceiveEnquiry: true,
                    itemcode: "-112523923",
                    itemsizecode: "112523923",
                    variantid: "113108075",
                    saveEnqOnModalOpen: false, //verifyNum,
                    formId: "1463309",
                }
            ]
        }
    }
];

export {postArray};