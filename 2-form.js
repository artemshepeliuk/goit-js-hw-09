import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},r="feedback-form-state",t=document.querySelector(".feedback-form");try{const a=localStorage.getItem(r);a&&Object.assign(e,JSON.parse(a))}catch(a){console.error("Error parsing saved data:",a),e.email="",e.message=""}t.email.value=e.email;t.message.value=e.message;t.addEventListener("input",a=>{if(a.target.name in e){e[a.target.name]=a.target.value.trim();const s=JSON.stringify(e);localStorage.setItem(r,s)}});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),t.reset(),localStorage.removeItem(r),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map
