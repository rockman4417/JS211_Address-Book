let arrayOfUsers = []
let userObject = []

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function() {
  getUsers()

}

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getUsers = () => {
    
        fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(users => userObject = users)
    
    
    
  
}

// This function logs the results in your browser's console
const consoleUsers = () => {
    for(let i = 0; i< 10; i++) {
        arrayOfUsers.push(userObject.results[i])
    }
    arrayOfUsers.sort((a, b) => a.name.last.localeCompare(b.name.last))

  console.log(userObject)
  console.log(arrayOfUsers)
  
}

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayUsers = () => {
  const allPosts = document.getElementById('all-posts')
  arrayOfUsers.map((user, index) => {
    const div = document.createElement('div')
    div.classList.add("user-div")
    let img = new Image()
    img.src = user.picture.medium
    div.id = index
    const text = document.createTextNode(`${user.name.title} ${user.name.first} ${user.name.last}`)
    const showInfoButton = document.createElement("button")
        showInfoButton.id = `show-button${index}`
        showInfoButton.classList.add('glow-on-hover')
        showInfoButton.innerHTML = "Show Info"
        showInfoButton.addEventListener('click', function() {showInfo(user, index)} )
        div.appendChild(img)
        div.appendChild(text)
    
    div.appendChild(showInfoButton)
    
    allPosts.append(div)
  })
}

const showInfo = (user, id) => {
    
    const button = document.getElementById(`show-button${id}`)
    const post = document.getElementById(id)
    const hideInfoButton = document.createElement("button")
        hideInfoButton.id = `hide-button${id}`
        hideInfoButton.classList.add('glow-on-hover')
        hideInfoButton.innerHTML = "hide Info"
        hideInfoButton.addEventListener('click', function() {hideInfo(user, id)} )
        post.appendChild(hideInfoButton)
    const div = document.createElement('div')
    div.id = `info-div${id}`
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const text = document.createTextNode(`${user.dob.date}`)
    const text2 = document.createTextNode(`${user.cell}`)
    const text3 = document.createTextNode(`${user.location.city}`)
    p.appendChild(text)
    p2.appendChild(text2)
    p3.appendChild(text3)
    div.appendChild(p)
    div.appendChild(p2)
    div.appendChild(p3)
    post.append(div)
    post.removeChild(button)
}

const hideInfo = (user, id) => {
    const post = document.getElementById(id)
    const div = document.getElementById(`info-div${id}`)
    const button = document.getElementById(`hide-button${id}`)
    const showInfoButton = document.createElement("button")
        showInfoButton.id = `show-button${id}`
        showInfoButton.classList.add('glow-on-hover')
        showInfoButton.innerHTML = "Show Info"
        showInfoButton.addEventListener('click', function() {showInfo(user, id)} )
        post.appendChild(showInfoButton)
        post.removeChild(button)
        post.removeChild(div)
}
 
