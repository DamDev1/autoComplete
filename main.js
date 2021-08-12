const y = [
    "How to make autoComplete using js",
    "Dam Dev Channel",
    "javascript",
    "Html",
    "Phyton",
    "Java",
    "Swift",
    "PHP",
    "Learn Programming Languages",
    "High-Level Programming Languages",
    "Low-Level Programming Languages",
    "Channel",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

var topics = y.length;

function show(value){
    document.getElementById("datalist").innerHTML = "";

    list = value.length;

    for(let i = 0; i < topics; i++){

        if(((y[i].toLowerCase()).indexOf(value.toLowerCase())) >-1){
            var n = document.createElement("option");
            
            var v = document.createTextNode(y[i]);
            n.appendChild(v);
            
            document.getElementById("datalist").appendChild(n);
        }
    }
}
