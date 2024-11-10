let count = 0;

function increment() {
    count = (count + 1) % 100; 
    document.getElementById("display").innerText = count;
    if (count >= 1 && count <= 33) {
        document.getElementById("phrase").innerText = "Subhanallah";
    } else if (count >= 34 && count <= 66) {
        document.getElementById("phrase").innerText = "Alhamdulillah";
    } else if (count >= 67 && count <= 99) {
        document.getElementById("phrase").innerText = "Allahu Akbar";
    }

}

function clearCounter() {
    count = 0;
    document.getElementById("display").innerText = count;
}
