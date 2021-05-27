let hadiths = [
    {
        hadith: "صفائی نصف ایمان ہے۔",
        source: "محمد صلی اللہ علی وسلم -"
    },
    {
        hadith: "دنیا مومن کے لئے قید خانہ ہے اور کافر کی جنت ہے۔",
        source: "-صحیح مسلم جلد 4"
    },
    {
        hadith: "ایک دوسرے سے حسد نہ کرو۔",
        source: "صحیح مسلم-"
    },
    {
        hadith: "اپنی زبان کو اللہ کے ذکر سے تر رکھا کرو۔",
        source: "صحیح سنن الترمذی-"
    },
    {
        hadith: "مومن کے لئے بہترین سحری کا کھانا کھجور ہے۔",
        source: "صحیح سنن ابو داود-"
    },
    {
        hadith: "اعمال کا دارومدار نیتوں پر ہے۔",
        source: "صحیح بخاری"
    },
    {
        hadith: "نیکی حسن اخلاق کا نام ہے۔",
        source: "صحیح مسلم-"
    },
    {
        hadith: "نماز جنت کی کنجی ہے۔",
        source: "جامع الترمذی-"
    }
]

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let button = document.querySelector("button");

button.addEventListener("click",()=>{
   let random = Math.floor( Math.random() * hadiths.length ); 
    console.log(random);
    
    h2.innerText = hadiths[random].hadith;
    h3.innerText = hadiths[random].source;
});














