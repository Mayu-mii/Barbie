import React from 'react';
import '..//App.css';


const navList = [
    {
        name: 'MEDIA MATERIALS'
    },
    {
        name: 'IMAGES'
    },
    {
        name: 'VIDEOS'
    },
    {
        name: 'CONTACT US'
    },
];


class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div class="flex space-between">
            <div>
                <img src="/logo.png" class="logo" alt="" />
            </div>
            <div>
                <ul class="flex list">
                    {navList.map(function(data) {
                        return (
                            <li>{data.name} <span class="divider"> | </span></li>
                        )
                    })}
                    <li>MORE</li>
                </ul>
            </div>
            <div class="flex">
                <img class="icons" width="35" height="35" src="https://img.icons8.com/ios-filled/35/ec419b/search--v1.png" alt="search--v1"/>
                <img class="icons" width="35" height="35" src="https://img.icons8.com/glyph-neue/35/ec419b/facebook-new.png" alt="facebook-new"/>
                <img class="icons" width="35" height="35" src="https://img.icons8.com/ios-glyphs/35/ec419b/twitter.png" alt="twitter"/>
                <img class="icons" width="35" height="35" src="https://img.icons8.com/ios-filled/35/ec419b/instagram-new--v1.png" alt="instagram-new--v1"/>
                <img class="icons" width="35" height="35" src="https://img.icons8.com/ios-filled/35/ec419b/circled-play.png" alt="circled-play"/>
            </div>
        </div>
      </nav>
    );
  }
}

export default Nav;