const mailList = document.getElementById("mail-list")

const apiUrl = "https://flynn.boolean.careers/exercises/api/random/mail"

for (let i = 0; i < 10; i++) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const li = document.createElement("li")
            li.textContent = data.response
            mailList.appendChild(li)

        })
}