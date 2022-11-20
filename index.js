const nam=document.getElementById('name');
const email=document.getElementById('email');
const tel=document.getElementById('tel');
const btn=document.getElementById('btn');
const table=document.getElementById('table');
const error=document.querySelector('.error');


btn.addEventListener('click' ,add_item);

// Function to create Add Item

function add_item(event){
    if(nam.value!=="" && email.value!=="" && tel.value!==""){
        console.log('Btn')
        const new_tr=document.createElement('tr');
        table.appendChild(new_tr);
        const new_td1=document.createElement('td');
        new_td1.id='td1';
        const new_td2=document.createElement('td');
        new_td1.id='td2';
        const new_td3=document.createElement('td');
        new_td1.id='td3';
        const new_btn=document.createElement('button');
        new_btn.className='new-btn';
        event.preventDefault();
        new_tr.appendChild(new_td1);
        new_tr.appendChild(new_td2);
        new_tr.appendChild(new_td3);
        new_tr.appendChild(new_btn);
        new_btn.innerText='Remove'
        new_td1.innerText=nam.value;
        new_td2.innerText=email.value;
        new_td3.innerHTML=tel.value;
        nam.value="";
        email.value="";
        tel.value="";
        new_td1.style.backgroundColor="lightblue";
        new_td1.style.width="28.5%"
        new_td2.style.backgroundColor="lightblue";
        new_td3.style.backgroundColor="lightblue";
        new_btn.style.color="white";
        new_btn.style.fontSize="25px";
        new_btn.style.cursor="pointer"
        new_btn.style.width="9.8%"
    }

    // If Any Details is not present
    else{
        alert("Enter Your Detail(s)");
        // setTimeout(()=>{
        //     error.innerText="Empty Field(s)";
        // },2000);
    }
    
}

table.addEventListener("click" ,deleteItem);

function deleteItem(e){
    if(e.target.classList.contains('new-btn')){
        console.log(e);
        e.target.parentNode.remove();
    }
}