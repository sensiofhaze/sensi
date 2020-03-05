//1.2
let text = "hello world!";
document.write(text, "<br>", text.split(" ").length, "<br>", text.replace(/[ !]/g,"").length, "<br>"); 
//1.5
let documentUrl = document.location.href;
let documentProtocol = document.location.protocol;
let documentFullname = document.location.pathname.split("/").pop();
let documentName = documentFullname.split(".")[0];
let documentType = documentFullname.split(".")[1];
document.write("Url: ", documentUrl, "<br> Protocol: ", documentProtocol, "<br> Filename: ", documentName, "<br> Filetype: ", documentType, "<br>");
//1.6
let ParamObject = {};
let raw = document.location.search.substring(1).split("&");
for (let i = 0; i < raw.length; i++) {
    let key = raw[i].split("=")[0]
    let value = raw[i].split("=")[1]
    ParamObject.key = value
    document.write(key, ": ", value, "<br>")
}
//2.1
let site = ["google.com","vk.com","mail.ru","rambler.ru"];
for (let i = 0; i < 4; i++) {
    let anchor = document.createElement("a")
    anchor.href = "https://" + site[i]
    anchor.innerText = " Ссылка " + i
    document.body.appendChild(anchor)
}
//2.2
for (let i = 0; i < 2; i++) {
    let refer = document.createElement("link")
    refer.rel = "stylesheet"
    refer.href = "style" + i + ".css"
    document.head.appendChild(refer)
}
document.body.appendChild(document.createElement("br"));
//2.3
let imagesrc = [
    "https://klike.net/uploads/posts/2019-03/1551516106_1.jpg",
    "https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg",
    "https://klike.net/uploads/posts/2019-03/1551512876_4.jpg"   
]
for (let i = 0; i < 3; i++) {
    let img = document.createElement("img")
    img.id = "id" + i
    img.src = imagesrc[i]
    document.body.appendChild(img)
}
document.body.appendChild(document.createElement("br"));
//2.4-5
document.write("Количество анкоров: ", document.getElementsByTagName("a").length, "<br>");
document.write("Количество ссылок: ", document.getElementsByTagName("link").length, "<br>");
//2.6
document.write("Содержимое первого анкора: ", document.getElementsByTagName("a")[0].innerHTML, "<br>");
//2.7
document.write("Количество картинок: ", document.getElementsByTagName("img").length, "<br>");
//2.8
let widthText = document.createElement("p");
document.body.appendChild(widthText);
setTimeout(function (){
    widthText.innerText = "Ширина первой картинки: " + document.getElementsByTagName("img")[0].width
}, 50);
//2.9
let MostWidthText = document.createElement("p");
document.body.appendChild(MostWidthText);
let imgs = document.getElementsByTagName("img") 
setTimeout(function (){
   let maxwidth = 0;
   for (let i=0; i < imgs.length; i++){
       if (maxwidth < imgs[i].width){
           maxwidth = imgs[i].width;
       }
   }
   MostWidthText.innerText = "Ширина самой широкой картинки: " + maxwidth;
}, 50);
//2.10
let SumHeightText = document.createElement("p");
document.body.appendChild(SumHeightText);
setTimeout(function (){
   let sumheight = 0;
   for (let i=0; i < imgs.length; i++){
      sumheight += imgs[i].height;
   }
   SumHeightText.innerText = "Сумма высот всех картинок: " + sumheight;
}, 50);
// 3.1
let forms=[]
for (let i = 0; i < 10; i++) {
    let form = document.createElement("form")
    form.id = "form" + i
    form.name = "form" + i
    forms.push(form);
    document.body.appendChild(form)
}
//3.2
let evenforms = []
for (let i = 0; i<10; i++){
    if (i % 2 == 0) {
    evenforms.push(forms[i].name)
};
}   
document.write("Все четные формы: ", evenforms.join(", "))
//3.3
let types = ["checkbox","date","color", "password","submit"]
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 3; j++){
        let field = document.createElement("input")
        field.type = types[Math.round(Math.random() * 4)]
        forms[i].appendChild(field)
    }
}
//3.4
for (let i = 0; i < 10; i++) {
    let but = document.createElement("button")
    but.classList.add("class1")
    but.onclick = function(){
        alert(but.innerText);
    }
    but.innerText = "Показать имя формы"
    forms[i].appendChild(but)
}
//3.5
for (let i = 0; i < 10; i++) {
    let but = document.createElement("button")
    but.classList.add("class2")
    but.onclick = function(){
        alert(but.parentNode.id);
    }
    but.innerText = "Принадлежность"
    forms[i].appendChild(but)
}
//3.6
for (let i = 0; i < 10; i++) {
    let but = document.createElement("input")
    but.classList.add("class3")
    but.type = "reset"
    forms[i].appendChild(but)
}
//3.7
for (let i = 0; i < 10; i++) {
    let but = document.createElement("button")
    but.classList.add("class4")
    but.onclick = function(){
        alert(but.parentNode.getElementsByTagName("input").length);
        return 0;
    }
    but.innerText = "Показать количество полей"
    forms[i].appendChild(but)
}