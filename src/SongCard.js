const { imgToDataURL, autoEllipses } = require('./utils');

const ArticleCard = async (data) => {
  const thumbnailBase64 = await imgToDataURL(data.image);

  return `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="600px" height="200px" version="1.2" baseProfile="tiny" style="margin: 10px">
      <g fill="none" stroke="black" stroke-width="1" fill-rule="evenodd" stroke-linecap="square" stroke-linejoin="bevel">
      
        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="2" transform="matrix(1,0,0,1,0,0)">
        </g>
        
        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="2" transform="matrix(1,0,0,1,0,0)">
        </g>
        
        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="2" filter="url(#Blur)" transform="matrix(1,0,0,1,0,0)">
          <image x="50" y="-200" width="500" height="500" preserveAspectRatio="xMidYMid slice" xlink:href="${thumbnailBase64}"/>
        </g>

        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="2" transform="matrix(1,0,0,1,0,0)">
        <image x="0" y="0" width="150" height="150" preserveAspectRatio="xMidYMid slice" xlink:href="${thumbnailBase64}"/>
        </g>
        
        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)">
        <text fill="#000000" fill-opacity="1" stroke="none" xml:space="preserve" x="165" y="70" font-family="Inter, 'Noto Sans JP', 'Segoe UI'" font-size="20" font-weight="500" font-style="normal">${autoEllipses(data.songTitle, 35)}</text>
        </g>

        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="bevel" transform="matrix(1,0,0,1,0,0)">
        <text fill="#000000" fill-opacity="1" stroke="none" xml:space="preserve" x="165" y="95" font-family="Inter, 'Noto Sans JP', 'Segoe UI'" font-size="17" font-weight="400" font-style="normal">${data.artistName}</text>
        </g>
        
        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="2" transform="matrix(1,0,0,1,0,0)">
        </g>
        
        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="2" transform="matrix(1,0,0,1,0,0)">
        </g>
        
        <g fill="#000000" fill-opacity="1" stroke="#000000" stroke-opacity="1" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="2" transform="matrix(1,0,0,1,0,0)">
        </g>
      </g>
    </svg>
  `;
};

module.exports = ArticleCard;