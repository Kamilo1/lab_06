window.onload = function(){
     const links = ["https://0.allegroimg.com/original/0c0bb0/62d8be1e417fa124c4426c447d60",
     "https://3.allegroimg.com/original/0ceceb/74c450f34eb78e6719e1925bb113",
     "https://th.bing.com/th/id/R.8e1a26389c46a70f13f25bd88ccc1a48?rik=2JXj6owfhTBCtA&riu=http%3a%2f%2fwww.galeriaperspektywa.pl%2ftapety%2fkrajobraz_1280_1024.jpg&ehk=muJiRF2AA6opfZonG1np9HB2ZCZCqJ6gJ4TclQW0vy0%3d&risl=&pid=ImgRaw&r=0"];
      const galery = document.getElementById("galery");
      
      renderGalery();
      galery.addEventListener("click",deleteImg,true)
      const addImageButton = document.getElementById("addImage");
      addImageButton.onclick = function(){
      const url = document.forms[0].elements[0].value;
      links.push(url);
        renderGalery();
      };

    function renderGalery() {
        let i = 0;
        galery.innerHTML = "";
        for (let item of links) {
            const image = document.createElement("img");
            image.setAttribute("src", item);
            image.setAttribute("width", 300);
            image.classList.add("image");
            galery.appendChild(image);
            const button = document.createElement("button");
            button.setAttribute("type","button");
            button.setAttribute("title","Usuń");
            button.setAttribute("width",300);
            button.setAttribute("value",i);
            button.innerText = "Usuń";
            galery.appendChild(button);
            i++;
        }
    }
    function deleteImg(event){
        console.log(event.target);
     const img = event.target.value;
     links.splice(img,1);
     
     renderGalery();
    }



    const testForm = document.forms.test;
    const addAnswerButton = testForm.addAnswerButton;
    addAnswerButton.onclick = function(){
        const inputAnswer = document.createElement("input");
        inputAnswer.setAttribute("name","answer");
        inputAnswer.setAttribute("type","text");
        const isValid = document.createElement("input");
        isValid.setAttribute("name","valid");
        isValid.setAttribute("type","checkbox");
        addAnswerButton.before(isValid);
        addAnswerButton.before(inputAnswer);
    }
    const isValidForm = () =>  {
    if(testForm.answer.length > 2)
    {
        return true
    }
    else
    {   
    return false;
    }
}    
testForm.addEventListener("submit",function(e){
    if(!isValidForm()){
        e.preventDefault();
    }
});
};