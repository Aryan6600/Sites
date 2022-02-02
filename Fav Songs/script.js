const masterBtn = document.getElementById('masterBtn')
const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')
const seekbar = document.getElementById('progress')
const soundBar = document.getElementById('sound')
const content = document.querySelector('.songs')
const sitle = document.querySelector('.sitle')
const player = new Audio('./Songs/1.mp3')
let currentIndex = 0;
let songIndex = 1;

const songs = [
    {id:1,title:"Halsey Without Me",path:"./Songs/1.mp3"},
    {id:2,title:"Alan Walker Darkside",path:"./Songs/2.mp3"},
    {id:3,title:"Ignite",path:"./Songs/3.mp3"},
    {id:4,title:"Why Do I",path:"./Songs/5.mp3"},
    {id:5,title:"Never Give Up",path:"./Songs/6.mp3"},
    {id:6,title:"Unstoppable",path:"./Songs/7.mp3"},
    {id:7,title:"Love How it Hurts",path:"./Songs/8.mp3"},
]

songs.forEach(song => {
    let songContainer = document.createElement('div')
    let songTitle = document.createElement('div')
    songTitle.className = "title item"
    songTitle.innerText = song.title
    songTitle.id = song.id
    songContainer.classList.add('song')
    songContainer.appendChild(songTitle)
    content.appendChild(songContainer)
})
document.getElementById(songIndex).classList.add('active')

const item = document.querySelectorAll('.item')

item.forEach(ele => {
    ele.addEventListener('click',() => {
        item.forEach(i => {
            i.classList.remove('active')
        })
        ele.classList.add('active')
        const songID = ele.id
        currentIndex = parseInt(songID - 1)
        songIndex = songID
        player.src = songs[currentIndex].path
        player.play()
        sitle.innerText = ele.innerText
        document.title = ele.innerText
    })
})
masterBtn.addEventListener('click',() => {
    if(!player.paused) {
        player.pause()
    }else {
        player.play()
    }
})

const handlePrev = () => {
    if(songIndex == 1 || ! songIndex > songs.length){
        currentIndex = 0
        player.src = songs[currentIndex].path
        player.play()
        songIndex = 1;
        item.forEach(i => {
            i.classList.remove('active')
        })
        document.getElementById(songIndex).classList.add('active')
        sitle.innerText = document.getElementById(songIndex).innerText
        document.title = document.getElementById(songIndex).innerText
    }else{
        item.forEach(i => {
            i.classList.remove('active')
        })
        currentIndex--
        songIndex--
        player.src = songs[currentIndex].path
        player.play()
        document.getElementById(songIndex).classList.add('active')
        sitle.innerText = document.getElementById(songIndex).innerText
        document.title = document.getElementById(songIndex).innerText
    }
}

const handleNext = () => {
    if(songIndex == songs.length || ! songIndex > songs.length){
        currentIndex = 0
        player.src = songs[currentIndex].path
        player.play()
        songIndex = 1;
        item.forEach(i => {
            i.classList.remove('active')
        })
        document.getElementById(songIndex).classList.add('active')
        sitle.innerText = document.getElementById(songIndex).innerText
        document.title = document.getElementById(songIndex).innerText
    }else{
        item.forEach(i => {
            i.classList.remove('active')
        })
        currentIndex++
        songIndex++
        player.src = songs[currentIndex].path
        player.play()
        document.getElementById(songIndex).classList.add('active')
        sitle.innerText = document.getElementById(songIndex).innerText
        document.title = document.getElementById(songIndex).innerText
    }
}

player.addEventListener('timeupdate',() => {
    const percentage = player.currentTime/player.duration * 100
    if(percentage == 100){
       handleNext()
    }
    seekbar.value = percentage
})
seekbar.onchange = () => {
    if(!player.paused) player.currentTime = seekbar.value * player.duration/100
}
sound.onchange = () => {
    player.volume = sound.value/100
    console.log(sound.value/100)
}
nextBtn.onclick = () => {
    handleNext()
}
prevBtn.onclick = () => {
    handlePrev()
}