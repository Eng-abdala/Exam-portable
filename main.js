const form = document.querySelector("#form")
const name = document.querySelector("#name")
const password = document.querySelector("#password")
const confirm = document.querySelector("#confirm")
const btn = document.querySelector("#btn")
const p1= document.querySelector("#p1")
const sinup = document.querySelector("#sinup")
const h1 = document.querySelector("#h1")

const s_form = document.querySelector("#s_form")
const s_name = document.querySelector("#s_name")
const s_password = document.querySelector("#s_password")
const s_confirm = document.querySelector("#s_confirm")
const s_btn = document.querySelector("#s_btn")
const s_p1= document.querySelector("#s_p1")
const login = document.querySelector("#Login")



btn.addEventListener("click", (event)=>{
    event.preventDefault()
    s_p1.innerHTML = "";
    if (name.value=="" || password.value=="" || confirm.value ==""){
        alert("please fill the form")
    }

    else if (password.value.length<6){
        p1.innerHTML="Password mus contain atleast 6 characters"
        p1.style.color="red"

    }
    else if (password.value != confirm.value){
        p1.innerHTML="Passwords do not much!"
        p1.style.color="red"

    }
    else{
       sinup.style.display="none"
        login.style.display="inline"
        // saving to loclstorage
        localStorage.setItem("username",name.value);
        localStorage.setItem("l_password",password.value);
    }
    
})


// Login form
// getting stored value from locastorage


s_btn.addEventListener("click",(event)=>{
    event.preventDefault()
    s_p1.innerHTML = "";
    const l_username = localStorage.getItem("username")
    const l_password = localStorage.getItem("l_password")
    if (s_name.value ==="" || s_password.value === ""){
        s_p1.innerHTML="Fill the form!"

    }
    else if(s_name.value !== l_username ){
        s_p1.innerHTML="invalid username!"
        s_p1.style.color="red"
        
    }
  
    else if(s_password.value !== l_password ){
        s_p1.innerHTML="invalid password!"
        s_p1.style.color="red"
        
    }
    else{
        login.style.display="none"
        exam.style.display="inline"
    }


})



const exam = document.querySelector("#exam")
const submit = document.querySelector("#submit")
const resultDiv= document.querySelector("#resultDiv")
const subjects = document.querySelector("#subjects")
const result = document.querySelector("#result")

submit.addEventListener("click",()=>{

const sub = parseInt(document.querySelector("#num").value);



if (isNaN(sub) || sub <= 0) {
    alert("Please enter a valid number of subjects.");
    return;
}
    subjects.innerHTML = "";
    resultDiv.style.display="inline"
    exam.style.display="none"
    result.style.display="inline"
    


for (let i=1; i<=sub ; i++){
    const input = document.createElement("input")
    input.type="number"
    input.placeholder=`Enter subject ${i} marks`
    input.className="w-[400px] h-[35px] mb-[10px] pl-2 border-[1px] border-blue-400 rounded-md  m-[20px] "
    input.setAttribute("id", `subject-${i}`);
    input.style.width="350px"
    
    subjects.appendChild(input)

}

})

// output
const end = document.querySelector("#end")
const output1=document.querySelector("#output1")
const output2=document.querySelector("#output2")
result.addEventListener("click",()=>{
const sub = parseInt(document.querySelector("#num").value);
let total=0
let valid =true

// Adding marks
for (let i=1; i<=sub; i++){
    const marks = parseFloat(document.querySelector(`#subject-${i}`).value);

    if (isNaN(marks) || marks<0){
        alert(`Please enter valid marks for Subject ${i}.`);
        valid=false
        break;
    }
    total+=marks
}
const average = total/sub

end.style.display="inline"
output1.innerHTML=` total marks: ${total}`
output2.innerHTML=`Average: ${average}%`




})




