import React from 'react';

function Header() {
    return (
        <div className='flex justify-between p-4 fixed top-0 w-full transition-all z-10'
            // {if the prop is dark then bg-black, if not then bg-transparent}
            style={{
                background: '#000',
            }}

        >
            <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt=""></img>
            <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""></img>
        </div>
    ) 
}

export default Header;
