let no_btn= document.querySelector("#No")
let yes_btn= document.querySelector("#Yes")
let container= document.querySelector(".container")

yes_btn.addEventListener("click", (e)=>{
     container.innerHTML=`
        <div class="main_content">
            <div class="first_img">
                <img src="ily.jpg" alt="">
                <div class="buttons">
                    <button id="Yes">YES</button>
                    <button id="No" style="display:none; >NO</button>
                </div>
            </div>
        </div>`
    
})



// Function to move the button to a random position
function moveNoButton() {
    // Get the container dimensions
    let container = document.querySelector(".container");
    let containerRect = container.getBoundingClientRect();

    // Calculate random positions within the container
    let randomX = Math.random() * (containerRect.width - no_btn.offsetWidth);
    let randomY = Math.random() * (containerRect.height - no_btn.offsetHeight);

    // Apply the random positions to the "NO" button
    no_btn.style.position = "absolute";
    no_btn.style.left = `${randomX}px`;
    no_btn.style.top = `${randomY}px`;
}

// Event listeners for desktop and mobile
no_btn.addEventListener("mouseover", moveNoButton); // For hover (desktop)
no_btn.addEventListener("touchstart", moveNoButton); // For touch (mobile)
