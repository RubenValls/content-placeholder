const loadData = () => {
    const imgContainer = document.querySelector('.img-container');
    const textContainer = document.querySelector('.text-container');
    const userContainer = document.querySelector('.user-container');

    imgContainer.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">'
    textContainer.innerHTML = '<h1>Lorem ipsum dolor sit amet</h1><h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis</h3>'
    userContainer.innerHTML = '<div class="user-img"><img src="https://randomuser.me/api/portraits/men/29.jpg" alt=""></div><div class="user-info"><h2>John Doe</h2><h3>Sept 09, 2023</h3></div>'
}

setTimeout(loadData, 2000)