import React from 'react';
import hiveLogo from './hive.png';
    
const Logo = () => {
    return (
        <div className="logo h-16 w-36 flex items-center justify-center">
            <img src={hiveLogo} alt="hiveLogo"/>
        </div>
    )
}

export default Logo;
