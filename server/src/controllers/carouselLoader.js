const Carousel = require('../models/carousel');
const carouselImages = [
    {
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2f%2FCulinary_fruits_front_view.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFruit&tbnid=pnDbLOFjmWsEVM&vet=12ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygAegUIARDfAQ..i&docid=YL15pOVr82UOFM&w=3818&h=2540&q=fruit&ved=2ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygAegUIARDfAQ",
        title: "tit1",
        subTitle: "subTit1"

    },
    {
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.healthyeating.org%2Fimages%2Fdefault-source%2Fhome-0.0%2Fnutrition-topics-2.0%2Fgeneral-nutrition-wellness%2F2-2-2-3foodgroups_fruits_detailfeature.jpg%3Fsfvrsn%3D64942d53_4&imgrefurl=https%3A%2F%2Fwww.healthyeating.org%2Fnutrition-topics%2Fgeneral%2Ffood-groups%2Ffruits&tbnid=Q4bX4WPZSyS9mM&vet=12ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ..i&docid=WBuiUqN8vNvk7M&w=1200&h=686&q=fruit&ved=2ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ",
        title: "tit2",
        subTitle: "subTit2"
    },
    {
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.healthyeating.org%2Fimages%2Fdefault-source%2Fhome-0.0%2Fnutrition-topics-2.0%2Fgeneral-nutrition-wellness%2F2-2-2-3foodgroups_fruits_detailfeature.jpg%3Fsfvrsn%3D64942d53_4&imgrefurl=https%3A%2F%2Fwww.healthyeating.org%2Fnutrition-topics%2Fgeneral%2Ffood-groups%2Ffruits&tbnid=Q4bX4WPZSyS9mM&vet=12ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ..i&docid=WBuiUqN8vNvk7M&w=1200&h=686&q=fruit&ved=2ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ",
        title: "tit3",
        subTitle: "subTit3"
    },
    {
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.healthyeating.org%2Fimages%2Fdefault-source%2Fhome-0.0%2Fnutrition-topics-2.0%2Fgeneral-nutrition-wellness%2F2-2-2-3foodgroups_fruits_detailfeature.jpg%3Fsfvrsn%3D64942d53_4&imgrefurl=https%3A%2F%2Fwww.healthyeating.org%2Fnutrition-topics%2Fgeneral%2Ffood-groups%2Ffruits&tbnid=Q4bX4WPZSyS9mM&vet=12ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ..i&docid=WBuiUqN8vNvk7M&w=1200&h=686&q=fruit&ved=2ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ",
        title: "tit4",
        subTitle: "subTit4"
    },
    {
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.healthyeating.org%2Fimages%2Fdefault-source%2Fhome-0.0%2Fnutrition-topics-2.0%2Fgeneral-nutrition-wellness%2F2-2-2-3foodgroups_fruits_detailfeature.jpg%3Fsfvrsn%3D64942d53_4&imgrefurl=https%3A%2F%2Fwww.healthyeating.org%2Fnutrition-topics%2Fgeneral%2Ffood-groups%2Ffruits&tbnid=Q4bX4WPZSyS9mM&vet=12ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ..i&docid=WBuiUqN8vNvk7M&w=1200&h=686&q=fruit&ved=2ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ",
        title: "tit5",
        subTitle: "subTit5"
    },
    {
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.healthyeating.org%2Fimages%2Fdefault-source%2Fhome-0.0%2Fnutrition-topics-2.0%2Fgeneral-nutrition-wellness%2F2-2-2-3foodgroups_fruits_detailfeature.jpg%3Fsfvrsn%3D64942d53_4&imgrefurl=https%3A%2F%2Fwww.healthyeating.org%2Fnutrition-topics%2Fgeneral%2Ffood-groups%2Ffruits&tbnid=Q4bX4WPZSyS9mM&vet=12ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ..i&docid=WBuiUqN8vNvk7M&w=1200&h=686&q=fruit&ved=2ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ",
        title: "tit6",
        subTitle: "subTit6"
    },
    {
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.healthyeating.org%2Fimages%2Fdefault-source%2Fhome-0.0%2Fnutrition-topics-2.0%2Fgeneral-nutrition-wellness%2F2-2-2-3foodgroups_fruits_detailfeature.jpg%3Fsfvrsn%3D64942d53_4&imgrefurl=https%3A%2F%2Fwww.healthyeating.org%2Fnutrition-topics%2Fgeneral%2Ffood-groups%2Ffruits&tbnid=Q4bX4WPZSyS9mM&vet=12ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ..i&docid=WBuiUqN8vNvk7M&w=1200&h=686&q=fruit&ved=2ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ",
        title: "tit7",
        subTitle: "subTit7"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSqb8L4hb9zljCAlV5WvTR42NuiTki0N9TRu7_nae&s",
        title: "tit8",
        subTitle: "subTit8"
    },
    {
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.healthyeating.org%2Fimages%2Fdefault-source%2Fhome-0.0%2Fnutrition-topics-2.0%2Fgeneral-nutrition-wellness%2F2-2-2-3foodgroups_fruits_detailfeature.jpg%3Fsfvrsn%3D64942d53_4&imgrefurl=https%3A%2F%2Fwww.healthyeating.org%2Fnutrition-topics%2Fgeneral%2Ffood-groups%2Ffruits&tbnid=Q4bX4WPZSyS9mM&vet=12ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ..i&docid=WBuiUqN8vNvk7M&w=1200&h=686&q=fruit&ved=2ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ",
        title: "tit9",
        subTitle: "subTit9"
    },
    {
        image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.healthyeating.org%2Fimages%2Fdefault-source%2Fhome-0.0%2Fnutrition-topics-2.0%2Fgeneral-nutrition-wellness%2F2-2-2-3foodgroups_fruits_detailfeature.jpg%3Fsfvrsn%3D64942d53_4&imgrefurl=https%3A%2F%2Fwww.healthyeating.org%2Fnutrition-topics%2Fgeneral%2Ffood-groups%2Ffruits&tbnid=Q4bX4WPZSyS9mM&vet=12ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ..i&docid=WBuiUqN8vNvk7M&w=1200&h=686&q=fruit&ved=2ahUKEwj1teWkybn5AhV2_jgGHZXPAxkQMygBegUIARDhAQ",
        title: "tit10",
        subTitle: "subTit10"
    }
]
 async function getImages(queryParam) {
     const maxSlides = queryParam.slides
     const result = []

     carouselImages.map((img, index) => {
         if(index < maxSlides) {
             result.push(img)
         }
     })

    return result;
}

module.exports = {
     getImages
}

